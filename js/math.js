/* 数学模块：生成口算 + 应用题 */
const MathModule = (() => {

  function rand(a, b) { return Math.floor(Math.random() * (b - a + 1)) + a; }
  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }
  function reduce(n, d) { const g = gcd(Math.abs(n), Math.abs(d)) || 1; return [n / g, d / g]; }

  // 生成一道口算
  function genOral(ch) {
    const r = ch.range;
    const op = pick(ch.ops);

    if (ch.decimal) {
      let a = +(Math.random() * (r[1] - r[0]) + r[0]).toFixed(1);
      let b = +(Math.random() * (Math.min(r[1], 50) - r[0]) + r[0]).toFixed(1);
      if (op === "-" && b > a) [a, b] = [b, a];
      let ans;
      if (op === "+") ans = a + b;
      else if (op === "-") ans = a - b;
      else if (op === "×") ans = a * b;
      else ans = a / b;
      ans = +ans.toFixed(2);
      return { type: "oral", text: `${a} ${op} ${b} = `, answer: ans };
    }

    if (ch.fraction) {
      // 分数：分母 2..10
      const d1 = rand(2, 8), n1 = rand(1, d1 - 1);
      const d2 = rand(2, 8), n2 = rand(1, d2 - 1);
      const lcm = (d1 * d2) / gcd(d1, d2);
      let num, den;
      if (op === "+") { num = n1 * (lcm / d1) + n2 * (lcm / d2); den = lcm; }
      else { // '-'
        let a = n1 * (lcm / d1), b = n2 * (lcm / d2);
        if (b > a) [a, b] = [b, a];
        num = a - b; den = lcm;
      }
      const [rn, rd] = reduce(num, den);
      const ansText = rn === 0 ? "0" : (rd === 1 ? `${rn}` : `${rn}/${rd}`);
      return { type: "oral", text: `${n1}/${d1} ${op} ${n2}/${d2} = `, answer: ansText, isFraction: true };
    }

    let a, b, ans;
    if (op === "+") {
      a = rand(r[0], r[1]); b = rand(r[0], r[1]); ans = a + b;
    } else if (op === "-") {
      a = rand(r[0], r[1]); b = rand(r[0], Math.min(a, r[1])); if (b > a)[a,b]=[b,a]; ans = a - b;
    } else if (op === "×") {
      const sr = ch.secondRange || r;
      a = rand(r[0], r[1]); b = rand(sr[0], sr[1]); ans = a * b;
    } else if (op === "÷") {
      const dr = ch.divisorRange || [2, 9];
      b = rand(dr[0], dr[1]);
      const factor = rand(2, 12);
      a = b * factor;
      ans = factor;
    }
    return { type: "oral", text: `${a} ${op} ${b} = `, answer: ans };
  }

  // 准备一组题：N 道口算 + M 道应用题
  function buildSession(chapter, oralCount, appCount) {
    const items = [];
    const used = new Set();
    let safety = 0;
    while (items.length < oralCount && safety < 500) {
      const q = genOral(chapter);
      const key = q.text;
      if (!used.has(key)) { used.add(key); items.push(q); }
      safety++;
    }
    // 应用题：从章节里随机抽 appCount 道
    const apps = (chapter.apps || []).slice();
    apps.sort(() => Math.random() - 0.5);
    const chosen = apps.slice(0, Math.min(appCount, apps.length));
    chosen.forEach(a => items.push({
      type: "app", text: a.text, expr: a.expr, answer: a.answer, unit: a.unit || ""
    }));
    return items;
  }

  // 求值：归一化全角/中文符号、空格，支持 +,-,*,/,×,÷,(,),小数
  // 只要结果数值等于答案就算对（接受任意正确的列式写法）
  function evalExpr(s) {
    if (typeof s !== "string") return NaN;
    s = s
      .replace(/[（]/g, "(").replace(/[）]/g, ")")
      .replace(/×/g, "*").replace(/÷/g, "/")
      .replace(/[０１２３４５６７８９]/g, c => String("０１２３４５６７８９".indexOf(c)))
      .replace(/．/g, ".")
      .replace(/[，、,]/g, "")  // 千位分隔/中文逗号忽略
      .replace(/\s+/g, "");
    if (s === "" || !/^[\d+\-*/.()]+$/.test(s)) return NaN;
    try {
      const v = Function("\"use strict\"; return (" + s + ")")();
      return typeof v === "number" && isFinite(v) ? v : NaN;
    } catch (e) { return NaN; }
  }

  // 字符串答案归一化（数字 / 分数）
  function normalizeAnswer(a) {
    if (typeof a === "number") return a;
    if (typeof a !== "string") return NaN;
    a = a.trim();
    if (a === "") return NaN;
    if (/^\d+\/\d+$/.test(a)) {
      const [n, d] = a.split("/").map(Number);
      if (!d) return NaN;
      return n / d;
    }
    const v = Number(a);
    return isNaN(v) ? NaN : v;
  }

  function nearlyEqual(a, b) {
    if (typeof a !== "number" || typeof b !== "number") return false;
    if (isNaN(a) || isNaN(b)) return false;
    return Math.abs(a - b) < 0.01;
  }

  // 渲染题目
  function renderQuestion(item, idx, total) {
    const area = document.getElementById("questionArea");
    document.getElementById("progressFill").style.width = ((idx) / total * 100) + "%";
    document.getElementById("progressText").textContent = (idx + 1) + " / " + total;
    document.getElementById("practiceTitle").textContent = item.type === "oral" ? "口算练习" : "应用题";

    if (item.type === "oral") {
      area.innerHTML = `
        <div class="q-tag">口算 ${idx + 1}</div>
        <div class="q-text huge">${item.text}<input type="text" inputmode="decimal" class="input-box oral-input" id="oralAns" autocomplete="off" placeholder="?"></div>
        <div id="fb"></div>
      `;
      setTimeout(() => document.getElementById("oralAns").focus(), 50);
    } else {
      area.innerHTML = `
        <div class="q-tag">应用题</div>
        <div class="app-problem">${item.text}</div>
        <div class="input-row">
          <label>列式：</label>
          <input type="text" class="input-box" id="appExpr" placeholder="例如 5+3 或 (10-4)×2">
        </div>
        <div class="input-row">
          <label>答案：</label>
          <input type="text" class="input-box" id="appAns" inputmode="decimal" placeholder="结果（${item.unit || "数字"}）" style="max-width: 200px;">
        </div>
        <div id="fb"></div>
      `;
      setTimeout(() => document.getElementById("appExpr").focus(), 50);
    }
  }

  // 校验回答
  function checkAnswer(item) {
    if (item.type === "oral") {
      const v = document.getElementById("oralAns").value.trim();
      if (v === "") return { ok: false, reason: "请填写答案", right: String(item.answer) };
      const stuNum = normalizeAnswer(v);
      const expectedNum = typeof item.answer === "string" ? normalizeAnswer(item.answer) : item.answer;
      const ok = nearlyEqual(stuNum, expectedNum);
      return { ok, you: v, right: String(item.answer) };
    } else {
      const exprStr = document.getElementById("appExpr").value.trim();
      const ansStr = document.getElementById("appAns").value.trim();
      if (exprStr === "" || ansStr === "") {
        return { ok: false, reason: "列式和答案都要填", right: `${item.expr} = ${item.answer} ${item.unit||""}` };
      }
      const exprVal = evalExpr(exprStr);
      const ansVal = normalizeAnswer(ansStr);
      const expected = typeof item.answer === "string" ? normalizeAnswer(item.answer) : item.answer;
      const exprOk = nearlyEqual(exprVal, expected);
      const ansOk = nearlyEqual(ansVal, expected);
      if (exprOk && ansOk) return { ok: true, you: `${exprStr} = ${ansStr}`, right: `${item.expr} = ${item.answer}` };
      if (!exprOk && ansOk) return { ok: false, reason: "答案对了，但列式不对哦", you: `${exprStr} = ${ansStr}`, right: `${item.expr} = ${item.answer}` };
      if (exprOk && !ansOk) return { ok: false, reason: "列式对了，但答案算错了", you: `${exprStr} = ${ansStr}`, right: `${item.expr} = ${item.answer}` };
      return { ok: false, you: `${exprStr} = ${ansStr}`, right: `${item.expr} = ${item.answer}` };
    }
  }

  return { buildSession, renderQuestion, checkAnswer };
})();
