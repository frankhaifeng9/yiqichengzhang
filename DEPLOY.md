# 部署与安装手册

## 一、本机服务 + iPad 长期使用

### 已配置的开机自启
- `~/Library/LaunchAgents/com.yqcz.server.plist`
  开机自动在 `0.0.0.0:8000` 起 HTTP 服务，崩溃自动拉起。
- `~/Library/LaunchAgents/com.yqcz.gitsync.plist`
  每 5 分钟自动 `git pull --ff-only origin main`，保证 iPad 端看到的是最新代码。

### iPad 第一次安装
1. iPad 接入 Mac 同一个 WiFi。
2. Safari 打开：`http://192.168.1.204:8000`
3. 右上角分享按钮 → **添加到主屏幕** → 重命名为「懿起成长」。
4. 主屏幕图标即可启动，无地址栏，类似 App。

> ⚠️ **离线限制**：iOS Safari 的 Service Worker 仅在 HTTPS 或 localhost 下生效。LAN 上的 `http://` 可以正常浏览和「添加到主屏幕」，但**离线缓存不会激活**，断网或离开 WiFi 时无法使用。需要完整离线，请使用下文的公网 URL 安装。

### 常用维护命令
```bash
# 查看服务状态
launchctl list | grep yqcz

# 查看日志
tail -f ~/Library/Logs/yqcz-server.log
tail -f ~/Library/Logs/yqcz-gitsync.log

# 停止 / 启动
launchctl unload ~/Library/LaunchAgents/com.yqcz.server.plist
launchctl load -w ~/Library/LaunchAgents/com.yqcz.server.plist

# 查看 Mac 当前 IP（更换 WiFi 后 IP 可能变）
ipconfig getifaddr en0
```

---

## 二、公网部署（外地用户 + iOS PWA + APK 打包基础）

### 启用 GitHub Pages（一次性）
1. 推送当前代码到 GitHub：
   ```bash
   git add .github/workflows/pages.yml DEPLOY.md
   git commit -m "添加 Pages 自动部署与部署手册"
   git push origin main
   ```
2. 打开 https://github.com/frankhaifeng9/yiqichengzhang/settings/pages
3. **Source** 选择 **GitHub Actions**（不要选 Deploy from a branch）。
4. 等待 Actions 跑完（约 1 分钟），公网地址为：
   ```
   https://frankhaifeng9.github.io/yiqichengzhang/
   ```

之后每次 `git push origin main` 会自动重新部署，所有终端的 PWA 下次启动时通过 Service Worker 拉取新版本。

---

## 三、iOS / iPad 安装（公网 PWA，完整离线）

1. iPhone / iPad Safari 打开 `https://frankhaifeng9.github.io/yiqichengzhang/`
2. 分享按钮 → **添加到主屏幕**。
3. 首次启动联网，之后即使飞行模式也可使用（Service Worker 已缓存）。

> Apple 政策不允许免开发者账号分发 `.ipa`，因此 iOS 端**只走 PWA 路线**。体验与原生 App 几乎一致：全屏、独立图标、独立任务、离线可用。

---

## 四、Android APK 打包

推荐用 **PWABuilder**（微软出品，零本地环境）。

### 步骤
1. 浏览器打开 https://www.pwabuilder.com/
2. 输入公网 URL：`https://frankhaifeng9.github.io/yiqichengzhang/`，点击 **Start**。
3. 等待评分。`Manifest` 和 `Service Worker` 两项应该都是绿色。
4. 右上角 **Package For Stores** → 选择 **Android**。
5. **Package options** 保持默认即可，重点确认：
   - **Package ID**：建议改为 `com.yqcz.app`（一旦发布就不能再改，慎重）。
   - **Signing key**：首次选 **Create new**，PWABuilder 会生成 `signing.keystore`。
     ⚠️ **下载后妥善保存这个 keystore 和密码**，以后升级 APK 必须用同一个 key，否则用户无法覆盖安装。
6. 下载 zip，里面包含：
   - `app-release-signed.apk` ← 这是发给外地用户的文件
   - `app-release-bundle.aab`（上架 Google Play 用，可忽略）
   - `signing.keystore` + 密码文件 ← **备份起来**

### 分发给外地用户
- 直接微信 / QQ / 邮箱发 `.apk`。
- 用户在 Android 手机：
  1. 下载 `.apk`。
  2. 点击安装时若提示「未知来源」，按提示去设置里允许该应用安装。
  3. 安装完成，桌面出现「懿起成长」图标。

> **更新方式**：APK 是 TWA（Trusted Web Activity），实际内容仍从公网 URL 实时加载。所以 **`git push` 后用户下次打开 App 就是新版本**，**无需重新打包/重装 APK**。只有改图标、改包名、改启动 URL 才需要重新打 APK。

---

## 五、更新流程一句话总结

```
本地改代码 → git push frank main（同步推 origin、gitee）
        ├── GitHub Actions 自动部署到 Pages（公网用户、APK、iOS PWA 都更新）
        └── Mac 本机每 5 分钟 git pull origin main（iPad 局域网访问也更新）
```
