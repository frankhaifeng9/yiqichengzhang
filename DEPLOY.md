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

PWABuilder 现已不再自动签名（无论 Google Play 还是 Other Android 都输出 unsigned APK），需本地签名一次。**所有工具+密钥已就位**在 `~/Documents/yqcz-android-keystore/`，日常重新打包只需 4 行命令。

### 第一步：PWABuilder 生成 unsigned APK
1. 浏览器打开 https://www.pwabuilder.com/，输入 `https://frankhaifeng9.github.io/yiqichengzhang/`，点 **Start**。
2. 右上角 **Package For Stores** → 选 **Android** → 顶部切到 **Other Android** Tab。
3. **Package ID** 用 `com.yqcz.app`（一旦发布不能改），其他保持默认 → **Download Package**。
4. 解压下载的 zip，取出 `懿起成长-unsigned.apk`，放到 `~/Documents/yqcz-android-keystore/`。

### 第二步：本地签名（已配好，重复使用）
```bash
cd ~/Documents/yqcz-android-keystore
export JAVA_HOME="$HOME/Documents/yqcz-android-keystore/jdk-21.0.11+10/Contents/Home"
export PATH="$JAVA_HOME/bin:$PATH"
KS_PASS=$(cat keystore-password.txt)
java -jar uber-apk-signer.jar \
  --apks 懿起成长-unsigned.apk \
  --ks signing.keystore --ksAlias yqcz \
  --ksPass "$KS_PASS" --ksKeyPass "$KS_PASS" \
  --allowResign
mv 懿起成长-aligned-signed.apk 懿起成长.apk
```
输出 `懿起成长.apk` 即可分发。签名方案 V1+V2+V3，证书有效期到 2053。

### 本地签名目录里有什么（务必备份）
- `signing.keystore` + `keystore-password.txt` ← **丢了等于失去给老用户推送升级的能力**
- `uber-apk-signer.jar`（3.1 MB，patrickfav v1.3.0）
- `jdk-21.0.11+10/`（Adoptium Temurin 21，约 460 MB 解压后）
- `重要-请备份.txt`（记录别名、算法、过期日、重新签名命令）

建议把 `signing.keystore` + `keystore-password.txt` + `重要-请备份.txt` 复制到 iCloud / 移动硬盘 / 1Password 至少两处。

### 分发给外地用户
- 直接微信 / QQ / 邮箱发 `懿起成长.apk`。
- 用户 Android 手机：下载 → 点击安装 → 若提示「未知来源」按提示去设置允许 → 桌面出现图标。

> **更新方式**：APK 是 TWA（Trusted Web Activity），实际内容仍从公网 URL 实时加载。所以 **`git push` 后用户下次打开 App 就是新版本**，**无需重新打包/重装 APK**。只有改图标 / Package ID / 启动 URL 才需要按上面重新走一遍签名。

---

## 五、更新流程一句话总结

```
本地改代码 → git push frank main（同步推 origin、gitee）
        ├── GitHub Actions 自动部署到 Pages（公网用户、APK、iOS PWA 都更新）
        └── Mac 本机每 5 分钟 git pull origin main（iPad 局域网访问也更新）
```
