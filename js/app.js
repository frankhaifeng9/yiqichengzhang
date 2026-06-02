/* 主程序：导航 / 设置 / 持久化 / 练习流程 */
(function () {
  const STORAGE_KEY = "yqcz_state_v1";

  const defaultState = {
    profile: { name: "", gender: null, grade: null, vol: null, avatar: "" },
    prefs: {
      math: { oral: 20, app: 5 },
      english: { words: 15, sentences: 5, mode: "mix" },
      chinese: { qCount: 10 }
    },
    stats: { sessions: 0, stars: 0, days: 0, lastDate: null },
    errorBook: [],
    mastered: []
  };

  let state = load();
  let stack = [];        // 导航栈
  let session = null;    // 当前练习上下文

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return clone(defaultState);
      const obj = JSON.parse(raw);
      // 浅合并兜底
      return Object.assign(clone(defaultState), obj, {
        profile: Object.assign({}, defaultState.profile, obj.profile),
        prefs: {
          math: Object.assign({}, defaultState.prefs.math, (obj.prefs || {}).math),
          english: Object.assign({}, defaultState.prefs.english, (obj.prefs || {}).english),
          chinese: Object.assign({}, defaultState.prefs.chinese, (obj.prefs || {}).chinese)
        },
        stats: Object.assign({}, defaultState.stats, obj.stats),
        errorBook: Array.isArray(obj.errorBook) ? obj.errorBook : [],
        mastered: Array.isArray(obj.mastered) ? obj.mastered : []
      });
    } catch (e) { return clone(defaultState); }
  }
  function save() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  function clone(o) { return JSON.parse(JSON.stringify(o)); }

  /* === 屏幕切换 === */
  function go(name, push = true) {
    document.querySelectorAll(".screen").forEach(s => s.hidden = true);
    const el = document.querySelector(`.screen[data-screen="${name}"]`);
    if (el) el.hidden = false;
    if (push && stack[stack.length - 1] !== name) stack.push(name);
    document.getElementById("topbar").hidden = (name === "welcome");
    updateTopbar(name);
    if (name === "home") renderHome();
    window.scrollTo(0, 0);
  }
  function back() {
    stack.pop();
    const prev = stack[stack.length - 1] || (isProfileReady() ? "home" : "welcome");
    go(prev, false);
  }
  function updateTopbar(name) {
    const badge = document.getElementById("badgeProfile");
    if (state.profile.grade && state.profile.vol) {
      badge.textContent = `${state.profile.grade}年级 · ${state.profile.vol}册`;
    } else badge.textContent = "";
    // 首页隐藏返回按钮
    const btnBack = document.getElementById("btnBack");
    if (btnBack) btnBack.style.visibility = (name === "home") ? "hidden" : "visible";
  }

  function isProfileReady() {
    return !!(state.profile.gender && state.profile.grade && state.profile.vol);
  }

  /* === 欢迎页 === */
  let welcomeTemp = { name: "", gender: null, grade: null, vol: null };
  function initWelcome() {
    const inpName = document.getElementById("inpName");
    if (inpName) {
      inpName.addEventListener("input", e => { welcomeTemp.name = e.target.value.trim(); });
    }
    document.querySelectorAll(".gender-btn").forEach(b => b.addEventListener("click", () => {
      welcomeTemp.gender = b.dataset.gender;
      document.querySelectorAll(".gender-btn").forEach(x => x.classList.toggle("active", x === b));
    }));
    document.querySelectorAll("#gradePick .chip").forEach(b => b.addEventListener("click", () => {
      welcomeTemp.grade = +b.dataset.grade;
      document.querySelectorAll("#gradePick .chip").forEach(x => x.classList.toggle("active", x === b));
    }));
    document.querySelectorAll("#volPick .chip").forEach(b => b.addEventListener("click", () => {
      welcomeTemp.vol = b.dataset.vol;
      document.querySelectorAll("#volPick .chip").forEach(x => x.classList.toggle("active", x === b));
    }));
    document.getElementById("btnEnter").addEventListener("click", () => {
      if (!welcomeTemp.name || !welcomeTemp.name.trim()) {
        alert("请先写上小朋友的名字哦～");
        document.getElementById("inpName").focus();
        return;
      }
      if (!welcomeTemp.gender || !welcomeTemp.grade || !welcomeTemp.vol) {
        alert("请把性别、年级、册别都选好哦～");
        return;
      }
      state.profile = { ...welcomeTemp, name: welcomeTemp.name.trim() };
      save();
      goHome();
    });
    // 已经有配置就预填
    if (isProfileReady()) {
      welcomeTemp = { ...state.profile };
      if (inpName) inpName.value = state.profile.name || "";
      const gb = document.querySelector(`.gender-btn[data-gender="${state.profile.gender}"]`);
      gb && gb.classList.add("active");
      const grb = document.querySelector(`#gradePick .chip[data-grade="${state.profile.grade}"]`);
      grb && grb.classList.add("active");
      const vb = document.querySelector(`#volPick .chip[data-vol="${state.profile.vol}"]`);
      vb && vb.classList.add("active");
    }
  }

  /* === 首页 === */
  function goHome() {
    bumpDays();
    renderHome();
    stack = ["home"];
    go("home", false);
  }
  function renderHome() {
    const av = document.getElementById("avatarBig");
    const genderCls = state.profile.gender === "girl" ? "avatar-girl" : "avatar-boy";
    av.className = "avatar-big " + genderCls;
    if (state.profile.avatar) {
      av.style.backgroundImage = `url(${state.profile.avatar})`;
      av.classList.add("has-photo");
    } else {
      av.style.backgroundImage = "";
      av.classList.remove("has-photo");
    }
    const role = state.profile.gender === "girl" ? "小公主" : "小勇士";
    const name = (state.profile.name || "").trim();
    document.getElementById("hiText").textContent =
      (name ? `${name}（${role}）` : role) + "，今天好呀！";
    document.getElementById("hiSub").textContent =
      `${state.profile.grade}年级 ${state.profile.vol}册 · 一起加油吧！`;
    document.getElementById("statDays").textContent = state.stats.days || 0;
    document.getElementById("statSessions").textContent = state.stats.sessions || 0;
    document.getElementById("statStars").textContent = state.stats.stars || 0;
    updateErrorBadge();
  }
  function bumpDays() {
    const today = new Date().toISOString().slice(0, 10);
    if (state.stats.lastDate !== today) {
      state.stats.days = (state.stats.days || 0) + 1;
      state.stats.lastDate = today;
      save();
    }
  }

  /* === 章节列表 === */
  function semesterMixChapter(subject, chapters) {
    if (!chapters || !chapters.length) return null;
    if (subject === "math") {
      const apps = [];
      chapters.forEach(c => {
        (c.apps || []).forEach(a => apps.push(a));
      });
      const sample = chapters[0];
      // 注意：不再把所有 range 合并取并集，否则会把"大数的认识 [10000,999999]"
      // 和"三位数乘两位数 [×]" 叠加，混出超纲的 "999999 × 999999" 口算。
      // 实际生成口算时按 subChapters 随机挑一个原章节，保持单题难度不超出该章节本身。
      return {
        id: "mix-" + subject,
        name: "本学期 · 随机一组",
        range: sample.range || [1, 100],
        ops: sample.ops || ["+", "-"],
        apps,
        subChapters: chapters.slice(),
        _mix: true
      };
    }
    if (subject === "chinese") {
      const items = [];
      chapters.forEach(c => {
        (c.items || []).forEach(it => items.push({
          item: it,
          type: c.type,
          ctx: { poem: c.poem, text: c.text, name: c.name }
        }));
      });
      return { id: "mix-chinese", name: "本学期 · 随机一组", items, _mix: true };
    }
    if (subject === "english") {
      const words = [], sentences = [];
      chapters.forEach(c => {
        (c.words || []).forEach(w => words.push(w));
        (c.sentences || []).forEach(s => sentences.push(s));
      });
      return { id: "mix-english", name: "本学期 · 随机一组", words, sentences, _mix: true };
    }
    return null;
  }

  function goChapters(subject, cat) {
    const chapters = getChapters(subject, state.profile.grade, state.profile.vol, cat);
    let suffix = "";
    if (subject === "english") {
      const map = { jingban: ` · 京版 ${state.profile.grade}年级${state.profile.vol}册`,
                    ket: " · KET 备考", pet: " · PET 备考", daily: " · 美国常用口语" };
      suffix = map[cat || "jingban"];
    } else {
      suffix = ` · ${state.profile.grade}年级${state.profile.vol}册`;
    }
    document.getElementById("chapterTitle").textContent =
      ({ math: "数学", chinese: "语文", english: "英语" }[subject]) + suffix;

    const grid = document.getElementById("chapterGrid");
    if (chapters.length === 0) {
      grid.innerHTML = `<div class="card" style="grid-column:1/-1; text-align:center; color:var(--ink-2)">
        本年级本册内容还在准备中，先去试试其他章节～</div>`;
      go("chapter");
      return;
    }
    const allowMix = subject === "math" || subject === "chinese" || (subject === "english" && (!cat || cat === "jingban"));
    const mixCard = allowMix
      ? `<button class="chapter-card ${subject} chapter-mix" data-mix="1">
           <div class="chapter-card-no">🎲 随机</div>
           <div class="chapter-card-name">本学期 · 随机一组</div>
           <div class="chapter-card-meta">${chapterMeta(subject, semesterMixChapter(subject, chapters))}</div>
         </button>`
      : "";
    grid.innerHTML = mixCard + chapters.map((c, i) => `
      <button class="chapter-card ${subject}" data-id="${c.id}">
        <div class="chapter-card-no">第 ${i + 1} 章</div>
        <div class="chapter-card-name">${c.name}</div>
        <div class="chapter-card-meta">${chapterMeta(subject, c)}</div>
      </button>
    `).join("");
    grid.querySelectorAll(".chapter-card").forEach(b => b.addEventListener("click", () => {
      if (b.dataset.mix) {
        const mix = semesterMixChapter(subject, chapters);
        if (mix) startSession(subject, mix, cat);
        return;
      }
      const ch = chapters.find(x => x.id === b.dataset.id);
      startSession(subject, ch, cat);
    }));
    go("chapter");
  }

  function chapterMeta(subject, c) {
    if (!c) return "";
    if (subject === "math") {
      const ops = (c.ops || []).join("/");
      return `${ops} · 默认 ${state.prefs.math.oral}口算 + ${state.prefs.math.app}应用题`;
    }
    if (subject === "english") {
      return `${(c.words||[]).length}词 / ${(c.sentences||[]).length}句 · 默认 ${state.prefs.english.words}词 + ${state.prefs.english.sentences}口语`;
    }
    if (subject === "chinese") {
      if (c._mix) return `本学期混合 · 默认 ${state.prefs.chinese.qCount} 题`;
      const tp = { pinyin: "拼音", zishi: "识字", gushi: "古诗", "gushi-input": "古诗", wenyan: "文言文" }[c.type] || "语文";
      return `${tp} · 默认 ${state.prefs.chinese.qCount} 题`;
    }
    return "";
  }

  /* === 练习会话 === */
  function startSession(subject, chapter, cat) {
    let items = [];
    if (subject === "math") {
      const all = MathModule.buildSession(chapter, state.prefs.math.oral, (chapter.apps || []).length);
      const available = filterPracticeItems(all, subject);
      const oral = available.filter(x => x.type === "oral");
      const apps = available.filter(x => x.type === "app").slice(0, state.prefs.math.app);
      items = [...oral, ...apps];
    } else if (subject === "english") {
      const all = EnglishModule.buildSession(
        chapter, (chapter.words || []).length, (chapter.sentences || []).length,
        state.prefs.english.mode, state.profile.grade
      );
      const available = filterPracticeItems(all, subject);
      const words = available.filter(x => x.kind === "word").slice(0, state.prefs.english.words);
      const sentences = available.filter(x => x.kind === "sent").slice(0, state.prefs.english.sentences);
      items = [...words, ...sentences];
    } else if (subject === "chinese") {
      items = filterPracticeItems(
        ChineseModule.buildSession(chapter, (chapter.items || []).length),
        subject
      ).slice(0, state.prefs.chinese.qCount);
    } else if (subject === "errorbook") {
      items = (chapter && chapter.items) || [];
    }
    if (!items.length) {
      alert(subject === "errorbook" ? "这一章节暂无题目，请选择其他章节～" : "这一章节的新题已经练完啦，可以去错题本复习或选择其他章节～");
      return;
    }
    session = {
      subject, chapter, cat,
      items, idx: 0,
      results: [],
      startedAt: Date.now()
    };
    renderCurrent();
    go("practice");
  }

  function itemSubject(item) { return item._subject || session.subject; }

  function isPersistentPracticeItem(item, subject) {
    if (subject === "math") return item.type === "app";
    return subject === "chinese" || subject === "english";
  }

  function masterKey(item, subject) {
    return makeErrorKey(item, subject);
  }

  function isMastered(item, subject) {
    return isPersistentPracticeItem(item, subject) && (state.mastered || []).includes(masterKey(item, subject));
  }

  function markMastered(item, subject) {
    if (!isPersistentPracticeItem(item, subject)) return;
    const key = masterKey(item, subject);
    state.mastered = state.mastered || [];
    if (!state.mastered.includes(key)) state.mastered.push(key);
  }

  function isInErrorBook(item, subject) {
    if (!isPersistentPracticeItem(item, subject)) return false;
    const key = masterKey(item, subject);
    return (state.errorBook || []).some(e => e.key === key);
  }

  function filterPracticeItems(items, subject) {
    return items.filter(item => !isMastered(item, subject) && !isInErrorBook(item, subject));
  }

  function renderCurrent() {
    const item = session.items[session.idx];
    const total = session.items.length;
    const sub = itemSubject(item);
    if (sub === "math") MathModule.renderQuestion(item, session.idx, total);
    else if (sub === "english") EnglishModule.renderQuestion(item, session.idx, total);
    else if (sub === "chinese") ChineseModule.renderQuestion(item, session.idx, total);
    document.getElementById("btnSubmit").textContent = (session.idx === total - 1 ? "完成 ✓" : "提交");
  }

  function submitCurrent() {
    const item = session.items[session.idx];
    const sub = itemSubject(item);
    let res;
    if (sub === "math") res = MathModule.checkAnswer(item);
    else if (sub === "english") res = EnglishModule.checkAnswer(item);
    else res = ChineseModule.checkAnswer(item);

    if (res.reason && (!res.you || res.you === "")) {
      showFeedback(res.reason, false, res.right);
      return;
    }

    if (item.choiceMode === "choice" || (sub === "chinese" && !["gushi-input","wenyan"].includes(item.type))) {
      const correctVal = sub === "chinese" ? item.data.correct : (item.dir === "e2c" ? item.payload.zh : item.payload.en);
      document.querySelectorAll("#questionArea .opt").forEach(b => {
        const v = b.getAttribute("data-val");
        b.classList.remove("selected");
        if (v === correctVal) b.classList.add("correct");
        if (v === res.you && !res.ok) b.classList.add("wrong");
        b.disabled = true;
      });
    }

    session.results.push({ idx: session.idx, item, ...res });

    // 错题本：错题入册 / 答对的错题出册；已掌握固定题不再进入普通练习
    if (session.subject === "errorbook") {
      if (res.ok) {
        removeFromErrorBook(item, sub);
        markMastered(item, sub);
      }
    } else if (res.ok) {
      markMastered(item, sub);
    } else {
      addToErrorBook(item, res, sub);
    }

    save();
    showFeedback(res.ok ? "答对啦！👍" : (res.reason || "再加油哦～"), res.ok, res.right);
    setTimeout(() => {
      if (session.idx < session.items.length - 1) {
        session.idx++;
        renderCurrent();
      } else {
        finishSession();
      }
    }, res.ok ? 700 : 1400);
  }

  /* === 错题本 === */
  function makeErrorKey(item, subject) {
    if (subject === "math") {
      if (item.type === "oral") return "m:o:" + item.text;
      return "m:a:" + item.text;
    }
    if (subject === "english") {
      const en = item.payload && item.payload.en || "";
      return "e:" + (item.kind||"") + ":" + (item.dir||"") + ":" + en;
    }
    if (subject === "chinese") {
      const ctxName = item.ctx && item.ctx.name || "";
      const q = item.data && item.data.q || "";
      return "c:" + (item.type||"") + ":" + ctxName + ":" + q;
    }
    return "x:" + Math.random().toString(36).slice(2, 10);
  }

  function addToErrorBook(item, res, subject) {
    const key = makeErrorKey(item, subject);
    const existing = state.errorBook.find(e => e.key === key);
    if (existing) {
      existing.tries = (existing.tries || 0) + 1;
      existing.lastSeen = Date.now();
    } else {
      state.errorBook.push({
        key, subject,
        item: clone(item),
        right: res.right,
        tries: 1,
        addedAt: Date.now(),
        lastSeen: Date.now()
      });
    }
    save();
    updateErrorBadge();
  }

  function removeFromErrorBook(item, subject) {
    const key = makeErrorKey(item, subject);
    const before = state.errorBook.length;
    state.errorBook = state.errorBook.filter(e => e.key !== key);
    if (state.errorBook.length !== before) save();
    updateErrorBadge();
  }

  function updateErrorBadge() {
    const cnt = document.getElementById("ebHomeCount");
    if (cnt) cnt.textContent = String(state.errorBook.length || 0);
  }

  let ebFilter = "all";
  function openErrorBook() {
    ebFilter = "all";
    renderErrorBook();
    go("errorbook");
  }

  function renderErrorBook() {
    document.querySelectorAll(".eb-tab").forEach(b => b.classList.toggle("active", b.dataset.eb === ebFilter));
    const all = state.errorBook || [];
    const totals = { all: all.length, math: 0, chinese: 0, english: 0 };
    all.forEach(e => { totals[e.subject] = (totals[e.subject] || 0) + 1; });
    document.getElementById("ebStats").textContent =
      all.length
        ? `共 ${all.length} 道错题　·　数学 ${totals.math||0} ｜ 语文 ${totals.chinese||0} ｜ 英语 ${totals.english||0}`
        : "还没有错题哦～";
    const filtered = ebFilter === "all" ? all : all.filter(e => e.subject === ebFilter);
    const list = document.getElementById("ebList");
    if (!filtered.length) {
      list.innerHTML = `<div class="eb-empty">这一类还没有错题</div>`;
      return;
    }
    list.innerHTML = filtered.map(e => {
      const q = describeQuestion(e.item);
      const subName = { math: "数学", chinese: "语文", english: "英语" }[e.subject];
      return `<div class="eb-item">
        <span class="eb-subject ${e.subject}">${subName}</span>
        <span class="eb-q">${escapeHtml(q)}</span>
        <div class="eb-ans">正确答案：<b>${escapeHtml(String(e.right))}</b>　·　已练 ${e.tries||1} 次</div>
      </div>`;
    }).join("");
  }

  function startErrorBookPractice() {
    const all = state.errorBook || [];
    const filtered = ebFilter === "all" ? all : all.filter(e => e.subject === ebFilter);
    if (!filtered.length) { alert("这一类还没有错题呢～"); return; }
    // 取出来作为 items，给每条贴上 _subject 用于派发
    const items = filtered.slice(0, 30).map(e => Object.assign(clone(e.item), { _subject: e.subject, _ebKey: e.key }));
    startSession("errorbook", { id: "eb", name: "错题练习", items });
  }

  function showFeedback(msg, ok, right) {
    const fb = document.getElementById("fb");
    if (!fb) return;
    fb.innerHTML = `<div class="feedback ${ok ? "ok" : "no"}">${msg}${right && !ok ? `<span class="ref">正确答案：${escapeHtml(right)}</span>` : ""}</div>`;
  }

  function skipCurrent() {
    const item = session.items[session.idx];
    let right;
    if (session.subject === "math") right = (item.type === "oral" ? String(item.answer) : `${item.expr} = ${item.answer}`);
    else if (session.subject === "english") right = item.dir === "e2c" ? item.payload.zh : item.payload.en;
    else right = item.data.answer || item.data.correct;
    session.results.push({ idx: session.idx, item, ok: false, you: "(跳过)", right });
    if (session.subject !== "errorbook") addToErrorBook(item, { right }, itemSubject(item));
    if (session.idx < session.items.length - 1) {
      session.idx++;
      renderCurrent();
    } else {
      finishSession();
    }
  }

  function finishSession() {
    const correct = session.results.filter(r => r.ok).length;
    const wrong = session.results.length - correct;
    const rate = Math.round(correct / session.results.length * 100);
    const seconds = Math.round((Date.now() - session.startedAt) / 1000);

    document.getElementById("resCorrect").textContent = correct;
    document.getElementById("resWrong").textContent = wrong;
    document.getElementById("resRate").textContent = rate + "%";
    document.getElementById("resTime").textContent = seconds + " 秒";

    const hero = document.getElementById("resultHero");
    const stars = rate >= 90 ? 3 : rate >= 70 ? 2 : rate >= 50 ? 1 : 0;
    const emoji = stars === 3 ? "🌟🌟🌟" : stars === 2 ? "🌟🌟" : stars === 1 ? "🌟" : "💪";
    const headline = stars === 3 ? "太棒啦！" : stars === 2 ? "做得不错！" : stars === 1 ? "继续加油！" : "再练一组吧！";
    hero.innerHTML = `<div class="result-emoji">${emoji}</div><div class="result-headline">${headline}</div><div class="result-sub">你完成了 ${session.results.length} 道题，正确率 ${rate}%</div>`;

    // 错题
    const wrongs = session.results.filter(r => !r.ok);
    const reviewCard = document.getElementById("reviewCard");
    const reviewList = document.getElementById("reviewList");
    if (wrongs.length === 0) {
      reviewCard.style.display = "none";
    } else {
      reviewCard.style.display = "";
      const isEng = session.subject === "english";
      reviewList.innerHTML = wrongs.map(w => {
        const enText = isEng && w.item.payload ? w.item.payload.en : null;
        const enQ = enText
          ? ` <button class="speaker-btn speaker-sm" data-speak="${escapeHtml(enText)}" title="发音">🔊</button>`
          : "";
        const rightSpk = isEng && w.item.payload && w.item.dir === "c2e"
          ? ` <button class="speaker-btn speaker-sm" data-speak="${escapeHtml(w.item.payload.en)}" title="发音">🔊</button>`
          : "";
        return `
          <div class="review-item">
            <div class="q">${escapeHtml(describeQuestion(w.item))}${enQ}</div>
            <div>你的答案：<span class="ans-you">${escapeHtml(w.you || "(空)")}</span></div>
            <div>正确答案：<span class="ans-right">${escapeHtml(String(w.right || ""))}</span>${rightSpk}</div>
          </div>
        `;
      }).join("");
      reviewList.querySelectorAll(".speaker-btn").forEach(b => {
        b.addEventListener("click", () => EnglishModule.speakEn(b.getAttribute("data-speak")));
      });
    }

    // 更新统计
    state.stats.sessions = (state.stats.sessions || 0) + 1;
    state.stats.stars = (state.stats.stars || 0) + stars;
    save();

    // 结果页：替换练习页在栈中的位置，返回上一页等于回到章节列表
    stack = stack.filter(s => s !== "practice" && s !== "result");
    stack.push("result");
    go("result", false);
  }

  function describeQuestion(item) {
    if (!item) return "";
    // math
    if (item.type === "oral") return item.text + "?";
    if (item.type === "app") return item.text;
    // chinese
    if (item.data && item.data.q) return item.data.q;
    // english
    if (item.payload) {
      const prompt = item.dir === "e2c" ? item.payload.en : item.payload.zh;
      return prompt;
    }
    return "";
  }

  function escapeHtml(s) { return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c])); }

  /* === 设置（草稿模式，需点确认才生效） === */
  let settingsDraft = null;

  function openSettings() {
    // 进入设置：把当前状态克隆为草稿
    settingsDraft = clone({ profile: state.profile, prefs: state.prefs });
    syncSettingsUI();
    go("settings");
  }

  function syncSettingsUI() {
    const d = settingsDraft;
    const nameSet = document.getElementById("inpNameSet");
    if (nameSet) nameSet.value = d.profile.name || "";
    document.querySelectorAll("#segGender button").forEach(b => b.classList.toggle("active", b.dataset.val === d.profile.gender));
    document.getElementById("selGrade").value = d.profile.grade || 1;
    document.querySelectorAll("#segVol button").forEach(b => b.classList.toggle("active", b.dataset.val === d.profile.vol));
    document.getElementById("numMathOral").value = d.prefs.math.oral;
    document.getElementById("numMathApp").value = d.prefs.math.app;
    document.getElementById("numEngWord").value = d.prefs.english.words;
    document.getElementById("numEngSent").value = d.prefs.english.sentences;
    document.getElementById("selEngMode").value = d.prefs.english.mode;
    document.getElementById("numChineseQ").value = d.prefs.chinese.qCount;
    renderAvatarPreview();
  }

  function renderAvatarPreview() {
    const el = document.getElementById("avatarPreview");
    if (!el || !settingsDraft) return;
    if (settingsDraft.profile.avatar) {
      el.style.backgroundImage = `url(${settingsDraft.profile.avatar})`;
      el.classList.remove("is-empty");
    } else {
      el.style.backgroundImage = "";
      el.classList.add("is-empty");
    }
  }

  // 压缩到 256x256 以内、JPEG 质量 0.85，控制 localStorage 占用
  function resizeImageToDataURL(file, maxSize = 256) {
    return new Promise((resolve, reject) => {
      if (!file.type || !file.type.startsWith("image/")) {
        reject(new Error("请选择图片文件"));
        return;
      }
      if (file.size > 8 * 1024 * 1024) {
        reject(new Error("图片太大啦，请选小于 8MB 的图片"));
        return;
      }
      const reader = new FileReader();
      reader.onerror = () => reject(new Error("读取失败"));
      reader.onload = e => {
        const img = new Image();
        img.onerror = () => reject(new Error("图片解析失败"));
        img.onload = () => {
          let w = img.naturalWidth, h = img.naturalHeight;
          if (!w || !h) { reject(new Error("无效图片")); return; }
          const ratio = Math.min(maxSize / w, maxSize / h, 1);
          w = Math.round(w * ratio); h = Math.round(h * ratio);
          const canvas = document.createElement("canvas");
          canvas.width = w; canvas.height = h;
          const ctx = canvas.getContext("2d");
          ctx.fillStyle = "#ffffff";
          ctx.fillRect(0, 0, w, h);
          ctx.drawImage(img, 0, 0, w, h);
          try {
            resolve(canvas.toDataURL("image/jpeg", 0.85));
          } catch (err) { reject(err); }
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    });
  }

  function bindSettings() {
    const nameSet = document.getElementById("inpNameSet");
    if (nameSet) {
      nameSet.addEventListener("input", () => {
        if (settingsDraft) settingsDraft.profile.name = (nameSet.value || "").trim();
      });
    }
    document.querySelectorAll("#segGender button").forEach(b => b.addEventListener("click", () => {
      if (!settingsDraft) return;
      settingsDraft.profile.gender = b.dataset.val;
      document.querySelectorAll("#segGender button").forEach(x => x.classList.toggle("active", x === b));
    }));
    document.querySelectorAll("#segVol button").forEach(b => b.addEventListener("click", () => {
      if (!settingsDraft) return;
      settingsDraft.profile.vol = b.dataset.val;
      document.querySelectorAll("#segVol button").forEach(x => x.classList.toggle("active", x === b));
    }));
    document.getElementById("selGrade").addEventListener("change", e => {
      if (settingsDraft) settingsDraft.profile.grade = +e.target.value;
    });

    const num = (id, path, min = 0, max = 100) => {
      document.getElementById(id).addEventListener("change", e => {
        let v = parseInt(e.target.value || "0", 10);
        if (isNaN(v) || v < min) v = min;
        if (v > max) v = max;
        e.target.value = v;
        if (!settingsDraft) return;
        const parts = path.split(".");
        let o = settingsDraft.prefs;
        for (let i = 0; i < parts.length - 1; i++) o = o[parts[i]];
        o[parts[parts.length - 1]] = v;
      });
    };
    num("numMathOral", "math.oral", 1, 100);
    num("numMathApp", "math.app", 0, 50);
    num("numEngWord", "english.words", 1, 100);
    num("numEngSent", "english.sentences", 0, 50);
    num("numChineseQ", "chinese.qCount", 1, 50);
    document.getElementById("selEngMode").addEventListener("change", e => {
      if (settingsDraft) settingsDraft.prefs.english.mode = e.target.value;
    });

    // 头像上传/移除（写入草稿，确认后才生效）
    const fileInp = document.getElementById("fileAvatar");
    const btnUp = document.getElementById("btnUploadAvatar");
    const btnRm = document.getElementById("btnRemoveAvatar");
    if (btnUp && fileInp) {
      btnUp.addEventListener("click", () => fileInp.click());
      fileInp.addEventListener("change", async (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        try {
          const dataUrl = await resizeImageToDataURL(file, 256);
          if (!settingsDraft) return;
          settingsDraft.profile.avatar = dataUrl;
          renderAvatarPreview();
        } catch (err) {
          alert(err && err.message ? err.message : "上传失败");
        } finally {
          e.target.value = "";  // 允许再次选择同一文件
        }
      });
    }
    if (btnRm) {
      btnRm.addEventListener("click", () => {
        if (!settingsDraft) return;
        settingsDraft.profile.avatar = "";
        renderAvatarPreview();
      });
    }

    document.getElementById("btnReset").addEventListener("click", () => {
      if (confirm("清空所有学习记录和设置？此操作不可恢复哦。")) {
        localStorage.removeItem(STORAGE_KEY);
        state = clone(defaultState);
        settingsDraft = null;
        stack = [];
        go("welcome", true);
      }
    });

    document.getElementById("btnSettingsConfirm").addEventListener("click", () => {
      if (!settingsDraft) { back(); return; }
      const d = settingsDraft;
      if (!d.profile.name || !d.profile.name.trim()) {
        alert("请先填写名字");
        document.getElementById("inpNameSet").focus();
        return;
      }
      if (!d.profile.gender) { alert("请选择性别"); return; }
      if (!d.profile.grade) { alert("请选择年级"); return; }
      if (!d.profile.vol) { alert("请选择册别"); return; }
      // 写回
      state.profile = clone(d.profile);
      state.prefs = clone(d.prefs);
      save();
      settingsDraft = null;
      // 返回上一页（一般为首页），并刷新
      const prev = stack[stack.length - 2] || "home";
      stack = stack.filter(s => s !== "settings");
      go(prev, false);
    });

    document.getElementById("btnSettingsCancel").addEventListener("click", () => {
      settingsDraft = null;
      back();
    });
  }

  /* === 入口绑定 === */
  function bindGlobal() {
    document.getElementById("btnBack").addEventListener("click", back);
    document.getElementById("btnSettings").addEventListener("click", openSettings);
    document.querySelectorAll(".subject-card").forEach(b => b.addEventListener("click", () => {
      const target = b.dataset.go;
      if (target === "plan") { openPlan(); return; }
      if (target === "errorbook") { openErrorBook(); return; }
      if (target === "english") { go("english-cat"); return; }
      goChapters(target);
    }));
    document.querySelectorAll(".cat-card").forEach(b => b.addEventListener("click", () => {
      goChapters("english", b.dataset.cat);
    }));
    document.querySelectorAll(".eb-tab").forEach(b => b.addEventListener("click", () => {
      ebFilter = b.dataset.eb;
      renderErrorBook();
    }));
    const ebP = document.getElementById("ebPractice");
    if (ebP) ebP.addEventListener("click", startErrorBookPractice);
    const ebC = document.getElementById("ebClear");
    if (ebC) ebC.addEventListener("click", () => {
      if ((state.errorBook || []).length === 0) { alert("错题本已经是空的啦～"); return; }
      if (confirm("清空错题本？此操作不可恢复哦。")) {
        state.errorBook = [];
        save();
        renderErrorBook();
        updateErrorBadge();
      }
    });
    document.getElementById("btnSubmit").addEventListener("click", submitCurrent);
    document.getElementById("btnSkip").addEventListener("click", skipCurrent);
    document.getElementById("btnAgain").addEventListener("click", () => {
      if (!session) { goHome(); return; }
      if (session.subject === "errorbook") { startErrorBookPractice(); return; }
      startSession(session.subject, session.chapter, session.cat);
    });
    document.getElementById("btnHome").addEventListener("click", goHome);

    // 回车提交
    document.addEventListener("keydown", (e) => {
      if (e.key !== "Enter") return;
      const practice = document.querySelector(".screen[data-screen='practice']");
      if (!practice || practice.hidden) return;
      // 应用题：列式 -> 答案 -> 提交
      const expr = document.getElementById("appExpr");
      const ans = document.getElementById("appAns");
      if (expr && document.activeElement === expr) { ans && ans.focus(); e.preventDefault(); return; }
      submitCurrent();
      e.preventDefault();
    });
  }

  /* === 学习计划入口 === */
  function openPlan() {
    PlanModule.ensure(state);
    save();
    PlanModule.renderAll();
    go("plan");
  }

  /* === 启动 === */
  document.addEventListener("DOMContentLoaded", () => {
    initWelcome();
    bindSettings();
    bindGlobal();
    PlanModule.init(state, save);
    if (isProfileReady()) {
      goHome();
    } else {
      go("welcome", true);
    }
  });
})();
