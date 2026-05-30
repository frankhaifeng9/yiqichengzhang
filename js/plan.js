/* 学习任务单 + 番茄钟模块 */
const PlanModule = (() => {

  const ROWS = 10;
  let state = null;        // 由 app.js 传入
  let saveFn = null;
  let onChangeFn = null;

  const pomo = {
    mode: "study",         // study | short | long
    remaining: 25 * 60,    // 剩余秒
    total: 25 * 60,        // 当前模式总秒
    running: false,
    intervalId: null,
    taskIdx: null,         // 当前关联的任务索引
    sessionsDone: 0        // 完成的学习节数（每 4 节 → 长休提示）
  };

  function defaults() {
    return {
      tasks: Array.from({ length: ROWS }, (_, i) => ({
        id: i + 1, name: "", estMin: 25, done: false
      })),
      pomo: { study: 25, short: 5, long: 15 }
    };
  }

  function ensure(stateRoot) {
    if (!stateRoot.plan) stateRoot.plan = defaults();
    // 补齐到 10 行
    if (!Array.isArray(stateRoot.plan.tasks)) stateRoot.plan.tasks = [];
    while (stateRoot.plan.tasks.length < ROWS) {
      stateRoot.plan.tasks.push({ id: stateRoot.plan.tasks.length + 1, name: "", estMin: 25, done: false });
    }
    stateRoot.plan.tasks = stateRoot.plan.tasks.slice(0, ROWS).map((t, i) => ({
      id: i + 1,
      name: typeof t.name === "string" ? t.name : "",
      estMin: Number(t.estMin) > 0 ? Number(t.estMin) : 25,
      done: !!t.done
    }));
    if (!stateRoot.plan.pomo) stateRoot.plan.pomo = { study: 25, short: 5, long: 15 };
    return stateRoot.plan;
  }

  function init(stateRoot, save, onChange) {
    state = stateRoot;
    saveFn = save;
    onChangeFn = onChange;
    ensure(state);
    bindControls();
    setMode("study", true);
  }

  function fmt(sec) {
    sec = Math.max(0, Math.floor(sec));
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
  }

  function renderTime() {
    const el = document.getElementById("pomoTime");
    if (!el) return;
    el.textContent = fmt(pomo.remaining);
    el.classList.toggle("running", pomo.running);
    el.classList.toggle("paused", !pomo.running && pomo.remaining < pomo.total);
    el.classList.toggle("done", pomo.remaining === 0);

    const start = document.getElementById("pomoStart");
    const pause = document.getElementById("pomoPause");
    if (start && pause) {
      start.style.display = pomo.running ? "none" : "";
      pause.style.display = pomo.running ? "" : "none";
    }
    const stateEl = document.getElementById("pomoState");
    if (stateEl) {
      stateEl.textContent =
        pomo.remaining === 0 ? "🎉 完成！" :
        pomo.running ? (pomo.mode === "study" ? "学习中…" :
                        pomo.mode === "short" ? "短休息中…" : "长休息中…")
                     : (pomo.mode === "study" ? "学习时间" :
                        pomo.mode === "short" ? "短休息" : "长休息");
    }
    // 模式标记
    document.querySelectorAll(".pomo-mode").forEach(b => {
      b.classList.toggle("active", b.dataset.mode === pomo.mode);
    });
    // 当前任务标签
    const taskEl = document.getElementById("pomoTask");
    if (taskEl) {
      if (pomo.taskIdx !== null && state.plan.tasks[pomo.taskIdx] && state.plan.tasks[pomo.taskIdx].name) {
        taskEl.textContent = "当前任务：" + state.plan.tasks[pomo.taskIdx].name + "  ·  " + state.plan.tasks[pomo.taskIdx].estMin + " 分钟";
        taskEl.classList.add("has-task");
      } else {
        taskEl.textContent = pomo.mode === "study"
          ? "未关联任务（默认 25 分钟）— 也可从任务单点【启动】"
          : (pomo.mode === "short" ? "短休息一下，活动活动眼睛 👀" : "好好放松一下吧 🎈");
        taskEl.classList.remove("has-task");
      }
    }
    // 任务单运行行高亮
    document.querySelectorAll("#taskTbody tr").forEach((tr, i) => {
      tr.classList.toggle("running", i === pomo.taskIdx && pomo.running);
    });
    document.querySelectorAll("#taskTbody .run-btn").forEach((btn, i) => {
      btn.classList.toggle("running", i === pomo.taskIdx && pomo.running);
      btn.textContent = (i === pomo.taskIdx && pomo.running) ? "● 进行中" : "▶ 启动";
    });
  }

  function renderPresets() {
    const p = state.plan.pomo;
    const upd = (id, v) => { const e = document.getElementById(id); if (e) e.textContent = v; };
    upd("pmStudy", p.study);
    upd("pmShort", p.short);
    upd("pmLong", p.long);
    const setInput = (id, v) => { const e = document.getElementById(id); if (e && document.activeElement !== e) e.value = v; };
    setInput("pmStudySet", p.study);
    setInput("pmShortSet", p.short);
    setInput("pmLongSet", p.long);
  }

  function renderTaskList() {
    const tbody = document.getElementById("taskTbody");
    if (!tbody) return;
    tbody.innerHTML = state.plan.tasks.map((t, i) => `
      <tr class="${t.done ? "done" : ""}">
        <td class="col-no">${i + 1}</td>
        <td class="col-name">
          <input type="text" data-i="${i}" data-k="name" value="${escapeAttr(t.name)}"
                 placeholder="例如：背英语单词" />
        </td>
        <td class="col-time">
          <input type="number" data-i="${i}" data-k="estMin" min="1" max="120" value="${t.estMin}" />
          <span class="col-time-unit">分</span>
        </td>
        <td class="col-run">
          <button class="run-btn" data-i="${i}">▶ 启动</button>
        </td>
        <td class="col-done">
          <input type="checkbox" data-i="${i}" data-k="done" ${t.done ? "checked" : ""} />
        </td>
      </tr>
    `).join("");
    // 绑定事件
    tbody.querySelectorAll("input[type='text'], input[type='number']").forEach(inp => {
      inp.addEventListener("input", onTaskInput);
      inp.addEventListener("change", onTaskInput);
    });
    tbody.querySelectorAll("input[type='checkbox']").forEach(inp => {
      inp.addEventListener("change", onTaskCheck);
    });
    tbody.querySelectorAll(".run-btn").forEach(btn => {
      btn.addEventListener("click", () => launchTask(+btn.dataset.i));
    });
    renderTime();
  }

  function escapeAttr(s) {
    return String(s || "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));
  }

  function onTaskInput(e) {
    const i = +e.target.dataset.i;
    const k = e.target.dataset.k;
    let v = e.target.value;
    if (k === "estMin") {
      v = parseInt(v, 10);
      if (isNaN(v) || v < 1) v = 1;
      if (v > 120) v = 120;
      e.target.value = v;
    }
    state.plan.tasks[i][k] = v;
    saveFn();
    // 若正在跑这条任务但用户改了预估时间，仅在停止时生效；保持当前倒计时不变
  }

  function onTaskCheck(e) {
    const i = +e.target.dataset.i;
    state.plan.tasks[i].done = e.target.checked;
    e.target.closest("tr").classList.toggle("done", state.plan.tasks[i].done);
    saveFn();
  }

  function launchTask(i) {
    const t = state.plan.tasks[i];
    if (!t || !t.name.trim()) {
      alert("请先填写任务名称，再点【启动】哦～");
      return;
    }
    if (!t.estMin || t.estMin < 1) {
      alert("预估时间至少 1 分钟");
      return;
    }
    pomo.taskIdx = i;
    pomo.mode = "study";
    pomo.total = t.estMin * 60;
    pomo.remaining = t.estMin * 60;
    startTicking();
    renderTime();
  }

  function setMode(mode, silent) {
    if (pomo.running && !silent) {
      if (!confirm("当前正在计时，要切换模式吗？")) return;
      stopTicking();
    }
    pomo.mode = mode;
    pomo.taskIdx = null;
    const p = state.plan.pomo;
    const mins = mode === "study" ? p.study : mode === "short" ? p.short : p.long;
    pomo.total = mins * 60;
    pomo.remaining = mins * 60;
    if (!silent) renderTime();
  }

  function startTicking() {
    if (pomo.intervalId) clearInterval(pomo.intervalId);
    pomo.running = true;
    pomo.intervalId = setInterval(tick, 1000);
  }
  function pauseTicking() {
    if (pomo.intervalId) clearInterval(pomo.intervalId);
    pomo.intervalId = null;
    pomo.running = false;
    renderTime();
  }
  function stopTicking() {
    if (pomo.intervalId) clearInterval(pomo.intervalId);
    pomo.intervalId = null;
    pomo.running = false;
  }

  function tick() {
    pomo.remaining = Math.max(0, pomo.remaining - 1);
    renderTime();
    if (pomo.remaining === 0) {
      stopTicking();
      beep(2);
      const wasStudy = pomo.mode === "study";
      // 语音播报：学习结束 → 该休息了；休息结束 → 该学习了
      speak(wasStudy ? "该休息了" : "该学习了");
      const msgPrefix = wasStudy
        ? (pomo.taskIdx !== null && state.plan.tasks[pomo.taskIdx]
            ? `任务【${state.plan.tasks[pomo.taskIdx].name}】完成！该休息了～`
            : "学习时间到！该休息了～")
        : (pomo.mode === "short" ? "短休息结束！该学习了～" : "长休息结束！该学习了～");
      if (wasStudy) {
        pomo.sessionsDone++;
        const next = pomo.sessionsDone % 4 === 0 ? "long" : "short";
        setTimeout(() => {
          if (confirm(msgPrefix + " 要开始" + (next === "long" ? "长休息" : "短休息") + "吗？")) {
            setMode(next, true);
            startTicking();
            renderTime();
          } else {
            setMode(next, true);
            renderTime();
          }
        }, 300);
      } else {
        setTimeout(() => {
          alert(msgPrefix + " 继续加油 💪");
          setMode("study", true);
          renderTime();
        }, 300);
      }
    }
  }

  // 普通话语音播报
  let _zhVoice = null;
  function pickZhVoice() {
    if (!("speechSynthesis" in window)) return null;
    const list = window.speechSynthesis.getVoices() || [];
    // 优先：中文普通话（大陆）
    let v = list.find(x => /zh[-_]CN/i.test(x.lang) || /Chinese.*China|Mandarin/i.test(x.name));
    if (!v) v = list.find(x => /^zh/i.test(x.lang));
    return v || null;
  }
  // 部分浏览器需要等 voices 异步加载
  if ("speechSynthesis" in window) {
    window.speechSynthesis.onvoiceschanged = () => { _zhVoice = pickZhVoice(); };
  }
  function speak(text) {
    try {
      if (!("speechSynthesis" in window)) return;
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "zh-CN";
      u.rate = 0.95;
      u.pitch = 1.05;
      u.volume = 1.0;
      if (!_zhVoice) _zhVoice = pickZhVoice();
      if (_zhVoice) u.voice = _zhVoice;
      window.speechSynthesis.speak(u);
    } catch (e) { /* 静默 */ }
  }

  // 简易 Web Audio 蜂鸣
  let _ac = null;
  function beep(times) {
    times = times || 1;
    try {
      _ac = _ac || new (window.AudioContext || window.webkitAudioContext)();
      const start = _ac.currentTime;
      for (let i = 0; i < times; i++) {
        const o = _ac.createOscillator();
        const g = _ac.createGain();
        o.connect(g); g.connect(_ac.destination);
        o.type = "sine";
        o.frequency.setValueAtTime(880, start + i * 0.35);
        g.gain.setValueAtTime(0.0001, start + i * 0.35);
        g.gain.exponentialRampToValueAtTime(0.3, start + i * 0.35 + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, start + i * 0.35 + 0.25);
        o.start(start + i * 0.35);
        o.stop(start + i * 0.35 + 0.28);
      }
    } catch (e) { /* 静默 */ }
  }

  function bindControls() {
    document.getElementById("pomoStart").addEventListener("click", () => {
      if (pomo.remaining <= 0) {
        // 已结束，按当前模式重新填满
        setMode(pomo.mode, true);
      }
      startTicking();
      renderTime();
    });
    document.getElementById("pomoPause").addEventListener("click", pauseTicking);
    document.getElementById("pomoReset").addEventListener("click", () => {
      stopTicking();
      pomo.taskIdx = null;
      setMode(pomo.mode, true);
      renderTime();
    });
    document.querySelectorAll(".pomo-mode").forEach(b => {
      b.addEventListener("click", () => setMode(b.dataset.mode, false));
    });

    const bindSetting = (id, key, min, max) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.addEventListener("change", () => {
        let v = parseInt(el.value, 10);
        if (isNaN(v) || v < min) v = min;
        if (v > max) v = max;
        el.value = v;
        state.plan.pomo[key] = v;
        saveFn();
        renderPresets();
        // 当前模式即时同步
        if (!pomo.running && pomo.taskIdx === null) {
          setMode(pomo.mode, true);
          renderTime();
        }
      });
    };
    bindSetting("pmStudySet", "study", 1, 120);
    bindSetting("pmShortSet", "short", 1, 60);
    bindSetting("pmLongSet", "long", 1, 120);

    document.getElementById("btnClearTasks").addEventListener("click", () => {
      if (!confirm("确定清空所有任务吗？")) return;
      stopTicking();
      pomo.taskIdx = null;
      state.plan = defaults();
      saveFn();
      renderAll();
    });
  }

  function renderAll() {
    renderPresets();
    renderTaskList();
    renderTime();
  }

  return { init, ensure, renderAll };
})();
