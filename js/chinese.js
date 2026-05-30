/* 语文模块：1-3 拼音/识字/古诗（四选一）；4-6 古诗/文言文（输入） */
const ChineseModule = (() => {

  function shuffle(arr) { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

  function buildSession(chapter, qCount /* grade unused, type from chapter */) {
    if (chapter && chapter._mix && Array.isArray(chapter.items) && chapter.items.length && chapter.items[0] && chapter.items[0].item) {
      const list = shuffle(chapter.items.slice()).slice(0, qCount);
      return list.map(entry => ({
        type: entry.type,
        data: entry.item,
        ctx: entry.ctx
      }));
    }
    const items = (chapter.items || []).slice();
    const list = shuffle(items).slice(0, qCount);
    return list.map(it => ({
      type: chapter.type,             // pinyin | zishi | gushi | gushi-input | wenyan
      data: it,
      ctx: { poem: chapter.poem, text: chapter.text, name: chapter.name }
    }));
  }

  function escapeHtml(s) { return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c])); }

  function isInputType(t) { return t === "gushi-input" || t === "wenyan"; }

  function questionAsksAbout(q) {
    const s = String(q || "");
    const asks = { author: false, title: false };
    if (!s) return asks;
    if (/(作者|谁(写|作|所作)|出自(谁|何人)|何人(所作|所写))/.test(s)) asks.author = true;
    if (/(题目|题名|标题|名字叫|叫什么|篇名|诗名|词名|文名|书名)/.test(s)) asks.title = true;
    return asks;
  }

  function hideToken(str) {
    const len = String(str || "").length;
    return "＿".repeat(Math.max(2, len));
  }

  function renderQuestion(item, idx, total) {
    const area = document.getElementById("questionArea");
    document.getElementById("progressFill").style.width = ((idx) / total * 100) + "%";
    document.getElementById("progressText").textContent = (idx + 1) + " / " + total;

    const typeLabel = {
      "pinyin": "拼音",
      "zishi": "识字",
      "gushi": "古诗",
      "gushi-input": "古诗",
      "wenyan": "文言文"
    }[item.type] || "语文";
    const titleText = (() => {
      const name = String(item.ctx.name || "");
      const asksTitle = questionAsksAbout(item.data && item.data.q).title;
      const asksAuthor = questionAsksAbout(item.data && item.data.q).author;
      if (!asksTitle && !asksAuthor) return name;
      let out = name;
      const poemTitle = item.ctx.poem && item.ctx.poem.title;
      const poemAuthor = item.ctx.poem && item.ctx.poem.author;
      if (asksTitle && poemTitle) out = out.split(poemTitle).join(hideToken(poemTitle));
      if (asksAuthor && poemAuthor) out = out.split(poemAuthor).join(hideToken(poemAuthor));
      return out;
    })();
    document.getElementById("practiceTitle").textContent = typeLabel + " · " + titleText;

    // 把答案对应的诗行替换为空白框
    function normalizeForMatch(s) {
      return String(s || "").replace(/[，。、！？\s.,!?;:""''"'…—-]/g, "").trim();
    }
    const answerCandidates = [];
    if (isInputType(item.type)) {
      if (item.data.answer) answerCandidates.push(item.data.answer);
      if (Array.isArray(item.data.accept)) answerCandidates.push(...item.data.accept);
    } else {
      if (item.data.correct) answerCandidates.push(item.data.correct);
    }
    const normalizedAnswers = answerCandidates.map(normalizeForMatch).filter(x => x.length >= 3);

    function maybeBlankLine(line) {
      const norm = normalizeForMatch(line);
      if (!norm) return null;
      const hit = normalizedAnswers.some(a => a === norm);
      if (hit) return `<div class="poem-blank">${"＿".repeat(Math.max(5, norm.length))}</div>`;
      return null;
    }

    let poemHtml = "";
    const asks = questionAsksAbout(item.data && item.data.q);
    if (item.ctx.poem) {
      const p = item.ctx.poem;
      const titleText = asks.title ? hideToken(p.title) : escapeHtml(p.title);
      const authorText = asks.author ? hideToken(p.author || "作者") : escapeHtml(p.author || "");
      poemHtml = `
        <div class="app-problem" style="background:#fff4ec; border-color:#ffd1a8;">
          <div style="font-weight:800; color:#b85a00; margin-bottom:4px;">《${titleText}》 ${authorText}</div>
          ${p.lines.map(l => maybeBlankLine(l) || `<div>${escapeHtml(l)}</div>`).join("")}
        </div>`;
    } else if (item.ctx.text) {
      const nameText = asks.title ? hideToken(item.ctx.name) : escapeHtml(item.ctx.name);
      poemHtml = `
        <div class="app-problem" style="background:#fff4ec; border-color:#ffd1a8;">
          <div style="font-weight:800; color:#b85a00; margin-bottom:4px;">${nameText}</div>
          <div>${escapeHtml(item.ctx.text)}</div>
        </div>`;
    }

    if (isInputType(item.type)) {
      area.innerHTML = `
        <div class="q-tag">${typeLabel} ${idx + 1}</div>
        ${poemHtml}
        <div class="q-text" style="font-size:18px;">${escapeHtml(item.data.q)}</div>
        <div class="input-row">
          <input type="text" class="input-box" id="cnAns" placeholder="请输入答案" autocomplete="off">
        </div>
        <div id="fb"></div>
      `;
      setTimeout(() => document.getElementById("cnAns").focus(), 50);
    } else {
      const opts = item.data.options.map((o, i) => `
        <button class="opt" data-val="${escapeHtml(o)}">
          <span class="opt-label">${"ABCD"[i]}</span>${escapeHtml(o)}
        </button>`).join("");
      area.innerHTML = `
        <div class="q-tag">${typeLabel} ${idx + 1}</div>
        ${poemHtml}
        <div class="q-text" style="font-size:18px;">${escapeHtml(item.data.q)}</div>
        <div class="options">${opts}</div>
        <div id="fb"></div>
      `;
      area.querySelectorAll(".opt").forEach(btn => {
        btn.addEventListener("click", () => {
          area.querySelectorAll(".opt").forEach(b => b.classList.remove("selected"));
          btn.classList.add("selected");
        });
      });
    }
  }

  function normalize(s) {
    return String(s || "").trim().replace(/[\s。，！？、""''"'.,!?;:]/g, "");
  }

  function checkAnswer(item) {
    if (isInputType(item.type)) {
      const v = document.getElementById("cnAns").value.trim();
      if (v === "") return { ok: false, reason: "请填写答案", right: item.data.answer };
      const accept = item.data.accept || [item.data.answer];
      const list = [item.data.answer, ...(item.data.accept || [])];
      const target = list.map(normalize);
      const ok = target.includes(normalize(v));
      return { ok, you: v, right: item.data.answer };
    } else {
      const sel = document.querySelector("#questionArea .opt.selected");
      if (!sel) return { ok: false, reason: "请选择一个答案", right: item.data.correct };
      const v = sel.getAttribute("data-val");
      const ok = v === item.data.correct;
      return { ok, you: v, right: item.data.correct };
    }
  }

  return { buildSession, renderQuestion, checkAnswer };
})();
