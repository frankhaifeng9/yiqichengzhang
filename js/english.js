/* 英语模块：单词 + 口语，英译汉/汉译英/混合，1-3 四选一，4-6 输入 */
const EnglishModule = (() => {

  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  function shuffle(arr) { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

  /* === 标准发音 === */
  // 在线 MP3 优先级：百度 fanyi → 有道 dictvoice → 系统 speechSynthesis。
  // 关键原因：
  //   1. 有道 dictvoice 对单词稳定，但对句子（即"口语"题）会返回 500 "returned null audio"，
  //      于是国行 Android（无英文 TTS 包）就完全静音 → 必须换长句友好源。
  //   2. 百度翻译 gettts 对单词和长句都返回 audio/mpeg，且能跨域作为媒体资源播放。
  let _enAudio = null;
  function tryAudio(url, timeoutMs) {
    return new Promise((resolve, reject) => {
      try {
        if (!_enAudio) {
          _enAudio = new Audio();
          _enAudio.preload = "auto";
        } else {
          try { _enAudio.pause(); } catch (_) {}
        }
        _enAudio.src = url;
        let settled = false;
        const fin = (ok, err) => { if (settled) return; settled = true; ok ? resolve() : reject(err); };
        _enAudio.onerror = () => fin(false, new Error("audio error"));
        const p = _enAudio.play();
        if (p && typeof p.then === "function") {
          p.then(() => fin(true)).catch(e => fin(false, e));
        } else {
          fin(true);
        }
        setTimeout(() => fin(false, new Error("audio timeout")), timeoutMs || 2500);
      } catch (e) { reject(e); }
    });
  }
  function playEnAudio(text) {
    if (!text) return Promise.reject(new Error("empty"));
    const baiduUrl = "https://fanyi.baidu.com/gettts?lan=en&spd=3&source=web&text=" + encodeURIComponent(text);
    const youdaoUrl = "https://dict.youdao.com/dictvoice?type=2&audio=" + encodeURIComponent(text);
    return tryAudio(baiduUrl, 3500).catch(() => tryAudio(youdaoUrl, 2500));
  }

  let _enVoice = null;
  function pickEnVoice() {
    if (!("speechSynthesis" in window)) return null;
    const list = window.speechSynthesis.getVoices() || [];
    let v = list.find(x => /en[-_]US/i.test(x.lang) && /female|samantha|victoria|allison|ava|joanna/i.test(x.name));
    if (!v) v = list.find(x => /en[-_]US/i.test(x.lang));
    if (!v) v = list.find(x => /en[-_]GB/i.test(x.lang));
    if (!v) v = list.find(x => /^en/i.test(x.lang));
    return v || null;
  }
  if ("speechSynthesis" in window) {
    window.speechSynthesis.onvoiceschanged = () => { _enVoice = pickEnVoice(); };
  }
  function speakBySystem(text, rate) {
    try {
      if (!("speechSynthesis" in window) || !text) return;
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(String(text));
      u.lang = "en-US";
      u.rate = rate || 0.9;     // 适合小学生
      u.pitch = 1.0;
      u.volume = 1.0;
      if (!_enVoice) _enVoice = pickEnVoice();
      if (_enVoice) u.voice = _enVoice;
      window.speechSynthesis.speak(u);
    } catch (e) { /* 静默 */ }
  }
  function speakEn(text, rate) {
    if (!text) return;
    playEnAudio(text).catch(() => speakBySystem(text, rate));
  }
  function speakerHtml(text, size) {
    const cls = size === "sm" ? "speaker-btn speaker-sm" : "speaker-btn";
    return `<button type="button" class="${cls}" data-speak="${escapeHtml(text)}" title="点击发音" aria-label="发音">🔊</button>`;
  }

  // 收集所有单词/口语，作为干扰项备用池
  function collectAll() {
    const allWords = [], allSents = [];
    Object.keys(DATA.english).forEach(k => {
      (DATA.english[k] || []).forEach(ch => {
        (ch.words || []).forEach(w => allWords.push(w));
        (ch.sentences || []).forEach(s => allSents.push(s));
      });
    });
    return { allWords, allSents };
  }

  // 准备一组题
  function buildSession(chapter, wordCount, sentCount, mode /* e2c|c2e|mix */, grade) {
    const wordPool = shuffle((chapter.words || []).slice()).slice(0, wordCount);
    const sentPool = shuffle((chapter.sentences || []).slice()).slice(0, sentCount);
    const choiceMode = grade <= 3 ? "choice" : "input";
    const items = [];

    wordPool.forEach(w => items.push(makeItem(w, "word", mode, choiceMode)));
    sentPool.forEach(s => items.push(makeItem(s, "sent", mode, choiceMode)));

    return items;
  }

  function makeItem(payload, kind, mode, choiceMode) {
    const dir = mode === "mix" ? pick(["e2c", "c2e"]) : mode;
    const item = { kind, dir, choiceMode, payload };
    if (choiceMode === "choice") {
      item.options = buildOptions(payload, kind, dir);
    }
    return item;
  }

  function buildOptions(payload, kind, dir) {
    const { allWords, allSents } = collectAll();
    const pool = kind === "word" ? allWords : allSents;
    const correct = dir === "e2c" ? payload.zh : payload.en;
    const distractors = [];
    const used = new Set([correct]);
    const shuffled = shuffle(pool);
    for (const p of shuffled) {
      const v = dir === "e2c" ? p.zh : p.en;
      if (!used.has(v)) { used.add(v); distractors.push(v); }
      if (distractors.length >= 3) break;
    }
    // 万一池子太小，用占位
    while (distractors.length < 3) distractors.push("—");
    return shuffle([correct, ...distractors]);
  }

  function renderQuestion(item, idx, total) {
    const area = document.getElementById("questionArea");
    document.getElementById("progressFill").style.width = ((idx) / total * 100) + "%";
    document.getElementById("progressText").textContent = (idx + 1) + " / " + total;
    document.getElementById("practiceTitle").textContent =
      (item.kind === "word" ? "单词" : "口语") + " · " +
      (item.dir === "e2c" ? "英译汉" : "汉译英");

    const prompt = item.dir === "e2c" ? item.payload.en : item.payload.zh;
    const tagText = (item.kind === "word" ? "单词" : "口语") + " " + (idx + 1);
    // e2c：题目本身就是英文，喇叭随题面显示
    // c2e + 口语：题面是中文，但仍允许"听一听英文原句"（口语题首要目标是学读音，不是猜词）
    //          单词的 c2e 仍隐藏喇叭，避免漏答案。
    const promptSpeaker = item.dir === "e2c" ? speakerHtml(item.payload.en) : "";
    const listenHint = (item.dir === "c2e" && item.kind === "sent")
      ? `<div class="listen-hint">${speakerHtml(item.payload.en)}<span class="listen-hint-text">听一听标准读音</span></div>`
      : "";

    if (item.choiceMode === "choice") {
      const opts = item.options.map((o, i) => {
        // 汉译英时选项是英文，提交后再放小喇叭（先不显示，避免提示答案）
        return `
        <button class="opt" data-val="${escapeHtml(o)}">
          <span class="opt-label">${"ABCD"[i]}</span><span class="opt-text">${escapeHtml(o)}</span>
        </button>`;
      }).join("");
      area.innerHTML = `
        <div class="q-tag">${tagText}</div>
        <div class="q-prompt">${item.dir === "e2c" ? "请选择正确的中文意思" : "请选择正确的英文表达"}</div>
        <div class="q-text ${item.kind === "word" ? "huge" : "large"}">${escapeHtml(prompt)}${promptSpeaker}</div>
        ${listenHint}
        <div class="options">${opts}</div>
        <div id="fb"></div>
      `;
      area.querySelectorAll(".opt").forEach(btn => {
        btn.addEventListener("click", () => {
          area.querySelectorAll(".opt").forEach(b => b.classList.remove("selected"));
          btn.classList.add("selected");
        });
      });
    } else {
      area.innerHTML = `
        <div class="q-tag">${tagText}</div>
        <div class="q-prompt">${item.dir === "e2c" ? "请翻译成中文" : "请翻译成英文"}</div>
        <div class="q-text ${item.kind === "word" ? "large" : ""}">${escapeHtml(prompt)}${promptSpeaker}</div>
        ${listenHint}
        <div class="input-row">
          <input type="text" class="input-box" id="engAns" placeholder="${item.dir === "e2c" ? "输入中文翻译" : "type your answer"}" autocomplete="off" autocapitalize="off" autocorrect="off">
        </div>
        <div id="fb"></div>
      `;
      setTimeout(() => document.getElementById("engAns").focus(), 50);
    }

    // 绑定喇叭按钮
    area.querySelectorAll(".speaker-btn").forEach(b => {
      b.addEventListener("click", (e) => {
        e.preventDefault(); e.stopPropagation();
        speakEn(b.getAttribute("data-speak"));
      });
    });
    // 英译汉：自动朗读一次提示
    if (item.dir === "e2c") {
      setTimeout(() => speakEn(item.payload.en), 250);
    }
  }

  function escapeHtml(s) { return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c])); }

  function normalize(s, lang) {
    s = String(s || "").trim();
    if (lang === "en") {
      return s.toLowerCase().replace(/[.,!?;:'"]/g, "").replace(/\s+/g, " ");
    }
    return s.replace(/[。，！？、""'']/g, "").replace(/\s+/g, "");
  }

  function checkAnswer(item) {
    const right = item.dir === "e2c" ? item.payload.zh : item.payload.en;
    let result;
    if (item.choiceMode === "choice") {
      const selected = document.querySelector("#questionArea .opt.selected");
      if (!selected) return { ok: false, reason: "请选择一个答案", right };
      const v = selected.getAttribute("data-val");
      result = { ok: v === right, you: v, right };
    } else {
      const v = document.getElementById("engAns").value.trim();
      if (v === "") return { ok: false, reason: "请填写答案", right };
      const lang = item.dir === "e2c" ? "zh" : "en";
      result = { ok: normalize(v, lang) === normalize(right, lang), you: v, right };
    }
    // 提交时朗读标准英文：让小朋友听到正确读音
    setTimeout(() => speakEn(item.payload.en), 80);
    return result;
  }

  return { buildSession, renderQuestion, checkAnswer, speakEn };
})();
