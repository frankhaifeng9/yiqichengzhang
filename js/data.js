/* ============================================================
   懿起成长 · 示例知识库（演示样本）
   - 数学：人教版（参数化生成口算 + 内置应用题）
   - 语文：人教版（拼音/识字/古诗/文言文）
   - 英语：京版 + KET/PET 词样本 + 美国万句口语样本
   - 数据均为演示性内容，可在 js/data.js 中自由扩充
   ============================================================ */

const DATA = { math: {}, chinese: {}, english: {} };

/* ---------- 数学：人教版章节（参数化） ---------- */
DATA.math["1上"] = [
  { id: "m1u1", name: "1-5的认识和加减法", range: [1, 5], ops: ["+", "-"],
    apps: [
      { text: "树上原来有 3 只小鸟，又飞来 2 只。现在树上一共有几只小鸟？", expr: "3+2", answer: 5, unit: "只" },
      { text: "小明有 5 个苹果，吃了 1 个。还剩几个苹果？", expr: "5-1", answer: 4, unit: "个" },
      { text: "妈妈买了 2 支铅笔，爸爸买了 2 支。一共有几支铅笔？", expr: "2+2", answer: 4, unit: "支" },
      { text: "桌上有 4 块糖，小红拿走 2 块。桌上还有几块糖？", expr: "4-2", answer: 2, unit: "块" },
      { text: "笼子里有 1 只兔子，又放进 3 只。现在有几只兔子？", expr: "1+3", answer: 4, unit: "只" }
    ]},
  { id: "m1u2", name: "6-10的认识和加减法", range: [1, 10], ops: ["+", "-"],
    apps: [
      { text: "停车场停了 6 辆车，又开来 3 辆。现在有几辆车？", expr: "6+3", answer: 9, unit: "辆" },
      { text: "篮子里有 10 个鸡蛋，妈妈做菜用了 4 个。还剩几个？", expr: "10-4", answer: 6, unit: "个" },
      { text: "小华做了 5 道题，又做了 5 道。一共做了几道题？", expr: "5+5", answer: 10, unit: "道" },
      { text: "鱼缸里有 8 条小鱼，捞出 3 条。鱼缸里还剩几条？", expr: "8-3", answer: 5, unit: "条" },
      { text: "小猴摘了 7 个桃子，吃了 2 个。还剩几个桃子？", expr: "7-2", answer: 5, unit: "个" }
    ]},
  { id: "m1u3", name: "11-20各数的认识", range: [10, 20], ops: ["+", "-"],
    apps: [
      { text: "书架上有 12 本书，又放上 3 本。一共有几本书？", expr: "12+3", answer: 15, unit: "本" },
      { text: "小军有 18 张贴纸，送给同学 4 张。还剩几张？", expr: "18-4", answer: 14, unit: "张" },
      { text: "妈妈买了 11 个橘子，又买了 5 个。一共有几个？", expr: "11+5", answer: 16, unit: "个" },
      { text: "停车场有 20 辆车，开走了 6 辆。还剩几辆？", expr: "20-6", answer: 14, unit: "辆" },
      { text: "果盘里有 13 颗草莓，吃了 3 颗。还剩几颗？", expr: "13-3", answer: 10, unit: "颗" }
    ]}
];

DATA.math["1下"] = [
  { id: "m1d1", name: "20以内退位减法", range: [10, 20], ops: ["-"],
    apps: [
      { text: "妈妈买了 15 个苹果，吃了 7 个。还剩几个？", expr: "15-7", answer: 8, unit: "个" },
      { text: "停车场有 13 辆车，开走 5 辆。还剩几辆？", expr: "13-5", answer: 8, unit: "辆" },
      { text: "树上有 17 只鸟，飞走 9 只。还剩几只？", expr: "17-9", answer: 8, unit: "只" },
      { text: "盘子里有 12 块饼干，吃了 4 块。还剩几块？", expr: "12-4", answer: 8, unit: "块" },
      { text: "鱼缸里有 14 条鱼，捞走 6 条。还剩几条？", expr: "14-6", answer: 8, unit: "条" }
    ]},
  { id: "m1d2", name: "100以内数的认识", range: [10, 100], ops: ["+", "-"], step: 10,
    apps: [
      { text: "果园里有 60 棵苹果树，又种了 30 棵。一共有几棵？", expr: "60+30", answer: 90, unit: "棵" },
      { text: "停车场有 80 辆车，开走 40 辆。还剩几辆？", expr: "80-40", answer: 40, unit: "辆" },
      { text: "小明攒了 50 元钱，又攒了 20 元。一共有多少钱？", expr: "50+20", answer: 70, unit: "元" },
      { text: "图书馆有 90 本书，借走 30 本。还剩几本？", expr: "90-30", answer: 60, unit: "本" },
      { text: "饲养场有 40 只鸡，又买来 50 只。一共有几只？", expr: "40+50", answer: 90, unit: "只" }
    ]},
  { id: "m1d3", name: "认识人民币", range: [1, 100], ops: ["+", "-"],
    apps: [
      { text: "一支笔 3 元，一本本子 5 元，一共多少钱？", expr: "3+5", answer: 8, unit: "元" },
      { text: "小红带了 20 元，买文具用去 14 元。还剩多少钱？", expr: "20-14", answer: 6, unit: "元" },
      { text: "一块橡皮 2 元，买 3 块要多少钱？", expr: "2+2+2", answer: 6, unit: "元" },
      { text: "面包 6 元，牛奶 4 元，一共多少钱？", expr: "6+4", answer: 10, unit: "元" },
      { text: "妈妈给 50 元，买菜花了 36 元。还剩多少？", expr: "50-36", answer: 14, unit: "元" }
    ]}
];

DATA.math["2上"] = [
  { id: "m2u1", name: "100以内的加法和减法", range: [10, 100], ops: ["+", "-"],
    apps: [
      { text: "学校图书馆借出 48 本书，还剩 36 本。原来有多少本？", expr: "48+36", answer: 84, unit: "本" },
      { text: "停车场原有 75 辆车，开走 28 辆。还剩多少辆？", expr: "75-28", answer: 47, unit: "辆" },
      { text: "果园摘了 56 个桃，又摘了 27 个。一共多少个？", expr: "56+27", answer: 83, unit: "个" },
      { text: "妈妈带了 100 元，买菜用去 53 元。还剩多少？", expr: "100-53", answer: 47, unit: "元" },
      { text: "二班有 39 人，三班有 42 人。一共多少人？", expr: "39+42", answer: 81, unit: "人" }
    ]},
  { id: "m2u2", name: "表内乘法（一）", range: [1, 6], ops: ["×"],
    apps: [
      { text: "一只小手有 5 个手指，3 只小手有几个手指？", expr: "5×3", answer: 15, unit: "个" },
      { text: "一辆小车有 4 个轮子，6 辆车一共多少轮子？", expr: "4×6", answer: 24, unit: "个" },
      { text: "每盒铅笔 6 支，3 盒一共多少支？", expr: "6×3", answer: 18, unit: "支" },
      { text: "1 排有 5 棵树，4 排一共多少棵？", expr: "5×4", answer: 20, unit: "棵" },
      { text: "每个篮子 3 个苹果，5 个篮子一共多少苹果？", expr: "3×5", answer: 15, unit: "个" }
    ]},
  { id: "m2u3", name: "长度单位", range: [1, 100], ops: ["+", "-"],
    apps: [
      { text: "一支铅笔长 18 厘米，用去 6 厘米。还剩多长？", expr: "18-6", answer: 12, unit: "厘米" },
      { text: "教室长 9 米，宽 6 米。长比宽多多少米？", expr: "9-6", answer: 3, unit: "米" },
      { text: "一根绳子长 35 厘米，又接上 28 厘米。现在多长？", expr: "35+28", answer: 63, unit: "厘米" },
      { text: "一张床长 2 米，妈妈身高 165 厘米=1 米 65 厘米。", expr: "100+65", answer: 165, unit: "厘米" },
      { text: "小明跳远 95 厘米，小红跳了 88 厘米。小明多跳多少？", expr: "95-88", answer: 7, unit: "厘米" }
    ]}
];

DATA.math["2下"] = [
  { id: "m2d1", name: "表内除法（一）", range: [1, 9], ops: ["÷"], divFromTable: true,
    apps: [
      { text: "12 块糖平均分给 4 个小朋友，每人几块？", expr: "12÷4", answer: 3, unit: "块" },
      { text: "18 个苹果，每盘放 6 个，能放几盘？", expr: "18÷6", answer: 3, unit: "盘" },
      { text: "24 朵花平均分成 8 束，每束几朵？", expr: "24÷8", answer: 3, unit: "朵" },
      { text: "20 颗珠子，每 5 颗串一串，能串几串？", expr: "20÷5", answer: 4, unit: "串" },
      { text: "36 个气球分给 4 个班，每班几个？", expr: "36÷4", answer: 9, unit: "个" }
    ]},
  { id: "m2d2", name: "万以内数的认识", range: [100, 1000], ops: ["+", "-"], step: 100,
    apps: [
      { text: "图书馆有 600 本故事书，又买 400 本。一共多少本？", expr: "600+400", answer: 1000, unit: "本" },
      { text: "操场跑道 400 米，跑 3 圈是多少米？", expr: "400+400+400", answer: 1200, unit: "米" },
      { text: "电视机 1500 元，洗衣机 800 元。电视贵多少？", expr: "1500-800", answer: 700, unit: "元" },
      { text: "工厂生产了 2300 件玩具，运走 800 件。还剩多少？", expr: "2300-800", answer: 1500, unit: "件" },
      { text: "学校有学生 900 人，又来了 200 人。共多少人？", expr: "900+200", answer: 1100, unit: "人" }
    ]}
];

DATA.math["3上"] = [
  { id: "m3u1", name: "万以内的加法和减法", range: [100, 999], ops: ["+", "-"],
    apps: [
      { text: "甲乙两地相距 1235 米，小明走了 768 米。还差多少米？", expr: "1235-768", answer: 467, unit: "米" },
      { text: "学校三年级共 285 人，四年级 326 人。两个年级共多少人？", expr: "285+326", answer: 611, unit: "人" },
      { text: "图书馆有 1800 本书，借出 956 本。还剩多少本？", expr: "1800-956", answer: 844, unit: "本" },
      { text: "果园上午摘苹果 528 千克，下午摘 467 千克。共多少千克？", expr: "528+467", answer: 995, unit: "千克" },
      { text: "工厂生产玩具 2100 件，第一批运走 870 件。还剩多少？", expr: "2100-870", answer: 1230, unit: "件" }
    ]},
  { id: "m3u2", name: "多位数乘一位数", range: [10, 999], ops: ["×"], secondRange: [2, 9],
    apps: [
      { text: "一本书 25 元，买 3 本要多少钱？", expr: "25×3", answer: 75, unit: "元" },
      { text: "一辆汽车 1 小时行 65 千米，4 小时行多少千米？", expr: "65×4", answer: 260, unit: "千米" },
      { text: "一支钢笔 18 元，5 支多少钱？", expr: "18×5", answer: 90, unit: "元" },
      { text: "每箱苹果 24 千克，6 箱共多少千克？", expr: "24×6", answer: 144, unit: "千克" },
      { text: "学校买了 7 套桌椅，每套 128 元，共多少元？", expr: "128×7", answer: 896, unit: "元" }
    ]}
];

DATA.math["3下"] = [
  { id: "m3d1", name: "除数是一位数的除法", range: [10, 999], ops: ["÷"], divisorRange: [2, 9],
    apps: [
      { text: "84 颗糖平均分给 4 个班，每班几颗？", expr: "84÷4", answer: 21, unit: "颗" },
      { text: "120 个面包分装 5 箱，每箱几个？", expr: "120÷5", answer: 24, unit: "个" },
      { text: "168 米跑道分 6 段，每段几米？", expr: "168÷6", answer: 28, unit: "米" },
      { text: "三年级共 72 人分 3 组，每组几人？", expr: "72÷3", answer: 24, unit: "人" },
      { text: "150 元买 5 本同样的书，每本多少元？", expr: "150÷5", answer: 30, unit: "元" }
    ]},
  { id: "m3d2", name: "两位数乘两位数", range: [10, 99], ops: ["×"],
    apps: [
      { text: "学校 12 个班，每班 35 人。一共多少人？", expr: "12×35", answer: 420, unit: "人" },
      { text: "每盒装 24 个鸡蛋，15 盒共多少个？", expr: "24×15", answer: 360, unit: "个" },
      { text: "一份报纸 18 元，订一年 12 个月共多少钱？", expr: "18×12", answer: 216, unit: "元" },
      { text: "每筐苹果 25 千克，36 筐共多少千克？", expr: "25×36", answer: 900, unit: "千克" },
      { text: "一辆车每小时行 65 千米，11 小时行多少千米？", expr: "65×11", answer: 715, unit: "千米" }
    ]}
];

DATA.math["4上"] = [
  { id: "m4u1", name: "三位数乘两位数", range: [100, 999], ops: ["×"], secondRange: [10, 99],
    apps: [
      { text: "每箱牛奶 125 元，订 12 箱共多少钱？", expr: "125×12", answer: 1500, unit: "元" },
      { text: "一辆客车每小时行 95 千米，14 小时行多少千米？", expr: "95×14", answer: 1330, unit: "千米" },
      { text: "工厂每天生产 215 件衣服，30 天共生产多少件？", expr: "215×30", answer: 6450, unit: "件" },
      { text: "一所学校 305 名学生，每人交 18 元活动费，共收多少元？", expr: "305×18", answer: 5490, unit: "元" },
      { text: "每本书 36 元，买 125 本共多少元？", expr: "36×125", answer: 4500, unit: "元" }
    ]},
  { id: "m4u2", name: "除数是两位数的除法", range: [100, 9999], ops: ["÷"], divisorRange: [10, 99],
    apps: [
      { text: "1200 个苹果平均装 30 箱，每箱几个？", expr: "1200÷30", answer: 40, unit: "个" },
      { text: "一辆车 5 小时行 425 千米，每小时行多少？", expr: "425÷5", answer: 85, unit: "千米" },
      { text: "750 米跑道分 25 段，每段几米？", expr: "750÷25", answer: 30, unit: "米" },
      { text: "832 元买 16 本同样的字典，每本多少元？", expr: "832÷16", answer: 52, unit: "元" },
      { text: "9600 公斤大米平均装 24 袋，每袋多少公斤？", expr: "9600÷24", answer: 400, unit: "公斤" }
    ]}
];

DATA.math["4下"] = [
  { id: "m4d1", name: "四则混合运算", range: [10, 100], ops: ["+", "-", "×", "÷"], mixed: true,
    apps: [
      { text: "图书馆有故事书 240 本，科技书是故事书的 3 倍。两种书一共多少本？", expr: "240+240×3", answer: 960, unit: "本" },
      { text: "一支铅笔 2 元，一本本子 5 元。买 3 支铅笔和 2 本本子共多少钱？", expr: "2×3+5×2", answer: 16, unit: "元" },
      { text: "妈妈买苹果 36 元，买梨用了 24 元，桔子比苹果便宜 8 元。买桔子多少元？", expr: "36-8", answer: 28, unit: "元" },
      { text: "学校 6 个年级，每个年级 4 个班，每班 45 人。一共有多少人？", expr: "6×4×45", answer: 1080, unit: "人" },
      { text: "一袋米 30 元，5 袋米和 2 桶油共 220 元。一桶油多少元？", expr: "(220-30×5)÷2", answer: 35, unit: "元" }
    ]},
  { id: "m4d2", name: "小数加法和减法", range: [10, 100], ops: ["+", "-"], decimal: true,
    apps: [
      { text: "小明身高 1.42 米，比小红高 0.08 米。小红身高多少米？", expr: "1.42-0.08", answer: 1.34, unit: "米" },
      { text: "一支钢笔 12.5 元，一本本子 3.8 元。共多少元？", expr: "12.5+3.8", answer: 16.3, unit: "元" },
      { text: "妈妈带 50 元，买菜花了 36.7 元。还剩多少元？", expr: "50-36.7", answer: 13.3, unit: "元" },
      { text: "一袋面 25.4 千克，又买 18.6 千克。共多少千克？", expr: "25.4+18.6", answer: 44, unit: "千克" },
      { text: "100 米赛跑，小军跑了 14.5 秒，小华 13.8 秒。小华快多少秒？", expr: "14.5-13.8", answer: 0.7, unit: "秒" }
    ]}
];

DATA.math["5上"] = [
  { id: "m5u1", name: "小数乘法", range: [1, 99], ops: ["×"], decimal: true,
    apps: [
      { text: "一千克苹果 6.5 元，买 3.2 千克要多少元？", expr: "6.5×3.2", answer: 20.8, unit: "元" },
      { text: "每升汽油 7.5 元，加 12.5 升要多少元？", expr: "7.5×12.5", answer: 93.75, unit: "元" },
      { text: "正方形花坛每边长 1.6 米，周长多少米？", expr: "1.6×4", answer: 6.4, unit: "米" },
      { text: "一辆车每小时行 65.5 千米，3 小时行多少千米？", expr: "65.5×3", answer: 196.5, unit: "千米" },
      { text: "每本日记本 4.5 元，买 8 本要多少元？", expr: "4.5×8", answer: 36, unit: "元" }
    ]},
  { id: "m5u2", name: "简易方程", range: [1, 100], ops: ["+", "-"], equation: true,
    apps: [
      { text: "解方程 x + 25 = 60。列式可写：60-25", expr: "60-25", answer: 35, unit: "" },
      { text: "解方程 3x = 48。列式可写：48÷3", expr: "48÷3", answer: 16, unit: "" },
      { text: "解方程 x - 18 = 27。列式可写：27+18", expr: "27+18", answer: 45, unit: "" },
      { text: "解方程 x ÷ 5 = 12。列式可写：12×5", expr: "12×5", answer: 60, unit: "" },
      { text: "小明的年龄是爸爸的 1/4，爸爸今年 36 岁，小明几岁？", expr: "36÷4", answer: 9, unit: "岁" }
    ]}
];

DATA.math["5下"] = [
  { id: "m5d1", name: "分数加法和减法", range: [1, 20], ops: ["+", "-"], fraction: true,
    apps: [
      { text: "一杯水喝了 1/4，又喝了 1/2。共喝了几分之几？", expr: "1/4+1/2", answer: "3/4", unit: "" },
      { text: "一根绳子长 5/6 米，剪去 1/3 米。还剩多少米？", expr: "5/6-1/3", answer: "1/2", unit: "米" },
      { text: "做作业用了 2/5 小时，看书用了 1/5 小时。共多少小时？", expr: "2/5+1/5", answer: "3/5", unit: "小时" },
      { text: "一袋米 7/8 千克，吃了 1/4 千克。还剩多少千克？", expr: "7/8-1/4", answer: "5/8", unit: "千克" },
      { text: "甲修一段路 3/10，乙修了 2/5。两人共修几分之几？", expr: "3/10+2/5", answer: "7/10", unit: "" }
    ]},
  { id: "m5d2", name: "长方体和正方体", range: [1, 30], ops: ["×"],
    apps: [
      { text: "一个长方体长 5 厘米、宽 4 厘米、高 3 厘米。体积多少？", expr: "5×4×3", answer: 60, unit: "立方厘米" },
      { text: "正方体棱长 6 分米，体积多少？", expr: "6×6×6", answer: 216, unit: "立方分米" },
      { text: "长方体长 8 米、宽 5 米、高 2 米。表面积多少？", expr: "(8×5+8×2+5×2)×2", answer: 132, unit: "平方米" },
      { text: "正方体棱长 4 厘米，表面积多少？", expr: "4×4×6", answer: 96, unit: "平方厘米" },
      { text: "长方体长 10、宽 6、高 4。体积多少？", expr: "10×6×4", answer: 240, unit: "立方厘米" }
    ]}
];

DATA.math["6上"] = [
  { id: "m6u1", name: "分数乘法", range: [1, 20], ops: ["×"], fraction: true,
    apps: [
      { text: "一袋米 15 千克，吃了 2/5。吃了多少千克？", expr: "15×2/5", answer: 6, unit: "千克" },
      { text: "一条路长 24 千米，已修 5/8。已修多少千米？", expr: "24×5/8", answer: 15, unit: "千米" },
      { text: "果园 36 棵树，桃树占 1/4。桃树几棵？", expr: "36×1/4", answer: 9, unit: "棵" },
      { text: "妈妈买 20 个鸡蛋，吃了 3/5。吃了几个？", expr: "20×3/5", answer: 12, unit: "个" },
      { text: "一根绳子 8 米，剪去 3/4。剪去几米？", expr: "8×3/4", answer: 6, unit: "米" }
    ]},
  { id: "m6u2", name: "百分数", range: [10, 100], ops: ["×"], percent: true,
    apps: [
      { text: "学校 600 人，男生占 55%。男生有多少人？", expr: "600×0.55", answer: 330, unit: "人" },
      { text: "某商品原价 200 元，打 8 折。现在多少元？", expr: "200×0.8", answer: 160, unit: "元" },
      { text: "1000 元存银行 1 年，利率 2.5%。利息多少？", expr: "1000×0.025", answer: 25, unit: "元" },
      { text: "一袋大米 50 千克，吃了 30%。还剩多少千克？", expr: "50×(1-0.3)", answer: 35, unit: "千克" },
      { text: "一本书原价 80 元，现价 64 元。打几折？", expr: "64÷80", answer: 0.8, unit: "" }
    ]}
];

DATA.math["6下"] = [
  { id: "m6d1", name: "圆柱与圆锥", range: [1, 30], ops: ["×"], pi: true,
    apps: [
      { text: "圆柱底面半径 3 厘米，高 5 厘米。体积多少？（π取3.14）", expr: "3.14×3×3×5", answer: 141.3, unit: "立方厘米" },
      { text: "圆锥底面直径 6 米，高 4 米。体积多少？", expr: "3.14×3×3×4÷3", answer: 37.68, unit: "立方米" },
      { text: "圆柱底面周长 12.56 厘米，高 10 厘米。侧面积多少？", expr: "12.56×10", answer: 125.6, unit: "平方厘米" },
      { text: "圆柱半径 5 dm 高 8 dm。表面积多少？", expr: "3.14×5×5×2+3.14×10×8", answer: 408.2, unit: "平方分米" },
      { text: "圆锥底面半径 2，高 6。体积？", expr: "3.14×2×2×6÷3", answer: 25.12, unit: "" }
    ]},
  { id: "m6d2", name: "比例", range: [1, 100], ops: ["÷"], ratio: true,
    apps: [
      { text: "一辆车 3 小时行 240 千米。5 小时行多少千米？", expr: "240÷3×5", answer: 400, unit: "千米" },
      { text: "甲乙人数比 5:3，共 80 人。甲多少人？", expr: "80×5/8", answer: 50, unit: "人" },
      { text: "地图比例尺 1:1000000，图上 5 cm 是实际多少千米？", expr: "5×1000000÷100÷1000", answer: 50, unit: "千米" },
      { text: "工厂男女工人比 7:3，男工 140 人。女工多少？", expr: "140÷7×3", answer: 60, unit: "人" },
      { text: "甲乙速度比 4:5，甲行 80 米。乙行多少米？", expr: "80÷4×5", answer: 100, unit: "米" }
    ]}
];

/* ---------- 语文：人教版 ---------- */
DATA.chinese["1上"] = [
  { id: "c1u1", name: "汉语拼音（一）", type: "pinyin",
    items: [
      { q: "“a”是单韵母吗？", correct: "是", options: ["是", "不是", "声母", "整体认读"] },
      { q: "“b”属于：", correct: "声母", options: ["单韵母", "声母", "复韵母", "整体认读音节"] },
      { q: "“ai”是：", correct: "复韵母", options: ["单韵母", "复韵母", "声母", "鼻韵母"] },
      { q: "“u”的发音口型是：", correct: "嘴唇圆", options: ["嘴唇圆", "嘴角开", "嘴扁平", "嘴张大"] },
      { q: "“an”属于：", correct: "前鼻韵母", options: ["复韵母", "前鼻韵母", "后鼻韵母", "声母"] },
      { q: "下列哪个是整体认读音节？", correct: "yi", options: ["bi", "yi", "mi", "li"] },
      { q: "声调“ˇ”是：", correct: "第三声", options: ["第一声", "第二声", "第三声", "第四声"] }
    ]
  },
  { id: "c1u2", name: "识字（一）：天地人", type: "zishi",
    items: [
      { q: "“天”字的笔顺第一笔是：", correct: "横", options: ["横", "撇", "竖", "点"] },
      { q: "“人”一共几画？", correct: "2画", options: ["1画", "2画", "3画", "4画"] },
      { q: "“你我他”的“你”读音是：", correct: "nǐ", options: ["nǐ", "wǒ", "tā", "tā"] },
      { q: "“一”字是：", correct: "数字", options: ["数字", "动作", "颜色", "动物"] },
      { q: "“口”字像什么形状？", correct: "嘴巴", options: ["嘴巴", "眼睛", "耳朵", "鼻子"] },
      { q: "“目”指的是：", correct: "眼睛", options: ["嘴巴", "眼睛", "手", "脚"] }
    ]
  },
  { id: "c1u3", name: "古诗：《静夜思》", type: "gushi",
    poem: { title: "静夜思", author: "李白", lines: ["床前明月光，", "疑是地上霜。", "举头望明月，", "低头思故乡。"] },
    items: [
      { q: "《静夜思》的作者是：", correct: "李白", options: ["杜甫", "李白", "白居易", "王维"] },
      { q: "“床前明月光”的下一句是：", correct: "疑是地上霜", options: ["疑是地上霜", "举头望明月", "低头思故乡", "夜来风雨声"] },
      { q: "诗中“举头”是指：", correct: "抬头", options: ["抬头", "低头", "转头", "回头"] },
      { q: "《静夜思》写的是什么时候？", correct: "夜晚", options: ["早晨", "中午", "傍晚", "夜晚"] },
      { q: "诗人在思念什么？", correct: "故乡", options: ["朋友", "故乡", "父母", "孩子"] }
    ]
  }
];

DATA.chinese["1下"] = [
  { id: "c1d1", name: "识字（春夏秋冬）", type: "zishi",
    items: [
      { q: "“春”代表哪个季节？", correct: "春天", options: ["春天", "夏天", "秋天", "冬天"] },
      { q: "“雪”一般在哪个季节？", correct: "冬天", options: ["春天", "夏天", "秋天", "冬天"] },
      { q: "“风”读作：", correct: "fēng", options: ["fēng", "fěng", "féng", "fèng"] },
      { q: "“花”是什么结构？", correct: "上下结构", options: ["上下结构", "左右结构", "独体字", "包围结构"] },
      { q: "“青蛙”在哪个季节最活跃？", correct: "夏天", options: ["春天", "夏天", "秋天", "冬天"] },
      { q: "“落叶”是哪个季节的景象？", correct: "秋天", options: ["春天", "夏天", "秋天", "冬天"] }
    ]
  },
  { id: "c1d2", name: "古诗：《春晓》", type: "gushi",
    poem: { title: "春晓", author: "孟浩然", lines: ["春眠不觉晓，", "处处闻啼鸟。", "夜来风雨声，", "花落知多少。"] },
    items: [
      { q: "《春晓》的作者是：", correct: "孟浩然", options: ["李白", "孟浩然", "杜甫", "王维"] },
      { q: "“春眠不觉晓”的下一句是：", correct: "处处闻啼鸟", options: ["处处闻啼鸟", "夜来风雨声", "花落知多少", "举头望明月"] },
      { q: "“闻”在这里的意思是：", correct: "听", options: ["听", "看", "闻味", "尝"] },
      { q: "“啼鸟”是指：", correct: "鸟叫", options: ["鸟飞", "鸟叫", "鸟筑巢", "鸟睡觉"] },
      { q: "诗中描写的是哪个季节？", correct: "春天", options: ["春天", "夏天", "秋天", "冬天"] }
    ]
  }
];

DATA.chinese["2上"] = [
  { id: "c2u1", name: "识字：场景歌", type: "zishi",
    items: [
      { q: "“海鸥”的“鸥”是什么旁？", correct: "鸟字旁", options: ["鸟字旁", "三点水", "口字旁", "山字旁"] },
      { q: "“沙滩”一般指：", correct: "海边", options: ["山上", "海边", "草原", "森林"] },
      { q: "“一叶扁舟”的“叶”量词指：", correct: "船只", options: ["树叶", "船只", "茶叶", "纸张"] },
      { q: "“队旗”一般在哪里出现？", correct: "学校", options: ["菜场", "学校", "医院", "公园"] },
      { q: "“铜号”是一种？", correct: "乐器", options: ["乐器", "工具", "玩具", "食物"] }
    ]
  },
  { id: "c2u2", name: "古诗：《登鹳雀楼》", type: "gushi",
    poem: { title: "登鹳雀楼", author: "王之涣", lines: ["白日依山尽，", "黄河入海流。", "欲穷千里目，", "更上一层楼。"] },
    items: [
      { q: "《登鹳雀楼》的作者：", correct: "王之涣", options: ["王之涣", "李白", "杜甫", "王维"] },
      { q: "“白日依山尽”的下一句是：", correct: "黄河入海流", options: ["黄河入海流", "更上一层楼", "欲穷千里目", "举头望明月"] },
      { q: "“千里目”指：", correct: "看得远", options: ["看得远", "千里路", "千里马", "千里眼"] },
      { q: "“更上一层楼”比喻：", correct: "再上一层", options: ["再上一层", "下楼", "走路", "回家"] },
      { q: "“尽”在“依山尽”里指：", correct: "落下", options: ["升起", "落下", "停下", "走"] }
    ]
  }
];

DATA.chinese["2下"] = [
  { id: "c2d1", name: "古诗：《村居》", type: "gushi",
    poem: { title: "村居", author: "高鼎", lines: ["草长莺飞二月天，", "拂堤杨柳醉春烟。", "儿童散学归来早，", "忙趁东风放纸鸢。"] },
    items: [
      { q: "《村居》的作者是：", correct: "高鼎", options: ["高鼎", "贺知章", "李白", "杜甫"] },
      { q: "“纸鸢”是指：", correct: "风筝", options: ["风筝", "纸船", "灯笼", "纸花"] },
      { q: "“散学”是指：", correct: "放学", options: ["上学", "放学", "学习", "考试"] },
      { q: "诗中描写的季节是：", correct: "春天", options: ["春天", "夏天", "秋天", "冬天"] },
      { q: "“拂堤杨柳醉春烟”表现了：", correct: "春天的美", options: ["春天的美", "夏天的热", "秋天的凉", "冬天的冷"] }
    ]
  },
  { id: "c2d2", name: "古诗：《咏柳》", type: "gushi",
    poem: { title: "咏柳", author: "贺知章", lines: ["碧玉妆成一树高，", "万条垂下绿丝绦。", "不知细叶谁裁出，", "二月春风似剪刀。"] },
    items: [
      { q: "《咏柳》的作者：", correct: "贺知章", options: ["贺知章", "李白", "杜甫", "白居易"] },
      { q: "“碧玉”形容：", correct: "柳树颜色", options: ["柳树颜色", "玉石", "海水", "天空"] },
      { q: "“二月春风似剪刀”是什么修辞？", correct: "比喻", options: ["比喻", "拟人", "夸张", "排比"] },
      { q: "诗里把柳树比作什么？", correct: "碧玉", options: ["碧玉", "金玉", "白玉", "翡翠"] },
      { q: "“万条垂下绿丝绦”指：", correct: "柳枝", options: ["柳枝", "柳叶", "柳花", "柳树根"] }
    ]
  }
];

DATA.chinese["3上"] = [
  { id: "c3u1", name: "古诗：《山行》", type: "gushi",
    poem: { title: "山行", author: "杜牧", lines: ["远上寒山石径斜，", "白云生处有人家。", "停车坐爱枫林晚，", "霜叶红于二月花。"] },
    items: [
      { q: "《山行》作者：", correct: "杜牧", options: ["杜牧", "李白", "杜甫", "王维"] },
      { q: "“坐”在这里的意思是：", correct: "因为", options: ["因为", "坐下", "座位", "等待"] },
      { q: "“霜叶”一般在什么季节？", correct: "秋天", options: ["春天", "夏天", "秋天", "冬天"] },
      { q: "“石径斜”的“斜”读：", correct: "xié", options: ["xié", "xiá", "xiè", "xī"] },
      { q: "诗中“红于二月花”意思是：", correct: "比花更红", options: ["和花一样红", "比花更红", "没有花红", "和花一起开"] }
    ]
  },
  { id: "c3u2", name: "识字：《大青树下的小学》", type: "zishi",
    items: [
      { q: "“傣族”的“傣”读：", correct: "dǎi", options: ["dǎi", "dāi", "dài", "tǎi"] },
      { q: "“坝”一般指：", correct: "平地", options: ["山顶", "平地", "河水", "树木"] },
      { q: "“凤尾竹”属于：", correct: "植物", options: ["动物", "植物", "建筑", "食物"] },
      { q: "“绒球花”的“绒”是什么旁？", correct: "绞丝旁", options: ["绞丝旁", "口字旁", "鸟字旁", "目字旁"] }
    ]
  }
];

DATA.chinese["3下"] = [
  { id: "c3d1", name: "古诗：《绝句》", type: "gushi",
    poem: { title: "绝句", author: "杜甫", lines: ["迟日江山丽，", "春风花草香。", "泥融飞燕子，", "沙暖睡鸳鸯。"] },
    items: [
      { q: "《绝句》的作者：", correct: "杜甫", options: ["杜甫", "李白", "王维", "白居易"] },
      { q: "“迟日”指：", correct: "春日", options: ["春日", "秋日", "夏日", "冬日"] },
      { q: "“泥融”意思是：", correct: "泥土湿润松软", options: ["泥土湿润松软", "泥土干裂", "泥土冻硬", "泥土很多"] },
      { q: "诗里描写的动物有：", correct: "燕子和鸳鸯", options: ["燕子和鸳鸯", "鸡和鸭", "猫和狗", "鱼和虾"] },
      { q: "全诗描写的季节：", correct: "春", options: ["春", "夏", "秋", "冬"] }
    ]
  },
  { id: "c3d2", name: "古诗：《惠崇春江晚景》", type: "gushi",
    poem: { title: "惠崇春江晚景", author: "苏轼", lines: ["竹外桃花三两枝，", "春江水暖鸭先知。", "蒌蒿满地芦芽短，", "正是河豚欲上时。"] },
    items: [
      { q: "《惠崇春江晚景》作者：", correct: "苏轼", options: ["苏轼", "杜甫", "李白", "白居易"] },
      { q: "“春江水暖鸭先知”说明了：", correct: "鸭子最先感知春天", options: ["鸭子最先感知春天", "鸭子游泳快", "鸭子怕冷", "鸭子叫得早"] },
      { q: "“河豚欲上时”的“上”指：", correct: "逆流而上", options: ["逆流而上", "上岸", "上船", "上天"] },
      { q: "“蒌蒿”是一种：", correct: "植物", options: ["植物", "鱼", "鸟", "石头"] },
      { q: "诗中表现的是什么季节？", correct: "早春", options: ["早春", "晚春", "盛夏", "深秋"] }
    ]
  }
];

/* 4-6 年级（古诗 + 文言文）需要输入回答 */
DATA.chinese["4上"] = [
  { id: "c4u1", name: "古诗：《题西林壁》", type: "gushi-input",
    poem: { title: "题西林壁", author: "苏轼", lines: ["横看成岭侧成峰，", "远近高低各不同。", "不识庐山真面目，", "只缘身在此山中。"] },
    items: [
      { q: "请写出“横看成岭侧成峰”的下一句：", answer: "远近高低各不同" },
      { q: "“不识庐山真面目”的下一句：", answer: "只缘身在此山中" },
      { q: "《题西林壁》作者是谁？", answer: "苏轼" },
      { q: "“只缘”的“缘”是什么意思？（一个字回答）", answer: "因为", accept: ["因为", "因"] },
      { q: "诗中描写的山是？", answer: "庐山" }
    ]
  },
  { id: "c4u2", name: "文言文：《精卫填海》", type: "wenyan",
    text: "炎帝之少女，名曰女娃。女娃游于东海，溺而不返，故为精卫，常衔西山之木石，以堙于东海。",
    items: [
      { q: "“溺”的意思是？", answer: "淹死", accept: ["淹死", "溺水"] },
      { q: "精卫衔的是什么？", answer: "木石", accept: ["木石", "西山之木石"] },
      { q: "“堙”的意思是？", answer: "填塞", accept: ["填塞", "填"] },
      { q: "炎帝的小女儿叫什么？", answer: "女娃" },
      { q: "精卫想填的是什么？", answer: "东海" }
    ]
  }
];

DATA.chinese["4下"] = [
  { id: "c4d1", name: "古诗：《宿新市徐公店》", type: "gushi-input",
    poem: { title: "宿新市徐公店", author: "杨万里", lines: ["篱落疏疏一径深，", "树头新绿未成阴。", "儿童急走追黄蝶，", "飞入菜花无处寻。"] },
    items: [
      { q: "“篱落疏疏一径深”的下一句：", answer: "树头新绿未成阴" },
      { q: "“儿童急走追黄蝶”的下一句：", answer: "飞入菜花无处寻" },
      { q: "《宿新市徐公店》作者：", answer: "杨万里" },
      { q: "“急走”的“走”意思是：", answer: "跑" },
      { q: "诗里写的季节：", answer: "春天", accept: ["春", "春天"] }
    ]
  },
  { id: "c4d2", name: "文言文：《囊萤夜读》", type: "wenyan",
    text: "胤恭勤不倦，博学多通。家贫不常得油，夏月则练囊盛数十萤火以照书，以夜继日焉。",
    items: [
      { q: "“胤”指的是谁？", answer: "车胤" },
      { q: "“练囊”是什么？", answer: "白色的丝织口袋", accept: ["白色丝织口袋", "白色的丝织口袋", "白色口袋"] },
      { q: "“以夜继日”是说什么精神？", answer: "勤学", accept: ["勤学", "刻苦学习", "勤奋"] },
      { q: "他用什么照书读？", answer: "萤火虫", accept: ["萤火虫", "萤火"] },
      { q: "“恭勤不倦”是什么意思？", answer: "恭敬勤奋不知疲倦", accept: ["勤奋不知疲倦", "勤奋", "恭敬勤奋"] }
    ]
  }
];

DATA.chinese["5上"] = [
  { id: "c5u1", name: "古诗：《示儿》", type: "gushi-input",
    poem: { title: "示儿", author: "陆游", lines: ["死去元知万事空，", "但悲不见九州同。", "王师北定中原日，", "家祭无忘告乃翁。"] },
    items: [
      { q: "《示儿》的作者：", answer: "陆游" },
      { q: "“但悲不见”的下一句：", answer: "王师北定中原日", accept: ["王师北定中原日"] },
      { q: "“乃翁”指的是？", answer: "你的父亲", accept: ["你的父亲", "父亲", "我"] },
      { q: "《示儿》表达了诗人怎样的情感？（一个词）", answer: "爱国", accept: ["爱国", "爱国情怀"] },
      { q: "“家祭”是什么活动？", answer: "祭祀祖先", accept: ["祭祖", "祭祀祖先", "家中祭祀"] }
    ]
  },
  { id: "c5u2", name: "文言文：《古人谈读书》", type: "wenyan",
    text: "敏而好学，不耻下问。知之为知之，不知为不知，是知也。默而识之，学而不厌，诲人不倦。",
    items: [
      { q: "“不耻下问”的意思：", answer: "不以向不如自己的人请教为耻", accept: ["不以向不如自己的人请教为耻", "不耻向地位低的人请教"] },
      { q: "“知之为知之，不知为不知”体现了什么态度？", answer: "诚实", accept: ["诚实", "实事求是"] },
      { q: "“学而不厌”的“厌”是什么意思？", answer: "满足" },
      { q: "“诲人不倦”指的是？", answer: "教导别人不知疲倦", accept: ["教导别人不知疲倦", "教人不疲倦", "耐心教导"] },
      { q: "“默而识之”的“识”意思：", answer: "记住", accept: ["记住", "记"] }
    ]
  }
];

DATA.chinese["5下"] = [
  { id: "c5d1", name: "古诗：《闻官军收河南河北》", type: "gushi-input",
    poem: { title: "闻官军收河南河北", author: "杜甫",
      lines: ["剑外忽传收蓟北，", "初闻涕泪满衣裳。", "却看妻子愁何在，", "漫卷诗书喜欲狂。",
              "白日放歌须纵酒，", "青春作伴好还乡。", "即从巴峡穿巫峡，", "便下襄阳向洛阳。"] },
    items: [
      { q: "《闻官军收河南河北》的作者：", answer: "杜甫" },
      { q: "“初闻涕泪满衣裳”的“涕”指？", answer: "眼泪", accept: ["眼泪", "泪"] },
      { q: "全诗表达了诗人怎样的心情？", answer: "喜悦", accept: ["喜悦", "高兴", "欣喜"] },
      { q: "“漫卷诗书喜欲狂”的“漫”：", answer: "随便", accept: ["随便", "随意"] },
      { q: "“青春”在诗里指：", answer: "春天", accept: ["春天", "明媚的春光"] }
    ]
  },
  { id: "c5d2", name: "文言文：《自相矛盾》", type: "wenyan",
    text: "楚人有鬻盾与矛者，誉之曰：“吾盾之坚，物莫能陷也。”又誉其矛曰：“吾矛之利，于物无不陷也。”或曰：“以子之矛，陷子之盾，何如？”其人弗能应也。",
    items: [
      { q: "“鬻”的意思：", answer: "卖" },
      { q: "“誉”的意思：", answer: "夸耀", accept: ["夸耀", "夸赞", "称赞"] },
      { q: "“弗能应也”是说？", answer: "不能回答", accept: ["不能回答", "无言以对", "回答不出来"] },
      { q: "成语“自相矛盾”比喻什么？", answer: "言行前后不一致", accept: ["言行前后不一致", "前后矛盾", "前后说话不一致"] },
      { q: "卖东西的人是哪国人？", answer: "楚国", accept: ["楚国", "楚人"] }
    ]
  }
];

DATA.chinese["6上"] = [
  { id: "c6u1", name: "古诗：《西江月·夜行黄沙道中》", type: "gushi-input",
    poem: { title: "西江月·夜行黄沙道中", author: "辛弃疾",
      lines: ["明月别枝惊鹊，", "清风半夜鸣蝉。", "稻花香里说丰年，", "听取蛙声一片。",
              "七八个星天外，", "两三点雨山前。", "旧时茅店社林边，", "路转溪桥忽见。"] },
    items: [
      { q: "《西江月·夜行黄沙道中》作者：", answer: "辛弃疾" },
      { q: "“稻花香里说丰年”的下一句：", answer: "听取蛙声一片" },
      { q: "“别枝”的意思：", answer: "横斜的树枝", accept: ["横斜的树枝", "斜枝", "斜伸的树枝"] },
      { q: "“社林”指的是？", answer: "土地庙旁的树林", accept: ["土地庙旁的树林", "土地庙树林", "社庙周围的树林"] },
      { q: "诗中描写的是什么季节？", answer: "夏天", accept: ["夏", "夏天"] }
    ]
  },
  { id: "c6u2", name: "文言文：《伯牙鼓琴》", type: "wenyan",
    text: "伯牙鼓琴，锺子期听之。方鼓琴而志在太山，锺子期曰：“善哉乎鼓琴！巍巍乎若太山。”少选之间而志在流水，锺子期又曰：“善哉乎鼓琴！汤汤乎若流水。”锺子期死，伯牙破琴绝弦，终身不复鼓琴，以为世无足复为鼓琴者。",
    items: [
      { q: "“鼓”琴的“鼓”意思是：", answer: "弹", accept: ["弹", "弹奏"] },
      { q: "“志在太山”的“志”是：", answer: "心中所想", accept: ["心中所想", "想到", "心想"] },
      { q: "锺子期死后伯牙做了什么？", answer: "破琴绝弦", accept: ["破琴绝弦", "摔琴", "再不弹琴", "终身不复鼓琴"] },
      { q: "成语“高山流水”比喻？", answer: "知音", accept: ["知音", "知己", "知音难觅"] },
      { q: "本文出自哪部典籍？", answer: "《吕氏春秋》", accept: ["吕氏春秋", "《吕氏春秋》"] }
    ]
  }
];

DATA.chinese["6下"] = [
  { id: "c6d1", name: "古诗：《石灰吟》", type: "gushi-input",
    poem: { title: "石灰吟", author: "于谦", lines: ["千锤万凿出深山，", "烈火焚烧若等闲。", "粉骨碎身浑不怕，", "要留清白在人间。"] },
    items: [
      { q: "《石灰吟》的作者：", answer: "于谦" },
      { q: "“千锤万凿出深山”的下一句：", answer: "烈火焚烧若等闲" },
      { q: "“清白”一语双关，既指石灰也指：", answer: "高尚的品格", accept: ["高尚的品格", "高尚品格", "品格", "人的清白"] },
      { q: "“若等闲”的意思：", answer: "好像很平常", accept: ["好像很平常", "平常", "等闲", "平常一样"] },
      { q: "本诗运用了什么手法？", answer: "托物言志", accept: ["托物言志", "借物喻人", "拟人"] }
    ]
  },
  { id: "c6d2", name: "文言文：《两小儿辩日》", type: "wenyan",
    text: "孔子东游，见两小儿辩斗，问其故。一儿曰：“我以日始出时去人近，而日中时远也。”一儿以日初出远，而日中时近也。一儿曰：“日初出大如车盖，及日中则如盘盂，此不为远者小而近者大乎？”一儿曰：“日初出沧沧凉凉，及其日中如探汤，此不为近者热而远者凉乎？”孔子不能决也。",
    items: [
      { q: "“辩斗”意思：", answer: "辩论", accept: ["辩论", "争论"] },
      { q: "“沧沧凉凉”形容：", answer: "清凉", accept: ["清凉", "凉爽", "凉"] },
      { q: "“探汤”意思：", answer: "把手伸到热水里", accept: ["把手伸到热水里", "伸手到热水里", "把手伸进热水中"] },
      { q: "孔子能不能判断？", answer: "不能", accept: ["不能", "不能决"] },
      { q: "“车盖”是什么？", answer: "车篷", accept: ["车篷", "古代马车上的篷子", "车上的篷"] }
    ]
  }
];

/* ---------- 英语：京版 + KET/PET + 万句口语 ---------- */
function W(en, zh, type) { return { en, zh, type: type || "word" }; }

/* ============================================================
   京版小学英语（北京版 / 北京出版社）1-6 年级·上下册
   每年级 3-4 个单元，每单元 15 词 + 5-6 个句子
   ============================================================ */

DATA.english["1上"] = [
  { id: "e1u1", name: "Unit 1: Hello!",
    words: [
      W("hello","你好"), W("hi","嗨"), W("I","我"), W("you","你"),
      W("am","是"), W("are","是"), W("good","好的"), W("morning","早上"),
      W("name","名字"), W("my","我的"), W("your","你的"), W("nice","好的"),
      W("meet","遇见"), W("teacher","老师"), W("student","学生")
    ],
    sentences: [
      { en: "Hello! What's your name?", zh: "你好！你叫什么名字？" },
      { en: "My name is Ann.", zh: "我叫安。" },
      { en: "Nice to meet you.", zh: "很高兴见到你。" },
      { en: "Good morning, teacher.", zh: "老师早上好。" },
      { en: "How are you? I am fine.", zh: "你好吗？我很好。" }
    ]
  },
  { id: "e1u2", name: "Unit 2: Numbers",
    words: [
      W("one","一"), W("two","二"), W("three","三"), W("four","四"),
      W("five","五"), W("six","六"), W("seven","七"), W("eight","八"),
      W("nine","九"), W("ten","十"), W("zero","零"), W("number","数字"),
      W("count","数"), W("many","许多"), W("how","怎样")
    ],
    sentences: [
      { en: "How many apples?", zh: "有多少苹果？" },
      { en: "I have three pencils.", zh: "我有三支铅笔。" },
      { en: "Let's count together.", zh: "我们一起数。" },
      { en: "One, two, three, go!", zh: "一二三，开始！" },
      { en: "I am six years old.", zh: "我六岁了。" }
    ]
  },
  { id: "e1u3", name: "Unit 3: My Body",
    words: [
      W("head","头"), W("hand","手"), W("foot","脚"), W("eye","眼睛"),
      W("ear","耳朵"), W("nose","鼻子"), W("mouth","嘴"), W("face","脸"),
      W("arm","胳膊"), W("leg","腿"), W("hair","头发"), W("tooth","牙齿"),
      W("body","身体"), W("touch","摸"), W("show","展示")
    ],
    sentences: [
      { en: "Touch your nose.", zh: "摸摸你的鼻子。" },
      { en: "Show me your hands.", zh: "把你的手给我看。" },
      { en: "This is my head.", zh: "这是我的头。" },
      { en: "I have two eyes.", zh: "我有两只眼睛。" },
      { en: "Stand up and clap your hands.", zh: "起立，拍拍手。" }
    ]
  },
  { id: "e1u4", name: "Unit 4: My School Things",
    words: [
      W("pen","钢笔"), W("pencil","铅笔"), W("ruler","尺子"), W("book","书"),
      W("bag","书包"), W("eraser","橡皮"), W("crayon","蜡笔"), W("desk","课桌"),
      W("chair","椅子"), W("box","盒子"), W("this","这个"), W("that","那个"),
      W("here","这里"), W("there","那里"), W("please","请")
    ],
    sentences: [
      { en: "This is my pen.", zh: "这是我的钢笔。" },
      { en: "What's this? It's a ruler.", zh: "这是什么？这是一把尺子。" },
      { en: "Put your book on the desk.", zh: "把书放在课桌上。" },
      { en: "Show me your pencil, please.", zh: "请把你的铅笔给我看看。" },
      { en: "My bag is here.", zh: "我的书包在这里。" }
    ]
  }
];

DATA.english["1下"] = [
  { id: "e1d1", name: "Unit 1: My Family",
    words: [
      W("father","爸爸"), W("mother","妈妈"), W("dad","爸爸"), W("mom","妈妈"),
      W("brother","哥哥/弟弟"), W("sister","姐姐/妹妹"), W("baby","宝宝"),
      W("grandpa","爷爷"), W("grandma","奶奶"), W("family","家庭"),
      W("love","爱"), W("home","家"), W("happy","快乐的"), W("this","这个"),
      W("that","那个")
    ],
    sentences: [
      { en: "This is my father.", zh: "这是我的爸爸。" },
      { en: "I love my family.", zh: "我爱我的家人。" },
      { en: "Who is that?", zh: "那是谁？" },
      { en: "She is my sister.", zh: "她是我的姐姐。" },
      { en: "We are a happy family.", zh: "我们是一个快乐的家庭。" }
    ]
  },
  { id: "e1d2", name: "Unit 2: Fruits",
    words: [
      W("apple","苹果"), W("banana","香蕉"), W("orange","橙子"), W("pear","梨"),
      W("peach","桃"), W("grape","葡萄"), W("watermelon","西瓜"), W("strawberry","草莓"),
      W("mango","芒果"), W("fruit","水果"), W("eat","吃"), W("sweet","甜的"),
      W("sour","酸的"), W("big","大的"), W("small","小的")
    ],
    sentences: [
      { en: "I like apples.", zh: "我喜欢苹果。" },
      { en: "Do you like bananas?", zh: "你喜欢香蕉吗？" },
      { en: "This banana is sweet.", zh: "这根香蕉是甜的。" },
      { en: "Have a pear, please.", zh: "请吃个梨。" },
      { en: "An apple a day keeps the doctor away.", zh: "一天一苹果，医生远离我。" }
    ]
  },
  { id: "e1d3", name: "Unit 3: Toys",
    words: [
      W("toy","玩具"), W("ball","球"), W("kite","风筝"), W("car","小汽车"),
      W("doll","洋娃娃"), W("plane","飞机"), W("train","火车"), W("boat","船"),
      W("teddy","玩具熊"), W("balloon","气球"), W("new","新的"), W("old","旧的"),
      W("nice","好的"), W("have","有"), W("give","给")
    ],
    sentences: [
      { en: "I have a new kite.", zh: "我有一个新风筝。" },
      { en: "What is this? It's a toy car.", zh: "这是什么？这是一辆玩具车。" },
      { en: "Give me the ball, please.", zh: "请把球给我。" },
      { en: "I like my teddy bear.", zh: "我喜欢我的玩具熊。" },
      { en: "Let's play with the kite.", zh: "我们一起玩风筝吧。" }
    ]
  },
  { id: "e1d4", name: "Unit 4: My Friends",
    words: [
      W("friend","朋友"), W("boy","男孩"), W("girl","女孩"), W("he","他"),
      W("she","她"), W("we","我们"), W("they","他们"), W("classmate","同学"),
      W("tall","高的"), W("short","矮的/短的"), W("kind","友善的"), W("clever","聪明的"),
      W("together","一起"), W("welcome","欢迎"), W("goodbye","再见")
    ],
    sentences: [
      { en: "This is my friend, Lily.", zh: "这是我的朋友丽丽。" },
      { en: "He is my classmate.", zh: "他是我的同学。" },
      { en: "She is a nice girl.", zh: "她是个好女孩。" },
      { en: "Let's play together.", zh: "我们一起玩吧。" },
      { en: "Goodbye, see you tomorrow.", zh: "再见，明天见。" }
    ]
  }
];

DATA.english["2上"] = [
  { id: "e2u1", name: "Unit 1: Colors",
    words: [
      W("red","红色"), W("blue","蓝色"), W("yellow","黄色"), W("green","绿色"),
      W("black","黑色"), W("white","白色"), W("pink","粉色"), W("orange","橙色"),
      W("purple","紫色"), W("brown","棕色"), W("color","颜色"), W("like","喜欢"),
      W("what","什么"), W("favorite","最喜欢的"), W("is","是")
    ],
    sentences: [
      { en: "What color is it?", zh: "这是什么颜色？" },
      { en: "I like red.", zh: "我喜欢红色。" },
      { en: "The sky is blue.", zh: "天空是蓝色的。" },
      { en: "My favorite color is green.", zh: "我最喜欢的颜色是绿色。" },
      { en: "Look at the rainbow.", zh: "看那道彩虹。" }
    ]
  },
  { id: "e2u2", name: "Unit 2: My School",
    words: [
      W("school","学校"), W("book","书"), W("pen","笔"), W("pencil","铅笔"),
      W("bag","包"), W("desk","桌子"), W("chair","椅子"), W("class","班级"),
      W("ruler","尺子"), W("eraser","橡皮"), W("learn","学习"),
      W("read","读"), W("write","写"), W("study","学习"), W("classroom","教室")
    ],
    sentences: [
      { en: "I go to school every day.", zh: "我每天去上学。" },
      { en: "Open your book, please.", zh: "请打开你的书。" },
      { en: "Where is my pencil?", zh: "我的铅笔在哪？" },
      { en: "Let's read together.", zh: "我们一起读。" },
      { en: "I love my classroom.", zh: "我爱我的教室。" }
    ]
  },
  { id: "e2u3", name: "Unit 3: Shapes",
    words: [
      W("shape","形状"), W("circle","圆形"), W("square","正方形"), W("triangle","三角形"),
      W("rectangle","长方形"), W("star","星形"), W("heart","心形"), W("oval","椭圆形"),
      W("round","圆的"), W("draw","画"), W("see","看见"), W("big","大的"),
      W("small","小的"), W("long","长的"), W("short","短的")
    ],
    sentences: [
      { en: "Draw a circle, please.", zh: "请画一个圆。" },
      { en: "I can see a star.", zh: "我能看到一颗星星。" },
      { en: "What shape is the sun?", zh: "太阳是什么形状？" },
      { en: "The window is a rectangle.", zh: "窗户是长方形的。" },
      { en: "My pencil box is square.", zh: "我的铅笔盒是正方形的。" }
    ]
  },
  { id: "e2u4", name: "Unit 4: My Clothes",
    words: [
      W("clothes","衣服"), W("T-shirt","T恤"), W("shirt","衬衫"), W("coat","外套"),
      W("dress","裙子"), W("skirt","短裙"), W("pants","裤子"), W("shoes","鞋子"),
      W("hat","帽子"), W("cap","鸭舌帽"), W("scarf","围巾"), W("sock","袜子"),
      W("wear","穿"), W("new","新的"), W("nice","漂亮的")
    ],
    sentences: [
      { en: "Put on your coat.", zh: "穿上你的外套。" },
      { en: "I like the red T-shirt.", zh: "我喜欢这件红T恤。" },
      { en: "Whose shoes are these?", zh: "这是谁的鞋？" },
      { en: "She is wearing a yellow dress.", zh: "她穿着一条黄色的裙子。" },
      { en: "Take off your hat in class.", zh: "上课时摘下帽子。" }
    ]
  }
];

DATA.english["2下"] = [
  { id: "e2d1", name: "Unit 1: Animals",
    words: [
      W("cat","猫"), W("dog","狗"), W("bird","鸟"), W("fish","鱼"),
      W("rabbit","兔子"), W("panda","熊猫"), W("tiger","老虎"), W("lion","狮子"),
      W("monkey","猴子"), W("elephant","大象"), W("bear","熊"), W("duck","鸭子"),
      W("pig","猪"), W("cow","奶牛"), W("horse","马")
    ],
    sentences: [
      { en: "I have a cat.", zh: "我有一只猫。" },
      { en: "Look at the panda!", zh: "看那只熊猫！" },
      { en: "Do you like animals?", zh: "你喜欢动物吗？" },
      { en: "The dog is running.", zh: "小狗在跑。" },
      { en: "Pandas are from China.", zh: "熊猫来自中国。" }
    ]
  },
  { id: "e2d2", name: "Unit 2: At the Zoo",
    words: [
      W("zoo","动物园"), W("giraffe","长颈鹿"), W("zebra","斑马"), W("deer","鹿"),
      W("kangaroo","袋鼠"), W("wolf","狼"), W("fox","狐狸"), W("snake","蛇"),
      W("frog","青蛙"), W("turtle","乌龟"), W("animal","动物"), W("tail","尾巴"),
      W("neck","脖子"), W("jump","跳"), W("run","跑")
    ],
    sentences: [
      { en: "Let's go to the zoo.", zh: "我们去动物园吧。" },
      { en: "The giraffe has a long neck.", zh: "长颈鹿有长长的脖子。" },
      { en: "The kangaroo can jump high.", zh: "袋鼠跳得很高。" },
      { en: "I can see a zebra.", zh: "我能看到一只斑马。" },
      { en: "How many monkeys are there?", zh: "有多少只猴子？" }
    ]
  },
  { id: "e2d3", name: "Unit 3: My House",
    words: [
      W("house","房子"), W("room","房间"), W("door","门"), W("window","窗户"),
      W("bedroom","卧室"), W("kitchen","厨房"), W("bathroom","浴室"), W("living room","客厅"),
      W("bed","床"), W("sofa","沙发"), W("TV","电视"), W("table","桌子"),
      W("clean","干净的"), W("in","在……里"), W("on","在……上")
    ],
    sentences: [
      { en: "This is my house.", zh: "这是我的家。" },
      { en: "My bedroom is small.", zh: "我的卧室很小。" },
      { en: "The cat is on the sofa.", zh: "猫在沙发上。" },
      { en: "Where is the book? It's in the bag.", zh: "书在哪？在书包里。" },
      { en: "Let's clean the kitchen.", zh: "我们来打扫厨房吧。" }
    ]
  },
  { id: "e2d4", name: "Unit 4: Food I Like",
    words: [
      W("rice","米饭"), W("noodles","面条"), W("bread","面包"), W("egg","鸡蛋"),
      W("milk","牛奶"), W("juice","果汁"), W("water","水"), W("meat","肉"),
      W("chicken","鸡肉"), W("fish","鱼"), W("soup","汤"), W("hot","热的"),
      W("cold","冷的"), W("hungry","饿的"), W("thirsty","渴的")
    ],
    sentences: [
      { en: "I am hungry. I want some rice.", zh: "我饿了，我想要一些米饭。" },
      { en: "Would you like some juice?", zh: "你想要一些果汁吗？" },
      { en: "I like noodles for lunch.", zh: "我午餐喜欢吃面条。" },
      { en: "The soup is hot.", zh: "这汤是热的。" },
      { en: "Please drink some water.", zh: "请喝点水。" }
    ]
  }
];

DATA.english["3上"] = [
  { id: "e3u1", name: "Unit 1: Daily Routine",
    words: [
      W("get","得到"), W("up","起来"), W("eat","吃"), W("breakfast","早餐"),
      W("brush","刷"), W("teeth","牙齿"), W("wash","洗"), W("face","脸"),
      W("go","去"), W("bed","床"), W("lunch","午餐"), W("dinner","晚餐"),
      W("homework","作业"), W("play","玩"), W("sleep","睡觉")
    ],
    sentences: [
      { en: "I get up at seven.", zh: "我七点起床。" },
      { en: "What do you have for breakfast?", zh: "你早餐吃什么？" },
      { en: "I brush my teeth every day.", zh: "我每天刷牙。" },
      { en: "Do your homework first.", zh: "先做作业。" },
      { en: "Time to go to bed.", zh: "该睡觉了。" }
    ]
  },
  { id: "e3u2", name: "Unit 2: Telling Time",
    words: [
      W("time","时间"), W("clock","钟"), W("watch","手表"), W("hour","小时"),
      W("minute","分钟"), W("o'clock","点钟"), W("half","半"), W("past","过"),
      W("quarter","一刻"), W("morning","早上"), W("afternoon","下午"), W("evening","晚上"),
      W("night","夜晚"), W("early","早的"), W("late","晚的")
    ],
    sentences: [
      { en: "What time is it?", zh: "现在几点了？" },
      { en: "It's seven o'clock.", zh: "现在七点整。" },
      { en: "It's half past eight.", zh: "现在八点半。" },
      { en: "I go to school in the morning.", zh: "我早上去上学。" },
      { en: "Good night! Sleep well.", zh: "晚安！睡个好觉。" }
    ]
  },
  { id: "e3u3", name: "Unit 3: My Hobbies",
    words: [
      W("hobby","爱好"), W("sing","唱歌"), W("dance","跳舞"), W("draw","画画"),
      W("paint","画画"), W("swim","游泳"), W("skate","滑冰"), W("ski","滑雪"),
      W("read","阅读"), W("music","音乐"), W("piano","钢琴"), W("violin","小提琴"),
      W("game","游戏"), W("favorite","最喜欢的"), W("can","会")
    ],
    sentences: [
      { en: "I can sing and dance.", zh: "我会唱歌也会跳舞。" },
      { en: "What's your hobby?", zh: "你的爱好是什么？" },
      { en: "She likes playing the piano.", zh: "她喜欢弹钢琴。" },
      { en: "Can you swim? Yes, I can.", zh: "你会游泳吗？是的，我会。" },
      { en: "Drawing is my favorite hobby.", zh: "画画是我最喜欢的爱好。" }
    ]
  }
];

DATA.english["3下"] = [
  { id: "e3d1", name: "Unit 1: Weather",
    words: [
      W("sunny","晴朗的"), W("rainy","下雨的"), W("cloudy","多云的"),
      W("windy","有风的"), W("snowy","下雪的"), W("hot","热的"),
      W("cold","冷的"), W("warm","暖和的"), W("cool","凉爽的"),
      W("weather","天气"), W("today","今天"), W("rain","雨"),
      W("snow","雪"), W("wind","风"), W("sun","太阳")
    ],
    sentences: [
      { en: "It's sunny today.", zh: "今天天气晴朗。" },
      { en: "How's the weather?", zh: "天气怎么样？" },
      { en: "Take your umbrella, it's raining.", zh: "带上伞，下雨了。" },
      { en: "I love snowy days.", zh: "我喜欢下雪天。" },
      { en: "It's cold outside.", zh: "外面很冷。" }
    ]
  },
  { id: "e3d2", name: "Unit 2: Four Seasons",
    words: [
      W("season","季节"), W("spring","春天"), W("summer","夏天"),
      W("autumn","秋天"), W("fall","秋天"), W("winter","冬天"),
      W("flower","花"), W("leaf","叶子"), W("tree","树"), W("ice","冰"),
      W("plant","种"), W("fly","放(风筝)/飞"), W("kite","风筝"),
      W("beach","沙滩"), W("snowman","雪人")
    ],
    sentences: [
      { en: "Which season do you like?", zh: "你喜欢哪个季节？" },
      { en: "I like spring best.", zh: "我最喜欢春天。" },
      { en: "We fly kites in spring.", zh: "春天我们放风筝。" },
      { en: "In winter we make snowmen.", zh: "冬天我们堆雪人。" },
      { en: "Leaves turn yellow in autumn.", zh: "秋天树叶变黄了。" }
    ]
  },
  { id: "e3d3", name: "Unit 3: Going Out",
    words: [
      W("park","公园"), W("zoo","动物园"), W("museum","博物馆"),
      W("library","图书馆"), W("cinema","电影院"), W("supermarket","超市"),
      W("hospital","医院"), W("street","街道"), W("road","路"),
      W("bus","公共汽车"), W("car","小汽车"), W("bike","自行车"),
      W("walk","走"), W("ride","骑"), W("by","乘")
    ],
    sentences: [
      { en: "Let's go to the park.", zh: "我们去公园吧。" },
      { en: "How do you go to school?", zh: "你怎么去上学？" },
      { en: "I go by bus.", zh: "我坐公共汽车去。" },
      { en: "The library is next to the park.", zh: "图书馆在公园旁边。" },
      { en: "Don't run on the street.", zh: "不要在街上跑。" }
    ]
  }
];

DATA.english["4上"] = [
  { id: "e4u1", name: "Unit 1: People & Jobs",
    words: [
      W("doctor","医生"), W("nurse","护士"), W("teacher","老师"),
      W("driver","司机"), W("farmer","农民"), W("worker","工人"),
      W("police","警察"), W("cook","厨师"), W("singer","歌手"),
      W("artist","艺术家"), W("writer","作家"), W("dancer","舞者"),
      W("engineer","工程师"), W("scientist","科学家"), W("musician","音乐家")
    ],
    sentences: [
      { en: "My father is a doctor.", zh: "我爸爸是医生。" },
      { en: "What does your mother do?", zh: "你妈妈是做什么的？" },
      { en: "I want to be a teacher.", zh: "我想成为一名老师。" },
      { en: "The cook makes delicious food.", zh: "厨师做美味的食物。" },
      { en: "Police officers help people.", zh: "警察帮助人们。" }
    ]
  },
  { id: "e4u2", name: "Unit 2: Sports",
    words: [
      W("sport","体育"), W("football","足球"), W("basketball","篮球"),
      W("tennis","网球"), W("baseball","棒球"), W("badminton","羽毛球"),
      W("ping-pong","乒乓球"), W("run","跑"), W("jump","跳"),
      W("swim","游泳"), W("ride","骑"), W("team","队"),
      W("player","运动员"), W("win","赢"), W("lose","输")
    ],
    sentences: [
      { en: "I like playing basketball.", zh: "我喜欢打篮球。" },
      { en: "He can play football very well.", zh: "他足球踢得很好。" },
      { en: "Let's play ping-pong after school.", zh: "放学后我们打乒乓球吧。" },
      { en: "Our team won the game.", zh: "我们队赢了比赛。" },
      { en: "Sports keep us healthy.", zh: "运动让我们保持健康。" }
    ]
  },
  { id: "e4u3", name: "Unit 3: Months & Festivals",
    words: [
      W("month","月份"), W("January","一月"), W("February","二月"),
      W("March","三月"), W("April","四月"), W("May","五月"),
      W("June","六月"), W("birthday","生日"), W("festival","节日"),
      W("Spring Festival","春节"), W("Christmas","圣诞节"),
      W("Mid-Autumn","中秋"), W("Children's Day","儿童节"),
      W("present","礼物"), W("party","聚会")
    ],
    sentences: [
      { en: "When is your birthday?", zh: "你的生日是什么时候？" },
      { en: "My birthday is in May.", zh: "我的生日在五月。" },
      { en: "Happy New Year!", zh: "新年快乐！" },
      { en: "Children love the Spring Festival.", zh: "孩子们喜欢春节。" },
      { en: "I got a present from Mom.", zh: "我收到妈妈的一份礼物。" }
    ]
  }
];

DATA.english["4下"] = [
  { id: "e4d1", name: "Unit 1: Food & Drinks",
    words: [
      W("rice","米饭"), W("noodle","面条"), W("bread","面包"),
      W("milk","牛奶"), W("juice","果汁"), W("water","水"),
      W("egg","鸡蛋"), W("meat","肉"), W("vegetable","蔬菜"),
      W("fruit","水果"), W("sandwich","三明治"), W("hamburger","汉堡"),
      W("cake","蛋糕"), W("ice cream","冰淇淋"), W("delicious","美味的")
    ],
    sentences: [
      { en: "I'd like a glass of juice.", zh: "我想要一杯果汁。" },
      { en: "What's your favorite food?", zh: "你最喜欢的食物是什么？" },
      { en: "The cake is delicious.", zh: "蛋糕很美味。" },
      { en: "Eat more vegetables.", zh: "多吃蔬菜。" },
      { en: "Can I have some water, please?", zh: "请给我一些水好吗？" }
    ]
  },
  { id: "e4d2", name: "Unit 2: In the City",
    words: [
      W("city","城市"), W("Beijing","北京"), W("Shanghai","上海"),
      W("park","公园"), W("square","广场"), W("street","街道"),
      W("bank","银行"), W("post office","邮局"), W("hospital","医院"),
      W("station","车站"), W("subway","地铁"), W("taxi","出租车"),
      W("turn","转弯"), W("left","左边"), W("right","右边")
    ],
    sentences: [
      { en: "Welcome to Beijing!", zh: "欢迎来北京！" },
      { en: "Where is the post office?", zh: "邮局在哪里？" },
      { en: "Turn left at the corner.", zh: "在拐角处向左转。" },
      { en: "The subway is fast.", zh: "地铁很快。" },
      { en: "Let's take a taxi.", zh: "我们打车吧。" }
    ]
  },
  { id: "e4d3", name: "Unit 3: Shopping",
    words: [
      W("shop","商店"), W("store","商店"), W("buy","买"), W("sell","卖"),
      W("money","钱"), W("yuan","元"), W("price","价格"),
      W("cheap","便宜的"), W("expensive","贵的"), W("size","尺码"),
      W("big","大"), W("small","小"), W("try","试"),
      W("want","想要"), W("pay","付款")
    ],
    sentences: [
      { en: "How much is it?", zh: "多少钱？" },
      { en: "It's twenty yuan.", zh: "二十块钱。" },
      { en: "Can I try it on?", zh: "我能试一下吗？" },
      { en: "This T-shirt is too big.", zh: "这件T恤太大了。" },
      { en: "I'll take it. Here's the money.", zh: "我买了，钱给你。" }
    ]
  }
];

DATA.english["5上"] = [
  { id: "e5u1", name: "Unit 1: Travel",
    words: [
      W("travel","旅行"), W("trip","旅程"), W("airport","机场"),
      W("station","车站"), W("ticket","票"), W("passport","护照"),
      W("luggage","行李"), W("hotel","酒店"), W("tourist","游客"),
      W("vacation","假期"), W("destination","目的地"), W("journey","旅程"),
      W("foreign","外国的"), W("abroad","海外"), W("souvenir","纪念品")
    ],
    sentences: [
      { en: "I'm going on a trip to Beijing.", zh: "我要去北京旅行。" },
      { en: "Where did you spend your vacation?", zh: "你假期是在哪里度过的？" },
      { en: "Don't forget your passport.", zh: "别忘了你的护照。" },
      { en: "How long is the journey?", zh: "旅程有多长？" },
      { en: "I bought a souvenir for you.", zh: "我给你买了一个纪念品。" }
    ]
  },
  { id: "e5u2", name: "Unit 2: My Hometown",
    words: [
      W("hometown","家乡"), W("country","国家"), W("village","村庄"),
      W("mountain","山"), W("river","河"), W("lake","湖"),
      W("sea","海"), W("forest","森林"), W("field","田地"),
      W("beautiful","美丽的"), W("quiet","安静的"), W("busy","繁忙的"),
      W("near","近的"), W("far","远的"), W("live","居住")
    ],
    sentences: [
      { en: "I live in Beijing.", zh: "我住在北京。" },
      { en: "My hometown is beautiful.", zh: "我的家乡很美。" },
      { en: "There is a river near my home.", zh: "我家附近有一条河。" },
      { en: "We climbed the mountain last Sunday.", zh: "上周日我们爬了山。" },
      { en: "How far is it from here?", zh: "离这儿有多远？" }
    ]
  },
  { id: "e5u3", name: "Unit 3: Healthy Habits",
    words: [
      W("healthy","健康的"), W("health","健康"), W("habit","习惯"),
      W("exercise","锻炼"), W("vegetable","蔬菜"), W("fruit","水果"),
      W("sleep","睡觉"), W("rest","休息"), W("clean","干净的"),
      W("doctor","医生"), W("medicine","药"), W("ill","生病的"),
      W("tired","累的"), W("strong","强壮的"), W("often","经常")
    ],
    sentences: [
      { en: "I exercise every morning.", zh: "我每天早上锻炼。" },
      { en: "Eat more fruit and vegetables.", zh: "多吃水果和蔬菜。" },
      { en: "Wash your hands before meals.", zh: "饭前要洗手。" },
      { en: "I feel tired and need a rest.", zh: "我很累，需要休息。" },
      { en: "Good habits keep us healthy.", zh: "好习惯使我们健康。" }
    ]
  }
];

DATA.english["5下"] = [
  { id: "e5d1", name: "Unit 1: Environment",
    words: [
      W("environment","环境"), W("pollution","污染"), W("recycle","回收"),
      W("plastic","塑料"), W("waste","垃圾"), W("protect","保护"),
      W("nature","自然"), W("forest","森林"), W("ocean","海洋"),
      W("climate","气候"), W("energy","能源"), W("save","节约"),
      W("planet","行星"), W("species","物种"), W("endangered","濒危的")
    ],
    sentences: [
      { en: "We should protect our environment.", zh: "我们应该保护我们的环境。" },
      { en: "Please don't waste water.", zh: "请不要浪费水。" },
      { en: "Recycling is important.", zh: "回收很重要。" },
      { en: "Many animals are endangered.", zh: "许多动物处于濒危状态。" },
      { en: "Let's save the planet together.", zh: "让我们一起拯救地球。" }
    ]
  },
  { id: "e5d2", name: "Unit 2: My School Life",
    words: [
      W("subject","科目"), W("Chinese","语文"), W("math","数学"),
      W("English","英语"), W("science","科学"), W("art","美术"),
      W("PE","体育"), W("music","音乐"), W("history","历史"),
      W("lesson","课"), W("library","图书馆"), W("playground","操场"),
      W("interesting","有趣的"), W("difficult","难的"), W("easy","容易的")
    ],
    sentences: [
      { en: "What's your favorite subject?", zh: "你最喜欢什么科目？" },
      { en: "My favorite subject is English.", zh: "我最喜欢的科目是英语。" },
      { en: "Math is interesting but a little difficult.", zh: "数学很有趣，但有点难。" },
      { en: "We have four lessons in the morning.", zh: "上午我们有四节课。" },
      { en: "Let's go to the playground.", zh: "我们去操场吧。" }
    ]
  },
  { id: "e5d3", name: "Unit 3: Story Time",
    words: [
      W("story","故事"), W("read","阅读"), W("book","书"), W("page","页"),
      W("title","题目"), W("writer","作者"), W("hero","英雄"),
      W("queen","女王"), W("king","国王"), W("prince","王子"),
      W("princess","公主"), W("monster","怪兽"), W("once","曾经"),
      W("then","然后"), W("finally","最终")
    ],
    sentences: [
      { en: "I like reading stories before bed.", zh: "我喜欢睡前看故事。" },
      { en: "Once upon a time, there was a princess.", zh: "从前有一位公主。" },
      { en: "Who is the hero of this story?", zh: "这个故事的主角是谁？" },
      { en: "The book has 120 pages.", zh: "这本书有120页。" },
      { en: "Finally, they lived happily ever after.", zh: "最终，他们从此过上了幸福的生活。" }
    ]
  }
];

DATA.english["6上"] = [
  { id: "e6u1", name: "Unit 1: Technology",
    words: [
      W("computer","电脑"), W("internet","互联网"), W("website","网站"),
      W("email","电子邮件"), W("password","密码"), W("download","下载"),
      W("software","软件"), W("device","设备"), W("screen","屏幕"),
      W("online","在线"), W("digital","数字的"), W("technology","技术"),
      W("invent","发明"), W("modern","现代的"), W("future","未来")
    ],
    sentences: [
      { en: "Don't share your password with others.", zh: "不要把密码告诉别人。" },
      { en: "I read news online every day.", zh: "我每天在网上看新闻。" },
      { en: "Technology changes our lives.", zh: "科技改变着我们的生活。" },
      { en: "Could you send me an email?", zh: "你可以给我发邮件吗？" },
      { en: "Which app should I download?", zh: "我应该下载哪个软件？" }
    ]
  },
  { id: "e6u2", name: "Unit 2: Countries & Cultures",
    words: [
      W("country","国家"), W("China","中国"), W("America","美国"),
      W("England","英国"), W("Canada","加拿大"), W("Australia","澳大利亚"),
      W("Japan","日本"), W("France","法国"), W("language","语言"),
      W("culture","文化"), W("flag","国旗"), W("capital","首都"),
      W("famous","著名的"), W("people","人们"), W("food","食物")
    ],
    sentences: [
      { en: "I come from China.", zh: "我来自中国。" },
      { en: "Beijing is the capital of China.", zh: "北京是中国的首都。" },
      { en: "People in England speak English.", zh: "英国人说英语。" },
      { en: "The Great Wall is very famous.", zh: "长城非常著名。" },
      { en: "Different countries have different cultures.", zh: "不同的国家有不同的文化。" }
    ]
  },
  { id: "e6u3", name: "Unit 3: Animals & Nature",
    words: [
      W("nature","自然"), W("animal","动物"), W("wild","野生的"),
      W("forest","森林"), W("desert","沙漠"), W("river","河流"),
      W("ocean","海洋"), W("mountain","山"), W("tree","树"),
      W("flower","花"), W("insect","昆虫"), W("bee","蜜蜂"),
      W("butterfly","蝴蝶"), W("dolphin","海豚"), W("whale","鲸鱼")
    ],
    sentences: [
      { en: "Dolphins are smart animals.", zh: "海豚是聪明的动物。" },
      { en: "Bees make honey from flowers.", zh: "蜜蜂用花朵酿蜜。" },
      { en: "We should protect wild animals.", zh: "我们应该保护野生动物。" },
      { en: "There are tall trees in the forest.", zh: "森林里有高高的树木。" },
      { en: "Nature is full of wonders.", zh: "大自然充满了奇迹。" }
    ]
  }
];

DATA.english["6下"] = [
  { id: "e6d1", name: "Unit 1: Dreams & Goals",
    words: [
      W("dream","梦想"), W("goal","目标"), W("future","未来"),
      W("plan","计划"), W("hope","希望"), W("succeed","成功"),
      W("achieve","实现"), W("challenge","挑战"), W("effort","努力"),
      W("ability","能力"), W("opportunity","机会"), W("decide","决定"),
      W("imagine","想象"), W("create","创造"), W("believe","相信")
    ],
    sentences: [
      { en: "What is your dream?", zh: "你的梦想是什么？" },
      { en: "I want to achieve my goals.", zh: "我想实现我的目标。" },
      { en: "Don't give up on your dreams.", zh: "不要放弃你的梦想。" },
      { en: "Believe in yourself.", zh: "相信你自己。" },
      { en: "Success needs hard work.", zh: "成功需要努力。" }
    ]
  },
  { id: "e6d2", name: "Unit 2: My Middle School",
    words: [
      W("middle school","中学"), W("primary","小学的"), W("graduate","毕业"),
      W("classmate","同学"), W("uniform","校服"), W("schoolbag","书包"),
      W("textbook","课本"), W("notebook","笔记本"), W("homework","作业"),
      W("exam","考试"), W("teacher","老师"), W("subject","科目"),
      W("ready","准备好的"), W("nervous","紧张的"), W("excited","激动的")
    ],
    sentences: [
      { en: "I'll go to middle school soon.", zh: "我快要上中学了。" },
      { en: "I'm a little nervous but excited.", zh: "我有点紧张，但也很激动。" },
      { en: "We'll wear school uniforms.", zh: "我们要穿校服。" },
      { en: "I'll miss my primary school teachers.", zh: "我会想念小学老师的。" },
      { en: "I'm ready for the new life.", zh: "我已经为新生活做好准备了。" }
    ]
  },
  { id: "e6d3", name: "Unit 3: Memories & Friends",
    words: [
      W("memory","回忆"), W("friend","朋友"), W("friendship","友谊"),
      W("forget","忘记"), W("remember","记得"), W("together","一起"),
      W("laugh","笑"), W("cry","哭"), W("share","分享"),
      W("help","帮助"), W("kind","友善的"), W("happy","快乐的"),
      W("forever","永远"), W("photo","照片"), W("smile","微笑")
    ],
    sentences: [
      { en: "We had a lot of fun together.", zh: "我们一起度过了很多快乐时光。" },
      { en: "I'll never forget my best friend.", zh: "我永远不会忘记我最好的朋友。" },
      { en: "Friends share everything.", zh: "朋友之间分享一切。" },
      { en: "Let's take a photo together.", zh: "我们一起拍张照吧。" },
      { en: "Good memories last forever.", zh: "美好的回忆永远长存。" }
    ]
  }
];

/* ============================================================
   数学补充章节：覆盖更多人教版单元
   ============================================================ */
DATA.math["1上"].push(
  { id: "m1u4", name: "20以内的进位加法", range: [5, 9], ops: ["+"], secondRange: [5, 9],
    apps: [
      { text: "树上 9 只鸟，又飞来 5 只。一共几只？", expr: "9+5", answer: 14, unit: "只" },
      { text: "小明做了 8 道题，又做 6 道。一共几道？", expr: "8+6", answer: 14, unit: "道" },
      { text: "盘里 7 块糖，妈妈又放 8 块。一共几块？", expr: "7+8", answer: 15, unit: "块" },
      { text: "停车场 6 辆车，又来 7 辆。一共几辆？", expr: "6+7", answer: 13, unit: "辆" },
      { text: "篮里 9 个苹果，又放 4 个。一共几个？", expr: "9+4", answer: 13, unit: "个" }
    ]}
);

DATA.math["1下"].push(
  { id: "m1d4", name: "找规律", range: [1, 50], ops: ["+", "-"],
    apps: [
      { text: "按规律填空：2,4,6,8,___。", expr: "8+2", answer: 10, unit: "" },
      { text: "1,3,5,7,___。", expr: "7+2", answer: 9, unit: "" },
      { text: "10,9,8,7,___。", expr: "7-1", answer: 6, unit: "" },
      { text: "5,10,15,20,___。", expr: "20+5", answer: 25, unit: "" },
      { text: "20,18,16,___。", expr: "16-2", answer: 14, unit: "" }
    ]}
);

DATA.math["2上"].push(
  { id: "m2u4", name: "认识时间", range: [1, 60], ops: ["+", "-"],
    apps: [
      { text: "小明 7 点出门，走了 25 分钟到学校。几点到？（写分钟数）", expr: "0+25", answer: 25, unit: "分" },
      { text: "1 小时 = 多少分钟？", expr: "60", answer: 60, unit: "分钟" },
      { text: "下午 2 点 30 分到 3 点 15 分，过了几分钟？", expr: "60+15-30", answer: 45, unit: "分钟" },
      { text: "电影 90 分钟 = 几小时几分？（写分钟数）", expr: "90-60", answer: 30, unit: "分" },
      { text: "上课 40 分钟，下课 10 分钟。一节课加休息共多少分？", expr: "40+10", answer: 50, unit: "分" }
    ]},
  { id: "m2u5", name: "表内乘法（二）", range: [6, 9], ops: ["×"], secondRange: [1, 9],
    apps: [
      { text: "每排 7 棵树，8 排共几棵？", expr: "7×8", answer: 56, unit: "棵" },
      { text: "每袋 9 个苹果，6 袋共几个？", expr: "9×6", answer: 54, unit: "个" },
      { text: "每盒 8 支笔，9 盒共几支？", expr: "8×9", answer: 72, unit: "支" },
      { text: "每箱 6 瓶水，9 箱共几瓶？", expr: "6×9", answer: 54, unit: "瓶" },
      { text: "每只鸡 2 条腿，35 只鸡共几条？", expr: "2×35", answer: 70, unit: "条" }
    ]}
);

DATA.math["2下"].push(
  { id: "m2d3", name: "有余数的除法", range: [1, 50], ops: ["÷"], divisorRange: [2, 9],
    apps: [
      { text: "23 个苹果平均分给 4 人，每人几个？（不计余）", expr: "(23-3)÷4", answer: 5, unit: "个" },
      { text: "37 颗糖，每袋 6 颗，最多装几袋？", expr: "(37-1)÷6", answer: 6, unit: "袋" },
      { text: "20 朵花插 6 个瓶，每瓶几朵（不计余）？", expr: "(20-2)÷6", answer: 3, unit: "朵" },
      { text: "45÷7 商几？", expr: "(45-3)÷7", answer: 6, unit: "" },
      { text: "32 本书每包 5 本，能装几包？", expr: "(32-2)÷5", answer: 6, unit: "包" }
    ]},
  { id: "m2d4", name: "克和千克", range: [1, 1000], ops: ["+", "-"], step: 100,
    apps: [
      { text: "1 千克 = 多少克？", expr: "1000", answer: 1000, unit: "克" },
      { text: "一袋米 500 克，两袋共几克？", expr: "500+500", answer: 1000, unit: "克" },
      { text: "一个苹果 200 克，5 个共几克？", expr: "200×5", answer: 1000, unit: "克" },
      { text: "2 千克橘子 = 多少克？", expr: "2000", answer: 2000, unit: "克" },
      { text: "妈妈买 3 千克苹果和 2 千克梨，共几千克？", expr: "3+2", answer: 5, unit: "千克" }
    ]}
);

DATA.math["3上"].push(
  { id: "m3u3", name: "时分秒", range: [1, 60], ops: ["+", "-"],
    apps: [
      { text: "1 分 = 60 秒，3 分 = 几秒？", expr: "60×3", answer: 180, unit: "秒" },
      { text: "8:20 到 9:05 经过多少分钟？", expr: "60-20+5", answer: 45, unit: "分钟" },
      { text: "课间 10 分钟 = 多少秒？", expr: "60×10", answer: 600, unit: "秒" },
      { text: "一节体育课 40 分钟，5 节共多少分？", expr: "40×5", answer: 200, unit: "分" },
      { text: "120 秒 = 几分钟？", expr: "120÷60", answer: 2, unit: "分钟" }
    ]},
  { id: "m3u4", name: "倍的认识", range: [2, 20], ops: ["×", "÷"],
    apps: [
      { text: "黑色 6 只，白色是它的 3 倍。白色几只？", expr: "6×3", answer: 18, unit: "只" },
      { text: "苹果 24 个，是梨 8 个的几倍？", expr: "24÷8", answer: 3, unit: "" },
      { text: "小红 9 岁，妈妈 36 岁。妈妈是小红的几倍？", expr: "36÷9", answer: 4, unit: "" },
      { text: "梨 7 千克，苹果是梨的 5 倍。苹果几千克？", expr: "7×5", answer: 35, unit: "千克" },
      { text: "鸡 12 只，鸭比鸡多 3 倍。鸭几只？", expr: "12×3+12", answer: 48, unit: "只" }
    ]},
  { id: "m3u5", name: "分数的初步认识", range: [1, 10], ops: ["+", "-"],
    apps: [
      { text: "一块蛋糕平均切 4 份，吃了 1 份，吃了几分之几？（分子）", expr: "1", answer: 1, unit: "" },
      { text: "8 分之 3 + 8 分之 2 = 8 分之几？（分子）", expr: "3+2", answer: 5, unit: "" },
      { text: "5 分之 4 - 5 分之 2 = 5 分之几？（分子）", expr: "4-2", answer: 2, unit: "" },
      { text: "一根绳分 5 段，3 段是几分之几？（分子）", expr: "3", answer: 3, unit: "" },
      { text: "10 分之 7 - 10 分之 3 = 10 分之几？（分子）", expr: "7-3", answer: 4, unit: "" }
    ]}
);

DATA.math["3下"].push(
  { id: "m3d3", name: "面积", range: [1, 30], ops: ["×"],
    apps: [
      { text: "长方形长 8 米、宽 5 米，面积多少？", expr: "8×5", answer: 40, unit: "平方米" },
      { text: "正方形边长 7 厘米，面积多少？", expr: "7×7", answer: 49, unit: "平方厘米" },
      { text: "教室长 9 米、宽 6 米，铺地面多少平方米？", expr: "9×6", answer: 54, unit: "平方米" },
      { text: "1 平方米 = 多少平方分米？", expr: "100", answer: 100, unit: "平方分米" },
      { text: "1 平方分米 = 多少平方厘米？", expr: "100", answer: 100, unit: "平方厘米" }
    ]},
  { id: "m3d4", name: "年月日", range: [1, 365], ops: ["+", "-"],
    apps: [
      { text: "平年共多少天？", expr: "365", answer: 365, unit: "天" },
      { text: "闰年共多少天？", expr: "366", answer: 366, unit: "天" },
      { text: "一年中有 31 天的大月有几个？", expr: "7", answer: 7, unit: "个" },
      { text: "二月平年有几天？", expr: "28", answer: 28, unit: "天" },
      { text: "9 月有几天？", expr: "30", answer: 30, unit: "天" }
    ]},
  { id: "m3d5", name: "小数的初步认识", range: [1, 99], ops: ["+", "-"], decimal: true,
    apps: [
      { text: "1.5 + 2.3 = ?", expr: "1.5+2.3", answer: 3.8, unit: "" },
      { text: "5.6 - 2.4 = ?", expr: "5.6-2.4", answer: 3.2, unit: "" },
      { text: "一支铅笔 1.5 元，2 支多少元？", expr: "1.5+1.5", answer: 3, unit: "元" },
      { text: "妈妈带 10 元，买菜花 7.6 元。还剩多少？", expr: "10-7.6", answer: 2.4, unit: "元" },
      { text: "一段绳 3.4 米，再接 2.6 米。共多少米？", expr: "3.4+2.6", answer: 6, unit: "米" }
    ]}
);

DATA.math["4上"].push(
  { id: "m4u3", name: "大数的认识", range: [10, 99], ops: ["+", "-"],
    apps: [
      { text: "10 万 + 20 万 = 多少万？", expr: "10+20", answer: 30, unit: "万" },
      { text: "1 亿里有多少个万？", expr: "10000", answer: 10000, unit: "万" },
      { text: "350000 读作三十五万 — 它比 28 万多多少万？", expr: "35-28", answer: 7, unit: "万" },
      { text: "我国人口约 14 亿，相当于多少万？", expr: "14×10000", answer: 140000, unit: "万" },
      { text: "一座桥长 1085 米，约多少米？（四舍五入到百位）", expr: "1100", answer: 1100, unit: "米" }
    ]},
  { id: "m4u4", name: "角的度量", range: [10, 180], ops: ["+", "-"],
    apps: [
      { text: "直角是多少度？", expr: "90", answer: 90, unit: "度" },
      { text: "平角是多少度？", expr: "180", answer: 180, unit: "度" },
      { text: "周角是多少度？", expr: "360", answer: 360, unit: "度" },
      { text: "一个角 35°，另一角 25°，两角合起来多少度？", expr: "35+25", answer: 60, unit: "度" },
      { text: "180°的角去掉 75° 还剩多少度？", expr: "180-75", answer: 105, unit: "度" }
    ]}
);

DATA.math["4下"].push(
  { id: "m4d3", name: "运算定律", range: [10, 100], ops: ["+", "×"],
    apps: [
      { text: "用简便方法：25 × 4 × 7 = ?", expr: "25×4×7", answer: 700, unit: "" },
      { text: "125 × 8 = ?", expr: "125×8", answer: 1000, unit: "" },
      { text: "99 + 99 + 99 + 99 = 99 × 4 = ?", expr: "99×4", answer: 396, unit: "" },
      { text: "(40 + 8) × 25 = ?", expr: "(40+8)×25", answer: 1200, unit: "" },
      { text: "32 × 25 = 8 × 4 × 25 = ?", expr: "32×25", answer: 800, unit: "" }
    ]},
  { id: "m4d4", name: "三角形", range: [10, 180], ops: ["+", "-"],
    apps: [
      { text: "三角形三内角之和是？", expr: "180", answer: 180, unit: "度" },
      { text: "等边三角形每个角是多少度？", expr: "180÷3", answer: 60, unit: "度" },
      { text: "直角三角形一锐角 40°，另一锐角是？", expr: "90-40", answer: 50, unit: "度" },
      { text: "等腰三角形顶角 80°，底角是？", expr: "(180-80)÷2", answer: 50, unit: "度" },
      { text: "三角形两角分别为 70° 60°，第三角是？", expr: "180-70-60", answer: 50, unit: "度" }
    ]}
);

DATA.math["5上"].push(
  { id: "m5u3", name: "小数除法", range: [1, 99], ops: ["÷"], decimal: true,
    apps: [
      { text: "一袋米 12.6 千克分 3 份，每份几千克？", expr: "12.6÷3", answer: 4.2, unit: "千克" },
      { text: "9 元买 4 个本子，每本多少元？", expr: "9÷4", answer: 2.25, unit: "元" },
      { text: "16.8 米平均剪 4 段，每段多长？", expr: "16.8÷4", answer: 4.2, unit: "米" },
      { text: "7.5 ÷ 2.5 = ?", expr: "7.5÷2.5", answer: 3, unit: "" },
      { text: "23.4 ÷ 6 = ?", expr: "23.4÷6", answer: 3.9, unit: "" }
    ]},
  { id: "m5u4", name: "多边形面积", range: [1, 30], ops: ["×"],
    apps: [
      { text: "平行四边形底 8 高 5，面积？", expr: "8×5", answer: 40, unit: "平方厘米" },
      { text: "三角形底 10 高 6，面积？", expr: "10×6÷2", answer: 30, unit: "平方厘米" },
      { text: "梯形上底 4 下底 6 高 5，面积？", expr: "(4+6)×5÷2", answer: 25, unit: "平方厘米" },
      { text: "平行四边形底 12 高 4，面积？", expr: "12×4", answer: 48, unit: "平方厘米" },
      { text: "三角形底 14 高 9，面积？", expr: "14×9÷2", answer: 63, unit: "平方厘米" }
    ]}
);

DATA.math["5下"].push(
  { id: "m5d3", name: "因数与倍数", range: [1, 100], ops: ["×", "÷"],
    apps: [
      { text: "12 的因数有几个？（1,2,3,4,6,12）", expr: "6", answer: 6, unit: "个" },
      { text: "24 和 36 的最大公因数？", expr: "12", answer: 12, unit: "" },
      { text: "6 和 8 的最小公倍数？", expr: "24", answer: 24, unit: "" },
      { text: "100 以内最大的质数？", expr: "97", answer: 97, unit: "" },
      { text: "2 的倍数中最小的两位数？", expr: "10", answer: 10, unit: "" }
    ]}
);

DATA.math["6上"].push(
  { id: "m6u3", name: "圆", range: [1, 30], ops: ["×"], pi: true,
    apps: [
      { text: "圆半径 5 cm，周长？", expr: "2×3.14×5", answer: 31.4, unit: "厘米" },
      { text: "圆直径 8 cm，周长？", expr: "3.14×8", answer: 25.12, unit: "厘米" },
      { text: "圆半径 4 cm，面积？", expr: "3.14×4×4", answer: 50.24, unit: "平方厘米" },
      { text: "圆半径 6 cm，面积？", expr: "3.14×6×6", answer: 113.04, unit: "平方厘米" },
      { text: "半圆半径 10 cm，面积？", expr: "3.14×10×10÷2", answer: 157, unit: "平方厘米" }
    ]},
  { id: "m6u4", name: "比", range: [1, 100], ops: ["÷"], ratio: true,
    apps: [
      { text: "化简比 12:8 = ?:?（写第一项）", expr: "3", answer: 3, unit: "" },
      { text: "甲乙比 3:5，共 80。甲是多少？", expr: "80÷8×3", answer: 30, unit: "" },
      { text: "学生 36 人男女比 4:5，女有几人？", expr: "36÷9×5", answer: 20, unit: "人" },
      { text: "三种糖按 1:2:3 共 60 颗，最多一种几颗？", expr: "60÷6×3", answer: 30, unit: "颗" },
      { text: "速度 60 km/h 用时 3h，路程？", expr: "60×3", answer: 180, unit: "千米" }
    ]}
);

DATA.math["6下"].push(
  { id: "m6d3", name: "百分数（折扣与利率）", range: [10, 200], ops: ["×"], secondRange: [2, 9], percent: true,
    apps: [
      { text: "商品原价 500，打 9 折后多少元？", expr: "500×0.9", answer: 450, unit: "元" },
      { text: "1000 元存 2 年利率 3%，利息？", expr: "1000×0.03×2", answer: 60, unit: "元" },
      { text: "原价 800 现价 600，打几折？", expr: "600÷800×10", answer: 7.5, unit: "折" },
      { text: "今年比去年增产 20%，去年 500 吨，今年？", expr: "500×1.2", answer: 600, unit: "吨" },
      { text: "降价 15% 后是 850 元，原价？", expr: "850÷0.85", answer: 1000, unit: "元" }
    ]}
);

DATA.math["1上"].push(
  { id: "m1u5", name: "比多少与第几", range: [1, 20], ops: ["+", "-"],
    apps: [
      { text: "小红有 7 朵花，小明有 5 朵花。小红比小明多几朵？", expr: "7-5", answer: 2, unit: "朵" },
      { text: "排队时小军前面有 4 人，后面有 6 人。这一队一共有几人？", expr: "4+1+6", answer: 11, unit: "人" },
      { text: "书架上红书有 8 本，蓝书比红书少 3 本。蓝书有几本？", expr: "8-3", answer: 5, unit: "本" },
      { text: "小猫有 6 只，小狗比小猫多 2 只。小狗有几只？", expr: "6+2", answer: 8, unit: "只" },
      { text: "从左数小兔排第 5，从右数排第 4。一共有几只小动物？", expr: "5+4-1", answer: 8, unit: "只" },
      { text: "盒子里有 9 支铅笔，拿走 4 支后还剩几支？", expr: "9-4", answer: 5, unit: "支" }
    ]},
  { id: "m1u6", name: "认识图形（一）", range: [1, 20], ops: ["+", "-"],
    apps: [
      { text: "桌上有 4 个正方体和 3 个长方体，一共有几个立体图形？", expr: "4+3", answer: 7, unit: "个" },
      { text: "盒子里有 10 个球，拿走 6 个，还剩几个球？", expr: "10-6", answer: 4, unit: "个" },
      { text: "积木中圆柱有 5 个，球有 2 个，圆柱比球多几个？", expr: "5-2", answer: 3, unit: "个" },
      { text: "小明搭房子用了 6 个长方体，又用了 4 个正方体，共用几个？", expr: "6+4", answer: 10, unit: "个" },
      { text: "篮子里原有 8 个球，又放进 5 个，现在有几个？", expr: "8+5", answer: 13, unit: "个" },
      { text: "有 12 个积木，分给弟弟 5 个，自己还剩几个？", expr: "12-5", answer: 7, unit: "个" }
    ]}
);

DATA.math["1下"].push(
  { id: "m1d5", name: "100以内不进位加法", range: [10, 99], ops: ["+"],
    apps: [
      { text: "一班有 23 人，二班有 34 人。两个班一共有多少人？", expr: "23+34", answer: 57, unit: "人" },
      { text: "书包 42 元，文具盒 15 元，一共多少元？", expr: "42+15", answer: 57, unit: "元" },
      { text: "果园上午摘 31 个梨，下午摘 26 个梨，一共摘多少个？", expr: "31+26", answer: 57, unit: "个" },
      { text: "小明有 45 张卡片，小红给他 12 张，现在有多少张？", expr: "45+12", answer: 57, unit: "张" },
      { text: "停车场有 52 辆车，又开来 17 辆，现在有多少辆？", expr: "52+17", answer: 69, unit: "辆" },
      { text: "图书角有故事书 36 本，科技书 21 本，共多少本？", expr: "36+21", answer: 57, unit: "本" }
    ]},
  { id: "m1d6", name: "100以内退位减法", range: [10, 99], ops: ["-"],
    apps: [
      { text: "篮子里有 54 个橘子，卖出 28 个，还剩多少个？", expr: "54-28", answer: 26, unit: "个" },
      { text: "小红有 63 元，买书用去 37 元，还剩多少元？", expr: "63-37", answer: 26, unit: "元" },
      { text: "树上有 72 只鸟，飞走 45 只，还剩多少只？", expr: "72-45", answer: 27, unit: "只" },
      { text: "班里有 58 本练习本，发给同学 29 本，还剩多少本？", expr: "58-29", answer: 29, unit: "本" },
      { text: "妈妈买了 81 个扣子，用了 36 个，还剩多少个？", expr: "81-36", answer: 45, unit: "个" },
      { text: "仓库有 90 袋米，运走 47 袋，还剩多少袋？", expr: "90-47", answer: 43, unit: "袋" }
    ]},
  { id: "m1d7", name: "分类与整理", range: [1, 50], ops: ["+", "-"],
    apps: [
      { text: "水果篮里苹果 12 个，梨 8 个。苹果和梨一共多少个？", expr: "12+8", answer: 20, unit: "个" },
      { text: "文具盒里铅笔 15 支，橡皮 6 块。铅笔比橡皮多多少？", expr: "15-6", answer: 9, unit: "支" },
      { text: "图书角故事书 24 本，连环画 18 本。故事书比连环画多多少本？", expr: "24-18", answer: 6, unit: "本" },
      { text: "一年级喜欢足球的有 16 人，喜欢跳绳的有 14 人。两类一共多少人？", expr: "16+14", answer: 30, unit: "人" },
      { text: "红花 21 朵，黄花比红花少 7 朵。黄花有多少朵？", expr: "21-7", answer: 14, unit: "朵" },
      { text: "统计到白兔 9 只，黑兔 5 只。白兔比黑兔多几只？", expr: "9-5", answer: 4, unit: "只" }
    ]}
);

DATA.math["2上"].push(
  { id: "m2u6", name: "角的初步认识", range: [1, 50], ops: ["+", "-"],
    apps: [
      { text: "一个三角形有 3 个角，4 个三角形一共有几个角？", expr: "3×4", answer: 12, unit: "个" },
      { text: "一张长方形纸有 4 个角，剪去 1 个角后还可能有 5 个角。这里答案是多少个？", expr: "5", answer: 5, unit: "个" },
      { text: "教室里找到 8 个直角，又找到 6 个锐角，一共找到几个角？", expr: "8+6", answer: 14, unit: "个" },
      { text: "小明画了 15 个角，擦掉 7 个，还剩几个？", expr: "15-7", answer: 8, unit: "个" },
      { text: "一本书封面有 4 个直角，6 本书封面一共有几个直角？", expr: "4×6", answer: 24, unit: "个" },
      { text: "钟面上 3 时整，时针和分针组成几个直角？", expr: "1", answer: 1, unit: "个" }
    ]},
  { id: "m2u7", name: "观察物体", range: [1, 50], ops: ["+", "-"],
    apps: [
      { text: "4 个同学从不同方向看一个杯子，每人看到一幅图。一共有几幅图？", expr: "4", answer: 4, unit: "幅" },
      { text: "桌上有 3 个正方体，右边又放 2 个，一共有几个？", expr: "3+2", answer: 5, unit: "个" },
      { text: "小红看到 6 个积木，小明看到 6 个积木，两人看到的是同一组。实际有几个积木？", expr: "6", answer: 6, unit: "个" },
      { text: "搭一个小房子用 8 个积木，拆掉 3 个，还剩几个？", expr: "8-3", answer: 5, unit: "个" },
      { text: "一排摆 5 个正方体，摆 3 排，一共多少个？", expr: "5×3", answer: 15, unit: "个" },
      { text: "从前面看有 4 个方块，从上面看仍是同一组。方块总数已知是 4 个，答案是多少？", expr: "4", answer: 4, unit: "个" }
    ]},
  { id: "m2u8", name: "简单排列组合", range: [1, 20], ops: ["×", "+"], secondRange: [1, 9],
    apps: [
      { text: "有 3 件上衣和 2 条裤子，一共有多少种搭配？", expr: "3×2", answer: 6, unit: "种" },
      { text: "用数字 1、2、3 能组成几个没有重复数字的两位数？", expr: "3×2", answer: 6, unit: "个" },
      { text: "小明有 4 种饮料和 3 种点心，各选一种，有多少种选法？", expr: "4×3", answer: 12, unit: "种" },
      { text: "从 5 个小朋友中选 1 人当组长，有几种选法？", expr: "5", answer: 5, unit: "种" },
      { text: "红、黄、蓝 3 种颜色任选 2 种排成一排，有几种排法？", expr: "3×2", answer: 6, unit: "种" },
      { text: "2 顶帽子和 4 条围巾搭配，有多少种搭配？", expr: "2×4", answer: 8, unit: "种" }
    ]}
);

DATA.math["2下"].push(
  { id: "m2d5", name: "混合运算入门", range: [1, 50], ops: ["+", "-", "×", "÷"], mixed: true,
    apps: [
      { text: "小明买 3 支铅笔，每支 2 元，又买一本 5 元的本子，一共多少元？", expr: "3×2+5", answer: 11, unit: "元" },
      { text: "有 20 个苹果，先吃 4 个，剩下平均分给 4 人，每人几个？", expr: "(20-4)÷4", answer: 4, unit: "个" },
      { text: "每盒有 6 个杯子，买 3 盒，打碎 2 个，还剩几个？", expr: "6×3-2", answer: 16, unit: "个" },
      { text: "24 朵花平均插在 4 个花瓶里，又给每瓶添 2 朵，每瓶现在几朵？", expr: "24÷4+2", answer: 8, unit: "朵" },
      { text: "小红有 30 元，买 4 个 5 元的面包，还剩多少元？", expr: "30-4×5", answer: 10, unit: "元" },
      { text: "3 个小组每组 8 人，又来了 5 人，现在一共多少人？", expr: "3×8+5", answer: 29, unit: "人" }
    ]},
  { id: "m2d6", name: "数据收集整理", range: [1, 100], ops: ["+", "-"],
    apps: [
      { text: "调查喜欢苹果的有 18 人，喜欢香蕉的有 12 人。两类一共多少人？", expr: "18+12", answer: 30, unit: "人" },
      { text: "二年级喜欢足球 26 人，喜欢篮球 19 人。喜欢足球的多多少人？", expr: "26-19", answer: 7, unit: "人" },
      { text: "统计到晴天 15 天，雨天 6 天。晴天比雨天多几天？", expr: "15-6", answer: 9, unit: "天" },
      { text: "图书借阅表中故事书借出 34 本，科技书借出 28 本，一共借出多少本？", expr: "34+28", answer: 62, unit: "本" },
      { text: "投票中 A 项 42 票，B 项比 A 项少 17 票。B 项多少票？", expr: "42-17", answer: 25, unit: "票" },
      { text: "全班 45 人，参加统计的有 39 人，还有几人没参加？", expr: "45-39", answer: 6, unit: "人" }
    ]},
  { id: "m2d7", name: "推理", range: [1, 20], ops: ["+", "-"],
    apps: [
      { text: "红、黄、蓝三支笔，小明拿的不是红也不是黄，他拿的是蓝笔。答案写几支蓝笔？", expr: "1", answer: 1, unit: "支" },
      { text: "甲、乙、丙排队，甲不在第一，乙不在第二，丙在第一。乙排第几？", expr: "3", answer: 3, unit: "" },
      { text: "三盒糖分别有 6、8、10 块。红盒不是最多也不是最少，红盒有几块？", expr: "8", answer: 8, unit: "块" },
      { text: "小猫、小狗、小兔比赛，小兔不是第一，小狗不是第一也不是第二，小狗第几？", expr: "3", answer: 3, unit: "" },
      { text: "三个数 4、7、9，最大数和最小数相差多少？", expr: "9-4", answer: 5, unit: "" },
      { text: "小红比小明高，小明比小刚高。三人中最高的是小红，答案写第几高？", expr: "1", answer: 1, unit: "" }
    ]}
);

DATA.math["4上"].push(
  { id: "m4u5", name: "公顷和平方千米", range: [1, 100], ops: ["×", "÷"], secondRange: [2, 12],
    apps: [
      { text: "一个公园占地 8 公顷，合多少平方米？", expr: "8×10000", answer: 80000, unit: "平方米" },
      { text: "一块地 30000 平方米，合多少公顷？", expr: "30000÷10000", answer: 3, unit: "公顷" },
      { text: "2 平方千米合多少公顷？", expr: "2×100", answer: 200, unit: "公顷" },
      { text: "一个农场 5 平方千米，其中 120 公顷种玉米，剩下多少公顷？", expr: "5×100-120", answer: 380, unit: "公顷" },
      { text: "学校操场约 2 公顷，4 个这样的操场约多少平方米？", expr: "2×4×10000", answer: 80000, unit: "平方米" },
      { text: "600 公顷合多少平方千米？", expr: "600÷100", answer: 6, unit: "平方千米" }
    ]},
  { id: "m4u6", name: "条形统计图", range: [1, 1000], ops: ["+", "-"],
    apps: [
      { text: "统计图中一班 48 人，二班 45 人，两个班共多少人？", expr: "48+45", answer: 93, unit: "人" },
      { text: "四年级喜欢足球 86 人，喜欢篮球 64 人。足球比篮球多多少人？", expr: "86-64", answer: 22, unit: "人" },
      { text: "图书借阅中故事书 125 本，科技书 98 本，故事书比科技书多多少本？", expr: "125-98", answer: 27, unit: "本" },
      { text: "某周晴天 4 天，阴天 2 天，雨天 1 天。一共统计几天？", expr: "4+2+1", answer: 7, unit: "天" },
      { text: "商店上午卖出 236 个面包，下午卖出 189 个，一天共卖多少个？", expr: "236+189", answer: 425, unit: "个" },
      { text: "统计表中男生 132 人，女生比男生少 8 人，女生多少人？", expr: "132-8", answer: 124, unit: "人" }
    ]},
  { id: "m4u7", name: "速度、时间和路程", range: [10, 300], ops: ["×", "÷"], secondRange: [2, 12],
    apps: [
      { text: "汽车每小时行 80 千米，5 小时行多少千米？", expr: "80×5", answer: 400, unit: "千米" },
      { text: "火车 4 小时行 360 千米，平均每小时行多少千米？", expr: "360÷4", answer: 90, unit: "千米" },
      { text: "小明每分钟走 60 米，12 分钟走多少米？", expr: "60×12", answer: 720, unit: "米" },
      { text: "一辆车行 270 千米，用 3 小时，速度是多少？", expr: "270÷3", answer: 90, unit: "千米/时" },
      { text: "飞机每小时飞 750 千米，2 小时飞多少千米？", expr: "750×2", answer: 1500, unit: "千米" },
      { text: "一段路长 480 米，小红每分钟走 80 米，需要几分钟？", expr: "480÷80", answer: 6, unit: "分钟" }
    ]}
);

DATA.math["4下"].push(
  { id: "m4d5", name: "小数的意义和性质", range: [1, 100], ops: ["+", "-"], decimal: true,
    apps: [
      { text: "把 3.50 化简后是多少？", expr: "3.5", answer: 3.5, unit: "" },
      { text: "0.8 里面有几个 0.1？", expr: "8", answer: 8, unit: "个" },
      { text: "5 个 0.01 是多少？", expr: "0.05", answer: 0.05, unit: "" },
      { text: "3.6 和 3.60 的大小关系是相等，答案写 1 表示相等。", expr: "1", answer: 1, unit: "" },
      { text: "一根绳子长 2.5 米，又接上 1.25 米，现在长多少米？", expr: "2.5+1.25", answer: 3.75, unit: "米" },
      { text: "一桶油 9.8 千克，用去 2.35 千克，还剩多少千克？", expr: "9.8-2.35", answer: 7.45, unit: "千克" }
    ]},
  { id: "m4d6", name: "小数乘除移动规律", range: [1, 100], ops: ["×", "÷"], decimal: true,
    apps: [
      { text: "3.5 扩大到原来的 10 倍是多少？", expr: "3.5×10", answer: 35, unit: "" },
      { text: "48 缩小到原来的 1/100 是多少？", expr: "48÷100", answer: 0.48, unit: "" },
      { text: "0.76 扩大到原来的 100 倍是多少？", expr: "0.76×100", answer: 76, unit: "" },
      { text: "125.6 缩小到原来的 1/10 是多少？", expr: "125.6÷10", answer: 12.56, unit: "" },
      { text: "1 千克苹果 6.8 元，10 千克多少元？", expr: "6.8×10", answer: 68, unit: "元" },
      { text: "100 张同样的纸厚 8.5 厘米，1 张纸厚多少厘米？", expr: "8.5÷100", answer: 0.085, unit: "厘米" }
    ]},
  { id: "m4d7", name: "平均数", range: [1, 100], ops: ["+", "÷"], divisorRange: [2, 9],
    apps: [
      { text: "小明三次数学成绩 90、95、85 分，平均多少分？", expr: "(90+95+85)÷3", answer: 90, unit: "分" },
      { text: "4 天读书页数分别是 20、25、30、25 页，平均每天读多少页？", expr: "(20+25+30+25)÷4", answer: 25, unit: "页" },
      { text: "三筐苹果分别重 18、22、20 千克，平均每筐多少千克？", expr: "(18+22+20)÷3", answer: 20, unit: "千克" },
      { text: "五个同学跳绳总数 450 下，平均每人多少下？", expr: "450÷5", answer: 90, unit: "下" },
      { text: "两辆车共行 360 千米，平均每辆行多少千米？", expr: "360÷2", answer: 180, unit: "千米" },
      { text: "一组数据平均数 24，有 4 个数，总和是多少？", expr: "24×4", answer: 96, unit: "" }
    ]}
);

DATA.math["5上"].push(
  { id: "m5u5", name: "位置", range: [1, 20], ops: ["+", "-"],
    apps: [
      { text: "电影院第 6 列第 4 行可记作 (6,4)。列数加行数是多少？", expr: "6+4", answer: 10, unit: "" },
      { text: "点 A 在第 3 列第 8 行，点 B 在同一列第 2 行。两点行数相差多少？", expr: "8-2", answer: 6, unit: "" },
      { text: "棋子从 (2,3) 向右移动 5 格到第几列？", expr: "2+5", answer: 7, unit: "列" },
      { text: "棋子从 (9,6) 向下移动 4 格到第几行？", expr: "6-4", answer: 2, unit: "行" },
      { text: "同一行有 12 个座位，小明在第 5 列，他右边还有几个座位？", expr: "12-5", answer: 7, unit: "个" },
      { text: "从第 2 行到第 9 行一共相差几行？", expr: "9-2", answer: 7, unit: "行" }
    ]},
  { id: "m5u6", name: "可能性", range: [1, 100], ops: ["+", "-", "÷"],
    apps: [
      { text: "袋中有 3 个红球、2 个白球，共有几个球？", expr: "3+2", answer: 5, unit: "个" },
      { text: "袋中 4 个红球、6 个蓝球，摸到红球的可能性是几分之几？", expr: "4÷10", answer: 0.4, unit: "" },
      { text: "盒中全是 8 个黄球，摸到黄球的可能性用 1 表示，答案是多少？", expr: "1", answer: 1, unit: "" },
      { text: "转盘 10 格中有 3 格中奖，中奖可能性是多少？", expr: "3÷10", answer: 0.3, unit: "" },
      { text: "袋中红球 5 个，白球比红球少 2 个，白球几个？", expr: "5-2", answer: 3, unit: "个" },
      { text: "一共有 12 张卡片，其中数字卡 9 张，字母卡几张？", expr: "12-9", answer: 3, unit: "张" }
    ]},
  { id: "m5u7", name: "植树问题", range: [1, 200], ops: ["+", "-", "×", "÷"], mixed: true,
    apps: [
      { text: "一条路长 100 米，每隔 10 米栽一棵，两端都栽，共栽几棵？", expr: "100÷10+1", answer: 11, unit: "棵" },
      { text: "一条路有 12 棵树，两端都栽，相邻两棵间隔 5 米，这条路长多少米？", expr: "(12-1)×5", answer: 55, unit: "米" },
      { text: "圆形花坛周长 60 米，每隔 5 米摆一盆花，共摆几盆？", expr: "60÷5", answer: 12, unit: "盆" },
      { text: "从一楼到六楼，每层楼梯 18 级，一共要上几段楼梯？", expr: "6-1", answer: 5, unit: "段" },
      { text: "钟敲 6 下用 10 秒，平均每个间隔几秒？", expr: "10÷(6-1)", answer: 2, unit: "秒" },
      { text: "跑道边插 20 面旗，间隔 4 米，两端都插，这段跑道长多少米？", expr: "(20-1)×4", answer: 76, unit: "米" }
    ]}
);

DATA.math["5下"].push(
  { id: "m5d4", name: "分数的意义和性质", range: [1, 20], ops: ["+", "-"], fraction: true,
    apps: [
      { text: "把 2/4 化成最简分数是多少？", expr: "1/2", answer: "1/2", unit: "" },
      { text: "3/5 的分子和分母同时乘 2 后是多少？", expr: "6/10", answer: "3/5", unit: "" },
      { text: "1 里面有几个 1/4？", expr: "1÷(1/4)", answer: 4, unit: "个" },
      { text: "8 个 1/8 是多少？", expr: "8/8", answer: 1, unit: "" },
      { text: "把 6/9 约分成最简分数是多少？", expr: "2/3", answer: "2/3", unit: "" },
      { text: "5/6 里面有几个 1/6？", expr: "5", answer: 5, unit: "个" }
    ]},
  { id: "m5d5", name: "通分和约分", range: [1, 20], ops: ["+", "-"], fraction: true,
    apps: [
      { text: "1/2 和 1/3 的最小公分母是多少？", expr: "6", answer: 6, unit: "" },
      { text: "把 1/2 通分成分母为 6 的分数是多少？", expr: "3/6", answer: "1/2", unit: "" },
      { text: "把 2/3 通分成分母为 12 的分数是多少？", expr: "8/12", answer: "2/3", unit: "" },
      { text: "18/24 约分成最简分数是多少？", expr: "3/4", answer: "3/4", unit: "" },
      { text: "比较 3/4 和 2/3，较大的分数是多少？", expr: "3/4", answer: "3/4", unit: "" },
      { text: "4/10 约分成最简分数是多少？", expr: "2/5", answer: "2/5", unit: "" }
    ]},
  { id: "m5d6", name: "折线统计图", range: [1, 1000], ops: ["+", "-", "÷"],
    apps: [
      { text: "某地周一气温 18℃，周二 22℃，升高多少℃？", expr: "22-18", answer: 4, unit: "℃" },
      { text: "身高记录从 140 厘米长到 148 厘米，增长多少厘米？", expr: "148-140", answer: 8, unit: "厘米" },
      { text: "小明上半年读书 12、15、18 本，三个月共读多少本？", expr: "12+15+18", answer: 45, unit: "本" },
      { text: "某商品一月卖 260 件，二月卖 310 件，多卖多少件？", expr: "310-260", answer: 50, unit: "件" },
      { text: "四周运动时间共 280 分钟，平均每周多少分钟？", expr: "280÷4", answer: 70, unit: "分钟" },
      { text: "折线从 35 上升到 50，增加多少？", expr: "50-35", answer: 15, unit: "" }
    ]}
);

/* ============================================================
   语文补充章节
   ============================================================ */
DATA.chinese["1上"].push(
  { id: "c1u4", name: "古诗：《咏鹅》", type: "gushi",
    poem: { title: "咏鹅", author: "骆宾王", lines: ["鹅，鹅，鹅，", "曲项向天歌。", "白毛浮绿水，", "红掌拨清波。"] },
    items: [
      { q: "《咏鹅》作者：", correct: "骆宾王", options: ["李白", "骆宾王", "杜甫", "贺知章"] },
      { q: "诗中描写的动物：", correct: "鹅", options: ["鸭", "鹅", "鸡", "鸟"] },
      { q: "“红掌”指鹅的：", correct: "脚", options: ["头", "脚", "翅膀", "嘴"] },
      { q: "“曲项”指：", correct: "弯着脖子", options: ["弯着脖子", "翘着尾巴", "张开翅膀", "低头"] },
      { q: "“拨清波”的“拨”意思：", correct: "划水", options: ["弹拨", "划水", "撑船", "游泳"] }
    ]}
);

DATA.chinese["1下"].push(
  { id: "c1d3", name: "古诗：《赠汪伦》", type: "gushi",
    poem: { title: "赠汪伦", author: "李白", lines: ["李白乘舟将欲行，", "忽闻岸上踏歌声。", "桃花潭水深千尺，", "不及汪伦送我情。"] },
    items: [
      { q: "《赠汪伦》作者：", correct: "李白", options: ["李白", "汪伦", "杜甫", "王维"] },
      { q: "“踏歌”是一种：", correct: "舞蹈唱歌", options: ["舞蹈唱歌", "走路", "踩水", "跺脚"] },
      { q: "“桃花潭水深千尺”用什么手法？", correct: "夸张", options: ["夸张", "拟人", "比喻", "排比"] },
      { q: "“不及”意思：", correct: "比不上", options: ["比不上", "来不及", "不行", "不到"] },
      { q: "诗里表达的情感：", correct: "友情", options: ["友情", "爱情", "思乡", "悲伤"] }
    ]}
);

DATA.chinese["2上"].push(
  { id: "c2u3", name: "古诗：《望庐山瀑布》", type: "gushi",
    poem: { title: "望庐山瀑布", author: "李白", lines: ["日照香炉生紫烟，", "遥看瀑布挂前川。", "飞流直下三千尺，", "疑是银河落九天。"] },
    items: [
      { q: "《望庐山瀑布》作者：", correct: "李白", options: ["李白", "杜甫", "苏轼", "王维"] },
      { q: "“紫烟”指：", correct: "山间云雾", options: ["山间云雾", "真烟", "紫色丝绸", "彩虹"] },
      { q: "“飞流直下三千尺”用了：", correct: "夸张", options: ["夸张", "比喻", "拟人", "对偶"] },
      { q: "“银河”是：", correct: "星河", options: ["银的河", "星河", "银山的河", "夜空的水"] },
      { q: "“九天”指：", correct: "天的最高处", options: ["九重天", "天的最高处", "九日", "九个天"] }
    ]}
);

DATA.chinese["2下"].push(
  { id: "c2d3", name: "古诗：《赋得古原草送别》（节选）", type: "gushi",
    poem: { title: "赋得古原草送别", author: "白居易", lines: ["离离原上草，", "一岁一枯荣。", "野火烧不尽，", "春风吹又生。"] },
    items: [
      { q: "本诗作者：", correct: "白居易", options: ["李白", "杜甫", "白居易", "王维"] },
      { q: "“离离”形容：", correct: "草茂盛", options: ["草茂盛", "离别", "稀疏", "杂乱"] },
      { q: "“枯荣”指：", correct: "枯萎和茂盛", options: ["枯萎和茂盛", "枯燥", "光荣", "繁荣"] },
      { q: "诗的主题：", correct: "野草的生命力", options: ["野草的生命力", "战争", "牧场", "春天"] },
      { q: "“吹又生”说明：", correct: "野草顽强", options: ["野草顽强", "风大", "草易长", "春来早"] }
    ]}
);

DATA.chinese["3上"].push(
  { id: "c3u3", name: "古诗：《赠刘景文》", type: "gushi",
    poem: { title: "赠刘景文", author: "苏轼", lines: ["荷尽已无擎雨盖，", "菊残犹有傲霜枝。", "一年好景君须记，", "最是橙黄橘绿时。"] },
    items: [
      { q: "本诗作者：", correct: "苏轼", options: ["苏轼", "李白", "杜甫", "王维"] },
      { q: "“擎雨盖”指：", correct: "荷叶", options: ["荷叶", "雨伞", "莲蓬", "荷花"] },
      { q: "“傲霜枝”形容：", correct: "菊枝不怕霜", options: ["菊枝不怕霜", "枝条骄傲", "傲气的枝", "霜枝"] },
      { q: "诗中描写哪个季节？", correct: "深秋", options: ["初春", "盛夏", "深秋", "寒冬"] },
      { q: "“最是橙黄橘绿时”表达：", correct: "赞美秋景", options: ["赞美秋景", "悲秋", "感慨时光", "送别"] }
    ]}
);

DATA.chinese["3下"].push(
  { id: "c3d3", name: "古诗：《九月九日忆山东兄弟》", type: "gushi",
    poem: { title: "九月九日忆山东兄弟", author: "王维", lines: ["独在异乡为异客，", "每逢佳节倍思亲。", "遥知兄弟登高处，", "遍插茱萸少一人。"] },
    items: [
      { q: "本诗作者：", correct: "王维", options: ["李白", "杜甫", "王维", "白居易"] },
      { q: "“九月九日”指什么节？", correct: "重阳节", options: ["端午节", "中秋节", "重阳节", "春节"] },
      { q: "“倍思亲”的“倍”是：", correct: "更加", options: ["更加", "两倍", "加倍", "倍数"] },
      { q: "“茱萸”是一种：", correct: "植物", options: ["食物", "植物", "动物", "器具"] },
      { q: "诗中表达：", correct: "思念亲人", options: ["思念亲人", "登山乐趣", "节日庆贺", "山东风景"] }
    ]}
);

DATA.chinese["4上"].push(
  { id: "c4u3", name: "古诗：《暮江吟》", type: "gushi-input",
    poem: { title: "暮江吟", author: "白居易", lines: ["一道残阳铺水中，", "半江瑟瑟半江红。", "可怜九月初三夜，", "露似真珠月似弓。"] },
    items: [
      { q: "《暮江吟》作者：", answer: "白居易" },
      { q: "“一道残阳铺水中”的下一句：", answer: "半江瑟瑟半江红" },
      { q: "“瑟瑟”形容什么？", answer: "碧绿色", accept: ["碧绿色", "青绿", "碧绿"] },
      { q: "“真珠”比喻：", answer: "露珠", accept: ["露珠", "露水"] },
      { q: "“月似弓”用了什么手法？", answer: "比喻" }
    ]},
  { id: "c4u4", name: "文言文：《王戎不取道旁李》", type: "wenyan",
    text: "王戎七岁，尝与诸小儿游。看道边李树多子折枝，诸儿竞走取之，唯戎不动。人问之，答曰：“树在道边而多子，此必苦李。”取之，信然。",
    items: [
      { q: "“竞走”意思：", answer: "争着跑过去", accept: ["争着跑过去", "竞相跑过去", "抢着跑"] },
      { q: "“唯戎不动”的“唯”：", answer: "只有", accept: ["只有", "只"] },
      { q: "王戎判断李子苦的理由：", answer: "树在道边果实却多", accept: ["树在道边果实却多", "道边李必苦", "树在路边果多说明苦"] },
      { q: "故事告诉我们什么？", answer: "善于观察和思考", accept: ["善于观察和思考", "要会动脑筋", "善于思考", "动脑筋"] },
      { q: "王戎几岁？", answer: "七岁", accept: ["七", "七岁"] }
    ]}
);

DATA.chinese["4下"].push(
  { id: "c4d3", name: "古诗：《四时田园杂兴》（节选）", type: "gushi-input",
    poem: { title: "四时田园杂兴·其二十五", author: "范成大", lines: ["梅子金黄杏子肥，", "麦花雪白菜花稀。", "日长篱落无人过，", "惟有蜻蜓蛱蝶飞。"] },
    items: [
      { q: "《四时田园杂兴》作者：", answer: "范成大" },
      { q: "“梅子金黄杏子肥”的下一句：", answer: "麦花雪白菜花稀" },
      { q: "诗描写的是什么季节？", answer: "夏天", accept: ["夏", "初夏", "夏天"] },
      { q: "“蛱蝶”是一种？", answer: "蝴蝶" },
      { q: "诗里描绘了怎样的农村景象？", answer: "宁静悠闲", accept: ["宁静悠闲", "宁静", "悠闲", "安静"] }
    ]}
);

DATA.chinese["5上"].push(
  { id: "c5u3", name: "古诗：《长相思》", type: "gushi-input",
    poem: { title: "长相思", author: "纳兰性德",
      lines: ["山一程，水一程，", "身向榆关那畔行，", "夜深千帐灯。", "风一更，雪一更，", "聒碎乡心梦不成，", "故园无此声。"] },
    items: [
      { q: "《长相思》作者：", answer: "纳兰性德" },
      { q: "“榆关”指哪里？", answer: "山海关", accept: ["山海关", "山海关一带"] },
      { q: "“聒碎乡心梦不成”的“聒”意思：", answer: "声音嘈杂", accept: ["声音嘈杂", "嘈杂", "吵闹"] },
      { q: "全词表达了：", answer: "思乡之情", accept: ["思乡之情", "思乡", "想家"] },
      { q: "词中描写哪个季节的天气？", answer: "冬天", accept: ["冬天", "冬"] }
    ]}
);

DATA.chinese["5下"].push(
  { id: "c5d3", name: "文言文：《杨氏之子》", type: "wenyan",
    text: "梁国杨氏子九岁，甚聪惠。孔君平诣其父，父不在，乃呼儿出。为设果，果有杨梅。孔指以示儿曰：“此是君家果。”儿应声答曰：“未闻孔雀是夫子家禽。”",
    items: [
      { q: "“聪惠”意思：", answer: "聪明", accept: ["聪明", "聪慧"] },
      { q: "“诣”意思：", answer: "拜访", accept: ["拜访", "访"] },
      { q: "“未闻孔雀是夫子家禽”体现了：", answer: "机智应对", accept: ["机智应对", "机智", "聪明机智"] },
      { q: "“为设果”的“设”：", answer: "摆设", accept: ["摆设", "摆"] },
      { q: "杨氏之子几岁？", answer: "九岁" }
    ]}
);

DATA.chinese["6上"].push(
  { id: "c6u3", name: "古诗：《七律·长征》", type: "gushi-input",
    poem: { title: "七律·长征", author: "毛泽东",
      lines: ["红军不怕远征难，", "万水千山只等闲。", "五岭逶迤腾细浪，", "乌蒙磅礴走泥丸。",
              "金沙水拍云崖暖，", "大渡桥横铁索寒。", "更喜岷山千里雪，", "三军过后尽开颜。"] },
    items: [
      { q: "《七律·长征》作者：", answer: "毛泽东" },
      { q: "“万水千山只等闲”的“等闲”意思：", answer: "平常", accept: ["平常", "平常事", "普通"] },
      { q: "“逶迤”形容什么？", answer: "弯曲连绵的样子", accept: ["弯曲连绵", "弯弯曲曲", "曲折连绵", "蜿蜒"] },
      { q: "“尽开颜”意思：", answer: "都露出笑脸", accept: ["都露出笑脸", "都笑了", "笑容满面"] },
      { q: "表达了红军怎样的精神？", answer: "革命乐观主义", accept: ["革命乐观主义", "乐观", "英勇乐观", "革命英雄主义"] }
    ]}
);

DATA.chinese["6下"].push(
  { id: "c6d3", name: "古诗：《十五夜望月》", type: "gushi-input",
    poem: { title: "十五夜望月", author: "王建", lines: ["中庭地白树栖鸦，", "冷露无声湿桂花。", "今夜月明人尽望，", "不知秋思落谁家。"] },
    items: [
      { q: "《十五夜望月》作者：", answer: "王建" },
      { q: "“中庭地白”的“地白”指：", answer: "月光洒在地上", accept: ["月光洒在地上", "月光照地", "地上一片白"] },
      { q: "“树栖鸦”说明：", answer: "环境寂静", accept: ["环境寂静", "夜深", "寂静"] },
      { q: "“不知秋思落谁家”表达：", answer: "思乡怀人", accept: ["思乡怀人", "思乡", "思念", "怀念"] },
      { q: "诗写的是哪个节日？", answer: "中秋节", accept: ["中秋", "中秋节"] }
    ]}
);

/* ============================================================
   语文：小学必背古诗扩充（1-6 年级 人教版精选）
   ============================================================ */

/* —— 1 年级上 —— */
DATA.chinese["1上"].push(
  { id: "c1u5", name: "古诗：《风》", type: "gushi",
    poem: { title: "风", author: "李峤", lines: ["解落三秋叶，", "能开二月花。", "过江千尺浪，", "入竹万竿斜。"] },
    items: [
      { q: "《风》的作者：", correct: "李峤", options: ["李白", "李峤", "李煜", "李商隐"] },
      { q: "“解落三秋叶”说的是风的什么？", correct: "吹落秋叶", options: ["吹落秋叶", "种树", "刮起风沙", "下雪"] },
      { q: "“二月花”指：", correct: "春花", options: ["秋花", "春花", "冬花", "夏花"] },
      { q: "“千尺浪”用了什么修辞？", correct: "夸张", options: ["夸张", "比喻", "拟人", "对偶"] },
      { q: "“入竹万竿斜”中“斜”形容：", correct: "竹被风吹歪", options: ["竹被风吹歪", "走斜路", "山倾斜", "字写斜"] }
    ]},
  { id: "c1u6", name: "古诗：《江南》", type: "gushi",
    poem: { title: "江南", author: "汉乐府", lines: ["江南可采莲，", "莲叶何田田。", "鱼戏莲叶间。"] },
    items: [
      { q: "《江南》是哪种诗：", correct: "汉乐府", options: ["唐诗", "宋词", "汉乐府", "元曲"] },
      { q: "“田田”形容：", correct: "莲叶茂盛", options: ["田地", "莲叶茂盛", "稻田", "种田"] },
      { q: "诗中描写的活动是：", correct: "采莲", options: ["采莲", "捕鱼", "钓鱼", "划船"] },
      { q: "“鱼戏莲叶间”表达了：", correct: "欢快的景象", options: ["欢快的景象", "悲伤", "孤独", "战斗"] }
    ]},
  { id: "c1u7", name: "古诗：《画》", type: "gushi",
    poem: { title: "画", author: "王维", lines: ["远看山有色，", "近听水无声。", "春去花还在，", "人来鸟不惊。"] },
    items: [
      { q: "《画》的作者：", correct: "王维", options: ["王维", "李白", "杜甫", "孟浩然"] },
      { q: "“近听水无声”说明：", correct: "画里的水", options: ["画里的水", "夜深安静", "无水", "听力不好"] },
      { q: "“春去花还在”因为：", correct: "画上的花", options: ["真花", "画上的花", "塑料花", "花永远开"] },
      { q: "诗写的是：", correct: "一幅画", options: ["一座山", "一幅画", "一片湖", "一只鸟"] }
    ]},
  { id: "c1u8", name: "古诗：《悯农（其二）》", type: "gushi",
    poem: { title: "悯农", author: "李绅", lines: ["锄禾日当午，", "汗滴禾下土。", "谁知盘中餐，", "粒粒皆辛苦。"] },
    items: [
      { q: "本诗作者：", correct: "李绅", options: ["李绅", "李白", "白居易", "杜甫"] },
      { q: "“日当午”意思：", correct: "正午", options: ["早晨", "正午", "傍晚", "夜里"] },
      { q: "“盘中餐”指：", correct: "碗里的饭", options: ["碗里的饭", "盘子", "餐厅", "盘菜"] },
      { q: "诗告诉我们：", correct: "粮食来之不易", options: ["粮食来之不易", "种田很赚钱", "农夫很闲", "夏天很热"] }
    ]}
);

/* —— 1 年级下 —— */
DATA.chinese["1下"].push(
  { id: "c1d4", name: "古诗：《古朗月行》（节选）", type: "gushi",
    poem: { title: "古朗月行", author: "李白", lines: ["小时不识月，", "呼作白玉盘。", "又疑瑶台镜，", "飞在青云端。"] },
    items: [
      { q: "本诗作者：", correct: "李白", options: ["李白", "杜甫", "白居易", "王维"] },
      { q: "“白玉盘”比喻：", correct: "月亮", options: ["太阳", "月亮", "饭盘", "玉器"] },
      { q: "“瑶台镜”也是比喻：", correct: "月亮", options: ["镜子", "宝石", "月亮", "云"] },
      { q: "本诗写诗人小时候对月亮的：", correct: "想象", options: ["害怕", "想象", "讨厌", "崇拜"] }
    ]},
  { id: "c1d5", name: "古诗：《池上》", type: "gushi",
    poem: { title: "池上", author: "白居易", lines: ["小娃撑小艇，", "偷采白莲回。", "不解藏踪迹，", "浮萍一道开。"] },
    items: [
      { q: "本诗作者：", correct: "白居易", options: ["李白", "白居易", "杜甫", "贺知章"] },
      { q: "“小艇”指：", correct: "小船", options: ["小船", "小篮", "小屋", "小车"] },
      { q: "“偷采”流露出小孩怎样的特点？", correct: "天真可爱", options: ["凶狠", "天真可爱", "懒惰", "胆小"] },
      { q: "“浮萍一道开”说明：", correct: "船经过留下水路", options: ["浮萍盛开", "船经过留下水路", "莲花开了", "下雨了"] }
    ]},
  { id: "c1d6", name: "古诗：《小池》", type: "gushi",
    poem: { title: "小池", author: "杨万里", lines: ["泉眼无声惜细流，", "树阴照水爱晴柔。", "小荷才露尖尖角，", "早有蜻蜓立上头。"] },
    items: [
      { q: "本诗作者：", correct: "杨万里", options: ["杨万里", "苏轼", "李白", "陆游"] },
      { q: "“尖尖角”指什么？", correct: "刚长出的荷叶", options: ["山尖", "刚长出的荷叶", "针尖", "笔尖"] },
      { q: "“惜细流”表现了：", correct: "泉水珍爱细流", options: ["可惜", "泉水珍爱细流", "节约用水", "水流大"] },
      { q: "诗描写的是哪个季节？", correct: "初夏", options: ["春天", "初夏", "秋天", "冬天"] }
    ]},
  { id: "c1d7", name: "古诗：《寻隐者不遇》", type: "gushi",
    poem: { title: "寻隐者不遇", author: "贾岛", lines: ["松下问童子，", "言师采药去。", "只在此山中，", "云深不知处。"] },
    items: [
      { q: "本诗作者：", correct: "贾岛", options: ["贾岛", "李白", "王维", "孟浩然"] },
      { q: "“言”意思：", correct: "说", options: ["说", "言语", "信", "字"] },
      { q: "“处”意思：", correct: "地方", options: ["处理", "地方", "时刻", "处事"] },
      { q: "诗人想找的人是：", correct: "隐者", options: ["童子", "隐者", "和尚", "采药人"] }
    ]}
);

/* —— 2 年级上 —— */
DATA.chinese["2上"].push(
  { id: "c2u4", name: "古诗：《夜宿山寺》", type: "gushi",
    poem: { title: "夜宿山寺", author: "李白", lines: ["危楼高百尺，", "手可摘星辰。", "不敢高声语，", "恐惊天上人。"] },
    items: [
      { q: "本诗作者：", correct: "李白", options: ["李白", "杜甫", "苏轼", "王维"] },
      { q: "“危楼”指：", correct: "高楼", options: ["危险楼", "高楼", "破楼", "小楼"] },
      { q: "“高百尺”是：", correct: "夸张", options: ["写实", "夸张", "比喻", "拟人"] },
      { q: "“恐惊天上人”表现：", correct: "楼极高", options: ["怕鬼", "楼极高", "怕人", "怕摔下"] }
    ]},
  { id: "c2u5", name: "古诗：《敕勒歌》", type: "gushi",
    poem: { title: "敕勒歌", author: "北朝民歌", lines: ["敕勒川，阴山下。", "天似穹庐，", "笼盖四野。", "天苍苍，野茫茫，", "风吹草低见牛羊。"] },
    items: [
      { q: "本歌出自：", correct: "北朝民歌", options: ["唐诗", "宋词", "北朝民歌", "汉乐府"] },
      { q: "“穹庐”指：", correct: "蒙古包式帐篷", options: ["天空", "蒙古包式帐篷", "山洞", "屋顶"] },
      { q: "“见”读作：", correct: "xiàn", options: ["jiàn", "xiàn", "xiān", "qiàn"] },
      { q: "本诗描绘的是：", correct: "草原风光", options: ["江南水乡", "草原风光", "高山雪景", "城市夜景"] }
    ]},
  { id: "c2u6", name: "古诗：《江雪》", type: "gushi",
    poem: { title: "江雪", author: "柳宗元", lines: ["千山鸟飞绝，", "万径人踪灭。", "孤舟蓑笠翁，", "独钓寒江雪。"] },
    items: [
      { q: "本诗作者：", correct: "柳宗元", options: ["柳宗元", "李白", "杜甫", "王维"] },
      { q: "“蓑笠”指：", correct: "蓑衣斗笠", options: ["蓑衣斗笠", "衣帽", "渔网", "船具"] },
      { q: "“绝”和“灭”反映：", correct: "无人寂静", options: ["无人寂静", "杀戮", "消亡", "天气"] },
      { q: "诗描写的季节：", correct: "冬天", options: ["春天", "夏天", "秋天", "冬天"] }
    ]},
  { id: "c2u7", name: "古诗：《梅花》", type: "gushi",
    poem: { title: "梅花", author: "王安石", lines: ["墙角数枝梅，", "凌寒独自开。", "遥知不是雪，", "为有暗香来。"] },
    items: [
      { q: "本诗作者：", correct: "王安石", options: ["王安石", "李白", "杜甫", "白居易"] },
      { q: "“凌寒”意思：", correct: "冒着严寒", options: ["冒着严寒", "凌晨", "霸凌", "高冷"] },
      { q: "“暗香”指：", correct: "梅花的清香", options: ["黑暗的香", "梅花的清香", "汗味", "脏味"] },
      { q: "诗写梅花的什么特点？", correct: "不畏严寒", options: ["颜色鲜艳", "不畏严寒", "高大粗壮", "树形优美"] }
    ]}
);

/* —— 2 年级下 —— */
DATA.chinese["2下"].push(
  { id: "c2d4", name: "古诗：《绝句·两个黄鹂》", type: "gushi",
    poem: { title: "绝句", author: "杜甫", lines: ["两个黄鹂鸣翠柳，", "一行白鹭上青天。", "窗含西岭千秋雪，", "门泊东吴万里船。"] },
    items: [
      { q: "本诗作者：", correct: "杜甫", options: ["杜甫", "李白", "白居易", "王维"] },
      { q: "“鸣”意思：", correct: "叫", options: ["叫", "飞", "走", "跳"] },
      { q: "诗中颜色词有：", correct: "黄、翠、白、青", options: ["黄、翠、白、青", "黄、绿、红、白", "红、青、紫、黄", "黑、白、青、红"] },
      { q: "“窗含”说明：", correct: "从窗户看出去", options: ["窗里藏雪", "从窗户看出去", "窗户盖住雪", "雪打窗"] }
    ]},
  { id: "c2d5", name: "古诗：《晓出净慈寺送林子方》", type: "gushi",
    poem: { title: "晓出净慈寺送林子方", author: "杨万里", lines: ["毕竟西湖六月中，", "风光不与四时同。", "接天莲叶无穷碧，", "映日荷花别样红。"] },
    items: [
      { q: "本诗作者：", correct: "杨万里", options: ["杨万里", "苏轼", "白居易", "李白"] },
      { q: "“四时”意思：", correct: "四季", options: ["四时辰", "四季", "四点", "四个时段"] },
      { q: "“接天莲叶”形容：", correct: "莲叶很多很广", options: ["莲叶很多很广", "天上的莲叶", "莲叶很高", "莲花接天"] },
      { q: "诗描写：", correct: "西湖夏景", options: ["西湖春景", "西湖夏景", "西湖秋景", "西湖冬景"] }
    ]},
  { id: "c2d6", name: "古诗：《悯农（其一）》", type: "gushi",
    poem: { title: "悯农·其一", author: "李绅", lines: ["春种一粒粟，", "秋收万颗子。", "四海无闲田，", "农夫犹饿死。"] },
    items: [
      { q: "本诗作者：", correct: "李绅", options: ["李绅", "白居易", "李白", "杜甫"] },
      { q: "“粟”泛指：", correct: "粮食种子", options: ["稻米", "粮食种子", "麦子", "玉米"] },
      { q: "“四海无闲田”意思：", correct: "天下都耕种", options: ["天下都耕种", "海里无田", "没有田闲着", "海边四块田"] },
      { q: "本诗表达了对谁的同情？", correct: "农夫", options: ["商人", "农夫", "渔民", "士兵"] }
    ]},
  { id: "c2d7", name: "古诗：《元日》", type: "gushi",
    poem: { title: "元日", author: "王安石", lines: ["爆竹声中一岁除，", "春风送暖入屠苏。", "千门万户曈曈日，", "总把新桃换旧符。"] },
    items: [
      { q: "本诗写的节日：", correct: "春节", options: ["春节", "元宵节", "端午节", "中秋节"] },
      { q: "“屠苏”指：", correct: "屠苏酒", options: ["地名", "屠苏酒", "屠夫", "苏州"] },
      { q: "“曈曈日”形容：", correct: "初升的太阳", options: ["初升的太阳", "晚霞", "灯笼", "烟花"] },
      { q: "“新桃换旧符”指：", correct: "换春联", options: ["换春联", "换桃子", "换衣服", "换饭碗"] }
    ]}
);

/* —— 3 年级上 —— */
DATA.chinese["3上"].push(
  { id: "c3u4", name: "古诗：《夜书所见》", type: "gushi",
    poem: { title: "夜书所见", author: "叶绍翁", lines: ["萧萧梧叶送寒声，", "江上秋风动客情。", "知有儿童挑促织，", "夜深篱落一灯明。"] },
    items: [
      { q: "本诗作者：", correct: "叶绍翁", options: ["叶绍翁", "杨万里", "白居易", "杜甫"] },
      { q: "“萧萧”形容：", correct: "风声", options: ["风声", "雨声", "鸟声", "水声"] },
      { q: "“促织”指：", correct: "蟋蟀", options: ["蟋蟀", "蝉", "蝴蝶", "蜻蜓"] },
      { q: "“动客情”指：", correct: "勾起思乡情", options: ["勾起思乡情", "高兴", "气愤", "客人来"] },
      { q: "本诗描写的季节：", correct: "秋天", options: ["春天", "夏天", "秋天", "冬天"] }
    ]},
  { id: "c3u5", name: "古诗：《望天门山》", type: "gushi",
    poem: { title: "望天门山", author: "李白", lines: ["天门中断楚江开，", "碧水东流至此回。", "两岸青山相对出，", "孤帆一片日边来。"] },
    items: [
      { q: "本诗作者：", correct: "李白", options: ["李白", "杜甫", "王维", "白居易"] },
      { q: "“楚江”指：", correct: "长江", options: ["长江", "黄河", "湘江", "淮河"] },
      { q: "“至此回”意思：", correct: "到此处折回", options: ["回家", "到此处折回", "回头看", "返航"] },
      { q: "诗中的孤帆：", correct: "从远方驶来", options: ["停在岸边", "从远方驶来", "向远方驶去", "在原地不动"] }
    ]},
  { id: "c3u6", name: "古诗：《饮湖上初晴后雨》", type: "gushi",
    poem: { title: "饮湖上初晴后雨", author: "苏轼", lines: ["水光潋滟晴方好，", "山色空蒙雨亦奇。", "欲把西湖比西子，", "淡妆浓抹总相宜。"] },
    items: [
      { q: "本诗作者：", correct: "苏轼", options: ["苏轼", "李白", "杜甫", "白居易"] },
      { q: "“潋滟”形容：", correct: "水波闪动", options: ["水波闪动", "波涛汹涌", "水满", "水清"] },
      { q: "“西子”指：", correct: "西施", options: ["西施", "西方", "西边", "西湖之子"] },
      { q: "诗赞美的是：", correct: "西湖", options: ["西施", "雨景", "西湖", "晴天"] }
    ]},
  { id: "c3u7", name: "古诗：《早发白帝城》", type: "gushi",
    poem: { title: "早发白帝城", author: "李白", lines: ["朝辞白帝彩云间，", "千里江陵一日还。", "两岸猿声啼不住，", "轻舟已过万重山。"] },
    items: [
      { q: "本诗作者：", correct: "李白", options: ["李白", "杜甫", "王昌龄", "孟浩然"] },
      { q: "“朝辞”意思：", correct: "早晨告别", options: ["早晨告别", "上朝辞官", "面朝辞别", "向朝廷告辞"] },
      { q: "“千里江陵一日还”使用：", correct: "夸张", options: ["夸张", "比喻", "对偶", "排比"] },
      { q: "诗表达的心情：", correct: "畅快喜悦", options: ["畅快喜悦", "伤感", "愤怒", "孤独"] }
    ]}
);

/* —— 3 年级下 —— */
DATA.chinese["3下"].push(
  { id: "c3d4", name: "古诗：《大林寺桃花》", type: "gushi",
    poem: { title: "大林寺桃花", author: "白居易", lines: ["人间四月芳菲尽，", "山寺桃花始盛开。", "长恨春归无觅处，", "不知转入此中来。"] },
    items: [
      { q: "本诗作者：", correct: "白居易", options: ["白居易", "李白", "杜牧", "苏轼"] },
      { q: "“芳菲”指：", correct: "花草", options: ["花草", "香味", "美人", "竹子"] },
      { q: "诗中桃花开在哪里？", correct: "山寺", options: ["田野", "山寺", "庭院", "湖边"] },
      { q: "“长恨”意思：", correct: "总是怅恨", options: ["很恨", "总是怅恨", "长久仇恨", "讨厌"] }
    ]},
  { id: "c3d5", name: "古诗：《滁州西涧》", type: "gushi",
    poem: { title: "滁州西涧", author: "韦应物", lines: ["独怜幽草涧边生，", "上有黄鹂深树鸣。", "春潮带雨晚来急，", "野渡无人舟自横。"] },
    items: [
      { q: "本诗作者：", correct: "韦应物", options: ["韦应物", "白居易", "李白", "孟浩然"] },
      { q: "“独怜”意思：", correct: "独爱", options: ["独自怜悯", "独爱", "孤独", "可怜"] },
      { q: "“舟自横”说明：", correct: "无人摆渡", options: ["无人摆渡", "船坏了", "船倒了", "正在划"] },
      { q: "本诗描写：", correct: "春日山涧", options: ["秋日山林", "春日山涧", "夏日江景", "冬日小溪"] }
    ]},
  { id: "c3d6", name: "古诗：《三衢道中》", type: "gushi",
    poem: { title: "三衢道中", author: "曾几", lines: ["梅子黄时日日晴，", "小溪泛尽却山行。", "绿阴不减来时路，", "添得黄鹂四五声。"] },
    items: [
      { q: "本诗作者：", correct: "曾几", options: ["曾几", "苏轼", "杨万里", "陆游"] },
      { q: "“梅子黄时”指：", correct: "初夏", options: ["初春", "初夏", "深秋", "暮冬"] },
      { q: "“泛尽”意思：", correct: "划到尽头", options: ["划到尽头", "全部漂浮", "都翻了", "都没了"] },
      { q: "“添得”意思：", correct: "多了", options: ["增添", "多了", "添补", "多得"] }
    ]},
  { id: "c3d7", name: "古诗：《清明》", type: "gushi",
    poem: { title: "清明", author: "杜牧", lines: ["清明时节雨纷纷，", "路上行人欲断魂。", "借问酒家何处有？", "牧童遥指杏花村。"] },
    items: [
      { q: "本诗作者：", correct: "杜牧", options: ["杜牧", "杜甫", "李白", "王维"] },
      { q: "“欲断魂”形容：", correct: "心情凄凉", options: ["心情凄凉", "灵魂出窍", "饿坏了", "高兴"] },
      { q: "诗中的节日：", correct: "清明节", options: ["清明节", "端午节", "中秋节", "重阳节"] },
      { q: "“借问”意思：", correct: "请问", options: ["借东西问", "请问", "顺便问", "假装问"] }
    ]}
);

/* —— 4 年级上（输入） —— */
DATA.chinese["4上"].push(
  { id: "c4u5", name: "古诗：《出塞》", type: "gushi-input",
    poem: { title: "出塞", author: "王昌龄", lines: ["秦时明月汉时关，", "万里长征人未还。", "但使龙城飞将在，", "不教胡马度阴山。"] },
    items: [
      { q: "《出塞》作者：", answer: "王昌龄" },
      { q: "“秦时明月汉时关”的下一句：", answer: "万里长征人未还" },
      { q: "“飞将”指：", answer: "李广", accept: ["李广", "飞将军李广"] },
      { q: "“不教”意思：", answer: "不让", accept: ["不让", "不许", "不使"] },
      { q: "诗表达了：", answer: "希望国家安宁", accept: ["希望国家安宁", "希望和平", "盼望良将", "渴望边境安宁"] }
    ]},
  { id: "c4u6", name: "古诗：《凉州词》", type: "gushi-input",
    poem: { title: "凉州词", author: "王翰", lines: ["葡萄美酒夜光杯，", "欲饮琵琶马上催。", "醉卧沙场君莫笑，", "古来征战几人回？"] },
    items: [
      { q: "《凉州词》作者：", answer: "王翰" },
      { q: "“夜光杯”是怎样的杯子？", answer: "夜里能发光", accept: ["夜里能发光", "夜光的杯", "能发光的玉杯"] },
      { q: "“沙场”意思：", answer: "战场" },
      { q: "“君莫笑”的“君”是：", answer: "你" }
    ]},
  { id: "c4u7", name: "古诗：《夏日绝句》", type: "gushi-input",
    poem: { title: "夏日绝句", author: "李清照", lines: ["生当作人杰，", "死亦为鬼雄。", "至今思项羽，", "不肯过江东。"] },
    items: [
      { q: "本诗作者：", answer: "李清照" },
      { q: "“人杰”意思：", answer: "人中豪杰", accept: ["人中豪杰", "杰出的人"] },
      { q: "诗赞美了谁的精神？", answer: "项羽", accept: ["项羽", "楚霸王项羽"] },
      { q: "“不肯过江东”体现：", answer: "气节", accept: ["气节", "宁死不屈", "刚烈"] }
    ]},
  { id: "c4u8", name: "古诗：《秋夕》", type: "gushi-input",
    poem: { title: "秋夕", author: "杜牧", lines: ["银烛秋光冷画屏，", "轻罗小扇扑流萤。", "天阶夜色凉如水，", "卧看牵牛织女星。"] },
    items: [
      { q: "本诗作者：", answer: "杜牧" },
      { q: "“流萤”指：", answer: "萤火虫", accept: ["萤火虫", "飞舞的萤火虫"] },
      { q: "“天阶”指：", answer: "宫中的石阶", accept: ["宫中的石阶", "宫殿石阶", "皇宫石阶"] },
      { q: "诗中描写哪个时节？", answer: "秋夜", accept: ["秋夜", "秋天的夜晚"] }
    ]}
);

/* —— 4 年级下（输入） —— */
DATA.chinese["4下"].push(
  { id: "c4d4", name: "古诗：《墨梅》", type: "gushi-input",
    poem: { title: "墨梅", author: "王冕", lines: ["我家洗砚池头树，", "朵朵花开淡墨痕。", "不要人夸好颜色，", "只留清气满乾坤。"] },
    items: [
      { q: "本诗作者：", answer: "王冕" },
      { q: "“淡墨痕”指：", answer: "淡淡的墨色", accept: ["淡淡的墨色", "墨色淡淡", "墨色的痕迹"] },
      { q: "诗中的梅花用什么颜料画？", answer: "墨", accept: ["墨", "水墨"] },
      { q: "“清气”体现作者怎样的品格？", answer: "高洁", accept: ["高洁", "清高", "清廉"] }
    ]},
  { id: "c4d5", name: "古诗：《蜂》", type: "gushi-input",
    poem: { title: "蜂", author: "罗隐", lines: ["不论平地与山尖，", "无限风光尽被占。", "采得百花成蜜后，", "为谁辛苦为谁甜？"] },
    items: [
      { q: "本诗作者：", answer: "罗隐" },
      { q: "“尽被占”说明：", answer: "好地方都被蜂占了", accept: ["好地方都被蜂占了", "都被占了", "全占了"] },
      { q: "“为谁辛苦为谁甜”表达：", answer: "对劳动者的同情", accept: ["对劳动者的同情", "同情劳动人民", "感慨劳动"] },
      { q: "诗中赞美的是：", answer: "蜜蜂的勤劳", accept: ["蜜蜂的勤劳", "勤劳", "辛勤劳动"] }
    ]},
  { id: "c4d6", name: "古诗：《江上渔者》", type: "gushi-input",
    poem: { title: "江上渔者", author: "范仲淹", lines: ["江上往来人，", "但爱鲈鱼美。", "君看一叶舟，", "出没风波里。"] },
    items: [
      { q: "本诗作者：", answer: "范仲淹" },
      { q: "“但”意思：", answer: "只", accept: ["只", "仅"] },
      { q: "“一叶舟”形容船：", answer: "小", accept: ["很小", "小", "如叶子般小"] },
      { q: "诗表达了对谁的同情？", answer: "渔民", accept: ["渔民", "打鱼的人", "渔人"] }
    ]},
  { id: "c4d7", name: "古诗：《卜算子·咏梅》", type: "gushi-input",
    poem: { title: "卜算子·咏梅", author: "毛泽东",
      lines: ["风雨送春归，", "飞雪迎春到。", "已是悬崖百丈冰，", "犹有花枝俏。",
              "俏也不争春，", "只把春来报。", "待到山花烂漫时，", "她在丛中笑。"] },
    items: [
      { q: "本词作者：", answer: "毛泽东" },
      { q: "“俏”形容梅花：", answer: "美丽挺拔", accept: ["美丽挺拔", "俏丽", "挺拔美丽"] },
      { q: "词中的梅花精神是：", answer: "谦逊不争", accept: ["谦逊不争", "不争春", "谦逊"] },
      { q: "“烂漫”意思：", answer: "色彩绚丽", accept: ["色彩绚丽", "灿烂", "绚丽多彩", "鲜艳多姿"] }
    ]}
);

/* —— 5 年级上（输入） —— */
DATA.chinese["5上"].push(
  { id: "c5u4", name: "古诗：《山居秋暝》", type: "gushi-input",
    poem: { title: "山居秋暝", author: "王维",
      lines: ["空山新雨后，", "天气晚来秋。", "明月松间照，", "清泉石上流。",
              "竹喧归浣女，", "莲动下渔舟。", "随意春芳歇，", "王孙自可留。"] },
    items: [
      { q: "本诗作者：", answer: "王维" },
      { q: "“浣女”指：", answer: "洗衣的女子", accept: ["洗衣的女子", "洗衣女", "洗衣服的女子"] },
      { q: "“随意春芳歇”的“歇”：", answer: "消散", accept: ["消散", "凋谢", "消失"] },
      { q: "“王孙自可留”表达：", answer: "归隐山林之意", accept: ["归隐山林之意", "想归隐", "愿留山中", "归隐"] }
    ]},
  { id: "c5u5", name: "古诗：《枫桥夜泊》", type: "gushi-input",
    poem: { title: "枫桥夜泊", author: "张继", lines: ["月落乌啼霜满天，", "江枫渔火对愁眠。", "姑苏城外寒山寺，", "夜半钟声到客船。"] },
    items: [
      { q: "本诗作者：", answer: "张继" },
      { q: "“姑苏”指：", answer: "苏州", accept: ["苏州", "今江苏苏州"] },
      { q: "“对愁眠”意思：", answer: "带着愁绪难眠", accept: ["带着愁绪难眠", "对着愁睡", "愁眠"] },
      { q: "诗写的时间是：", answer: "夜晚", accept: ["夜晚", "深夜", "夜半"] }
    ]},
  { id: "c5u6", name: "古诗：《渔歌子》", type: "gushi-input",
    poem: { title: "渔歌子", author: "张志和", lines: ["西塞山前白鹭飞，", "桃花流水鳜鱼肥。", "青箬笠，绿蓑衣，", "斜风细雨不须归。"] },
    items: [
      { q: "本词作者：", answer: "张志和" },
      { q: "“鳜鱼”是一种：", answer: "鱼", accept: ["鱼", "淡水鱼"] },
      { q: "“箬笠”是用：", answer: "竹叶做的斗笠", accept: ["竹叶做的斗笠", "竹叶斗笠", "用箬竹叶做的斗笠"] },
      { q: "诗描绘哪个季节？", answer: "春天", accept: ["春天", "春", "暮春"] }
    ]},
  { id: "c5u7", name: "古诗：《黄鹤楼送孟浩然之广陵》", type: "gushi-input",
    poem: { title: "黄鹤楼送孟浩然之广陵", author: "李白", lines: ["故人西辞黄鹤楼，", "烟花三月下扬州。", "孤帆远影碧空尽，", "唯见长江天际流。"] },
    items: [
      { q: "本诗作者：", answer: "李白" },
      { q: "“故人”指：", answer: "老朋友", accept: ["老朋友", "孟浩然", "老友"] },
      { q: "“烟花三月”形容：", answer: "春日繁花似锦", accept: ["春日繁花似锦", "春天花繁", "繁花似锦"] },
      { q: "诗表达了：", answer: "送别之情", accept: ["送别之情", "送别", "离别之情", "依依不舍"] }
    ]}
);

/* —— 5 年级下（输入） —— */
DATA.chinese["5下"].push(
  { id: "c5d4", name: "古诗：《从军行》", type: "gushi-input",
    poem: { title: "从军行", author: "王昌龄", lines: ["青海长云暗雪山，", "孤城遥望玉门关。", "黄沙百战穿金甲，", "不破楼兰终不还。"] },
    items: [
      { q: "本诗作者：", answer: "王昌龄" },
      { q: "“穿金甲”意思：", answer: "磨破了铠甲", accept: ["磨破了铠甲", "磨穿铠甲", "穿破铠甲"] },
      { q: "“楼兰”代指：", answer: "敌人", accept: ["敌人", "侵略者", "外敌"] },
      { q: "诗表达的精神是：", answer: "誓死保卫祖国", accept: ["誓死保卫祖国", "保家卫国", "忠君爱国", "戍边卫国"] }
    ]},
  { id: "c5d5", name: "古诗：《秋夜将晓出篱门迎凉有感》", type: "gushi-input",
    poem: { title: "秋夜将晓出篱门迎凉有感", author: "陆游", lines: ["三万里河东入海，", "五千仞岳上摩天。", "遗民泪尽胡尘里，", "南望王师又一年。"] },
    items: [
      { q: "本诗作者：", answer: "陆游" },
      { q: "“三万里河”指：", answer: "黄河", accept: ["黄河"] },
      { q: "“五千仞岳”指：", answer: "华山", accept: ["华山"] },
      { q: "“遗民”指：", answer: "中原沦陷区百姓", accept: ["中原沦陷区百姓", "沦陷区百姓", "失地的百姓"] }
    ]},
  { id: "c5d6", name: "古诗：《游园不值》", type: "gushi-input",
    poem: { title: "游园不值", author: "叶绍翁", lines: ["应怜屐齿印苍苔，", "小扣柴扉久不开。", "春色满园关不住，", "一枝红杏出墙来。"] },
    items: [
      { q: "本诗作者：", answer: "叶绍翁" },
      { q: "“屐齿”指：", answer: "木屐底的齿", accept: ["木屐底的齿", "木屐齿", "木屐"] },
      { q: "“小扣”意思：", answer: "轻轻敲", accept: ["轻轻敲", "轻敲"] },
      { q: "诗中的名句：", answer: "一枝红杏出墙来" }
    ]},
  { id: "c5d7", name: "古诗：《乡村四月》", type: "gushi-input",
    poem: { title: "乡村四月", author: "翁卷", lines: ["绿遍山原白满川，", "子规声里雨如烟。", "乡村四月闲人少，", "才了蚕桑又插田。"] },
    items: [
      { q: "本诗作者：", answer: "翁卷" },
      { q: "“子规”指：", answer: "杜鹃鸟", accept: ["杜鹃鸟", "杜鹃", "布谷"] },
      { q: "“白满川”指：", answer: "水田一片白色", accept: ["水田一片白色", "水满田白", "水田都是白色"] },
      { q: "诗描写：", answer: "农民忙碌", accept: ["农民忙碌", "农忙", "农忙景象", "农村繁忙"] }
    ]}
);

/* —— 6 年级上（输入） —— */
DATA.chinese["6上"].push(
  { id: "c6u4", name: "古诗：《江南春》", type: "gushi-input",
    poem: { title: "江南春", author: "杜牧", lines: ["千里莺啼绿映红，", "水村山郭酒旗风。", "南朝四百八十寺，", "多少楼台烟雨中。"] },
    items: [
      { q: "本诗作者：", answer: "杜牧" },
      { q: "“水村山郭”意思：", answer: "傍水村庄依山城郭", accept: ["傍水村庄依山城郭", "水边村庄山下城", "靠水的村依山的城"] },
      { q: "“四百八十寺”用了：", answer: "夸张", accept: ["夸张"] },
      { q: "诗描绘的是：", answer: "江南春景", accept: ["江南春景", "江南春天景色"] }
    ]},
  { id: "c6u5", name: "古诗：《书湖阴先生壁》", type: "gushi-input",
    poem: { title: "书湖阴先生壁", author: "王安石", lines: ["茅檐长扫净无苔，", "花木成畦手自栽。", "一水护田将绿绕，", "两山排闼送青来。"] },
    items: [
      { q: "本诗作者：", answer: "王安石" },
      { q: "“排闼”意思：", answer: "推门", accept: ["推门", "推开门"] },
      { q: "“成畦”形容：", answer: "整齐成行", accept: ["整齐成行", "排列整齐"] },
      { q: "本诗用什么修辞？", answer: "拟人", accept: ["拟人"] }
    ]},
  { id: "c6u6", name: "古诗：《浪淘沙》", type: "gushi-input",
    poem: { title: "浪淘沙", author: "刘禹锡", lines: ["九曲黄河万里沙，", "浪淘风簸自天涯。", "如今直上银河去，", "同到牵牛织女家。"] },
    items: [
      { q: "本诗作者：", answer: "刘禹锡" },
      { q: "“九曲”形容：", answer: "黄河弯弯曲曲", accept: ["黄河弯弯曲曲", "曲折", "弯曲多"] },
      { q: "“天涯”指：", answer: "天边", accept: ["天边"] },
      { q: "诗里到“牵牛织女家”体现：", answer: "想象奇特", accept: ["想象奇特", "想象丰富", "夸张想象"] }
    ]},
  { id: "c6u7", name: "古诗：《春日》", type: "gushi-input",
    poem: { title: "春日", author: "朱熹", lines: ["胜日寻芳泗水滨，", "无边光景一时新。", "等闲识得东风面，", "万紫千红总是春。"] },
    items: [
      { q: "本诗作者：", answer: "朱熹" },
      { q: "“胜日”意思：", answer: "天气晴朗的日子", accept: ["天气晴朗的日子", "好天气", "晴朗的日子"] },
      { q: "“等闲”意思：", answer: "平常", accept: ["平常", "轻易"] },
      { q: "“万紫千红总是春”名句赞美：", answer: "春天的生机", accept: ["春天的生机", "春天生机勃勃", "春天景象"] }
    ]}
);

/* —— 6 年级下（输入） —— */
DATA.chinese["6下"].push(
  { id: "c6d4", name: "古诗：《寒食》", type: "gushi-input",
    poem: { title: "寒食", author: "韩翃", lines: ["春城无处不飞花，", "寒食东风御柳斜。", "日暮汉宫传蜡烛，", "轻烟散入五侯家。"] },
    items: [
      { q: "本诗作者：", answer: "韩翃" },
      { q: "“春城”指：", answer: "春天的京城", accept: ["春天的京城", "春日的京城", "京城"] },
      { q: "“御柳”意思：", answer: "皇宫里的柳树", accept: ["皇宫里的柳树", "宫里的柳", "御花园的柳"] },
      { q: "“五侯”代指：", answer: "权贵之家", accept: ["权贵之家", "权贵", "贵族"] }
    ]},
  { id: "c6d5", name: "古诗：《迢迢牵牛星》", type: "gushi-input",
    poem: { title: "迢迢牵牛星", author: "古诗十九首",
      lines: ["迢迢牵牛星，", "皎皎河汉女。", "纤纤擢素手，", "札札弄机杼。",
              "终日不成章，", "泣涕零如雨。", "河汉清且浅，", "相去复几许？",
              "盈盈一水间，", "脉脉不得语。"] },
    items: [
      { q: "本诗出自：", answer: "古诗十九首", accept: ["古诗十九首", "《古诗十九首》"] },
      { q: "“河汉女”指：", answer: "织女", accept: ["织女", "织女星"] },
      { q: "“札札”形容：", answer: "织布声", accept: ["织布声", "织机声"] },
      { q: "“脉脉”形容：", answer: "含情相视", accept: ["含情相视", "深情对望", "含情默默地相看"] }
    ]},
  { id: "c6d6", name: "古诗：《长歌行》", type: "gushi-input",
    poem: { title: "长歌行", author: "汉乐府",
      lines: ["青青园中葵，", "朝露待日晞。", "阳春布德泽，", "万物生光辉。",
              "常恐秋节至，", "焜黄华叶衰。", "百川东到海，", "何时复西归？",
              "少壮不努力，", "老大徒伤悲。"] },
    items: [
      { q: "本诗出自：", answer: "汉乐府", accept: ["汉乐府", "乐府诗"] },
      { q: "“晞”意思：", answer: "干", accept: ["晒干", "干"] },
      { q: "“焜黄”意思：", answer: "枯黄", accept: ["枯黄", "黄色衰败"] },
      { q: "诗末名句：", answer: "少壮不努力，老大徒伤悲", accept: ["少壮不努力，老大徒伤悲", "少壮不努力老大徒伤悲"] }
    ]},
  { id: "c6d7", name: "古诗：《早春呈水部张十八员外》", type: "gushi-input",
    poem: { title: "早春呈水部张十八员外", author: "韩愈", lines: ["天街小雨润如酥，", "草色遥看近却无。", "最是一年春好处，", "绝胜烟柳满皇都。"] },
    items: [
      { q: "本诗作者：", answer: "韩愈" },
      { q: "“天街”指：", answer: "京城街道", accept: ["京城街道", "京城的街道", "京都街道"] },
      { q: "“润如酥”形容：", answer: "雨细润滑", accept: ["雨细润滑", "雨像奶酥一样润", "细润如酥"] },
      { q: "“绝胜”意思：", answer: "远远胜过", accept: ["远远胜过", "胜过", "远胜"] }
    ]},
  { id: "c6d8", name: "古诗：《竹石》", type: "gushi-input",
    poem: { title: "竹石", author: "郑燮", lines: ["咬定青山不放松，", "立根原在破岩中。", "千磨万击还坚劲，", "任尔东西南北风。"] },
    items: [
      { q: "本诗作者：", answer: "郑燮", accept: ["郑燮", "郑板桥"] },
      { q: "“坚劲”意思：", answer: "坚强", accept: ["坚强", "坚韧有力"] },
      { q: "“任尔”意思：", answer: "任凭你", accept: ["任凭你", "任凭"] },
      { q: "诗赞美竹的什么品格？", answer: "坚韧不拔", accept: ["坚韧不拔", "坚强不屈", "顽强坚韧"] }
    ]}
);

/* ============================================================
   语文：小学必背古诗扩充（第二批）
   ============================================================ */

/* —— 1 年级上 —— */
DATA.chinese["1上"].push(
  { id: "c1u9", name: "古诗：《山村咏怀》", type: "gushi",
    poem: { title: "山村咏怀", author: "邵雍", lines: ["一去二三里，", "烟村四五家。", "亭台六七座，", "八九十枝花。"] },
    items: [
      { q: "本诗作者：", correct: "邵雍", options: ["邵雍", "李白", "白居易", "杜甫"] },
      { q: "诗用了从一到十的什么数字？", correct: "数词", options: ["数词", "量词", "动词", "形容词"] },
      { q: "“烟村”指：", correct: "炊烟袅袅的村庄", options: ["炊烟袅袅的村庄", "起火的村", "雾里的村", "海边的村"] },
      { q: "本诗描写的是：", correct: "乡村美景", options: ["乡村美景", "都市夜景", "海边风光", "战争场面"] }
    ]},
  { id: "c1u10", name: "古诗：《鹿柴》", type: "gushi",
    poem: { title: "鹿柴", author: "王维", lines: ["空山不见人，", "但闻人语响。", "返景入深林，", "复照青苔上。"] },
    items: [
      { q: "本诗作者：", correct: "王维", options: ["王维", "李白", "杜甫", "孟浩然"] },
      { q: "“但闻”意思：", correct: "只听到", options: ["只听到", "只是闻", "刚听到", "看到"] },
      { q: "“返景”指：", correct: "夕阳余晖", options: ["夕阳余晖", "返回的人", "倒影", "返回路线"] },
      { q: "诗描绘的是：", correct: "山林幽静", options: ["山林幽静", "战场喧嚣", "城市繁华", "海上风暴"] }
    ]},
  { id: "c1u11", name: "古诗：《所见》", type: "gushi",
    poem: { title: "所见", author: "袁枚", lines: ["牧童骑黄牛，", "歌声振林樾。", "意欲捕鸣蝉，", "忽然闭口立。"] },
    items: [
      { q: "本诗作者：", correct: "袁枚", options: ["袁枚", "李白", "杜甫", "白居易"] },
      { q: "“振林樾”意思：", correct: "声音震动树林", options: ["声音震动树林", "摇动树枝", "树叶响动", "林中歌唱"] },
      { q: "“意欲”意思：", correct: "想要", options: ["想要", "回意", "故意", "意思是"] },
      { q: "“闭口立”原因：", correct: "怕惊飞蝉", options: ["怕惊飞蝉", "忘词", "突然停下", "声音哑了"] }
    ]},
  { id: "c1u12", name: "古诗：《七步诗》", type: "gushi",
    poem: { title: "七步诗", author: "曹植", lines: ["煮豆持作羹，", "漉菽以为汁。", "萁在釜下燃，", "豆在釜中泣。", "本自同根生，", "相煎何太急？"] },
    items: [
      { q: "本诗作者：", correct: "曹植", options: ["曹植", "曹操", "曹丕", "曹冲"] },
      { q: "“萁”指：", correct: "豆秆", options: ["豆秆", "豆叶", "豆花", "豆荚"] },
      { q: "“相煎”比喻：", correct: "兄弟相残", options: ["兄弟相残", "做菜", "煎中药", "用火烤"] },
      { q: "本诗表达：", correct: "对兄弟相逼的悲愤", options: ["对兄弟相逼的悲愤", "热爱劳动", "煮豆趣事", "厨艺心得"] }
    ]},
  { id: "c1u13", name: "古诗：《春夜喜雨》（节选）", type: "gushi",
    poem: { title: "春夜喜雨", author: "杜甫", lines: ["好雨知时节，", "当春乃发生。", "随风潜入夜，", "润物细无声。"] },
    items: [
      { q: "本诗作者：", correct: "杜甫", options: ["杜甫", "李白", "白居易", "王维"] },
      { q: "“当春乃发生”意思：", correct: "正是春天到来时降下", options: ["正是春天到来时降下", "春天发生事", "春雨发出声音", "春雷响起"] },
      { q: "“潜入夜”用了什么修辞？", correct: "拟人", options: ["拟人", "比喻", "夸张", "排比"] },
      { q: "“润物细无声”形容雨：", correct: "细密无声", options: ["细密无声", "倾盆", "狂猛", "嘈杂"] }
    ]}
);

/* —— 1 年级下 —— */
DATA.chinese["1下"].push(
  { id: "c1d8", name: "古诗：《回乡偶书》", type: "gushi",
    poem: { title: "回乡偶书", author: "贺知章", lines: ["少小离家老大回，", "乡音无改鬓毛衰。", "儿童相见不相识，", "笑问客从何处来。"] },
    items: [
      { q: "本诗作者：", correct: "贺知章", options: ["贺知章", "李白", "杜甫", "王维"] },
      { q: "“鬓毛衰”意思：", correct: "鬓发稀少", options: ["鬓发稀少", "头发茂盛", "头发变黑", "胡子长"] },
      { q: "“乡音无改”说明：", correct: "口音没变", options: ["口音没变", "声音哑了", "唱歌好听", "方言难懂"] },
      { q: "诗表达了：", correct: "久别还乡的感慨", options: ["久别还乡的感慨", "天气变化", "孩子调皮", "热闹欢快"] }
    ]},
  { id: "c1d9", name: "古诗：《鸟鸣涧》", type: "gushi",
    poem: { title: "鸟鸣涧", author: "王维", lines: ["人闲桂花落，", "夜静春山空。", "月出惊山鸟，", "时鸣春涧中。"] },
    items: [
      { q: "本诗作者：", correct: "王维", options: ["王维", "李白", "杜甫", "孟浩然"] },
      { q: "“人闲”意思：", correct: "人很安闲", options: ["人很安闲", "闲人", "人闲着", "闲人多"] },
      { q: "诗描写哪个季节？", correct: "春", options: ["春", "夏", "秋", "冬"] },
      { q: "“惊山鸟”是因为：", correct: "月光出来", options: ["人来了", "月光出来", "雷声响", "风太大"] }
    ]},
  { id: "c1d10", name: "古诗：《独坐敬亭山》", type: "gushi",
    poem: { title: "独坐敬亭山", author: "李白", lines: ["众鸟高飞尽，", "孤云独去闲。", "相看两不厌，", "只有敬亭山。"] },
    items: [
      { q: "本诗作者：", correct: "李白", options: ["李白", "杜甫", "王维", "白居易"] },
      { q: "“尽”意思：", correct: "完", options: ["完", "尽量", "尽兴", "尽心"] },
      { q: "“两不厌”指：", correct: "诗人与山相看不腻", options: ["诗人与山相看不腻", "两人对视", "两鸟对望", "两云相看"] },
      { q: "诗表达：", correct: "孤独却怡然", options: ["孤独却怡然", "热闹喧嚣", "悲愤", "愤怒"] }
    ]},
  { id: "c1d11", name: "古诗：《山中送别》", type: "gushi",
    poem: { title: "山中送别", author: "王维", lines: ["山中相送罢，", "日暮掩柴扉。", "春草明年绿，", "王孙归不归？"] },
    items: [
      { q: "本诗作者：", correct: "王维", options: ["王维", "李白", "孟浩然", "杜甫"] },
      { q: "“柴扉”指：", correct: "柴门", options: ["柴门", "柴堆", "炉灶", "墙"] },
      { q: "“王孙”指：", correct: "友人", options: ["朋友（友人）", "王的孙子", "贵族", "孩子"] },
      { q: "诗表达：", correct: "送别后的怅惘", options: ["送别后的怅惘", "欢聚之乐", "登山兴致", "山中孤独"] }
    ]},
  { id: "c1d12", name: "古诗：《江畔独步寻花》", type: "gushi",
    poem: { title: "江畔独步寻花", author: "杜甫", lines: ["黄四娘家花满蹊，", "千朵万朵压枝低。", "留连戏蝶时时舞，", "自在娇莺恰恰啼。"] },
    items: [
      { q: "本诗作者：", correct: "杜甫", options: ["杜甫", "李白", "白居易", "王维"] },
      { q: "“蹊”意思：", correct: "小路", options: ["小路", "蹊跷", "山涧", "篱笆"] },
      { q: "“留连”意思：", correct: "舍不得离开", options: ["舍不得离开", "停留连接", "经常停", "断断续续"] },
      { q: "“恰恰”形容：", correct: "莺啼声", options: ["莺啼声", "时机", "恰巧", "正好"] }
    ]}
);

/* —— 2 年级上 —— */
DATA.chinese["2上"].push(
  { id: "c2u8", name: "古诗：《凉州词》", type: "gushi",
    poem: { title: "凉州词", author: "王之涣", lines: ["黄河远上白云间，", "一片孤城万仞山。", "羌笛何须怨杨柳，", "春风不度玉门关。"] },
    items: [
      { q: "本诗作者：", correct: "王之涣", options: ["王之涣", "王翰", "王维", "王昌龄"] },
      { q: "“孤城”指：", correct: "玉门关孤悬", options: ["玉门关孤悬", "破败的城", "京城", "城市孤独"] },
      { q: "“春风不度”表达：", correct: "边塞荒凉", options: ["边塞荒凉", "风很大", "春来晚", "天气干燥"] },
      { q: "“羌笛”是：", correct: "古代乐器", options: ["古代乐器", "战器", "酒器", "鸟"] }
    ]},
  { id: "c2u9", name: "古诗：《别董大》", type: "gushi",
    poem: { title: "别董大", author: "高适", lines: ["千里黄云白日曛，", "北风吹雁雪纷纷。", "莫愁前路无知己，", "天下谁人不识君。"] },
    items: [
      { q: "本诗作者：", correct: "高适", options: ["高适", "李白", "杜甫", "王维"] },
      { q: "“曛”意思：", correct: "昏暗", options: ["昏暗", "明亮", "晚霞", "雾气"] },
      { q: "“知己”意思：", correct: "了解自己的朋友", options: ["了解自己的朋友", "知识自己", "知道自己", "知心人"] },
      { q: "诗表达：", correct: "对友人的鼓励", options: ["对友人的鼓励", "悲伤", "悔恨", "愤怒"] }
    ]},
  { id: "c2u10", name: "古诗：《送元二使安西》", type: "gushi",
    poem: { title: "送元二使安西", author: "王维", lines: ["渭城朝雨浥轻尘，", "客舍青青柳色新。", "劝君更尽一杯酒，", "西出阳关无故人。"] },
    items: [
      { q: "本诗作者：", correct: "王维", options: ["王维", "李白", "杜甫", "孟浩然"] },
      { q: "“浥”意思：", correct: "湿润", options: ["湿润", "下雨", "倾倒", "扬起"] },
      { q: "“故人”意思：", correct: "老朋友", options: ["老朋友", "故去的人", "故乡人", "认识的人"] },
      { q: "诗中表达：", correct: "送别之情", options: ["送别之情", "归乡之喜", "战胜喜悦", "登高之兴"] }
    ]},
  { id: "c2u11", name: "古诗：《望洞庭》", type: "gushi",
    poem: { title: "望洞庭", author: "刘禹锡", lines: ["湖光秋月两相和，", "潭面无风镜未磨。", "遥望洞庭山水翠，", "白银盘里一青螺。"] },
    items: [
      { q: "本诗作者：", correct: "刘禹锡", options: ["刘禹锡", "白居易", "杜牧", "李白"] },
      { q: "“两相和”指：", correct: "湖光秋月相互交融", options: ["湖光秋月相互交融", "两个人和好", "山水和谐", "水波平静"] },
      { q: "“一青螺”比喻：", correct: "君山", options: ["君山", "螺蛳", "山尖", "小岛"] },
      { q: "诗中描绘的湖：", correct: "洞庭湖", options: ["洞庭湖", "西湖", "鄱阳湖", "太湖"] }
    ]},
  { id: "c2u12", name: "古诗：《春夜喜雨·后段》", type: "gushi",
    poem: { title: "春夜喜雨", author: "杜甫", lines: ["野径云俱黑，", "江船火独明。", "晓看红湿处，", "花重锦官城。"] },
    items: [
      { q: "本诗作者：", correct: "杜甫", options: ["杜甫", "李白", "白居易", "王维"] },
      { q: "“锦官城”指：", correct: "成都", options: ["成都", "西安", "洛阳", "杭州"] },
      { q: "“红湿处”指：", correct: "被雨打湿的花", options: ["被雨打湿的花", "红色的水", "夕阳", "彩虹"] },
      { q: "“火独明”衬托：", correct: "夜的黑", options: ["夜的黑", "船的好", "火很大", "热闹"] }
    ]}
);

/* —— 2 年级下 —— */
DATA.chinese["2下"].push(
  { id: "c2d8", name: "古诗：《游子吟》", type: "gushi",
    poem: { title: "游子吟", author: "孟郊", lines: ["慈母手中线，", "游子身上衣。", "临行密密缝，", "意恐迟迟归。", "谁言寸草心，", "报得三春晖。"] },
    items: [
      { q: "本诗作者：", correct: "孟郊", options: ["孟郊", "孟浩然", "李白", "杜甫"] },
      { q: "“游子”指：", correct: "离家在外的人", options: ["离家在外的人", "游泳的人", "游玩的人", "孩子"] },
      { q: "“三春晖”指：", correct: "春日的阳光（母爱）", options: ["春日的阳光（母爱）", "三个春天", "春光", "三年"] },
      { q: "本诗赞美：", correct: "母爱", options: ["母爱", "友情", "爱情", "师恩"] }
    ]},
  { id: "c2d9", name: "古诗：《塞下曲》", type: "gushi",
    poem: { title: "塞下曲", author: "卢纶", lines: ["月黑雁飞高，", "单于夜遁逃。", "欲将轻骑逐，", "大雪满弓刀。"] },
    items: [
      { q: "本诗作者：", correct: "卢纶", options: ["卢纶", "王昌龄", "高适", "王翰"] },
      { q: "“单于”指：", correct: "匈奴首领", options: ["匈奴首领", "和尚", "将军", "皇帝"] },
      { q: "“轻骑”意思：", correct: "轻装的骑兵", options: ["轻装的骑兵", "马儿轻", "轻便的车", "骑马轻松"] },
      { q: "“遁逃”意思：", correct: "逃跑", options: ["逃跑", "躲藏", "顿逃", "解脱"] }
    ]},
  { id: "c2d10", name: "古诗：《忆江南》", type: "gushi",
    poem: { title: "忆江南", author: "白居易", lines: ["江南好，", "风景旧曾谙。", "日出江花红胜火，", "春来江水绿如蓝。", "能不忆江南？"] },
    items: [
      { q: "本词作者：", correct: "白居易", options: ["白居易", "李白", "苏轼", "杜甫"] },
      { q: "“谙”意思：", correct: "熟悉", options: ["熟悉", "记得", "暗中", "了解"] },
      { q: "“红胜火”形容：", correct: "江花鲜红", options: ["江花鲜红", "太阳像火", "火很红", "天空红"] },
      { q: "本词表达：", correct: "对江南的怀念", options: ["对江南的怀念", "送别朋友", "游历江南", "赞美江南菜"] }
    ]},
  { id: "c2d11", name: "古诗：《泊船瓜洲》", type: "gushi",
    poem: { title: "泊船瓜洲", author: "王安石", lines: ["京口瓜洲一水间，", "钟山只隔数重山。", "春风又绿江南岸，", "明月何时照我还？"] },
    items: [
      { q: "本诗作者：", correct: "王安石", options: ["王安石", "苏轼", "李白", "杜甫"] },
      { q: "“绿”在“春风又绿江南岸”中用作：", correct: "动词", options: ["动词", "形容词", "名词", "量词"] },
      { q: "“数重山”意思：", correct: "几座山", options: ["几座山", "数山的重量", "重叠的数字", "数清山"] },
      { q: "诗表达：", correct: "思乡之情", options: ["思乡之情", "怀人之情", "悲国之情", "壮志难酬"] }
    ]},
  { id: "c2d12", name: "古诗：《江南逢李龟年》", type: "gushi",
    poem: { title: "江南逢李龟年", author: "杜甫", lines: ["岐王宅里寻常见，", "崔九堂前几度闻。", "正是江南好风景，", "落花时节又逢君。"] },
    items: [
      { q: "本诗作者：", correct: "杜甫", options: ["杜甫", "李白", "白居易", "王维"] },
      { q: "“寻常”意思：", correct: "平常", options: ["平常", "寻找", "经常", "时常"] },
      { q: "“落花时节”寓意：", correct: "暮春／盛年已去", options: ["暮春／盛年已去", "秋天", "战乱", "丰收"] },
      { q: "李龟年是：", correct: "唐代著名乐师", options: ["唐代著名乐师", "诗人", "将军", "皇帝"] }
    ]}
);

/* —— 3 年级上 —— */
DATA.chinese["3上"].push(
  { id: "c3u8", name: "古诗：《芙蓉楼送辛渐》", type: "gushi",
    poem: { title: "芙蓉楼送辛渐", author: "王昌龄", lines: ["寒雨连江夜入吴，", "平明送客楚山孤。", "洛阳亲友如相问，", "一片冰心在玉壶。"] },
    items: [
      { q: "本诗作者：", correct: "王昌龄", options: ["王昌龄", "王维", "王翰", "王之涣"] },
      { q: "“平明”意思：", correct: "天刚亮", options: ["天刚亮", "平静明亮", "公平", "光明"] },
      { q: "“一片冰心”比喻：", correct: "清白高洁", options: ["清白高洁", "心凉", "冰心玉壶", "冷酷"] },
      { q: "诗的主题：", correct: "送别 & 表白心志", options: ["送别 & 表白心志", "纯送别", "怀古", "登高"] }
    ]},
  { id: "c3u9", name: "古诗：《六月二十七日望湖楼醉书》", type: "gushi",
    poem: { title: "六月二十七日望湖楼醉书", author: "苏轼", lines: ["黑云翻墨未遮山，", "白雨跳珠乱入船。", "卷地风来忽吹散，", "望湖楼下水如天。"] },
    items: [
      { q: "本诗作者：", correct: "苏轼", options: ["苏轼", "苏辙", "苏洵", "杨万里"] },
      { q: "“翻墨”形容云：", correct: "墨黑翻滚", options: ["墨黑翻滚", "天上画画", "翻墨水", "云白"] },
      { q: "“跳珠”形容雨点：", correct: "圆亮跳跃", options: ["圆亮跳跃", "珍珠", "断线珠", "弹跳玩具"] },
      { q: "“水如天”意思：", correct: "湖水像天空一样开阔明净", options: ["湖水像天空一样开阔明净", "水到了天上", "水高过天", "水反射天"] }
    ]},
  { id: "c3u10", name: "古诗：《春雪》", type: "gushi",
    poem: { title: "春雪", author: "韩愈", lines: ["新年都未有芳菲，", "二月初惊见草芽。", "白雪却嫌春色晚，", "故穿庭树作飞花。"] },
    items: [
      { q: "本诗作者：", correct: "韩愈", options: ["韩愈", "韩翃", "白居易", "刘禹锡"] },
      { q: "“芳菲”指：", correct: "花草", options: ["花草", "香气", "美人", "鸟兽"] },
      { q: "“故穿庭树作飞花”使用：", correct: "拟人", options: ["拟人", "比喻", "夸张", "对偶"] },
      { q: "诗中“白雪作飞花”表达：", correct: "春意盎然", options: ["春意盎然", "冬天寒冷", "雪的飘落", "花开了"] }
    ]},
  { id: "c3u11", name: "古诗：《题临安邸》", type: "gushi",
    poem: { title: "题临安邸", author: "林升", lines: ["山外青山楼外楼，", "西湖歌舞几时休？", "暖风熏得游人醉，", "直把杭州作汴州。"] },
    items: [
      { q: "本诗作者：", correct: "林升", options: ["林升", "白居易", "苏轼", "杨万里"] },
      { q: "“熏得游人醉”指：", correct: "陶醉沉迷", options: ["陶醉沉迷", "酒醉", "中暑", "犯困"] },
      { q: "“汴州”是：", correct: "北宋故都", options: ["北宋故都", "南宋都城", "唐都", "汉都"] },
      { q: "诗讽刺的是：", correct: "南宋统治者苟安", options: ["南宋统治者苟安", "杭州繁华", "西湖歌舞", "游客太多"] }
    ]},
  { id: "c3u12", name: "古诗：《浣溪沙·一曲新词》", type: "gushi",
    poem: { title: "浣溪沙", author: "晏殊", lines: ["一曲新词酒一杯，", "去年天气旧亭台。", "夕阳西下几时回？", "无可奈何花落去，", "似曾相识燕归来。", "小园香径独徘徊。"] },
    items: [
      { q: "本词作者：", correct: "晏殊", options: ["晏殊", "苏轼", "李清照", "辛弃疾"] },
      { q: "“无可奈何花落去”的下一句：", correct: "似曾相识燕归来", options: ["似曾相识燕归来", "小园香径独徘徊", "夕阳西下几时回", "去年天气旧亭台"] },
      { q: "“徘徊”意思：", correct: "来回走动", options: ["来回走动", "彷徨", "走来", "停下"] },
      { q: "词表达：", correct: "时光流逝之感", options: ["时光流逝之感", "丰收喜悦", "送别", "登高怀古"] }
    ]}
);

/* —— 3 年级下 —— */
DATA.chinese["3下"].push(
  { id: "c3d8", name: "古诗：《嫦娥》", type: "gushi",
    poem: { title: "嫦娥", author: "李商隐", lines: ["云母屏风烛影深，", "长河渐落晓星沉。", "嫦娥应悔偷灵药，", "碧海青天夜夜心。"] },
    items: [
      { q: "本诗作者：", correct: "李商隐", options: ["李商隐", "李白", "杜牧", "杜甫"] },
      { q: "“长河”指：", correct: "银河", options: ["银河", "黄河", "长江", "一条河"] },
      { q: "“偷灵药”讲的是：", correct: "嫦娥奔月", options: ["嫦娥奔月", "盗仙草", "白蛇传", "牛郎织女"] },
      { q: "诗表达：", correct: "嫦娥的寂寞", options: ["嫦娥的寂寞", "夜晚的美", "宇宙之奇", "登月之喜"] }
    ]},
  { id: "c3d9", name: "古诗：《秋词》", type: "gushi",
    poem: { title: "秋词", author: "刘禹锡", lines: ["自古逢秋悲寂寥，", "我言秋日胜春朝。", "晴空一鹤排云上，", "便引诗情到碧霄。"] },
    items: [
      { q: "本诗作者：", correct: "刘禹锡", options: ["刘禹锡", "白居易", "李白", "杜牧"] },
      { q: "“寂寥”意思：", correct: "寂寞冷清", options: ["寂寞冷清", "寂静", "寂寞", "辽阔"] },
      { q: "“排云上”意思：", correct: "冲云而上", options: ["冲云而上", "推开云", "排队上", "云上排开"] },
      { q: "诗中作者对秋的态度：", correct: "赞美", options: ["赞美", "悲伤", "厌恶", "无感"] }
    ]},
  { id: "c3d10", name: "古诗：《春望》", type: "gushi",
    poem: { title: "春望", author: "杜甫", lines: ["国破山河在，", "城春草木深。", "感时花溅泪，", "恨别鸟惊心。"] },
    items: [
      { q: "本诗作者：", correct: "杜甫", options: ["杜甫", "李白", "王维", "白居易"] },
      { q: "“城春草木深”形容：", correct: "城内荒芜", options: ["城内荒芜", "草木茂盛美丽", "春天到", "城里植物多"] },
      { q: "“感时花溅泪”用了：", correct: "拟人", options: ["拟人", "比喻", "夸张", "对偶"] },
      { q: "诗表达：", correct: "忧国伤时", options: ["忧国伤时", "春日喜悦", "登高远眺", "送别友人"] }
    ]},
  { id: "c3d11", name: "古诗：《山中》", type: "gushi",
    poem: { title: "山中", author: "王勃", lines: ["长江悲已滞，", "万里念将归。", "况属高风晚，", "山山黄叶飞。"] },
    items: [
      { q: "本诗作者：", correct: "王勃", options: ["王勃", "王维", "王昌龄", "王安石"] },
      { q: "“悲已滞”意思：", correct: "因悲伤而停滞", options: ["因悲伤而停滞", "悲伤之极", "悲伤已经过去", "已经停滞"] },
      { q: "“高风晚”形容：", correct: "深秋之夜", options: ["深秋之夜", "晚风大", "高山风", "傍晚风高"] },
      { q: "诗表达：", correct: "思乡之愁", options: ["思乡之愁", "登山之兴", "丰收之喜", "送别之情"] }
    ]},
  { id: "c3d12", name: "古诗：《观书有感》", type: "gushi",
    poem: { title: "观书有感", author: "朱熹", lines: ["半亩方塘一鉴开，", "天光云影共徘徊。", "问渠那得清如许？", "为有源头活水来。"] },
    items: [
      { q: "本诗作者：", correct: "朱熹", options: ["朱熹", "苏轼", "陆游", "辛弃疾"] },
      { q: "“一鉴开”比喻塘水如：", correct: "明镜", options: ["明镜", "门开", "水流", "水平"] },
      { q: "“源头活水”比喻：", correct: "不断的新知", options: ["不断的新知", "实际水源", "山中水", "清水"] },
      { q: "诗讲述的道理：", correct: "学习要不断汲取新知", options: ["学习要不断汲取新知", "保护水源", "读书无用", "勤于反思"] }
    ]}
);

/* —— 4 年级上（输入） —— */
DATA.chinese["4上"].push(
  { id: "c4u9", name: "古诗：《黄鹤楼》", type: "gushi-input",
    poem: { title: "黄鹤楼", author: "崔颢",
      lines: ["昔人已乘黄鹤去，", "此地空余黄鹤楼。", "黄鹤一去不复返，", "白云千载空悠悠。",
              "晴川历历汉阳树，", "芳草萋萋鹦鹉洲。", "日暮乡关何处是？", "烟波江上使人愁。"] },
    items: [
      { q: "本诗作者：", answer: "崔颢" },
      { q: "“昔人”指：", answer: "传说中的仙人", accept: ["传说中的仙人", "古代的仙人", "仙人"] },
      { q: "“历历”形容：", answer: "清楚分明", accept: ["清楚分明", "清晰", "分明", "清楚"] },
      { q: "诗表达：", answer: "怀古思乡", accept: ["怀古思乡", "思乡", "怀古之情", "思乡怀古"] }
    ]},
  { id: "c4u10", name: "古诗：《望岳》", type: "gushi-input",
    poem: { title: "望岳", author: "杜甫",
      lines: ["岱宗夫如何？", "齐鲁青未了。", "造化钟神秀，", "阴阳割昏晓。",
              "荡胸生层云，", "决眦入归鸟。", "会当凌绝顶，", "一览众山小。"] },
    items: [
      { q: "本诗作者：", answer: "杜甫" },
      { q: "“岱宗”指：", answer: "泰山", accept: ["泰山"] },
      { q: "“会当”意思：", answer: "终将", accept: ["终将", "终要", "一定要"] },
      { q: "“一览众山小”表达：", answer: "雄心壮志", accept: ["雄心壮志", "豪情壮志", "壮志凌云"] }
    ]},
  { id: "c4u11", name: "古诗：《闻王昌龄左迁龙标遥有此寄》", type: "gushi-input",
    poem: { title: "闻王昌龄左迁龙标遥有此寄", author: "李白", lines: ["杨花落尽子规啼，", "闻道龙标过五溪。", "我寄愁心与明月，", "随风直到夜郎西。"] },
    items: [
      { q: "本诗作者：", answer: "李白" },
      { q: "“子规”指：", answer: "杜鹃鸟", accept: ["杜鹃鸟", "杜鹃", "布谷鸟"] },
      { q: "“寄愁心与明月”用了：", answer: "拟人", accept: ["拟人"] },
      { q: "诗表达：", answer: "对友人的牵挂", accept: ["对友人的牵挂", "思念友人", "对友人的关切", "牵挂朋友"] }
    ]},
  { id: "c4u12", name: "古诗：《己亥杂诗·九州生气》", type: "gushi-input",
    poem: { title: "己亥杂诗", author: "龚自珍", lines: ["九州生气恃风雷，", "万马齐喑究可哀。", "我劝天公重抖擞，", "不拘一格降人才。"] },
    items: [
      { q: "本诗作者：", answer: "龚自珍" },
      { q: "“万马齐喑”意思：", answer: "形势万马沉寂", accept: ["形势万马沉寂", "众人沉默", "一片死寂", "万马都不出声"] },
      { q: "“不拘一格”意思：", answer: "不限于一种格式", accept: ["不限于一种格式", "不限定一种", "不拘形式", "不分等级"] },
      { q: "诗呼吁：", answer: "广纳人才振兴国家", accept: ["广纳人才振兴国家", "广纳人才", "重视人才", "广用人才"] }
    ]},
  { id: "c4u13", name: "古诗：《浣溪沙·游蕲水清泉寺》", type: "gushi-input",
    poem: { title: "浣溪沙·游蕲水清泉寺", author: "苏轼",
      lines: ["山下兰芽短浸溪，", "松间沙路净无泥。", "萧萧暮雨子规啼。",
              "谁道人生无再少？", "门前流水尚能西！", "休将白发唱黄鸡。"] },
    items: [
      { q: "本词作者：", answer: "苏轼" },
      { q: "“兰芽”指：", answer: "兰草的嫩芽", accept: ["兰草的嫩芽", "兰花芽", "兰花的嫩芽"] },
      { q: "“流水尚能西”用了：", answer: "比喻／反诘", accept: ["比喻／反诘", "反问", "比喻", "反诘"] },
      { q: "词的主旨：", answer: "积极乐观", accept: ["积极乐观", "乐观豁达", "豁达乐观", "奋发不老"] }
    ]}
);

/* —— 4 年级下（输入） —— */
DATA.chinese["4下"].push(
  { id: "c4d8", name: "古诗：《望月怀远》", type: "gushi-input",
    poem: { title: "望月怀远", author: "张九龄",
      lines: ["海上生明月，", "天涯共此时。", "情人怨遥夜，", "竟夕起相思。"] },
    items: [
      { q: "本诗作者：", answer: "张九龄" },
      { q: "“天涯共此时”意思：", answer: "天涯各处共此明月", accept: ["天涯各处共此明月", "天涯共时", "在不同地方共此月", "天各一方共看明月"] },
      { q: "“竟夕”意思：", answer: "整夜", accept: ["整夜", "通宵", "一夜"] },
      { q: "诗表达：", answer: "思念远方亲人", accept: ["思念远方亲人", "怀人", "思念", "思念远人"] }
    ]},
  { id: "c4d9", name: "古诗：《山亭夏日》", type: "gushi-input",
    poem: { title: "山亭夏日", author: "高骈", lines: ["绿树阴浓夏日长，", "楼台倒影入池塘。", "水晶帘动微风起，", "满架蔷薇一院香。"] },
    items: [
      { q: "本诗作者：", answer: "高骈" },
      { q: "“阴浓”形容：", answer: "树荫浓密", accept: ["树荫浓密", "阴影深", "浓密树荫"] },
      { q: "“水晶帘”比喻：", answer: "水面或水波", accept: ["水面或水波", "水帘", "池水", "水面"] },
      { q: "诗描写：", answer: "夏日庭院景色", accept: ["夏日庭院景色", "夏日庭院", "夏日小园景色"] }
    ]},
  { id: "c4d10", name: "古诗：《八阵图》", type: "gushi-input",
    poem: { title: "八阵图", author: "杜甫", lines: ["功盖三分国，", "名成八阵图。", "江流石不转，", "遗恨失吞吴。"] },
    items: [
      { q: "本诗作者：", answer: "杜甫" },
      { q: "“八阵图”是：", answer: "诸葛亮所创阵法", accept: ["诸葛亮所创阵法", "诸葛亮的阵法", "诸葛亮的兵阵"] },
      { q: "“三分国”指：", answer: "三国鼎立", accept: ["三国鼎立", "三国"] },
      { q: "诗赞叹的是：", answer: "诸葛亮的功绩与遗憾", accept: ["诸葛亮的功绩与遗憾", "诸葛亮", "对诸葛亮的赞颂", "诸葛亮功业"] }
    ]},
  { id: "c4d11", name: "古诗：《题乌江亭》", type: "gushi-input",
    poem: { title: "题乌江亭", author: "杜牧", lines: ["胜败兵家事不期，", "包羞忍耻是男儿。", "江东子弟多才俊，", "卷土重来未可知。"] },
    items: [
      { q: "本诗作者：", answer: "杜牧" },
      { q: "“事不期”意思：", answer: "难以预料", accept: ["难以预料", "无法预测", "无定数"] },
      { q: "“卷土重来”意思：", answer: "重新崛起", accept: ["重新崛起", "重新起来", "再次崛起", "重整旗鼓"] },
      { q: "诗议论的对象是：", answer: "项羽", accept: ["项羽", "楚霸王"] }
    ]},
  { id: "c4d12", name: "古诗：《赤壁》", type: "gushi-input",
    poem: { title: "赤壁", author: "杜牧", lines: ["折戟沉沙铁未销，", "自将磨洗认前朝。", "东风不与周郎便，", "铜雀春深锁二乔。"] },
    items: [
      { q: "本诗作者：", answer: "杜牧" },
      { q: "“折戟”指：", answer: "折断的戟", accept: ["折断的戟", "断戟"] },
      { q: "“周郎”指：", answer: "周瑜", accept: ["周瑜"] },
      { q: "诗谈论的是：", answer: "赤壁之战", accept: ["赤壁之战", "赤壁大战"] }
    ]}
);

/* —— 5 年级上（输入） —— */
DATA.chinese["5上"].push(
  { id: "c5u8", name: "古诗：《观沧海》", type: "gushi-input",
    poem: { title: "观沧海", author: "曹操",
      lines: ["东临碣石，", "以观沧海。", "水何澹澹，", "山岛竦峙。",
              "树木丛生，", "百草丰茂。", "秋风萧瑟，", "洪波涌起。",
              "日月之行，", "若出其中。", "星汉灿烂，", "若出其里。"] },
    items: [
      { q: "本诗作者：", answer: "曹操" },
      { q: "“澹澹”形容：", answer: "水波荡漾", accept: ["水波荡漾", "水波", "波浪起伏", "水势汹涌"] },
      { q: "“竦峙”形容：", answer: "山岛高耸屹立", accept: ["山岛高耸屹立", "高耸挺立", "耸立", "挺拔屹立"] },
      { q: "诗表达：", answer: "雄心壮志", accept: ["雄心壮志", "壮志豪情", "豪情壮志", "胸怀大志"] }
    ]},
  { id: "c5u9", name: "古诗：《龟虽寿》", type: "gushi-input",
    poem: { title: "龟虽寿", author: "曹操",
      lines: ["神龟虽寿，犹有竟时。", "腾蛇乘雾，终为土灰。",
              "老骥伏枥，志在千里。", "烈士暮年，壮心不已。"] },
    items: [
      { q: "本诗作者：", answer: "曹操" },
      { q: "“老骥伏枥”比喻：", answer: "年老仍怀壮志", accept: ["年老仍怀壮志", "老当益壮", "年长仍有壮志"] },
      { q: "“烈士”指：", answer: "有抱负的人", accept: ["有抱负的人", "有志之士", "壮志之人", "有志的人"] },
      { q: "诗表达：", answer: "积极进取", accept: ["积极进取", "壮心不已", "奋发", "进取精神"] }
    ]},
  { id: "c5u10", name: "古诗：《乌衣巷》", type: "gushi-input",
    poem: { title: "乌衣巷", author: "刘禹锡", lines: ["朱雀桥边野草花，", "乌衣巷口夕阳斜。", "旧时王谢堂前燕，", "飞入寻常百姓家。"] },
    items: [
      { q: "本诗作者：", answer: "刘禹锡" },
      { q: "“王谢”指：", answer: "东晋两大豪门", accept: ["东晋两大豪门", "王导谢安", "豪门贵族", "王谢两家"] },
      { q: "诗中今昔对比表现：", answer: "盛衰变迁", accept: ["盛衰变迁", "兴衰变化", "兴亡之感"] },
      { q: "“寻常百姓家”意思：", answer: "普通百姓家", accept: ["普通百姓家", "百姓家", "平常人家"] }
    ]},
  { id: "c5u11", name: "古诗：《竹枝词》", type: "gushi-input",
    poem: { title: "竹枝词", author: "刘禹锡", lines: ["杨柳青青江水平，", "闻郎江上唱歌声。", "东边日出西边雨，", "道是无晴却有晴。"] },
    items: [
      { q: "本诗作者：", answer: "刘禹锡" },
      { q: "“道是无晴却有晴”双关“晴”：", answer: "情", accept: ["情", "情意"] },
      { q: "诗中描绘哪种民间风俗？", answer: "情歌对唱", accept: ["情歌对唱", "对歌", "唱情歌", "民歌对唱"] },
      { q: "诗表达：", answer: "少女含蓄的爱恋", accept: ["少女含蓄的爱恋", "含蓄的情意", "暗藏的爱情", "羞涩的爱"] }
    ]},
  { id: "c5u12", name: "古诗：《题都城南庄》", type: "gushi-input",
    poem: { title: "题都城南庄", author: "崔护", lines: ["去年今日此门中，", "人面桃花相映红。", "人面不知何处去，", "桃花依旧笑春风。"] },
    items: [
      { q: "本诗作者：", answer: "崔护" },
      { q: "“相映红”意思：", answer: "人面与桃花相互映衬而红", accept: ["人面与桃花相互映衬而红", "彼此映衬", "互相辉映", "互相映衬"] },
      { q: "诗表达：", answer: "物是人非的怅惘", accept: ["物是人非的怅惘", "物是人非", "怀人惆怅", "怅惘"] },
      { q: "“桃花依旧”衬托：", answer: "人不见", accept: ["人不见", "人面不再", "人事变迁"] }
    ]}
);

/* —— 5 年级下（输入） —— */
DATA.chinese["5下"].push(
  { id: "c5d8", name: "古诗：《秋浦歌》", type: "gushi-input",
    poem: { title: "秋浦歌", author: "李白", lines: ["白发三千丈，", "缘愁似个长。", "不知明镜里，", "何处得秋霜。"] },
    items: [
      { q: "本诗作者：", answer: "李白" },
      { q: "“白发三千丈”用了：", answer: "夸张", accept: ["夸张"] },
      { q: "“秋霜”比喻：", answer: "白发", accept: ["白发"] },
      { q: "诗表达：", answer: "深沉的愁绪", accept: ["深沉的愁绪", "愁绪", "忧愁", "深愁"] }
    ]},
  { id: "c5d9", name: "古诗：《子夜吴歌·秋歌》", type: "gushi-input",
    poem: { title: "子夜吴歌·秋歌", author: "李白", lines: ["长安一片月，", "万户捣衣声。", "秋风吹不尽，", "总是玉关情。"] },
    items: [
      { q: "本诗作者：", answer: "李白" },
      { q: "“捣衣”意思：", answer: "捶打衣物准备寒衣", accept: ["捶打衣物准备寒衣", "捶打衣服", "捣洗衣物", "捣衣做寒衣"] },
      { q: "“玉关”指：", answer: "玉门关", accept: ["玉门关"] },
      { q: "诗表达：", answer: "思念征人", accept: ["思念征人", "思念戍边亲人", "思夫", "思念远征的亲人"] }
    ]},
  { id: "c5d10", name: "古诗：《离思·曾经沧海》", type: "gushi-input",
    poem: { title: "离思", author: "元稹", lines: ["曾经沧海难为水，", "除却巫山不是云。", "取次花丛懒回顾，", "半缘修道半缘君。"] },
    items: [
      { q: "本诗作者：", answer: "元稹" },
      { q: "“曾经沧海难为水”比喻：", answer: "见过最好，他者难比", accept: ["见过最好，他者难比", "见过沧海别的水算不上", "经历过最深的，再见就觉得不算", "见过最好后觉得别的不算"] },
      { q: "“取次”意思：", answer: "随意", accept: ["随意", "随便"] },
      { q: "诗表达：", answer: "对亡妻的深情", accept: ["对亡妻的深情", "怀念亡妻", "对妻子的怀念", "悼亡"] }
    ]},
  { id: "c5d11", name: "古诗：《渡荆门送别》", type: "gushi-input",
    poem: { title: "渡荆门送别", author: "李白",
      lines: ["渡远荆门外，", "来从楚国游。", "山随平野尽，", "江入大荒流。",
              "月下飞天镜，", "云生结海楼。", "仍怜故乡水，", "万里送行舟。"] },
    items: [
      { q: "本诗作者：", answer: "李白" },
      { q: "“江入大荒流”形容：", answer: "江水流入广阔原野", accept: ["江水流入广阔原野", "江水奔涌", "江流入旷野", "江入大平原"] },
      { q: "“天镜”比喻：", answer: "月亮在水中的倒影", accept: ["月亮在水中的倒影", "月亮倒影", "月亮", "月影"] },
      { q: "诗表达：", answer: "对故乡的眷恋", accept: ["对故乡的眷恋", "思乡之情", "怀念故乡", "思乡"] }
    ]},
  { id: "c5d12", name: "古诗：《月夜》", type: "gushi-input",
    poem: { title: "月夜", author: "杜甫",
      lines: ["今夜鄜州月，", "闺中只独看。", "遥怜小儿女，", "未解忆长安。",
              "香雾云鬟湿，", "清辉玉臂寒。", "何时倚虚幌，", "双照泪痕干。"] },
    items: [
      { q: "本诗作者：", answer: "杜甫" },
      { q: "“鄜州”是：", answer: "地名", accept: ["地名", "陕西鄜州"] },
      { q: "“未解”意思：", answer: "不懂得", accept: ["不懂得", "不明白", "不理解"] },
      { q: "诗表达：", answer: "对妻儿的思念", accept: ["对妻儿的思念", "思念妻儿", "想念家人", "怀念妻儿"] }
    ]}
);

/* —— 6 年级上（输入） —— */
DATA.chinese["6上"].push(
  { id: "c6u8", name: "古诗：《蒹葭》（节选）", type: "gushi-input",
    poem: { title: "蒹葭", author: "《诗经·秦风》",
      lines: ["蒹葭苍苍，", "白露为霜。", "所谓伊人，", "在水一方。",
              "溯洄从之，", "道阻且长。", "溯游从之，", "宛在水中央。"] },
    items: [
      { q: "本诗出自：", answer: "诗经", accept: ["诗经", "《诗经》", "《诗经·秦风》"] },
      { q: "“蒹葭”指：", answer: "芦苇", accept: ["芦苇"] },
      { q: "“伊人”意思：", answer: "那人", accept: ["那人", "心中所思之人", "意中人"] },
      { q: "诗表达：", answer: "执着追寻的爱慕", accept: ["执着追寻的爱慕", "对意中人的追寻", "追寻爱情", "追寻意中人"] }
    ]},
  { id: "c6u9", name: "古诗：《关雎》（节选）", type: "gushi-input",
    poem: { title: "关雎", author: "《诗经·周南》",
      lines: ["关关雎鸠，", "在河之洲。", "窈窕淑女，", "君子好逑。",
              "参差荇菜，", "左右流之。", "窈窕淑女，", "寤寐求之。"] },
    items: [
      { q: "本诗出自：", answer: "诗经", accept: ["诗经", "《诗经》", "《诗经·周南》"] },
      { q: "“窈窕”形容：", answer: "美好文静", accept: ["美好文静", "文静美丽", "美丽端庄"] },
      { q: "“好逑”意思：", answer: "好的配偶", accept: ["好的配偶", "好伴侣", "好对象"] },
      { q: "“寤寐”意思：", answer: "醒时和睡时", accept: ["醒时和睡时", "醒着睡着", "无论醒睡"] }
    ]},
  { id: "c6u10", name: "古诗：《短歌行》（节选）", type: "gushi-input",
    poem: { title: "短歌行", author: "曹操",
      lines: ["对酒当歌，", "人生几何！", "譬如朝露，", "去日苦多。",
              "慨当以慷，", "忧思难忘。", "何以解忧？", "唯有杜康。"] },
    items: [
      { q: "本诗作者：", answer: "曹操" },
      { q: "“几何”意思：", answer: "多少", accept: ["多少", "能有多少"] },
      { q: "“去日苦多”意思：", answer: "逝去的日子苦于太多", accept: ["逝去的日子苦于太多", "过去的日子太多", "逝去日多"] },
      { q: "“杜康”代指：", answer: "酒", accept: ["酒"] }
    ]},
  { id: "c6u11", name: "古诗：《己亥杂诗·浩荡离愁》", type: "gushi-input",
    poem: { title: "己亥杂诗", author: "龚自珍", lines: ["浩荡离愁白日斜，", "吟鞭东指即天涯。", "落红不是无情物，", "化作春泥更护花。"] },
    items: [
      { q: "本诗作者：", answer: "龚自珍" },
      { q: "“吟鞭”意思：", answer: "诗人的马鞭", accept: ["诗人的马鞭", "马鞭"] },
      { q: "“落红”指：", answer: "落花", accept: ["落花", "凋谢的花"] },
      { q: "“化作春泥更护花”表达：", answer: "甘愿奉献", accept: ["甘愿奉献", "奉献精神", "无私奉献", "牺牲精神"] }
    ]},
  { id: "c6u12", name: "古诗：《江城子·密州出猎》（节选）", type: "gushi-input",
    poem: { title: "江城子·密州出猎", author: "苏轼",
      lines: ["老夫聊发少年狂，", "左牵黄，右擎苍。", "锦帽貂裘，", "千骑卷平冈。",
              "为报倾城随太守，", "亲射虎，看孙郎。"] },
    items: [
      { q: "本词作者：", answer: "苏轼" },
      { q: "“左牵黄，右擎苍”意思：", answer: "牵着黄犬擎着苍鹰", accept: ["牵着黄犬擎着苍鹰", "牵狗举鹰", "左边黄狗右边苍鹰", "左牵狗右举鹰"] },
      { q: "“孙郎”指：", answer: "孙权", accept: ["孙权"] },
      { q: "本词表达：", answer: "豪迈报国之志", accept: ["豪迈报国之志", "豪情壮志", "报国之志", "豪迈情怀"] }
    ]}
);

/* —— 6 年级下（输入） —— */
DATA.chinese["6下"].push(
  { id: "c6d9", name: "古诗：《静女》", type: "gushi-input",
    poem: { title: "静女", author: "《诗经·邶风》",
      lines: ["静女其姝，", "俟我于城隅。", "爱而不见，", "搔首踟蹰。"] },
    items: [
      { q: "本诗出自：", answer: "诗经", accept: ["诗经", "《诗经》", "《诗经·邶风》"] },
      { q: "“姝”意思：", answer: "美丽", accept: ["美丽", "美好"] },
      { q: "“俟”意思：", answer: "等待", accept: ["等待", "等"] },
      { q: "“踟蹰”形容：", answer: "犹豫徘徊", accept: ["犹豫徘徊", "徘徊不前", "犹豫"] }
    ]},
  { id: "c6d10", name: "古诗：《木兰诗》（节选）", type: "gushi-input",
    poem: { title: "木兰诗", author: "北朝民歌",
      lines: ["唧唧复唧唧，", "木兰当户织。", "不闻机杼声，", "唯闻女叹息。",
              "问女何所思，", "问女何所忆。", "女亦无所思，", "女亦无所忆。"] },
    items: [
      { q: "本诗出自：", answer: "北朝民歌", accept: ["北朝民歌", "乐府民歌", "乐府诗", "南北朝民歌"] },
      { q: "“当户织”意思：", answer: "对着门织布", accept: ["对着门织布", "对门织布", "面向门织布"] },
      { q: "“机杼”指：", answer: "织布机", accept: ["织布机"] },
      { q: "木兰：", answer: "替父从军的女英雄", accept: ["替父从军的女英雄", "替父从军", "替父出征"] }
    ]},
  { id: "c6d11", name: "古诗：《茅屋为秋风所破歌》（节选）", type: "gushi-input",
    poem: { title: "茅屋为秋风所破歌", author: "杜甫",
      lines: ["安得广厦千万间，", "大庇天下寒士俱欢颜！", "风雨不动安如山。",
              "呜呼！何时眼前突兀见此屋，", "吾庐独破受冻死亦足！"] },
    items: [
      { q: "本诗作者：", answer: "杜甫" },
      { q: "“广厦”意思：", answer: "宽敞的大房子", accept: ["宽敞的大房子", "大房子", "广阔的房屋"] },
      { q: "“寒士”指：", answer: "贫寒的读书人", accept: ["贫寒的读书人", "贫寒之士", "穷苦的读书人"] },
      { q: "诗表达：", answer: "忧国忧民", accept: ["忧国忧民", "心系百姓", "忧民", "推己及人"] }
    ]},
  { id: "c6d12", name: "古诗：《雁门太守行》", type: "gushi-input",
    poem: { title: "雁门太守行", author: "李贺",
      lines: ["黑云压城城欲摧，", "甲光向日金鳞开。", "角声满天秋色里，", "塞上燕脂凝夜紫。",
              "半卷红旗临易水，", "霜重鼓寒声不起。", "报君黄金台上意，", "提携玉龙为君死。"] },
    items: [
      { q: "本诗作者：", answer: "李贺" },
      { q: "“黑云压城城欲摧”形容：", answer: "敌军压境的紧张", accept: ["敌军压境的紧张", "敌兵压境", "气势紧迫", "敌势汹涌"] },
      { q: "“玉龙”指：", answer: "宝剑", accept: ["宝剑"] },
      { q: "诗表达：", answer: "誓死报国", accept: ["誓死报国", "报国之志", "为国捐躯", "忠君报国"] }
    ]},
  { id: "c6d13", name: "古诗：《行路难》（节选）", type: "gushi-input",
    poem: { title: "行路难", author: "李白",
      lines: ["金樽清酒斗十千，", "玉盘珍羞直万钱。", "停杯投箸不能食，", "拔剑四顾心茫然。",
              "长风破浪会有时，", "直挂云帆济沧海。"] },
    items: [
      { q: "本诗作者：", answer: "李白" },
      { q: "“珍羞”意思：", answer: "珍贵的菜肴", accept: ["珍贵的菜肴", "珍馐", "美味菜肴"] },
      { q: "“长风破浪”比喻：", answer: "实现远大抱负", accept: ["实现远大抱负", "施展抱负", "成就大业", "实现理想"] },
      { q: "本诗末句表达：", answer: "对未来的坚定信念", accept: ["对未来的坚定信念", "乐观自信", "坚定自信", "对未来充满信心"] }
    ]}
);

/* ============================================================
   语文：小学必背古诗扩充（第三批 · 收尾至 150）
   ============================================================ */

/* —— 3 年级下 —— */
DATA.chinese["3下"].push(
  { id: "c3d13", name: "古诗：《春日偶成》", type: "gushi",
    poem: { title: "春日偶成", author: "程颢", lines: ["云淡风轻近午天，", "傍花随柳过前川。", "时人不识余心乐，", "将谓偷闲学少年。"] },
    items: [
      { q: "本诗作者：", correct: "程颢", options: ["程颢", "程颐", "朱熹", "苏轼"] },
      { q: "“傍花随柳”描绘的是：", correct: "春日游赏", options: ["春日游赏", "种花种柳", "依傍花柳", "采花折柳"] },
      { q: "“余心乐”指：", correct: "我心中的快乐", options: ["我心中的快乐", "剩下的乐", "多余的乐", "我快乐了"] },
      { q: "“偷闲”意思：", correct: "偷得闲暇", options: ["偷得闲暇", "偷懒", "偷东西", "趁机休息"] }
    ]},
  { id: "c3d14", name: "古诗：《夜雪》", type: "gushi",
    poem: { title: "夜雪", author: "白居易", lines: ["已讶衾枕冷，", "复见窗户明。", "夜深知雪重，", "时闻折竹声。"] },
    items: [
      { q: "本诗作者：", correct: "白居易", options: ["白居易", "李白", "杜甫", "王维"] },
      { q: "“讶”意思：", correct: "惊讶", options: ["惊讶", "迟疑", "怀疑", "明白"] },
      { q: "“衾枕”指：", correct: "被子和枕头", options: ["被子和枕头", "床铺", "棉袄", "睡衣"] },
      { q: "诗人怎么知道下雪了？", correct: "通过冷、亮、声音", options: ["通过冷、亮、声音", "亲眼看见", "听人说", "看到地面"] }
    ]}
);

/* —— 4 年级上 —— */
DATA.chinese["4上"].push(
  { id: "c4u14", name: "古诗：《夜雨寄北》", type: "gushi-input",
    poem: { title: "夜雨寄北", author: "李商隐", lines: ["君问归期未有期，", "巴山夜雨涨秋池。", "何当共剪西窗烛，", "却话巴山夜雨时。"] },
    items: [
      { q: "本诗作者：", answer: "李商隐" },
      { q: "“何当”意思：", answer: "何时能够", accept: ["何时能够", "何时", "什么时候能"] },
      { q: "“共剪西窗烛”描绘：", answer: "团聚夜话", accept: ["团聚夜话", "团聚的情景", "重逢夜谈", "促膝夜谈"] },
      { q: "诗表达：", answer: "对亲人的思念", accept: ["对亲人的思念", "思念亲人", "对妻子的思念", "怀人"] }
    ]},
  { id: "c4u15", name: "古诗：《钱塘湖春行》", type: "gushi-input",
    poem: { title: "钱塘湖春行", author: "白居易",
      lines: ["孤山寺北贾亭西，", "水面初平云脚低。", "几处早莺争暖树，", "谁家新燕啄春泥。",
              "乱花渐欲迷人眼，", "浅草才能没马蹄。", "最爱湖东行不足，", "绿杨阴里白沙堤。"] },
    items: [
      { q: "本诗作者：", answer: "白居易" },
      { q: "“云脚低”形容：", answer: "云贴近水面", accept: ["云贴近水面", "云压得低", "云低垂"] },
      { q: "“没马蹄”意思：", answer: "刚没过马蹄", accept: ["刚没过马蹄", "盖住马蹄", "没过马蹄"] },
      { q: "诗描写：", answer: "西湖春景", accept: ["西湖春景", "钱塘春景", "西湖的春天"] }
    ]}
);

/* —— 4 年级下 —— */
DATA.chinese["4下"].push(
  { id: "c4d13", name: "古诗：《春思》", type: "gushi-input",
    poem: { title: "春思", author: "李白",
      lines: ["燕草如碧丝，", "秦桑低绿枝。", "当君怀归日，", "是妾断肠时。",
              "春风不相识，", "何事入罗帏？"] },
    items: [
      { q: "本诗作者：", answer: "李白" },
      { q: "“燕草”“秦桑”分别在：", answer: "北方／南方", accept: ["北方／南方", "燕地秦地", "北和南", "北方和南方"] },
      { q: "“妾”指：", answer: "古代女子自称", accept: ["古代女子自称", "女子自称", "妻子自称"] },
      { q: "诗表达：", answer: "思念远方丈夫", accept: ["思念远方丈夫", "思夫", "怀人", "思念远人"] }
    ]},
  { id: "c4d14", name: "古诗：《宿建德江》", type: "gushi-input",
    poem: { title: "宿建德江", author: "孟浩然", lines: ["移舟泊烟渚，", "日暮客愁新。", "野旷天低树，", "江清月近人。"] },
    items: [
      { q: "本诗作者：", answer: "孟浩然" },
      { q: "“烟渚”意思：", answer: "雾气笼罩的小洲", accept: ["雾气笼罩的小洲", "雾中的小洲", "烟雾朦胧的水中小洲"] },
      { q: "“天低树”说明：", answer: "原野空旷天像压在树上", accept: ["原野空旷天像压在树上", "野旷天接树", "天低近树", "原野空旷"] },
      { q: "诗表达：", answer: "羁旅愁思", accept: ["羁旅愁思", "客愁", "旅途愁绪", "思乡愁绪"] }
    ]}
);

/* —— 5 年级上 —— */
DATA.chinese["5上"].push(
  { id: "c5u13", name: "古诗：《春江花月夜》（节选）", type: "gushi-input",
    poem: { title: "春江花月夜", author: "张若虚",
      lines: ["春江潮水连海平，", "海上明月共潮生。", "滟滟随波千万里，", "何处春江无月明！"] },
    items: [
      { q: "本诗作者：", answer: "张若虚" },
      { q: "“滟滟”形容：", answer: "波光闪动", accept: ["波光闪动", "波光闪闪", "水波闪烁"] },
      { q: "本诗常被誉为：", answer: "孤篇盖全唐", accept: ["孤篇盖全唐", "盖全唐", "孤篇压倒全唐"] },
      { q: "“共潮生”意思：", answer: "随潮水一同升起", accept: ["随潮水一同升起", "和潮水一起出现", "随潮升起", "伴潮而生"] }
    ]},
  { id: "c5u14", name: "古诗：《春行即兴》", type: "gushi-input",
    poem: { title: "春行即兴", author: "李华", lines: ["宜阳城下草萋萋，", "涧水东流复向西。", "芳树无人花自落，", "春山一路鸟空啼。"] },
    items: [
      { q: "本诗作者：", answer: "李华" },
      { q: "“萋萋”形容：", answer: "草长茂盛", accept: ["草长茂盛", "茂盛", "草茂", "繁茂"] },
      { q: "“花自落”“鸟空啼”表达：", answer: "山中寂寥", accept: ["山中寂寥", "寂寞冷清", "无人寂寞", "凄清寂寥"] },
      { q: "诗反映：", answer: "战乱后荒凉", accept: ["战乱后荒凉", "荒凉之感", "凋敝景象", "战后凄凉"] }
    ]}
);

/* —— 5 年级下 —— */
DATA.chinese["5下"].push(
  { id: "c5d13", name: "古诗：《卜算子·送鲍浩然之浙东》", type: "gushi-input",
    poem: { title: "卜算子·送鲍浩然之浙东", author: "王观",
      lines: ["水是眼波横，", "山是眉峰聚。", "欲问行人去那边？", "眉眼盈盈处。",
              "才始送春归，", "又送君归去。", "若到江南赶上春，", "千万和春住。"] },
    items: [
      { q: "本词作者：", answer: "王观" },
      { q: "“眼波横”比喻：", answer: "横流的水", accept: ["横流的水", "水似眼波", "水波"] },
      { q: "“眉峰聚”比喻：", answer: "山峰", accept: ["山峰", "聚拢的山"] },
      { q: "“千万和春住”表达：", answer: "祝福友人享受美景", accept: ["祝福友人享受美景", "希望友人留住春天", "祝友与春同住", "祝福"] }
    ]}
);

/* —— 6 年级上 —— */
DATA.chinese["6上"].push(
  { id: "c6u13", name: "古诗：《水调歌头·明月几时有》（节选）", type: "gushi-input",
    poem: { title: "水调歌头", author: "苏轼",
      lines: ["明月几时有？", "把酒问青天。", "不知天上宫阙，", "今夕是何年。",
              "人有悲欢离合，", "月有阴晴圆缺，", "此事古难全。", "但愿人长久，", "千里共婵娟。"] },
    items: [
      { q: "本词作者：", answer: "苏轼" },
      { q: "“婵娟”指：", answer: "明月", accept: ["明月", "月亮"] },
      { q: "“此事古难全”表达：", answer: "人生难圆满的哲理", accept: ["人生难圆满的哲理", "人生难免缺憾", "事难圆满", "事难尽善"] },
      { q: "下阕末句寄托：", answer: "对亲人的美好祝愿", accept: ["对亲人的美好祝愿", "对远人的祝福", "祝愿亲人长久", "祝福亲人"] }
    ]},
  { id: "c6u14", name: "古诗：《醉花阴》（节选）", type: "gushi-input",
    poem: { title: "醉花阴", author: "李清照",
      lines: ["薄雾浓云愁永昼，", "瑞脑销金兽。", "佳节又重阳，", "玉枕纱厨，", "半夜凉初透。",
              "莫道不销魂，", "帘卷西风，", "人比黄花瘦。"] },
    items: [
      { q: "本词作者：", answer: "李清照" },
      { q: "“瑞脑”指：", answer: "一种熏香", accept: ["一种熏香", "香料", "龙脑香", "熏香"] },
      { q: "“销魂”意思：", answer: "极度伤感", accept: ["极度伤感", "形容愁极", "愁苦至极", "伤感至极"] },
      { q: "“人比黄花瘦”体现：", answer: "相思之苦", accept: ["相思之苦", "相思憔悴", "思夫憔悴", "因相思而瘦"] }
    ]}
);

/* —— 6 年级下 —— */
DATA.chinese["6下"].push(
  { id: "c6d14", name: "古诗：《念奴娇·赤壁怀古》（节选）", type: "gushi-input",
    poem: { title: "念奴娇·赤壁怀古", author: "苏轼",
      lines: ["大江东去，", "浪淘尽，千古风流人物。", "故垒西边，", "人道是，三国周郎赤壁。",
              "乱石穿空，", "惊涛拍岸，", "卷起千堆雪。", "江山如画，", "一时多少豪杰。"] },
    items: [
      { q: "本词作者：", answer: "苏轼" },
      { q: "“风流人物”指：", answer: "杰出的英雄人物", accept: ["杰出的英雄人物", "英雄人物", "英雄豪杰", "杰出的人物"] },
      { q: "“卷起千堆雪”比喻：", answer: "白色浪花", accept: ["白色浪花", "浪花如雪", "浪花", "翻涌的浪"] },
      { q: "本词主题：", answer: "怀古抒怀", accept: ["怀古抒怀", "怀古", "凭吊古迹", "缅怀英雄"] }
    ]},
  { id: "c6d15", name: "古诗：《渔家傲·秋思》", type: "gushi-input",
    poem: { title: "渔家傲·秋思", author: "范仲淹",
      lines: ["塞下秋来风景异，", "衡阳雁去无留意。", "四面边声连角起，", "千嶂里，",
              "长烟落日孤城闭。", "浊酒一杯家万里，", "燕然未勒归无计。",
              "羌管悠悠霜满地。", "人不寐，", "将军白发征夫泪。"] },
    items: [
      { q: "本词作者：", answer: "范仲淹" },
      { q: "“边声”指：", answer: "边塞各种声响", accept: ["边塞各种声响", "边塞之声", "边境声响", "边塞声音"] },
      { q: "“燕然未勒”意思：", answer: "尚未建功", accept: ["尚未建功", "功业未成", "未建战功", "战功未成"] },
      { q: "本词表达：", answer: "戍边将士的复杂情怀", accept: ["戍边将士的复杂情怀", "戍边思乡之情", "思乡报国之情", "将士思乡"] }
    ]},
  { id: "c6d16", name: "古诗：《声声慢》（节选）", type: "gushi-input",
    poem: { title: "声声慢", author: "李清照",
      lines: ["寻寻觅觅，", "冷冷清清，", "凄凄惨惨戚戚。", "乍暖还寒时候，",
              "最难将息。", "三杯两盏淡酒，", "怎敌他、晚来风急？"] },
    items: [
      { q: "本词作者：", answer: "李清照" },
      { q: "开头连用十四个叠字主要表现：", answer: "孤独凄苦", accept: ["孤独凄苦", "凄苦愁绪", "孤寂凄凉", "极度愁苦"] },
      { q: "“将息”意思：", answer: "调养休息", accept: ["调养休息", "保养", "调养", "保养休息"] },
      { q: "本词的情感基调：", answer: "凄凉愁苦", accept: ["凄凉愁苦", "凄苦", "愁苦", "悲凉"] }
    ]},
  { id: "c6d17", name: "古诗：《雨霖铃》（节选）", type: "gushi-input",
    poem: { title: "雨霖铃", author: "柳永",
      lines: ["寒蝉凄切，", "对长亭晚，", "骤雨初歇。", "都门帐饮无绪，",
              "留恋处，兰舟催发。", "执手相看泪眼，", "竟无语凝噎。",
              "多情自古伤离别，", "更那堪冷落清秋节。"] },
    items: [
      { q: "本词作者：", answer: "柳永" },
      { q: "“长亭”是：", answer: "古代送别之地", accept: ["古代送别之地", "送别的亭子", "送别的地方", "古代驿亭"] },
      { q: "“凝噎”意思：", answer: "因感伤而说不出话", accept: ["因感伤而说不出话", "说不出话", "哽咽", "哽咽难言"] },
      { q: "本词主旨：", answer: "离别之苦", accept: ["离别之苦", "送别哀伤", "离愁别绪", "别离的痛苦"] }
    ]},
  { id: "c6d18", name: "古诗：《临江仙·滚滚长江东逝水》", type: "gushi-input",
    poem: { title: "临江仙", author: "杨慎",
      lines: ["滚滚长江东逝水，", "浪花淘尽英雄。", "是非成败转头空。", "青山依旧在，",
              "几度夕阳红。", "白发渔樵江渚上，", "惯看秋月春风。",
              "一壶浊酒喜相逢。", "古今多少事，", "都付笑谈中。"] },
    items: [
      { q: "本词作者：", answer: "杨慎" },
      { q: "“浪花淘尽英雄”用了：", answer: "比喻", accept: ["比喻"] },
      { q: "“是非成败转头空”表达：", answer: "历史虚无的感叹", accept: ["历史虚无的感叹", "看淡兴衰", "历史无常", "对成败的淡然"] },
      { q: "词的基调：", answer: "豪放旷达", accept: ["豪放旷达", "旷达", "豁达旷远", "潇洒旷达"] }
    ]}
);

DATA.chinese["1上"].push(
  { id: "c1u14", name: "拼音巩固：声母", type: "pinyin",
    items: [
      { q: "下列哪个是声母？", correct: "m", options: ["a", "o", "m", "ai"] },
      { q: "“p”的发音要注意：", correct: "送气", options: ["送气", "不送气", "张大嘴", "卷舌"] },
      { q: "“zh”属于：", correct: "声母", options: ["声母", "韵母", "声调", "笔画"] },
      { q: "“b”和“p”的主要区别是：", correct: "是否送气", options: ["是否送气", "声调不同", "笔画不同", "韵母不同"] },
      { q: "下列声母读音正确的是：", correct: "d", options: ["ao", "d", "en", "ou"] },
      { q: "“j、q、x”和“ü”相拼时，ü上的两点：", correct: "要省略", options: ["要省略", "不能省略", "变成一声", "写成u"] }
    ]},
  { id: "c1u15", name: "拼音巩固：韵母", type: "pinyin",
    items: [
      { q: "下列哪个是单韵母？", correct: "e", options: ["e", "ai", "ang", "zh"] },
      { q: "“ou”属于：", correct: "复韵母", options: ["声母", "复韵母", "整体认读", "笔画"] },
      { q: "“ing”属于：", correct: "后鼻韵母", options: ["前鼻韵母", "后鼻韵母", "单韵母", "声母"] },
      { q: "“an、en、in、un、ün”都是：", correct: "前鼻韵母", options: ["前鼻韵母", "后鼻韵母", "整体认读", "声母"] },
      { q: "下列哪个音节带有三拼音节？", correct: "guā", options: ["ba", "ma", "guā", "ni"] },
      { q: "给“花”注音正确的是：", correct: "huā", options: ["hā", "huā", "fā", "hǎ"] }
    ]},
  { id: "c1u16", name: "识字巩固：口耳目手足", type: "zishi",
    items: [
      { q: "“耳”指人体的哪个部位？", correct: "耳朵", options: ["眼睛", "耳朵", "嘴巴", "手"] },
      { q: "“手”一共几画？", correct: "4画", options: ["2画", "3画", "4画", "5画"] },
      { q: "“足”的意思是：", correct: "脚", options: ["头", "手", "脚", "眼睛"] },
      { q: "“目”的偏旁常和什么有关？", correct: "眼睛", options: ["水", "眼睛", "草木", "说话"] },
      { q: "“口”字加一横可以变成：", correct: "日", options: ["日", "月", "田", "山"] },
      { q: "下列哪个字表示动作？", correct: "看", options: ["目", "耳", "看", "口"] }
    ]},
  { id: "c1u17", name: "识字巩固：日月水火山石田禾", type: "zishi",
    items: [
      { q: "“日”表示：", correct: "太阳", options: ["月亮", "太阳", "水", "山"] },
      { q: "“禾”常和什么有关？", correct: "庄稼", options: ["庄稼", "石头", "火", "水"] },
      { q: "“山”字共有几画？", correct: "3画", options: ["2画", "3画", "4画", "5画"] },
      { q: "“水”的第一笔是：", correct: "竖钩", options: ["横", "竖钩", "撇", "点"] },
      { q: "“田”像什么？", correct: "田地", options: ["月亮", "田地", "大山", "火苗"] },
      { q: "下列哪个字和自然景物有关？", correct: "月", options: ["你", "月", "们", "好"] }
    ]}
);

DATA.chinese["1下"].push(
  { id: "c1d13", name: "识字巩固：姓氏歌", type: "zishi",
    items: [
      { q: "“姓氏”的“姓”是什么旁？", correct: "女字旁", options: ["女字旁", "木字旁", "口字旁", "三点水"] },
      { q: "“张”字的偏旁是：", correct: "弓字旁", options: ["弓字旁", "长字旁", "言字旁", "单人旁"] },
      { q: "“李”字可以拆成：", correct: "木和子", options: ["木和子", "口和子", "日和月", "人和木"] },
      { q: "“双人徐”的“徐”读作：", correct: "xú", options: ["xú", "xǔ", "xù", "shú"] },
      { q: "“许”字的偏旁是：", correct: "言字旁", options: ["言字旁", "双人旁", "木字旁", "女字旁"] },
      { q: "“中国姓氏有很多”说明：", correct: "姓氏丰富", options: ["姓氏丰富", "人很少", "只有一个姓", "没有姓氏"] }
    ]},
  { id: "c1d14", name: "识字巩固：小青蛙", type: "zishi",
    items: [
      { q: "“清、情、晴、睛”都有共同部分：", correct: "青", options: ["青", "日", "目", "心"] },
      { q: "“晴”为什么是日字旁？", correct: "和太阳有关", options: ["和水有关", "和太阳有关", "和心情有关", "和眼睛有关"] },
      { q: "“睛”为什么是目字旁？", correct: "和眼睛有关", options: ["和眼睛有关", "和天气有关", "和水有关", "和虫子有关"] },
      { q: "“请”字常用于：", correct: "礼貌说话", options: ["礼貌说话", "天气", "眼睛", "青蛙"] },
      { q: "青蛙能帮助人们：", correct: "捉害虫", options: ["捉害虫", "写字", "做饭", "唱歌"] },
      { q: "“保护禾苗吃害虫”的动物是：", correct: "青蛙", options: ["青蛙", "小鸟", "小猫", "小狗"] }
    ]},
  { id: "c1d15", name: "识字巩固：猜字谜", type: "zishi",
    items: [
      { q: "“左边绿，右边红”常提示和什么有关？", correct: "颜色", options: ["颜色", "数字", "方向", "声音"] },
      { q: "“言来互相尊重”的字可能是：", correct: "请", options: ["请", "晴", "清", "睛"] },
      { q: "“心至令人感动”的字可能是：", correct: "情", options: ["情", "青", "晴", "清"] },
      { q: "猜字谜时要先找：", correct: "关键提示", options: ["关键提示", "页码", "标点", "笔顺"] },
      { q: "“日出万里无云”提示的字是：", correct: "晴", options: ["晴", "清", "情", "请"] },
      { q: "“三点水”常和什么有关？", correct: "水", options: ["水", "火", "山", "人"] }
    ]},
  { id: "c1d16", name: "识字巩固：动物儿歌", type: "zishi",
    items: [
      { q: "“蜻蜓”的偏旁多和什么有关？", correct: "虫", options: ["虫", "鸟", "鱼", "木"] },
      { q: "“蝴蝶”属于：", correct: "昆虫", options: ["昆虫", "植物", "文具", "天气"] },
      { q: "“蚯蚓松土”说明蚯蚓能：", correct: "帮助土壤", options: ["帮助土壤", "飞上天", "唱歌", "做衣服"] },
      { q: "“蚂蚁搬家”常说明可能要：", correct: "下雨", options: ["下雨", "下雪", "天晴", "刮沙"] },
      { q: "“蜘蛛结网”是为了：", correct: "捕食", options: ["捕食", "睡觉", "写字", "游泳"] },
      { q: "下列哪个字是虫字旁？", correct: "蚁", options: ["鸟", "蚁", "林", "河"] }
    ]}
);

DATA.chinese["2上"].push(
  { id: "c2u13", name: "识字巩固：树之歌", type: "zishi",
    items: [
      { q: "“梧、桐、枫、松”多是什么旁？", correct: "木字旁", options: ["木字旁", "三点水", "虫字旁", "言字旁"] },
      { q: "“松柏四季披绿装”说明松柏：", correct: "常绿", options: ["常绿", "只在春天绿", "会开红花", "没有叶子"] },
      { q: "“枫树秋天叶儿红”写的是哪个季节？", correct: "秋天", options: ["春天", "夏天", "秋天", "冬天"] },
      { q: "“银杏水杉活化石”说明它们：", correct: "古老珍贵", options: ["古老珍贵", "很矮小", "不能生长", "只有石头"] },
      { q: "“桂花开花满院香”写的是：", correct: "香味", options: ["香味", "声音", "颜色", "大小"] },
      { q: "下列哪个是树名？", correct: "梧桐", options: ["梧桐", "海鸥", "铜号", "沙滩"] }
    ]},
  { id: "c2u14", name: "识字巩固：拍手歌", type: "zishi",
    items: [
      { q: "“孔雀锦鸡是伙伴”说明它们都是：", correct: "鸟类", options: ["鸟类", "鱼类", "昆虫", "树木"] },
      { q: "“雄鹰飞翔云彩间”的“翔”意思是：", correct: "飞", options: ["飞", "走", "跑", "睡"] },
      { q: "“雁群会写字”指大雁飞成：", correct: "队形", options: ["队形", "汉字", "圆形", "花朵"] },
      { q: "“黄鹂百灵唱不休”写的是鸟的：", correct: "叫声", options: ["叫声", "颜色", "脚印", "食物"] },
      { q: "保护动物应做到：", correct: "不伤害它们", options: ["不伤害它们", "随便捕捉", "破坏鸟巢", "乱扔垃圾"] },
      { q: "“动物世界很新奇”中的“新奇”意思是：", correct: "新鲜有趣", options: ["新鲜有趣", "很陈旧", "很安静", "很短小"] }
    ]},
  { id: "c2u15", name: "课文巩固：曹冲称象", type: "zishi",
    items: [
      { q: "曹冲用什么办法称象？", correct: "借助船和石头", options: ["借助船和石头", "直接抱起来", "用小秤称", "让象跳高"] },
      { q: "曹冲称象体现了他的：", correct: "聪明", options: ["聪明", "胆小", "粗心", "懒惰"] },
      { q: "先把大象赶到船上，是为了看：", correct: "船下沉多少", options: ["船下沉多少", "象会不会游泳", "河水颜色", "石头大小"] },
      { q: "“议论纷纷”说明大家：", correct: "说法很多", options: ["说法很多", "都不说话", "都睡着", "都离开"] },
      { q: "曹冲是曹操的：", correct: "儿子", options: ["儿子", "老师", "朋友", "将军"] },
      { q: "这个故事告诉我们遇事要：", correct: "动脑筋", options: ["动脑筋", "乱猜", "害怕", "放弃"] }
    ]},
  { id: "c2u16", name: "课文巩固：玲玲的画", type: "zishi",
    items: [
      { q: "玲玲的画弄脏后，她画了什么补救？", correct: "小花狗", options: ["小花狗", "大树", "太阳", "小船"] },
      { q: "爸爸告诉玲玲：坏事有时能变成：", correct: "好事", options: ["好事", "难事", "错事", "小事"] },
      { q: "“端详”意思是：", correct: "仔细看", options: ["仔细看", "快跑", "大声说", "轻轻放"] },
      { q: "玲玲一开始为什么哭？", correct: "画弄脏了", options: ["画弄脏了", "没吃饭", "找不到书", "天气不好"] },
      { q: "故事告诉我们：", correct: "遇到问题想办法", options: ["遇到问题想办法", "遇事只会哭", "不要画画", "不能修改"] },
      { q: "“满意地笑了”说明玲玲最后：", correct: "高兴", options: ["高兴", "害怕", "生气", "难过"] }
    ]}
);

DATA.chinese["2下"].push(
  { id: "c2d13", name: "识字巩固：传统节日", type: "zishi",
    items: [
      { q: "春节常见的习俗是：", correct: "贴春联", options: ["贴春联", "赛龙舟", "吃月饼", "登高"] },
      { q: "端午节常吃：", correct: "粽子", options: ["粽子", "月饼", "汤圆", "饺子"] },
      { q: "中秋节主要赏：", correct: "月亮", options: ["月亮", "雪", "荷花", "柳树"] },
      { q: "重阳节有登高和敬老的习俗。", correct: "对", options: ["对", "错", "不一定", "不知道"] },
      { q: "“团圆”常和哪个节日情感有关？", correct: "中秋", options: ["中秋", "清明", "端午", "重阳"] },
      { q: "清明节常见活动是：", correct: "扫墓", options: ["扫墓", "吃粽子", "看花灯", "放鞭炮"] }
    ]},
  { id: "c2d14", name: "识字巩固：贝的故事", type: "zishi",
    items: [
      { q: "古人把贝壳当作：", correct: "钱币", options: ["钱币", "乐器", "衣服", "食物"] },
      { q: "“财、货、购、贫”常带有：", correct: "贝字旁", options: ["贝字旁", "木字旁", "火字旁", "虫字旁"] },
      { q: "“购买”的“购”意思和什么有关？", correct: "买东西", options: ["买东西", "下雨", "唱歌", "走路"] },
      { q: "“财富”的“财”为什么有贝？", correct: "和钱财有关", options: ["和钱财有关", "和树木有关", "和动物有关", "和天气有关"] },
      { q: "“贫”表示：", correct: "缺少钱财", options: ["缺少钱财", "很富有", "很热闹", "很高大"] },
      { q: "从“贝的故事”可以知道汉字常和：", correct: "生活有关", options: ["生活有关", "没有关系", "只和声音有关", "只和颜色有关"] }
    ]},
  { id: "c2d15", name: "课文巩固：雷雨", type: "zishi",
    items: [
      { q: "雷雨前，满天的乌云：", correct: "黑沉沉地压下来", options: ["黑沉沉地压下来", "慢慢散开", "变成彩虹", "消失不见"] },
      { q: "雷雨中先听见：", correct: "雷声", options: ["雷声", "鸟叫", "读书声", "歌声"] },
      { q: "雷雨后，天空出现了：", correct: "彩虹", options: ["彩虹", "雪花", "月亮", "沙尘"] },
      { q: "“垂下来”的“垂”意思是：", correct: "向下挂", options: ["向下挂", "向上飞", "横着放", "转圈"] },
      { q: "课文按什么顺序写雷雨？", correct: "雨前、雨中、雨后", options: ["雨前、雨中、雨后", "春夏秋冬", "早中晚", "东南西北"] },
      { q: "“蜘蛛又坐在网上”说明雨：", correct: "停了", options: ["停了", "更大了", "下雪了", "刚开始"] }
    ]},
  { id: "c2d16", name: "课文巩固：要是你在野外迷了路", type: "zishi",
    items: [
      { q: "白天太阳可以帮助辨别：", correct: "方向", options: ["方向", "颜色", "味道", "声音"] },
      { q: "北极星总是高挂在：", correct: "北方", options: ["北方", "南方", "东方", "西方"] },
      { q: "大树枝叶稠的一面通常是：", correct: "南方", options: ["南方", "北方", "东方", "西方"] },
      { q: "沟渠里的积雪化得快的一边多是：", correct: "北方", options: ["北方", "南方", "东方", "西方"] },
      { q: "“忠实的向导”指能帮助我们：", correct: "辨别方向", options: ["辨别方向", "做饭", "唱歌", "写字"] },
      { q: "在野外迷路时应该：", correct: "冷静观察", options: ["冷静观察", "乱跑", "哭喊不停", "闭眼走"] }
    ]}
);

DATA.chinese["4上"].push(
  { id: "c4u16", name: "文言文：《盘古开天地》", type: "wenyan",
    text: "天地混沌如鸡子，盘古生其中。万八千岁，天地开辟，阳清为天，阴浊为地。盘古在其中，一日九变，神于天，圣于地。",
    items: [
      { q: "“混沌”形容天地最初：", answer: "模糊一团", accept: ["模糊一团", "不清楚", "混杂不清", "混沌不清"] },
      { q: "“阳清为天”的意思是清轻的东西成为：", answer: "天", accept: ["天", "天空"] },
      { q: "“阴浊为地”的“地”指：", answer: "大地", accept: ["大地", "地"] },
      { q: "盘古开天地体现了古人怎样的想象？", answer: "神奇", accept: ["神奇", "丰富", "大胆", "浪漫"] },
      { q: "这则神话主要讲什么？", answer: "盘古开天辟地", accept: ["盘古开天辟地", "盘古开天地", "天地形成"] }
    ]},
  { id: "c4u17", name: "古诗：《嫦娥》", type: "gushi-input",
    poem: { title: "嫦娥", author: "李商隐", lines: ["云母屏风烛影深，", "长河渐落晓星沉。", "嫦娥应悔偷灵药，", "碧海青天夜夜心。"] },
    items: [
      { q: "《嫦娥》的作者：", answer: "李商隐" },
      { q: "“长河渐落晓星沉”的“长河”指：", answer: "银河", accept: ["银河", "天河"] },
      { q: "“碧海青天夜夜心”表达嫦娥：", answer: "孤独寂寞", accept: ["孤独寂寞", "孤寂", "寂寞", "孤单"] },
      { q: "诗中写到的神话人物是：", answer: "嫦娥" },
      { q: "“晓星沉”写的是接近：", answer: "天亮", accept: ["天亮", "拂晓", "早晨"] }
    ]},
  { id: "c4u18", name: "古诗：《雪梅》", type: "gushi-input",
    poem: { title: "雪梅", author: "卢钺", lines: ["梅雪争春未肯降，", "骚人阁笔费评章。", "梅须逊雪三分白，", "雪却输梅一段香。"] },
    items: [
      { q: "《雪梅》的作者：", answer: "卢钺" },
      { q: "“未肯降”的“降”意思：", answer: "服输", accept: ["服输", "认输", "投降"] },
      { q: "梅比雪强在：", answer: "香", accept: ["香", "有香气", "香气"] },
      { q: "雪比梅强在：", answer: "白", accept: ["白", "洁白", "颜色白"] },
      { q: "这首诗告诉我们事物各有：", answer: "长处", accept: ["长处", "优点", "特点"] }
    ]}
);

DATA.chinese["4下"].push(
  { id: "c4d15", name: "文言文：《铁杵成针》", type: "wenyan",
    text: "磨针溪，在象耳山下。世传李太白读书山中，未成，弃去。过是溪，逢老媪方磨铁杵。问之，曰：欲作针。太白感其意，还卒业。",
    items: [
      { q: "“弃去”的意思：", answer: "放弃离开", accept: ["放弃离开", "放弃而离去", "离开"] },
      { q: "老媪正在磨什么？", answer: "铁杵", accept: ["铁杵", "铁棒"] },
      { q: "老媪想把铁杵磨成：", answer: "针", accept: ["针", "绣花针"] },
      { q: "李白受到感动后：", answer: "回去完成学业", accept: ["回去完成学业", "还卒业", "继续读书"] },
      { q: "故事说明做事要：", answer: "坚持不懈", accept: ["坚持不懈", "有恒心", "持之以恒"] }
    ]},
  { id: "c4d16", name: "古诗：《芙蓉楼送辛渐》", type: "gushi-input",
    poem: { title: "芙蓉楼送辛渐", author: "王昌龄", lines: ["寒雨连江夜入吴，", "平明送客楚山孤。", "洛阳亲友如相问，", "一片冰心在玉壶。"] },
    items: [
      { q: "本诗作者：", answer: "王昌龄" },
      { q: "“平明”意思是：", answer: "天刚亮", accept: ["天刚亮", "清晨", "早晨"] },
      { q: "“冰心”比喻：", answer: "纯洁的心", accept: ["纯洁的心", "清白的心", "高洁品格"] },
      { q: "诗中送别的朋友是：", answer: "辛渐" },
      { q: "“洛阳亲友如相问”的下一句：", answer: "一片冰心在玉壶" }
    ]},
  { id: "c4d17", name: "古诗：《塞下曲》", type: "gushi-input",
    poem: { title: "塞下曲", author: "卢纶", lines: ["月黑雁飞高，", "单于夜遁逃。", "欲将轻骑逐，", "大雪满弓刀。"] },
    items: [
      { q: "本诗作者：", answer: "卢纶" },
      { q: "“单于”指：", answer: "敌军首领", accept: ["敌军首领", "匈奴首领", "首领"] },
      { q: "“遁逃”意思是：", answer: "逃跑", accept: ["逃跑", "逃走"] },
      { q: "“欲将轻骑逐”的“逐”意思：", answer: "追赶", accept: ["追赶", "追击"] },
      { q: "诗中表现将士：", answer: "英勇", accept: ["英勇", "勇敢", "果敢"] }
    ]}
);

DATA.chinese["5上"].push(
  { id: "c5u15", name: "文言文：《少年中国说》（节选）", type: "wenyan",
    text: "故今日之责任，不在他人，而全在我少年。少年智则国智，少年富则国富，少年强则国强。",
    items: [
      { q: "“今日之责任”主要在谁？", answer: "少年", accept: ["少年", "我少年"] },
      { q: "“少年智则国智”的“则”意思：", answer: "就", accept: ["就", "那么"] },
      { q: "这段文字表达了作者对少年的：", answer: "期望", accept: ["期望", "希望", "勉励"] },
      { q: "“少年强则国强”强调少年和国家的关系：", answer: "密切", accept: ["密切", "紧密", "息息相关"] },
      { q: "这段文字的情感基调是：", answer: "振奋", accept: ["振奋", "昂扬", "积极向上"] }
    ]},
  { id: "c5u16", name: "古诗：《己亥杂诗·浩荡离愁》", type: "gushi-input",
    poem: { title: "己亥杂诗", author: "龚自珍", lines: ["浩荡离愁白日斜，", "吟鞭东指即天涯。", "落红不是无情物，", "化作春泥更护花。"] },
    items: [
      { q: "本诗作者：", answer: "龚自珍" },
      { q: "“落红”指：", answer: "落花", accept: ["落花", "落下的花"] },
      { q: "“化作春泥更护花”表现诗人：", answer: "奉献精神", accept: ["奉献精神", "无私奉献", "报国之心"] },
      { q: "“吟鞭东指即天涯”的“吟鞭”指：", answer: "诗人的马鞭", accept: ["诗人的马鞭", "马鞭"] },
      { q: "“落红不是无情物”的下一句：", answer: "化作春泥更护花" }
    ]},
  { id: "c5u17", name: "古诗：《泊秦淮》", type: "gushi-input",
    poem: { title: "泊秦淮", author: "杜牧", lines: ["烟笼寒水月笼沙，", "夜泊秦淮近酒家。", "商女不知亡国恨，", "隔江犹唱后庭花。"] },
    items: [
      { q: "本诗作者：", answer: "杜牧" },
      { q: "“泊秦淮”的“泊”意思：", answer: "停船", accept: ["停船", "停泊"] },
      { q: "诗中“商女”指：", answer: "歌女", accept: ["歌女", "卖唱女子"] },
      { q: "“后庭花”在诗中暗含：", answer: "亡国之音", accept: ["亡国之音", "亡国的曲子", "靡靡之音"] },
      { q: "这首诗表达诗人对现实的：", answer: "忧虑", accept: ["忧虑", "忧国", "担忧", "讽刺"] }
    ]}
);

DATA.chinese["5下"].push(
  { id: "c5d14", name: "文言文：《郑人买履》", type: "wenyan",
    text: "郑人有欲买履者，先自度其足，而置之其坐。至之市，而忘操之。已得履，乃曰：吾忘持度。反归取之。及反，市罢，遂不得履。",
    items: [
      { q: "“履”的意思：", answer: "鞋", accept: ["鞋", "鞋子"] },
      { q: "郑人忘了带什么？", answer: "量好的尺码", accept: ["量好的尺码", "尺码", "度"] },
      { q: "“市罢”的意思：", answer: "集市散了", accept: ["集市散了", "市场关了", "集市结束"] },
      { q: "这个故事讽刺什么人？", answer: "死守教条的人", accept: ["死守教条的人", "不知变通的人", "刻舟求剑式的人"] },
      { q: "买鞋最应该相信：", answer: "自己的脚", accept: ["自己的脚", "脚"] }
    ]},
  { id: "c5d15", name: "古诗：《六月二十七日望湖楼醉书》", type: "gushi-input",
    poem: { title: "六月二十七日望湖楼醉书", author: "苏轼", lines: ["黑云翻墨未遮山，", "白雨跳珠乱入船。", "卷地风来忽吹散，", "望湖楼下水如天。"] },
    items: [
      { q: "本诗作者：", answer: "苏轼" },
      { q: "“黑云翻墨”把乌云比作：", answer: "打翻的墨汁", accept: ["打翻的墨汁", "墨汁", "翻墨"] },
      { q: "“白雨跳珠”把雨点比作：", answer: "跳动的珍珠", accept: ["跳动的珍珠", "珍珠", "珠子"] },
      { q: "诗中天气变化特点是：", answer: "来得快去得快", accept: ["来得快去得快", "变化快", "骤雨忽晴"] },
      { q: "“望湖楼下水如天”写雨后湖面：", answer: "开阔明净", accept: ["开阔明净", "明净", "像天空一样开阔"] }
    ]},
  { id: "c5d16", name: "古诗：《饮湖上初晴后雨》", type: "gushi-input",
    poem: { title: "饮湖上初晴后雨", author: "苏轼", lines: ["水光潋滟晴方好，", "山色空蒙雨亦奇。", "欲把西湖比西子，", "淡妆浓抹总相宜。"] },
    items: [
      { q: "本诗作者：", answer: "苏轼" },
      { q: "“潋滟”形容：", answer: "水波荡漾", accept: ["水波荡漾", "波光闪动", "水光闪动"] },
      { q: "“空蒙”形容：", answer: "迷茫缥缈", accept: ["迷茫缥缈", "云雾迷蒙", "朦胧"] },
      { q: "诗人把西湖比作：", answer: "西子", accept: ["西子", "西施"] },
      { q: "“淡妆浓抹总相宜”说明西湖：", answer: "晴雨都美", accept: ["晴雨都美", "怎样都美", "各有美态"] }
    ]}
);

/* ============================================================
   英语：KET 主题词库（备考三年级起）
   ============================================================ */
DATA.english_ket = [
  { id: "ket-people", name: "KET · 人物 People",
    words: [
      W("woman","女人"), W("man","男人"), W("girl","女孩"), W("boy","男孩"),
      W("child","儿童"), W("friend","朋友"), W("neighbour","邻居"), W("baby","婴儿"),
      W("adult","成人"), W("kid","小孩"), W("everyone","每个人"), W("someone","某人")
    ],
    sentences: [
      { en: "She is a kind woman.", zh: "她是个善良的女人。" },
      { en: "Who's that boy?", zh: "那个男孩是谁？" },
      { en: "I have many friends.", zh: "我有很多朋友。" },
      { en: "My neighbour is friendly.", zh: "我的邻居很友好。" },
      { en: "Everyone is happy today.", zh: "今天每个人都很开心。" }
    ]},
  { id: "ket-family", name: "KET · 家庭 Family",
    words: [
      W("parent","父母"), W("aunt","姨/姑"), W("uncle","叔叔"), W("cousin","表兄弟姐妹"),
      W("grandparent","祖父母"), W("son","儿子"), W("daughter","女儿"), W("husband","丈夫"),
      W("wife","妻子"), W("relative","亲戚"), W("twin","双胞胎"), W("married","已婚的")
    ],
    sentences: [
      { en: "My parents are doctors.", zh: "我父母是医生。" },
      { en: "I have two cousins.", zh: "我有两个表兄妹。" },
      { en: "She is my aunt.", zh: "她是我姨妈。" },
      { en: "They got married last year.", zh: "他们去年结婚了。" },
      { en: "My grandparents live in the country.", zh: "我祖父母住在乡下。" }
    ]},
  { id: "ket-home", name: "KET · 家与房屋 Home",
    words: [
      W("flat","公寓"), W("kitchen","厨房"), W("bedroom","卧室"), W("bathroom","浴室"),
      W("garden","花园"), W("garage","车库"), W("window","窗户"), W("floor","地板"),
      W("balcony","阳台"), W("furniture","家具"), W("sofa","沙发"), W("lamp","台灯")
    ],
    sentences: [
      { en: "Our flat has three bedrooms.", zh: "我们的公寓有三间卧室。" },
      { en: "I help in the kitchen.", zh: "我在厨房帮忙。" },
      { en: "The garden is full of flowers.", zh: "花园里开满了花。" },
      { en: "Please close the window.", zh: "请把窗户关上。" },
      { en: "We bought a new sofa.", zh: "我们买了新沙发。" }
    ]},
  { id: "ket-routine", name: "KET · 日常 Daily Routine",
    words: [
      W("wake","醒来"), W("dress","穿衣"), W("shower","淋浴"), W("breakfast","早餐"),
      W("school","学校"), W("lunch","午餐"), W("homework","作业"), W("dinner","晚餐"),
      W("bedtime","就寝时间"), W("relax","放松"), W("busy","忙的"), W("early","早")
    ],
    sentences: [
      { en: "I wake up at seven.", zh: "我七点起床。" },
      { en: "She has a shower in the morning.", zh: "她早上洗澡。" },
      { en: "What time do you have dinner?", zh: "你几点吃晚饭？" },
      { en: "I'm too busy today.", zh: "我今天太忙了。" },
      { en: "We go to bed early on Sundays.", zh: "周日我们早点睡觉。" }
    ]},
  { id: "ket-food", name: "KET · 饮食 Food & Drink",
    words: [
      W("breakfast","早餐"), W("sugar","糖"), W("salt","盐"), W("butter","黄油"),
      W("cheese","奶酪"), W("chocolate","巧克力"), W("biscuit","饼干"), W("soup","汤"),
      W("salad","沙拉"), W("snack","零食"), W("delicious","美味的"), W("taste","品尝")
    ],
    sentences: [
      { en: "I like cheese sandwiches.", zh: "我喜欢奶酪三明治。" },
      { en: "Pass the salt, please.", zh: "请把盐递给我。" },
      { en: "This soup tastes wonderful.", zh: "这汤尝起来真棒。" },
      { en: "Don't eat too much chocolate.", zh: "别吃太多巧克力。" },
      { en: "Would you like a snack?", zh: "想吃点零食吗？" }
    ]},
  { id: "ket-school", name: "KET · 学校 School",
    words: [
      W("subject","科目"), W("history","历史"), W("science","科学"), W("English","英语"),
      W("maths","数学"), W("homework","作业"), W("exam","考试"), W("classmate","同学"),
      W("library","图书馆"), W("playground","操场"), W("uniform","校服"), W("term","学期")
    ],
    sentences: [
      { en: "My favourite subject is maths.", zh: "我最喜欢的科目是数学。" },
      { en: "We have English on Mondays.", zh: "我们周一上英语课。" },
      { en: "Are you ready for the exam?", zh: "你考试准备好了吗？" },
      { en: "She borrows books from the library.", zh: "她从图书馆借书。" },
      { en: "We wear a uniform at school.", zh: "我们在学校穿校服。" }
    ]},
  { id: "ket-travel", name: "KET · 旅行 Travel",
    words: [
      W("airport","机场"), W("station","车站"), W("ticket","票"), W("taxi","出租车"),
      W("hotel","酒店"), W("map","地图"), W("trip","旅行"), W("tourist","游客"),
      W("luggage","行李"), W("foreign","外国的"), W("visa","签证"), W("flight","航班")
    ],
    sentences: [
      { en: "Where is the airport?", zh: "机场在哪里？" },
      { en: "Two tickets to London, please.", zh: "请给我两张到伦敦的票。" },
      { en: "We stayed in a small hotel.", zh: "我们住在一家小酒店里。" },
      { en: "Don't forget your luggage.", zh: "别忘了你的行李。" },
      { en: "Have a nice trip!", zh: "旅途愉快！" }
    ]},
  { id: "ket-health", name: "KET · 身体与健康 Body & Health",
    words: [
      W("head","头"), W("arm","手臂"), W("leg","腿"), W("hand","手"),
      W("foot","脚"), W("tooth","牙齿"), W("doctor","医生"), W("medicine","药"),
      W("hospital","医院"), W("ill","生病的"), W("hurt","受伤"), W("healthy","健康的")
    ],
    sentences: [
      { en: "My head hurts.", zh: "我头疼。" },
      { en: "She is ill today.", zh: "她今天生病了。" },
      { en: "Take this medicine twice a day.", zh: "这个药每天吃两次。" },
      { en: "Wash your hands before lunch.", zh: "午饭前洗手。" },
      { en: "Eat more fruit to stay healthy.", zh: "多吃水果保持健康。" }
    ]},
  { id: "ket-free", name: "KET · 业余 Free Time",
    words: [
      W("hobby","爱好"), W("music","音乐"), W("movie","电影"), W("game","游戏"),
      W("party","聚会"), W("dance","跳舞"), W("draw","画画"), W("photo","照片"),
      W("collect","收集"), W("camp","野营"), W("magazine","杂志"), W("hobby","兴趣")
    ],
    sentences: [
      { en: "My hobby is drawing.", zh: "我的爱好是画画。" },
      { en: "Let's watch a movie tonight.", zh: "今晚我们看电影吧。" },
      { en: "She loves dancing at parties.", zh: "她喜欢在聚会上跳舞。" },
      { en: "I collect old coins.", zh: "我收集旧硬币。" },
      { en: "Do you play any computer games?", zh: "你玩电脑游戏吗？" }
    ]},
  { id: "ket-weather", name: "KET · 自然与天气 Weather",
    words: [
      W("forecast","预报"), W("cloud","云"), W("storm","暴风雨"), W("thunder","雷"),
      W("lightning","闪电"), W("fog","雾"), W("ice","冰"), W("temperature","温度"),
      W("dry","干燥的"), W("wet","湿的"), W("season","季节"), W("climate","气候")
    ],
    sentences: [
      { en: "The weather forecast says it will rain.", zh: "天气预报说会下雨。" },
      { en: "Look at the dark clouds!", zh: "看那些乌云！" },
      { en: "Spring is my favourite season.", zh: "春天是我最喜欢的季节。" },
      { en: "It's very dry in summer here.", zh: "这里夏天非常干燥。" },
      { en: "The temperature drops at night.", zh: "夜里气温会下降。" }
    ]}
];

/* ============================================================
   英语：PET 主题词库（备考四年级起）
   ============================================================ */
DATA.english_pet = [
  { id: "pet-society", name: "PET · 社会沟通 Society",
    words: [
      W("communicate","交流"), W("discuss","讨论"), W("opinion","观点"),
      W("agree","同意"), W("argue","争论"), W("polite","礼貌的"),
      W("solve","解决"), W("strict","严格的"), W("trust","信任"),
      W("respect","尊重"), W("apologise","道歉"), W("encourage","鼓励")
    ],
    sentences: [
      { en: "Could you explain that again?", zh: "你能再解释一下吗？" },
      { en: "I respect your opinion, but I disagree.", zh: "我尊重你的看法，但我不同意。" },
      { en: "He apologised for being late.", zh: "他为迟到道歉。" },
      { en: "We must communicate honestly.", zh: "我们必须坦诚沟通。" },
      { en: "Teachers should encourage students to try.", zh: "老师应该鼓励学生尝试。" }
    ]},
  { id: "pet-edu", name: "PET · 教育与学习 Education",
    words: [
      W("knowledge","知识"), W("research","研究"), W("understand","理解"),
      W("explain","解释"), W("progress","进步"), W("achieve","达成"),
      W("skill","技能"), W("graduate","毕业"), W("scholarship","奖学金"),
      W("review","复习"), W("concentrate","专注"), W("creative","有创造力的")
    ],
    sentences: [
      { en: "Reading widens our knowledge.", zh: "阅读拓宽我们的知识面。" },
      { en: "I'm making progress in maths.", zh: "我在数学上有进步。" },
      { en: "Please review the lesson tonight.", zh: "请今晚复习课程。" },
      { en: "Concentrate on what you are doing.", zh: "专注于你正在做的事。" },
      { en: "Creative ideas help us learn better.", zh: "创新的想法帮助我们学得更好。" }
    ]},
  { id: "pet-env", name: "PET · 环境与自然 Environment",
    words: [
      W("environment","环境"), W("pollution","污染"), W("recycle","回收"),
      W("rubbish","垃圾"), W("global","全球的"), W("plant","种植"),
      W("damage","损害"), W("protect","保护"), W("species","物种"),
      W("plastic","塑料"), W("energy","能源"), W("disaster","灾难")
    ],
    sentences: [
      { en: "We should reduce plastic waste.", zh: "我们应该减少塑料垃圾。" },
      { en: "Pollution damages our health.", zh: "污染损害我们的健康。" },
      { en: "Let's plant more trees.", zh: "让我们多种些树。" },
      { en: "Many species are in danger.", zh: "许多物种处于危险中。" },
      { en: "Saving energy protects the planet.", zh: "节约能源保护地球。" }
    ]},
  { id: "pet-tech", name: "PET · 科技 Technology",
    words: [
      W("internet","互联网"), W("device","设备"), W("connect","连接"),
      W("data","数据"), W("invent","发明"), W("software","软件"),
      W("digital","数字的"), W("online","在线的"), W("upload","上传"),
      W("update","更新"), W("password","密码"), W("smartphone","智能手机")
    ],
    sentences: [
      { en: "The Wi-Fi isn't working.", zh: "Wi-Fi 无法使用。" },
      { en: "Don't share your password with anyone.", zh: "不要告诉任何人你的密码。" },
      { en: "Could you help me upload this photo?", zh: "你能帮我上传这张照片吗？" },
      { en: "Technology changes very quickly.", zh: "科技变化非常快。" },
      { en: "I update the app every week.", zh: "我每周更新这个应用。" }
    ]},
  { id: "pet-career", name: "PET · 职业 Career",
    words: [
      W("career","职业"), W("interview","面试"), W("salary","工资"),
      W("colleague","同事"), W("schedule","日程"), W("deadline","截止日期"),
      W("responsibility","责任"), W("experience","经验"), W("opportunity","机会"),
      W("manager","经理"), W("staff","员工"), W("project","项目")
    ],
    sentences: [
      { en: "She has a successful career as a writer.", zh: "她有成功的写作生涯。" },
      { en: "The interview went very well.", zh: "面试进行得很顺利。" },
      { en: "We must meet the deadline.", zh: "我们必须赶在截止日期前完成。" },
      { en: "My colleagues are helpful.", zh: "我的同事们都很乐于助人。" },
      { en: "It's a great opportunity for you.", zh: "这对你是个绝好的机会。" }
    ]},
  { id: "pet-culture", name: "PET · 旅行与文化 Travel & Culture",
    words: [
      W("culture","文化"), W("tradition","传统"), W("festival","节日"),
      W("custom","风俗"), W("explore","探索"), W("abroad","海外"),
      W("souvenir","纪念品"), W("currency","货币"), W("translate","翻译"),
      W("religion","宗教"), W("monument","纪念碑"), W("guide","导游")
    ],
    sentences: [
      { en: "Every country has its own traditions.", zh: "每个国家都有自己的传统。" },
      { en: "We took a guided tour of the city.", zh: "我们跟着导游游览城市。" },
      { en: "I'd love to explore Japan.", zh: "我很想去探索日本。" },
      { en: "Can you translate this menu?", zh: "你能翻译一下这个菜单吗？" },
      { en: "Mid-Autumn Festival is in autumn.", zh: "中秋节在秋季。" }
    ]},
  { id: "pet-health", name: "PET · 健康生活 Healthy Lifestyle",
    words: [
      W("exercise","锻炼"), W("nutrition","营养"), W("vitamin","维生素"),
      W("balance","平衡"), W("stress","压力"), W("sleep","睡觉"),
      W("habit","习惯"), W("relax","放松"), W("avoid","避免"),
      W("improve","改善"), W("mental","精神的"), W("physical","身体的")
    ],
    sentences: [
      { en: "Regular exercise improves health.", zh: "经常锻炼能改善健康。" },
      { en: "A balanced diet is important.", zh: "均衡饮食很重要。" },
      { en: "Try to sleep eight hours a night.", zh: "尽量每晚睡八小时。" },
      { en: "Reading helps me relax.", zh: "阅读让我放松。" },
      { en: "Avoid too much junk food.", zh: "避免吃太多垃圾食品。" }
    ]},
  { id: "pet-media", name: "PET · 媒体与新闻 Media",
    words: [
      W("news","新闻"), W("article","文章"), W("magazine","杂志"),
      W("channel","频道"), W("interview","采访"), W("report","报道"),
      W("journalist","记者"), W("series","系列剧"), W("podcast","播客"),
      W("review","评价"), W("audience","观众"), W("broadcast","广播")
    ],
    sentences: [
      { en: "I read the news every morning.", zh: "我每天早上看新闻。" },
      { en: "Did you watch that new series?", zh: "你看了那部新剧吗？" },
      { en: "She is a famous journalist.", zh: "她是个有名的记者。" },
      { en: "What channel is the football match on?", zh: "足球比赛在哪个频道？" },
      { en: "I listen to a podcast on the bus.", zh: "我在公交车上听播客。" }
    ]},
  { id: "pet-personality", name: "PET · 性格描写 Personality",
    words: [
      W("kind","善良的"), W("brave","勇敢的"), W("shy","害羞的"),
      W("patient","耐心的"), W("clever","聪明的"), W("honest","诚实的"),
      W("lazy","懒惰的"), W("cheerful","开朗的"), W("polite","有礼貌的"),
      W("careful","细心的"), W("confident","自信的"), W("generous","慷慨的")
    ],
    sentences: [
      { en: "She is patient with little kids.", zh: "她对小孩子很有耐心。" },
      { en: "Be honest with your friends.", zh: "对朋友要诚实。" },
      { en: "He's quite shy at first.", zh: "他一开始有点害羞。" },
      { en: "I admire her confidence.", zh: "我佩服她的自信。" },
      { en: "Generous people are kind.", zh: "慷慨的人都很善良。" }
    ]},
  { id: "pet-achievement", name: "PET · 目标与成就 Achievements",
    words: [
      W("goal","目标"), W("plan","计划"), W("dream","梦想"),
      W("success","成功"), W("fail","失败"), W("effort","努力"),
      W("challenge","挑战"), W("achieve","达成"), W("award","奖项"),
      W("compete","参赛"), W("celebrate","庆祝"), W("inspire","激励")
    ],
    sentences: [
      { en: "Never give up on your dreams.", zh: "永远不要放弃你的梦想。" },
      { en: "Hard work leads to success.", zh: "努力会带来成功。" },
      { en: "She won the first prize.", zh: "她获得了一等奖。" },
      { en: "We should celebrate our progress.", zh: "我们应该庆祝我们的进步。" },
      { en: "Her story inspires many young people.", zh: "她的故事激励了许多年轻人。" }
    ]}
];

/* ============================================================
   英语：美国常用口语 万句样本（按主题）
   ============================================================ */
DATA.english_daily = [
  { id: "us-greet", name: "🤝 问候 & 寒暄 Greetings",
    words: [],
    sentences: [
      { en: "How's it going?", zh: "最近怎么样？" },
      { en: "Long time no see!", zh: "好久不见！" },
      { en: "What's up?", zh: "怎么了？" },
      { en: "How have you been?", zh: "你最近过得怎么样？" },
      { en: "Nice to meet you.", zh: "很高兴见到你。" },
      { en: "Take care!", zh: "保重！" },
      { en: "See you later.", zh: "回头见。" },
      { en: "Have a good one.", zh: "祝你一切顺利。" },
      { en: "Catch you later.", zh: "回聊。" },
      { en: "How can I help you?", zh: "我能帮你什么忙吗？" },
      { en: "Same here.", zh: "我也一样。" },
      { en: "Have a nice day.", zh: "祝你有美好的一天。" }
    ]},
  { id: "us-feel", name: "💭 感受 & 情绪 Feelings",
    words: [],
    sentences: [
      { en: "I'm so excited!", zh: "我太兴奋了！" },
      { en: "That's awesome.", zh: "太棒了。" },
      { en: "I can't believe it.", zh: "我真不敢相信。" },
      { en: "I'm proud of you.", zh: "我为你感到骄傲。" },
      { en: "That makes me happy.", zh: "那让我很开心。" },
      { en: "I'm a little nervous.", zh: "我有点紧张。" },
      { en: "Don't worry about it.", zh: "别担心。" },
      { en: "It's no big deal.", zh: "这没什么大不了的。" },
      { en: "I feel terrible.", zh: "我感觉糟透了。" },
      { en: "Cheer up!", zh: "高兴点！" },
      { en: "I'm in a bad mood.", zh: "我心情不好。" },
      { en: "You'll be fine.", zh: "你会没事的。" }
    ]},
  { id: "us-food", name: "🍔 用餐 & 点餐 At a Restaurant",
    words: [],
    sentences: [
      { en: "Can I see the menu, please?", zh: "请给我看一下菜单好吗？" },
      { en: "What do you recommend?", zh: "你推荐什么？" },
      { en: "I'll have the same.", zh: "我也来一份一样的。" },
      { en: "Is this dish spicy?", zh: "这道菜辣吗？" },
      { en: "Could I get the check, please?", zh: "请给我账单好吗？" },
      { en: "I'd like to order, please.", zh: "我想点餐。" },
      { en: "Could I have some water?", zh: "可以给我点水吗？" },
      { en: "It's on me.", zh: "我请客。" },
      { en: "Let's split the bill.", zh: "我们 AA 制吧。" },
      { en: "This is delicious!", zh: "这真好吃！" },
      { en: "I'm full, thanks.", zh: "我饱了，谢谢。" },
      { en: "For here or to go?", zh: "在这里吃还是带走？" }
    ]},
  { id: "us-shop", name: "🛍 购物 Shopping",
    words: [],
    sentences: [
      { en: "How much is this?", zh: "这个多少钱？" },
      { en: "Do you have this in a smaller size?", zh: "这件有小一号的吗？" },
      { en: "I'm just looking, thanks.", zh: "我随便看看，谢谢。" },
      { en: "Can I try it on?", zh: "我可以试穿吗？" },
      { en: "Where is the fitting room?", zh: "试衣间在哪？" },
      { en: "Do you take credit cards?", zh: "可以刷信用卡吗？" },
      { en: "Is there a discount?", zh: "有折扣吗？" },
      { en: "I'll take it.", zh: "我要这个。" },
      { en: "Can I get a refund?", zh: "可以退款吗？" },
      { en: "Do you have a receipt?", zh: "你有收据吗？" },
      { en: "It's too expensive.", zh: "太贵了。" },
      { en: "Where can I pay?", zh: "我在哪付钱？" }
    ]},
  { id: "us-direction", name: "🧭 问路 Directions",
    words: [],
    sentences: [
      { en: "Excuse me, where's the subway?", zh: "请问地铁在哪里？" },
      { en: "How do I get to the airport?", zh: "去机场怎么走？" },
      { en: "Is it far from here?", zh: "离这里远吗？" },
      { en: "Turn left at the corner.", zh: "在拐角处左转。" },
      { en: "Go straight for two blocks.", zh: "直走两个街区。" },
      { en: "It's just around the corner.", zh: "就在拐角处。" },
      { en: "Could you show me on the map?", zh: "能在地图上指给我吗？" },
      { en: "I think I'm lost.", zh: "我好像迷路了。" },
      { en: "Take the second right.", zh: "在第二个路口右转。" },
      { en: "You can't miss it.", zh: "你不会错过的。" },
      { en: "It's across the street.", zh: "就在街对面。" },
      { en: "How long does it take?", zh: "需要多长时间？" }
    ]},
  { id: "us-school", name: "🏫 校园 At School",
    words: [],
    sentences: [
      { en: "Did you do the homework?", zh: "你做作业了吗？" },
      { en: "Can I borrow your pencil?", zh: "我能借一下你的铅笔吗？" },
      { en: "What's the answer to number five?", zh: "第五题答案是什么？" },
      { en: "I don't understand this question.", zh: "我不懂这道题。" },
      { en: "May I go to the bathroom?", zh: "我能去洗手间吗？" },
      { en: "Let's study together.", zh: "我们一起学习吧。" },
      { en: "When is the test?", zh: "考试什么时候？" },
      { en: "Good luck on your exam!", zh: "考试好运！" },
      { en: "Could you help me with this?", zh: "你能帮我看看这个吗？" },
      { en: "I got an A on the test.", zh: "我考试得了 A。" },
      { en: "Class starts at nine.", zh: "九点上课。" },
      { en: "Please raise your hand.", zh: "请举手。" }
    ]},
  { id: "us-time", name: "⏰ 时间 & 天气 Time & Weather",
    words: [],
    sentences: [
      { en: "What time is it now?", zh: "现在几点？" },
      { en: "It's a quarter past three.", zh: "三点一刻。" },
      { en: "Let's meet at noon.", zh: "我们中午见。" },
      { en: "Today is Tuesday.", zh: "今天是星期二。" },
      { en: "What's the weather like?", zh: "天气怎么样？" },
      { en: "It's raining cats and dogs.", zh: "下大雨了。" },
      { en: "It's sunny outside.", zh: "外面阳光明媚。" },
      { en: "It's freezing today.", zh: "今天冷死了。" },
      { en: "Don't forget your umbrella.", zh: "别忘了带伞。" },
      { en: "What's the date today?", zh: "今天几号？" },
      { en: "See you tomorrow.", zh: "明天见。" },
      { en: "It's getting late.", zh: "时间不早了。" }
    ]},
  { id: "us-phone", name: "📞 电话 & 信息 Phone",
    words: [],
    sentences: [
      { en: "Hello, who's calling?", zh: "你好，请问哪位？" },
      { en: "Could I speak to Sam?", zh: "请问 Sam 在吗？" },
      { en: "Hold on a second.", zh: "请稍等。" },
      { en: "Can I leave a message?", zh: "我能留言吗？" },
      { en: "Sorry, I missed your call.", zh: "抱歉我没接到你电话。" },
      { en: "Call me later, please.", zh: "请稍后打给我。" },
      { en: "I'll call you back.", zh: "我会回你电话。" },
      { en: "The line is busy.", zh: "电话占线。" },
      { en: "Can you text me?", zh: "你能发短信给我吗？" },
      { en: "What's your number?", zh: "你的电话号码是多少？" },
      { en: "Speak up, please.", zh: "请大声一点。" },
      { en: "I can't hear you.", zh: "我听不见你说话。" }
    ]},
  { id: "us-travel", name: "✈️ 旅行 Travel",
    words: [],
    sentences: [
      { en: "Where are you from?", zh: "你来自哪里？" },
      { en: "I'm visiting for a week.", zh: "我来访问一周。" },
      { en: "What's a must-see here?", zh: "这里有什么必看的？" },
      { en: "Could I get a window seat?", zh: "能给我一个靠窗座位吗？" },
      { en: "When does the flight leave?", zh: "航班什么时候起飞？" },
      { en: "I'd like to check in.", zh: "我想办理登机。" },
      { en: "Where's the baggage claim?", zh: "行李提取处在哪？" },
      { en: "How long is the layover?", zh: "中转多久？" },
      { en: "Do you accept dollars?", zh: "可以用美元吗？" },
      { en: "I'd like a single room.", zh: "我想要一间单人房。" },
      { en: "What's the Wi-Fi password?", zh: "Wi-Fi 密码是什么？" },
      { en: "Can you call me a taxi?", zh: "能帮我叫辆出租车吗？" }
    ]},
  { id: "us-help", name: "🆘 求助 & 应急 Emergency",
    words: [],
    sentences: [
      { en: "Could you help me, please?", zh: "请你帮帮我好吗？" },
      { en: "Call an ambulance!", zh: "叫救护车！" },
      { en: "I need a doctor.", zh: "我需要医生。" },
      { en: "Is there a pharmacy nearby?", zh: "附近有药店吗？" },
      { en: "I lost my wallet.", zh: "我丢了钱包。" },
      { en: "My passport was stolen.", zh: "我的护照被偷了。" },
      { en: "Call the police!", zh: "报警！" },
      { en: "Watch out!", zh: "小心！" },
      { en: "I don't feel well.", zh: "我不舒服。" },
      { en: "Where's the nearest hospital?", zh: "最近的医院在哪？" },
      { en: "It's an emergency.", zh: "这是紧急情况。" },
      { en: "Stay calm.", zh: "保持冷静。" }
    ]},
  { id: "us-opinion", name: "💬 表达观点 Opinions",
    words: [],
    sentences: [
      { en: "I think you're right.", zh: "我觉得你说得对。" },
      { en: "I disagree with that.", zh: "我不同意那种说法。" },
      { en: "In my opinion, …", zh: "在我看来，……" },
      { en: "It depends on the situation.", zh: "看情况而定。" },
      { en: "That makes sense.", zh: "有道理。" },
      { en: "I see your point.", zh: "我明白你的意思。" },
      { en: "Let me think about it.", zh: "让我想一想。" },
      { en: "I'd rather not.", zh: "我宁愿不要。" },
      { en: "It's up to you.", zh: "由你决定。" },
      { en: "I have no idea.", zh: "我不知道。" },
      { en: "What's your point?", zh: "你想表达什么？" },
      { en: "I couldn't agree more.", zh: "我完全同意。" }
    ]},
  { id: "us-thanks", name: "🙏 致谢 & 道歉 Thanks & Sorry",
    words: [],
    sentences: [
      { en: "Thanks a lot!", zh: "多谢！" },
      { en: "I really appreciate it.", zh: "我真的很感谢。" },
      { en: "You're welcome.", zh: "不客气。" },
      { en: "Don't mention it.", zh: "不用谢。" },
      { en: "My pleasure.", zh: "这是我的荣幸。" },
      { en: "Sorry, I'm late.", zh: "抱歉我迟到了。" },
      { en: "I apologize for that.", zh: "我为此道歉。" },
      { en: "It's okay, no problem.", zh: "没事，没问题。" },
      { en: "Please forgive me.", zh: "请原谅我。" },
      { en: "I didn't mean to.", zh: "我不是故意的。" },
      { en: "Excuse me a moment.", zh: "失陪一下。" },
      { en: "Thanks for your help.", zh: "谢谢你的帮助。" }
    ]}
];

/* ============================================================
   KET 词库扩充：新增主题
   ============================================================ */
DATA.english_ket.push(
  { id: "ket-clothes", name: "KET · 服装 Clothes",
    words: [
      W("shirt","衬衫"), W("trousers","裤子"), W("dress","连衣裙"), W("jacket","夹克"),
      W("coat","外套"), W("jumper","套头衫"), W("jeans","牛仔裤"), W("skirt","短裙"),
      W("sock","袜子"), W("shoe","鞋"), W("hat","帽子"), W("scarf","围巾"),
      W("glove","手套"), W("belt","腰带"), W("button","纽扣"), W("pocket","口袋"),
      W("sleeve","袖子"), W("cotton","棉的"), W("leather","皮的"), W("fashion","时尚"),
      W("wear","穿戴"), W("change","换"), W("fit","合身"), W("size","尺码"), W("uniform","制服")
    ],
    sentences: [
      { en: "This shirt is too small.", zh: "这件衬衫太小了。" },
      { en: "I'd like to try this dress on.", zh: "我想试试这条裙子。" },
      { en: "Where can I find jeans?", zh: "牛仔裤在哪里？" },
      { en: "He's wearing a black jacket.", zh: "他穿着一件黑色夹克。" },
      { en: "What size are you?", zh: "你穿多大号？" }
    ]},
  { id: "ket-animals", name: "KET · 动物 Animals",
    words: [
      W("dog","狗"), W("cat","猫"), W("horse","马"), W("cow","牛"),
      W("sheep","羊"), W("pig","猪"), W("chicken","鸡"), W("duck","鸭"),
      W("rabbit","兔"), W("mouse","老鼠"), W("lion","狮"), W("tiger","虎"),
      W("bear","熊"), W("elephant","象"), W("monkey","猴"), W("fish","鱼"),
      W("bird","鸟"), W("snake","蛇"), W("frog","蛙"), W("insect","昆虫"),
      W("bee","蜜蜂"), W("butterfly","蝴蝶"), W("spider","蜘蛛"), W("panda","熊猫"), W("kangaroo","袋鼠")
    ],
    sentences: [
      { en: "I have a pet rabbit.", zh: "我养了一只兔子。" },
      { en: "Don't be afraid of the dog.", zh: "别怕这只狗。" },
      { en: "Elephants are very big.", zh: "大象很大。" },
      { en: "The cat is sleeping on the sofa.", zh: "猫在沙发上睡觉。" },
      { en: "Pandas eat bamboo.", zh: "熊猫吃竹子。" }
    ]},
  { id: "ket-sports", name: "KET · 运动 Sports",
    words: [
      W("football","足球"), W("basketball","篮球"), W("tennis","网球"), W("swim","游泳"),
      W("run","跑"), W("jump","跳"), W("climb","攀爬"), W("ride","骑"),
      W("skate","滑冰"), W("ski","滑雪"), W("gym","体育馆"), W("team","团队"),
      W("match","比赛"), W("score","得分"), W("win","赢"), W("lose","输"),
      W("train","训练"), W("coach","教练"), W("fan","粉丝"), W("racket","球拍"),
      W("ball","球"), W("court","球场"), W("goal","球门/目标"), W("player","球员"), W("exercise","锻炼")
    ],
    sentences: [
      { en: "Let's play basketball after school.", zh: "放学后打篮球吧。" },
      { en: "Our team won the match.", zh: "我们队赢了比赛。" },
      { en: "She swims very well.", zh: "她游泳很好。" },
      { en: "What's the final score?", zh: "最终比分是多少？" },
      { en: "He goes to the gym every day.", zh: "他每天去健身房。" }
    ]},
  { id: "ket-places", name: "KET · 城市场所 Places",
    words: [
      W("park","公园"), W("library","图书馆"), W("museum","博物馆"), W("cinema","电影院"),
      W("theatre","剧院"), W("hospital","医院"), W("bank","银行"), W("post","邮局"),
      W("market","市场"), W("shop","商店"), W("restaurant","餐厅"), W("café","咖啡馆"),
      W("station","车站"), W("square","广场"), W("beach","海滩"), W("mountain","山"),
      W("river","河"), W("forest","森林"), W("bridge","桥"), W("factory","工厂"),
      W("office","办公室"), W("supermarket","超市"), W("zoo","动物园"), W("farm","农场"), W("building","建筑物")
    ],
    sentences: [
      { en: "Where is the nearest bank?", zh: "最近的银行在哪？" },
      { en: "Let's meet at the cinema.", zh: "我们在电影院见。" },
      { en: "The park is beautiful in spring.", zh: "春天公园很美。" },
      { en: "I love going to the museum.", zh: "我喜欢去博物馆。" },
      { en: "There's a café around the corner.", zh: "拐角处有家咖啡馆。" }
    ]},
  { id: "ket-transport", name: "KET · 交通 Transport",
    words: [
      W("car","汽车"), W("bus","公交"), W("taxi","出租"), W("train","火车"),
      W("plane","飞机"), W("ship","船"), W("boat","小船"), W("bike","自行车"),
      W("helicopter","直升机"), W("lorry","货车"), W("ticket","票"), W("driver","司机"),
      W("traffic","交通"), W("road","路"), W("street","街道"), W("stop","站台"),
      W("journey","旅程"), W("passenger","乘客"), W("seatbelt","安全带"), W("fare","票价"),
      W("departure","出发"), W("arrival","到达"), W("platform","站台"), W("route","路线"), W("distance","距离")
    ],
    sentences: [
      { en: "Take the bus to the city centre.", zh: "坐公交到市中心。" },
      { en: "How much is the taxi fare?", zh: "出租车费多少？" },
      { en: "The train leaves at six.", zh: "火车六点开。" },
      { en: "Please fasten your seatbelt.", zh: "请系好安全带。" },
      { en: "Traffic is heavy in the morning.", zh: "早上交通拥堵。" }
    ]},
  { id: "ket-jobs", name: "KET · 职业 Jobs",
    words: [
      W("teacher","老师"), W("doctor","医生"), W("nurse","护士"), W("farmer","农民"),
      W("driver","司机"), W("cook","厨师"), W("waiter","服务员"), W("singer","歌手"),
      W("actor","演员"), W("artist","艺术家"), W("writer","作家"), W("engineer","工程师"),
      W("scientist","科学家"), W("lawyer","律师"), W("police","警察"), W("soldier","士兵"),
      W("postman","邮递员"), W("dentist","牙医"), W("secretary","秘书"), W("manager","经理"),
      W("designer","设计师"), W("pilot","飞行员"), W("photographer","摄影师"), W("mechanic","机械师"), W("builder","建筑工")
    ],
    sentences: [
      { en: "My father is a doctor.", zh: "我爸爸是医生。" },
      { en: "She wants to be a teacher.", zh: "她想当老师。" },
      { en: "The cook prepared a nice meal.", zh: "厨师做了顿好饭。" },
      { en: "Pilots fly planes.", zh: "飞行员开飞机。" },
      { en: "Police officers help people.", zh: "警察帮助人们。" }
    ]},
  { id: "ket-shopping", name: "KET · 购物 Shopping",
    words: [
      W("price","价格"), W("cheap","便宜"), W("expensive","贵"), W("pay","付款"),
      W("money","钱"), W("dollar","美元"), W("pound","英镑"), W("change","零钱"),
      W("receipt","小票"), W("sale","打折"), W("discount","折扣"), W("gift","礼物"),
      W("bag","袋子"), W("customer","顾客"), W("store","店"), W("basket","篮子"),
      W("cart","购物车"), W("queue","排队"), W("list","清单"), W("brand","品牌"),
      W("quality","质量"), W("choose","选择"), W("return","退货"), W("refund","退款"), W("exchange","换货")
    ],
    sentences: [
      { en: "How much does it cost?", zh: "多少钱？" },
      { en: "Can I have a receipt, please?", zh: "请给我小票。" },
      { en: "These shoes are on sale.", zh: "这鞋打折。" },
      { en: "Do you accept cash?", zh: "收现金吗？" },
      { en: "I'd like to return this shirt.", zh: "我想退这件衬衫。" }
    ]},
  { id: "ket-tech", name: "KET · 数字生活 Digital Life",
    words: [
      W("computer","电脑"), W("phone","手机"), W("screen","屏幕"), W("internet","网络"),
      W("email","邮件"), W("message","消息"), W("photo","照片"), W("video","视频"),
      W("app","应用"), W("password","密码"), W("file","文件"), W("button","按钮"),
      W("click","点击"), W("search","搜索"), W("online","在线"), W("share","分享"),
      W("charge","充电"), W("battery","电池"), W("social","社交"), W("post","发布"),
      W("like","点赞"), W("follow","关注"), W("login","登录"), W("profile","个人资料"), W("signal","信号")
    ],
    sentences: [
      { en: "My phone needs charging.", zh: "我的手机需要充电。" },
      { en: "Send me a message later.", zh: "晚点给我发条消息。" },
      { en: "Don't forget your password.", zh: "别忘了密码。" },
      { en: "Could you take a photo for me?", zh: "能帮我拍张照片吗？" },
      { en: "The Wi-Fi signal is weak.", zh: "Wi-Fi 信号弱。" }
    ]},
  { id: "ket-feelings", name: "KET · 心情 Feelings",
    words: [
      W("happy","开心"), W("sad","难过"), W("tired","累"), W("angry","生气"),
      W("surprised","惊讶"), W("excited","兴奋"), W("scared","害怕"), W("bored","无聊"),
      W("worried","担心"), W("calm","平静"), W("proud","骄傲"), W("shy","害羞"),
      W("lonely","孤独"), W("lucky","幸运"), W("jealous","嫉妒"), W("nervous","紧张"),
      W("relaxed","放松"), W("glad","高兴"), W("upset","沮丧"), W("brave","勇敢"),
      W("friendly","友好"), W("curious","好奇"), W("confident","自信"), W("kind","善良"), W("peaceful","安宁")
    ],
    sentences: [
      { en: "I'm so happy to see you.", zh: "见到你真开心。" },
      { en: "Don't be nervous, you can do it.", zh: "别紧张，你可以的。" },
      { en: "She looks tired today.", zh: "她今天看上去很累。" },
      { en: "I feel proud of my brother.", zh: "我为弟弟感到骄傲。" },
      { en: "Why are you so worried?", zh: "你为什么这么担心？" }
    ]},
  { id: "ket-time", name: "KET · 时间 Time",
    words: [
      W("today","今天"), W("tomorrow","明天"), W("yesterday","昨天"), W("morning","早上"),
      W("afternoon","下午"), W("evening","傍晚"), W("night","夜晚"), W("week","周"),
      W("month","月"), W("year","年"), W("hour","小时"), W("minute","分钟"),
      W("second","秒"), W("season","季节"), W("calendar","日历"), W("weekday","工作日"),
      W("weekend","周末"), W("schedule","日程"), W("plan","计划"), W("daily","每天"),
      W("monthly","每月"), W("soon","很快"), W("late","迟"), W("early","早"), W("century","世纪")
    ],
    sentences: [
      { en: "What time is it now?", zh: "现在几点？" },
      { en: "See you tomorrow morning.", zh: "明早见。" },
      { en: "I have a busy schedule this week.", zh: "我这周日程很满。" },
      { en: "Don't be late for school.", zh: "上学别迟到。" },
      { en: "Spring is my favourite season.", zh: "春天是我最喜欢的季节。" }
    ]},
  { id: "ket-music", name: "KET · 音乐 Music",
    words: [
      W("music","音乐"), W("song","歌"), W("singer","歌手"), W("band","乐队"),
      W("concert","音乐会"), W("piano","钢琴"), W("guitar","吉他"), W("drum","鼓"),
      W("violin","小提琴"), W("dance","跳舞"), W("stage","舞台"), W("microphone","麦克风"),
      W("lyrics","歌词"), W("melody","旋律"), W("rhythm","节奏"), W("album","专辑"),
      W("festival","音乐节"), W("choir","合唱团"), W("orchestra","管弦乐团"), W("instrument","乐器"),
      W("play","演奏"), W("listen","听"), W("perform","演出"), W("audience","观众"), W("applause","掌声")
    ],
    sentences: [
      { en: "I love listening to music.", zh: "我喜欢听音乐。" },
      { en: "She plays the violin beautifully.", zh: "她小提琴拉得很好。" },
      { en: "We're going to a concert tonight.", zh: "我们今晚去听音乐会。" },
      { en: "Sing along with me!", zh: "和我一起唱！" },
      { en: "What's your favourite song?", zh: "你最喜欢哪首歌？" }
    ]},
  { id: "ket-colors", name: "KET · 颜色与形状 Colors & Shapes",
    words: [
      W("red","红"), W("blue","蓝"), W("green","绿"), W("yellow","黄"),
      W("black","黑"), W("white","白"), W("orange","橙"), W("purple","紫"),
      W("pink","粉"), W("brown","棕"), W("gray","灰"), W("circle","圆"),
      W("square","方"), W("triangle","三角"), W("rectangle","长方形"), W("line","线"),
      W("big","大"), W("small","小"), W("long","长"), W("short","短"),
      W("light","浅"), W("dark","深"), W("round","圆的"), W("narrow","窄"), W("wide","宽")
    ],
    sentences: [
      { en: "What colour is your school bag?", zh: "你的书包是什么颜色？" },
      { en: "The sky is blue today.", zh: "今天天空是蓝色的。" },
      { en: "Draw a big circle here.", zh: "在这里画个大圆。" },
      { en: "This room is very narrow.", zh: "这房间很窄。" },
      { en: "Her dress is dark green.", zh: "她的裙子是深绿色。" }
    ]}
);

/* ============================================================
   PET 词库扩充：新增主题
   ============================================================ */
DATA.english_pet.push(
  { id: "pet-society2", name: "PET · 社会议题 Society",
    words: [
      W("society","社会"), W("generation","代"), W("equality","平等"), W("freedom","自由"),
      W("justice","正义"), W("citizen","公民"), W("government","政府"), W("politics","政治"),
      W("election","选举"), W("charity","慈善"), W("donate","捐赠"), W("volunteer","志愿者"),
      W("community","社区"), W("neighbour","邻居"), W("immigrant","移民"), W("refugee","难民"),
      W("crime","犯罪"), W("court","法庭"), W("law","法律"), W("peace","和平"),
      W("war","战争"), W("vote","投票"), W("debate","辩论"), W("leader","领袖"), W("rights","权利")
    ],
    sentences: [
      { en: "Every citizen has the right to vote.", zh: "每位公民都有投票权。" },
      { en: "She volunteers at a local charity.", zh: "她在当地慈善机构做志愿者。" },
      { en: "The community needs more support.", zh: "社区需要更多支持。" },
      { en: "We should respect each other's rights.", zh: "我们应该尊重彼此的权利。" },
      { en: "World peace is everyone's dream.", zh: "世界和平是每个人的梦想。" }
    ]},
  { id: "pet-finance", name: "PET · 金钱财务 Finance",
    words: [
      W("budget","预算"), W("save","存"), W("spend","花费"), W("invest","投资"),
      W("debt","债务"), W("loan","贷款"), W("currency","货币"), W("exchange","兑换"),
      W("tax","税"), W("income","收入"), W("expense","开支"), W("salary","薪水"),
      W("bank","银行"), W("account","账户"), W("deposit","存款"), W("withdraw","取款"),
      W("credit","信用"), W("debit","借记"), W("balance","余额"), W("payment","付款"),
      W("transfer","转账"), W("financial","财务的"), W("wealthy","富有"), W("poverty","贫困"), W("afford","负担得起")
    ],
    sentences: [
      { en: "I'm trying to save money this month.", zh: "我这个月想多存点钱。" },
      { en: "Can I open a bank account here?", zh: "我能在这里开户吗？" },
      { en: "What's the exchange rate today?", zh: "今天的汇率是多少？" },
      { en: "I can't afford a new car right now.", zh: "我现在买不起新车。" },
      { en: "The salary is paid monthly.", zh: "工资按月发放。" }
    ]},
  { id: "pet-emotion", name: "PET · 情绪心理 Emotions",
    words: [
      W("emotion","情绪"), W("anxiety","焦虑"), W("confidence","自信"), W("courage","勇气"),
      W("motivation","动力"), W("frustration","挫败"), W("jealousy","嫉妒"), W("gratitude","感恩"),
      W("sympathy","同情"), W("empathy","共情"), W("mindful","专注的"), W("optimistic","乐观的"),
      W("pessimistic","悲观的"), W("lonely","孤独"), W("satisfied","满足"), W("grief","悲痛"),
      W("joy","喜悦"), W("regret","后悔"), W("hope","希望"), W("panic","恐慌"),
      W("calm","冷静"), W("attitude","态度"), W("mood","心情"), W("tension","紧张"), W("comfort","安慰")
    ],
    sentences: [
      { en: "Try to stay calm under pressure.", zh: "压力下尽量保持冷静。" },
      { en: "I really appreciate your support.", zh: "我真的很感谢你的支持。" },
      { en: "She has a very positive attitude.", zh: "她态度非常积极。" },
      { en: "Don't lose hope.", zh: "别失去希望。" },
      { en: "He felt great relief afterwards.", zh: "之后他感到大大松了口气。" }
    ]},
  { id: "pet-fashion", name: "PET · 时尚 Fashion",
    words: [
      W("fashion","时尚"), W("style","风格"), W("trend","趋势"), W("design","设计"),
      W("model","模特"), W("brand","品牌"), W("outfit","行头"), W("vintage","复古"),
      W("accessory","配饰"), W("jewellery","珠宝"), W("makeup","化妆"), W("perfume","香水"),
      W("costume","戏服"), W("wardrobe","衣柜"), W("tailor","裁缝"), W("formal","正式的"),
      W("casual","休闲的"), W("elegant","优雅的"), W("retro","怀旧的"), W("popular","流行的"),
      W("runway","T台"), W("collection","系列"), W("sustainable","可持续的"), W("secondhand","二手的"), W("luxury","奢华")
    ],
    sentences: [
      { en: "That outfit looks really stylish.", zh: "这身搭配很有型。" },
      { en: "Vintage fashion is making a comeback.", zh: "复古时尚正在回归。" },
      { en: "She prefers casual clothes.", zh: "她更喜欢休闲装。" },
      { en: "Sustainable fashion matters today.", zh: "如今可持续时尚很重要。" },
      { en: "The brand is famous for its quality.", zh: "这个品牌以质量著名。" }
    ]},
  { id: "pet-arts", name: "PET · 艺术 Arts",
    words: [
      W("art","艺术"), W("painting","绘画"), W("sculpture","雕塑"), W("exhibition","展览"),
      W("gallery","画廊"), W("artist","艺术家"), W("masterpiece","杰作"), W("abstract","抽象的"),
      W("portrait","肖像"), W("landscape","风景"), W("drawing","素描"), W("sketch","草图"),
      W("canvas","画布"), W("colour","色彩"), W("theatre","剧院"), W("drama","戏剧"),
      W("performance","演出"), W("ballet","芭蕾"), W("opera","歌剧"), W("comedy","喜剧"),
      W("tragedy","悲剧"), W("audience","观众"), W("critic","评论家"), W("talented","有才华"), W("creative","有创意")
    ],
    sentences: [
      { en: "The exhibition opens next week.", zh: "展览下周开幕。" },
      { en: "She is a very talented artist.", zh: "她是个很有才华的艺术家。" },
      { en: "I enjoy abstract paintings.", zh: "我喜欢抽象画。" },
      { en: "The performance was unforgettable.", zh: "那场演出令人难忘。" },
      { en: "Have you seen the new ballet?", zh: "你看了那部新的芭蕾舞剧吗？" }
    ]},
  { id: "pet-foodadv", name: "PET · 美食与餐厅 Food & Restaurant",
    words: [
      W("cuisine","菜系"), W("recipe","食谱"), W("ingredient","食材"), W("flavour","风味"),
      W("spice","香料"), W("organic","有机的"), W("vegetarian","素食者"), W("vegan","纯素"),
      W("dessert","甜点"), W("appetizer","开胃菜"), W("beverage","饮料"), W("restaurant","餐厅"),
      W("chef","主厨"), W("menu","菜单"), W("takeaway","外卖"), W("delivery","配送"),
      W("healthy","健康"), W("allergy","过敏"), W("diet","饮食"), W("taste","味道"),
      W("fresh","新鲜"), W("frozen","冷冻"), W("reservation","预订"), W("tip","小费"), W("bill","账单")
    ],
    sentences: [
      { en: "Could I see the menu, please?", zh: "请给我菜单。" },
      { en: "I'd like to make a reservation.", zh: "我想预订位子。" },
      { en: "The chef recommends the salmon.", zh: "主厨推荐三文鱼。" },
      { en: "Do you have any vegetarian options?", zh: "有素食选项吗？" },
      { en: "I'm allergic to peanuts.", zh: "我对花生过敏。" }
    ]},
  { id: "pet-transadv", name: "PET · 出行进阶 Transport",
    words: [
      W("commute","通勤"), W("highway","高速公路"), W("public","公共的"), W("private","私人的"),
      W("motorbike","摩托车"), W("scooter","小摩托"), W("ferry","渡轮"), W("cargo","货物"),
      W("distance","距离"), W("departure","出发"), W("arrival","到达"), W("delay","延误"),
      W("cancel","取消"), W("fare","票价"), W("route","路线"), W("navigation","导航"),
      W("tunnel","隧道"), W("license","驾照"), W("vehicle","车辆"), W("transport","运输"),
      W("urban","城市的"), W("rural","乡村的"), W("accident","事故"), W("safety","安全"), W("crossroad","十字路口")
    ],
    sentences: [
      { en: "My flight has been delayed.", zh: "我的航班延误了。" },
      { en: "Public transport is very convenient here.", zh: "这里的公共交通很方便。" },
      { en: "Drive safely on the highway.", zh: "在高速上注意安全。" },
      { en: "How far is the airport?", zh: "机场有多远？" },
      { en: "I left my license at home.", zh: "我把驾照落在家里了。" }
    ]},
  { id: "pet-shopadv", name: "PET · 购物体验 Shopping Experience",
    words: [
      W("customer","顾客"), W("service","服务"), W("complaint","投诉"), W("refund","退款"),
      W("warranty","保修"), W("guarantee","保证"), W("brand","品牌"), W("label","标签"),
      W("packaging","包装"), W("online","在线"), W("offline","线下"), W("delivery","配送"),
      W("shipping","运输"), W("review","评价"), W("rating","评分"), W("bargain","便宜货"),
      W("coupon","优惠券"), W("voucher","代金券"), W("sale","促销"), W("popular","流行的"),
      W("trending","趋势"), W("exclusive","独家"), W("limited","限量"), W("authentic","正品"), W("replace","换货")
    ],
    sentences: [
      { en: "Could I get a refund, please?", zh: "可以退款吗？" },
      { en: "The product has a two-year warranty.", zh: "这产品保修两年。" },
      { en: "I'd like to file a complaint.", zh: "我想投诉一下。" },
      { en: "Free shipping over fifty dollars.", zh: "满五十美元包邮。" },
      { en: "Read the reviews before you buy.", zh: "买之前看下评价。" }
    ]},
  { id: "pet-science", name: "PET · 科学 Science",
    words: [
      W("experiment","实验"), W("theory","理论"), W("hypothesis","假设"), W("evidence","证据"),
      W("laboratory","实验室"), W("microscope","显微镜"), W("chemistry","化学"), W("physics","物理"),
      W("biology","生物"), W("geology","地质"), W("astronomy","天文"), W("atom","原子"),
      W("molecule","分子"), W("gravity","重力"), W("evolution","进化"), W("species","物种"),
      W("ecosystem","生态"), W("research","研究"), W("discover","发现"), W("analyze","分析"),
      W("observation","观察"), W("conclusion","结论"), W("scientist","科学家"), W("formula","公式"), W("breakthrough","突破")
    ],
    sentences: [
      { en: "Scientists made an important discovery.", zh: "科学家做出了重要发现。" },
      { en: "The experiment was a success.", zh: "实验成功了。" },
      { en: "Without gravity, we would float away.", zh: "没有重力，我们会飘走。" },
      { en: "Many species are at risk.", zh: "许多物种面临风险。" },
      { en: "Research takes a lot of patience.", zh: "研究需要极大的耐心。" }
    ]},
  { id: "pet-history", name: "PET · 历史 History",
    words: [
      W("history","历史"), W("civilization","文明"), W("dynasty","朝代"), W("empire","帝国"),
      W("revolution","革命"), W("monument","纪念碑"), W("ancient","古代的"), W("medieval","中世纪的"),
      W("modern","现代的"), W("museum","博物馆"), W("archaeology","考古"), W("artifact","文物"),
      W("heritage","遗产"), W("tradition","传统"), W("conquest","征服"), W("battle","战役"),
      W("hero","英雄"), W("legend","传说"), W("document","文献"), W("manuscript","手稿"),
      W("era","时代"), W("century","世纪"), W("invade","侵略"), W("ruin","废墟"), W("ancient","古代的")
    ],
    sentences: [
      { en: "Ancient Egypt is fascinating.", zh: "古埃及很迷人。" },
      { en: "The museum tells our city's history.", zh: "博物馆讲述了我们城市的历史。" },
      { en: "Heritage sites must be protected.", zh: "遗产地必须被保护。" },
      { en: "He's a hero in our country.", zh: "他是我们国家的英雄。" },
      { en: "This building is over 500 years old.", zh: "这座建筑超过 500 年历史了。" }
    ]},
  { id: "pet-house", name: "PET · 居家生活 Home Life",
    words: [
      W("apartment","公寓"), W("rent","租金"), W("landlord","房东"), W("tenant","租户"),
      W("furniture","家具"), W("decoration","装饰"), W("renovate","翻新"), W("garden","花园"),
      W("balcony","阳台"), W("basement","地下室"), W("attic","阁楼"), W("garage","车库"),
      W("ceiling","天花板"), W("floor","地板"), W("corridor","走廊"), W("doorway","门口"),
      W("fireplace","壁炉"), W("appliance","电器"), W("dishwasher","洗碗机"), W("washing","洗衣"),
      W("refrigerator","冰箱"), W("microwave","微波炉"), W("vacuum","吸尘器"), W("mortgage","按揭"), W("neighbour","邻居")
    ],
    sentences: [
      { en: "The rent is too high in this area.", zh: "这片区域的房租太高了。" },
      { en: "We're renovating the kitchen.", zh: "我们正在翻新厨房。" },
      { en: "My neighbour is very friendly.", zh: "我邻居很友好。" },
      { en: "Please put the food in the fridge.", zh: "请把食物放进冰箱。" },
      { en: "Could you help me move the sofa?", zh: "能帮我搬下沙发吗？" }
    ]},
  { id: "pet-relations", name: "PET · 人际关系 Relationships",
    words: [
      W("relationship","关系"), W("friendship","友谊"), W("partnership","合伙"), W("cooperation","合作"),
      W("conflict","冲突"), W("argument","争论"), W("compromise","妥协"), W("support","支持"),
      W("encourage","鼓励"), W("advise","建议"), W("disagree","不同意"), W("criticize","批评"),
      W("praise","表扬"), W("respect","尊重"), W("trust","信任"), W("betrayal","背叛"),
      W("loyalty","忠诚"), W("sincere","真诚"), W("generous","慷慨"), W("selfish","自私"),
      W("considerate","体贴"), W("tolerant","包容"), W("supportive","支持的"), W("reliable","可靠"), W("honest","诚实")
    ],
    sentences: [
      { en: "Trust takes time to build.", zh: "信任需要时间建立。" },
      { en: "We had a small argument yesterday.", zh: "我们昨天有点小争执。" },
      { en: "Try to understand her point of view.", zh: "试着理解她的观点。" },
      { en: "Friendship matters more than money.", zh: "友谊比金钱更重要。" },
      { en: "Thanks for being so supportive.", zh: "谢谢你这么支持我。" }
    ]}
);

/* ============================================================
   美国常用口语扩充：新增主题
   ============================================================ */
DATA.english_daily.push(
  { id: "us-work", name: "💼 职场 Workplace",
    words: [],
    sentences: [
      { en: "I have a meeting in five minutes.", zh: "我五分钟后有个会。" },
      { en: "Could you send me the file?", zh: "能把文件发给我吗？" },
      { en: "Let's schedule a call tomorrow.", zh: "我们明天安排个电话。" },
      { en: "I'm running a bit late.", zh: "我会稍微迟到。" },
      { en: "Can I get back to you on that?", zh: "这件事我能稍后回复你吗？" },
      { en: "Sorry, I'm swamped right now.", zh: "抱歉，我现在忙得很。" },
      { en: "Let me check my calendar.", zh: "让我看下我的日程。" },
      { en: "I'm working from home today.", zh: "我今天在家办公。" },
      { en: "Could you walk me through this?", zh: "你能给我讲下这个吗？" },
      { en: "Let's circle back next week.", zh: "下周我们再讨论这个。" },
      { en: "Thanks for the heads up.", zh: "谢谢提醒。" },
      { en: "I'll loop you in by email.", zh: "我邮件抄送你。" },
      { en: "Got it, I'll take care of it.", zh: "明白，我处理。" },
      { en: "Can we push the deadline?", zh: "能延期吗？" },
      { en: "Sounds good to me.", zh: "我觉得不错。" }
    ]},
  { id: "us-doctor", name: "🏥 看病 At the Doctor",
    words: [],
    sentences: [
      { en: "I'd like to make an appointment.", zh: "我想预约。" },
      { en: "I have a headache and fever.", zh: "我头疼还发烧。" },
      { en: "How long have you had the cough?", zh: "你咳嗽多久了？" },
      { en: "I'm allergic to penicillin.", zh: "我对青霉素过敏。" },
      { en: "Take this medicine twice a day.", zh: "这药一天吃两次。" },
      { en: "Get plenty of rest.", zh: "好好休息。" },
      { en: "Do I need a prescription?", zh: "我需要处方吗？" },
      { en: "It hurts when I move my arm.", zh: "我一动手臂就疼。" },
      { en: "Is it serious, doctor?", zh: "医生，严重吗？" },
      { en: "Please take a deep breath.", zh: "请深呼吸。" },
      { en: "I feel dizzy.", zh: "我感觉头晕。" },
      { en: "Do you have insurance?", zh: "你有保险吗？" },
      { en: "Drink lots of water.", zh: "多喝水。" },
      { en: "Come back in a week.", zh: "一周后复诊。" }
    ]},
  { id: "us-bank", name: "🏦 银行 Banking",
    words: [],
    sentences: [
      { en: "I'd like to open an account.", zh: "我想开个账户。" },
      { en: "Can I make a deposit?", zh: "我能存款吗？" },
      { en: "I'd like to withdraw $200.", zh: "我想取 200 美元。" },
      { en: "What's the interest rate?", zh: "利率是多少？" },
      { en: "I forgot my PIN.", zh: "我忘了密码。" },
      { en: "Could you break this hundred?", zh: "能帮我把这张百元的换开吗？" },
      { en: "I lost my debit card.", zh: "我的借记卡丢了。" },
      { en: "Please sign here.", zh: "请在这里签字。" },
      { en: "Do you take credit cards?", zh: "你们收信用卡吗？" },
      { en: "I'd like to transfer some money.", zh: "我想转账。" },
      { en: "What's the exchange rate today?", zh: "今天的汇率是多少？" },
      { en: "There's a fee for that.", zh: "这要收手续费。" },
      { en: "Can I see your ID?", zh: "能看下你的证件吗？" },
      { en: "Your transaction was successful.", zh: "交易成功。" }
    ]},
  { id: "us-rent", name: "🏠 租房 Renting",
    words: [],
    sentences: [
      { en: "Is this apartment still available?", zh: "这间公寓还能租吗？" },
      { en: "How much is the monthly rent?", zh: "月租多少？" },
      { en: "Are utilities included?", zh: "包水电吗？" },
      { en: "How long is the lease?", zh: "租期多长？" },
      { en: "Is the deposit refundable?", zh: "押金能退吗？" },
      { en: "Are pets allowed?", zh: "可以养宠物吗？" },
      { en: "Could I see the place?", zh: "我能去看一下吗？" },
      { en: "When can I move in?", zh: "我什么时候能搬进来？" },
      { en: "The faucet is leaking.", zh: "水龙头在漏水。" },
      { en: "The Wi-Fi doesn't work.", zh: "Wi-Fi 用不了。" },
      { en: "Could you call the landlord?", zh: "能联系下房东吗？" },
      { en: "I'd like to renew my lease.", zh: "我想续约。" },
      { en: "The neighbours are noisy.", zh: "邻居有点吵。" },
      { en: "When is the rent due?", zh: "什么时候交房租？" }
    ]},
  { id: "us-internet", name: "🌐 网络日常 Internet Daily",
    words: [],
    sentences: [
      { en: "Did you see that meme?", zh: "你看那个表情包了吗？" },
      { en: "I'll DM you the link.", zh: "我私信发你链接。" },
      { en: "She has tons of followers.", zh: "她粉丝超多。" },
      { en: "That video went viral.", zh: "那个视频火了。" },
      { en: "Just google it.", zh: "上网搜一下就行。" },
      { en: "I'll text you later.", zh: "我晚点发短信给你。" },
      { en: "My phone died.", zh: "我手机没电了。" },
      { en: "Can you screenshot that?", zh: "你能截图发我吗？" },
      { en: "The Wi-Fi is super slow.", zh: "Wi-Fi 慢得离谱。" },
      { en: "He blocked me on Instagram.", zh: "他在 Instagram 把我拉黑了。" },
      { en: "I forgot my password again.", zh: "我又忘密码了。" },
      { en: "Don't reply all by accident.", zh: "别不小心全部回复。" },
      { en: "Could you check your spam folder?", zh: "你能看下垃圾邮件吗？" },
      { en: "I muted that group chat.", zh: "那个群我静音了。" }
    ]},
  { id: "us-party", name: "🎉 派对 & 聚会 Parties",
    words: [],
    sentences: [
      { en: "Thanks for inviting me.", zh: "谢谢邀请我。" },
      { en: "What time does it start?", zh: "几点开始？" },
      { en: "Should I bring anything?", zh: "我要带点什么吗？" },
      { en: "Help yourself to the snacks.", zh: "随便吃点心。" },
      { en: "Cheers, everyone!", zh: "干杯，各位！" },
      { en: "Let's take a group photo.", zh: "来张合影吧。" },
      { en: "Make yourself at home.", zh: "把这儿当自己家。" },
      { en: "The music is amazing.", zh: "音乐太棒了。" },
      { en: "I'm gonna call it a night.", zh: "我要告辞了。" },
      { en: "We had a blast tonight.", zh: "我们今晚玩得超开心。" },
      { en: "Save me a slice of cake.", zh: "给我留一块蛋糕。" },
      { en: "Surprise! Happy birthday!", zh: "惊喜！生日快乐！" },
      { en: "Could you pass the chips?", zh: "能把薯片递给我吗？" },
      { en: "Let's hang out again soon.", zh: "我们改天再聚。" }
    ]},
  { id: "us-emergency", name: "🚨 紧急情况 Emergency",
    words: [],
    sentences: [
      { en: "Call 911 right now!", zh: "马上拨 911！" },
      { en: "Is everyone okay?", zh: "大家都没事吧？" },
      { en: "I need help, please!", zh: "请帮帮我！" },
      { en: "There's been an accident.", zh: "出事故了。" },
      { en: "Stay calm and don't move.", zh: "保持冷静，别动。" },
      { en: "She needs an ambulance.", zh: "她需要叫救护车。" },
      { en: "I lost my passport.", zh: "我丢了护照。" },
      { en: "I think I'm lost.", zh: "我好像迷路了。" },
      { en: "Where's the nearest hospital?", zh: "最近的医院在哪？" },
      { en: "Someone stole my wallet.", zh: "有人偷了我的钱包。" },
      { en: "Please call the police.", zh: "请报警。" },
      { en: "There's a fire next door.", zh: "隔壁着火了。" },
      { en: "Watch out!", zh: "小心！" },
      { en: "Are you hurt?", zh: "你受伤了吗？" }
    ]},
  { id: "us-car", name: "🚗 汽车 & 加油 Cars",
    words: [],
    sentences: [
      { en: "Fill it up, please.", zh: "请加满油。" },
      { en: "I need a jump start.", zh: "我需要搭电启动。" },
      { en: "The check engine light is on.", zh: "发动机故障灯亮了。" },
      { en: "It won't start.", zh: "车启动不了。" },
      { en: "I have a flat tire.", zh: "我爆胎了。" },
      { en: "Where's the nearest gas station?", zh: "最近的加油站在哪？" },
      { en: "Can I get a tow?", zh: "能叫拖车吗？" },
      { en: "Watch your speed here.", zh: "这里注意车速。" },
      { en: "Turn left at the next light.", zh: "下个红绿灯左转。" },
      { en: "I'll pull over.", zh: "我靠边停一下。" },
      { en: "Is there parking nearby?", zh: "附近有停车的地方吗？" },
      { en: "I missed the exit.", zh: "我错过出口了。" },
      { en: "Buckle up, please.", zh: "请系好安全带。" },
      { en: "Slow down, the road is icy.", zh: "慢点开，路面有冰。" }
    ]},
  { id: "us-hobby", name: "🎨 爱好 Hobbies",
    words: [],
    sentences: [
      { en: "What do you like to do for fun?", zh: "你平时喜欢做什么？" },
      { en: "I'm really into photography.", zh: "我很喜欢摄影。" },
      { en: "I read every night before bed.", zh: "我每晚睡前看书。" },
      { en: "She paints in her free time.", zh: "她空闲时画画。" },
      { en: "I'm learning to play guitar.", zh: "我在学吉他。" },
      { en: "We go hiking on weekends.", zh: "我们周末去徒步。" },
      { en: "He collects vintage records.", zh: "他收集老唱片。" },
      { en: "I'm hooked on this podcast.", zh: "我迷上了这个播客。" },
      { en: "Do you have any hobbies?", zh: "你有什么爱好吗？" },
      { en: "I love baking on weekends.", zh: "我喜欢周末烘焙。" },
      { en: "He's into board games lately.", zh: "他最近迷上了桌游。" },
      { en: "I tried yoga and loved it.", zh: "我试了瑜伽，超喜欢。" },
      { en: "We binge-watched the show.", zh: "我们一口气追完了这部剧。" },
      { en: "I'm picking up Chinese again.", zh: "我又开始学中文了。" }
    ]},
  { id: "us-school", name: "🎓 校园进阶 College Life",
    words: [],
    sentences: [
      { en: "What's your major?", zh: "你专业是什么？" },
      { en: "I'm a junior in college.", zh: "我大三。" },
      { en: "The professor was really tough.", zh: "教授很严格。" },
      { en: "I've got finals next week.", zh: "下周期末考。" },
      { en: "Can I borrow your notes?", zh: "我能借你的笔记吗？" },
      { en: "I pulled an all-nighter.", zh: "我熬了一晚。" },
      { en: "I need to drop this class.", zh: "我得退这门课。" },
      { en: "What's your GPA?", zh: "你绩点多少？" },
      { en: "Wanna grab coffee after class?", zh: "下课去喝咖啡吗？" },
      { en: "I have office hours today.", zh: "我今天有答疑时间。" },
      { en: "The dorm is super quiet today.", zh: "宿舍今天特别安静。" },
      { en: "Group project is due Friday.", zh: "小组作业周五交。" },
      { en: "I'm applying for a scholarship.", zh: "我在申请奖学金。" },
      { en: "Finals are killing me.", zh: "期末把我累惨了。" }
    ]},
  { id: "us-techlife", name: "📱 数码生活 Tech Life",
    words: [],
    sentences: [
      { en: "Can you AirDrop me that pic?", zh: "你能把照片用 AirDrop 发我吗？" },
      { en: "My phone keeps freezing.", zh: "我手机一直卡死。" },
      { en: "Did you back up your files?", zh: "你备份文件了吗？" },
      { en: "I need to update my apps.", zh: "我得更新一下应用。" },
      { en: "The screen cracked again.", zh: "屏幕又裂了。" },
      { en: "I switched to a new laptop.", zh: "我换了新笔记本。" },
      { en: "The battery doesn't last long.", zh: "电池不耐用。" },
      { en: "Restart your router.", zh: "重启一下路由器。" },
      { en: "Don't open suspicious links.", zh: "别点可疑链接。" },
      { en: "I keep getting spam calls.", zh: "我老接到骚扰电话。" },
      { en: "Turn off your notifications.", zh: "关掉你的通知。" },
      { en: "I love noise-cancelling headphones.", zh: "我喜欢降噪耳机。" },
      { en: "It's available on iOS and Android.", zh: "iOS 和安卓都能用。" },
      { en: "Sign in with your Apple ID.", zh: "用 Apple ID 登录。" }
    ]},
  { id: "us-travel2", name: "✈️ 旅行进阶 Travel Beyond",
    words: [],
    sentences: [
      { en: "When does the flight board?", zh: "什么时候登机？" },
      { en: "My luggage is overweight.", zh: "我的行李超重了。" },
      { en: "Could I get an aisle seat?", zh: "可以给我靠走道的座位吗？" },
      { en: "Where's the gate for flight 305?", zh: "305 航班的登机口在哪？" },
      { en: "Is there a layover?", zh: "中间有转机吗？" },
      { en: "Do you have anything to declare?", zh: "你有需要申报的吗？" },
      { en: "I'd like a window seat.", zh: "我想要靠窗的座位。" },
      { en: "What's your final destination?", zh: "你的目的地是哪里？" },
      { en: "Could you check in for me?", zh: "你能帮我办登机吗？" },
      { en: "I missed my connection.", zh: "我转机错过了。" },
      { en: "Where can I exchange money?", zh: "在哪里能换钱？" },
      { en: "Is breakfast included?", zh: "包早餐吗？" },
      { en: "Could I have an extra blanket?", zh: "能再给我条毯子吗？" },
      { en: "Enjoy your stay!", zh: "祝您住得愉快！" }
    ]},
  { id: "us-sports", name: "⚽ 体育 Sports Talk",
    words: [],
    sentences: [
      { en: "Did you catch the game?", zh: "你看比赛了吗？" },
      { en: "We crushed it last night.", zh: "我们昨晚狂胜。" },
      { en: "What's the score?", zh: "比分多少？" },
      { en: "He's such a clutch player.", zh: "他关键时刻总能顶住。" },
      { en: "Who's your favorite team?", zh: "你支持哪个队？" },
      { en: "They beat us in overtime.", zh: "他们加时把我们赢了。" },
      { en: "The Lakers are on a winning streak.", zh: "湖人队连胜中。" },
      { en: "Let's hit the gym tomorrow.", zh: "明天去健身房吧。" },
      { en: "I'm trying to run a marathon.", zh: "我想跑马拉松。" },
      { en: "He works out every day.", zh: "他每天健身。" },
      { en: "We're going to see the Yankees.", zh: "我们要去看洋基队比赛。" },
      { en: "Practice makes perfect.", zh: "熟能生巧。" },
      { en: "Keep your eye on the ball.", zh: "盯紧球。" },
      { en: "Good game, man.", zh: "打得漂亮，兄弟。" }
    ]},
  { id: "us-pet", name: "🐶 宠物 Pets",
    words: [],
    sentences: [
      { en: "Is your dog friendly?", zh: "你家狗温顺吗？" },
      { en: "My cat hides under the bed.", zh: "我的猫总躲在床底。" },
      { en: "He's been barking all morning.", zh: "他叫了一上午。" },
      { en: "Time to feed the puppy.", zh: "该喂小狗了。" },
      { en: "Don't forget to walk the dog.", zh: "别忘了遛狗。" },
      { en: "She's litter-trained.", zh: "她会用猫砂盆。" },
      { en: "My cat just had kittens.", zh: "我家猫刚生了小猫。" },
      { en: "He chewed up my shoes.", zh: "他把我的鞋咬烂了。" },
      { en: "Can you pet-sit this weekend?", zh: "这周末能帮忙照看下宠物吗？" },
      { en: "We adopted him from a shelter.", zh: "他是我们从收容所领养的。" },
      { en: "Vet appointment at 3pm.", zh: "下午三点带它去看兽医。" },
      { en: "She follows me everywhere.", zh: "她到哪都跟着我。" },
      { en: "He's such a good boy.", zh: "他真是个好孩子。" },
      { en: "Cats love sunny spots.", zh: "猫喜欢有阳光的地方。" }
    ]},
  { id: "us-restaurant", name: "🍽️ 餐厅 Restaurant",
    words: [],
    sentences: [
      { en: "Table for two, please.", zh: "请安排两个人的桌。" },
      { en: "Could we see the menu?", zh: "可以看下菜单吗？" },
      { en: "What's the special today?", zh: "今天的特色菜是什么？" },
      { en: "I'll have the same.", zh: "我也来一样的。" },
      { en: "How would you like your steak?", zh: "牛排要几分熟？" },
      { en: "Medium rare, please.", zh: "三分熟，谢谢。" },
      { en: "Could we have some water?", zh: "可以给我们水吗？" },
      { en: "This is on me tonight.", zh: "今晚我请客。" },
      { en: "Let's split the bill.", zh: "我们 AA 吧。" },
      { en: "Keep the change.", zh: "零钱不用找了。" },
      { en: "Could we have the check, please?", zh: "可以买单了吗？" },
      { en: "Everything was delicious.", zh: "一切都很好吃。" },
      { en: "Could we get a doggy bag?", zh: "可以打包吗？" },
      { en: "I'm stuffed.", zh: "我吃撑了。" }
    ]}
);

/* ============================================================
   KET 词库扩充：第二批新主题
   ============================================================ */
DATA.english_ket.push(
  { id: "ket-numbers", name: "KET · 数字 Numbers",
    words: [
      W("zero","零"), W("one","一"), W("two","二"), W("three","三"), W("four","四"),
      W("five","五"), W("six","六"), W("seven","七"), W("eight","八"), W("nine","九"),
      W("ten","十"), W("twenty","二十"), W("thirty","三十"), W("hundred","百"), W("thousand","千"),
      W("million","百万"), W("half","一半"), W("quarter","四分之一"), W("double","双倍"), W("count","数"),
      W("first","第一"), W("second","第二"), W("third","第三"), W("last","最后"), W("number","数字")
    ],
    sentences: [
      { en: "I have three brothers.", zh: "我有三个兄弟。" },
      { en: "Count from one to ten.", zh: "从一数到十。" },
      { en: "Half a kilo, please.", zh: "请给我半公斤。" },
      { en: "She came in first place.", zh: "她得了第一名。" },
      { en: "It's the last bus tonight.", zh: "这是今晚最后一班车。" }
    ]},
  { id: "ket-body", name: "KET · 身体部位 Body",
    words: [
      W("eye","眼睛"), W("ear","耳朵"), W("nose","鼻子"), W("mouth","嘴"),
      W("face","脸"), W("hair","头发"), W("neck","脖子"), W("shoulder","肩膀"),
      W("chest","胸"), W("back","背"), W("stomach","肚子"), W("knee","膝盖"),
      W("finger","手指"), W("thumb","拇指"), W("nail","指甲"), W("skin","皮肤"),
      W("bone","骨头"), W("blood","血"), W("brain","大脑"), W("heart","心脏"),
      W("lung","肺"), W("muscle","肌肉"), W("voice","嗓音"), W("body","身体"), W("smile","微笑")
    ],
    sentences: [
      { en: "Brush your teeth before bed.", zh: "睡前刷牙。" },
      { en: "He has long hair.", zh: "他头发很长。" },
      { en: "My knee hurts after running.", zh: "跑步后我膝盖疼。" },
      { en: "She has a beautiful smile.", zh: "她笑得很美。" },
      { en: "Wash your face every morning.", zh: "每天早晨洗脸。" }
    ]},
  { id: "ket-actions", name: "KET · 日常动作 Daily Actions",
    words: [
      W("wake","醒来"), W("eat","吃"), W("drink","喝"), W("walk","走"),
      W("run","跑"), W("sit","坐"), W("stand","站"), W("sleep","睡觉"),
      W("read","读"), W("write","写"), W("talk","说话"), W("listen","听"),
      W("watch","观看"), W("play","玩"), W("work","工作"), W("study","学习"),
      W("cook","做饭"), W("clean","打扫"), W("wash","洗"), W("open","打开"),
      W("close","关闭"), W("start","开始"), W("finish","结束"), W("help","帮助"), W("try","尝试")
    ],
    sentences: [
      { en: "I usually wake up at seven.", zh: "我通常七点醒。" },
      { en: "Can you help me with this?", zh: "你能帮我一下吗？" },
      { en: "Please close the door.", zh: "请把门关上。" },
      { en: "We work from nine to five.", zh: "我们朝九晚五。" },
      { en: "Let's start the meeting.", zh: "我们开始开会吧。" }
    ]},
  { id: "ket-adjectives", name: "KET · 常用形容词 Adjectives",
    words: [
      W("big","大"), W("small","小"), W("hot","热"), W("cold","冷"),
      W("new","新"), W("old","旧"), W("good","好"), W("bad","坏"),
      W("fast","快"), W("slow","慢"), W("strong","强壮"), W("weak","虚弱"),
      W("hard","难/硬"), W("easy","容易"), W("rich","富"), W("poor","穷"),
      W("clean","干净"), W("dirty","脏"), W("safe","安全"), W("dangerous","危险"),
      W("loud","大声"), W("quiet","安静"), W("heavy","重"), W("light","轻"), W("free","自由")
    ],
    sentences: [
      { en: "It's getting cold outside.", zh: "外面变冷了。" },
      { en: "This box is very heavy.", zh: "这箱子很重。" },
      { en: "Be quiet in the library.", zh: "图书馆里请安静。" },
      { en: "He's strong but kind.", zh: "他强壮但善良。" },
      { en: "The test was easy.", zh: "考试很简单。" }
    ]},
  { id: "ket-questions", name: "KET · 疑问词 Question Words",
    words: [
      W("what","什么"), W("where","哪里"), W("when","何时"), W("who","谁"),
      W("why","为什么"), W("how","怎样"), W("which","哪个"), W("whose","谁的"),
      W("which-one","哪一个"), W("how-many","多少（可数）"), W("how-much","多少（不可数）"), W("how-long","多久"),
      W("how-often","多频繁"), W("how-far","多远"), W("how-old","多大"), W("anything","任何事"),
      W("everything","所有事"), W("nothing","没什么"), W("someone","某人"), W("anyone","任何人"),
      W("nowhere","哪都不"), W("anywhere","任何地方"), W("sometimes","有时"), W("always","总是"), W("never","从不")
    ],
    sentences: [
      { en: "Where do you live?", zh: "你住在哪里？" },
      { en: "What's your name?", zh: "你叫什么名字？" },
      { en: "How old is your sister?", zh: "你姐妹多大？" },
      { en: "Why are you so quiet?", zh: "你怎么这么安静？" },
      { en: "How long does it take?", zh: "要多长时间？" }
    ]},
  { id: "ket-nature", name: "KET · 自然 Nature",
    words: [
      W("sun","太阳"), W("moon","月亮"), W("star","星星"), W("sky","天空"),
      W("earth","地球"), W("mountain","山"), W("river","河"), W("lake","湖"),
      W("sea","海"), W("ocean","海洋"), W("tree","树"), W("flower","花"),
      W("grass","草"), W("leaf","叶子"), W("rock","岩石"), W("sand","沙子"),
      W("island","岛"), W("desert","沙漠"), W("forest","森林"), W("cave","洞穴"),
      W("hill","山丘"), W("valley","山谷"), W("field","田地"), W("waterfall","瀑布"), W("rainbow","彩虹")
    ],
    sentences: [
      { en: "Look at that rainbow!", zh: "看那道彩虹！" },
      { en: "We climbed to the top.", zh: "我们爬到了顶上。" },
      { en: "Stars shine at night.", zh: "星星在夜里闪烁。" },
      { en: "The river is very long.", zh: "这条河非常长。" },
      { en: "Trees give us oxygen.", zh: "树木给我们氧气。" }
    ]},
  { id: "ket-cooking", name: "KET · 烹饪 Cooking",
    words: [
      W("cook","烹饪"), W("bake","烘焙"), W("fry","油炸"), W("boil","煮"),
      W("mix","混合"), W("cut","切"), W("slice","切片"), W("peel","去皮"),
      W("pour","倒"), W("stir","搅拌"), W("taste","尝"), W("serve","盛"),
      W("oven","烤箱"), W("pan","平底锅"), W("pot","锅"), W("knife","刀"),
      W("spoon","勺"), W("fork","叉"), W("plate","盘子"), W("bowl","碗"),
      W("kitchen","厨房"), W("recipe","食谱"), W("dish","菜肴"), W("ingredient","食材"), W("flavour","风味")
    ],
    sentences: [
      { en: "Could you pass the salt?", zh: "能把盐递给我吗？" },
      { en: "Mom is baking a cake.", zh: "妈妈在烤蛋糕。" },
      { en: "Stir the soup gently.", zh: "轻轻搅汤。" },
      { en: "Try this dish — it's delicious!", zh: "尝尝这道菜，太好吃了！" },
      { en: "I'll do the dishes.", zh: "我来洗碗。" }
    ]},
  { id: "ket-furniture", name: "KET · 家具 Furniture",
    words: [
      W("table","桌"), W("chair","椅"), W("bed","床"), W("desk","书桌"),
      W("sofa","沙发"), W("shelf","架子"), W("cupboard","柜"), W("drawer","抽屉"),
      W("mirror","镜子"), W("clock","钟"), W("lamp","台灯"), W("curtain","窗帘"),
      W("carpet","地毯"), W("pillow","枕头"), W("blanket","毯子"), W("vase","花瓶"),
      W("fridge","冰箱"), W("stove","炉灶"), W("oven","烤箱"), W("sink","水池"),
      W("painting","画"), W("frame","框"), W("rug","小地毯"), W("wardrobe","衣柜"), W("bench","长凳")
    ],
    sentences: [
      { en: "Please sit on the sofa.", zh: "请坐沙发。" },
      { en: "There's a clock on the wall.", zh: "墙上有个钟。" },
      { en: "Hang your coat in the wardrobe.", zh: "外套挂在衣柜里。" },
      { en: "The lamp is broken.", zh: "台灯坏了。" },
      { en: "Make the bed, please.", zh: "请铺床。" }
    ]},
  { id: "ket-meals", name: "KET · 三餐 Meals",
    words: [
      W("breakfast","早餐"), W("lunch","午餐"), W("dinner","晚餐"), W("supper","夜宵"),
      W("snack","零食"), W("brunch","早午餐"), W("dessert","甜点"), W("starter","开胃菜"),
      W("main","主菜"), W("drink","饮料"), W("juice","果汁"), W("milk","牛奶"),
      W("coffee","咖啡"), W("tea","茶"), W("water","水"), W("rice","米饭"),
      W("noodle","面条"), W("bread","面包"), W("egg","鸡蛋"), W("meat","肉"),
      W("fish","鱼"), W("vegetable","蔬菜"), W("fruit","水果"), W("ice-cream","冰淇淋"), W("cake","蛋糕")
    ],
    sentences: [
      { en: "What's for dinner tonight?", zh: "今晚吃什么？" },
      { en: "I had eggs for breakfast.", zh: "我早餐吃了鸡蛋。" },
      { en: "Would you like some tea?", zh: "要来点茶吗？" },
      { en: "She loves chocolate cake.", zh: "她喜欢巧克力蛋糕。" },
      { en: "Eat your vegetables.", zh: "把蔬菜吃了。" }
    ]},
  { id: "ket-stationery", name: "KET · 文具 Stationery",
    words: [
      W("pen","钢笔"), W("pencil","铅笔"), W("eraser","橡皮"), W("ruler","尺子"),
      W("book","书"), W("notebook","笔记本"), W("paper","纸"), W("bag","包"),
      W("scissors","剪刀"), W("glue","胶水"), W("tape","胶带"), W("stapler","订书机"),
      W("marker","马克笔"), W("crayon","蜡笔"), W("paint","颜料"), W("brush","画笔"),
      W("ink","墨水"), W("file","文件夹"), W("folder","文件夹"), W("envelope","信封"),
      W("stamp","邮票"), W("calculator","计算器"), W("backpack","背包"), W("dictionary","词典"), W("textbook","课本")
    ],
    sentences: [
      { en: "May I borrow your pen?", zh: "我可以借你的笔吗？" },
      { en: "Bring your textbook tomorrow.", zh: "明天带课本来。" },
      { en: "Where are the scissors?", zh: "剪刀在哪里？" },
      { en: "Use a ruler to draw the line.", zh: "用尺子画线。" },
      { en: "She has a new backpack.", zh: "她有个新书包。" }
    ]},
  { id: "ket-events", name: "KET · 节日活动 Events",
    words: [
      W("party","派对"), W("birthday","生日"), W("wedding","婚礼"), W("holiday","假日"),
      W("vacation","假期"), W("festival","节日"), W("Christmas","圣诞节"), W("Halloween","万圣节"),
      W("Easter","复活节"), W("Thanksgiving","感恩节"), W("New-Year","新年"), W("anniversary","周年纪念"),
      W("ceremony","仪式"), W("celebration","庆祝"), W("guest","客人"), W("host","主人"),
      W("invitation","邀请"), W("present","礼物"), W("decoration","装饰"), W("balloon","气球"),
      W("candle","蜡烛"), W("firework","烟花"), W("parade","游行"), W("costume","服装"), W("performance","演出")
    ],
    sentences: [
      { en: "Happy birthday to you!", zh: "祝你生日快乐！" },
      { en: "We had a great Christmas.", zh: "我们过了个愉快的圣诞节。" },
      { en: "Thanks for inviting me.", zh: "谢谢你邀请我。" },
      { en: "Light the candles!", zh: "把蜡烛点上！" },
      { en: "There were beautiful fireworks.", zh: "烟花很漂亮。" }
    ]},
  { id: "ket-prepositions", name: "KET · 介词与方位 Prepositions",
    words: [
      W("in","在……里"), W("on","在……上"), W("at","在"), W("under","在……下"),
      W("above","在……之上"), W("below","在……之下"), W("next-to","旁边"), W("between","在……之间"),
      W("behind","在……后"), W("in-front-of","在……前"), W("near","附近"), W("far-from","远离"),
      W("inside","里面"), W("outside","外面"), W("up","向上"), W("down","向下"),
      W("left","左"), W("right","右"), W("north","北"), W("south","南"),
      W("east","东"), W("west","西"), W("here","这里"), W("there","那里"), W("everywhere","到处")
    ],
    sentences: [
      { en: "The cat is under the table.", zh: "猫在桌子下面。" },
      { en: "The bank is next to the post office.", zh: "银行在邮局旁边。" },
      { en: "Turn left at the corner.", zh: "在拐角处左转。" },
      { en: "There's a park near my house.", zh: "我家附近有个公园。" },
      { en: "Look up at the sky.", zh: "抬头看天空。" }
    ]},
  { id: "ket-greetings", name: "KET · 问候与告别 Greetings",
    words: [
      W("hello","你好"), W("hi","嗨"), W("goodbye","再见"), W("bye","拜"),
      W("morning","早上好"), W("afternoon","下午好"), W("evening","晚上好"), W("night","晚安"),
      W("welcome","欢迎"), W("thanks","谢谢"), W("please","请"), W("sorry","对不起"),
      W("excuse","打扰一下"), W("pardon","什么"), W("nice","好"), W("meet","见面"),
      W("see","见"), W("later","稍后"), W("soon","很快"), W("introduce","介绍"),
      W("name","名字"), W("how-are-you","你好吗"), W("fine","好"), W("great","很好"), W("okay","还好")
    ],
    sentences: [
      { en: "Hello, nice to meet you.", zh: "你好，很高兴认识你。" },
      { en: "Good morning, everyone!", zh: "早上好，各位！" },
      { en: "See you later!", zh: "回头见！" },
      { en: "Have a nice evening.", zh: "祝你有个愉快的夜晚。" },
      { en: "Please come in.", zh: "请进。" }
    ]},
  { id: "ket-school2", name: "KET · 课堂 Classroom",
    words: [
      W("classroom","教室"), W("blackboard","黑板"), W("whiteboard","白板"), W("teacher","老师"),
      W("student","学生"), W("lesson","课"), W("class","班级"), W("homework","作业"),
      W("notebook","笔记本"), W("textbook","课本"), W("question","问题"), W("answer","回答"),
      W("explain","解释"), W("understand","理解"), W("learn","学习"), W("remember","记住"),
      W("forget","忘记"), W("read-aloud","朗读"), W("write-down","写下"), W("attention","注意"),
      W("group","小组"), W("present","展示"), W("test","测试"), W("mistake","错误"), W("repeat","重复")
    ],
    sentences: [
      { en: "Please open your books.", zh: "请打开课本。" },
      { en: "Raise your hand to answer.", zh: "举手回答。" },
      { en: "Don't forget your homework.", zh: "别忘了你的作业。" },
      { en: "Can you repeat that, please?", zh: "可以再说一遍吗？" },
      { en: "Pay attention to the teacher.", zh: "认真听老师讲。" }
    ]},
  { id: "ket-celebrate", name: "KET · 庆典与世界 Celebrations",
    words: [
      W("country","国家"), W("city","城市"), W("flag","国旗"), W("language","语言"),
      W("culture","文化"), W("religion","宗教"), W("tradition","传统"), W("food","食物"),
      W("dress","服装"), W("dance","舞蹈"), W("song","歌曲"), W("movie","电影"),
      W("museum","博物馆"), W("monument","纪念碑"), W("tourist","游客"), W("souvenir","纪念品"),
      W("famous","著名"), W("local","当地的"), W("foreign","外国的"), W("global","全球的"),
      W("World","世界"), W("Asia","亚洲"), W("Europe","欧洲"), W("America","美洲"), W("Africa","非洲")
    ],
    sentences: [
      { en: "What's your country famous for?", zh: "你们国家以什么出名？" },
      { en: "I want to travel around the world.", zh: "我想环游世界。" },
      { en: "She speaks three languages.", zh: "她会说三种语言。" },
      { en: "This is a popular tourist spot.", zh: "这里是个热门景点。" },
      { en: "We tried local food yesterday.", zh: "我们昨天尝了当地美食。" }
    ]}
);

/* ============================================================
   PET 词库扩充：第二批新主题
   ============================================================ */
DATA.english_pet.push(
  { id: "pet-language", name: "PET · 语言学习 Language Learning",
    words: [
      W("vocabulary","词汇"), W("grammar","语法"), W("pronunciation","发音"), W("accent","口音"),
      W("dialect","方言"), W("translate","翻译"), W("interpret","口译"), W("fluent","流利"),
      W("native","母语的"), W("bilingual","双语"), W("multilingual","多语"), W("syllable","音节"),
      W("phrase","短语"), W("idiom","习语"), W("synonym","同义词"), W("antonym","反义词"),
      W("conversation","对话"), W("discussion","讨论"), W("expression","表达"), W("comprehension","理解"),
      W("listening","听力"), W("speaking","口语"), W("writing","写作"), W("reading","阅读"), W("textbook","课本")
    ],
    sentences: [
      { en: "Her English is really fluent.", zh: "她英语非常流利。" },
      { en: "Pronunciation takes a lot of practice.", zh: "发音需要大量练习。" },
      { en: "I'm trying to learn idioms.", zh: "我在尝试学习习语。" },
      { en: "Translate this paragraph into Chinese.", zh: "把这段译成中文。" },
      { en: "Reading helps build vocabulary.", zh: "阅读有助于积累词汇。" }
    ]},
  { id: "pet-philosophy", name: "PET · 思辨 Philosophy",
    words: [
      W("philosophy","哲学"), W("logic","逻辑"), W("reason","理由"), W("argument","论点"),
      W("perspective","视角"), W("belief","信念"), W("doubt","怀疑"), W("morality","道德"),
      W("ethics","伦理"), W("virtue","美德"), W("wisdom","智慧"), W("truth","真理"),
      W("knowledge","知识"), W("opinion","意见"), W("debate","辩论"), W("contradict","反驳"),
      W("conclude","得出结论"), W("analyze","分析"), W("examine","审视"), W("consider","考虑"),
      W("perceive","感知"), W("question","质疑"), W("define","定义"), W("interpret","解读"), W("evaluate","评估")
    ],
    sentences: [
      { en: "Let's debate this issue calmly.", zh: "我们冷静讨论一下这个问题。" },
      { en: "Truth is sometimes hard to accept.", zh: "真相有时难以接受。" },
      { en: "Examine the evidence carefully.", zh: "仔细审查证据。" },
      { en: "Everyone has their own perspective.", zh: "每个人都有自己的视角。" },
      { en: "Wisdom comes from experience.", zh: "智慧来自经验。" }
    ]},
  { id: "pet-leisure", name: "PET · 休闲娱乐 Leisure",
    words: [
      W("leisure","休闲"), W("relaxation","放松"), W("entertainment","娱乐"), W("activity","活动"),
      W("hobby","爱好"), W("pastime","消遣"), W("recreation","娱乐"), W("amusement","乐趣"),
      W("vacation","假期"), W("getaway","度假"), W("retreat","静养"), W("camping","露营"),
      W("picnic","野餐"), W("barbecue","烧烤"), W("trip","出游"), W("excursion","郊游"),
      W("adventure","探险"), W("experience","体验"), W("explore","探索"), W("escape","逃离"),
      W("recharge","充电"), W("unwind","放松"), W("indulge","沉浸"), W("savor","享受"), W("treat","款待")
    ],
    sentences: [
      { en: "Going for a walk is great relaxation.", zh: "散步是很好的放松。" },
      { en: "We had a picnic in the park.", zh: "我们在公园野餐。" },
      { en: "I need a getaway from work.", zh: "我需要从工作中喘口气。" },
      { en: "He enjoys outdoor adventures.", zh: "他喜欢户外探险。" },
      { en: "Let's unwind with some music.", zh: "听点音乐放松一下。" }
    ]},
  { id: "pet-mind", name: "PET · 心智 Mind",
    words: [
      W("memory","记忆"), W("attention","注意"), W("imagination","想象"), W("creativity","创造力"),
      W("focus","专注"), W("concentration","集中"), W("intuition","直觉"), W("thought","思想"),
      W("idea","想法"), W("dream","梦想"), W("vision","愿景"), W("intelligence","智力"),
      W("wisdom","智慧"), W("instinct","本能"), W("habit","习惯"), W("learn","学习"),
      W("forget","忘记"), W("understand","理解"), W("notice","注意到"), W("realize","意识到"),
      W("recognize","认出"), W("perceive","感知"), W("interpret","解读"), W("believe","相信"), W("expect","期望")
    ],
    sentences: [
      { en: "I can't focus when it's noisy.", zh: "吵的时候我没法专注。" },
      { en: "Creativity often comes from rest.", zh: "创意经常来自休息。" },
      { en: "Try to develop a good habit.", zh: "试着养成一个好习惯。" },
      { en: "I just realized my mistake.", zh: "我刚意识到错了。" },
      { en: "He has a great memory.", zh: "他记忆力很好。" }
    ]},
  { id: "pet-marketing", name: "PET · 营销 Marketing",
    words: [
      W("market","市场"), W("brand","品牌"), W("customer","顾客"), W("product","产品"),
      W("service","服务"), W("advertise","广告"), W("promote","推广"), W("campaign","活动"),
      W("audience","受众"), W("segment","细分"), W("strategy","策略"), W("competitor","竞争对手"),
      W("launch","发布"), W("rebrand","品牌重塑"), W("influence","影响"), W("engage","互动"),
      W("convert","转化"), W("loyalty","忠诚"), W("retention","留存"), W("survey","调查"),
      W("feedback","反馈"), W("growth","增长"), W("revenue","收入"), W("trend","趋势"), W("logo","商标")
    ],
    sentences: [
      { en: "We need to launch the new product.", zh: "我们得发布新产品。" },
      { en: "Our brand stands for quality.", zh: "我们品牌代表品质。" },
      { en: "Customer feedback is essential.", zh: "客户反馈很关键。" },
      { en: "Let's run a small ad campaign.", zh: "我们做个小型广告活动。" },
      { en: "The market is growing fast.", zh: "市场增长很快。" }
    ]},
  { id: "pet-startup", name: "PET · 创业 Startup",
    words: [
      W("startup","创业"), W("entrepreneur","创业者"), W("founder","创始人"), W("investor","投资人"),
      W("funding","融资"), W("pitch","路演"), W("investment","投资"), W("venture","风险投资"),
      W("idea","点子"), W("plan","计划"), W("execute","执行"), W("scale","扩张"),
      W("growth","增长"), W("revenue","收入"), W("profit","利润"), W("loss","亏损"),
      W("partner","合伙人"), W("team","团队"), W("culture","文化"), W("mission","使命"),
      W("vision","愿景"), W("strategy","战略"), W("milestone","里程碑"), W("product","产品"), W("market-fit","市场契合")
    ],
    sentences: [
      { en: "They raised five million dollars.", zh: "他们融到了五百万美元。" },
      { en: "Every startup needs a clear vision.", zh: "每家创业公司都需要明确愿景。" },
      { en: "She pitched to ten investors.", zh: "她向十位投资人路演。" },
      { en: "We hit a major milestone.", zh: "我们达到了一个重要里程碑。" },
      { en: "Team culture is everything.", zh: "团队文化最重要。" }
    ]},
  { id: "pet-design", name: "PET · 设计 Design",
    words: [
      W("design","设计"), W("style","风格"), W("layout","布局"), W("colour","颜色"),
      W("typography","字体"), W("pattern","图案"), W("texture","纹理"), W("composition","构图"),
      W("balance","平衡"), W("contrast","对比"), W("symmetry","对称"), W("aesthetic","美学"),
      W("minimal","极简"), W("modern","现代"), W("classic","经典"), W("retro","复古"),
      W("functional","实用"), W("ergonomic","人体工学"), W("prototype","原型"), W("wireframe","线框"),
      W("inspire","启发"), W("create","创造"), W("sketch","草图"), W("illustrate","插图"), W("render","渲染")
    ],
    sentences: [
      { en: "Good design is invisible.", zh: "好的设计是看不见的。" },
      { en: "I love minimal aesthetics.", zh: "我喜欢极简美学。" },
      { en: "Build a prototype first.", zh: "先做个原型。" },
      { en: "Color choice really matters.", zh: "颜色选择很重要。" },
      { en: "Their layout looks very clean.", zh: "他们的布局很清爽。" }
    ]},
  { id: "pet-architecture", name: "PET · 建筑 Architecture",
    words: [
      W("architecture","建筑"), W("building","楼"), W("skyscraper","摩天楼"), W("cottage","小屋"),
      W("mansion","豪宅"), W("castle","城堡"), W("temple","寺庙"), W("cathedral","大教堂"),
      W("structure","结构"), W("foundation","地基"), W("blueprint","蓝图"), W("design","设计"),
      W("construct","建造"), W("renovate","翻新"), W("demolish","拆除"), W("urban","城市的"),
      W("rural","乡村的"), W("dome","圆顶"), W("arch","拱"), W("column","柱"),
      W("balcony","阳台"), W("courtyard","庭院"), W("hallway","走廊"), W("staircase","楼梯"), W("rooftop","屋顶")
    ],
    sentences: [
      { en: "The cathedral is over 700 years old.", zh: "大教堂已有 700 多年历史。" },
      { en: "I love modern architecture.", zh: "我喜欢现代建筑。" },
      { en: "They're renovating the old palace.", zh: "他们在翻修老宫殿。" },
      { en: "The courtyard is full of plants.", zh: "庭院里满是植物。" },
      { en: "The skyscrapers light up at night.", zh: "摩天大楼夜晚亮灯。" }
    ]},
  { id: "pet-literature", name: "PET · 文学 Literature",
    words: [
      W("literature","文学"), W("novel","小说"), W("poetry","诗歌"), W("essay","散文"),
      W("biography","传记"), W("fiction","虚构"), W("nonfiction","非虚构"), W("genre","流派"),
      W("plot","情节"), W("character","角色"), W("theme","主题"), W("setting","场景"),
      W("narrator","叙述者"), W("dialogue","对白"), W("metaphor","隐喻"), W("symbol","象征"),
      W("imagery","意象"), W("tone","语气"), W("voice","声音"), W("style","风格"),
      W("chapter","章节"), W("paragraph","段落"), W("sentence","句子"), W("author","作者"), W("publish","出版")
    ],
    sentences: [
      { en: "I love reading short stories.", zh: "我喜欢看短篇小说。" },
      { en: "Who's your favourite author?", zh: "你最喜欢哪位作家？" },
      { en: "The novel has a surprising ending.", zh: "这本小说结尾很意外。" },
      { en: "Poetry often uses metaphors.", zh: "诗歌常用比喻。" },
      { en: "The main character is very brave.", zh: "主角非常勇敢。" }
    ]},
  { id: "pet-film", name: "PET · 电影 Film",
    words: [
      W("film","电影"), W("movie","电影"), W("director","导演"), W("actor","男演员"),
      W("actress","女演员"), W("script","剧本"), W("scene","场景"), W("setting","场景设置"),
      W("plot","情节"), W("character","角色"), W("hero","主角"), W("villain","反派"),
      W("trailer","预告片"), W("premiere","首映"), W("review","影评"), W("rating","评分"),
      W("box-office","票房"), W("blockbuster","大片"), W("indie","独立电影"), W("documentary","纪录片"),
      W("subtitle","字幕"), W("dubbing","配音"), W("soundtrack","原声"), W("special-effects","特效"), W("award","奖项")
    ],
    sentences: [
      { en: "Let's catch a movie tonight.", zh: "我们今晚看电影吧。" },
      { en: "Who's the director of this film?", zh: "这部片子的导演是谁？" },
      { en: "I loved the soundtrack.", zh: "我超爱原声音乐。" },
      { en: "The trailer looks awesome.", zh: "预告片看着很棒。" },
      { en: "It won three Oscars.", zh: "它赢了三座奥斯卡。" }
    ]},
  { id: "pet-classroom", name: "PET · 大学课堂 University",
    words: [
      W("university","大学"), W("college","学院"), W("major","专业"), W("minor","副修"),
      W("undergraduate","本科生"), W("graduate","研究生"), W("PhD","博士"), W("dissertation","论文"),
      W("thesis","论文"), W("seminar","研讨会"), W("lecture","讲座"), W("professor","教授"),
      W("tuition","学费"), W("dorm","宿舍"), W("campus","校园"), W("library","图书馆"),
      W("research","研究"), W("subject","学科"), W("credit","学分"), W("semester","学期"),
      W("scholarship","奖学金"), W("graduation","毕业"), W("degree","学位"), W("internship","实习"), W("transcript","成绩单")
    ],
    sentences: [
      { en: "I'm majoring in Computer Science.", zh: "我主修计算机科学。" },
      { en: "Tuition is expensive these days.", zh: "如今学费很贵。" },
      { en: "I have a seminar this afternoon.", zh: "我下午有个研讨课。" },
      { en: "She got a full scholarship.", zh: "她拿到全额奖学金。" },
      { en: "Internship experience really matters.", zh: "实习经验非常重要。" }
    ]},
  { id: "pet-debate", name: "PET · 辩论 Debate",
    words: [
      W("debate","辩论"), W("argument","论据"), W("evidence","证据"), W("claim","主张"),
      W("counter","反驳"), W("rebuttal","反驳"), W("agree","同意"), W("disagree","不同意"),
      W("perspective","角度"), W("opinion","观点"), W("viewpoint","观点"), W("stance","立场"),
      W("issue","议题"), W("controversy","争议"), W("topic","话题"), W("supporter","支持者"),
      W("opponent","对手"), W("moderator","主持"), W("convince","说服"), W("persuade","劝说"),
      W("speech","演讲"), W("conclusion","结论"), W("statement","陈述"), W("audience","观众"), W("judge","裁判")
    ],
    sentences: [
      { en: "Both sides made strong arguments.", zh: "双方都提出了有力的论点。" },
      { en: "Could you support your claim?", zh: "你能为你的观点提供论据吗？" },
      { en: "I respectfully disagree.", zh: "我礼貌地表示不同意。" },
      { en: "Let me explain my perspective.", zh: "让我解释一下我的观点。" },
      { en: "She's a brilliant debater.", zh: "她是个出色的辩手。" }
    ]},
  { id: "pet-research", name: "PET · 学术研究 Academic Research",
    words: [
      W("research","研究"), W("study","研究"), W("hypothesis","假设"), W("theory","理论"),
      W("methodology","方法论"), W("data","数据"), W("survey","调研"), W("interview","访谈"),
      W("experiment","实验"), W("variable","变量"), W("sample","样本"), W("control","对照"),
      W("analyze","分析"), W("statistic","统计"), W("graph","图表"), W("chart","图表"),
      W("citation","引用"), W("reference","参考"), W("bibliography","文献目录"), W("abstract","摘要"),
      W("introduction","引言"), W("discussion","讨论"), W("conclusion","结论"), W("findings","发现"), W("publish","发表")
    ],
    sentences: [
      { en: "Our hypothesis was confirmed.", zh: "我们的假设得到证实。" },
      { en: "We collected data from 100 people.", zh: "我们从 100 个人收集了数据。" },
      { en: "Don't forget to cite your sources.", zh: "别忘了引用来源。" },
      { en: "The findings are very interesting.", zh: "发现非常有趣。" },
      { en: "She published her paper last week.", zh: "她上周发表了论文。" }
    ]},
  { id: "pet-mindset", name: "PET · 心态成长 Mindset",
    words: [
      W("mindset","心态"), W("growth","成长"), W("fixed","固定的"), W("resilience","韧性"),
      W("perseverance","坚持"), W("grit","毅力"), W("ambition","野心"), W("motivation","动力"),
      W("inspire","激励"), W("encourage","鼓励"), W("challenge","挑战"), W("opportunity","机会"),
      W("failure","失败"), W("success","成功"), W("setback","挫折"), W("comeback","回归"),
      W("believe","相信"), W("commit","承诺"), W("dedicate","投入"), W("achieve","达成"),
      W("progress","进步"), W("improve","改善"), W("overcome","克服"), W("learn","学到"), W("reflect","反思")
    ],
    sentences: [
      { en: "Failure is a part of growth.", zh: "失败是成长的一部分。" },
      { en: "Stay focused on your goals.", zh: "专注于你的目标。" },
      { en: "Every challenge is an opportunity.", zh: "每个挑战都是机会。" },
      { en: "She bounced back stronger.", zh: "她变得更强大地回来了。" },
      { en: "Keep going, you'll get there.", zh: "继续走，你会到达的。" }
    ]},
  { id: "pet-business", name: "PET · 商务礼仪 Business",
    words: [
      W("business","商务"), W("meeting","会议"), W("client","客户"), W("partner","伙伴"),
      W("contract","合同"), W("agreement","协议"), W("negotiate","谈判"), W("proposal","提案"),
      W("deadline","期限"), W("schedule","日程"), W("agenda","议程"), W("minutes","会议纪要"),
      W("presentation","演示"), W("slide","幻灯片"), W("report","报告"), W("memo","备忘"),
      W("budget","预算"), W("invoice","发票"), W("revenue","营收"), W("profit","利润"),
      W("supplier","供应商"), W("buyer","买方"), W("delivery","交付"), W("inventory","库存"), W("forecast","预测")
    ],
    sentences: [
      { en: "Let's schedule a meeting for Monday.", zh: "我们把会议定在周一吧。" },
      { en: "We need to sign the contract.", zh: "我们需要签合同。" },
      { en: "The deadline is next Friday.", zh: "截止日期是下周五。" },
      { en: "Please send me the agenda.", zh: "请把议程发我。" },
      { en: "Our profit grew 20%.", zh: "我们的利润增长了 20%。" }
    ]}
);

/* ============================================================
   美国常用口语扩充：第二批新主题
   ============================================================ */
DATA.english_daily.push(
  { id: "us-bus", name: "🚌 公交 & 地铁 Bus & Subway",
    words: [],
    sentences: [
      { en: "Does this bus go downtown?", zh: "这班车去市中心吗？" },
      { en: "What's the next stop?", zh: "下一站是哪？" },
      { en: "How much is the fare?", zh: "票价多少？" },
      { en: "Could you let me know my stop?", zh: "到我那站告诉我好吗？" },
      { en: "I missed my bus.", zh: "我错过公交了。" },
      { en: "Is this seat taken?", zh: "这位子有人吗？" },
      { en: "Excuse me, I'd like to get off.", zh: "不好意思，我要下车。" },
      { en: "The subway is faster.", zh: "地铁更快。" },
      { en: "Transfer at the next station.", zh: "下一站换乘。" },
      { en: "Mind the gap.", zh: "请注意空隙。" },
      { en: "Do you have a metro card?", zh: "你有地铁卡吗？" },
      { en: "I'll take the express line.", zh: "我坐快线。" },
      { en: "Move down the bus, please.", zh: "请往车后走。" },
      { en: "Tap your card here.", zh: "在这里刷卡。" }
    ]},
  { id: "us-coffee", name: "☕ 咖啡店 Coffee Shop",
    words: [],
    sentences: [
      { en: "Could I get a medium latte?", zh: "可以来一杯中杯拿铁吗？" },
      { en: "For here or to go?", zh: "店里喝还是外带？" },
      { en: "I'll have it iced, please.", zh: "请给我加冰。" },
      { en: "Could I get extra sugar?", zh: "可以多给点糖吗？" },
      { en: "Do you have oat milk?", zh: "有燕麦奶吗？" },
      { en: "What's your seasonal drink?", zh: "你们的季节限定饮品是什么？" },
      { en: "Could I get that with no whip?", zh: "可以不要奶油吗？" },
      { en: "Name for the order?", zh: "订单写谁的名字？" },
      { en: "I'll take the same as her.", zh: "我和她要一样的。" },
      { en: "Any pastries today?", zh: "今天有什么糕点？" },
      { en: "Wi-Fi password, please?", zh: "请问 Wi-Fi 密码？" },
      { en: "May I use the restroom?", zh: "可以用洗手间吗？" },
      { en: "Thanks, have a good one!", zh: "谢谢，再见！" },
      { en: "Could you reheat this?", zh: "可以帮我加热下吗？" }
    ]},
  { id: "us-hotel", name: "🏨 酒店 Hotel",
    words: [],
    sentences: [
      { en: "I have a reservation.", zh: "我有预订。" },
      { en: "Could I check in early?", zh: "可以提前入住吗？" },
      { en: "Is breakfast included?", zh: "包早餐吗？" },
      { en: "When is checkout time?", zh: "几点退房？" },
      { en: "Could I have a wake-up call?", zh: "可以叫醒服务吗？" },
      { en: "The room is too cold.", zh: "房间太冷了。" },
      { en: "Could I get an extra towel?", zh: "能再给我条毛巾吗？" },
      { en: "Is there a gym in the hotel?", zh: "酒店有健身房吗？" },
      { en: "Could you call a cab?", zh: "可以帮我叫辆出租吗？" },
      { en: "I'd like to extend my stay.", zh: "我想延住几天。" },
      { en: "Could you store my luggage?", zh: "可以帮我存行李吗？" },
      { en: "Is there room service?", zh: "有客房服务吗？" },
      { en: "The Wi-Fi is unstable.", zh: "Wi-Fi 不稳定。" },
      { en: "How do I get to the airport?", zh: "怎么去机场？" }
    ]},
  { id: "us-airport", name: "🛫 机场 Airport",
    words: [],
    sentences: [
      { en: "Where's the check-in counter?", zh: "登机柜台在哪？" },
      { en: "Could you weigh my bag?", zh: "可以称下我的行李吗？" },
      { en: "I'd like to check this bag.", zh: "我想托运这个包。" },
      { en: "Window or aisle seat?", zh: "靠窗还是靠走道？" },
      { en: "Boarding starts at gate 12.", zh: "在 12 号登机口开始登机。" },
      { en: "My flight is delayed two hours.", zh: "我的航班延误两小时。" },
      { en: "Where's customs?", zh: "海关在哪？" },
      { en: "I have nothing to declare.", zh: "我没什么需要申报。" },
      { en: "Where can I pick up my luggage?", zh: "在哪取行李？" },
      { en: "Could I have a duty-free bag?", zh: "可以给我个免税袋吗？" },
      { en: "Is there a lounge here?", zh: "有候机厅吗？" },
      { en: "I'd like a vegetarian meal.", zh: "我想要素食餐。" },
      { en: "Could I switch seats?", zh: "可以换座位吗？" },
      { en: "Have a safe flight!", zh: "祝你旅途平安！" }
    ]},
  { id: "us-mall", name: "🛍️ 商场 Mall",
    words: [],
    sentences: [
      { en: "Where can I find the food court?", zh: "美食广场在哪？" },
      { en: "Could you point me to the elevators?", zh: "电梯怎么走？" },
      { en: "Is there a restroom nearby?", zh: "附近有洗手间吗？" },
      { en: "Do you have this in a different size?", zh: "这有别的尺码吗？" },
      { en: "Can I try this on?", zh: "可以试穿吗？" },
      { en: "Where are the fitting rooms?", zh: "试衣间在哪？" },
      { en: "It's a little too tight.", zh: "有点紧。" },
      { en: "I'll take two of these.", zh: "我要两件。" },
      { en: "Are these on sale?", zh: "这些打折吗？" },
      { en: "Could I get this gift-wrapped?", zh: "可以礼品包装吗？" },
      { en: "Do you offer loyalty cards?", zh: "有会员卡吗？" },
      { en: "Is there a parking validation?", zh: "可以盖停车章吗？" },
      { en: "When do you close today?", zh: "今天几点关门？" },
      { en: "Could I get a price check?", zh: "可以查下价格吗？" }
    ]},
  { id: "us-callcenter", name: "📞 客服 Customer Service",
    words: [],
    sentences: [
      { en: "How may I help you?", zh: "请问您需要什么帮助？" },
      { en: "Could I have your order number?", zh: "请告诉我您的订单号。" },
      { en: "Please hold for a moment.", zh: "请稍等一下。" },
      { en: "Let me transfer you to my colleague.", zh: "我帮您转接给同事。" },
      { en: "I apologize for the inconvenience.", zh: "对此带来的不便深表歉意。" },
      { en: "I'd like to file a complaint.", zh: "我想投诉。" },
      { en: "I'd like a full refund.", zh: "我想要全额退款。" },
      { en: "Could you check the status?", zh: "可以查下进度吗？" },
      { en: "Your case number is 8842.", zh: "您的工单号是 8842。" },
      { en: "We'll get back to you shortly.", zh: "我们很快回复您。" },
      { en: "Is there anything else?", zh: "还有别的需要吗？" },
      { en: "Have a great day!", zh: "祝您愉快！" },
      { en: "The system is down right now.", zh: "系统暂时无法访问。" },
      { en: "Try clearing your cache.", zh: "试试清下缓存。" }
    ]},
  { id: "us-haircut", name: "💇 理发 Haircut",
    words: [],
    sentences: [
      { en: "I'd like a trim, please.", zh: "我想剪短一点。" },
      { en: "Not too short on the sides.", zh: "两边不要太短。" },
      { en: "Could you shave my beard?", zh: "可以帮我刮胡子吗？" },
      { en: "What's the wait time?", zh: "要等多久？" },
      { en: "I'd like to color my hair.", zh: "我想染发。" },
      { en: "Just a quick wash, please.", zh: "简单洗一下就好。" },
      { en: "Could you blow-dry it?", zh: "可以帮我吹干吗？" },
      { en: "I want to keep it natural.", zh: "我想保持自然。" },
      { en: "About this length is good.", zh: "大概这个长度就好。" },
      { en: "Could you show me some styles?", zh: "可以看下发型样式吗？" },
      { en: "I'm growing it out.", zh: "我在留长。" },
      { en: "It's a bit too uneven.", zh: "有点不齐。" },
      { en: "Looks great, thank you!", zh: "看起来不错，谢谢！" },
      { en: "Could I tip with the card?", zh: "可以用卡付小费吗？" }
    ]},
  { id: "us-laundry", name: "🧺 洗衣 Laundry",
    words: [],
    sentences: [
      { en: "Where's the laundromat?", zh: "自助洗衣店在哪？" },
      { en: "How do these machines work?", zh: "这些机器怎么用？" },
      { en: "I need quarters for the dryer.", zh: "烘干机需要硬币。" },
      { en: "Don't mix colors with whites.", zh: "彩衣别和白衣混洗。" },
      { en: "This needs dry-cleaning.", zh: "这件需要干洗。" },
      { en: "Could you wash it on cold?", zh: "可以冷水洗吗？" },
      { en: "There's a stain on this shirt.", zh: "这件衬衫上有污渍。" },
      { en: "Fold the towels carefully.", zh: "小心叠好毛巾。" },
      { en: "The detergent smells nice.", zh: "洗衣液味道很好。" },
      { en: "I forgot to add fabric softener.", zh: "我忘了加柔顺剂。" },
      { en: "Hang up the wet clothes.", zh: "把湿衣服挂起来。" },
      { en: "It needs ironing.", zh: "需要熨一下。" },
      { en: "I shrunk my favorite sweater.", zh: "我把最喜欢的毛衣洗缩了。" },
      { en: "Wash it inside out.", zh: "翻过来洗。" }
    ]},
  { id: "us-gym", name: "🏋️ 健身房 Gym",
    words: [],
    sentences: [
      { en: "Could I get a tour?", zh: "可以参观一下吗？" },
      { en: "I'd like to join the gym.", zh: "我想办张健身卡。" },
      { en: "Is there a beginner class?", zh: "有初级课吗？" },
      { en: "Could you spot me?", zh: "可以帮我保护一下吗？" },
      { en: "How many sets are you doing?", zh: "你做几组？" },
      { en: "I'm working on my core.", zh: "我在练核心。" },
      { en: "Let's hit the treadmill.", zh: "去跑步机吧。" },
      { en: "I do cardio three times a week.", zh: "我一周做三次有氧。" },
      { en: "Could I borrow these dumbbells?", zh: "可以借下这副哑铃吗？" },
      { en: "Don't forget to stretch.", zh: "别忘了拉伸。" },
      { en: "I'm sore from yesterday.", zh: "我昨天练得有点酸。" },
      { en: "Drink plenty of water.", zh: "多喝点水。" },
      { en: "Could you wipe down the bench?", zh: "可以擦下板凳吗？" },
      { en: "See you at the next class.", zh: "下节课见。" }
    ]},
  { id: "us-baby", name: "👶 育儿 Parenting",
    words: [],
    sentences: [
      { en: "The baby is fast asleep.", zh: "宝宝睡着了。" },
      { en: "It's time for her nap.", zh: "她该午睡了。" },
      { en: "Could you change the diaper?", zh: "可以换下尿布吗？" },
      { en: "He's teething right now.", zh: "他在长牙。" },
      { en: "Don't forget the stroller.", zh: "别忘了婴儿车。" },
      { en: "She loves bath time.", zh: "她超喜欢洗澡时间。" },
      { en: "I'm running out of formula.", zh: "奶粉快没了。" },
      { en: "He took his first step today!", zh: "他今天迈出第一步！" },
      { en: "She said 'mama' for the first time.", zh: "她第一次叫了'妈妈'。" },
      { en: "Did you pack the wipes?", zh: "湿巾带了吗？" },
      { en: "I need to do school pickup.", zh: "我得去接孩子放学。" },
      { en: "Bedtime is at 8 sharp.", zh: "八点准时睡觉。" },
      { en: "Let me read you a story.", zh: "我给你讲个故事。" },
      { en: "Eat your vegetables, sweetie.", zh: "宝贝，把菜吃了。" }
    ]},
  { id: "us-family", name: "👨‍👩‍👧 家人 Family Talk",
    words: [],
    sentences: [
      { en: "How's your mom doing?", zh: "你妈妈最近怎么样？" },
      { en: "My brother just got engaged.", zh: "我哥刚订婚了。" },
      { en: "We're having a family reunion.", zh: "我们要家庭聚会。" },
      { en: "She takes after her father.", zh: "她像她爸爸。" },
      { en: "We grew up together.", zh: "我们一起长大。" },
      { en: "My grandma turned 90.", zh: "我奶奶 90 岁了。" },
      { en: "Family comes first.", zh: "家人最重要。" },
      { en: "Could you call your dad back?", zh: "你能回个电话给爸爸吗？" },
      { en: "We've been married 20 years.", zh: "我们结婚 20 年了。" },
      { en: "I miss my hometown.", zh: "我想老家了。" },
      { en: "Holidays are great with family.", zh: "和家人过节最好。" },
      { en: "Wish them my best.", zh: "代我向他们问好。" },
      { en: "I love these old photos.", zh: "我喜欢这些老照片。" },
      { en: "She inherited her grandma's ring.", zh: "她继承了奶奶的戒指。" }
    ]},
  { id: "us-friends", name: "🧑‍🤝‍🧑 朋友 Friends",
    words: [],
    sentences: [
      { en: "Long time no see, buddy.", zh: "好久不见，兄弟。" },
      { en: "Wanna grab dinner sometime?", zh: "改天一起吃饭怎么样？" },
      { en: "We go way back.", zh: "我们认识很久了。" },
      { en: "You're like a sister to me.", zh: "你就像我亲姐妹。" },
      { en: "Let's catch up over coffee.", zh: "我们约杯咖啡聊聊吧。" },
      { en: "I've got your back.", zh: "我挺你。" },
      { en: "Thanks for being there.", zh: "谢谢你一直在。" },
      { en: "We had so much fun!", zh: "我们玩得超开心！" },
      { en: "Friends like you are rare.", zh: "像你这样的朋友很难得。" },
      { en: "Hit me up anytime.", zh: "随时联系我。" },
      { en: "Don't be a stranger!", zh: "别失联啊！" },
      { en: "Let's plan something fun.", zh: "我们计划点好玩的吧。" },
      { en: "I really needed this chat.", zh: "我真的需要这次聊天。" },
      { en: "Hope to see you soon.", zh: "希望很快见到你。" }
    ]},
  { id: "us-weather2", name: "🌦️ 天气闲聊 Weather Talk",
    words: [],
    sentences: [
      { en: "Crazy weather today, huh?", zh: "今天天气真奇怪，是吧？" },
      { en: "It's pouring outside.", zh: "外面下大雨。" },
      { en: "It's freezing in here.", zh: "里面好冷。" },
      { en: "Looks like a storm is coming.", zh: "看来要来暴风雨了。" },
      { en: "We're having a heat wave.", zh: "我们正经历热浪。" },
      { en: "There's a blizzard warning.", zh: "有暴风雪预警。" },
      { en: "It's so muggy today.", zh: "今天好闷热。" },
      { en: "What a gorgeous sunset!", zh: "好美的日落！" },
      { en: "It might snow tonight.", zh: "今晚可能下雪。" },
      { en: "Bring an umbrella, just in case.", zh: "带把伞，以防万一。" },
      { en: "Perfect beach day, isn't it?", zh: "今天是绝佳的海滩天，对吧？" },
      { en: "It dropped twenty degrees overnight.", zh: "一夜之间降了二十度。" },
      { en: "Wind chill is brutal.", zh: "体感风寒太刺骨。" },
      { en: "Sunscreen is a must today.", zh: "今天必须涂防晒。" }
    ]},
  { id: "us-news", name: "📰 新闻闲聊 News Chat",
    words: [],
    sentences: [
      { en: "Did you see the news today?", zh: "你看今天的新闻了吗？" },
      { en: "There's a big story breaking.", zh: "有个重磅新闻。" },
      { en: "What's trending right now?", zh: "现在流行什么？" },
      { en: "I read about it on Twitter.", zh: "我在 Twitter 上看到的。" },
      { en: "That's hard to believe.", zh: "太难以置信。" },
      { en: "Sources say it's true.", zh: "消息称确有其事。" },
      { en: "It's all over the news.", zh: "新闻都在报道。" },
      { en: "I don't follow politics much.", zh: "我不怎么关心政治。" },
      { en: "The economy looks shaky.", zh: "经济看上去不稳定。" },
      { en: "There's a lot of misinformation.", zh: "有很多虚假信息。" },
      { en: "Fact-check it first.", zh: "先核实一下事实。" },
      { en: "Have you watched the debate?", zh: "你看辩论了吗？" },
      { en: "He won the election.", zh: "他赢得了选举。" },
      { en: "It's a developing story.", zh: "事件还在发展。" }
    ]},
  { id: "us-relations", name: "💞 情感关系 Relationships",
    words: [],
    sentences: [
      { en: "We've been dating for a year.", zh: "我们交往一年了。" },
      { en: "He proposed last weekend!", zh: "他上周末求婚了！" },
      { en: "I think she's the one.", zh: "我觉得她就是那个对的人。" },
      { en: "We had a small fight.", zh: "我们小吵了一下。" },
      { en: "Let's just talk it out.", zh: "我们好好谈谈。" },
      { en: "I really care about you.", zh: "我真的在乎你。" },
      { en: "Are you seeing anyone?", zh: "你在交往谁吗？" },
      { en: "We just clicked.", zh: "我们就是合得来。" },
      { en: "It's getting serious.", zh: "感情越来越认真了。" },
      { en: "I'm not ready for a relationship.", zh: "我还没准备好谈恋爱。" },
      { en: "We broke up last month.", zh: "我们上个月分手了。" },
      { en: "He's just a friend.", zh: "他只是朋友。" },
      { en: "I miss you so much.", zh: "我超想你。" },
      { en: "Let's take it slow.", zh: "我们慢慢来。" }
    ]}
);

/* ============================================================
   KET 词库扩充：第三批新主题
   ============================================================ */
DATA.english_ket.push(
  { id: "ket-fruits", name: "KET · 水果 Fruits",
    words: [
      W("apple","苹果"), W("banana","香蕉"), W("orange","橙"), W("pear","梨"),
      W("grape","葡萄"), W("watermelon","西瓜"), W("strawberry","草莓"), W("cherry","樱桃"),
      W("peach","桃"), W("plum","李"), W("mango","芒果"), W("pineapple","菠萝"),
      W("kiwi","猕猴桃"), W("lemon","柠檬"), W("lime","青柠"), W("coconut","椰子"),
      W("avocado","牛油果"), W("blueberry","蓝莓"), W("raspberry","树莓"), W("papaya","木瓜"),
      W("fig","无花果"), W("apricot","杏"), W("pomegranate","石榴"), W("durian","榴莲"), W("melon","甜瓜")
    ],
    sentences: [
      { en: "I love fresh strawberries.", zh: "我爱新鲜草莓。" },
      { en: "Could I have an apple?", zh: "可以给我一个苹果吗？" },
      { en: "This mango is super sweet.", zh: "这个芒果好甜。" },
      { en: "Bananas are full of energy.", zh: "香蕉富含能量。" },
      { en: "She made a fruit salad.", zh: "她做了水果沙拉。" }
    ]},
  { id: "ket-vegetables", name: "KET · 蔬菜 Vegetables",
    words: [
      W("tomato","番茄"), W("potato","土豆"), W("carrot","胡萝卜"), W("cabbage","卷心菜"),
      W("lettuce","生菜"), W("spinach","菠菜"), W("broccoli","西兰花"), W("cucumber","黄瓜"),
      W("onion","洋葱"), W("garlic","大蒜"), W("ginger","姜"), W("pepper","辣椒"),
      W("corn","玉米"), W("pea","豌豆"), W("bean","豆"), W("celery","芹菜"),
      W("mushroom","蘑菇"), W("eggplant","茄子"), W("pumpkin","南瓜"), W("radish","萝卜"),
      W("asparagus","芦笋"), W("zucchini","西葫芦"), W("cauliflower","花椰菜"), W("leek","韭葱"), W("turnip","萝卜")
    ],
    sentences: [
      { en: "Eat your veggies!", zh: "把蔬菜吃了！" },
      { en: "I'll chop the onions.", zh: "我来切洋葱。" },
      { en: "Carrots are good for your eyes.", zh: "胡萝卜对眼睛好。" },
      { en: "Could you wash the lettuce?", zh: "可以洗下生菜吗？" },
      { en: "Add some pepper for flavour.", zh: "加点胡椒提味。" }
    ]},
  { id: "ket-desserts", name: "KET · 甜点 Desserts",
    words: [
      W("cake","蛋糕"), W("cookie","曲奇"), W("pie","派"), W("pudding","布丁"),
      W("ice-cream","冰淇淋"), W("chocolate","巧克力"), W("candy","糖果"), W("donut","甜甜圈"),
      W("brownie","布朗尼"), W("muffin","松饼"), W("cupcake","纸杯蛋糕"), W("cheesecake","奶酪蛋糕"),
      W("tart","挞"), W("jelly","果冻"), W("biscuit","饼干"), W("waffle","华夫饼"),
      W("pancake","煎饼"), W("mousse","慕斯"), W("sundae","圣代"), W("popsicle","冰棒"),
      W("macaroon","马卡龙"), W("cinnamon","肉桂"), W("vanilla","香草"), W("syrup","糖浆"), W("sprinkle","糖针")
    ],
    sentences: [
      { en: "I'd like vanilla ice cream.", zh: "我想要香草冰淇淋。" },
      { en: "Save room for dessert.", zh: "给甜点留点肚子。" },
      { en: "These cookies smell amazing.", zh: "这些饼干闻起来超香。" },
      { en: "Could I have the chocolate cake?", zh: "可以来块巧克力蛋糕吗？" },
      { en: "Add extra syrup, please.", zh: "请多加点糖浆。" }
    ]},
  { id: "ket-toys", name: "KET · 玩具 Toys",
    words: [
      W("toy","玩具"), W("doll","娃娃"), W("car","小车"), W("train","火车"),
      W("plane","飞机"), W("robot","机器人"), W("teddy","泰迪熊"), W("puzzle","拼图"),
      W("block","积木"), W("ball","球"), W("kite","风筝"), W("yo-yo","溜溜球"),
      W("balloon","气球"), W("crayon","蜡笔"), W("sticker","贴纸"), W("marble","弹珠"),
      W("lego","乐高"), W("slide","滑梯"), W("swing","秋千"), W("seesaw","跷跷板"),
      W("bike","自行车"), W("scooter","滑板车"), W("kite","风筝"), W("rope","绳"), W("game","游戏")
    ],
    sentences: [
      { en: "Can I play with the robot?", zh: "我能玩机器人吗？" },
      { en: "She loves her teddy bear.", zh: "她超爱她的泰迪熊。" },
      { en: "Let's build with blocks.", zh: "我们一起搭积木吧。" },
      { en: "The kids love the slide.", zh: "小朋友们爱滑梯。" },
      { en: "Don't pop the balloon!", zh: "别把气球弄爆！" }
    ]},
  { id: "ket-kitchen", name: "KET · 厨房用具 Kitchen Tools",
    words: [
      W("knife","刀"), W("fork","叉"), W("spoon","勺"), W("plate","盘"),
      W("bowl","碗"), W("cup","杯"), W("mug","马克杯"), W("glass","玻璃杯"),
      W("pot","锅"), W("pan","平底锅"), W("kettle","水壶"), W("teapot","茶壶"),
      W("oven","烤箱"), W("microwave","微波炉"), W("blender","搅拌机"), W("toaster","烤面包机"),
      W("fridge","冰箱"), W("freezer","冷冻柜"), W("dishwasher","洗碗机"), W("spatula","锅铲"),
      W("ladle","汤勺"), W("strainer","滤网"), W("grater","刨丝器"), W("cutting-board","砧板"), W("tray","托盘")
    ],
    sentences: [
      { en: "Please wash the dishes.", zh: "请把碗洗了。" },
      { en: "The kettle is boiling.", zh: "水壶在烧开。" },
      { en: "Don't put metal in the microwave.", zh: "别把金属放进微波炉。" },
      { en: "Use a spatula to flip it.", zh: "用锅铲翻一下。" },
      { en: "Put the eggs in the fridge.", zh: "把鸡蛋放进冰箱。" }
    ]},
  { id: "ket-park", name: "KET · 公园 Park",
    words: [
      W("park","公园"), W("bench","长椅"), W("fountain","喷泉"), W("pond","池塘"),
      W("path","小路"), W("grass","草坪"), W("flower","花"), W("tree","树"),
      W("playground","游乐场"), W("slide","滑梯"), W("swing","秋千"), W("seesaw","跷跷板"),
      W("picnic","野餐"), W("kite","风筝"), W("frisbee","飞盘"), W("dog","狗"),
      W("squirrel","松鼠"), W("bird","鸟"), W("statue","雕像"), W("bridge","桥"),
      W("lake","湖"), W("boat","小船"), W("ice-cream","冰激凌"), W("balloon","气球"), W("camera","相机")
    ],
    sentences: [
      { en: "Let's have a picnic in the park.", zh: "我们去公园野餐吧。" },
      { en: "Look at the swans on the lake.", zh: "看湖上的天鹅。" },
      { en: "The kids are on the swings.", zh: "孩子们在玩秋千。" },
      { en: "Take a photo by the fountain.", zh: "在喷泉旁拍张照。" },
      { en: "He's flying a kite.", zh: "他在放风筝。" }
    ]},
  { id: "ket-camping", name: "KET · 露营 Camping",
    words: [
      W("camp","露营"), W("tent","帐篷"), W("sleeping-bag","睡袋"), W("backpack","背包"),
      W("flashlight","手电"), W("torch","手电"), W("compass","指南针"), W("map","地图"),
      W("fire","火"), W("matches","火柴"), W("stove","炉子"), W("water","水"),
      W("snack","零食"), W("trail","小路"), W("forest","森林"), W("wildlife","野生动物"),
      W("insect","虫"), W("mosquito","蚊子"), W("hike","徒步"), W("climb","攀爬"),
      W("rope","绳"), W("knife","刀"), W("waterproof","防水"), W("equipment","装备"), W("nature","大自然")
    ],
    sentences: [
      { en: "Let's pitch the tent here.", zh: "我们把帐篷搭这里吧。" },
      { en: "Don't forget the flashlight.", zh: "别忘了手电。" },
      { en: "We hiked for three hours.", zh: "我们徒步了三小时。" },
      { en: "Watch out for mosquitoes.", zh: "小心蚊子。" },
      { en: "I love sleeping in nature.", zh: "我爱在大自然里睡觉。" }
    ]},
  { id: "ket-airport2", name: "KET · 机场入门 Airport",
    words: [
      W("airport","机场"), W("flight","航班"), W("ticket","机票"), W("passport","护照"),
      W("visa","签证"), W("check-in","值机"), W("gate","登机口"), W("boarding","登机"),
      W("luggage","行李"), W("carry-on","随身行李"), W("seat","座位"), W("aisle","过道"),
      W("window","靠窗"), W("pilot","机长"), W("cabin","机舱"), W("crew","机组"),
      W("seatbelt","安全带"), W("takeoff","起飞"), W("landing","降落"), W("delay","延误"),
      W("arrival","到达"), W("departure","出发"), W("terminal","航站楼"), W("customs","海关"), W("baggage-claim","行李提取")
    ],
    sentences: [
      { en: "Could I see your passport?", zh: "请出示护照。" },
      { en: "The flight is delayed an hour.", zh: "航班延误一小时。" },
      { en: "What's the boarding gate?", zh: "登机口在哪？" },
      { en: "I'd prefer a window seat.", zh: "我想要靠窗座位。" },
      { en: "Please fasten your seatbelt.", zh: "请系好安全带。" }
    ]},
  { id: "ket-hotel2", name: "KET · 酒店入住 Hotel Stay",
    words: [
      W("hotel","酒店"), W("room","房间"), W("single","单人间"), W("double","双人间"),
      W("twin","双床房"), W("suite","套房"), W("lobby","大堂"), W("reception","前台"),
      W("key","钥匙"), W("key-card","房卡"), W("luggage","行李"), W("bell","门铃"),
      W("breakfast","早餐"), W("check-in","入住"), W("check-out","退房"), W("reservation","预订"),
      W("view","景色"), W("balcony","阳台"), W("Wi-Fi","Wi-Fi"), W("safe","保险柜"),
      W("towel","毛巾"), W("pillow","枕头"), W("blanket","毛毯"), W("housekeeping","客房服务"), W("amenities","设施")
    ],
    sentences: [
      { en: "I have a reservation under Wang.", zh: "我有以王为名的预订。" },
      { en: "Is breakfast included in the rate?", zh: "房费含早餐吗？" },
      { en: "Could I get a room with a view?", zh: "可以给我有景色的房间吗？" },
      { en: "The Wi-Fi password is on the card.", zh: "Wi-Fi 密码在卡上。" },
      { en: "Could I get extra towels?", zh: "可以多给两条毛巾吗？" }
    ]},
  { id: "ket-internet", name: "KET · 上网 Internet Basics",
    words: [
      W("internet","互联网"), W("Wi-Fi","Wi-Fi"), W("website","网站"), W("browser","浏览器"),
      W("link","链接"), W("download","下载"), W("upload","上传"), W("email","邮件"),
      W("inbox","收件箱"), W("spam","垃圾邮件"), W("attach","附件"), W("send","发送"),
      W("reply","回复"), W("forward","转发"), W("password","密码"), W("username","用户名"),
      W("login","登录"), W("logout","退出"), W("search","搜索"), W("homepage","主页"),
      W("video","视频"), W("photo","照片"), W("file","文件"), W("folder","文件夹"), W("save","保存")
    ],
    sentences: [
      { en: "Click the link to sign up.", zh: "点击链接注册。" },
      { en: "I can't log in to my account.", zh: "我的账号登不上。" },
      { en: "Could you forward me the email?", zh: "可以把邮件转发给我吗？" },
      { en: "Don't open suspicious attachments.", zh: "别打开可疑附件。" },
      { en: "Save the file to your folder.", zh: "把文件存到你的文件夹。" }
    ]},
  { id: "ket-money", name: "KET · 钱币 Money",
    words: [
      W("money","钱"), W("cash","现金"), W("coin","硬币"), W("note","纸币"),
      W("wallet","钱包"), W("purse","小钱包"), W("price","价格"), W("cost","花费"),
      W("save","存"), W("spend","花"), W("buy","买"), W("sell","卖"),
      W("rent","租"), W("borrow","借入"), W("lend","借出"), W("pay","付"),
      W("change","零钱"), W("bill","账单"), W("tip","小费"), W("receipt","小票"),
      W("dollar","美元"), W("pound","英镑"), W("euro","欧元"), W("yuan","人民币"), W("expensive","贵")
    ],
    sentences: [
      { en: "I don't have any cash on me.", zh: "我身上没现金。" },
      { en: "Could I borrow ten dollars?", zh: "能借我十美元吗？" },
      { en: "Keep the change.", zh: "不用找了。" },
      { en: "Save your receipts.", zh: "把小票留好。" },
      { en: "Is the tip included?", zh: "小费包含在内了吗？" }
    ]},
  { id: "ket-art", name: "KET · 美术 Art Class",
    words: [
      W("art","美术"), W("paint","颜料"), W("brush","画笔"), W("canvas","画布"),
      W("pencil","铅笔"), W("crayon","蜡笔"), W("color","颜色"), W("sketch","素描"),
      W("draw","画"), W("paint","上色"), W("create","创造"), W("design","设计"),
      W("paper","纸"), W("scissors","剪刀"), W("glue","胶水"), W("clay","黏土"),
      W("model","模型"), W("display","展示"), W("exhibition","展览"), W("artist","画家"),
      W("portrait","肖像"), W("landscape","风景画"), W("sculpture","雕塑"), W("frame","画框"), W("studio","工作室")
    ],
    sentences: [
      { en: "Let's draw a self-portrait.", zh: "我们画自画像吧。" },
      { en: "She mixed two colors.", zh: "她调了两种颜色。" },
      { en: "Use the scissors carefully.", zh: "用剪刀要小心。" },
      { en: "His painting won an award.", zh: "他的画得了奖。" },
      { en: "Hang the picture on the wall.", zh: "把画挂墙上。" }
    ]},
  { id: "ket-music2", name: "KET · 音乐课 Music Class",
    words: [
      W("note","音符"), W("rhythm","节奏"), W("beat","拍子"), W("tune","曲调"),
      W("song","歌"), W("singer","歌手"), W("chorus","合唱"), W("solo","独唱"),
      W("piano","钢琴"), W("violin","小提琴"), W("flute","长笛"), W("trumpet","小号"),
      W("drum","鼓"), W("guitar","吉他"), W("instrument","乐器"), W("play","演奏"),
      W("listen","听"), W("sing","唱"), W("loud","响"), W("soft","柔"),
      W("high","高"), W("low","低"), W("fast","快"), W("slow","慢"), W("clap","拍手")
    ],
    sentences: [
      { en: "Let's sing together.", zh: "我们一起唱吧。" },
      { en: "Can you play the piano?", zh: "你会弹钢琴吗？" },
      { en: "Clap to the rhythm.", zh: "跟着节奏拍手。" },
      { en: "Sing it louder!", zh: "唱大声点！" },
      { en: "I love this melody.", zh: "我爱这段旋律。" }
    ]},
  { id: "ket-sports2", name: "KET · 运动会 Sports Day",
    words: [
      W("race","比赛"), W("relay","接力"), W("medal","奖牌"), W("trophy","奖杯"),
      W("champion","冠军"), W("runner-up","亚军"), W("team","队"), W("captain","队长"),
      W("track","跑道"), W("field","场地"), W("finish-line","终点"), W("start-line","起点"),
      W("whistle","哨子"), W("referee","裁判"), W("cheer","加油"), W("crowd","人群"),
      W("flag","旗"), W("medal-ceremony","颁奖"), W("warm-up","热身"), W("stretch","拉伸"),
      W("sprint","冲刺"), W("jog","慢跑"), W("jump","跳"), W("throw","投"), W("win","赢")
    ],
    sentences: [
      { en: "Our team won the relay race!", zh: "我们队赢了接力赛！" },
      { en: "Don't forget to warm up.", zh: "别忘了热身。" },
      { en: "He crossed the finish line first.", zh: "他第一个冲过终点。" },
      { en: "Cheer for your classmates.", zh: "为你的同学加油。" },
      { en: "She got the gold medal.", zh: "她拿了金牌。" }
    ]},
  { id: "ket-tools", name: "KET · 工具 Tools",
    words: [
      W("hammer","锤子"), W("nail","钉子"), W("screw","螺丝"), W("screwdriver","螺丝刀"),
      W("saw","锯子"), W("drill","钻"), W("wrench","扳手"), W("pliers","钳子"),
      W("tape-measure","卷尺"), W("ladder","梯子"), W("bucket","水桶"), W("rope","绳"),
      W("paint","油漆"), W("brush","刷子"), W("glue","胶水"), W("scissors","剪刀"),
      W("knife","刀"), W("axe","斧"), W("shovel","铲子"), W("rake","耙子"),
      W("toolbox","工具箱"), W("workshop","工作间"), W("repair","修理"), W("fix","修"), W("build","建造")
    ],
    sentences: [
      { en: "Could you pass me the hammer?", zh: "把锤子递给我。" },
      { en: "I need a screwdriver.", zh: "我需要一把螺丝刀。" },
      { en: "Dad is fixing the shelf.", zh: "爸爸在修架子。" },
      { en: "Be careful with the saw.", zh: "用锯子小心。" },
      { en: "Put the tools back in the toolbox.", zh: "把工具放回工具箱。" }
    ]}
);

/* ============================================================
   PET 词库扩充：第三批新主题
   ============================================================ */
DATA.english_pet.push(
  { id: "pet-leadership", name: "PET · 领导力 Leadership",
    words: [
      W("leadership","领导力"), W("leader","领袖"), W("manager","管理者"), W("decision","决定"),
      W("authority","权威"), W("responsibility","责任"), W("delegate","委派"), W("supervise","监督"),
      W("mentor","导师"), W("coach","教练"), W("vision","愿景"), W("mission","使命"),
      W("inspire","激励"), W("motivate","激发"), W("empower","赋能"), W("team","团队"),
      W("collaborate","协作"), W("strategy","战略"), W("priority","优先级"), W("execute","执行"),
      W("influence","影响力"), W("integrity","正直"), W("accountability","问责"), W("transparency","透明"), W("decisive","果断")
    ],
    sentences: [
      { en: "Good leaders inspire their team.", zh: "优秀的领导者激励团队。" },
      { en: "Delegate tasks effectively.", zh: "有效地分配任务。" },
      { en: "Integrity is the foundation of trust.", zh: "正直是信任的基础。" },
      { en: "She set a clear vision for the team.", zh: "她为团队定下清晰愿景。" },
      { en: "We need to prioritize the project.", zh: "我们需要优先这个项目。" }
    ]},
  { id: "pet-conflict", name: "PET · 冲突解决 Conflict Resolution",
    words: [
      W("conflict","冲突"), W("dispute","争端"), W("disagreement","分歧"), W("tension","紧张"),
      W("compromise","妥协"), W("negotiate","谈判"), W("mediate","调解"), W("resolve","解决"),
      W("apologize","道歉"), W("forgive","原谅"), W("misunderstand","误解"), W("clarify","澄清"),
      W("listen","倾听"), W("acknowledge","承认"), W("validate","认可"), W("perspective","角度"),
      W("agree","同意"), W("compromise","折中"), W("solution","方案"), W("peace","和平"),
      W("aggressive","攻击的"), W("passive","被动的"), W("assertive","果断的"), W("calm","平静"), W("respect","尊重")
    ],
    sentences: [
      { en: "Let's resolve this calmly.", zh: "我们冷静解决吧。" },
      { en: "Could you clarify your point?", zh: "你能澄清下你的观点吗？" },
      { en: "I think there's been a misunderstanding.", zh: "我觉得是有误解。" },
      { en: "We need to find a compromise.", zh: "我们得找个折中。" },
      { en: "Acknowledge their feelings first.", zh: "先承认他们的感受。" }
    ]},
  { id: "pet-globalization", name: "PET · 全球化 Globalization",
    words: [
      W("globalization","全球化"), W("global","全球的"), W("local","本地"), W("multinational","跨国的"),
      W("trade","贸易"), W("export","出口"), W("import","进口"), W("supply-chain","供应链"),
      W("market","市场"), W("economy","经济"), W("culture","文化"), W("diversity","多样性"),
      W("integration","融合"), W("border","边境"), W("immigrant","移民"), W("expatriate","侨民"),
      W("foreign","外国的"), W("language","语言"), W("translation","翻译"), W("currency","货币"),
      W("communication","沟通"), W("cooperation","合作"), W("competition","竞争"), W("influence","影响"), W("connectivity","互联")
    ],
    sentences: [
      { en: "Globalization brings opportunities.", zh: "全球化带来机遇。" },
      { en: "Local economies also matter.", zh: "本地经济同样重要。" },
      { en: "We trade with over 30 countries.", zh: "我们与 30 多个国家贸易。" },
      { en: "Cultural diversity makes us stronger.", zh: "文化多样性让我们更强。" },
      { en: "Supply chains are very complex.", zh: "供应链非常复杂。" }
    ]},
  { id: "pet-ai", name: "PET · AI 与未来 AI & Future",
    words: [
      W("AI","人工智能"), W("algorithm","算法"), W("data","数据"), W("model","模型"),
      W("training","训练"), W("automation","自动化"), W("robot","机器人"), W("machine","机器"),
      W("learning","学习"), W("neural","神经的"), W("network","网络"), W("predict","预测"),
      W("recognize","识别"), W("generate","生成"), W("voice","语音"), W("image","图像"),
      W("translate","翻译"), W("personalize","个性化"), W("recommend","推荐"), W("future","未来"),
      W("innovation","创新"), W("disrupt","颠覆"), W("revolution","革命"), W("ethics","伦理"), W("privacy","隐私")
    ],
    sentences: [
      { en: "AI is changing every industry.", zh: "AI 正在改变每个行业。" },
      { en: "Algorithms learn from data.", zh: "算法从数据中学习。" },
      { en: "Privacy concerns are real.", zh: "隐私问题真实存在。" },
      { en: "Automation will reshape work.", zh: "自动化将重塑工作。" },
      { en: "The future depends on innovation.", zh: "未来取决于创新。" }
    ]},
  { id: "pet-economy", name: "PET · 宏观经济 Economy",
    words: [
      W("economy","经济"), W("inflation","通胀"), W("recession","衰退"), W("growth","增长"),
      W("GDP","国内生产总值"), W("supply","供给"), W("demand","需求"), W("market","市场"),
      W("trade","贸易"), W("tax","税"), W("budget","预算"), W("deficit","赤字"),
      W("surplus","盈余"), W("debt","债务"), W("interest-rate","利率"), W("currency","货币"),
      W("export","出口"), W("import","进口"), W("industry","产业"), W("agriculture","农业"),
      W("service","服务业"), W("employment","就业"), W("unemployment","失业"), W("policy","政策"), W("subsidy","补贴")
    ],
    sentences: [
      { en: "Inflation is rising worldwide.", zh: "通胀在全球上涨。" },
      { en: "The economy is recovering.", zh: "经济正在恢复。" },
      { en: "Interest rates affect everyone.", zh: "利率影响每个人。" },
      { en: "Unemployment dropped this quarter.", zh: "失业率这季度下降。" },
      { en: "Trade policies are under review.", zh: "贸易政策正在审议。" }
    ]},
  { id: "pet-stock", name: "PET · 投资股票 Stocks",
    words: [
      W("stock","股票"), W("share","股份"), W("bond","债券"), W("dividend","分红"),
      W("portfolio","投资组合"), W("invest","投资"), W("trade","交易"), W("broker","经纪人"),
      W("market","市场"), W("bull","牛市"), W("bear","熊市"), W("risk","风险"),
      W("return","回报"), W("yield","收益率"), W("volatile","波动"), W("growth","成长"),
      W("value","价值"), W("blue-chip","蓝筹"), W("index","指数"), W("ETF","ETF"),
      W("dividend","股息"), W("split","拆股"), W("IPO","首发"), W("earnings","盈利"), W("loss","亏损")
    ],
    sentences: [
      { en: "Diversify your portfolio.", zh: "分散你的投资组合。" },
      { en: "The market opened lower today.", zh: "市场今天低开。" },
      { en: "Don't invest more than you can afford.", zh: "不要投超过你能承受的钱。" },
      { en: "Long-term investing usually wins.", zh: "长期投资通常赢。" },
      { en: "The IPO was oversubscribed.", zh: "这次 IPO 被超额认购。" }
    ]},
  { id: "pet-ethics", name: "PET · 商业伦理 Business Ethics",
    words: [
      W("ethics","伦理"), W("integrity","正直"), W("honesty","诚实"), W("fairness","公平"),
      W("responsibility","责任"), W("accountability","问责"), W("transparency","透明"), W("bribery","贿赂"),
      W("corruption","腐败"), W("fraud","欺诈"), W("compliance","合规"), W("regulation","监管"),
      W("policy","政策"), W("code","守则"), W("conduct","行为"), W("standard","标准"),
      W("audit","审计"), W("whistleblower","举报人"), W("disclose","披露"), W("conflict-of-interest","利益冲突"),
      W("respect","尊重"), W("diversity","多元"), W("inclusion","包容"), W("sustainability","可持续性"), W("trust","信任")
    ],
    sentences: [
      { en: "We follow a strict code of conduct.", zh: "我们遵守严格行为守则。" },
      { en: "Transparency builds trust.", zh: "透明建立信任。" },
      { en: "Report any conflict of interest.", zh: "上报任何利益冲突。" },
      { en: "Bribery is never acceptable.", zh: "贿赂绝不可接受。" },
      { en: "We've passed our annual audit.", zh: "我们通过了年度审计。" }
    ]},
  { id: "pet-publicspeak", name: "PET · 公众演讲 Public Speaking",
    words: [
      W("speech","演讲"), W("audience","听众"), W("podium","讲台"), W("microphone","麦克风"),
      W("speaker","演讲者"), W("script","稿子"), W("introduction","开场"), W("conclusion","结尾"),
      W("rehearse","彩排"), W("present","展示"), W("slide","幻灯片"), W("visual","视觉"),
      W("pace","节奏"), W("tone","语气"), W("emphasis","重点"), W("gesture","手势"),
      W("eye-contact","眼神接触"), W("anecdote","轶事"), W("story","故事"), W("statistic","数据"),
      W("persuade","说服"), W("inspire","激励"), W("engage","吸引"), W("confidence","自信"), W("nervous","紧张")
    ],
    sentences: [
      { en: "Make eye contact with the audience.", zh: "和听众保持眼神接触。" },
      { en: "Start with a strong opening.", zh: "用强有力的开头开始。" },
      { en: "Slow down your pace a bit.", zh: "节奏稍微放慢点。" },
      { en: "Use stories to illustrate your points.", zh: "用故事说明你的观点。" },
      { en: "Rehearse in front of a mirror.", zh: "对着镜子彩排。" }
    ]},
  { id: "pet-creativity", name: "PET · 创意思维 Creativity",
    words: [
      W("creativity","创造力"), W("imagination","想象力"), W("idea","点子"), W("inspiration","灵感"),
      W("brainstorm","头脑风暴"), W("innovate","创新"), W("original","原创"), W("unique","独特"),
      W("invent","发明"), W("experiment","实验"), W("explore","探索"), W("curious","好奇"),
      W("perspective","视角"), W("approach","方法"), W("style","风格"), W("flow","心流"),
      W("breakthrough","突破"), W("vision","远见"), W("artistic","艺术的"), W("design","设计"),
      W("compose","创作"), W("craft","手艺"), W("expression","表达"), W("aesthetic","美学"), W("masterpiece","杰作")
    ],
    sentences: [
      { en: "Let's brainstorm new ideas.", zh: "我们头脑风暴出新点子吧。" },
      { en: "Creativity needs space and time.", zh: "创造力需要空间和时间。" },
      { en: "Try a different perspective.", zh: "试试不同的视角。" },
      { en: "Don't fear original ideas.", zh: "不要害怕原创想法。" },
      { en: "Inspiration can come from anywhere.", zh: "灵感可以来自任何地方。" }
    ]},
  { id: "pet-wellbeing", name: "PET · 身心健康 Well-being",
    words: [
      W("wellbeing","身心健康"), W("mental","心理"), W("physical","身体"), W("balance","平衡"),
      W("mindfulness","正念"), W("meditation","冥想"), W("breathe","呼吸"), W("relax","放松"),
      W("stress","压力"), W("anxiety","焦虑"), W("burnout","倦怠"), W("sleep","睡眠"),
      W("rest","休息"), W("nutrition","营养"), W("hydrate","补水"), W("exercise","锻炼"),
      W("posture","姿势"), W("hygiene","卫生"), W("self-care","自我照顾"), W("therapy","治疗"),
      W("journal","日记"), W("gratitude","感恩"), W("connection","联结"), W("nature","自然"), W("habit","习惯")
    ],
    sentences: [
      { en: "Make time for self-care.", zh: "给自我照顾留时间。" },
      { en: "Meditation helps with anxiety.", zh: "冥想有助缓解焦虑。" },
      { en: "Sleep is crucial for recovery.", zh: "睡眠对恢复至关重要。" },
      { en: "Take breaks throughout the day.", zh: "一天中要多休息。" },
      { en: "Journaling helps me reflect.", zh: "写日记帮我反思。" }
    ]},
  { id: "pet-fitness", name: "PET · 健身 Fitness",
    words: [
      W("fitness","健身"), W("workout","锻炼"), W("cardio","有氧"), W("strength","力量"),
      W("flexibility","柔韧"), W("endurance","耐力"), W("muscle","肌肉"), W("calorie","卡路里"),
      W("protein","蛋白质"), W("hydrate","补水"), W("warm-up","热身"), W("stretch","拉伸"),
      W("squat","深蹲"), W("lunge","弓步"), W("push-up","俯卧撑"), W("sit-up","仰卧起坐"),
      W("plank","平板支撑"), W("jog","慢跑"), W("sprint","冲刺"), W("treadmill","跑步机"),
      W("yoga","瑜伽"), W("pilates","普拉提"), W("crossfit","Crossfit"), W("tracker","追踪器"), W("recovery","恢复")
    ],
    sentences: [
      { en: "Don't skip the warm-up.", zh: "别跳过热身。" },
      { en: "Lift with proper form.", zh: "举重要保持正确姿势。" },
      { en: "Cardio is great for the heart.", zh: "有氧对心脏有益。" },
      { en: "I do yoga twice a week.", zh: "我一周做两次瑜伽。" },
      { en: "Recovery days are essential.", zh: "恢复日很重要。" }
    ]},
  { id: "pet-charity", name: "PET · 慈善公益 Charity",
    words: [
      W("charity","慈善"), W("donate","捐赠"), W("volunteer","志愿者"), W("foundation","基金会"),
      W("cause","事业"), W("fundraise","募捐"), W("contribute","贡献"), W("community","社区"),
      W("impact","影响"), W("support","支持"), W("nonprofit","非营利"), W("grant","资助"),
      W("scholarship","奖学金"), W("orphanage","孤儿院"), W("shelter","收容所"), W("refugee","难民"),
      W("welfare","福利"), W("relief","救济"), W("aid","援助"), W("crisis","危机"),
      W("environment","环保"), W("animal","动物"), W("equality","平等"), W("education","教育"), W("health","健康")
    ],
    sentences: [
      { en: "I donate to a children's charity.", zh: "我向儿童慈善机构捐款。" },
      { en: "Every contribution helps.", zh: "每份贡献都有帮助。" },
      { en: "We're raising funds for the shelter.", zh: "我们为收容所募捐。" },
      { en: "Volunteering brings me joy.", zh: "做志愿者让我快乐。" },
      { en: "Small actions can make big impact.", zh: "小行动也能产生大影响。" }
    ]},
  { id: "pet-music2", name: "PET · 音乐与产业 Music Industry",
    words: [
      W("compose","作曲"), W("lyrics","歌词"), W("producer","制作人"), W("studio","录音棚"),
      W("recording","录音"), W("album","专辑"), W("single","单曲"), W("EP","迷你专辑"),
      W("genre","流派"), W("classical","古典"), W("jazz","爵士"), W("pop","流行"),
      W("rock","摇滚"), W("hip-hop","嘻哈"), W("orchestra","管弦乐"), W("choir","合唱"),
      W("conductor","指挥"), W("solo","独奏"), W("duet","二重奏"), W("performance","演出"),
      W("tour","巡演"), W("concert","演唱会"), W("audience","观众"), W("encore","返场"), W("fan","乐迷")
    ],
    sentences: [
      { en: "She composed her first song at 12.", zh: "她 12 岁就写了第一首歌。" },
      { en: "Their album hit number one.", zh: "他们的专辑登顶。" },
      { en: "The concert was electrifying.", zh: "演唱会非常激动人心。" },
      { en: "Jazz is my favorite genre.", zh: "爵士是我最爱的曲风。" },
      { en: "The audience asked for an encore.", zh: "观众喊安可。" }
    ]},
  { id: "pet-event", name: "PET · 活动策划 Event Planning",
    words: [
      W("event","活动"), W("conference","会议"), W("seminar","研讨会"), W("workshop","工作坊"),
      W("exhibition","展览"), W("trade-show","展会"), W("launch","发布"), W("ceremony","仪式"),
      W("agenda","议程"), W("schedule","日程"), W("venue","场地"), W("attendee","参会者"),
      W("speaker","讲者"), W("sponsor","赞助商"), W("budget","预算"), W("logistics","后勤"),
      W("invitation","邀请"), W("registration","报名"), W("badge","徽章"), W("brochure","宣传册"),
      W("breakout","分会场"), W("keynote","主旨"), W("panel","讨论组"), W("networking","社交"), W("feedback","反馈")
    ],
    sentences: [
      { en: "The launch is next Tuesday.", zh: "发布会是下周二。" },
      { en: "We've confirmed the venue.", zh: "我们确认了场地。" },
      { en: "Registration opens tomorrow.", zh: "明天开放报名。" },
      { en: "Don't forget your badge.", zh: "别忘了你的徽章。" },
      { en: "Networking is half the value.", zh: "社交是一半的价值。" }
    ]},
  { id: "pet-sustainable", name: "PET · 可持续 Sustainability",
    words: [
      W("sustainable","可持续"), W("renewable","可再生"), W("recycle","回收"), W("reduce","减少"),
      W("reuse","再用"), W("organic","有机"), W("eco-friendly","环保的"), W("carbon","碳"),
      W("emission","排放"), W("greenhouse","温室"), W("solar","太阳能"), W("wind","风能"),
      W("hydro","水电"), W("biodegradable","可降解"), W("waste","垃圾"), W("plastic","塑料"),
      W("pollution","污染"), W("conservation","保护"), W("habitat","栖息地"), W("biodiversity","生物多样性"),
      W("climate","气候"), W("global-warming","全球变暖"), W("eco-system","生态系统"), W("footprint","足迹"), W("green","绿色")
    ],
    sentences: [
      { en: "Reduce, reuse, recycle.", zh: "减少、再用、回收。" },
      { en: "Solar power is renewable.", zh: "太阳能是可再生的。" },
      { en: "Let's cut our carbon footprint.", zh: "我们减少碳足迹吧。" },
      { en: "Single-use plastic is harmful.", zh: "一次性塑料有害。" },
      { en: "Climate change affects us all.", zh: "气候变化影响每个人。" }
    ]}
);

/* ============================================================
   美国常用口语扩充：第三批新主题
   ============================================================ */
DATA.english_daily.push(
  { id: "us-meeting", name: "💻 远程会议 Online Meeting",
    words: [],
    sentences: [
      { en: "Can you hear me okay?", zh: "你能听到我吗？" },
      { en: "Your mic is muted.", zh: "你的麦克风是静音的。" },
      { en: "I'll share my screen.", zh: "我分享下屏幕。" },
      { en: "Sorry, I lost connection.", zh: "抱歉，我断线了。" },
      { en: "Let's take this offline.", zh: "我们会后再聊。" },
      { en: "Could you repeat that?", zh: "可以再说一遍吗？" },
      { en: "Let's give everyone a chance.", zh: "让每个人都有机会发言。" },
      { en: "Wrapping up in five minutes.", zh: "再过五分钟结束。" },
      { en: "Could someone take notes?", zh: "有人可以做会议记录吗？" },
      { en: "Let's hop on a quick call.", zh: "我们快速通个电话吧。" },
      { en: "I'm muted, give me a sec.", zh: "我静音了，稍等。" },
      { en: "Can you see my slides?", zh: "能看到我的幻灯片吗？" },
      { en: "Let's reconvene tomorrow.", zh: "明天再聚一下吧。" },
      { en: "Thanks for joining.", zh: "感谢大家参加。" }
    ]},
  { id: "us-coworker", name: "🏢 同事 Coworker Chat",
    words: [],
    sentences: [
      { en: "How was your weekend?", zh: "你周末过得怎么样？" },
      { en: "Wanna grab lunch?", zh: "一起吃午饭吗？" },
      { en: "Heading out for coffee, want some?", zh: "我去拿咖啡，要带一杯吗？" },
      { en: "Big deadlines this week?", zh: "这周截止任务多吗？" },
      { en: "How's the project going?", zh: "项目进展怎么样？" },
      { en: "Need a hand with anything?", zh: "需要帮忙吗？" },
      { en: "Let me know if you're stuck.", zh: "卡住了告诉我。" },
      { en: "I'm taking PTO next Monday.", zh: "我下周一休假。" },
      { en: "Did you catch the all-hands?", zh: "你赶上全员会了吗？" },
      { en: "Don't burn out!", zh: "别累垮了！" },
      { en: "Happy Friday!", zh: "周五快乐！" },
      { en: "See you at the standup.", zh: "站会见。" },
      { en: "Could we sync on this later?", zh: "回头我们对一下进度？" },
      { en: "Welcome to the team!", zh: "欢迎加入团队！" }
    ]},
  { id: "us-grocery", name: "🛒 超市 Grocery",
    words: [],
    sentences: [
      { en: "Do you have a list?", zh: "有清单吗？" },
      { en: "Grab a cart.", zh: "推个购物车吧。" },
      { en: "Where are the eggs?", zh: "鸡蛋在哪里？" },
      { en: "Is this on sale?", zh: "这个打折吗？" },
      { en: "Check the expiration date.", zh: "看下保质期。" },
      { en: "Could we get organic?", zh: "买有机的吧？" },
      { en: "Don't forget the bread.", zh: "别忘了买面包。" },
      { en: "Paper or plastic?", zh: "纸袋还是塑料袋？" },
      { en: "Is there a self-checkout?", zh: "有自助结账吗？" },
      { en: "I have a coupon.", zh: "我有优惠券。" },
      { en: "How much per pound?", zh: "每磅多少钱？" },
      { en: "Skip the candy aisle.", zh: "别走糖果区。" },
      { en: "Bag this for me, please.", zh: "请帮我装袋。" },
      { en: "We're out of milk again.", zh: "牛奶又没了。" }
    ]},
  { id: "us-cooking", name: "🍳 做饭 Cooking",
    words: [],
    sentences: [
      { en: "What's for dinner tonight?", zh: "今晚吃什么？" },
      { en: "Could you preheat the oven?", zh: "可以预热烤箱吗？" },
      { en: "Add a pinch of salt.", zh: "加一小撮盐。" },
      { en: "Stir until it thickens.", zh: "搅到变浓稠为止。" },
      { en: "Don't overcook the pasta.", zh: "意面别煮过头。" },
      { en: "Taste before serving.", zh: "上桌前尝一尝。" },
      { en: "Let it simmer for ten minutes.", zh: "小火炖十分钟。" },
      { en: "Could you set the table?", zh: "可以摆桌吗？" },
      { en: "I burned the toast.", zh: "我把吐司烤糊了。" },
      { en: "This recipe is super easy.", zh: "这个食谱超简单。" },
      { en: "Drain the noodles.", zh: "把面控干。" },
      { en: "Dinner's ready!", zh: "晚饭好了！" },
      { en: "Save me a plate.", zh: "给我留一份。" },
      { en: "Let's order takeout instead.", zh: "我们点外卖吧。" }
    ]},
  { id: "us-online-shop", name: "🛒 网购 Online Shopping",
    words: [],
    sentences: [
      { en: "I just placed the order.", zh: "我刚下单。" },
      { en: "When will it arrive?", zh: "什么时候送到？" },
      { en: "Free returns within 30 days.", zh: "30 天内免费退货。" },
      { en: "The size runs small.", zh: "尺码偏小。" },
      { en: "I'll add it to my cart.", zh: "我加到购物车。" },
      { en: "There's a discount code.", zh: "有个折扣码。" },
      { en: "It's on backorder.", zh: "缺货预定。" },
      { en: "Tracking says out for delivery.", zh: "物流显示派送中。" },
      { en: "Could you confirm my address?", zh: "可以确认下我的地址吗？" },
      { en: "Did you read the reviews?", zh: "看评价了吗？" },
      { en: "The package was damaged.", zh: "包裹破损了。" },
      { en: "I want to return this.", zh: "我想退货。" },
      { en: "When does the sale end?", zh: "促销什么时候结束？" },
      { en: "Add gift wrap, please.", zh: "请加礼品包装。" }
    ]},
  { id: "us-zoo", name: "🦁 动物园 Zoo",
    words: [],
    sentences: [
      { en: "Look at the lion over there!", zh: "看那边的狮子！" },
      { en: "The pandas are eating bamboo.", zh: "熊猫在吃竹子。" },
      { en: "Don't tap on the glass.", zh: "别拍玻璃。" },
      { en: "The giraffes are so tall.", zh: "长颈鹿好高。" },
      { en: "When's the seal show?", zh: "海豹表演几点？" },
      { en: "Let's get a map.", zh: "拿张地图吧。" },
      { en: "We should feed the goats.", zh: "我们去喂山羊吧。" },
      { en: "Watch out for the monkeys.", zh: "小心猴子。" },
      { en: "The penguins are adorable.", zh: "企鹅好可爱。" },
      { en: "Could we ride the safari bus?", zh: "可以坐野生动物巴士吗？" },
      { en: "Stay close to me.", zh: "靠我近点。" },
      { en: "Take a selfie with the parrot.", zh: "和鹦鹉自拍一张。" },
      { en: "Time for ice cream!", zh: "该吃冰激凌啦！" },
      { en: "Let's head to the reptile house.", zh: "我们去爬行馆。" }
    ]},
  { id: "us-museum", name: "🏛️ 博物馆 Museum",
    words: [],
    sentences: [
      { en: "Pick up an audio guide.", zh: "拿个语音导览。" },
      { en: "No flash photography, please.", zh: "请勿使用闪光灯拍照。" },
      { en: "This painting is from the 17th century.", zh: "这幅画是 17 世纪的。" },
      { en: "The exhibition closes at 5.", zh: "展览五点闭馆。" },
      { en: "Could I get a map?", zh: "可以给我张地图吗？" },
      { en: "Don't touch the artifacts.", zh: "别碰展品。" },
      { en: "Is there a student discount?", zh: "有学生优惠吗？" },
      { en: "The gift shop is downstairs.", zh: "礼品店在楼下。" },
      { en: "Let's check out the dinosaurs.", zh: "我们去看恐龙吧。" },
      { en: "What's the highlight of the museum?", zh: "博物馆的镇馆之宝是什么？" },
      { en: "Could you take our photo?", zh: "可以帮我们拍张照吗？" },
      { en: "The mummy exhibit is amazing.", zh: "木乃伊展超棒。" },
      { en: "Listen to track 25.", zh: "听一下 25 号导览。" },
      { en: "Let's meet at the entrance.", zh: "我们在入口处见。" }
    ]},
  { id: "us-museum-tour", name: "🗺️ 导游 Tour",
    words: [],
    sentences: [
      { en: "Welcome aboard, everyone.", zh: "欢迎大家上车。" },
      { en: "Please stay with the group.", zh: "请跟紧团队。" },
      { en: "We'll have a 30-minute break here.", zh: "我们在这里休息 30 分钟。" },
      { en: "On your left, you'll see the cathedral.", zh: "在你们左侧能看到大教堂。" },
      { en: "Be back to the bus by 3 PM.", zh: "下午三点回到车上。" },
      { en: "Any questions so far?", zh: "目前有问题吗？" },
      { en: "This is a UNESCO heritage site.", zh: "这是联合国教科文遗产地。" },
      { en: "Feel free to take photos.", zh: "可以随意拍照。" },
      { en: "Please don't lag behind.", zh: "请别掉队。" },
      { en: "Follow me, this way.", zh: "跟我来，这边走。" },
      { en: "Mind your step.", zh: "注意脚下。" },
      { en: "We'll cover three landmarks today.", zh: "我们今天会去三个地标。" },
      { en: "Thanks for the tip!", zh: "感谢您的小费！" },
      { en: "Have a great rest of your trip.", zh: "祝您接下来的旅程愉快。" }
    ]},
  { id: "us-photo", name: "📸 拍照 Photo Time",
    words: [],
    sentences: [
      { en: "Could you take our photo?", zh: "能帮我们拍张照吗？" },
      { en: "Smile and say cheese!", zh: "笑一个，茄子！" },
      { en: "One, two, three!", zh: "一、二、三！" },
      { en: "Can we get one more?", zh: "可以再来一张吗？" },
      { en: "Let's take a selfie.", zh: "我们自拍一张。" },
      { en: "Squeeze in a little.", zh: "靠近一点。" },
      { en: "Look at the camera.", zh: "看镜头。" },
      { en: "Send me that picture.", zh: "把照片发给我。" },
      { en: "The lighting is perfect.", zh: "光线刚好。" },
      { en: "Use portrait mode.", zh: "用人像模式。" },
      { en: "Let's try a different angle.", zh: "换个角度试试。" },
      { en: "Could you edit it for me?", zh: "可以帮我修一下吗？" },
      { en: "I look terrible in this one.", zh: "这张我太丑了。" },
      { en: "Tag me when you post.", zh: "发的时候艾特我。" }
    ]},
  { id: "us-roommate", name: "🏠 室友 Roommates",
    words: [],
    sentences: [
      { en: "Could you keep it down?", zh: "能小声点吗？" },
      { en: "It's your turn to take out the trash.", zh: "轮到你倒垃圾了。" },
      { en: "I'll vacuum tonight.", zh: "今晚我吸尘。" },
      { en: "Could you do the dishes?", zh: "可以洗下碗吗？" },
      { en: "Don't eat my leftovers.", zh: "别吃我的剩饭。" },
      { en: "I'm having friends over tonight.", zh: "我今晚请朋友过来。" },
      { en: "Lock the door before leaving.", zh: "出门锁门。" },
      { en: "The rent is due tomorrow.", zh: "明天交房租。" },
      { en: "Could we split the utilities?", zh: "我们一起分摊水电吗？" },
      { en: "Let's make a chore chart.", zh: "我们做个家务表吧。" },
      { en: "The Wi-Fi password is on the fridge.", zh: "Wi-Fi 密码贴在冰箱上。" },
      { en: "Your shoes are blocking the hallway.", zh: "你的鞋挡走道了。" },
      { en: "I'll restock the toilet paper.", zh: "我补一下卫生纸。" },
      { en: "Let's chip in for groceries.", zh: "买菜钱我们一起出。" }
    ]},
  { id: "us-cleaning", name: "🧹 打扫 Cleaning",
    words: [],
    sentences: [
      { en: "Let's clean the house today.", zh: "我们今天打扫房子吧。" },
      { en: "Could you mop the floor?", zh: "可以拖下地吗？" },
      { en: "Don't forget to dust the shelves.", zh: "别忘了擦架子。" },
      { en: "Wipe down the kitchen counter.", zh: "把厨房台面擦下。" },
      { en: "The bathroom needs scrubbing.", zh: "卫生间得刷一下。" },
      { en: "Could you take out the trash?", zh: "可以把垃圾倒了吗？" },
      { en: "Strip the bed and wash the sheets.", zh: "把床单换下来洗。" },
      { en: "I'll vacuum the rugs.", zh: "我吸下地毯。" },
      { en: "Throw it in the dishwasher.", zh: "扔进洗碗机里。" },
      { en: "Let's tidy up the living room.", zh: "我们收拾下客厅。" },
      { en: "Could you fold the laundry?", zh: "可以叠下衣服吗？" },
      { en: "Dust mites are everywhere.", zh: "尘螨到处都是。" },
      { en: "Use a microfiber cloth.", zh: "用超细纤维布。" },
      { en: "Cleaning is so therapeutic.", zh: "打扫真治愈。" }
    ]},
  { id: "us-feedback", name: "💬 反馈 Giving Feedback",
    words: [],
    sentences: [
      { en: "Could I give you some feedback?", zh: "可以给你点反馈吗？" },
      { en: "I really liked how you handled that.", zh: "我很喜欢你处理那件事的方式。" },
      { en: "One thing to improve is your pacing.", zh: "一个可以改进的地方是节奏。" },
      { en: "What's worked well for you?", zh: "你觉得什么效果不错？" },
      { en: "I have some concerns about timing.", zh: "我对时间有些顾虑。" },
      { en: "Have you considered another approach?", zh: "你考虑过别的方法吗？" },
      { en: "Let's circle back next week.", zh: "下周再讨论吧。" },
      { en: "Thanks for being open to feedback.", zh: "谢谢你开放接受反馈。" },
      { en: "I appreciate the effort.", zh: "我很欣赏你的努力。" },
      { en: "Let's set clearer goals.", zh: "我们设定更清晰的目标。" },
      { en: "Could you walk me through it?", zh: "你能给我讲一遍吗？" },
      { en: "Let me play devil's advocate.", zh: "我唱个反调。" },
      { en: "I'd love to hear your thoughts.", zh: "我想听听你的想法。" },
      { en: "Your hard work is paying off.", zh: "你的努力有回报了。" }
    ]},
  { id: "us-shopping3", name: "🏷️ 砍价 Bargain",
    words: [],
    sentences: [
      { en: "Could you give me a discount?", zh: "可以便宜点吗？" },
      { en: "That's a bit out of my budget.", zh: "这有点超我预算。" },
      { en: "What's your best price?", zh: "你最低能给多少？" },
      { en: "I'll take two if it's cheaper.", zh: "便宜点我买两件。" },
      { en: "Could you throw in a freebie?", zh: "能送点小赠品吗？" },
      { en: "I saw it cheaper online.", zh: "我在网上看到更便宜。" },
      { en: "Is this the final price?", zh: "这是最终价吗？" },
      { en: "Are there any deals today?", zh: "今天有优惠吗？" },
      { en: "Let me think about it.", zh: "让我想想。" },
      { en: "I'll come back later.", zh: "我等会儿再来。" },
      { en: "Could you match the price?", zh: "可以匹配那个价吗？" },
      { en: "Any chance of a bundle deal?", zh: "可以组合优惠吗？" },
      { en: "I'm a regular customer.", zh: "我是老顾客。" },
      { en: "Deal! Pack it up.", zh: "成交！打包吧。" }
    ]},
  { id: "us-roadtrip", name: "🛣️ 公路旅行 Road Trip",
    words: [],
    sentences: [
      { en: "Let's hit the road!", zh: "出发！" },
      { en: "How long is the drive?", zh: "要开多久？" },
      { en: "Did you charge your phone?", zh: "手机充电了吗？" },
      { en: "Music or podcast?", zh: "听音乐还是播客？" },
      { en: "Time for a rest stop.", zh: "该休息一下了。" },
      { en: "We're running on empty.", zh: "油快没了。" },
      { en: "Pull over at the next exit.", zh: "下个出口停一下。" },
      { en: "Are we there yet?", zh: "到了吗？" },
      { en: "I need to stretch my legs.", zh: "我要伸展下腿。" },
      { en: "Snack break, anyone?", zh: "要吃点零食吗？" },
      { en: "The GPS is rerouting.", zh: "导航在重新计算。" },
      { en: "Let's avoid the highway tolls.", zh: "我们避开高速收费。" },
      { en: "Watch out for cops.", zh: "小心警察。" },
      { en: "Road trip vibes are the best.", zh: "公路旅行氛围最好了。" }
    ]},
  { id: "us-grad", name: "🎓 毕业典礼 Graduation",
    words: [],
    sentences: [
      { en: "Congratulations, Class of 2026!", zh: "祝贺 2026 届毕业生！" },
      { en: "Where's the ceremony being held?", zh: "典礼在哪里举行？" },
      { en: "Don't forget your cap and gown.", zh: "别忘了学位帽和袍。" },
      { en: "Move your tassel to the left.", zh: "把流苏拨到左边。" },
      { en: "Throw your cap in the air!", zh: "把学位帽抛起来！" },
      { en: "Where are we taking photos?", zh: "我们在哪拍照？" },
      { en: "I'm so proud of you!", zh: "我为你骄傲！" },
      { en: "What's next for you?", zh: "接下来你打算做什么？" },
      { en: "I got my dream job!", zh: "我拿到理想工作了！" },
      { en: "I'll miss college life.", zh: "我会想念大学生活的。" },
      { en: "Let's keep in touch.", zh: "我们保持联系。" },
      { en: "Have a great after-party!", zh: "庆功宴愉快！" },
      { en: "Thanks for everything, professor.", zh: "教授，感谢您。" },
      { en: "Today's the start of a new chapter.", zh: "今天是新篇章的开始。" }
    ]}
);

/* ============================================================
   KET 词库扩充：第四批（冲刺收尾）
   ============================================================ */
DATA.english_ket.push(
  { id: "ket-subjects", name: "KET · 学科 Subjects",
    words: [
      W("subject","科目"), W("math","数学"), W("English","英语"), W("Chinese","语文"),
      W("history","历史"), W("geography","地理"), W("physics","物理"), W("chemistry","化学"),
      W("biology","生物"), W("PE","体育"), W("art","美术"), W("music","音乐"),
      W("computer","计算机"), W("technology","科技"), W("literature","文学"), W("religion","宗教"),
      W("philosophy","哲学"), W("psychology","心理学"), W("economics","经济学"), W("politics","政治"),
      W("statistics","统计"), W("algebra","代数"), W("geometry","几何"), W("language","语言"), W("science","科学")
    ],
    sentences: [
      { en: "Math is my favorite subject.", zh: "数学是我最爱的科目。" },
      { en: "We have geography on Tuesdays.", zh: "我们周二上地理。" },
      { en: "Biology class is in the lab.", zh: "生物课在实验室上。" },
      { en: "I'm struggling with chemistry.", zh: "我化学有点吃力。" },
      { en: "PE is the last class today.", zh: "今天体育最后一节。" }
    ]},
  { id: "ket-movement", name: "KET · 动作 Movement",
    words: [
      W("move","移动"), W("walk","走"), W("run","跑"), W("jump","跳"),
      W("climb","爬"), W("crawl","爬行"), W("kneel","跪"), W("stand","站"),
      W("sit","坐"), W("lie","躺"), W("turn","转"), W("spin","旋转"),
      W("dance","跳舞"), W("swim","游泳"), W("dive","潜水"), W("ride","骑"),
      W("drive","开车"), W("push","推"), W("pull","拉"), W("lift","举"),
      W("drop","放下"), W("throw","扔"), W("catch","接"), W("kick","踢"), W("step","跨步")
    ],
    sentences: [
      { en: "Please step over here.", zh: "请过来这边。" },
      { en: "Don't run in the hallway.", zh: "走廊里别跑。" },
      { en: "Lift with your legs, not your back.", zh: "用腿发力，不要用背。" },
      { en: "She turned around quickly.", zh: "她迅速转身。" },
      { en: "Catch the ball!", zh: "接球！" }
    ]},
  { id: "ket-clothes2", name: "KET · 服饰补充 Clothes Extra",
    words: [
      W("sweater","毛衣"), W("hoodie","卫衣"), W("blouse","女衬衫"), W("vest","背心"),
      W("shorts","短裤"), W("swimsuit","泳衣"), W("pajamas","睡衣"), W("raincoat","雨衣"),
      W("boots","靴子"), W("sandals","凉鞋"), W("sneakers","运动鞋"), W("slippers","拖鞋"),
      W("tie","领带"), W("bowtie","蝴蝶结"), W("ring","戒指"), W("watch","手表"),
      W("necklace","项链"), W("bracelet","手链"), W("earring","耳环"), W("sunglasses","墨镜"),
      W("umbrella","雨伞"), W("backpack","双肩包"), W("handbag","手提包"), W("wallet","钱包"), W("apron","围裙")
    ],
    sentences: [
      { en: "Put on your raincoat.", zh: "把雨衣穿上。" },
      { en: "I lost my umbrella.", zh: "我把伞弄丢了。" },
      { en: "Her sneakers are brand new.", zh: "她的运动鞋是新的。" },
      { en: "Don't forget your sunglasses.", zh: "别忘了带墨镜。" },
      { en: "Where's my watch?", zh: "我手表在哪？" }
    ]},
  { id: "ket-rooms", name: "KET · 房屋 Rooms",
    words: [
      W("bedroom","卧室"), W("bathroom","浴室"), W("living-room","客厅"), W("kitchen","厨房"),
      W("dining-room","餐厅"), W("study","书房"), W("hallway","走廊"), W("staircase","楼梯"),
      W("balcony","阳台"), W("garage","车库"), W("attic","阁楼"), W("basement","地下室"),
      W("garden","花园"), W("yard","院子"), W("entrance","入口"), W("exit","出口"),
      W("door","门"), W("window","窗"), W("wall","墙"), W("ceiling","天花板"),
      W("floor","地板"), W("roof","屋顶"), W("chimney","烟囱"), W("porch","门廊"), W("driveway","车道")
    ],
    sentences: [
      { en: "Meet me in the living room.", zh: "在客厅见。" },
      { en: "Don't run on the stairs.", zh: "别在楼梯上跑。" },
      { en: "Open the window for fresh air.", zh: "开窗透气。" },
      { en: "There's a spider on the ceiling.", zh: "天花板上有蜘蛛。" },
      { en: "We have a small garden.", zh: "我们有个小花园。" }
    ]},
  { id: "ket-routine2", name: "KET · 日常 Daily Routine 2",
    words: [
      W("brush","刷"), W("comb","梳"), W("shave","刮"), W("wash","洗"),
      W("dress","穿衣"), W("undress","脱衣"), W("tidy","收拾"), W("organize","整理"),
      W("prepare","准备"), W("pack","打包"), W("unpack","拆包"), W("leave","离开"),
      W("arrive","到达"), W("return","返回"), W("commute","通勤"), W("rest","休息"),
      W("nap","小睡"), W("relax","放松"), W("chat","聊天"), W("hang-out","闲逛"),
      W("study","学习"), W("review","复习"), W("revise","复习"), W("practice","练习"), W("plan","计划")
    ],
    sentences: [
      { en: "I usually brush my teeth twice.", zh: "我一般刷两次牙。" },
      { en: "Let's tidy up before bed.", zh: "睡前我们收拾一下。" },
      { en: "I need to pack for the trip.", zh: "我要为旅行打包。" },
      { en: "Time to review my notes.", zh: "该复习笔记了。" },
      { en: "Take a quick nap.", zh: "打个小盹。" }
    ]},
  { id: "ket-feelings2", name: "KET · 情感 2 Emotions",
    words: [
      W("love","爱"), W("hate","恨"), W("like","喜欢"), W("dislike","不喜欢"),
      W("enjoy","享受"), W("prefer","更喜欢"), W("miss","想念"), W("hope","希望"),
      W("dream","梦想"), W("wish","希望"), W("worry","担心"), W("fear","害怕"),
      W("envy","羡慕"), W("admire","钦佩"), W("trust","信任"), W("respect","尊敬"),
      W("forgive","原谅"), W("apologize","道歉"), W("thank","感谢"), W("celebrate","庆祝"),
      W("regret","后悔"), W("grief","悲痛"), W("comfort","安慰"), W("care","关心"), W("share","分享")
    ],
    sentences: [
      { en: "I really miss my grandma.", zh: "我真的很想念奶奶。" },
      { en: "She admires her teacher.", zh: "她钦佩她的老师。" },
      { en: "Trust takes time.", zh: "信任需要时间。" },
      { en: "Please forgive me.", zh: "请原谅我。" },
      { en: "I hope to see you soon.", zh: "希望很快见到你。" }
    ]},
  { id: "ket-hosting", name: "KET · 待客 Hosting",
    words: [
      W("welcome","欢迎"), W("host","主人"), W("guest","客人"), W("visit","拜访"),
      W("invite","邀请"), W("treat","款待"), W("offer","提供"), W("serve","上菜"),
      W("introduce","介绍"), W("greet","问候"), W("seat","就座"), W("chat","闲聊"),
      W("entertain","招待"), W("enjoy","享受"), W("share","分享"), W("toast","祝酒"),
      W("relax","放松"), W("show","参观"), W("tour","游览"), W("snack","小吃"),
      W("drink","饮料"), W("plate","碟"), W("napkin","餐巾"), W("manners","礼仪"), W("polite","礼貌")
    ],
    sentences: [
      { en: "Welcome to my home!", zh: "欢迎来我家！" },
      { en: "Please have a seat.", zh: "请坐。" },
      { en: "Would you like something to drink?", zh: "要喝点什么吗？" },
      { en: "Help yourself to the snacks.", zh: "随便吃点零食。" },
      { en: "Let me show you around.", zh: "我带你参观一下。" }
    ]},
  { id: "ket-direction", name: "KET · 问路 Asking Directions",
    words: [
      W("direction","方向"), W("way","路"), W("path","小路"), W("map","地图"),
      W("turn","转"), W("straight","直走"), W("left","左"), W("right","右"),
      W("cross","穿过"), W("corner","拐角"), W("block","街区"), W("traffic-light","红绿灯"),
      W("crossing","路口"), W("opposite","对面"), W("nearby","附近"), W("close","近"),
      W("far","远"), W("along","沿着"), W("across","横穿"), W("between","之间"),
      W("around","周围"), W("ahead","前方"), W("behind","后面"), W("after","之后"), W("before","之前")
    ],
    sentences: [
      { en: "Excuse me, where's the bank?", zh: "请问银行在哪？" },
      { en: "Go straight for two blocks.", zh: "直走两个街区。" },
      { en: "Turn right at the corner.", zh: "在路口右转。" },
      { en: "It's just across the street.", zh: "就在街对面。" },
      { en: "It's between the post office and the café.", zh: "在邮局和咖啡馆之间。" }
    ]},
  { id: "ket-vacation", name: "KET · 度假 Vacation",
    words: [
      W("vacation","假期"), W("holiday","节假日"), W("trip","行程"), W("tour","游"),
      W("travel","旅行"), W("destination","目的地"), W("beach","海滩"), W("ocean","海洋"),
      W("mountain","山"), W("island","岛屿"), W("countryside","乡村"), W("camping","露营"),
      W("hiking","徒步"), W("sightseeing","观光"), W("souvenir","纪念品"), W("relax","放松"),
      W("sunbathe","日光浴"), W("dive","潜水"), W("surf","冲浪"), W("explore","探索"),
      W("postcard","明信片"), W("brochure","宣传册"), W("guidebook","旅游指南"), W("itinerary","行程"), W("backpack","背包")
    ],
    sentences: [
      { en: "Where are you going on vacation?", zh: "你假期去哪？" },
      { en: "We're going hiking next weekend.", zh: "下周末我们去徒步。" },
      { en: "She bought lots of souvenirs.", zh: "她买了很多纪念品。" },
      { en: "Send me a postcard!", zh: "给我寄张明信片！" },
      { en: "I love beach holidays.", zh: "我喜欢海滩度假。" }
    ]},
  { id: "ket-shopping4", name: "KET · 商店类型 Shop Types",
    words: [
      W("supermarket","超市"), W("bakery","面包房"), W("butcher","肉店"), W("pharmacy","药店"),
      W("bookstore","书店"), W("clothing-store","服装店"), W("shoe-store","鞋店"), W("toy-store","玩具店"),
      W("electronics-store","电器店"), W("hardware","五金店"), W("jeweler","珠宝店"), W("flower-shop","花店"),
      W("grocery","杂货店"), W("convenience-store","便利店"), W("department-store","百货"), W("mall","购物中心"),
      W("market","市场"), W("stall","摊位"), W("boutique","精品店"), W("outlet","奥特莱斯"),
      W("café","咖啡馆"), W("restaurant","餐厅"), W("ice-cream-shop","冰淇淋店"), W("salon","沙龙"), W("barber","理发店")
    ],
    sentences: [
      { en: "Let's stop at the bakery.", zh: "去面包房买点东西吧。" },
      { en: "I need to go to the pharmacy.", zh: "我要去药店。" },
      { en: "The new mall is huge.", zh: "新的购物中心好大。" },
      { en: "There's a great café around the corner.", zh: "拐角处有家不错的咖啡馆。" },
      { en: "The flower shop closes at 7.", zh: "花店七点关门。" }
    ]}
);

/* ============================================================
   PET 词库扩充：第四批
   ============================================================ */
DATA.english_pet.push(
  { id: "pet-journalism", name: "PET · 新闻业 Journalism",
    words: [
      W("journalist","记者"), W("reporter","报道员"), W("editor","编辑"), W("headline","头条"),
      W("article","文章"), W("column","专栏"), W("feature","特写"), W("interview","专访"),
      W("source","消息源"), W("anonymous","匿名"), W("scoop","独家"), W("investigation","调查"),
      W("bias","偏见"), W("objective","客观"), W("subjective","主观"), W("perspective","视角"),
      W("press","新闻界"), W("media","媒体"), W("publication","出版物"), W("circulation","发行量"),
      W("deadline","截稿"), W("byline","署名"), W("op-ed","观点专栏"), W("breaking","突发"), W("censorship","审查")
    ],
    sentences: [
      { en: "She broke the biggest story this year.", zh: "她报道了今年最大的独家。" },
      { en: "Always check your sources.", zh: "永远要核实消息来源。" },
      { en: "The headline grabbed my attention.", zh: "标题抓住了我的注意力。" },
      { en: "Print journalism is changing fast.", zh: "纸媒新闻在快速变化。" },
      { en: "Investigative reporting takes courage.", zh: "调查性报道需要勇气。" }
    ]},
  { id: "pet-broadcasting", name: "PET · 广播电视 Broadcasting",
    words: [
      W("broadcast","广播"), W("channel","频道"), W("network","网络"), W("station","台"),
      W("anchor","主播"), W("host","主持人"), W("guest","嘉宾"), W("live","直播"),
      W("rerun","重播"), W("schedule","节目表"), W("primetime","黄金时段"), W("audience","观众"),
      W("ratings","收视率"), W("commercial","广告"), W("sponsor","赞助商"), W("studio","演播室"),
      W("camera","摄像机"), W("microphone","麦克风"), W("teleprompter","提词器"), W("signal","信号"),
      W("frequency","频率"), W("subscription","订阅"), W("streaming","流媒体"), W("podcast","播客"), W("episode","集")
    ],
    sentences: [
      { en: "The show airs every Sunday.", zh: "这个节目每周日播出。" },
      { en: "He hosts a popular podcast.", zh: "他主持一个热门播客。" },
      { en: "Streaming changed how we watch TV.", zh: "流媒体改变了我们看电视的方式。" },
      { en: "The ratings dropped this season.", zh: "本季收视率下降。" },
      { en: "We're going live in five minutes.", zh: "我们五分钟后直播。" }
    ]},
  { id: "pet-publishing", name: "PET · 出版业 Publishing",
    words: [
      W("publish","出版"), W("publisher","出版商"), W("author","作者"), W("editor","编辑"),
      W("manuscript","手稿"), W("draft","草稿"), W("revision","修订"), W("proofread","校对"),
      W("typesetting","排版"), W("layout","版式"), W("cover","封面"), W("hardcover","精装"),
      W("paperback","平装"), W("ebook","电子书"), W("ISBN","书号"), W("royalty","版税"),
      W("copyright","版权"), W("translation","翻译"), W("rights","版权"), W("bestseller","畅销书"),
      W("review","书评"), W("blurb","推荐语"), W("foreword","前言"), W("acknowledgment","致谢"), W("index","索引")
    ],
    sentences: [
      { en: "Her novel hit the bestseller list.", zh: "她的小说登上畅销榜。" },
      { en: "It's available in hardcover and ebook.", zh: "有精装和电子版。" },
      { en: "He's working on his second draft.", zh: "他在写第二稿。" },
      { en: "Translation rights were sold abroad.", zh: "翻译版权卖到了国外。" },
      { en: "Don't forget the foreword.", zh: "别忘了前言。" }
    ]},
  { id: "pet-realestate", name: "PET · 房地产 Real Estate",
    words: [
      W("property","房产"), W("real-estate","房地产"), W("agent","中介"), W("listing","房源"),
      W("appraisal","评估"), W("mortgage","按揭"), W("loan","贷款"), W("interest","利息"),
      W("downpayment","首付"), W("escrow","托管"), W("title","产权"), W("deed","房契"),
      W("zoning","区划"), W("renovation","翻新"), W("inspection","检查"), W("appliance","电器"),
      W("amenity","便利设施"), W("neighborhood","街区"), W("commute","通勤"), W("urban","市区"),
      W("suburb","郊区"), W("condo","公寓"), W("townhouse","联排"), W("villa","别墅"), W("studio","单间")
    ],
    sentences: [
      { en: "We're touring a few condos this weekend.", zh: "周末我们去看几套公寓。" },
      { en: "What's the asking price?", zh: "要价多少？" },
      { en: "The neighborhood is family-friendly.", zh: "这个街区很适合家庭。" },
      { en: "We made an offer below asking.", zh: "我们出价低于挂牌。" },
      { en: "Renovating doubled the property's value.", zh: "翻新让房产价值翻番。" }
    ]},
  { id: "pet-banking", name: "PET · 银行业务 Banking",
    words: [
      W("bank","银行"), W("teller","柜员"), W("account","账户"), W("checking","活期"),
      W("savings","储蓄"), W("balance","余额"), W("deposit","存款"), W("withdraw","取款"),
      W("transfer","转账"), W("statement","对账单"), W("PIN","密码"), W("ATM","自动取款机"),
      W("debit","借记"), W("credit","信用"), W("loan","贷款"), W("interest","利息"),
      W("rate","利率"), W("overdraft","透支"), W("wire","电汇"), W("check","支票"),
      W("safe","保险柜"), W("vault","金库"), W("bond","债券"), W("CD","定期存单"), W("notary","公证")
    ],
    sentences: [
      { en: "I'd like to open a savings account.", zh: "我想开个储蓄账户。" },
      { en: "What's the current interest rate?", zh: "目前利率是多少？" },
      { en: "Please enter your PIN.", zh: "请输入密码。" },
      { en: "The check should clear in 3 days.", zh: "支票三天后到账。" },
      { en: "Could you wire the funds today?", zh: "今天可以电汇吗？" }
    ]},
  { id: "pet-insurance", name: "PET · 保险 Insurance",
    words: [
      W("insurance","保险"), W("policy","保单"), W("premium","保费"), W("deductible","免赔额"),
      W("claim","索赔"), W("coverage","保障"), W("policyholder","投保人"), W("beneficiary","受益人"),
      W("agent","代理人"), W("broker","经纪"), W("risk","风险"), W("liability","责任"),
      W("life-insurance","寿险"), W("health-insurance","医保"), W("auto","车险"), W("home","家财险"),
      W("travel","旅行险"), W("dental","牙科"), W("vision","视力"), W("pension","养老金"),
      W("renewal","续保"), W("quote","报价"), W("underwrite","承保"), W("fraud","欺诈"), W("settlement","理赔")
    ],
    sentences: [
      { en: "Do you have health insurance?", zh: "你有医保吗？" },
      { en: "I filed a claim yesterday.", zh: "我昨天提交了理赔。" },
      { en: "What's the deductible on this policy?", zh: "这份保单的免赔额是多少？" },
      { en: "Travel insurance is worth it.", zh: "旅行险值得买。" },
      { en: "The premium goes up every year.", zh: "保费每年都涨。" }
    ]},
  { id: "pet-policy", name: "PET · 公共政策 Public Policy",
    words: [
      W("policy","政策"), W("legislation","立法"), W("regulation","法规"), W("reform","改革"),
      W("bill","议案"), W("law","法律"), W("act","法案"), W("amendment","修正案"),
      W("government","政府"), W("congress","国会"), W("parliament","议会"), W("senator","参议员"),
      W("representative","众议员"), W("vote","投票"), W("election","选举"), W("ballot","选票"),
      W("constituent","选民"), W("lobby","游说"), W("advocate","倡导"), W("protest","抗议"),
      W("petition","请愿"), W("campaign","竞选"), W("agenda","议程"), W("transparency","透明"), W("accountability","问责")
    ],
    sentences: [
      { en: "The new bill passed yesterday.", zh: "新法案昨天通过了。" },
      { en: "Tax policy is changing again.", zh: "税收政策又要变了。" },
      { en: "Voters want more transparency.", zh: "选民希望更透明。" },
      { en: "Many citizens signed the petition.", zh: "许多公民签了请愿。" },
      { en: "Lobbying influences legislation.", zh: "游说会影响立法。" }
    ]},
  { id: "pet-diplomacy", name: "PET · 外交 Diplomacy",
    words: [
      W("diplomacy","外交"), W("diplomat","外交官"), W("ambassador","大使"), W("embassy","大使馆"),
      W("consulate","领事馆"), W("treaty","条约"), W("agreement","协议"), W("alliance","联盟"),
      W("summit","峰会"), W("delegation","代表团"), W("negotiate","谈判"), W("mediate","调解"),
      W("sanction","制裁"), W("conflict","冲突"), W("peace","和平"), W("ceasefire","停火"),
      W("border","边界"), W("sovereignty","主权"), W("territory","领土"), W("citizenship","公民身份"),
      W("immigrant","移民"), W("refugee","难民"), W("visa","签证"), W("passport","护照"), W("protocol","礼仪")
    ],
    sentences: [
      { en: "The summit will start next Monday.", zh: "峰会下周一开始。" },
      { en: "Both sides signed the treaty.", zh: "双方签署了条约。" },
      { en: "Sanctions affect the economy.", zh: "制裁影响经济。" },
      { en: "Diplomacy prevents war.", zh: "外交可以避免战争。" },
      { en: "Visa rules are tightening.", zh: "签证规定正在收紧。" }
    ]},
  { id: "pet-digital-marketing", name: "PET · 数字营销 Digital Marketing",
    words: [
      W("digital","数字"), W("marketing","营销"), W("SEO","搜索优化"), W("traffic","流量"),
      W("conversion","转化"), W("funnel","漏斗"), W("landing","落地页"), W("CTR","点击率"),
      W("CPC","单次点击成本"), W("CPM","千次曝光成本"), W("ROI","投资回报"), W("audience","受众"),
      W("targeting","定向"), W("retargeting","再营销"), W("ad","广告"), W("campaign","活动"),
      W("influencer","网红"), W("creator","创作者"), W("content","内容"), W("analytics","数据分析"),
      W("metric","指标"), W("dashboard","看板"), W("tracking","跟踪"), W("attribution","归因"), W("optimization","优化")
    ],
    sentences: [
      { en: "Our SEO efforts are paying off.", zh: "我们的 SEO 努力开始见效。" },
      { en: "The ad campaign exceeded ROI goals.", zh: "广告活动超过了 ROI 目标。" },
      { en: "We need to optimize the landing page.", zh: "我们得优化落地页。" },
      { en: "Conversion rate dropped this week.", zh: "本周转化率下降了。" },
      { en: "Influencer partnerships drive growth.", zh: "网红合作驱动增长。" }
    ]},
  { id: "pet-coding", name: "PET · 编程 Coding",
    words: [
      W("code","代码"), W("program","程序"), W("script","脚本"), W("function","函数"),
      W("variable","变量"), W("loop","循环"), W("array","数组"), W("object","对象"),
      W("class","类"), W("module","模块"), W("library","库"), W("framework","框架"),
      W("compile","编译"), W("debug","调试"), W("syntax","语法"), W("error","错误"),
      W("bug","漏洞"), W("commit","提交"), W("branch","分支"), W("merge","合并"),
      W("pull-request","合入请求"), W("API","接口"), W("server","服务器"), W("client","客户端"), W("database","数据库")
    ],
    sentences: [
      { en: "There's a bug in my code.", zh: "我代码里有 bug。" },
      { en: "Commit your changes first.", zh: "先提交你的更改。" },
      { en: "Open a pull request.", zh: "提个合入请求。" },
      { en: "The API returns JSON.", zh: "这个 API 返回 JSON。" },
      { en: "Run the tests before merging.", zh: "合并前跑下测试。" }
    ]},
  { id: "pet-cybersecurity", name: "PET · 网络安全 Cybersecurity",
    words: [
      W("security","安全"), W("password","密码"), W("encrypt","加密"), W("decrypt","解密"),
      W("firewall","防火墙"), W("malware","恶意软件"), W("virus","病毒"), W("phishing","钓鱼"),
      W("hacker","黑客"), W("breach","泄露"), W("ransomware","勒索软件"), W("VPN","虚拟专网"),
      W("authentication","认证"), W("two-factor","双因素"), W("token","令牌"), W("certificate","证书"),
      W("backup","备份"), W("recovery","恢复"), W("patch","补丁"), W("vulnerability","漏洞"),
      W("threat","威胁"), W("incident","事件"), W("monitoring","监控"), W("audit","审计"), W("privacy","隐私")
    ],
    sentences: [
      { en: "Enable two-factor authentication.", zh: "启用双因素认证。" },
      { en: "Never click on phishing links.", zh: "绝不要点钓鱼链接。" },
      { en: "Always back up your data.", zh: "永远备份你的数据。" },
      { en: "A new patch is available.", zh: "有新补丁了。" },
      { en: "Use strong, unique passwords.", zh: "使用强且唯一的密码。" }
    ]},
  { id: "pet-medicine", name: "PET · 医学 Medicine",
    words: [
      W("medicine","医学"), W("doctor","医生"), W("surgeon","外科医生"), W("nurse","护士"),
      W("patient","病人"), W("diagnosis","诊断"), W("prescription","处方"), W("treatment","治疗"),
      W("symptom","症状"), W("disease","疾病"), W("infection","感染"), W("virus","病毒"),
      W("vaccine","疫苗"), W("immunity","免疫"), W("surgery","手术"), W("hospital","医院"),
      W("clinic","诊所"), W("emergency","急诊"), W("therapy","治疗"), W("recovery","康复"),
      W("anesthesia","麻醉"), W("antibiotic","抗生素"), W("dose","剂量"), W("side-effect","副作用"), W("checkup","体检")
    ],
    sentences: [
      { en: "She made a quick recovery.", zh: "她恢复得很快。" },
      { en: "Did you get your annual checkup?", zh: "做年度体检了吗？" },
      { en: "The vaccine is highly effective.", zh: "这个疫苗非常有效。" },
      { en: "Watch for side effects.", zh: "注意副作用。" },
      { en: "Surgery is scheduled for Monday.", zh: "手术定在周一。" }
    ]}
);

/* ============================================================
   美国常用口语扩充：第四批
   ============================================================ */
DATA.english_daily.push(
  { id: "us-interview", name: "👔 面试 Job Interview",
    words: [],
    sentences: [
      { en: "Tell me about yourself.", zh: "做一下自我介绍。" },
      { en: "What's your biggest strength?", zh: "你最大的优势是什么？" },
      { en: "Why are you interested in this role?", zh: "你为什么对这个岗位感兴趣？" },
      { en: "Where do you see yourself in five years?", zh: "你五年后想做什么？" },
      { en: "Can you describe a challenging project?", zh: "能描述一个挑战性的项目吗？" },
      { en: "What are your salary expectations?", zh: "你的期望薪资是多少？" },
      { en: "Do you have any questions for us?", zh: "你有什么问题想问我们？" },
      { en: "I'm a quick learner.", zh: "我学得很快。" },
      { en: "I work well in teams.", zh: "我适合团队工作。" },
      { en: "Thank you for the opportunity.", zh: "谢谢这次机会。" },
      { en: "When can I expect to hear back?", zh: "我什么时候能得到回复？" },
      { en: "I'm available to start in two weeks.", zh: "我两周后可以入职。" },
      { en: "I'm passionate about this field.", zh: "我对这个领域充满热情。" },
      { en: "Looking forward to next steps.", zh: "期待下一步。" }
    ]},
  { id: "us-newjob", name: "🆕 新工作 New Job",
    words: [],
    sentences: [
      { en: "First day on the job!", zh: "新工作第一天！" },
      { en: "I'm still figuring things out.", zh: "我还在摸索。" },
      { en: "My onboarding is next week.", zh: "我下周入职培训。" },
      { en: "Could you show me the system?", zh: "可以教我系统怎么用吗？" },
      { en: "Who should I reach out to about benefits?", zh: "福利的事问谁？" },
      { en: "I love the company culture.", zh: "我喜欢公司文化。" },
      { en: "Slack is our main tool here.", zh: "我们这里主要用 Slack。" },
      { en: "We use OKRs to track goals.", zh: "我们用 OKR 跟踪目标。" },
      { en: "Let's set up a 1:1 next week.", zh: "下周一对一聊聊。" },
      { en: "Where's the coffee machine?", zh: "咖啡机在哪？" },
      { en: "My manager is super supportive.", zh: "我的经理非常支持我。" },
      { en: "I joined a coding bootcamp.", zh: "我参加了编程训练营。" },
      { en: "Excited for new challenges.", zh: "期待新挑战。" },
      { en: "Settling in nicely.", zh: "适应得不错。" }
    ]},
  { id: "us-rentalcar", name: "🚙 租车 Rental Car",
    words: [],
    sentences: [
      { en: "I'd like to rent a car for three days.", zh: "我想租三天车。" },
      { en: "Do you have any compact cars available?", zh: "有小型车吗？" },
      { en: "Is insurance included?", zh: "包保险吗？" },
      { en: "What's the mileage limit?", zh: "里程限制是多少？" },
      { en: "Where do I return the car?", zh: "在哪还车？" },
      { en: "Could I get an automatic?", zh: "能给我自动挡吗？" },
      { en: "Could you show me how the GPS works?", zh: "能教我用一下导航吗？" },
      { en: "Are there any extra fees?", zh: "有额外费用吗？" },
      { en: "I'll need a child seat.", zh: "我需要儿童座椅。" },
      { en: "What's your fuel policy?", zh: "你们的油费政策是？" },
      { en: "Can I extend the rental?", zh: "可以续租吗？" },
      { en: "I lost the keys, what should I do?", zh: "钥匙丢了怎么办？" },
      { en: "Is there a drop-off after hours?", zh: "下班后可以还车吗？" },
      { en: "Have a great trip!", zh: "祝您旅途愉快！" }
    ]},
  { id: "us-uber", name: "🚕 打车 Rideshare",
    words: [],
    sentences: [
      { en: "I just ordered an Uber.", zh: "我刚叫了 Uber。" },
      { en: "ETA is five minutes.", zh: "预计五分钟到。" },
      { en: "My driver is in a silver Tesla.", zh: "我的司机开银色特斯拉。" },
      { en: "Where are you headed?", zh: "您去哪？" },
      { en: "Could you take the highway?", zh: "可以走高速吗？" },
      { en: "Could you turn up the AC?", zh: "可以开大点空调吗？" },
      { en: "Mind if I plug in my phone?", zh: "可以插下手机吗？" },
      { en: "Could we make a quick stop?", zh: "可以中途停一下吗？" },
      { en: "Thanks for the ride!", zh: "谢谢您送我！" },
      { en: "I'll give you five stars.", zh: "我给你五星好评。" },
      { en: "Could you drop me at the corner?", zh: "可以在拐角放我下来吗？" },
      { en: "Surge pricing again, ugh.", zh: "又涨价了，唉。" },
      { en: "I forgot my bag in the car!", zh: "我把包落车上了！" },
      { en: "Try Lyft if Uber's too pricey.", zh: "Uber 贵就试试 Lyft。" }
    ]},
  { id: "us-beach", name: "🏖️ 海滩 Beach Day",
    words: [],
    sentences: [
      { en: "Let's hit the beach!", zh: "去海滩吧！" },
      { en: "Don't forget the sunscreen.", zh: "别忘了防晒霜。" },
      { en: "The waves look perfect.", zh: "浪刚好。" },
      { en: "I'm gonna catch some sun.", zh: "我去晒下太阳。" },
      { en: "Watch out for jellyfish.", zh: "小心水母。" },
      { en: "Could you grab the umbrella?", zh: "可以拿下遮阳伞吗？" },
      { en: "Let's build a sandcastle.", zh: "我们堆沙堡吧。" },
      { en: "Anybody up for surfing?", zh: "有人想冲浪吗？" },
      { en: "The water's freezing!", zh: "水冷死了！" },
      { en: "Time for a beach picnic.", zh: "海滩野餐时间。" },
      { en: "I got a sunburn.", zh: "我晒伤了。" },
      { en: "Lifeguard's whistle is loud.", zh: "救生员的哨子真响。" },
      { en: "The sunset is gorgeous.", zh: "日落太美了。" },
      { en: "Let's stay till the stars come out.", zh: "我们待到星星出来吧。" }
    ]},
  { id: "us-movie", name: "🎬 看电影 Watching Movies",
    words: [],
    sentences: [
      { en: "What's playing tonight?", zh: "今晚有什么电影？" },
      { en: "Could we get two tickets for the 7 PM show?", zh: "可以买两张七点的票吗？" },
      { en: "I prefer the IMAX version.", zh: "我喜欢看 IMAX 版。" },
      { en: "Want some popcorn?", zh: "要爆米花吗？" },
      { en: "Don't spoil the ending.", zh: "别剧透结尾。" },
      { en: "The trailer looked amazing.", zh: "预告片看着不错。" },
      { en: "I'm a sucker for rom-coms.", zh: "我超爱浪漫喜剧。" },
      { en: "Horror movies aren't my thing.", zh: "恐怖片我不喜欢。" },
      { en: "That plot twist was wild.", zh: "那个反转太牛了。" },
      { en: "Worth watching twice.", zh: "值得二刷。" },
      { en: "Streaming kills the experience.", zh: "流媒体毁掉了体验。" },
      { en: "Let's grab dinner after.", zh: "看完去吃饭吧。" },
      { en: "I cried at the end.", zh: "结尾我哭了。" },
      { en: "Stay for the post-credits scene.", zh: "看完彩蛋再走。" }
    ]},
  { id: "us-streaming", name: "📺 追剧 Streaming",
    words: [],
    sentences: [
      { en: "What are you binge-watching now?", zh: "你最近追什么剧？" },
      { en: "I'm hooked on this series.", zh: "我迷上了这部剧。" },
      { en: "I finished it in one weekend.", zh: "我一个周末看完了。" },
      { en: "The new season just dropped.", zh: "新一季刚上线。" },
      { en: "Netflix has too many options.", zh: "Netflix 选择太多了。" },
      { en: "Could we split a subscription?", zh: "我们一起订阅吧？" },
      { en: "Add it to my watchlist.", zh: "加到我的待看清单。" },
      { en: "The acting is top-notch.", zh: "演技超棒。" },
      { en: "I love a slow-burn drama.", zh: "我喜欢慢热剧。" },
      { en: "Cancelled after one season?", zh: "一季就被砍了？" },
      { en: "It's getting renewed!", zh: "续订了！" },
      { en: "Sub or dub?", zh: "字幕还是配音？" },
      { en: "Let's start a watch party.", zh: "一起线上观影吧。" },
      { en: "The soundtrack is iconic.", zh: "配乐太经典了。" }
    ]},
  { id: "us-music-stream", name: "🎧 音乐 Music",
    words: [],
    sentences: [
      { en: "What's your favorite song right now?", zh: "你最近最爱哪首歌？" },
      { en: "Spotify makes great playlists.", zh: "Spotify 歌单做得很棒。" },
      { en: "I have it on repeat.", zh: "我循环听。" },
      { en: "Have you heard their new album?", zh: "你听了他们的新专辑吗？" },
      { en: "I'm into indie rock lately.", zh: "我最近爱独立摇滚。" },
      { en: "This song is a banger.", zh: "这首歌超带感。" },
      { en: "I love their live performance.", zh: "我喜欢他们的现场。" },
      { en: "Could you share the playlist?", zh: "可以分享歌单吗？" },
      { en: "Vinyl sounds warmer.", zh: "黑胶听着更暖。" },
      { en: "Apple Music has lossless audio.", zh: "Apple Music 有无损音质。" },
      { en: "This artist is underrated.", zh: "这位歌手被低估了。" },
      { en: "Stuck in my head all day.", zh: "整天循环在我脑子里。" },
      { en: "Tickets sold out in minutes.", zh: "票几分钟就售罄。" },
      { en: "Music heals everything.", zh: "音乐能治愈一切。" }
    ]},
  { id: "us-bookclub", name: "📖 读书 Book Club",
    words: [],
    sentences: [
      { en: "What's everyone reading?", zh: "大家在读什么？" },
      { en: "I just finished a great novel.", zh: "我刚读完一本好小说。" },
      { en: "The plot kept me hooked.", zh: "情节让我停不下来。" },
      { en: "I couldn't put it down.", zh: "我放不下手。" },
      { en: "Spoiler alert!", zh: "剧透警告！" },
      { en: "Let's discuss chapter five.", zh: "我们讨论第五章。" },
      { en: "I prefer audiobooks lately.", zh: "我最近更喜欢听书。" },
      { en: "Her writing style is amazing.", zh: "她的写作风格很棒。" },
      { en: "The ending was a bit weak.", zh: "结尾有点弱。" },
      { en: "I'm a slow reader.", zh: "我看书很慢。" },
      { en: "Library hold lists are crazy long.", zh: "图书馆借阅排队很长。" },
      { en: "Highly recommend this memoir.", zh: "强烈推荐这本回忆录。" },
      { en: "Let's pick the next book.", zh: "我们选下一本书。" },
      { en: "Reading before bed helps me sleep.", zh: "睡前读书帮我入睡。" }
    ]},
  { id: "us-petstore", name: "🐾 宠物店 Pet Store",
    words: [],
    sentences: [
      { en: "I need dog food and treats.", zh: "我要狗粮和零食。" },
      { en: "What brand do you recommend?", zh: "你推荐哪个牌子？" },
      { en: "Do you have a grain-free option?", zh: "有无谷物的吗？" },
      { en: "He's a picky eater.", zh: "他挑食。" },
      { en: "Got any cat toys?", zh: "有猫玩具吗？" },
      { en: "How much is the litter?", zh: "猫砂多少钱？" },
      { en: "She just turned six months.", zh: "她刚满六个月。" },
      { en: "Could you trim his nails?", zh: "可以帮他剪指甲吗？" },
      { en: "Looking for a flea collar.", zh: "想找个除蚤项圈。" },
      { en: "Do you do grooming here?", zh: "你们这里有美容服务吗？" },
      { en: "He needs a bigger harness.", zh: "他需要更大的胸背带。" },
      { en: "What temperature do fish like?", zh: "鱼喜欢什么温度？" },
      { en: "Got any adoption events?", zh: "有领养活动吗？" },
      { en: "I love this place.", zh: "我喜欢这家店。" }
    ]},
  { id: "us-amusement", name: "🎢 游乐园 Amusement Park",
    words: [],
    sentences: [
      { en: "Let's hit the roller coaster first.", zh: "先去坐过山车！" },
      { en: "I'm scared of heights.", zh: "我恐高。" },
      { en: "The line is super long.", zh: "队伍超长。" },
      { en: "Get the fast pass.", zh: "买快速通行证。" },
      { en: "I'm gonna grab cotton candy.", zh: "我去买棉花糖。" },
      { en: "Smile for the photo!", zh: "笑一个拍照！" },
      { en: "Hold on tight.", zh: "抓紧了。" },
      { en: "That drop was insane!", zh: "那个俯冲太刺激了！" },
      { en: "I'm getting dizzy.", zh: "我有点晕。" },
      { en: "The kids love the carousel.", zh: "孩子们喜欢旋转木马。" },
      { en: "Where's the lost and found?", zh: "失物招领在哪？" },
      { en: "Let's check the parade schedule.", zh: "看下游行时间表。" },
      { en: "Bring a portable charger.", zh: "带个充电宝。" },
      { en: "My feet are killing me.", zh: "我脚疼死了。" }
    ]},
  { id: "us-feels", name: "😊 表达感受 Expressing Feelings",
    words: [],
    sentences: [
      { en: "I'm having a tough day.", zh: "我今天很难。" },
      { en: "Honestly, I feel overwhelmed.", zh: "说实话，我感到不堪重负。" },
      { en: "I just need a break.", zh: "我需要休息一下。" },
      { en: "I'm so grateful for you.", zh: "我超感激你。" },
      { en: "It's been an emotional week.", zh: "这周情绪起伏挺大。" },
      { en: "I can't shake this feeling.", zh: "我摆脱不了这种感觉。" },
      { en: "Thanks for listening.", zh: "谢谢你的倾听。" },
      { en: "I'm proud of you, really.", zh: "我真的为你骄傲。" },
      { en: "You're doing great.", zh: "你做得很好。" },
      { en: "I felt seen and heard.", zh: "我感到被看见和理解。" },
      { en: "It hurts more than I expected.", zh: "比我想象的还要痛。" },
      { en: "I'm taking it one day at a time.", zh: "我一天一天地走。" },
      { en: "Big hugs, friend.", zh: "抱抱你，朋友。" },
      { en: "We've got this.", zh: "我们能挺过去。" }
    ]},
  { id: "us-quit-job", name: "👋 辞职 Quitting Job",
    words: [],
    sentences: [
      { en: "I'm putting in my two weeks.", zh: "我提交两周辞呈了。" },
      { en: "I accepted another offer.", zh: "我接了另一份工作。" },
      { en: "It's been a great five years.", zh: "这五年很棒。" },
      { en: "Thanks for the opportunity.", zh: "谢谢这次机会。" },
      { en: "I'll help with the transition.", zh: "我会协助交接。" },
      { en: "Let's stay in touch.", zh: "保持联系。" },
      { en: "My last day is the 15th.", zh: "我最后一天是 15 号。" },
      { en: "I'm taking a sabbatical.", zh: "我休个长假。" },
      { en: "Burnout is real.", zh: "倦怠是真的。" },
      { en: "I'm starting my own thing.", zh: "我自己创业。" },
      { en: "Could you write me a recommendation?", zh: "可以给我写推荐信吗？" },
      { en: "I learned a lot here.", zh: "我在这里学到很多。" },
      { en: "It's bittersweet.", zh: "心情很复杂。" },
      { en: "Wish me luck!", zh: "祝我好运！" }
    ]},
  { id: "us-promotion", name: "📈 升职 Promotion",
    words: [],
    sentences: [
      { en: "I just got promoted!", zh: "我升职了！" },
      { en: "Congrats on the new role!", zh: "恭喜新岗位！" },
      { en: "You totally deserved it.", zh: "你完全应得的。" },
      { en: "Bigger title, bigger work.", zh: "头衔更大，工作更多。" },
      { en: "Salary bump is nice too.", zh: "加薪也不错。" },
      { en: "My new team is great.", zh: "我新团队很棒。" },
      { en: "I'll be reporting to her now.", zh: "我现在向她汇报。" },
      { en: "Hope I can grow into this role.", zh: "希望我能成长到这个岗位。" },
      { en: "Let's celebrate this weekend.", zh: "周末庆祝吧。" },
      { en: "Promotion comes with pressure.", zh: "升职伴随压力。" },
      { en: "Trust the process.", zh: "相信过程。" },
      { en: "Onwards and upwards!", zh: "继续向上！" },
      { en: "I had to fight for this.", zh: "我是争取来的。" },
      { en: "Stay humble, stay hungry.", zh: "保持谦逊和饥饿感。" }
    ]},
  { id: "us-weekend", name: "🌴 周末计划 Weekend Plans",
    words: [],
    sentences: [
      { en: "What are you up to this weekend?", zh: "周末有什么计划？" },
      { en: "Just chilling at home.", zh: "就在家放松。" },
      { en: "We're going camping.", zh: "我们去露营。" },
      { en: "Wanna brunch on Sunday?", zh: "周日去吃早午餐吗？" },
      { en: "I'm catching up on sleep.", zh: "我要补觉。" },
      { en: "Friend's birthday party tonight.", zh: "今晚朋友生日派对。" },
      { en: "Just running errands.", zh: "就办点琐事。" },
      { en: "Heading to the farmer's market.", zh: "我去逛农夫市集。" },
      { en: "Movie marathon weekend.", zh: "电影马拉松周末。" },
      { en: "Visiting my parents.", zh: "去看父母。" },
      { en: "Going hiking with friends.", zh: "和朋友去徒步。" },
      { en: "Weather looks great.", zh: "天气看上去不错。" },
      { en: "Open to suggestions.", zh: "欢迎建议。" },
      { en: "TGIF, finally!", zh: "终于周五啦！" }
    ]}
);

/* ============================================================
   PET 词库扩充：第五批
   ============================================================ */
DATA.english_pet.push(
  { id: "pet-aviation", name: "PET · 航空业 Aviation",
    words: [
      W("aviation","航空"), W("aircraft","飞机"), W("airline","航空公司"), W("pilot","飞行员"),
      W("copilot","副驾驶"), W("crew","机组"), W("cabin","客舱"), W("cockpit","驾驶舱"),
      W("control-tower","塔台"), W("runway","跑道"), W("turbulence","湍流"), W("altitude","海拔"),
      W("flight-attendant","空乘"), W("hangar","机库"), W("fuselage","机身"), W("propeller","螺旋桨"),
      W("jet","喷气式"), W("helicopter","直升机"), W("drone","无人机"), W("clearance","放行"),
      W("squawk","应答机"), W("autopilot","自动驾驶"), W("descent","下降"), W("approach","进近"), W("touchdown","着陆")
    ],
    sentences: [
      { en: "Please remain seated during turbulence.", zh: "颠簸时请保持就座。" },
      { en: "Cabin crew, prepare for takeoff.", zh: "客舱机组准备起飞。" },
      { en: "We're cruising at 35,000 feet.", zh: "我们巡航在 35000 英尺。" },
      { en: "The pilot announced our descent.", zh: "机长宣布下降。" },
      { en: "Thanks for flying with us.", zh: "感谢您选择我们的航班。" }
    ]},
  { id: "pet-shipping", name: "PET · 物流航运 Shipping",
    words: [
      W("shipping","航运"), W("freight","货运"), W("cargo","货物"), W("container","集装箱"),
      W("vessel","船只"), W("port","港口"), W("dock","码头"), W("harbor","港"),
      W("anchor","锚"), W("captain","船长"), W("voyage","航行"), W("crew","船员"),
      W("logistics","物流"), W("warehouse","仓库"), W("distribution","分销"), W("delivery","送达"),
      W("tracking","跟踪"), W("customs","海关"), W("import","进口"), W("export","出口"),
      W("invoice","发票"), W("manifest","清单"), W("pallet","托盘"), W("bill-of-lading","提单"), W("supplier","供应商")
    ],
    sentences: [
      { en: "The container ship arrives Friday.", zh: "集装箱船周五到港。" },
      { en: "Tracking shows it's in customs.", zh: "跟踪显示在海关。" },
      { en: "Logistics costs are climbing.", zh: "物流成本在上涨。" },
      { en: "The warehouse is fully stocked.", zh: "仓库已满库。" },
      { en: "Delivery is delayed by weather.", zh: "因天气延误送达。" }
    ]},
  { id: "pet-manufacturing", name: "PET · 制造业 Manufacturing",
    words: [
      W("manufacture","制造"), W("factory","工厂"), W("assembly","装配"), W("production","生产"),
      W("automation","自动化"), W("robot","机器人"), W("conveyor","传送带"), W("quality","质量"),
      W("inspection","检验"), W("defect","缺陷"), W("raw-material","原料"), W("component","部件"),
      W("supplier","供应商"), W("inventory","库存"), W("plant","车间"), W("foreman","工头"),
      W("worker","工人"), W("shift","班次"), W("output","产出"), W("efficiency","效率"),
      W("safety","安全"), W("equipment","设备"), W("blueprint","蓝图"), W("prototype","样品"), W("standard","标准")
    ],
    sentences: [
      { en: "Automation increased our output.", zh: "自动化提升了产出。" },
      { en: "Every piece passes quality inspection.", zh: "每件都经过质检。" },
      { en: "The night shift is short-staffed.", zh: "夜班人手不足。" },
      { en: "We sourced new components.", zh: "我们采购了新部件。" },
      { en: "Safety standards are strict.", zh: "安全标准很严格。" }
    ]},
  { id: "pet-agriculture", name: "PET · 农业 Agriculture",
    words: [
      W("agriculture","农业"), W("farm","农场"), W("crop","作物"), W("harvest","丰收"),
      W("plough","犁"), W("seed","种子"), W("soil","土壤"), W("fertilizer","肥料"),
      W("pesticide","农药"), W("irrigate","灌溉"), W("greenhouse","温室"), W("organic","有机"),
      W("livestock","牲畜"), W("dairy","乳制品"), W("poultry","家禽"), W("barn","谷仓"),
      W("tractor","拖拉机"), W("yield","产量"), W("rotation","轮作"), W("pest","害虫"),
      W("drought","干旱"), W("flood","洪水"), W("rural","乡村的"), W("subsidy","补贴"), W("co-op","合作社")
    ],
    sentences: [
      { en: "This year's harvest was abundant.", zh: "今年丰收。" },
      { en: "We rotate crops every season.", zh: "我们每季轮作。" },
      { en: "Drought hurt our yields.", zh: "干旱影响了产量。" },
      { en: "Organic farming is growing.", zh: "有机农业在发展。" },
      { en: "The barn needs repair.", zh: "谷仓需要修理。" }
    ]},
  { id: "pet-energy", name: "PET · 能源 Energy",
    words: [
      W("energy","能源"), W("electricity","电"), W("power","电力"), W("grid","电网"),
      W("solar","太阳能"), W("wind","风能"), W("nuclear","核能"), W("hydro","水能"),
      W("coal","煤"), W("oil","石油"), W("gas","天然气"), W("petroleum","石油"),
      W("battery","电池"), W("storage","储能"), W("renewable","可再生"), W("efficient","高效"),
      W("emission","排放"), W("carbon","碳"), W("biofuel","生物燃料"), W("turbine","涡轮"),
      W("plant","电厂"), W("transformer","变压器"), W("voltage","电压"), W("watt","瓦"), W("kilowatt","千瓦")
    ],
    sentences: [
      { en: "Solar panels save us money.", zh: "太阳能板帮我们省钱。" },
      { en: "The grid is under heavy load.", zh: "电网负荷很重。" },
      { en: "Wind farms power thousands of homes.", zh: "风电场为数千家庭供电。" },
      { en: "Cut your energy consumption.", zh: "减少能源消耗。" },
      { en: "Electric vehicles are the future.", zh: "电动车是未来。" }
    ]},
  { id: "pet-construction", name: "PET · 建筑施工 Construction",
    words: [
      W("construction","施工"), W("site","工地"), W("crane","起重机"), W("scaffolding","脚手架"),
      W("concrete","混凝土"), W("brick","砖"), W("steel","钢"), W("wood","木材"),
      W("cement","水泥"), W("foundation","地基"), W("beam","梁"), W("column","柱"),
      W("roof","屋顶"), W("wall","墙"), W("ceiling","天花板"), W("floor","楼层"),
      W("blueprint","蓝图"), W("engineer","工程师"), W("architect","建筑师"), W("contractor","承包商"),
      W("helmet","安全帽"), W("permit","许可"), W("inspection","验收"), W("renovation","翻修"), W("demolition","拆除")
    ],
    sentences: [
      { en: "Hard hats are required on site.", zh: "工地必须戴安全帽。" },
      { en: "Pouring concrete starts Monday.", zh: "周一开始浇混凝土。" },
      { en: "The crane lifts heavy beams.", zh: "起重机吊重梁。" },
      { en: "We're behind schedule.", zh: "我们工期延后了。" },
      { en: "Final inspection passes today.", zh: "今天通过最终验收。" }
    ]},
  { id: "pet-mining", name: "PET · 采矿 Mining",
    words: [
      W("mining","采矿"), W("mine","矿"), W("miner","矿工"), W("ore","矿石"),
      W("coal","煤"), W("iron","铁"), W("gold","金"), W("silver","银"),
      W("copper","铜"), W("diamond","钻石"), W("quarry","采石场"), W("shaft","竖井"),
      W("tunnel","隧道"), W("extract","开采"), W("smelt","冶炼"), W("refine","提炼"),
      W("dust","粉尘"), W("ventilation","通风"), W("explosion","爆炸"), W("safety","安全"),
      W("helmet","头盔"), W("excavator","挖掘机"), W("drill","钻机"), W("mineral","矿物"), W("seam","矿层")
    ],
    sentences: [
      { en: "Coal mining is heavily regulated.", zh: "煤矿开采受到严格监管。" },
      { en: "Miners wear safety gear.", zh: "矿工穿戴安全装备。" },
      { en: "They struck gold last year.", zh: "他们去年发现了金矿。" },
      { en: "Ventilation is critical underground.", zh: "通风在井下至关重要。" },
      { en: "Extracted ore is sent to smelters.", zh: "开采的矿石运到冶炼厂。" }
    ]},
  { id: "pet-textile", name: "PET · 纺织 Textile",
    words: [
      W("textile","纺织"), W("fabric","布料"), W("cloth","布"), W("cotton","棉"),
      W("wool","羊毛"), W("silk","丝绸"), W("linen","亚麻"), W("polyester","涤纶"),
      W("yarn","纱"), W("thread","线"), W("loom","织机"), W("weave","编织"),
      W("knit","针织"), W("dye","染色"), W("pattern","图案"), W("embroidery","刺绣"),
      W("stitch","缝"), W("seam","接缝"), W("hem","下摆"), W("tailor","裁缝"),
      W("garment","衣物"), W("fiber","纤维"), W("mill","纺织厂"), W("synthetic","合成的"), W("natural","天然的")
    ],
    sentences: [
      { en: "Silk feels smooth on the skin.", zh: "丝绸贴肤光滑。" },
      { en: "She weaves traditional patterns.", zh: "她编织传统图案。" },
      { en: "Cotton is breathable.", zh: "棉布透气。" },
      { en: "The mill produces tons of fabric.", zh: "纺织厂日产大量布料。" },
      { en: "Natural fibers are eco-friendly.", zh: "天然纤维环保。" }
    ]},
  { id: "pet-fishery", name: "PET · 渔业 Fishery",
    words: [
      W("fishery","渔业"), W("fishing","捕鱼"), W("net","渔网"), W("rod","钓竿"),
      W("bait","鱼饵"), W("boat","渔船"), W("trawler","拖网渔船"), W("catch","捕获"),
      W("ocean","海洋"), W("sea","海"), W("river","河"), W("lake","湖"),
      W("salmon","三文鱼"), W("tuna","金枪鱼"), W("shrimp","虾"), W("crab","蟹"),
      W("lobster","龙虾"), W("squid","鱿鱼"), W("seafood","海鲜"), W("aquaculture","水产养殖"),
      W("harbor","港"), W("port","港口"), W("season","季节"), W("quota","配额"), W("license","执照")
    ],
    sentences: [
      { en: "Tuna fishing season just started.", zh: "金枪鱼捕季刚开始。" },
      { en: "Sustainable fishing is essential.", zh: "可持续捕捞至关重要。" },
      { en: "We bought fresh salmon today.", zh: "我们今天买了新鲜三文鱼。" },
      { en: "Quotas protect fish populations.", zh: "配额保护鱼群。" },
      { en: "Aquaculture is growing globally.", zh: "水产养殖在全球增长。" }
    ]},
  { id: "pet-mentalhealth", name: "PET · 心理健康 Mental Health",
    words: [
      W("mental-health","心理健康"), W("therapy","治疗"), W("counseling","咨询"), W("therapist","治疗师"),
      W("psychologist","心理学家"), W("psychiatrist","精神科医生"), W("depression","抑郁"), W("anxiety","焦虑"),
      W("trauma","创伤"), W("PTSD","创伤后应激"), W("phobia","恐惧症"), W("panic","恐慌"),
      W("stress","压力"), W("burnout","倦怠"), W("coping","应对"), W("healing","治愈"),
      W("medication","药物"), W("session","疗程"), W("support-group","互助小组"), W("hotline","热线"),
      W("self-care","自我照顾"), W("mindfulness","正念"), W("resilience","韧性"), W("stigma","污名"), W("recovery","康复")
    ],
    sentences: [
      { en: "Therapy changed my life.", zh: "治疗改变了我的生活。" },
      { en: "It's okay to ask for help.", zh: "求助没关系。" },
      { en: "Self-care isn't selfish.", zh: "自我照顾不是自私。" },
      { en: "Mindfulness reduces stress.", zh: "正念能减压。" },
      { en: "Recovery is non-linear.", zh: "康复不是线性的。" }
    ]},
  { id: "pet-dentistry", name: "PET · 牙科 Dentistry",
    words: [
      W("dentist","牙医"), W("dental","牙科"), W("tooth","牙齿"), W("gum","牙龈"),
      W("cavity","蛀牙"), W("filling","补牙"), W("crown","牙冠"), W("brace","牙套"),
      W("braces","矫正器"), W("floss","牙线"), W("toothbrush","牙刷"), W("toothpaste","牙膏"),
      W("checkup","检查"), W("cleaning","洁牙"), W("X-ray","X 光"), W("anesthesia","麻醉"),
      W("extraction","拔牙"), W("root-canal","根管"), W("implant","种植"), W("whitening","美白"),
      W("hygiene","卫生"), W("plaque","牙垢"), W("tartar","牙石"), W("mouthwash","漱口水"), W("retainer","保持器")
    ],
    sentences: [
      { en: "Floss every day.", zh: "每天用牙线。" },
      { en: "I have a dental checkup tomorrow.", zh: "我明天看牙。" },
      { en: "The filling didn't hurt at all.", zh: "补牙完全不疼。" },
      { en: "Brush for two full minutes.", zh: "刷牙刷满两分钟。" },
      { en: "Teeth whitening is popular now.", zh: "牙齿美白现在很流行。" }
    ]},
  { id: "pet-veterinary", name: "PET · 兽医 Veterinary",
    words: [
      W("vet","兽医"), W("veterinarian","兽医师"), W("animal","动物"), W("clinic","诊所"),
      W("checkup","检查"), W("vaccine","疫苗"), W("rabies","狂犬病"), W("flea","跳蚤"),
      W("tick","蜱"), W("deworm","驱虫"), W("neuter","绝育"), W("spay","绝育（母）"),
      W("microchip","芯片"), W("surgery","手术"), W("dental","牙科"), W("grooming","美容"),
      W("diet","饮食"), W("nutrition","营养"), W("breed","品种"), W("rescue","救助"),
      W("shelter","收容所"), W("adoption","领养"), W("therapy-animal","治疗动物"), W("emergency","急诊"), W("euthanasia","安乐死")
    ],
    sentences: [
      { en: "My dog needs his shots.", zh: "我的狗要打疫苗。" },
      { en: "We adopted from a shelter.", zh: "我们从收容所领养的。" },
      { en: "Annual checkups keep pets healthy.", zh: "年度检查能让宠物保持健康。" },
      { en: "He needs to be neutered soon.", zh: "他得尽快做绝育。" },
      { en: "Microchipping helps reunite lost pets.", zh: "植入芯片帮助找回走失宠物。" }
    ]},
  { id: "pet-publichealth", name: "PET · 公共卫生 Public Health",
    words: [
      W("public-health","公共卫生"), W("disease","疾病"), W("epidemic","流行"), W("pandemic","大流行"),
      W("outbreak","暴发"), W("infection","感染"), W("contagious","传染"), W("quarantine","隔离"),
      W("vaccine","疫苗"), W("immunity","免疫"), W("hygiene","卫生"), W("sanitation","卫生设施"),
      W("water-supply","供水"), W("sewer","下水道"), W("nutrition","营养"), W("malnutrition","营养不良"),
      W("mortality","死亡率"), W("morbidity","发病率"), W("WHO","世卫"), W("surveillance","监测"),
      W("prevention","预防"), W("screening","筛查"), W("policy","政策"), W("awareness","意识"), W("intervention","干预")
    ],
    sentences: [
      { en: "Wash hands to prevent disease.", zh: "勤洗手预防疾病。" },
      { en: "Vaccines save countless lives.", zh: "疫苗拯救了无数生命。" },
      { en: "WHO tracks global outbreaks.", zh: "世卫组织追踪全球疫情。" },
      { en: "Early screening saves lives.", zh: "早期筛查可救命。" },
      { en: "Clean water is essential.", zh: "清洁水至关重要。" }
    ]},
  { id: "pet-logistics", name: "PET · 物流仓储 Logistics",
    words: [
      W("logistics","物流"), W("supply-chain","供应链"), W("warehouse","仓库"), W("inventory","库存"),
      W("stock","存货"), W("pallet","托盘"), W("forklift","叉车"), W("loading-dock","装卸口"),
      W("distribution","分销"), W("fulfillment","履约"), W("packaging","包装"), W("label","标签"),
      W("barcode","条码"), W("scan","扫描"), W("tracking","跟踪"), W("route","路线"),
      W("courier","快递"), W("last-mile","最后一公里"), W("delivery","送达"), W("freight","货运"),
      W("hub","枢纽"), W("cold-chain","冷链"), W("reverse-logistics","逆向物流"), W("dispatch","调度"), W("operator","操作员")
    ],
    sentences: [
      { en: "The package is at the hub.", zh: "包裹在分拣中心。" },
      { en: "Cold chain matters for pharma.", zh: "冷链对药品很重要。" },
      { en: "Last-mile delivery is expensive.", zh: "最后一公里很贵。" },
      { en: "Inventory turns predict cash flow.", zh: "库存周转预示现金流。" },
      { en: "Scan the barcode at pickup.", zh: "取件时扫条码。" }
    ]},
  { id: "pet-forestry", name: "PET · 林业 Forestry",
    words: [
      W("forestry","林业"), W("forest","森林"), W("tree","树"), W("timber","木材"),
      W("lumber","原木"), W("log","原木"), W("plantation","种植园"), W("conservation","保护"),
      W("biodiversity","生物多样性"), W("wildlife","野生生物"), W("deforestation","砍伐"), W("reforestation","重新造林"),
      W("habitat","栖息地"), W("canopy","林冠"), W("sapling","树苗"), W("seedling","幼苗"),
      W("wildfire","野火"), W("ranger","护林员"), W("logging","伐木"), W("nursery","苗圃"),
      W("sustainable","可持续"), W("ecosystem","生态"), W("carbon-sink","碳汇"), W("watershed","水域"), W("erosion","侵蚀")
    ],
    sentences: [
      { en: "Deforestation hurts biodiversity.", zh: "砍伐损害生物多样性。" },
      { en: "We planted 500 saplings.", zh: "我们种了 500 株树苗。" },
      { en: "Wildfires destroyed thousands of acres.", zh: "野火烧毁数千英亩。" },
      { en: "Forests are huge carbon sinks.", zh: "森林是巨大的碳汇。" },
      { en: "Sustainable logging matters.", zh: "可持续伐木很重要。" }
    ]},
  { id: "pet-water", name: "PET · 水资源 Water",
    words: [
      W("water","水"), W("supply","供应"), W("reservoir","水库"), W("dam","水坝"),
      W("pipeline","管道"), W("treatment","处理"), W("purification","净化"), W("contamination","污染"),
      W("filtration","过滤"), W("desalination","海水淡化"), W("irrigation","灌溉"), W("drought","干旱"),
      W("flood","洪水"), W("conservation","节约"), W("aquifer","含水层"), W("watershed","流域"),
      W("groundwater","地下水"), W("recycle","循环"), W("sewer","污水"), W("wastewater","废水"),
      W("rainwater","雨水"), W("tap","水龙头"), W("bottle","瓶"), W("hydrate","补水"), W("scarcity","短缺")
    ],
    sentences: [
      { en: "Drink eight cups of water daily.", zh: "每天喝八杯水。" },
      { en: "Tap water is safe here.", zh: "这里自来水可以喝。" },
      { en: "Drought caused water scarcity.", zh: "干旱导致水资源短缺。" },
      { en: "We installed a filter.", zh: "我们装了过滤器。" },
      { en: "Wastewater is treated and reused.", zh: "废水经过处理可再利用。" }
    ]},
  { id: "pet-aerospace", name: "PET · 航天 Aerospace",
    words: [
      W("aerospace","航天"), W("rocket","火箭"), W("satellite","卫星"), W("orbit","轨道"),
      W("space","太空"), W("astronaut","宇航员"), W("spacecraft","航天器"), W("payload","载荷"),
      W("launch","发射"), W("countdown","倒计时"), W("liftoff","升空"), W("reentry","再入"),
      W("module","舱"), W("station","空间站"), W("telescope","望远镜"), W("probe","探测器"),
      W("lunar","月球"), W("Mars","火星"), W("planet","行星"), W("galaxy","星系"),
      W("solar-system","太阳系"), W("gravity","重力"), W("propulsion","推进"), W("mission","任务"), W("exploration","探索")
    ],
    sentences: [
      { en: "The launch was a success.", zh: "发射成功。" },
      { en: "Astronauts trained for years.", zh: "宇航员训练多年。" },
      { en: "Mars missions are ambitious.", zh: "火星任务雄心勃勃。" },
      { en: "Satellites circle the Earth daily.", zh: "卫星每天绕地球运行。" },
      { en: "Space exploration inspires us.", zh: "太空探索鼓舞人心。" }
    ]},
  { id: "pet-pharma", name: "PET · 制药 Pharmaceuticals",
    words: [
      W("pharmacy","药房"), W("pharmaceutical","制药"), W("medicine","药物"), W("drug","药"),
      W("prescription","处方"), W("dosage","剂量"), W("tablet","药片"), W("capsule","胶囊"),
      W("syrup","糖浆"), W("injection","注射"), W("vaccine","疫苗"), W("clinical-trial","临床试验"),
      W("FDA","FDA"), W("approval","批准"), W("side-effect","副作用"), W("contraindication","禁忌"),
      W("generic","仿制药"), W("brand-name","品牌药"), W("formula","配方"), W("manufacturer","制造商"),
      W("research","研究"), W("development","开发"), W("patent","专利"), W("over-the-counter","非处方"), W("antibiotic","抗生素")
    ],
    sentences: [
      { en: "The drug passed clinical trials.", zh: "该药通过了临床试验。" },
      { en: "Generic versions are cheaper.", zh: "仿制药更便宜。" },
      { en: "FDA approval can take years.", zh: "FDA 批准可能要数年。" },
      { en: "Watch out for side effects.", zh: "注意副作用。" },
      { en: "Take the full prescription.", zh: "按疗程吃药。" }
    ]},
  { id: "pet-civicengage", name: "PET · 公民参与 Civic Engagement",
    words: [
      W("civic","公民的"), W("engagement","参与"), W("citizen","公民"), W("community","社区"),
      W("volunteer","志愿"), W("campaign","活动"), W("petition","请愿"), W("vote","投票"),
      W("election","选举"), W("registration","登记"), W("ballot","选票"), W("polling","投票"),
      W("activism","行动主义"), W("protest","抗议"), W("rally","集会"), W("march","游行"),
      W("advocate","倡导"), W("nonprofit","非营利"), W("council","委员会"), W("hearing","听证"),
      W("townhall","市政厅会议"), W("policy","政策"), W("public","公众"), W("agency","机构"), W("transparency","透明")
    ],
    sentences: [
      { en: "Register to vote today.", zh: "今天就登记投票。" },
      { en: "Attend the next town hall.", zh: "参加下次市民会议。" },
      { en: "Sign the online petition.", zh: "上网签请愿书。" },
      { en: "Volunteers make change happen.", zh: "志愿者推动改变。" },
      { en: "Transparency builds public trust.", zh: "透明建立公众信任。" }
    ]},
  { id: "pet-software", name: "PET · 软件工程 Software Engineering",
    words: [
      W("software","软件"), W("engineering","工程"), W("application","应用"), W("system","系统"),
      W("architecture","架构"), W("design","设计"), W("requirement","需求"), W("specification","规格"),
      W("documentation","文档"), W("version","版本"), W("release","发布"), W("rollback","回滚"),
      W("test","测试"), W("debug","调试"), W("unit-test","单元测试"), W("integration","集成"),
      W("deployment","部署"), W("CI/CD","持续集成部署"), W("repository","仓库"), W("git","Git"),
      W("agile","敏捷"), W("scrum","Scrum"), W("sprint","冲刺"), W("standup","站会"), W("retrospective","复盘")
    ],
    sentences: [
      { en: "We deploy multiple times a day.", zh: "我们一天部署多次。" },
      { en: "Write unit tests first.", zh: "先写单元测试。" },
      { en: "Roll back if it breaks production.", zh: "影响生产就回滚。" },
      { en: "Sprint planning is on Monday.", zh: "冲刺规划在周一。" },
      { en: "Document your APIs clearly.", zh: "清楚地记录你的 API。" }
    ]}
);

/* ============================================================
   美国常用口语扩充：第五批
   ============================================================ */
DATA.english_daily.push(
  { id: "us-thanksgiving", name: "🦃 感恩节 Thanksgiving",
    words: [],
    sentences: [
      { en: "Happy Thanksgiving!", zh: "感恩节快乐！" },
      { en: "Who's cooking the turkey?", zh: "谁来烤火鸡？" },
      { en: "Don't forget the cranberry sauce.", zh: "别忘了蔓越莓酱。" },
      { en: "I'm thankful for my family.", zh: "我感激我的家人。" },
      { en: "Pass the gravy, please.", zh: "请把肉汁递给我。" },
      { en: "Pumpkin pie or pecan?", zh: "南瓜派还是山核桃派？" },
      { en: "Let's go around and share what we're grateful for.", zh: "我们轮流分享感激什么。" },
      { en: "I ate way too much.", zh: "我吃太多了。" },
      { en: "Watching the parade is tradition.", zh: "看游行是传统。" },
      { en: "Football after dinner!", zh: "晚饭后看橄榄球！" },
      { en: "The leftovers are the best part.", zh: "剩饭才是最棒的。" },
      { en: "Don't forget to nap.", zh: "别忘了睡个午觉。" },
      { en: "Black Friday shopping tomorrow?", zh: "明天要去黑五购物吗？" },
      { en: "I'm in a food coma.", zh: "我被饭撑昏了。" }
    ]},
  { id: "us-christmas", name: "🎄 圣诞节 Christmas",
    words: [],
    sentences: [
      { en: "Merry Christmas!", zh: "圣诞快乐！" },
      { en: "Have you finished your shopping?", zh: "你购物完了吗？" },
      { en: "Time to trim the tree.", zh: "该装饰圣诞树了。" },
      { en: "I love the smell of pine.", zh: "我喜欢松木的味道。" },
      { en: "Did Santa stop by?", zh: "圣诞老人来过了吗？" },
      { en: "Cookies and milk for Santa.", zh: "给圣诞老人留饼干和牛奶。" },
      { en: "Stockings are hung by the fireplace.", zh: "袜子挂在壁炉边。" },
      { en: "What's on your wish list?", zh: "你的愿望清单是什么？" },
      { en: "Don't peek at the gifts!", zh: "别偷看礼物！" },
      { en: "Let's watch a holiday movie.", zh: "我们看部圣诞电影吧。" },
      { en: "Caroling tonight?", zh: "今晚去唱颂歌？" },
      { en: "Happy holidays everyone!", zh: "祝大家节日快乐！" },
      { en: "Mistletoe is hanging in the doorway.", zh: "门廊挂了槲寄生。" },
      { en: "Sending you warm holiday wishes.", zh: "送上温暖的节日祝福。" }
    ]},
  { id: "us-newyear", name: "🎆 新年 New Year",
    words: [],
    sentences: [
      { en: "Happy New Year!", zh: "新年快乐！" },
      { en: "What's your resolution?", zh: "你的新年决心是什么？" },
      { en: "Three, two, one... cheers!", zh: "三、二、一，干杯！" },
      { en: "Times Square ball drop is iconic.", zh: "时代广场水晶球太经典了。" },
      { en: "I'm hosting a New Year's Eve party.", zh: "我办跨年派对。" },
      { en: "Out with the old, in with the new.", zh: "辞旧迎新。" },
      { en: "Fireworks at midnight!", zh: "午夜放烟花！" },
      { en: "Set goals for the year ahead.", zh: "为新年设目标。" },
      { en: "I'm joining a gym this year.", zh: "今年我要去健身房。" },
      { en: "Champagne toast at midnight.", zh: "午夜香槟干杯。" },
      { en: "New year, new me!", zh: "新年新我！" },
      { en: "Let's reflect on the past year.", zh: "回顾下过去一年。" },
      { en: "Cheers to fresh starts.", zh: "为崭新开始干杯。" },
      { en: "Wishing you health and happiness.", zh: "祝你健康快乐。" }
    ]},
  { id: "us-halloween", name: "🎃 万圣节 Halloween",
    words: [],
    sentences: [
      { en: "Trick or treat!", zh: "不给糖就捣蛋！" },
      { en: "Cool costume!", zh: "服装好酷！" },
      { en: "What are you dressing up as?", zh: "你扮成什么？" },
      { en: "Don't forget the candy.", zh: "别忘了准备糖果。" },
      { en: "Let's carve pumpkins.", zh: "我们雕南瓜灯吧。" },
      { en: "The haunted house was so scary!", zh: "鬼屋太吓人了！" },
      { en: "Spooky season is here.", zh: "鬼节季来了。" },
      { en: "Got any horror movie recs?", zh: "有恐怖片推荐吗？" },
      { en: "Watch out for spiderwebs!", zh: "小心蜘蛛网！" },
      { en: "I'm going as a witch.", zh: "我要扮巫婆。" },
      { en: "Don't eat all the candy at once.", zh: "别一次吃光糖果。" },
      { en: "Costume party tonight?", zh: "今晚有化装舞会吗？" },
      { en: "That makeup is incredible.", zh: "那个妆容太赞了。" },
      { en: "Happy Halloween!", zh: "万圣节快乐！" }
    ]},
  { id: "us-easter", name: "🐰 复活节 Easter",
    words: [],
    sentences: [
      { en: "Happy Easter!", zh: "复活节快乐！" },
      { en: "Time for the egg hunt.", zh: "找彩蛋的时间到了。" },
      { en: "The kids love coloring eggs.", zh: "孩子们爱给鸡蛋上色。" },
      { en: "Watch out for chocolate bunnies.", zh: "小心巧克力兔。" },
      { en: "We're hosting Easter brunch.", zh: "我们办复活节早午餐。" },
      { en: "Ham or lamb for dinner?", zh: "晚餐火腿还是羊排？" },
      { en: "Easter baskets are filled.", zh: "复活节篮子装满了。" },
      { en: "Dress nicely for church.", zh: "穿正式点去教堂。" },
      { en: "Spring is in the air.", zh: "春意盎然。" },
      { en: "The Easter Bunny came!", zh: "复活节兔来了！" },
      { en: "We dyed eggs with the kids.", zh: "我们和孩子们染了彩蛋。" },
      { en: "Don't melt those chocolates.", zh: "别让巧克力融化了。" },
      { en: "Lily season has begun.", zh: "百合花季开始了。" },
      { en: "Hope you have a blessed Easter.", zh: "愿你度过祝福满满的复活节。" }
    ]},
  { id: "us-superbowl", name: "🏈 超级碗 Super Bowl",
    words: [],
    sentences: [
      { en: "Super Bowl Sunday!", zh: "超级碗星期日！" },
      { en: "Who are you rooting for?", zh: "你支持哪个队？" },
      { en: "The halftime show is must-watch.", zh: "中场秀必看。" },
      { en: "Pass the chips and dip.", zh: "把薯片和蘸酱递给我。" },
      { en: "I love the commercials.", zh: "我喜欢看广告。" },
      { en: "Are you doing a squares pool?", zh: "你买方格赌局吗？" },
      { en: "What a touchdown!", zh: "好一个达阵！" },
      { en: "The Chiefs are on fire.", zh: "酋长队火力全开。" },
      { en: "Wing platter is empty already.", zh: "鸡翅拼盘已经空了。" },
      { en: "Beer me!", zh: "递杯啤酒！" },
      { en: "Overtime, oh boy.", zh: "加时，天哪。" },
      { en: "MVP nailed it.", zh: "MVP 太厉害了。" },
      { en: "What a finish!", zh: "结尾太精彩！" },
      { en: "Already counting down to next year.", zh: "已经在倒计时明年了。" }
    ]},
  { id: "us-baseball", name: "⚾ 棒球 Baseball",
    words: [],
    sentences: [
      { en: "Take me out to the ball game.", zh: "带我去看球赛。" },
      { en: "Home run!", zh: "全垒打！" },
      { en: "Strike three, you're out.", zh: "三振出局。" },
      { en: "The Yankees are up.", zh: "洋基队上场。" },
      { en: "Hot dogs and Cracker Jacks.", zh: "热狗和糖花生。" },
      { en: "Bottom of the ninth!", zh: "第九局下半！" },
      { en: "He stole second base.", zh: "他盗上二垒。" },
      { en: "What a curveball.", zh: "好一个曲球。" },
      { en: "Let's hope for extra innings.", zh: "希望进入延长局。" },
      { en: "Catch flies, kid.", zh: "孩子，接高飞球。" },
      { en: "The pitcher is on fire.", zh: "投手状态火热。" },
      { en: "Rain delay, ugh.", zh: "雨停比赛，唉。" },
      { en: "Pinch hitter coming in.", zh: "替补打者上场。" },
      { en: "World Series here we come!", zh: "我们要进世界大赛！" }
    ]},
  { id: "us-yoga", name: "🧘 瑜伽 Yoga",
    words: [],
    sentences: [
      { en: "Roll out your mat.", zh: "铺开你的瑜伽垫。" },
      { en: "Inhale, exhale.", zh: "吸气，呼气。" },
      { en: "Hold the pose for five breaths.", zh: "保持姿势五个呼吸。" },
      { en: "Find your center.", zh: "找到你的中心。" },
      { en: "Let go of tension.", zh: "释放紧张。" },
      { en: "Downward dog, please.", zh: "下犬式。" },
      { en: "Stretch through your fingertips.", zh: "指尖延展。" },
      { en: "Engage your core.", zh: "收紧核心。" },
      { en: "Drop into child's pose.", zh: "进入婴儿式。" },
      { en: "Namaste.", zh: "合十致敬。" },
      { en: "I felt so light after class.", zh: "课后感觉很轻盈。" },
      { en: "Yoga is great for stress.", zh: "瑜伽很适合缓解压力。" },
      { en: "My hip flexors are tight.", zh: "我髋部很紧。" },
      { en: "See you on the mat.", zh: "瑜伽垫上见。" }
    ]},
  { id: "us-fitness2", name: "💪 健身课 Fitness Class",
    words: [],
    sentences: [
      { en: "Let's get sweaty!", zh: "我们出汗吧！" },
      { en: "Pick up the heavier weights.", zh: "拿重一点的哑铃。" },
      { en: "Five more reps!", zh: "再做五个！" },
      { en: "Watch your form.", zh: "注意姿势。" },
      { en: "Don't forget to breathe.", zh: "别忘了呼吸。" },
      { en: "Drink water between sets.", zh: "组间喝水。" },
      { en: "Push yourself but stay safe.", zh: "用力但要安全。" },
      { en: "Great energy in the room.", zh: "这里能量满满。" },
      { en: "Cool down with stretching.", zh: "拉伸放松。" },
      { en: "Hit the showers!", zh: "去冲澡吧！" },
      { en: "I'm dead but I love it.", zh: "我累趴下了但我爱这个。" },
      { en: "Same time tomorrow?", zh: "明天同一时间见？" },
      { en: "Track your progress.", zh: "记录你的进度。" },
      { en: "Consistency is key.", zh: "贵在坚持。" }
    ]},
  { id: "us-skiing", name: "🎿 滑雪 Skiing",
    words: [],
    sentences: [
      { en: "Fresh powder today!", zh: "今天有新粉雪！" },
      { en: "Let's hit the slopes.", zh: "上雪道吧！" },
      { en: "Did you rent gear?", zh: "你租装备了吗？" },
      { en: "Watch out for ice.", zh: "小心冰面。" },
      { en: "I'm a beginner.", zh: "我是初学者。" },
      { en: "Take the green run first.", zh: "先走绿道。" },
      { en: "The chairlift is so cold.", zh: "缆椅好冷。" },
      { en: "I had a wipeout.", zh: "我摔了个大跟头。" },
      { en: "Let's grab cocoa at the lodge.", zh: "回旅馆喝热可可。" },
      { en: "The view from the top is amazing.", zh: "山顶视野超棒。" },
      { en: "Snowboarding looks fun too.", zh: "滑单板看着也好玩。" },
      { en: "Bundle up, it's freezing.", zh: "穿厚点，冻死了。" },
      { en: "I broke my pole.", zh: "我把雪杖弄断了。" },
      { en: "Last run of the day!", zh: "今天最后一趟！" }
    ]},
  { id: "us-cycling", name: "🚴 骑行 Cycling",
    words: [],
    sentences: [
      { en: "Let's go for a ride.", zh: "我们去骑车吧。" },
      { en: "Don't forget your helmet.", zh: "别忘了戴头盔。" },
      { en: "I need to pump my tires.", zh: "我要给轮胎打气。" },
      { en: "The trail is gorgeous.", zh: "这条骑行道很美。" },
      { en: "Mind the cars on this stretch.", zh: "这段路注意车。" },
      { en: "Use the bike lane.", zh: "走自行车道。" },
      { en: "My legs are burning.", zh: "我腿酸了。" },
      { en: "Pedal harder up the hill.", zh: "上坡用力蹬。" },
      { en: "Coast down the other side.", zh: "下坡惯性滑下去。" },
      { en: "Let's grab water at the top.", zh: "山顶买点水。" },
      { en: "I clocked 20 miles today.", zh: "我今天骑了 20 英里。" },
      { en: "Time for a flat fix.", zh: "该补胎了。" },
      { en: "Cyclists, single file please.", zh: "骑车的请排单列。" },
      { en: "Best workout ever.", zh: "最好的锻炼。" }
    ]},
  { id: "us-hiking", name: "🥾 徒步 Hiking",
    words: [],
    sentences: [
      { en: "Lace up your boots.", zh: "系好你的靴子。" },
      { en: "Bring plenty of water.", zh: "带足够的水。" },
      { en: "How long is the trail?", zh: "这条道有多长？" },
      { en: "Watch for bears.", zh: "小心熊。" },
      { en: "The view at the summit is killer.", zh: "山顶视野绝了。" },
      { en: "Pack out what you pack in.", zh: "带进来的都带走。" },
      { en: "Take a snack break.", zh: "歇一会儿吃零食。" },
      { en: "I'm low-key tired already.", zh: "我已经有点累了。" },
      { en: "The waterfall is just ahead.", zh: "瀑布就在前面。" },
      { en: "Easy, easy down the steep part.", zh: "陡的地方慢慢下。" },
      { en: "Did you see the deer?", zh: "你看到鹿了吗？" },
      { en: "Trail mix is the perfect fuel.", zh: "什锦零食是完美补给。" },
      { en: "Let's catch sunrise next time.", zh: "下次看日出。" },
      { en: "That was an epic hike.", zh: "这次徒步太棒了。" }
    ]},
  { id: "us-fishing", name: "🎣 钓鱼 Fishing",
    words: [],
    sentences: [
      { en: "Early bird catches the fish.", zh: "早起的人有鱼钓。" },
      { en: "What bait are you using?", zh: "你用什么饵？" },
      { en: "Cast a little further out.", zh: "把饵抛远点。" },
      { en: "Got a bite!", zh: "有鱼上钩！" },
      { en: "Reel it in slowly.", zh: "慢慢收线。" },
      { en: "Catch and release.", zh: "钓获放生。" },
      { en: "It's a big one!", zh: "好大一条！" },
      { en: "Did you get a fishing license?", zh: "你办钓鱼证了吗？" },
      { en: "Bring the cooler for fish.", zh: "带冰桶装鱼。" },
      { en: "Fly fishing takes patience.", zh: "飞蝇钓需要耐心。" },
      { en: "I lost my favorite lure.", zh: "我最喜欢的拟饵丢了。" },
      { en: "Quiet, you'll scare the fish.", zh: "小声点，会吓跑鱼。" },
      { en: "Fish on!", zh: "有鱼了！" },
      { en: "Tight lines, my friend.", zh: "祝你钓好鱼，朋友。" }
    ]},
  { id: "us-stargazing", name: "🌌 观星 Stargazing",
    words: [],
    sentences: [
      { en: "What a clear sky tonight.", zh: "今晚天好晴朗。" },
      { en: "I can see the Milky Way.", zh: "我能看见银河。" },
      { en: "Wish on a shooting star.", zh: "对着流星许愿。" },
      { en: "Where's the North Star?", zh: "北极星在哪？" },
      { en: "That's Orion's belt.", zh: "那是猎户座腰带。" },
      { en: "Pass me the telescope.", zh: "把望远镜递给我。" },
      { en: "Light pollution ruins it.", zh: "光污染毁了观星。" },
      { en: "Let's check the meteor shower schedule.", zh: "看下流星雨时间表。" },
      { en: "Saturn looks amazing tonight.", zh: "今晚土星太美了。" },
      { en: "Bring a blanket, it's chilly.", zh: "带条毯子，有点冷。" },
      { en: "The moon is so bright.", zh: "月亮好亮。" },
      { en: "I downloaded a stargazing app.", zh: "我下了观星 App。" },
      { en: "Space is humbling.", zh: "宇宙让人渺小。" },
      { en: "Best view I've ever had.", zh: "我见过最美的星空。" }
    ]},
  { id: "us-volunteer", name: "🤝 志愿服务 Volunteering",
    words: [],
    sentences: [
      { en: "I'd love to volunteer.", zh: "我想做志愿者。" },
      { en: "What hours work for you?", zh: "你什么时间方便？" },
      { en: "Sign up at the front desk.", zh: "在前台报名。" },
      { en: "Wear something comfortable.", zh: "穿舒服一点。" },
      { en: "Bring a water bottle.", zh: "带个水瓶。" },
      { en: "We'll sort donations today.", zh: "我们今天整理捐赠。" },
      { en: "Thanks for showing up.", zh: "谢谢你来。" },
      { en: "Take a break whenever you need.", zh: "随时可以休息。" },
      { en: "The shelter really appreciates it.", zh: "收容所非常感激。" },
      { en: "Every hour counts.", zh: "每一小时都有意义。" },
      { en: "Could you help with the food bank?", zh: "能帮食物银行吗？" },
      { en: "We hand out meals on Saturdays.", zh: "我们周六派发餐食。" },
      { en: "Volunteering is rewarding.", zh: "做志愿者很有意义。" },
      { en: "See you next weekend!", zh: "下周末见！" }
    ]},
  { id: "us-fundraise", name: "💸 募捐 Fundraising",
    words: [],
    sentences: [
      { en: "We're raising money for the school.", zh: "我们在为学校募捐。" },
      { en: "Could you donate online?", zh: "可以网上捐款吗？" },
      { en: "Every little bit helps.", zh: "一点点都有帮助。" },
      { en: "Our goal is $5,000.", zh: "我们目标 5000 美元。" },
      { en: "We're halfway there.", zh: "我们已经过半。" },
      { en: "Share the link with friends.", zh: "把链接分享给朋友。" },
      { en: "Tax-deductible receipts available.", zh: "可开抵税收据。" },
      { en: "Sponsor a walker.", zh: "赞助一位步行者。" },
      { en: "We hit our goal!", zh: "目标达成！" },
      { en: "Thank you for your generosity.", zh: "感谢您的慷慨。" },
      { en: "Match donations double the impact.", zh: "配捐让影响翻倍。" },
      { en: "We'd love your matching gift.", zh: "希望您能配捐。" },
      { en: "The auction starts at 7 PM.", zh: "拍卖晚上七点开始。" },
      { en: "Bid generously!", zh: "请慷慨竞拍！" }
    ]}
);

/* ============================================================
   PET 词库扩充：第六批
   ============================================================ */
DATA.english_pet.push(
  { id: "pet-busi-comm", name: "PET · 商务沟通 Business Comm",
    words: [
      W("communication","沟通"), W("memo","备忘"), W("email","邮件"), W("CC","抄送"),
      W("BCC","密送"), W("subject-line","主题"), W("attachment","附件"), W("reply","回复"),
      W("forward","转发"), W("follow-up","跟进"), W("escalate","升级"), W("loop-in","纳入"),
      W("circle-back","回头"), W("update","更新"), W("status","状态"), W("clarify","澄清"),
      W("confirm","确认"), W("acknowledge","确认收到"), W("decline","拒绝"), W("accept","接受"),
      W("decline-politely","委婉拒绝"), W("schedule","安排"), W("reschedule","改期"), W("postpone","推迟"), W("cancel","取消")
    ],
    sentences: [
      { en: "Looping you in on this thread.", zh: "把你拉入这个邮件线。" },
      { en: "Could you confirm by EOD?", zh: "今天下班前确认下？" },
      { en: "Let's circle back next week.", zh: "下周再讨论。" },
      { en: "Please find the attachment.", zh: "请查收附件。" },
      { en: "Following up on my last email.", zh: "跟进一下我之前的邮件。" }
    ]},
  { id: "pet-presskills", name: "PET · 演示技巧 Presentation",
    words: [
      W("present","展示"), W("slide","幻灯片"), W("deck","幻灯片集"), W("opening","开场"),
      W("agenda","议程"), W("outline","大纲"), W("transition","过渡"), W("highlight","重点"),
      W("data","数据"), W("chart","图表"), W("graph","曲线"), W("infographic","信息图"),
      W("anecdote","小故事"), W("case-study","案例"), W("takeaway","要点"), W("Q&A","问答"),
      W("pause","停顿"), W("emphasis","强调"), W("pace","节奏"), W("gesture","手势"),
      W("eye-contact","目光接触"), W("rehearse","彩排"), W("notes","备注"), W("backup","备份"), W("wrap-up","收尾")
    ],
    sentences: [
      { en: "Open with a strong hook.", zh: "用一个有力的开场。" },
      { en: "Keep slides simple.", zh: "幻灯片保持简洁。" },
      { en: "Maintain eye contact with the room.", zh: "与全场保持目光接触。" },
      { en: "Save questions for the end.", zh: "问题留到最后。" },
      { en: "Always rehearse out loud.", zh: "一定要朗读彩排。" }
    ]},
  { id: "pet-time-mgmt", name: "PET · 时间管理 Time Management",
    words: [
      W("priority","优先"), W("urgent","紧急"), W("important","重要"), W("deadline","截止"),
      W("schedule","日程"), W("calendar","日历"), W("plan","计划"), W("organize","整理"),
      W("focus","专注"), W("distract","分心"), W("multitask","多任务"), W("delegate","委派"),
      W("batch","批量"), W("block","时间块"), W("review","复盘"), W("reflect","反思"),
      W("efficient","高效"), W("productive","高产"), W("procrastinate","拖延"), W("pomodoro","番茄钟"),
      W("buffer","缓冲"), W("estimate","估算"), W("milestone","里程碑"), W("balance","平衡"), W("habit","习惯")
    ],
    sentences: [
      { en: "Block focus time on your calendar.", zh: "在日历上预留专注时间。" },
      { en: "Delegate what you can.", zh: "能委派就委派。" },
      { en: "Beat procrastination today.", zh: "今天就打败拖延症。" },
      { en: "Build buffers between meetings.", zh: "会议之间留缓冲。" },
      { en: "Reflect on your week.", zh: "回顾你的一周。" }
    ]},
  { id: "pet-eq", name: "PET · 情商 EQ",
    words: [
      W("EQ","情商"), W("empathy","共情"), W("self-awareness","自我觉察"), W("self-regulation","自我调节"),
      W("motivation","动力"), W("social-skill","社交技能"), W("compassion","同情"), W("listening","倾听"),
      W("nonverbal","非言语"), W("body-language","肢体语言"), W("tone","语气"), W("validate","认可"),
      W("reflect","反映"), W("acknowledge","承认"), W("reframe","重构"), W("trigger","触发"),
      W("response","回应"), W("react","反应"), W("self-control","自控"), W("patience","耐心"),
      W("perspective","视角"), W("connection","连接"), W("respect","尊重"), W("trust","信任"), W("vulnerability","脆弱")
    ],
    sentences: [
      { en: "High EQ matters more than IQ.", zh: "情商比智商更重要。" },
      { en: "Listen with empathy first.", zh: "先共情倾听。" },
      { en: "Pause before reacting.", zh: "回应之前先停顿。" },
      { en: "Acknowledge their feelings.", zh: "认可他们的感受。" },
      { en: "Trust takes vulnerability.", zh: "信任需要袒露。" }
    ]},
  { id: "pet-team", name: "PET · 团队动态 Team Dynamics",
    words: [
      W("team","团队"), W("dynamics","动态"), W("roles","角色"), W("collaboration","协作"),
      W("cohesion","凝聚"), W("trust","信任"), W("transparency","透明"), W("alignment","对齐"),
      W("autonomy","自主"), W("ownership","主人翁"), W("accountability","问责"), W("psychological-safety","心理安全"),
      W("brainstorm","头脑风暴"), W("retrospective","复盘"), W("standup","站会"), W("one-on-one","一对一"),
      W("feedback","反馈"), W("recognition","认可"), W("celebration","庆祝"), W("conflict","冲突"),
      W("mediation","调解"), W("diversity","多元"), W("inclusion","包容"), W("synergy","协同"), W("morale","士气")
    ],
    sentences: [
      { en: "Psychological safety unlocks creativity.", zh: "心理安全释放创造力。" },
      { en: "Hold weekly retrospectives.", zh: "每周复盘。" },
      { en: "Celebrate small wins.", zh: "庆祝小胜利。" },
      { en: "Trust forms the team's foundation.", zh: "信任是团队的根基。" },
      { en: "Address conflict early.", zh: "及早处理冲突。" }
    ]},
  { id: "pet-remote", name: "PET · 远程办公 Remote Work",
    words: [
      W("remote","远程"), W("hybrid","混合"), W("WFH","居家"), W("async","异步"),
      W("sync","同步"), W("Slack","Slack"), W("Zoom","Zoom"), W("Teams","Teams"),
      W("Notion","Notion"), W("docs","文档"), W("calendar","日历"), W("focus-mode","专注模式"),
      W("commute","通勤"), W("co-working","共享办公"), W("standing-desk","站立桌"), W("ergonomic","人体工学"),
      W("camera","摄像头"), W("mute","静音"), W("background","背景"), W("noise","噪音"),
      W("burnout","倦怠"), W("work-life","工作生活"), W("flexibility","灵活"), W("trust","信任"), W("autonomy","自主")
    ],
    sentences: [
      { en: "Camera off, save bandwidth.", zh: "关摄像头节省带宽。" },
      { en: "Async beats sync for deep work.", zh: "深度工作异步更好。" },
      { en: "WFH demands strong discipline.", zh: "居家办公需要自律。" },
      { en: "Use a quality headset.", zh: "用好一点的耳麦。" },
      { en: "Set work hour boundaries.", zh: "设定工作时间边界。" }
    ]},
  { id: "pet-hr", name: "PET · 人力资源 HR",
    words: [
      W("HR","人力资源"), W("hire","聘用"), W("recruit","招聘"), W("interview","面试"),
      W("candidate","候选人"), W("onboard","入职"), W("offboard","离职"), W("performance","绩效"),
      W("review","评审"), W("promotion","晋升"), W("compensation","薪酬"), W("benefit","福利"),
      W("PTO","带薪假"), W("sick-leave","病假"), W("parental","育儿假"), W("retirement","退休"),
      W("401k","退休账户"), W("payroll","工资"), W("policy","政策"), W("handbook","员工手册"),
      W("compliance","合规"), W("diversity","多元"), W("equity","公平"), W("inclusion","包容"), W("training","培训")
    ],
    sentences: [
      { en: "Onboarding lasts two weeks here.", zh: "我们入职培训为期两周。" },
      { en: "Performance reviews are quarterly.", zh: "绩效评审每季一次。" },
      { en: "PTO policy is generous.", zh: "带薪假政策很慷慨。" },
      { en: "We're hiring across teams.", zh: "我们多团队招聘。" },
      { en: "Mandatory compliance training.", zh: "强制合规培训。" }
    ]},
  { id: "pet-recruiting", name: "PET · 招聘 Recruiting",
    words: [
      W("recruiter","猎头"), W("sourcing","寻才"), W("pipeline","人才储备"), W("resume","简历"),
      W("CV","履历"), W("portfolio","作品集"), W("cover-letter","求职信"), W("reference","推荐人"),
      W("screen","初筛"), W("assessment","测评"), W("onsite","到场面试"), W("panel","面试组"),
      W("offer","录用"), W("counteroffer","反提议"), W("negotiate","谈判"), W("compensation","薪酬"),
      W("equity","股权"), W("sign-on","签字奖金"), W("background-check","背调"), W("rejected","被拒"),
      W("ghosted","失联"), W("referral","内推"), W("DEI","多元公平包容"), W("ATS","招聘系统"), W("ATS-friendly","简历适配")
    ],
    sentences: [
      { en: "I just got an offer!", zh: "我刚拿到 offer！" },
      { en: "Make your resume ATS-friendly.", zh: "让简历适配筛选系统。" },
      { en: "Internal referrals work best.", zh: "内推效果最好。" },
      { en: "We're closing the round Friday.", zh: "我们周五截止本轮。" },
      { en: "Negotiate your sign-on bonus.", zh: "谈一下签字奖金。" }
    ]},
  { id: "pet-engagement", name: "PET · 员工体验 Engagement",
    words: [
      W("engagement","参与度"), W("morale","士气"), W("satisfaction","满意度"), W("survey","调查"),
      W("pulse","脉冲调查"), W("retention","留任"), W("attrition","流失"), W("turnover","流动"),
      W("recognition","认可"), W("appreciation","欣赏"), W("reward","奖励"), W("incentive","激励"),
      W("perk","福利"), W("offsite","外部活动"), W("team-building","团建"), W("townhall","全员会"),
      W("listening","倾听"), W("transparency","透明"), W("trust","信任"), W("growth","成长"),
      W("mentorship","导师制"), W("buddy","伙伴"), W("culture","文化"), W("values","价值观"), W("purpose","使命")
    ],
    sentences: [
      { en: "Run regular pulse surveys.", zh: "定期做脉冲调查。" },
      { en: "Recognition costs nothing.", zh: "认可不花钱。" },
      { en: "Build a buddy program.", zh: "建立伙伴制度。" },
      { en: "Culture eats strategy for breakfast.", zh: "文化胜过战略。" },
      { en: "Listen to your people.", zh: "倾听员工。" }
    ]},
  { id: "pet-culture", name: "PET · 公司文化 Culture",
    words: [
      W("culture","文化"), W("values","价值观"), W("mission","使命"), W("vision","愿景"),
      W("purpose","目的"), W("behavior","行为"), W("ritual","仪式"), W("symbol","象征"),
      W("language","语言"), W("story","故事"), W("hero","榜样"), W("heritage","传承"),
      W("subculture","亚文化"), W("ceremony","仪式"), W("celebration","庆典"), W("artifact","物品"),
      W("identity","身份"), W("ownership","归属"), W("autonomy","自主"), W("excellence","卓越"),
      W("humility","谦逊"), W("kindness","善意"), W("courage","勇气"), W("playfulness","趣味"), W("ambition","抱负")
    ],
    sentences: [
      { en: "Live the company values daily.", zh: "每天活出公司价值观。" },
      { en: "Culture is what you celebrate.", zh: "文化是你所庆祝的。" },
      { en: "Rituals create belonging.", zh: "仪式产生归属感。" },
      { en: "Stories shape identity.", zh: "故事塑造身份。" },
      { en: "Values guide hard decisions.", zh: "价值观指导艰难决策。" }
    ]},
  { id: "pet-ma", name: "PET · 并购 M&A",
    words: [
      W("merger","合并"), W("acquisition","收购"), W("buyer","买方"), W("seller","卖方"),
      W("target","标的"), W("due-diligence","尽职调查"), W("valuation","估值"), W("synergy","协同"),
      W("integration","整合"), W("divest","剥离"), W("LBO","杠杆收购"), W("MBO","管理层收购"),
      W("equity","股权"), W("share","股份"), W("dividend","股息"), W("premium","溢价"),
      W("offer","出价"), W("counteroffer","还价"), W("hostile","敌意"), W("friendly","友好"),
      W("antitrust","反垄断"), W("approval","批准"), W("regulator","监管"), W("close","成交"), W("disclosure","披露")
    ],
    sentences: [
      { en: "Due diligence took three months.", zh: "尽调历时三个月。" },
      { en: "The acquisition closes next quarter.", zh: "收购下季度完成。" },
      { en: "Synergies justified the premium.", zh: "协同效应支持溢价。" },
      { en: "Regulators are reviewing the deal.", zh: "监管在审查交易。" },
      { en: "Integration is the hardest part.", zh: "整合最难。" }
    ]},
  { id: "pet-vc", name: "PET · 风险投资 Venture Capital",
    words: [
      W("VC","风投"), W("LP","有限合伙人"), W("GP","普通合伙人"), W("fund","基金"),
      W("portfolio","组合"), W("seed","种子轮"), W("series-A","A 轮"), W("series-B","B 轮"),
      W("pre-money","投前估值"), W("post-money","投后估值"), W("term-sheet","条款清单"), W("valuation","估值"),
      W("dilution","稀释"), W("exit","退出"), W("IPO","上市"), W("acquisition","被收购"),
      W("burn-rate","烧钱率"), W("runway","跑道"), W("traction","增长势头"), W("metrics","指标"),
      W("board","董事会"), W("preferred-stock","优先股"), W("liquidation","清算"), W("anti-dilution","反稀释"), W("vesting","归属")
    ],
    sentences: [
      { en: "We raised a $10M Series A.", zh: "我们融到了 1000 万 A 轮。" },
      { en: "Term sheet expires Friday.", zh: "条款书周五失效。" },
      { en: "Watch your burn rate closely.", zh: "密切关注烧钱率。" },
      { en: "Exit opportunities matter to LPs.", zh: "LP 关心退出机会。" },
      { en: "Vesting is over four years.", zh: "归属期是四年。" }
    ]},
  { id: "pet-crypto", name: "PET · 加密货币 Crypto",
    words: [
      W("crypto","加密"), W("bitcoin","比特币"), W("ethereum","以太"), W("blockchain","区块链"),
      W("wallet","钱包"), W("token","代币"), W("coin","币"), W("mining","挖矿"),
      W("staking","质押"), W("DeFi","去中心金融"), W("NFT","NFT"), W("smart-contract","智能合约"),
      W("exchange","交易所"), W("trading","交易"), W("volatile","波动"), W("HODL","持币"),
      W("airdrop","空投"), W("gas-fee","Gas 费"), W("ledger","账本"), W("private-key","私钥"),
      W("public-key","公钥"), W("seed-phrase","助记词"), W("cold-wallet","冷钱包"), W("hot-wallet","热钱包"), W("rug-pull","跑路")
    ],
    sentences: [
      { en: "Never share your seed phrase.", zh: "绝不要泄露助记词。" },
      { en: "Bitcoin hit a new high.", zh: "比特币创新高。" },
      { en: "Gas fees are painful today.", zh: "今天 Gas 费很贵。" },
      { en: "I prefer cold wallets.", zh: "我更喜欢冷钱包。" },
      { en: "Volatility is just normal here.", zh: "波动是这里的常态。" }
    ]},
  { id: "pet-fintech", name: "PET · 金融科技 Fintech",
    words: [
      W("fintech","金融科技"), W("digital-bank","数字银行"), W("neobank","新型银行"), W("payment","支付"),
      W("wallet","电子钱包"), W("QR","二维码"), W("contactless","非接触"), W("tap","刷卡"),
      W("transfer","转账"), W("remittance","汇款"), W("lending","借贷"), W("BNPL","先买后付"),
      W("robo-advisor","机器人投顾"), W("API","开放接口"), W("KYC","客户身份"), W("AML","反洗钱"),
      W("compliance","合规"), W("blockchain","区块链"), W("CBDC","央行数字货币"), W("insurtech","保险科技"),
      W("regtech","监管科技"), W("invoice","发票"), W("ledger","账本"), W("interoperable","互联"), W("scalable","可扩展")
    ],
    sentences: [
      { en: "Tap to pay is everywhere.", zh: "到处都能拍卡支付。" },
      { en: "BNPL is changing retail.", zh: "先买后付正在改变零售。" },
      { en: "KYC is mandatory.", zh: "KYC 是强制的。" },
      { en: "Robo-advisors lower costs.", zh: "机器人投顾降低成本。" },
      { en: "Open banking creates innovation.", zh: "开放银行带来创新。" }
    ]},
  { id: "pet-tax", name: "PET · 税务 Tax",
    words: [
      W("tax","税"), W("income-tax","所得税"), W("VAT","增值税"), W("sales-tax","销售税"),
      W("property-tax","房产税"), W("payroll-tax","工资税"), W("deduction","抵扣"), W("credit","抵免"),
      W("refund","退税"), W("audit","税务审计"), W("filing","申报"), W("return","报税表"),
      W("W-2","工资单"), W("1099","承包商表"), W("withholding","代扣"), W("bracket","税档"),
      W("rate","税率"), W("estimated","预估"), W("quarterly","季度"), W("annual","年度"),
      W("CPA","注册会计师"), W("IRS","税务局"), W("exemption","豁免"), W("dependent","受抚养"), W("penalty","罚款")
    ],
    sentences: [
      { en: "File your tax return by April 15.", zh: "4 月 15 日前完成报税。" },
      { en: "Did you receive your refund?", zh: "你收到退税了吗？" },
      { en: "Deduct business expenses.", zh: "扣除商务支出。" },
      { en: "Hire a CPA for complex cases.", zh: "复杂情况请会计师。" },
      { en: "Avoid late filing penalties.", zh: "避免迟报罚款。" }
    ]},
  { id: "pet-accounting", name: "PET · 会计 Accounting",
    words: [
      W("accounting","会计"), W("bookkeeping","记账"), W("balance-sheet","资产负债表"), W("income-statement","利润表"),
      W("cash-flow","现金流"), W("revenue","收入"), W("expense","费用"), W("asset","资产"),
      W("liability","负债"), W("equity","权益"), W("debit","借方"), W("credit","贷方"),
      W("ledger","账簿"), W("journal","日记账"), W("entry","条目"), W("reconciliation","对账"),
      W("audit","审计"), W("invoice","发票"), W("receipt","收据"), W("expense-report","报销"),
      W("accrual","权责发生制"), W("cash-basis","收付实现制"), W("depreciation","折旧"), W("amortization","摊销"), W("GAAP","会计准则")
    ],
    sentences: [
      { en: "Submit your expense report.", zh: "提交报销单。" },
      { en: "Cash flow tells the real story.", zh: "现金流说明真相。" },
      { en: "Reconcile the bank accounts.", zh: "对账银行账户。" },
      { en: "Depreciation reduces taxable income.", zh: "折旧减少应税收入。" },
      { en: "Quarterly close starts next week.", zh: "季度结账下周开始。" }
    ]},
  { id: "pet-audit", name: "PET · 审计 Audit",
    words: [
      W("audit","审计"), W("auditor","审计师"), W("internal","内部"), W("external","外部"),
      W("financial","财务"), W("compliance","合规"), W("operational","运营"), W("scope","范围"),
      W("sample","样本"), W("evidence","证据"), W("control","内控"), W("risk","风险"),
      W("finding","发现"), W("opinion","审计意见"), W("qualified","保留意见"), W("unqualified","无保留意见"),
      W("adverse","否定"), W("disclaimer","拒绝表示意见"), W("walkthrough","流程穿行"), W("testing","测试"),
      W("documentation","文档"), W("interview","访谈"), W("checklist","清单"), W("report","报告"), W("recommendation","建议")
    ],
    sentences: [
      { en: "External audit starts Monday.", zh: "外部审计周一开始。" },
      { en: "Walk us through the process.", zh: "讲一遍流程。" },
      { en: "Sample size matters.", zh: "样本量很关键。" },
      { en: "Findings need management response.", zh: "发现需管理层回应。" },
      { en: "Maintain audit trail.", zh: "保留审计轨迹。" }
    ]},
  { id: "pet-procurement", name: "PET · 采购 Procurement",
    words: [
      W("procurement","采购"), W("vendor","供应商"), W("supplier","供应商"), W("RFP","询价书"),
      W("RFQ","报价请求"), W("bid","投标"), W("tender","招标"), W("contract","合同"),
      W("negotiation","谈判"), W("MOQ","起订量"), W("lead-time","交付周期"), W("PO","采购单"),
      W("invoice","发票"), W("payment-terms","付款条款"), W("net-30","30 天结算"), W("approval","审批"),
      W("quality","质量"), W("inspection","验收"), W("warranty","保修"), W("rebate","返点"),
      W("strategic","战略"), W("tactical","战术"), W("category","类别"), W("sourcing","寻源"), W("spend","支出")
    ],
    sentences: [
      { en: "Issue an RFP to three vendors.", zh: "向三家供应商发询价书。" },
      { en: "Lead time is six weeks.", zh: "交付周期六周。" },
      { en: "Net-30 payment terms.", zh: "30 天结算条款。" },
      { en: "Negotiate volume rebates.", zh: "谈量价返点。" },
      { en: "Approve the PO today.", zh: "今天审批采购单。" }
    ]},
  { id: "pet-quality", name: "PET · 质量管理 Quality",
    words: [
      W("quality","质量"), W("control","控制"), W("assurance","保证"), W("standard","标准"),
      W("ISO","ISO"), W("six-sigma","六西格玛"), W("Kaizen","改善"), W("lean","精益"),
      W("audit","审核"), W("inspection","检验"), W("defect","缺陷"), W("rework","返工"),
      W("scrap","废品"), W("yield","成品率"), W("specification","规格"), W("tolerance","公差"),
      W("calibration","校准"), W("metric","指标"), W("KPI","关键指标"), W("non-conformance","不符合"),
      W("root-cause","根因"), W("CAPA","纠正预防"), W("PPM","百万分之"), W("FMEA","失效模式分析"), W("traceability","可追溯")
    ],
    sentences: [
      { en: "We follow ISO standards.", zh: "我们遵循 ISO 标准。" },
      { en: "Track defects per million.", zh: "追踪百万分之缺陷率。" },
      { en: "Find the root cause first.", zh: "先找根因。" },
      { en: "Quality is everyone's job.", zh: "质量人人有责。" },
      { en: "Reduce waste with lean methods.", zh: "用精益方法减浪费。" }
    ]},
  { id: "pet-cs", name: "PET · 客户成功 Customer Success",
    words: [
      W("customer-success","客户成功"), W("CSM","客户经理"), W("onboarding","新手引导"), W("adoption","采用"),
      W("retention","留存"), W("churn","流失"), W("renewal","续约"), W("upsell","增售"),
      W("cross-sell","交叉销售"), W("NPS","净推荐值"), W("CSAT","满意度"), W("ticket","工单"),
      W("escalation","升级"), W("SLA","服务承诺"), W("knowledge-base","知识库"), W("FAQ","常见问题"),
      W("webinar","网络研讨"), W("playbook","手册"), W("health-score","健康度"), W("QBR","季度复盘"),
      W("usage","用量"), W("feedback","反馈"), W("advocate","倡导者"), W("case-study","客户案例"), W("expansion","扩展")
    ],
    sentences: [
      { en: "Onboarding sets the tone.", zh: "新手引导定下基调。" },
      { en: "Watch the health score weekly.", zh: "每周看健康度。" },
      { en: "Schedule the QBR.", zh: "安排季度复盘。" },
      { en: "Resolve tickets within SLA.", zh: "在 SLA 内处理工单。" },
      { en: "Turn customers into advocates.", zh: "把客户变成倡导者。" }
    ]},
  { id: "pet-content", name: "PET · 内容运营 Content",
    words: [
      W("content","内容"), W("strategy","策略"), W("calendar","日历"), W("brand-voice","品牌调性"),
      W("editorial","编辑"), W("blog","博客"), W("newsletter","时事通讯"), W("post","贴子"),
      W("caption","图说"), W("hashtag","标签"), W("video","视频"), W("reel","小视频"),
      W("story","故事"), W("podcast","播客"), W("webinar","网络研讨"), W("ebook","电子书"),
      W("infographic","信息图"), W("CTA","行动召唤"), W("engagement","互动"), W("impression","曝光"),
      W("organic","自然"), W("paid","付费"), W("influencer","网红"), W("UGC","用户生成内容"), W("repurpose","二次利用")
    ],
    sentences: [
      { en: "Plan a 30-day content calendar.", zh: "做个 30 天内容日历。" },
      { en: "Repurpose blog posts as reels.", zh: "把博客改成小视频。" },
      { en: "Engagement beats impressions.", zh: "互动胜过曝光。" },
      { en: "Add a clear CTA.", zh: "加个清晰的行动召唤。" },
      { en: "Stay on brand voice.", zh: "保持品牌调性。" }
    ]},
  { id: "pet-search", name: "PET · 搜索引擎 Search & SEO",
    words: [
      W("search","搜索"), W("engine","引擎"), W("Google","谷歌"), W("Bing","必应"),
      W("query","查询"), W("keyword","关键词"), W("ranking","排名"), W("index","索引"),
      W("crawler","爬虫"), W("sitemap","站点地图"), W("meta","元"), W("title","标题"),
      W("description","描述"), W("backlink","反向链接"), W("authority","权威"), W("snippet","摘要"),
      W("schema","结构化数据"), W("intent","意图"), W("long-tail","长尾"), W("voice-search","语音搜索"),
      W("local-SEO","本地优化"), W("E-E-A-T","E-E-A-T"), W("CTR","点击率"), W("dwell","停留"), W("bounce","跳出")
    ],
    sentences: [
      { en: "Improve title tags first.", zh: "先优化标题标签。" },
      { en: "Quality backlinks help rank.", zh: "高质反链有助排名。" },
      { en: "Track keyword positions.", zh: "追踪关键词位置。" },
      { en: "Schema enables rich results.", zh: "结构化数据带来富结果。" },
      { en: "Voice search changes queries.", zh: "语音搜索改变查询。" }
    ]},
  { id: "pet-eccomm", name: "PET · 电商运营 E-commerce",
    words: [
      W("ecommerce","电商"), W("storefront","店铺"), W("catalog","商品库"), W("SKU","SKU"),
      W("inventory","库存"), W("cart","购物车"), W("checkout","结账"), W("conversion","转化"),
      W("AOV","客单价"), W("LTV","终身价值"), W("CAC","获客成本"), W("repeat","复购"),
      W("abandonment","弃单"), W("upsell","增售"), W("bundle","组合"), W("coupon","优惠券"),
      W("loyalty","会员"), W("review","评价"), W("rating","评分"), W("return","退货"),
      W("fulfillment","履约"), W("warehouse","仓库"), W("dropship","直邮"), W("marketplace","平台"), W("UX","用户体验")
    ],
    sentences: [
      { en: "Reduce cart abandonment.", zh: "减少弃单。" },
      { en: "Increase your AOV with bundles.", zh: "用组合提升客单价。" },
      { en: "Repeat purchase is gold.", zh: "复购是金矿。" },
      { en: "Optimize the checkout flow.", zh: "优化结账流程。" },
      { en: "Reviews build social proof.", zh: "评价建立社会认同。" }
    ]},
  { id: "pet-data", name: "PET · 数据分析 Data Analytics",
    words: [
      W("data","数据"), W("analytics","分析"), W("dashboard","看板"), W("metric","指标"),
      W("KPI","关键指标"), W("OKR","目标关键结果"), W("trend","趋势"), W("segment","细分"),
      W("cohort","队列"), W("funnel","漏斗"), W("retention","留存"), W("attribution","归因"),
      W("A/B-test","A/B 测试"), W("hypothesis","假设"), W("baseline","基线"), W("conversion","转化"),
      W("dimension","维度"), W("measure","度量"), W("query","查询"), W("SQL","SQL"),
      W("ETL","数据管道"), W("warehouse","数仓"), W("BI","商业智能"), W("visualization","可视化"), W("insight","洞察")
    ],
    sentences: [
      { en: "Build a retention dashboard.", zh: "搭建留存看板。" },
      { en: "Run an A/B test first.", zh: "先做 A/B 测试。" },
      { en: "Cohort analysis tells deeper stories.", zh: "队列分析揭示更深故事。" },
      { en: "Define your North Star metric.", zh: "定义你的北极星指标。" },
      { en: "Visualize before sharing.", zh: "分享前先可视化。" }
    ]}
);

/* ============================================================
   美国常用口语扩充：第六批
   ============================================================ */
DATA.english_daily.push(
  { id: "us-text2", name: "💬 短信缩写 Text Slang",
    words: [],
    sentences: [
      { en: "BRB, gotta grab water.", zh: "马上回来，拿杯水。" },
      { en: "OMG, that's hilarious!", zh: "天啊，太搞笑了！" },
      { en: "IDK, ask Mom.", zh: "我不知道，问妈妈。" },
      { en: "LMK when you're free.", zh: "你有空告诉我。" },
      { en: "TBH I'm exhausted.", zh: "说实话我累坏了。" },
      { en: "NGL that was awesome.", zh: "不骗你，那超棒。" },
      { en: "TYSM for the help!", zh: "非常感谢帮忙！" },
      { en: "OMW now.", zh: "我在路上。" },
      { en: "FYI the meeting moved.", zh: "顺便说一下，会议改时间了。" },
      { en: "Hit me up later.", zh: "晚点联系我。" },
      { en: "Lol no way.", zh: "哈哈不可能。" },
      { en: "Ttyl, gotta run.", zh: "回头聊，我得走了。" },
      { en: "K, sounds good.", zh: "好的，听上去不错。" },
      { en: "ICYMI we won.", zh: "万一你错过了，我们赢了。" }
    ]},
  { id: "us-snack", name: "🍿 零食 Snacks",
    words: [],
    sentences: [
      { en: "I need a snack break.", zh: "我得歇会儿吃零食。" },
      { en: "Got any chips?", zh: "有薯片吗？" },
      { en: "I'm craving something sweet.", zh: "我想吃点甜的。" },
      { en: "Healthy snacks only today.", zh: "今天只吃健康零食。" },
      { en: "Granola bars are lifesavers.", zh: "燕麦棒救命。" },
      { en: "Popcorn or pretzels?", zh: "爆米花还是椒盐脆饼？" },
      { en: "Don't open the cookies yet.", zh: "饼干先别开。" },
      { en: "Trail mix is my favorite.", zh: "什锦果仁是我最爱。" },
      { en: "Stop snacking before dinner.", zh: "晚饭前别吃零食。" },
      { en: "Carrots and hummus, please.", zh: "我要胡萝卜和鹰嘴豆酱。" },
      { en: "Got the munchies.", zh: "嘴馋了。" },
      { en: "Late night snack run?", zh: "深夜买零食吗？" },
      { en: "Dark chocolate counts as healthy.", zh: "黑巧算健康。" },
      { en: "Split the bag of chips?", zh: "薯片分一袋？" }
    ]},
  { id: "us-takeout", name: "🥡 外卖 Takeout",
    words: [],
    sentences: [
      { en: "Wanna order takeout?", zh: "要点外卖吗？" },
      { en: "Pizza or Chinese tonight?", zh: "今晚比萨还是中餐？" },
      { en: "I'll get my usual.", zh: "我点老样子。" },
      { en: "Any restrictions?", zh: "有忌口吗？" },
      { en: "Add extra sauce, please.", zh: "请多加酱。" },
      { en: "Delivery in 30 minutes.", zh: "30 分钟送到。" },
      { en: "Don't forget chopsticks.", zh: "别忘了筷子。" },
      { en: "Tip the driver.", zh: "给司机小费。" },
      { en: "Food's getting cold.", zh: "饭凉了。" },
      { en: "Use my Uber Eats credit.", zh: "用我 Uber Eats 抵扣。" },
      { en: "Add a soda.", zh: "加一杯汽水。" },
      { en: "Cash or card?", zh: "现金还是卡？" },
      { en: "We have leftovers for lunch.", zh: "中午有剩饭。" },
      { en: "Save me a spring roll!", zh: "给我留一卷春卷！" }
    ]},
  { id: "us-deli", name: "🥪 熟食店 Deli",
    words: [],
    sentences: [
      { en: "I'd like a turkey sandwich.", zh: "我要个火鸡三明治。" },
      { en: "What's on it?", zh: "里面加什么？" },
      { en: "Hold the mayo.", zh: "不要蛋黄酱。" },
      { en: "On rye, please.", zh: "用黑麦面包。" },
      { en: "Make it a combo.", zh: "做成套餐。" },
      { en: "For here or to go?", zh: "店里吃还是外带？" },
      { en: "Extra cheese, please.", zh: "请多加芝士。" },
      { en: "Toasted, please.", zh: "请烤一下。" },
      { en: "Soup of the day?", zh: "今日例汤是什么？" },
      { en: "Any pickles?", zh: "有腌黄瓜吗？" },
      { en: "Slice it thin.", zh: "切薄点。" },
      { en: "Half pound of ham.", zh: "半磅火腿。" },
      { en: "How fresh is the bread?", zh: "面包新鲜吗？" },
      { en: "Thanks, have a good one.", zh: "谢谢，再见。" }
    ]},
  { id: "us-bakery", name: "🥐 面包店 Bakery",
    words: [],
    sentences: [
      { en: "What's fresh today?", zh: "今天有什么新鲜的？" },
      { en: "Two croissants, please.", zh: "请两个牛角包。" },
      { en: "Are the bagels still warm?", zh: "贝果还热乎吗？" },
      { en: "I'll take a baguette.", zh: "我要根法棍。" },
      { en: "Could you slice it?", zh: "可以帮我切片吗？" },
      { en: "Any gluten-free options?", zh: "有无麸质的吗？" },
      { en: "The smell in here is heaven.", zh: "这里的香味太棒了。" },
      { en: "Custom cake for Saturday?", zh: "周六的定制蛋糕？" },
      { en: "I'd like the chocolate one.", zh: "我要巧克力那款。" },
      { en: "Could you box it up?", zh: "可以装盒吗？" },
      { en: "Half dozen muffins, please.", zh: "请来半打松饼。" },
      { en: "Cash only here?", zh: "只收现金吗？" },
      { en: "Save me a sourdough.", zh: "给我留个酸面包。" },
      { en: "Open till nine?", zh: "营业到九点吗？" }
    ]},
  { id: "us-farmers-market", name: "🥕 农夫市集 Farmers Market",
    words: [],
    sentences: [
      { en: "Everything looks so fresh.", zh: "一切都好新鲜。" },
      { en: "Are these locally grown?", zh: "这是本地种的吗？" },
      { en: "How much per pound?", zh: "每磅多少钱？" },
      { en: "Could I try a sample?", zh: "可以尝一下吗？" },
      { en: "I'll take three pints.", zh: "我要三品脱。" },
      { en: "Do you accept SNAP?", zh: "你们收 SNAP 吗？" },
      { en: "What's in season?", zh: "现在什么应季？" },
      { en: "Is the honey raw?", zh: "蜂蜜是原蜜吗？" },
      { en: "Bring a tote bag.", zh: "带个购物袋。" },
      { en: "These tomatoes are gorgeous.", zh: "这些番茄好漂亮。" },
      { en: "Can I get a discount for bulk?", zh: "买多可以便宜吗？" },
      { en: "Cash works best here.", zh: "这里现金最方便。" },
      { en: "See you next Saturday.", zh: "下周六见。" },
      { en: "Support local farms!", zh: "支持本地农场！" }
    ]},
  { id: "us-clothing-store", name: "👚 服装店 Clothing Store",
    words: [],
    sentences: [
      { en: "Could I get this in a medium?", zh: "可以来件中号吗？" },
      { en: "Where are the fitting rooms?", zh: "试衣间在哪？" },
      { en: "Does this come in another color?", zh: "有别的颜色吗？" },
      { en: "Are these on sale?", zh: "这些打折吗？" },
      { en: "How does it fit?", zh: "合身吗？" },
      { en: "A little too tight in the shoulders.", zh: "肩部有点紧。" },
      { en: "Could I exchange this?", zh: "可以换货吗？" },
      { en: "Returns within 30 days.", zh: "30 天内可退。" },
      { en: "I'll take both.", zh: "两件都要。" },
      { en: "Do you have a rewards program?", zh: "你们有会员卡吗？" },
      { en: "Where's the sale rack?", zh: "打折区在哪？" },
      { en: "Could you hold this for me?", zh: "可以帮我留着吗？" },
      { en: "Tag is itchy.", zh: "标签扎人。" },
      { en: "These pants are perfect.", zh: "这条裤子完美。" }
    ]},
  { id: "us-shoe-store", name: "👟 鞋店 Shoe Store",
    words: [],
    sentences: [
      { en: "Do you carry size 9?", zh: "有 9 码吗？" },
      { en: "Could I try them on?", zh: "可以试穿吗？" },
      { en: "These run small.", zh: "这鞋偏小。" },
      { en: "Need any half sizes.", zh: "有半码吗？" },
      { en: "What's the return policy?", zh: "退货政策是？" },
      { en: "Are they good for running?", zh: "适合跑步吗？" },
      { en: "Could I get insoles?", zh: "可以加鞋垫吗？" },
      { en: "These pinch my toes.", zh: "这鞋夹脚趾。" },
      { en: "Anything in leather?", zh: "有皮的吗？" },
      { en: "Could you measure my foot?", zh: "可以帮我量脚吗？" },
      { en: "I'll take the brown pair.", zh: "我要棕色那双。" },
      { en: "Do you have winter boots?", zh: "有冬靴吗？" },
      { en: "I'd like a wider fit.", zh: "我要宽楦的。" },
      { en: "Could you box them up?", zh: "可以帮我装盒吗？" }
    ]},
  { id: "us-cosmetics", name: "💄 化妆品 Cosmetics",
    words: [],
    sentences: [
      { en: "I need a new foundation.", zh: "我需要新的粉底。" },
      { en: "What shade matches my skin?", zh: "什么色号配我的肤色？" },
      { en: "Is this oil-free?", zh: "这是无油的吗？" },
      { en: "Could I get a sample?", zh: "可以给个小样吗？" },
      { en: "Looking for a long-wear lipstick.", zh: "我要持久型口红。" },
      { en: "Any sensitive skin options?", zh: "有适合敏感肌的吗？" },
      { en: "SPF 50, please.", zh: "请给我 SPF 50 的。" },
      { en: "Mascara that doesn't smudge.", zh: "我要不晕染的睫毛膏。" },
      { en: "I love this eyeshadow palette.", zh: "我爱这盘眼影。" },
      { en: "Is it cruelty-free?", zh: "是无动物实验的吗？" },
      { en: "Could you do my makeup?", zh: "可以帮我画妆吗？" },
      { en: "Where's the skincare aisle?", zh: "护肤区在哪？" },
      { en: "Any gift sets available?", zh: "有礼盒装吗？" },
      { en: "Add a free sample, please.", zh: "请送个小样。" }
    ]},
  { id: "us-electronics", name: "🔌 电子产品 Electronics",
    words: [],
    sentences: [
      { en: "Looking for noise-cancelling headphones.", zh: "我找降噪耳机。" },
      { en: "Could I compare these two laptops?", zh: "能对比下这两台笔记本吗？" },
      { en: "What's the storage capacity?", zh: "存储多大？" },
      { en: "Any extended warranty?", zh: "有延保吗？" },
      { en: "Battery life rating?", zh: "电池续航多久？" },
      { en: "Does it come with a charger?", zh: "包含充电器吗？" },
      { en: "I want the latest model.", zh: "我要最新款。" },
      { en: "Compatible with iPhone?", zh: "兼容 iPhone 吗？" },
      { en: "USB-C, not micro USB.", zh: "Type-C，不是 micro USB。" },
      { en: "Set up in store?", zh: "店内激活吗？" },
      { en: "Refurbished is fine.", zh: "翻新机也行。" },
      { en: "What's the return window?", zh: "退货期限是？" },
      { en: "Tablet for kids, recommendations?", zh: "推荐给小孩的平板？" },
      { en: "I'll take the smart watch.", zh: "我买这块智能手表。" }
    ]},
  { id: "us-secondhand", name: "♻️ 二手 Thrift",
    words: [],
    sentences: [
      { en: "I love thrift shopping.", zh: "我喜欢逛二手店。" },
      { en: "Look at this vintage jacket!", zh: "看这件复古夹克！" },
      { en: "Only five dollars?", zh: "才五美元？" },
      { en: "Try it on first.", zh: "先试一下。" },
      { en: "I scored a designer bag.", zh: "我淘到个设计师包。" },
      { en: "Check for stains.", zh: "看看有没有污渍。" },
      { en: "Is this real leather?", zh: "是真皮吗？" },
      { en: "Buttons need replacing.", zh: "扣子要换。" },
      { en: "Donations help the community.", zh: "捐赠帮助社区。" },
      { en: "Books are 50 cents each.", zh: "书每本五十美分。" },
      { en: "Reduce, reuse, repurpose.", zh: "减量、再用、改造。" },
      { en: "Hidden gems in here.", zh: "这里有宝藏。" },
      { en: "Bring cash for the flea market.", zh: "去跳蚤市场带现金。" },
      { en: "Haggle gently.", zh: "好好砍价。" }
    ]},
  { id: "us-yardsale", name: "🪧 庭院出售 Yard Sale",
    words: [],
    sentences: [
      { en: "We're having a yard sale Saturday.", zh: "我们周六办庭院出售。" },
      { en: "Make me an offer.", zh: "出个价吧。" },
      { en: "Everything must go.", zh: "全部清仓。" },
      { en: "Take it for two bucks.", zh: "两块钱给你。" },
      { en: "Lots of kids' stuff.", zh: "很多孩子的东西。" },
      { en: "Free pile over there.", zh: "那边是免费的堆。" },
      { en: "Cash only, please.", zh: "只收现金。" },
      { en: "We accept Venmo too.", zh: "也收 Venmo。" },
      { en: "Help me carry the table.", zh: "帮我搬下桌子。" },
      { en: "Early birds only.", zh: "只接受早起的客人。" },
      { en: "We'll donate what's left.", zh: "剩下的我们捐掉。" },
      { en: "Look through the bins.", zh: "在箱子里翻翻。" },
      { en: "Bookworm's paradise.", zh: "书虫的天堂。" },
      { en: "Thanks for stopping by!", zh: "谢谢您来！" }
    ]},
  { id: "us-postoffice", name: "📮 邮局 Post Office",
    words: [],
    sentences: [
      { en: "I need to mail this package.", zh: "我要寄这个包裹。" },
      { en: "Priority or standard?", zh: "特快还是平邮？" },
      { en: "Tracking is included.", zh: "包含跟踪号。" },
      { en: "Insurance up to $500?", zh: "保价到 500 美元？" },
      { en: "How long to ship?", zh: "送多久？" },
      { en: "Could I buy stamps?", zh: "我能买邮票吗？" },
      { en: "First-class, please.", zh: "请头等邮。" },
      { en: "Forwarding my mail next month.", zh: "下个月转寄邮件。" },
      { en: "PO Box rates?", zh: "邮政信箱多少钱？" },
      { en: "Pickup tomorrow at noon.", zh: "明天中午取件。" },
      { en: "Did you fill out the form?", zh: "你填表了吗？" },
      { en: "Sender's address here.", zh: "寄件人地址在这里写。" },
      { en: "Fragile, please handle carefully.", zh: "易碎，请小心。" },
      { en: "Receipt, please.", zh: "请给我收据。" }
    ]},
  { id: "us-utility", name: "💡 水电煤 Utilities",
    words: [],
    sentences: [
      { en: "My electricity bill spiked.", zh: "我的电费突然高了。" },
      { en: "Did you check the water bill?", zh: "看了水费账单吗？" },
      { en: "Internet's down again.", zh: "网又断了。" },
      { en: "Call the provider.", zh: "联系服务商。" },
      { en: "Set up auto-pay.", zh: "设自动扣款。" },
      { en: "Gas leak smell — open windows!", zh: "有煤气味，开窗！" },
      { en: "Power outage in the area.", zh: "本区停电。" },
      { en: "Generator on standby?", zh: "备用发电机准备好了？" },
      { en: "When does the bill cycle close?", zh: "账单周期什么时候结束？" },
      { en: "Cable's flickering again.", zh: "电视信号又抖了。" },
      { en: "Schedule a service appointment.", zh: "预约上门服务。" },
      { en: "Bundle TV with internet.", zh: "电视和宽带打包。" },
      { en: "Trash pickup is Tuesday.", zh: "周二收垃圾。" },
      { en: "Recycling day is Friday.", zh: "周五回收日。" }
    ]},
  { id: "us-mailbox", name: "📬 收件 Mailbox",
    words: [],
    sentences: [
      { en: "Did the mail come yet?", zh: "邮件到了吗？" },
      { en: "I'm expecting a package.", zh: "我在等一个包裹。" },
      { en: "Drop it in the slot.", zh: "塞投递口里。" },
      { en: "Junk mail again.", zh: "又是垃圾邮件。" },
      { en: "Hold mail while away.", zh: "外出时暂停送件。" },
      { en: "Sign for delivery.", zh: "签收。" },
      { en: "Left at the door.", zh: "放在门口。" },
      { en: "Notify if missing.", zh: "丢件告知我。" },
      { en: "Pick up at the post office.", zh: "去邮局自取。" },
      { en: "Forwarded to new address.", zh: "已转寄新地址。" },
      { en: "Locked mailbox is safer.", zh: "上锁信箱更安全。" },
      { en: "Wrong house?", zh: "送错地址？" },
      { en: "Christmas cards started coming.", zh: "圣诞卡开始来了。" },
      { en: "Bills, bills, bills.", zh: "全是账单。" }
    ]}
);

/* ============================================================
   PET 词库扩充：第七批
   ============================================================ */
DATA.english_pet.push(
  { id: "pet-pm", name: "PET · 产品管理 Product Mgmt",
    words: [
      W("product","产品"), W("PM","产品经理"), W("roadmap","路线图"), W("backlog","待办"),
      W("requirement","需求"), W("spec","规格"), W("PRD","产品需求文档"), W("epic","史诗"),
      W("story","故事"), W("acceptance","验收"), W("feature","功能"), W("launch","发布"),
      W("MVP","最小可行产品"), W("iteration","迭代"), W("release","发版"), W("rollout","上线"),
      W("user","用户"), W("persona","画像"), W("journey","旅程"), W("pain-point","痛点"),
      W("value-prop","价值主张"), W("metric","指标"), W("hypothesis","假设"), W("experiment","实验"), W("kill","砍掉")
    ],
    sentences: [
      { en: "Ship the MVP first.", zh: "先发 MVP。" },
      { en: "Prioritize the backlog ruthlessly.", zh: "无情排序待办。" },
      { en: "Write a one-page PRD.", zh: "写一页 PRD。" },
      { en: "Pain points drive features.", zh: "痛点驱动功能。" },
      { en: "Kill bad ideas fast.", zh: "尽快砍掉坏点子。" }
    ]},
  { id: "pet-uxresearch", name: "PET · 用户调研 UX Research",
    words: [
      W("research","研究"), W("user","用户"), W("persona","画像"), W("interview","访谈"),
      W("survey","问卷"), W("usability","可用性"), W("test","测试"), W("prototype","原型"),
      W("wireframe","线框"), W("mockup","设计稿"), W("journey-map","旅程图"), W("empathy-map","共情图"),
      W("task","任务"), W("flow","流程"), W("friction","阻力"), W("delight","惊喜"),
      W("observation","观察"), W("note","笔记"), W("recording","录像"), W("transcript","转录"),
      W("affinity","亲和图"), W("theme","主题"), W("insight","洞察"), W("recommendation","建议"), W("iterate","迭代")
    ],
    sentences: [
      { en: "Recruit five users to test.", zh: "招募五位用户测试。" },
      { en: "Don't lead the witness.", zh: "别诱导被访者。" },
      { en: "Observe, don't assume.", zh: "观察，不要假设。" },
      { en: "Map the user journey.", zh: "画出用户旅程。" },
      { en: "Iterate on each insight.", zh: "针对每个洞察迭代。" }
    ]},
  { id: "pet-pricing", name: "PET · 定价 Pricing",
    words: [
      W("pricing","定价"), W("tier","档位"), W("plan","套餐"), W("freemium","免费增值"),
      W("trial","试用"), W("annual","年付"), W("monthly","月付"), W("discount","折扣"),
      W("bundle","组合"), W("upsell","增售"), W("downgrade","降级"), W("usage-based","按量"),
      W("seat","席位"), W("enterprise","企业"), W("SMB","中小企业"), W("price-point","价格点"),
      W("anchor","锚定"), W("decoy","诱饵"), W("psychological","心理"), W("elasticity","弹性"),
      W("willingness","支付意愿"), W("margin","利润"), W("cost-plus","成本加成"), W("value-based","价值定价"), W("promo","促销")
    ],
    sentences: [
      { en: "Test three pricing tiers.", zh: "测试三档定价。" },
      { en: "Annual plans improve retention.", zh: "年付提高留存。" },
      { en: "Anchor pricing shapes perception.", zh: "锚定定价影响认知。" },
      { en: "Run a usage-based experiment.", zh: "做个按量定价实验。" },
      { en: "Value-based pricing wins.", zh: "价值定价更胜一筹。" }
    ]},
  { id: "pet-sales", name: "PET · 销售 Sales",
    words: [
      W("sales","销售"), W("lead","潜在客户"), W("prospect","潜客"), W("pipeline","管道"),
      W("opportunity","机会"), W("quota","配额"), W("close","成交"), W("deal","交易"),
      W("ACV","年度合同价值"), W("MRR","月经常收入"), W("ARR","年经常收入"), W("territory","区域"),
      W("rep","代表"), W("SDR","销售开发"), W("AE","客户经理"), W("BD","业务拓展"),
      W("demo","演示"), W("discovery","需求挖掘"), W("objection","异议"), W("rebuttal","回应"),
      W("commission","佣金"), W("quota-attainment","完成率"), W("forecast","预测"), W("win-rate","胜率"), W("CRM","客户关系系统")
    ],
    sentences: [
      { en: "Close more deals this quarter.", zh: "本季多关单。" },
      { en: "Qualify leads before demoing.", zh: "演示前先筛选潜客。" },
      { en: "Handle objections head-on.", zh: "正面回应异议。" },
      { en: "Forecast accurately to leadership.", zh: "向上准确预测。" },
      { en: "Update the CRM after every call.", zh: "每通话后更新 CRM。" }
    ]},
  { id: "pet-coldcall", name: "PET · 陌拜 Cold Outreach",
    words: [
      W("cold","陌生"), W("call","电话"), W("email","邮件"), W("intro","开场"),
      W("pitch","推销"), W("hook","钩子"), W("value","价值"), W("research","背调"),
      W("personalize","个性化"), W("template","模板"), W("subject-line","标题"), W("opener","开头"),
      W("permission","许可"), W("interest","兴趣"), W("agenda","议程"), W("next-step","下一步"),
      W("follow-up","跟进"), W("cadence","节奏"), W("touch","触达"), W("warm","温拜"),
      W("rejected","被拒"), W("decline","谢绝"), W("voicemail","语音留言"), W("script","脚本"), W("opt-out","退订")
    ],
    sentences: [
      { en: "Personalize every email.", zh: "每封邮件都个性化。" },
      { en: "Keep cold calls under 60 seconds.", zh: "陌拜电话控制在 60 秒内。" },
      { en: "Leave a strong voicemail.", zh: "留下有力的语音留言。" },
      { en: "Always end with a clear ask.", zh: "结尾必须有明确请求。" },
      { en: "Cadence beats volume.", zh: "节奏胜过数量。" }
    ]},
  { id: "pet-account", name: "PET · 大客户 Account Mgmt",
    words: [
      W("account","客户"), W("manager","经理"), W("relationship","关系"), W("strategic","战略"),
      W("enterprise","企业"), W("executive","高管"), W("stakeholder","干系人"), W("champion","推动者"),
      W("decision-maker","决策者"), W("influencer","影响者"), W("renewal","续约"), W("expansion","扩展"),
      W("QBR","季度业务复盘"), W("EBR","执行复盘"), W("escalation","升级"), W("SLA","服务承诺"),
      W("playbook","手册"), W("plan","计划"), W("revenue","收入"), W("retention","留存"),
      W("NRR","净留存"), W("logo","客户"), W("at-risk","风险中"), W("save","挽留"), W("expand","扩张")
    ],
    sentences: [
      { en: "Build executive relationships.", zh: "建立高管关系。" },
      { en: "Champions are your secret weapon.", zh: "推动者是秘密武器。" },
      { en: "Run quarterly business reviews.", zh: "做季度业务复盘。" },
      { en: "Identify expansion early.", zh: "尽早识别扩展机会。" },
      { en: "Save accounts before they churn.", zh: "客户流失前及时挽留。" }
    ]},
  { id: "pet-pr", name: "PET · 公关 PR",
    words: [
      W("PR","公关"), W("press","媒体"), W("release","发布"), W("statement","声明"),
      W("spokesperson","发言人"), W("media","媒体"), W("outreach","触达"), W("pitch","推介"),
      W("embargo","禁发期"), W("exclusive","独家"), W("interview","专访"), W("quote","引语"),
      W("byline","署名"), W("op-ed","观点文章"), W("placement","落地"), W("coverage","报道"),
      W("crisis","危机"), W("response","回应"), W("apology","道歉"), W("damage","损害"),
      W("reputation","声誉"), W("monitor","监测"), W("sentiment","情感"), W("messaging","表态"), W("narrative","叙事")
    ],
    sentences: [
      { en: "Send press releases early.", zh: "尽早发新闻稿。" },
      { en: "Respect the embargo.", zh: "遵守禁发期。" },
      { en: "Prepare crisis statements ahead.", zh: "预先准备危机声明。" },
      { en: "Train your spokespeople.", zh: "培训发言人。" },
      { en: "Monitor sentiment hourly.", zh: "每小时监测情感。" }
    ]},
  { id: "pet-branding", name: "PET · 品牌建设 Branding",
    words: [
      W("brand","品牌"), W("identity","识别"), W("logo","商标"), W("typography","字体"),
      W("palette","调色板"), W("voice","调性"), W("tone","语气"), W("tagline","标语"),
      W("story","故事"), W("archetype","原型"), W("position","定位"), W("differentiator","差异点"),
      W("promise","承诺"), W("equity","品牌资产"), W("awareness","知名度"), W("recall","记忆度"),
      W("loyalty","忠诚"), W("advocate","拥护者"), W("merchandise","周边"), W("collateral","物料"),
      W("guideline","规范"), W("rebrand","重塑"), W("refresh","更新"), W("perception","感知"), W("strategy","战略")
    ],
    sentences: [
      { en: "Define your brand voice clearly.", zh: "清晰定义品牌调性。" },
      { en: "Consistency builds trust.", zh: "一致性建立信任。" },
      { en: "Your story is your moat.", zh: "故事就是你的护城河。" },
      { en: "Differentiate or die.", zh: "差异化才能生存。" },
      { en: "Rebranding takes courage.", zh: "重塑需要勇气。" }
    ]},
  { id: "pet-influencer", name: "PET · 网红营销 Influencer Mktg",
    words: [
      W("influencer","网红"), W("creator","创作者"), W("micro","微"), W("macro","大"),
      W("nano","纳米"), W("follower","粉丝"), W("engagement","互动"), W("reach","触达"),
      W("collab","合作"), W("sponsored","赞助"), W("ad","广告"), W("affiliate","联盟"),
      W("commission","佣金"), W("brief","简报"), W("contract","合同"), W("rights","版权"),
      W("disclose","披露"), W("ethics","伦理"), W("authentic","真实"), W("FTC","FTC"),
      W("agency","机构"), W("platform","平台"), W("TikTok","TikTok"), W("Instagram","Instagram"), W("YouTube","YouTube")
    ],
    sentences: [
      { en: "Micro-influencers drive better engagement.", zh: "微网红互动更高。" },
      { en: "Always disclose paid partnerships.", zh: "付费合作必须披露。" },
      { en: "Brief creators clearly.", zh: "明确简报内容创作者。" },
      { en: "Authenticity outperforms polish.", zh: "真实胜过精修。" },
      { en: "Measure beyond follower count.", zh: "不要只看粉丝数。" }
    ]},
  { id: "pet-partnership", name: "PET · 合作伙伴 Partnership",
    words: [
      W("partnership","合作"), W("partner","伙伴"), W("alliance","联盟"), W("affiliate","加盟"),
      W("co-marketing","联合营销"), W("co-selling","联合销售"), W("integration","集成"), W("reseller","分销商"),
      W("channel","渠道"), W("OEM","原厂"), W("white-label","白牌"), W("revenue-share","分成"),
      W("MOU","谅解备忘"), W("contract","合同"), W("SLA","服务承诺"), W("escalation","升级"),
      W("kickoff","启动"), W("alignment","对齐"), W("joint","联合"), W("ecosystem","生态"),
      W("marketplace","市场"), W("listing","入驻"), W("certification","认证"), W("badge","徽章"), W("co-brand","联合品牌")
    ],
    sentences: [
      { en: "Sign the MOU first.", zh: "先签 MOU。" },
      { en: "Co-marketing doubles reach.", zh: "联合营销倍增触达。" },
      { en: "Define revenue share clearly.", zh: "明确分成方案。" },
      { en: "Channel partners scale faster.", zh: "渠道伙伴扩张更快。" },
      { en: "Build a partner ecosystem.", zh: "搭建合作生态。" }
    ]},
  { id: "pet-international", name: "PET · 国际业务 International",
    words: [
      W("international","国际"), W("global","全球"), W("local","本地"), W("expansion","扩张"),
      W("market-entry","进入"), W("subsidiary","子公司"), W("branch","分部"), W("HQ","总部"),
      W("currency","货币"), W("hedge","对冲"), W("localization","本地化"), W("translation","翻译"),
      W("compliance","合规"), W("tariff","关税"), W("import","进口"), W("export","出口"),
      W("logistics","物流"), W("region","地区"), W("EMEA","欧中非"), W("APAC","亚太"),
      W("LATAM","拉美"), W("timezone","时区"), W("culture","文化"), W("regulation","法规"), W("VAT","增值税")
    ],
    sentences: [
      { en: "Localize before launching.", zh: "上线前先本地化。" },
      { en: "Hedge currency risk early.", zh: "尽早对冲汇率风险。" },
      { en: "Adapt to local culture.", zh: "适应当地文化。" },
      { en: "APAC is our fastest region.", zh: "亚太是增长最快的区域。" },
      { en: "Compliance varies by country.", zh: "合规因国而异。" }
    ]},
  { id: "pet-ir", name: "PET · 投资者关系 Investor Relations",
    words: [
      W("investor","投资者"), W("shareholder","股东"), W("relations","关系"), W("earnings","财报"),
      W("guidance","指引"), W("call","电话会"), W("transcript","纪要"), W("Q&A","问答"),
      W("analyst","分析师"), W("model","模型"), W("estimate","预期"), W("consensus","共识"),
      W("beat","超过"), W("miss","低于"), W("revise","调整"), W("disclosure","披露"),
      W("filing","申报"), W("10-K","年报"), W("10-Q","季报"), W("8-K","重大事件"),
      W("press-release","新闻稿"), W("roadshow","路演"), W("conference","会议"), W("buyback","回购"), W("dividend","分红")
    ],
    sentences: [
      { en: "Beat consensus this quarter.", zh: "本季超共识。" },
      { en: "File the 10-K on time.", zh: "按时提交年报。" },
      { en: "Host the earnings call Tuesday.", zh: "周二开财报电话会。" },
      { en: "Provide forward guidance.", zh: "提供前瞻指引。" },
      { en: "Engage analysts proactively.", zh: "主动联系分析师。" }
    ]},
  { id: "pet-board", name: "PET · 董事会 Board",
    words: [
      W("board","董事会"), W("director","董事"), W("chair","主席"), W("independent","独立"),
      W("committee","委员会"), W("audit","审计"), W("compensation","薪酬"), W("governance","治理"),
      W("meeting","会议"), W("minutes","纪要"), W("agenda","议程"), W("resolution","决议"),
      W("quorum","法定人数"), W("vote","表决"), W("approve","批准"), W("dissent","反对"),
      W("fiduciary","受托人"), W("conflict","利益冲突"), W("recuse","回避"), W("strategy","战略"),
      W("succession","继任"), W("CEO","首席执行官"), W("oversight","监督"), W("policy","政策"), W("evaluation","评估")
    ],
    sentences: [
      { en: "Board meetings happen quarterly.", zh: "董事会每季召开。" },
      { en: "Independent directors strengthen oversight.", zh: "独立董事强化监督。" },
      { en: "Approve the budget unanimously.", zh: "全票通过预算。" },
      { en: "Recuse from conflicts.", zh: "利益冲突回避。" },
      { en: "Plan CEO succession early.", zh: "尽早规划 CEO 继任。" }
    ]},
  { id: "pet-grant", name: "PET · 拨款资助 Grants",
    words: [
      W("grant","拨款"), W("foundation","基金会"), W("applicant","申请人"), W("eligibility","资格"),
      W("proposal","提案"), W("LOI","意向书"), W("budget","预算"), W("narrative","叙述"),
      W("outcome","成果"), W("impact","影响"), W("evaluation","评估"), W("report","报告"),
      W("renewal","续期"), W("decline","被拒"), W("award","授予"), W("recipient","受赠人"),
      W("matching","配套"), W("restricted","限定用途"), W("unrestricted","不限"), W("endowment","捐赠基金"),
      W("philanthropy","慈善"), W("funder","资助方"), W("RFP","征案"), W("deadline","截止"), W("milestone","里程碑")
    ],
    sentences: [
      { en: "Read the RFP twice.", zh: "把征案读两遍。" },
      { en: "Match your narrative to outcomes.", zh: "叙述要呼应成果。" },
      { en: "Submit before the deadline.", zh: "在截止前提交。" },
      { en: "Reporting matters as much as winning.", zh: "结题报告和申请一样重要。" },
      { en: "Build long-term funder relationships.", zh: "维护长期资助方关系。" }
    ]},
  { id: "pet-ops", name: "PET · 运营 Operations",
    words: [
      W("operations","运营"), W("process","流程"), W("workflow","工作流"), W("SOP","标准流程"),
      W("scale","规模"), W("automate","自动化"), W("efficient","高效"), W("bottleneck","瓶颈"),
      W("throughput","通量"), W("capacity","产能"), W("incident","事件"), W("postmortem","复盘"),
      W("on-call","值班"), W("escalation","升级"), W("runbook","操作手册"), W("dashboard","看板"),
      W("alert","告警"), W("monitor","监控"), W("uptime","在线时间"), W("downtime","停机"),
      W("backup","备份"), W("recovery","恢复"), W("DR","灾备"), W("vendor","供应商"), W("contract","合同")
    ],
    sentences: [
      { en: "Document SOPs clearly.", zh: "清楚地文档化 SOP。" },
      { en: "Eliminate bottlenecks fast.", zh: "快速消除瓶颈。" },
      { en: "Run blameless postmortems.", zh: "做无指责复盘。" },
      { en: "Improve uptime quarter over quarter.", zh: "在线率季度提升。" },
      { en: "Automate repetitive work.", zh: "自动化重复工作。" }
    ]},
  { id: "pet-customer-support", name: "PET · 客户支持 Support",
    words: [
      W("support","支持"), W("ticket","工单"), W("queue","队列"), W("priority","优先"),
      W("CSAT","满意度"), W("first-response","首次响应"), W("resolution","解决"), W("escalation","升级"),
      W("agent","客服"), W("scripts","话术"), W("macro","快捷回复"), W("self-service","自助服务"),
      W("knowledge","知识库"), W("chatbot","聊天机器人"), W("AI","AI"), W("triage","分诊"),
      W("severity","严重等级"), W("SLA","服务承诺"), W("handoff","交接"), W("documentation","文档"),
      W("feedback","反馈"), W("survey","调查"), W("loop","闭环"), W("empathy","共情"), W("apology","道歉")
    ],
    sentences: [
      { en: "Respond within SLA every time.", zh: "每次都在 SLA 内响应。" },
      { en: "Lead with empathy.", zh: "以共情开场。" },
      { en: "Close the feedback loop.", zh: "完成反馈闭环。" },
      { en: "Document fixes for everyone.", zh: "把解决方案文档化。" },
      { en: "Triage by severity.", zh: "按严重程度分诊。" }
    ]},
  { id: "pet-legal", name: "PET · 法律事务 Legal",
    words: [
      W("legal","法律"), W("counsel","律师"), W("attorney","律师"), W("contract","合同"),
      W("NDA","保密协议"), W("MSA","主服务协议"), W("SOW","工作说明书"), W("indemnify","赔偿"),
      W("liability","责任"), W("warranty","保修"), W("disclaimer","免责"), W("termination","终止"),
      W("breach","违约"), W("dispute","争议"), W("arbitration","仲裁"), W("jurisdiction","管辖"),
      W("clause","条款"), W("provision","规定"), W("amendment","修订"), W("signature","签字"),
      W("IP","知识产权"), W("trademark","商标"), W("copyright","版权"), W("patent","专利"), W("licensing","许可")
    ],
    sentences: [
      { en: "Run it past legal.", zh: "让法务过一遍。" },
      { en: "Sign the NDA first.", zh: "先签保密协议。" },
      { en: "Watch the indemnity clause.", zh: "注意赔偿条款。" },
      { en: "Termination requires notice.", zh: "终止需要提前通知。" },
      { en: "IP belongs to the company.", zh: "知识产权归公司。" }
    ]}
);

/* ============================================================
   美国常用口语扩充：第七批
   ============================================================ */
DATA.english_daily.push(
  { id: "us-kids", name: "🧒 哄孩子 With Kids",
    words: [],
    sentences: [
      { en: "Time to brush your teeth, buddy.", zh: "宝贝，该刷牙了。" },
      { en: "Pick up your toys, please.", zh: "请把玩具收好。" },
      { en: "Five more minutes, then bed.", zh: "再玩五分钟就睡。" },
      { en: "Use your inside voice.", zh: "小声说话。" },
      { en: "No screens at the table.", zh: "餐桌上不玩屏幕。" },
      { en: "What did you learn at school?", zh: "今天学校学了什么？" },
      { en: "Eat one more bite.", zh: "再吃一口。" },
      { en: "No running in the house.", zh: "屋里别跑。" },
      { en: "Use kind words.", zh: "好好说话。" },
      { en: "Hands washed before dinner.", zh: "饭前先洗手。" },
      { en: "Help your little sister.", zh: "帮一下妹妹。" },
      { en: "I'm so proud of you.", zh: "我为你骄傲。" },
      { en: "Did you finish your homework?", zh: "作业写完了吗？" },
      { en: "Sweet dreams, kiddo.", zh: "好梦，小家伙。" }
    ]},
  { id: "us-teen", name: "🧑 青少年 Teen Talk",
    words: [],
    sentences: [
      { en: "How's school going?", zh: "学校怎么样？" },
      { en: "Did you study for finals?", zh: "期末复习了吗？" },
      { en: "Curfew is at 10 PM.", zh: "十点必须回家。" },
      { en: "Don't post that online.", zh: "别发到网上。" },
      { en: "Phones away during dinner.", zh: "吃饭时把手机收起来。" },
      { en: "Take out the trash, please.", zh: "请把垃圾倒了。" },
      { en: "How was practice today?", zh: "今天训练怎么样？" },
      { en: "Drive safely tonight.", zh: "今晚开车小心。" },
      { en: "Did you text me back?", zh: "你回我消息了吗？" },
      { en: "Trust takes time.", zh: "信任需要时间。" },
      { en: "We need to talk later.", zh: "我们一会儿要谈谈。" },
      { en: "Good choice, proud of you.", zh: "选得好，为你骄傲。" },
      { en: "Plans for the weekend?", zh: "周末有什么安排？" },
      { en: "Love you, kiddo.", zh: "爱你，孩子。" }
    ]},
  { id: "us-school-life", name: "🎒 学校生活 School Life",
    words: [],
    sentences: [
      { en: "Did you pack your lunch?", zh: "午餐带了吗？" },
      { en: "Don't forget your textbook.", zh: "别忘了课本。" },
      { en: "I'll pick you up at three.", zh: "我三点接你。" },
      { en: "Try out for the team.", zh: "去报名校队。" },
      { en: "Substitute teacher today.", zh: "今天是代课老师。" },
      { en: "Lunch break already?", zh: "已经午休了？" },
      { en: "Pop quiz this morning.", zh: "今早突击测验。" },
      { en: "Field trip next week!", zh: "下周校外活动！" },
      { en: "I forgot my locker code.", zh: "我忘了储物柜密码。" },
      { en: "Class president election.", zh: "班长选举。" },
      { en: "Pep rally on Friday.", zh: "周五动员大会。" },
      { en: "Detention after school.", zh: "放学后留校。" },
      { en: "Report card next week.", zh: "下周成绩单。" },
      { en: "See you at recess!", zh: "课间见！" }
    ]},
  { id: "us-tutoring", name: "📚 辅导 Tutoring",
    words: [],
    sentences: [
      { en: "Let's review last week's material.", zh: "我们复习上周内容。" },
      { en: "Walk me through the problem.", zh: "把题目讲给我听。" },
      { en: "Show your work.", zh: "把步骤写出来。" },
      { en: "Let's try a similar example.", zh: "我们试个类似的例子。" },
      { en: "You're getting better at this.", zh: "你这方面越来越好了。" },
      { en: "Take your time.", zh: "慢慢来。" },
      { en: "It's okay to be stuck.", zh: "卡住没关系。" },
      { en: "Break it into smaller steps.", zh: "拆成更小的步骤。" },
      { en: "Practice ten of these tonight.", zh: "今晚练十道。" },
      { en: "Highlight the key formula.", zh: "标出关键公式。" },
      { en: "What's the question really asking?", zh: "题目真正在问什么？" },
      { en: "I'll send you extra practice.", zh: "我发你额外练习。" },
      { en: "Great progress today!", zh: "今天进步很大！" },
      { en: "See you next session.", zh: "下次见。" }
    ]},
  { id: "us-carpool", name: "🚙 拼车 Carpool",
    words: [],
    sentences: [
      { en: "I'll drive Monday and Wednesday.", zh: "周一三我开车。" },
      { en: "Can you take the kids tomorrow?", zh: "你明天能送孩子吗？" },
      { en: "Pickup at 7:45 sharp.", zh: "7:45 准时接。" },
      { en: "Running five minutes late.", zh: "晚五分钟。" },
      { en: "Buckle up, everyone.", zh: "都系好安全带。" },
      { en: "Backpack in the trunk.", zh: "书包放后备箱。" },
      { en: "Snack for the ride.", zh: "路上吃的小零食。" },
      { en: "Quiet music, please.", zh: "请放小声点的音乐。" },
      { en: "We're swapping schools today.", zh: "今天换学校了。" },
      { en: "Don't forget homework.", zh: "别忘了作业。" },
      { en: "Anyone need a stop?", zh: "有人要中途停一下吗？" },
      { en: "See you at pickup.", zh: "接孩子时见。" },
      { en: "Carpool is a lifesaver.", zh: "拼车太救命了。" },
      { en: "Thanks for swapping with me.", zh: "谢谢和我换班。" }
    ]},
  { id: "us-pickup", name: "📞 接孩子 Pickup",
    words: [],
    sentences: [
      { en: "I'm in the pickup line.", zh: "我在接送队列里。" },
      { en: "Wait at the front office.", zh: "在前台等。" },
      { en: "Backpack and lunchbox?", zh: "书包和饭盒都拿了吗？" },
      { en: "How was your day?", zh: "今天怎么样？" },
      { en: "Did you eat your snack?", zh: "零食吃了吗？" },
      { en: "Grandma will pick you up.", zh: "奶奶来接你。" },
      { en: "Mommy is running late.", zh: "妈妈晚一点。" },
      { en: "Hop in, we're heading home.", zh: "上车，回家。" },
      { en: "Activities first or homework?", zh: "先活动还是先作业？" },
      { en: "I packed water for you.", zh: "我给你带了水。" },
      { en: "Anything fun happen?", zh: "有什么好玩的事吗？" },
      { en: "Made any new friends?", zh: "交到新朋友了吗？" },
      { en: "Aftercare ends at six.", zh: "课后托管六点结束。" },
      { en: "Same time tomorrow.", zh: "明天同一时间。" }
    ]},
  { id: "us-gamenight", name: "🎲 游戏夜 Game Night",
    words: [],
    sentences: [
      { en: "Who's up for board games?", zh: "谁想玩桌游？" },
      { en: "I'll pick Monopoly.", zh: "我选大富翁。" },
      { en: "Shuffle the deck.", zh: "洗牌。" },
      { en: "Roll the dice.", zh: "掷骰子。" },
      { en: "It's your turn.", zh: "轮到你了。" },
      { en: "Don't peek!", zh: "别偷看！" },
      { en: "I draw four cards.", zh: "我抽四张牌。" },
      { en: "Pass go, collect 200.", zh: "经过起点，领 200。" },
      { en: "Trade me a property.", zh: "和我交换一块地。" },
      { en: "Loser does the dishes.", zh: "输的洗碗。" },
      { en: "Beginner's luck!", zh: "新手运气！" },
      { en: "Best of three.", zh: "三局两胜。" },
      { en: "Game over!", zh: "游戏结束！" },
      { en: "Rematch tomorrow?", zh: "明天再战？" }
    ]},
  { id: "us-bbq", name: "🔥 烧烤 BBQ",
    words: [],
    sentences: [
      { en: "Fire up the grill!", zh: "把烤架点上！" },
      { en: "Burgers or hot dogs?", zh: "汉堡还是热狗？" },
      { en: "Add some hickory chips.", zh: "加点山核桃木。" },
      { en: "How do you like it cooked?", zh: "要几分熟？" },
      { en: "Medium well, please.", zh: "七分熟。" },
      { en: "Pass the BBQ sauce.", zh: "递下烧烤酱。" },
      { en: "Save room for s'mores.", zh: "给棉花糖夹心饼留肚子。" },
      { en: "Watch the flare-up!", zh: "小心起火！" },
      { en: "Corn on the cob is ready.", zh: "玉米棒好了。" },
      { en: "Bring out the coleslaw.", zh: "上凉拌卷心菜。" },
      { en: "Time to flip the burgers.", zh: "汉堡该翻面了。" },
      { en: "Vegetarian options too.", zh: "也有素食选项。" },
      { en: "Pour the lemonade.", zh: "倒柠檬水。" },
      { en: "Best BBQ ever!", zh: "最棒的烧烤！" }
    ]},
  { id: "us-dinnerparty", name: "🍷 家宴 Dinner Party",
    words: [],
    sentences: [
      { en: "Glad you could make it!", zh: "你能来太好了！" },
      { en: "Make yourself at home.", zh: "别客气，把这儿当自己家。" },
      { en: "Wine or sparkling water?", zh: "要葡萄酒还是气泡水？" },
      { en: "Appetizers are in the kitchen.", zh: "开胃菜在厨房。" },
      { en: "Dinner is served!", zh: "开饭啦！" },
      { en: "Hope you enjoy the meal.", zh: "祝你吃得愉快。" },
      { en: "Save room for dessert.", zh: "给甜点留肚子。" },
      { en: "Compliments to the chef.", zh: "给厨师点赞。" },
      { en: "Could you pass the salt?", zh: "可以把盐递给我吗？" },
      { en: "Refill anyone?", zh: "谁要续杯？" },
      { en: "Toast to friendship!", zh: "为友谊干杯！" },
      { en: "We should do this more often.", zh: "我们应该多聚聚。" },
      { en: "Let me wrap leftovers for you.", zh: "我给你打包剩菜。" },
      { en: "Thanks for coming!", zh: "谢谢光临！" }
    ]},
  { id: "us-wine", name: "🍷 葡萄酒 Wine Talk",
    words: [],
    sentences: [
      { en: "Red or white tonight?", zh: "今晚红的还是白的？" },
      { en: "This pairs well with steak.", zh: "这酒配牛排很好。" },
      { en: "It has nice tannins.", zh: "单宁不错。" },
      { en: "Let it breathe a bit.", zh: "让它醒一下。" },
      { en: "Smooth finish.", zh: "余味顺滑。" },
      { en: "A touch dry for me.", zh: "对我来说有点干。" },
      { en: "Smells like cherries.", zh: "闻起来有樱桃味。" },
      { en: "I prefer Pinot Noir.", zh: "我更喜欢黑皮诺。" },
      { en: "Where's it from?", zh: "产地是哪？" },
      { en: "Tuscany, you'll love it.", zh: "托斯卡纳，你会喜欢的。" },
      { en: "Add a splash to mine.", zh: "给我倒一点。" },
      { en: "Pop the cork!", zh: "开瓶！" },
      { en: "Cheers, to good company.", zh: "为美好的相聚干杯。" },
      { en: "One glass is enough for me.", zh: "我一杯就够。" }
    ]},
  { id: "us-coffee2", name: "☕ 咖啡进阶 Coffee Talk",
    words: [],
    sentences: [
      { en: "Pour-over or espresso?", zh: "手冲还是浓缩？" },
      { en: "I prefer single origin.", zh: "我喜欢单品豆。" },
      { en: "Fresh beans only.", zh: "只要新鲜豆子。" },
      { en: "Grind it medium-fine.", zh: "研磨偏细。" },
      { en: "Oat milk for me.", zh: "我加燕麦奶。" },
      { en: "Add a shot of vanilla.", zh: "加一份香草。" },
      { en: "Iced cold brew, please.", zh: "请给我冰冷萃。" },
      { en: "Too bitter for me.", zh: "对我来说太苦了。" },
      { en: "Tastes a bit burnt.", zh: "有点焦味。" },
      { en: "Love the crema.", zh: "我爱这层 crema。" },
      { en: "Best coffee in town.", zh: "城里最好的咖啡。" },
      { en: "Reusable cup ready.", zh: "环保杯准备好了。" },
      { en: "Need a refill?", zh: "续杯吗？" },
      { en: "Caffeine fueled day.", zh: "靠咖啡因撑过一天。" }
    ]},
  { id: "us-vegan", name: "🥗 素食 Vegan",
    words: [],
    sentences: [
      { en: "I'm vegan, thanks.", zh: "我是素食者，谢谢。" },
      { en: "Anything plant-based?", zh: "有植物基的吗？" },
      { en: "No dairy or eggs.", zh: "不要奶蛋。" },
      { en: "Tofu instead of meat?", zh: "用豆腐代替肉？" },
      { en: "Coconut milk for the curry.", zh: "咖喱用椰奶。" },
      { en: "I love nutritional yeast.", zh: "我爱营养酵母。" },
      { en: "Vegan butter is fine.", zh: "素黄油就行。" },
      { en: "Almond milk latte, please.", zh: "请给我杏仁奶拿铁。" },
      { en: "Grilled veggies are amazing.", zh: "烤蔬菜超棒。" },
      { en: "Cashew cheese tastes great.", zh: "腰果芝士好吃。" },
      { en: "Lentil soup is filling.", zh: "扁豆汤很饱腹。" },
      { en: "Vegan brownies, anyone?", zh: "有人要素布朗尼吗？" },
      { en: "Plant-based diet rocks.", zh: "植物饮食真棒。" },
      { en: "Help save the planet.", zh: "帮地球一把。" }
    ]},
  { id: "us-allergy", name: "⚠️ 过敏 Allergy",
    words: [],
    sentences: [
      { en: "I'm allergic to peanuts.", zh: "我对花生过敏。" },
      { en: "Does this contain dairy?", zh: "这含奶吗？" },
      { en: "Cross-contamination matters.", zh: "交叉污染要注意。" },
      { en: "Carry an EpiPen.", zh: "带肾上腺素笔。" },
      { en: "Read the ingredient list.", zh: "看下成分表。" },
      { en: "Gluten-free, please.", zh: "请无麸质。" },
      { en: "Mild reaction, no swelling.", zh: "轻微反应，没有肿胀。" },
      { en: "Call 911 if it's severe.", zh: "严重就打 911。" },
      { en: "Tree nut allergy is serious.", zh: "树坚果过敏很严重。" },
      { en: "Hives appeared after dinner.", zh: "饭后起了荨麻疹。" },
      { en: "Doctor prescribed antihistamines.", zh: "医生开了抗组胺药。" },
      { en: "Pollen season is brutal.", zh: "花粉季难熬。" },
      { en: "Lactose intolerance, not allergy.", zh: "我是乳糖不耐，不是过敏。" },
      { en: "Notify the restaurant ahead.", zh: "提前告诉餐厅。" }
    ]},
  { id: "us-mealprep", name: "🍱 备餐 Meal Prep",
    words: [],
    sentences: [
      { en: "Sunday is meal prep day.", zh: "周日是备餐日。" },
      { en: "Roast veggies in bulk.", zh: "批量烤蔬菜。" },
      { en: "Portion into containers.", zh: "分装到便当盒。" },
      { en: "Label with the date.", zh: "贴上日期。" },
      { en: "Freeze portions for later.", zh: "分装冷冻备用。" },
      { en: "Chicken, rice, broccoli — classic.", zh: "鸡肉、米饭、西兰花，经典。" },
      { en: "Helps me stay on track.", zh: "帮我保持节奏。" },
      { en: "Saves money and time.", zh: "省钱又省时间。" },
      { en: "Mason jars work great.", zh: "梅森瓶很好用。" },
      { en: "Add a sauce on the side.", zh: "酱料另外装。" },
      { en: "Lasts up to four days.", zh: "可存四天。" },
      { en: "Don't forget to hydrate.", zh: "别忘喝水。" },
      { en: "Prep snacks too.", zh: "零食也提前准备。" },
      { en: "Feels so adult.", zh: "感觉超大人。" }
    ]},
  { id: "us-laundry2", name: "🧺 洗衣进阶 Laundry Tips",
    words: [],
    sentences: [
      { en: "Separate lights and darks.", zh: "浅色深色要分开。" },
      { en: "Cold wash for colors.", zh: "彩衣冷水洗。" },
      { en: "Use mesh bags for delicates.", zh: "贴身衣物用洗衣袋。" },
      { en: "Spot-treat the stain.", zh: "局部处理污渍。" },
      { en: "Don't overload the machine.", zh: "别塞太满。" },
      { en: "Air dry to save energy.", zh: "晾干省电。" },
      { en: "Iron while damp.", zh: "趁微湿时熨。" },
      { en: "Fold straight from the dryer.", zh: "刚出烘干机就叠。" },
      { en: "Add scent boosters.", zh: "加香味增强剂。" },
      { en: "Avoid fabric softener on towels.", zh: "毛巾别用柔顺剂。" },
      { en: "Reshape sweaters flat.", zh: "毛衣平铺整形。" },
      { en: "Clean lint trap every load.", zh: "每次清绒毛网。" },
      { en: "Vinegar removes odors.", zh: "白醋除异味。" },
      { en: "Hang dry the silk.", zh: "丝绸挂干。" }
    ]},
  { id: "us-bedtime", name: "🌙 哄睡 Bedtime",
    words: [],
    sentences: [
      { en: "Time for bed, sweetie.", zh: "宝贝，该睡了。" },
      { en: "Brush teeth first.", zh: "先刷牙。" },
      { en: "Pick a book to read.", zh: "选本书来读。" },
      { en: "One story, then lights out.", zh: "一个故事，然后熄灯。" },
      { en: "Nightlight stays on.", zh: "夜灯开着。" },
      { en: "Snuggle with your bear.", zh: "和小熊一起睡。" },
      { en: "Goodnight kiss?", zh: "晚安亲一下？" },
      { en: "Sweet dreams.", zh: "做个好梦。" },
      { en: "See you in the morning.", zh: "明早见。" },
      { en: "Stay in bed, please.", zh: "请待在床上。" },
      { en: "Need water? Just one sip.", zh: "要喝水？就一口。" },
      { en: "Bathroom break first.", zh: "先去厕所。" },
      { en: "Quiet voices only.", zh: "小声说话。" },
      { en: "Love you to the moon.", zh: "爱你到月亮。" }
    ]}
);

/* ============================================================
   PET 词库扩充：第八批（冲刺收尾）
   ============================================================ */
DATA.english_pet.push(
  { id: "pet-ml", name: "PET · 机器学习 ML",
    words: [
      W("machine-learning","机器学习"), W("supervised","监督"), W("unsupervised","无监督"), W("reinforcement","强化学习"),
      W("model","模型"), W("training","训练"), W("inference","推理"), W("dataset","数据集"),
      W("feature","特征"), W("label","标签"), W("classification","分类"), W("regression","回归"),
      W("clustering","聚类"), W("neural-network","神经网络"), W("deep-learning","深度学习"), W("transformer","Transformer"),
      W("gradient","梯度"), W("loss","损失"), W("epoch","轮次"), W("batch","批次"),
      W("overfitting","过拟合"), W("underfitting","欠拟合"), W("accuracy","准确率"), W("precision","精确率"), W("recall","召回率")
    ],
    sentences: [
      { en: "Train the model overnight.", zh: "整夜训练模型。" },
      { en: "Watch out for overfitting.", zh: "小心过拟合。" },
      { en: "Larger datasets often help.", zh: "更大的数据集通常有帮助。" },
      { en: "Tune the learning rate carefully.", zh: "仔细调学习率。" },
      { en: "Inference latency matters in prod.", zh: "线上推理延迟很关键。" }
    ]},
  { id: "pet-cloud", name: "PET · 云计算 Cloud",
    words: [
      W("cloud","云"), W("AWS","亚马逊云"), W("Azure","微软云"), W("GCP","谷歌云"),
      W("region","区域"), W("zone","可用区"), W("instance","实例"), W("server","服务器"),
      W("container","容器"), W("Docker","Docker"), W("Kubernetes","Kubernetes"), W("serverless","无服务"),
      W("lambda","Lambda"), W("storage","存储"), W("bucket","桶"), W("CDN","内容分发"),
      W("DNS","域名"), W("load-balancer","负载均衡"), W("autoscale","自动扩缩"), W("VPC","虚拟私有云"),
      W("subnet","子网"), W("security-group","安全组"), W("billing","计费"), W("usage","用量"), W("reserved","预留")
    ],
    sentences: [
      { en: "Spin up an EC2 instance.", zh: "起一台 EC2 实例。" },
      { en: "Autoscale handles traffic spikes.", zh: "自动扩缩应对流量峰值。" },
      { en: "Move static assets to a CDN.", zh: "静态资源走 CDN。" },
      { en: "Cloud bills add up fast.", zh: "云账单累得很快。" },
      { en: "Use reserved instances to save.", zh: "用预留实例省钱。" }
    ]},
  { id: "pet-devops", name: "PET · DevOps",
    words: [
      W("DevOps","DevOps"), W("CI","持续集成"), W("CD","持续部署"), W("pipeline","流水线"),
      W("build","构建"), W("test","测试"), W("deploy","部署"), W("rollback","回滚"),
      W("canary","金丝雀"), W("blue-green","蓝绿"), W("feature-flag","特性开关"), W("monitoring","监控"),
      W("alerting","告警"), W("logging","日志"), W("tracing","追踪"), W("metric","指标"),
      W("uptime","在线率"), W("SLO","服务目标"), W("SLA","服务承诺"), W("incident","事件"),
      W("postmortem","复盘"), W("infrastructure","基础设施"), W("Terraform","Terraform"), W("config","配置"), W("secret","密钥")
    ],
    sentences: [
      { en: "Roll out behind a feature flag.", zh: "用特性开关上线。" },
      { en: "Canary deploy to 5% first.", zh: "金丝雀先发 5%。" },
      { en: "Set up alerting that won't page in vain.", zh: "搭好告警，不要乱叫。" },
      { en: "Run postmortems blamelessly.", zh: "无指责复盘。" },
      { en: "Pin secrets in a vault.", zh: "把密钥放进 vault。" }
    ]},
  { id: "pet-database", name: "PET · 数据库 Database",
    words: [
      W("database","数据库"), W("table","表"), W("row","行"), W("column","列"),
      W("schema","模式"), W("index","索引"), W("primary-key","主键"), W("foreign-key","外键"),
      W("join","连接"), W("query","查询"), W("transaction","事务"), W("commit","提交"),
      W("rollback","回滚"), W("ACID","ACID"), W("replication","复制"), W("shard","分片"),
      W("backup","备份"), W("restore","恢复"), W("normalization","归一化"), W("denormalize","反归一化"),
      W("SQL","SQL"), W("NoSQL","非关系"), W("MongoDB","MongoDB"), W("Postgres","Postgres"), W("Redis","Redis")
    ],
    sentences: [
      { en: "Add an index to speed up the query.", zh: "加个索引让查询更快。" },
      { en: "Run it inside a transaction.", zh: "在事务里跑。" },
      { en: "Shard once a table grows large.", zh: "表大了就分片。" },
      { en: "Always test backups.", zh: "永远测试备份。" },
      { en: "Choose the right database for the job.", zh: "为场景选合适的数据库。" }
    ]},
  { id: "pet-api", name: "PET · API 设计 API Design",
    words: [
      W("API","接口"), W("REST","REST"), W("GraphQL","GraphQL"), W("gRPC","gRPC"),
      W("endpoint","端点"), W("resource","资源"), W("method","方法"), W("GET","GET"),
      W("POST","POST"), W("PUT","PUT"), W("DELETE","DELETE"), W("status-code","状态码"),
      W("payload","载荷"), W("schema","模式"), W("versioning","版本管理"), W("pagination","分页"),
      W("filter","过滤"), W("rate-limit","限流"), W("token","令牌"), W("auth","认证"),
      W("OAuth","OAuth"), W("JWT","JWT"), W("webhook","Webhook"), W("idempotent","幂等"), W("contract","契约")
    ],
    sentences: [
      { en: "Design REST endpoints clearly.", zh: "清晰设计 REST 端点。" },
      { en: "Version APIs from day one.", zh: "API 从第一天就做版本管理。" },
      { en: "Idempotent endpoints are safer.", zh: "幂等接口更安全。" },
      { en: "Document every endpoint.", zh: "每个端点都写文档。" },
      { en: "Webhooks notify consumers asynchronously.", zh: "Webhook 异步通知消费者。" }
    ]},
  { id: "pet-mobile-dev", name: "PET · 移动开发 Mobile Dev",
    words: [
      W("mobile","移动"), W("iOS","iOS"), W("Android","Android"), W("Swift","Swift"),
      W("Kotlin","Kotlin"), W("native","原生"), W("hybrid","混合"), W("React-Native","React Native"),
      W("Flutter","Flutter"), W("UI","界面"), W("UX","体验"), W("gesture","手势"),
      W("push","推送"), W("notification","通知"), W("permission","权限"), W("camera","相机"),
      W("location","定位"), W("offline","离线"), W("battery","电池"), W("performance","性能"),
      W("App-Store","应用商店"), W("Play-Store","应用市场"), W("review","审核"), W("crash","崩溃"), W("analytics","分析")
    ],
    sentences: [
      { en: "Submit for App Store review.", zh: "提交审核。" },
      { en: "Optimize for battery life.", zh: "优化电池续航。" },
      { en: "Handle offline gracefully.", zh: "优雅处理离线。" },
      { en: "Test on real devices.", zh: "用真机测试。" },
      { en: "Crash reports drive priorities.", zh: "崩溃报告决定优先级。" }
    ]},
  { id: "pet-game-dev", name: "PET · 游戏开发 Game Dev",
    words: [
      W("game","游戏"), W("engine","引擎"), W("Unity","Unity"), W("Unreal","虚幻"),
      W("sprite","精灵"), W("animation","动画"), W("physics","物理"), W("collision","碰撞"),
      W("script","脚本"), W("level","关卡"), W("scene","场景"), W("character","角色"),
      W("FPS","帧率"), W("multiplayer","多人"), W("server","服务器"), W("matchmaking","匹配"),
      W("inventory","物品栏"), W("quest","任务"), W("achievement","成就"), W("leaderboard","排行榜"),
      W("monetize","变现"), W("IAP","内购"), W("ad","广告"), W("cosmetic","外观"), W("pass","通行证")
    ],
    sentences: [
      { en: "Keep frame rate above sixty.", zh: "帧率保持 60 以上。" },
      { en: "Multiplayer needs robust netcode.", zh: "多人对网络代码要求高。" },
      { en: "Playtest with real players.", zh: "用真实玩家测试。" },
      { en: "Balance monetization with fun.", zh: "变现要平衡乐趣。" },
      { en: "Ship a demo first.", zh: "先发个演示版。" }
    ]},
  { id: "pet-ai-ethics", name: "PET · AI 伦理 AI Ethics",
    words: [
      W("ethics","伦理"), W("bias","偏见"), W("fairness","公平"), W("transparency","透明"),
      W("accountability","责任"), W("explainability","可解释"), W("privacy","隐私"), W("consent","同意"),
      W("dataset","数据集"), W("representation","代表性"), W("harm","危害"), W("misuse","滥用"),
      W("deepfake","深度伪造"), W("manipulation","操纵"), W("regulation","监管"), W("governance","治理"),
      W("audit","审计"), W("red-team","红队"), W("alignment","对齐"), W("safety","安全"),
      W("hallucination","幻觉"), W("guardrail","护栏"), W("disclosure","披露"), W("watermark","水印"), W("oversight","监督")
    ],
    sentences: [
      { en: "Audit models for bias.", zh: "审计模型偏见。" },
      { en: "Disclose AI-generated content.", zh: "披露 AI 生成内容。" },
      { en: "Red team before launch.", zh: "上线前红队测试。" },
      { en: "Privacy is non-negotiable.", zh: "隐私不可妥协。" },
      { en: "Guardrails reduce harm.", zh: "护栏减少危害。" }
    ]},
  { id: "pet-uxdesign", name: "PET · UX 设计 UX Design",
    words: [
      W("UX","用户体验"), W("UI","用户界面"), W("design","设计"), W("user","用户"),
      W("persona","画像"), W("journey","旅程"), W("flow","流程"), W("wireframe","线框"),
      W("mockup","视觉稿"), W("prototype","原型"), W("interaction","交互"), W("microcopy","微文案"),
      W("hierarchy","层级"), W("spacing","间距"), W("typography","字体"), W("contrast","对比"),
      W("affordance","可供性"), W("feedback","反馈"), W("accessibility","可访问"), W("inclusive","包容"),
      W("usability","可用性"), W("Figma","Figma"), W("Sketch","Sketch"), W("design-system","设计系统"), W("component","组件")
    ],
    sentences: [
      { en: "Start with low-fi wireframes.", zh: "从低保真线框开始。" },
      { en: "Microcopy carries the experience.", zh: "微文案承载体验。" },
      { en: "Test for accessibility too.", zh: "也要测试可访问性。" },
      { en: "Reuse components from the system.", zh: "复用设计系统组件。" },
      { en: "Hierarchy guides the eye.", zh: "层级引导视线。" }
    ]},
  { id: "pet-typography", name: "PET · 字体 Typography",
    words: [
      W("typography","字体"), W("font","字体"), W("typeface","字样"), W("serif","衬线"),
      W("sans-serif","无衬线"), W("monospace","等宽"), W("display","显示字体"), W("body","正文"),
      W("weight","字重"), W("style","样式"), W("italic","斜体"), W("bold","粗体"),
      W("ligature","连字"), W("kerning","字距"), W("tracking","字间距"), W("leading","行距"),
      W("baseline","基线"), W("ascender","上伸部"), W("descender","下伸部"), W("x-height","x 高度"),
      W("cap-height","大写高度"), W("paragraph","段落"), W("alignment","对齐"), W("hierarchy","层级"), W("legibility","可读性")
    ],
    sentences: [
      { en: "Pair a serif with a sans.", zh: "衬线配无衬线。" },
      { en: "Mind the leading for readability.", zh: "行距影响可读性。" },
      { en: "Don't use too many weights.", zh: "字重不要太多。" },
      { en: "Hierarchy emerges from contrast.", zh: "层级源于对比。" },
      { en: "Legibility beats style.", zh: "可读性胜于风格。" }
    ]},
  { id: "pet-color", name: "PET · 色彩 Color",
    words: [
      W("color","颜色"), W("hue","色相"), W("saturation","饱和度"), W("brightness","明度"),
      W("contrast","对比度"), W("palette","调色板"), W("primary","原色"), W("secondary","辅色"),
      W("accent","点缀色"), W("complementary","互补"), W("analogous","近似"), W("triad","三色"),
      W("warm","暖色"), W("cool","冷色"), W("neutral","中性色"), W("monochrome","单色"),
      W("gradient","渐变"), W("tint","浅色调"), W("shade","暗色调"), W("tone","色调"),
      W("hex","十六进制"), W("RGB","RGB"), W("HSL","HSL"), W("accessibility","可访问性"), W("AAA","AAA 对比")
    ],
    sentences: [
      { en: "Pick three primary colors max.", zh: "主色最多三种。" },
      { en: "Check color contrast for AA.", zh: "检查 AA 对比度。" },
      { en: "Use accent colors sparingly.", zh: "点缀色少用。" },
      { en: "Cool palettes feel calmer.", zh: "冷色调更平静。" },
      { en: "Hex codes keep things consistent.", zh: "十六进制保持一致。" }
    ]},
  { id: "pet-photo", name: "PET · 摄影 Photography",
    words: [
      W("photography","摄影"), W("camera","相机"), W("lens","镜头"), W("aperture","光圈"),
      W("shutter","快门"), W("ISO","感光度"), W("exposure","曝光"), W("focus","对焦"),
      W("depth-of-field","景深"), W("bokeh","虚化"), W("composition","构图"), W("rule-of-thirds","三分法"),
      W("framing","构框"), W("portrait","人像"), W("landscape","风光"), W("macro","微距"),
      W("flash","闪光灯"), W("tripod","三脚架"), W("RAW","RAW"), W("editing","修图"),
      W("Lightroom","Lightroom"), W("Photoshop","PS"), W("crop","裁切"), W("color-grading","调色"), W("print","打印")
    ],
    sentences: [
      { en: "Shoot in RAW for flexibility.", zh: "拍 RAW 更灵活。" },
      { en: "Compose with the rule of thirds.", zh: "用三分法构图。" },
      { en: "Wide aperture creates bokeh.", zh: "大光圈出虚化。" },
      { en: "Edit before you share.", zh: "分享前先修图。" },
      { en: "Light is everything.", zh: "光是一切。" }
    ]},
  { id: "pet-video", name: "PET · 视频制作 Video Production",
    words: [
      W("video","视频"), W("film","拍摄"), W("shoot","拍"), W("scene","场景"),
      W("shot","镜头"), W("frame","画框"), W("camera","摄像机"), W("crew","摄制组"),
      W("director","导演"), W("DP","摄影指导"), W("script","剧本"), W("storyboard","分镜"),
      W("dolly","摄影车"), W("crane","摇臂"), W("gimbal","稳定器"), W("audio","音频"),
      W("boom","挑杆"), W("mic","麦"), W("editing","剪辑"), W("color-grade","调色"),
      W("VFX","特效"), W("export","导出"), W("render","渲染"), W("codec","编码"), W("resolution","分辨率")
    ],
    sentences: [
      { en: "Storyboard before shooting.", zh: "拍摄前先做分镜。" },
      { en: "Capture clean audio always.", zh: "永远录干净的音频。" },
      { en: "Color grade in post.", zh: "后期调色。" },
      { en: "Render in the right resolution.", zh: "用正确的分辨率渲染。" },
      { en: "B-roll saves your edit.", zh: "B-roll 救剪辑。" }
    ]},
  { id: "pet-3d", name: "PET · 3D & 动画 3D Animation",
    words: [
      W("3D","三维"), W("model","模型"), W("mesh","网格"), W("polygon","多边形"),
      W("vertex","顶点"), W("edge","边"), W("face","面"), W("UV","UV"),
      W("texture","纹理"), W("material","材质"), W("shader","着色器"), W("light","灯光"),
      W("camera","摄像机"), W("rigging","骨骼绑定"), W("skinning","蒙皮"), W("animation","动画"),
      W("keyframe","关键帧"), W("timeline","时间轴"), W("rendering","渲染"), W("Blender","Blender"),
      W("Maya","Maya"), W("Cinema4D","C4D"), W("export","导出"), W("FBX","FBX"), W("simulation","模拟")
    ],
    sentences: [
      { en: "Retopologize before texturing.", zh: "贴图前重拓扑。" },
      { en: "Lighting changes everything.", zh: "灯光改变一切。" },
      { en: "Bake textures to optimize.", zh: "烘焙贴图做优化。" },
      { en: "Animation needs strong timing.", zh: "动画需要好节奏。" },
      { en: "Render farms speed things up.", zh: "渲染农场加速。" }
    ]},
  { id: "pet-music-prod", name: "PET · 音乐制作 Music Prod",
    words: [
      W("DAW","音乐工作站"), W("Logic","Logic"), W("Ableton","Ableton"), W("ProTools","Pro Tools"),
      W("track","音轨"), W("MIDI","MIDI"), W("synth","合成器"), W("sampler","采样器"),
      W("loop","循环"), W("beat","节拍"), W("BPM","每分钟拍数"), W("EQ","均衡"),
      W("compressor","压缩"), W("reverb","混响"), W("delay","延迟"), W("mix","混音"),
      W("master","母带"), W("mono","单声道"), W("stereo","立体声"), W("plugin","插件"),
      W("VST","VST"), W("session","会话"), W("export","导出"), W("WAV","WAV"), W("MP3","MP3")
    ],
    sentences: [
      { en: "Set the project to 120 BPM.", zh: "工程设为 120 BPM。" },
      { en: "Use EQ to carve space.", zh: "用 EQ 切出空间。" },
      { en: "Add subtle reverb.", zh: "加点轻混响。" },
      { en: "Reference a hit track.", zh: "对照一首热门曲。" },
      { en: "Mix sounds great in the car.", zh: "车里听效果好。" }
    ]},
  { id: "pet-writing", name: "PET · 写作 Writing",
    words: [
      W("writing","写作"), W("draft","草稿"), W("outline","大纲"), W("thesis","中心论点"),
      W("structure","结构"), W("paragraph","段落"), W("sentence","句子"), W("word","词"),
      W("verb","动词"), W("noun","名词"), W("adjective","形容词"), W("adverb","副词"),
      W("revise","修改"), W("edit","编辑"), W("rewrite","重写"), W("polish","润色"),
      W("voice","语态"), W("tone","语气"), W("clarity","清晰"), W("concise","简洁"),
      W("metaphor","比喻"), W("simile","明喻"), W("rhythm","节奏"), W("flow","流畅"), W("hook","钩子")
    ],
    sentences: [
      { en: "Outline before drafting.", zh: "写之前先列大纲。" },
      { en: "Open with a strong hook.", zh: "开头要有钩子。" },
      { en: "Cut every unnecessary word.", zh: "砍掉每个多余的词。" },
      { en: "Read it aloud to test rhythm.", zh: "朗读检验节奏。" },
      { en: "Writing is rewriting.", zh: "写作即重写。" }
    ]},
  { id: "pet-storytelling", name: "PET · 讲故事 Storytelling",
    words: [
      W("story","故事"), W("narrative","叙事"), W("character","角色"), W("arc","弧线"),
      W("conflict","冲突"), W("resolution","解决"), W("plot","情节"), W("twist","转折"),
      W("setting","场景"), W("dialogue","对白"), W("monologue","独白"), W("voiceover","旁白"),
      W("hero","主角"), W("villain","反派"), W("mentor","导师"), W("ally","盟友"),
      W("stakes","赌注"), W("tension","张力"), W("foreshadowing","伏笔"), W("flashback","回闪"),
      W("symbolism","象征"), W("motif","母题"), W("theme","主题"), W("climax","高潮"), W("ending","结局")
    ],
    sentences: [
      { en: "Show, don't tell.", zh: "展示，而非叙述。" },
      { en: "Raise the stakes early.", zh: "尽早提升赌注。" },
      { en: "Give your hero real flaws.", zh: "给主角真实缺点。" },
      { en: "Plant foreshadowing carefully.", zh: "细心埋下伏笔。" },
      { en: "The ending earns the story.", zh: "结局赢得故事。" }
    ]},
  { id: "pet-publishing-self", name: "PET · 自媒体 Self-Publishing",
    words: [
      W("self-publish","自出版"), W("Kindle","Kindle"), W("KDP","KDP"), W("formatting","排版"),
      W("ISBN","ISBN"), W("cover","封面"), W("blurb","简介"), W("launch","发布"),
      W("preorder","预售"), W("royalty","版税"), W("Audible","Audible"), W("audiobook","有声书"),
      W("Substack","Substack"), W("Medium","Medium"), W("newsletter","通讯"), W("subscriber","订阅者"),
      W("paywall","付费墙"), W("Patreon","Patreon"), W("crowdfund","众筹"), W("supporter","支持者"),
      W("review","书评"), W("ARC","试读本"), W("launch-team","上线团队"), W("Goodreads","Goodreads"), W("BookTok","BookTok")
    ],
    sentences: [
      { en: "Build a launch team early.", zh: "早早组建发布团队。" },
      { en: "ARC readers help reviews.", zh: "试读读者帮拿评价。" },
      { en: "Substack monetizes essays.", zh: "Substack 把文章变现。" },
      { en: "Cover design matters most.", zh: "封面设计最重要。" },
      { en: "Audiobooks expand reach.", zh: "有声书扩大受众。" }
    ]},
  { id: "pet-mentorship", name: "PET · 师徒关系 Mentorship",
    words: [
      W("mentor","导师"), W("mentee","学员"), W("coach","教练"), W("sponsor","推手"),
      W("guidance","指导"), W("feedback","反馈"), W("growth","成长"), W("goal","目标"),
      W("check-in","对接"), W("milestone","里程碑"), W("question","问题"), W("answer","答案"),
      W("listen","倾听"), W("model","示范"), W("introduce","介绍"), W("network","人脉"),
      W("opportunity","机会"), W("challenge","挑战"), W("perspective","角度"), W("accountability","责任"),
      W("trust","信任"), W("vulnerability","开诚"), W("celebrate","庆祝"), W("setback","挫折"), W("legacy","传承")
    ],
    sentences: [
      { en: "A good mentor opens doors.", zh: "好导师为你打开门。" },
      { en: "Sponsors actively advocate for you.", zh: "推手会主动帮你说话。" },
      { en: "Set goals before each check-in.", zh: "每次对接前设目标。" },
      { en: "Listen more than you advise.", zh: "倾听多于建议。" },
      { en: "Celebrate small wins together.", zh: "一起庆祝小胜利。" }
    ]}
);

/* ============================================================
   美国常用口语扩充：第八批
   ============================================================ */
DATA.english_daily.push(
  { id: "us-freelance", name: "💼 自由职业 Freelance",
    words: [],
    sentences: [
      { en: "I just landed a new client.", zh: "我刚谈下一个新客户。" },
      { en: "What's your day rate?", zh: "你的日费多少？" },
      { en: "Could you send the invoice?", zh: "可以开发票吗？" },
      { en: "I'm fully booked this month.", zh: "我这个月排满了。" },
      { en: "I work on retainer.", zh: "我按月聘做。" },
      { en: "Scope creep is killing me.", zh: "需求蔓延快把我累死。" },
      { en: "Net-30 payment terms.", zh: "30 天付款。" },
      { en: "Half upfront, half on delivery.", zh: "一半预付，一半交付时付。" },
      { en: "I freelance full-time now.", zh: "我现在全职自由职业。" },
      { en: "Found gigs on Upwork.", zh: "在 Upwork 找到了项目。" },
      { en: "Building a personal brand.", zh: "在打造个人品牌。" },
      { en: "Pitching to potential clients.", zh: "向潜在客户推介。" },
      { en: "Working from a café today.", zh: "今天在咖啡馆办公。" },
      { en: "Best decision I ever made.", zh: "我做过最好的决定。" }
    ]},
  { id: "us-investing", name: "📈 投资闲聊 Investing",
    words: [],
    sentences: [
      { en: "Did you see the market today?", zh: "你看今天的市场了吗？" },
      { en: "I'm DCA-ing into index funds.", zh: "我在定投指数基金。" },
      { en: "Diversify your portfolio.", zh: "分散你的组合。" },
      { en: "Don't time the market.", zh: "别想择时。" },
      { en: "Long-term beats short-term.", zh: "长期胜过短期。" },
      { en: "Roth IRA or 401k?", zh: "Roth IRA 还是 401k？" },
      { en: "Max out the company match.", zh: "拿满公司配比。" },
      { en: "Emergency fund first.", zh: "先有应急基金。" },
      { en: "Compound interest is magic.", zh: "复利就是魔法。" },
      { en: "I invest in low-cost ETFs.", zh: "我买低费率 ETF。" },
      { en: "Bonds for stability.", zh: "用债券稳定组合。" },
      { en: "Real estate is illiquid.", zh: "房产流动性差。" },
      { en: "Talk to a fiduciary.", zh: "找受托人聊聊。" },
      { en: "Patience pays off.", zh: "耐心终有回报。" }
    ]},
  { id: "us-budget", name: "💰 预算 Budgeting",
    words: [],
    sentences: [
      { en: "I'm tracking every dollar.", zh: "我每一块钱都记录。" },
      { en: "Set a monthly budget.", zh: "定个月度预算。" },
      { en: "50/30/20 rule works for me.", zh: "50/30/20 法则对我有效。" },
      { en: "Cut subscriptions you don't use.", zh: "砍掉不用的订阅。" },
      { en: "Eat at home more often.", zh: "多在家吃饭。" },
      { en: "Pay yourself first.", zh: "先付给自己。" },
      { en: "Build an emergency fund.", zh: "建立应急基金。" },
      { en: "Use cash envelopes.", zh: "试试现金分类信封。" },
      { en: "Automate the savings.", zh: "自动化储蓄。" },
      { en: "Review your spending weekly.", zh: "每周复盘开支。" },
      { en: "Credit card debt hurts.", zh: "信用卡债很伤。" },
      { en: "Avoid lifestyle inflation.", zh: "避免消费升级。" },
      { en: "Save for big goals.", zh: "为大目标存钱。" },
      { en: "Small wins add up.", zh: "小胜利汇集成大成果。" }
    ]},
  { id: "us-debt", name: "💳 债务 Debt",
    words: [],
    sentences: [
      { en: "Pay off high-interest debt first.", zh: "先还高息债。" },
      { en: "Avalanche or snowball method?", zh: "雪崩法还是雪球法？" },
      { en: "I consolidated my loans.", zh: "我把贷款合并了。" },
      { en: "Interest rates are brutal.", zh: "利率太狠了。" },
      { en: "Minimum payments are a trap.", zh: "最低还款是个陷阱。" },
      { en: "Call to negotiate the rate.", zh: "打电话谈利率。" },
      { en: "Student loans are forgiveable.", zh: "学贷可以申请减免。" },
      { en: "Refinance the mortgage.", zh: "再融资按揭。" },
      { en: "Skip the new car.", zh: "别买新车了。" },
      { en: "Pay more than the minimum.", zh: "多还一点本金。" },
      { en: "Snowball method feels great.", zh: "雪球法很有成就感。" },
      { en: "Credit score improving.", zh: "信用分在上升。" },
      { en: "Debt-free in two years.", zh: "两年内还清。" },
      { en: "Feels like a weight off.", zh: "如释重负。" }
    ]},
  { id: "us-creditcard", name: "💳 信用卡 Credit Card",
    words: [],
    sentences: [
      { en: "I pay it off every month.", zh: "我每月还清。" },
      { en: "Travel rewards card is best.", zh: "旅行积分卡最好。" },
      { en: "2% cash back on everything.", zh: "所有消费返 2%。" },
      { en: "Watch the annual fee.", zh: "注意年费。" },
      { en: "Hit the sign-up bonus.", zh: "拿开卡奖励。" },
      { en: "Don't carry a balance.", zh: "别让账单留尾。" },
      { en: "Pay on time always.", zh: "永远准时还款。" },
      { en: "Credit utilization matters.", zh: "信用使用率重要。" },
      { en: "Got rejected by Chase.", zh: "Chase 拒卡了。" },
      { en: "Freeze the card if lost.", zh: "卡丢了立刻冻结。" },
      { en: "Dispute the charge.", zh: "申诉这笔扣款。" },
      { en: "Travel insurance included.", zh: "含旅行保险。" },
      { en: "Tap to pay everywhere.", zh: "到处都能闪付。" },
      { en: "Built my credit score up.", zh: "把信用分养起来了。" }
    ]},
  { id: "us-bills", name: "🧾 账单 Bills",
    words: [],
    sentences: [
      { en: "Rent is due tomorrow.", zh: "明天交房租。" },
      { en: "Utility bill went up.", zh: "水电费涨了。" },
      { en: "Internet bill auto-renews.", zh: "宽带自动续费。" },
      { en: "Auto-pay everything.", zh: "全部设自动扣款。" },
      { en: "Got a late fee, ugh.", zh: "被罚滞纳金，唉。" },
      { en: "Cell phone plan is overpriced.", zh: "话费太贵了。" },
      { en: "Bundle insurance to save.", zh: "保险打包省钱。" },
      { en: "Streaming bills add up.", zh: "流媒体账单一堆。" },
      { en: "Switch providers next month.", zh: "下个月换运营商。" },
      { en: "Hidden fees everywhere.", zh: "到处都是隐藏费用。" },
      { en: "Review your statements.", zh: "复核账单。" },
      { en: "Call to negotiate down.", zh: "打电话谈降价。" },
      { en: "Bills, bills, bills.", zh: "账单一堆。" },
      { en: "Adulting is expensive.", zh: "做大人真贵。" }
    ]},
  { id: "us-airbnb", name: "🏡 Airbnb 民宿",
    words: [],
    sentences: [
      { en: "Check-in is at 4 PM.", zh: "4 点入住。" },
      { en: "Wi-Fi password is on the fridge.", zh: "Wi-Fi 密码在冰箱上。" },
      { en: "Trash pickup is Monday.", zh: "周一收垃圾。" },
      { en: "Coffee maker in the kitchen.", zh: "厨房有咖啡机。" },
      { en: "Heat works on a smart thermostat.", zh: "暖气用智能温控。" },
      { en: "No shoes inside, please.", zh: "请进屋脱鞋。" },
      { en: "Strict no-party rule.", zh: "严禁聚会。" },
      { en: "5-star review, please.", zh: "请给五星好评。" },
      { en: "Local restaurant guide included.", zh: "附本地餐厅指南。" },
      { en: "Beach is a 10-minute walk.", zh: "海滩步行 10 分钟。" },
      { en: "Coffee, towels, soap provided.", zh: "提供咖啡毛巾肥皂。" },
      { en: "Self check-in via lockbox.", zh: "通过密码盒自助入住。" },
      { en: "Leave keys on the counter.", zh: "钥匙留台面上。" },
      { en: "Hope you enjoyed your stay!", zh: "希望住得开心！" }
    ]},
  { id: "us-festival", name: "🎪 音乐节 Festival",
    words: [],
    sentences: [
      { en: "Festival starts at noon.", zh: "音乐节中午开始。" },
      { en: "Got my wristband.", zh: "我拿到手环了。" },
      { en: "Multi-day pass is worth it.", zh: "多日通票值得。" },
      { en: "Sunscreen and hydration.", zh: "防晒补水。" },
      { en: "Main stage tonight!", zh: "今晚主舞台！" },
      { en: "Food trucks everywhere.", zh: "到处都是餐车。" },
      { en: "Camping is included.", zh: "露营包含。" },
      { en: "Set list looks epic.", zh: "歌单太赞了。" },
      { en: "Meet at the merch tent.", zh: "在周边帐篷见。" },
      { en: "Lost my friends in the crowd.", zh: "在人群里失散了。" },
      { en: "Headliner just hit the stage.", zh: "压轴艺人上台了。" },
      { en: "Crowd is going wild.", zh: "观众嗨爆。" },
      { en: "Bring earplugs.", zh: "带耳塞。" },
      { en: "Best festival ever!", zh: "最棒的音乐节！" }
    ]},
  { id: "us-concert", name: "🎤 演唱会 Concert",
    words: [],
    sentences: [
      { en: "Tickets sold out in seconds.", zh: "票几秒就卖完了。" },
      { en: "VIP seats are pricey.", zh: "VIP 位贵。" },
      { en: "Doors open at seven.", zh: "七点开门。" },
      { en: "Don't forget the merch.", zh: "别忘了买周边。" },
      { en: "Opening act was great.", zh: "暖场演出很赞。" },
      { en: "Save my place in line.", zh: "帮我占个位。" },
      { en: "The crowd was electric.", zh: "观众太燃了。" },
      { en: "Sing every word with me.", zh: "和我一起唱。" },
      { en: "Encore, encore!", zh: "安可，安可！" },
      { en: "Lost my voice screaming.", zh: "喊到嗓子哑。" },
      { en: "Worth every dollar.", zh: "钱花得值。" },
      { en: "Hit me up for the next one.", zh: "下次约我。" },
      { en: "Phones up for the photo.", zh: "手机举起来拍照。" },
      { en: "Best night ever.", zh: "最棒的一晚。" }
    ]},
  { id: "us-bar", name: "🍺 酒吧 Bar",
    words: [],
    sentences: [
      { en: "What's on tap?", zh: "有什么扎啤？" },
      { en: "I'll have an IPA.", zh: "我要一杯 IPA。" },
      { en: "Start a tab, please.", zh: "请记账。" },
      { en: "Round of shots!", zh: "来一轮 shot！" },
      { en: "Two-drink minimum tonight.", zh: "今晚最低消费两杯。" },
      { en: "Got an ID?", zh: "有证件吗？" },
      { en: "I'll just have water.", zh: "我喝水就行。" },
      { en: "Designated driver here.", zh: "我是代驾。" },
      { en: "Pool table in the back.", zh: "里面有台球桌。" },
      { en: "Karaoke starts at ten.", zh: "卡拉 OK 十点开始。" },
      { en: "Loud in here tonight.", zh: "今晚里面好吵。" },
      { en: "Pay the tab, please.", zh: "请结账。" },
      { en: "Order an Uber home.", zh: "叫个 Uber 回家。" },
      { en: "Cheers!", zh: "干杯！" }
    ]},
  { id: "us-happy-hour", name: "🥂 欢乐时光 Happy Hour",
    words: [],
    sentences: [
      { en: "Happy hour till seven.", zh: "欢乐时光到七点。" },
      { en: "Half off drinks!", zh: "饮品五折！" },
      { en: "Buy one get one.", zh: "买一送一。" },
      { en: "Discounted apps too.", zh: "开胃菜也打折。" },
      { en: "Team's grabbing drinks.", zh: "团队一起喝一杯。" },
      { en: "Save me a seat at the bar.", zh: "在吧台帮我留位子。" },
      { en: "I'll skip happy hour today.", zh: "我今天不去欢乐时光。" },
      { en: "First round's on me.", zh: "第一轮我请。" },
      { en: "Catch up after work.", zh: "下班一起聊聊。" },
      { en: "Free apps with two drinks.", zh: "两杯饮料送小食。" },
      { en: "Networking event tonight.", zh: "今晚有社交活动。" },
      { en: "Wind down before home.", zh: "回家前放松一下。" },
      { en: "Don't stay too late.", zh: "别待太晚。" },
      { en: "See you on Monday.", zh: "周一见。" }
    ]},
  { id: "us-brunch", name: "🥞 早午餐 Brunch",
    words: [],
    sentences: [
      { en: "Brunch is the best meal.", zh: "早午餐是最好的一餐。" },
      { en: "Mimosa, please!", zh: "请来杯含羞草！" },
      { en: "Bottomless mimosas?", zh: "无限续杯吗？" },
      { en: "Avocado toast for me.", zh: "我要牛油果吐司。" },
      { en: "Eggs Benedict here.", zh: "我点本尼迪克蛋。" },
      { en: "Pancakes or French toast?", zh: "煎饼还是法式吐司？" },
      { en: "Bacon, extra crispy.", zh: "培根要脆。" },
      { en: "Coffee, no cream.", zh: "咖啡不加奶。" },
      { en: "Hash browns on the side.", zh: "薯饼配菜。" },
      { en: "Save room for dessert.", zh: "给甜点留肚子。" },
      { en: "Spilling the tea over brunch.", zh: "早午餐聊八卦。" },
      { en: "Sunday brunch tradition.", zh: "周日早午餐传统。" },
      { en: "Splitting the bill.", zh: "AA 制。" },
      { en: "Best brunch in town.", zh: "城里最棒的早午餐。" }
    ]},
  { id: "us-yoga2", name: "🧘 瑜伽馆 Yoga Studio",
    words: [],
    sentences: [
      { en: "First class is free.", zh: "首课免费。" },
      { en: "Bring your own mat.", zh: "自带瑜伽垫。" },
      { en: "Block and strap available.", zh: "瑜伽砖和带子都有。" },
      { en: "Hot yoga today.", zh: "今天高温瑜伽。" },
      { en: "Sign in at the front.", zh: "前台签到。" },
      { en: "Park at the back.", zh: "停后面。" },
      { en: "Locker rooms downstairs.", zh: "更衣室在楼下。" },
      { en: "Class is full.", zh: "课满了。" },
      { en: "Drop-in or membership?", zh: "单次还是会员？" },
      { en: "Bring a towel.", zh: "带条毛巾。" },
      { en: "Inhale, exhale.", zh: "吸气，呼气。" },
      { en: "Sun salutations to start.", zh: "拜日式开始。" },
      { en: "Namaste, everyone.", zh: "合十致敬。" },
      { en: "Schedule the next class.", zh: "排下节课。" }
    ]},
  { id: "us-massage", name: "💆 按摩 Massage",
    words: [],
    sentences: [
      { en: "Booked a deep tissue massage.", zh: "约了深层组织按摩。" },
      { en: "Swedish or deep tissue?", zh: "瑞典式还是深层？" },
      { en: "How's the pressure?", zh: "力度怎么样？" },
      { en: "Lighter, please.", zh: "请轻一点。" },
      { en: "Focus on my shoulders.", zh: "重点按肩膀。" },
      { en: "Hot stones add extra.", zh: "热石加钱。" },
      { en: "First time here.", zh: "我第一次来。" },
      { en: "Aromatherapy is included.", zh: "包含芳疗。" },
      { en: "Relax your breathing.", zh: "放松呼吸。" },
      { en: "Take your time getting up.", zh: "起身慢慢来。" },
      { en: "Drink water afterward.", zh: "之后多喝水。" },
      { en: "Tip 20%, standard.", zh: "标准小费 20%。" },
      { en: "Booked weekly already.", zh: "已经订了每周一次。" },
      { en: "Best massage ever.", zh: "最棒的按摩。" }
    ]},
  { id: "us-skincare", name: "🧴 护肤 Skincare",
    words: [],
    sentences: [
      { en: "Wash with gentle cleanser.", zh: "用温和洁面。" },
      { en: "Don't skip sunscreen.", zh: "防晒不能少。" },
      { en: "SPF 30 minimum.", zh: "SPF 至少 30。" },
      { en: "Retinol at night.", zh: "晚上用视黄醇。" },
      { en: "Hyaluronic acid hydrates.", zh: "玻尿酸保湿。" },
      { en: "Pat, don't rub.", zh: "轻拍，别揉。" },
      { en: "Try a vitamin C serum.", zh: "试试维 C 精华。" },
      { en: "Less is more.", zh: "少即是多。" },
      { en: "Patch test new products.", zh: "新产品做敏感测试。" },
      { en: "Drink water for glowing skin.", zh: "多喝水皮肤好。" },
      { en: "Get enough sleep.", zh: "睡眠要够。" },
      { en: "Exfoliate twice a week.", zh: "一周去角质两次。" },
      { en: "Moisturize day and night.", zh: "早晚保湿。" },
      { en: "Skincare is self-care.", zh: "护肤就是自我照顾。" }
    ]},
  { id: "us-hair", name: "💇 护发 Haircare",
    words: [],
    sentences: [
      { en: "Trim every 8 weeks.", zh: "每八周修一次。" },
      { en: "Don't over-wash.", zh: "别洗太勤。" },
      { en: "Deep condition weekly.", zh: "每周深层护发。" },
      { en: "Heat protectant first.", zh: "先用隔热喷雾。" },
      { en: "Air dry when you can.", zh: "能自然干就自然干。" },
      { en: "Try a silk pillowcase.", zh: "试下真丝枕套。" },
      { en: "My hair color is fading.", zh: "我发色褪了。" },
      { en: "Booked a balayage.", zh: "约了挑染。" },
      { en: "Need a trim badly.", zh: "急需修剪。" },
      { en: "Frizz is real today.", zh: "今天毛躁严重。" },
      { en: "Use a leave-in conditioner.", zh: "用免洗护发素。" },
      { en: "I'm growing it out.", zh: "我在留长。" },
      { en: "Curls need extra moisture.", zh: "卷发要多滋润。" },
      { en: "Love a fresh blowout.", zh: "爱新做的吹发造型。" }
    ]},
  { id: "us-mindful", name: "🧘 正念 Mindfulness",
    words: [],
    sentences: [
      { en: "Take three deep breaths.", zh: "深呼吸三次。" },
      { en: "Sit quietly for ten minutes.", zh: "安静坐十分钟。" },
      { en: "Notice your thoughts.", zh: "觉察你的思绪。" },
      { en: "Let them pass.", zh: "让它们流过。" },
      { en: "Bring focus to breath.", zh: "把注意力放在呼吸上。" },
      { en: "I use a meditation app.", zh: "我用冥想 App。" },
      { en: "Headspace is great.", zh: "Headspace 很好用。" },
      { en: "Gratitude journal daily.", zh: "每天写感恩日记。" },
      { en: "Mindful eating, no phones.", zh: "正念进餐，不看手机。" },
      { en: "Body scan before sleep.", zh: "睡前做身体扫描。" },
      { en: "Walk without distractions.", zh: "无干扰地散步。" },
      { en: "Set an intention today.", zh: "今天定个意图。" },
      { en: "Practice self-compassion.", zh: "练习自我关怀。" },
      { en: "Peace begins within.", zh: "内心安宁始于自己。" }
    ]}
);

/* ============================================================
   美国常用口语扩充：第九批（冲量）
   ============================================================ */
DATA.english_daily.push(
  { id: "us-roommate", name: "🏠 室友 Roommate",
    words: [],
    sentences: [
      { en: "Whose turn is it for dishes?", zh: "轮谁洗碗了？" },
      { en: "Can you keep it down?", zh: "能小点声吗？" },
      { en: "I'll grab groceries tonight.", zh: "我今晚去买菜。" },
      { en: "Rent's due on the first.", zh: "1 号交房租。" },
      { en: "Split the utilities evenly.", zh: "水电平均分。" },
      { en: "Mind if I have friends over?", zh: "我能叫朋友过来吗？" },
      { en: "Wifi is acting up.", zh: "Wi-Fi 又抽风。" },
      { en: "Trash day is Tuesday.", zh: "周二倒垃圾。" },
      { en: "Don't forget to lock up.", zh: "别忘了锁门。" },
      { en: "Borrowing your charger.", zh: "借下你充电器。" },
      { en: "Sorry about the mess.", zh: "抱歉这么乱。" },
      { en: "I'm out of town this weekend.", zh: "我这周末不在。" },
      { en: "Coffee's still hot.", zh: "咖啡还热着。" },
      { en: "Good night, see you tomorrow.", zh: "晚安，明天见。" }
    ]},
  { id: "us-laundry", name: "🧺 洗衣 Laundry",
    words: [],
    sentences: [
      { en: "Throw in a load.", zh: "扔进去一桶。" },
      { en: "Separate whites and colors.", zh: "白色和深色分开。" },
      { en: "Cold water for darks.", zh: "深色用冷水。" },
      { en: "Run a delicate cycle.", zh: "用轻柔模式。" },
      { en: "Add a dryer sheet.", zh: "加张烘干纸。" },
      { en: "Hang to dry.", zh: "晾干。" },
      { en: "Don't shrink the sweater.", zh: "别把毛衣洗缩。" },
      { en: "Out of detergent again.", zh: "洗衣液又用完了。" },
      { en: "Fold while it's warm.", zh: "热的时候叠。" },
      { en: "Dryer takes 45 minutes.", zh: "烘干要 45 分钟。" },
      { en: "Need quarters for the machines.", zh: "要 25 分硬币。" },
      { en: "Stain remover works wonders.", zh: "去污剂超有效。" },
      { en: "Lost a sock again.", zh: "又丢了一只袜子。" },
      { en: "Smells fresh now.", zh: "现在闻起来香香的。" }
    ]},
  { id: "us-cleaning", name: "🧹 打扫 Cleaning",
    words: [],
    sentences: [
      { en: "Vacuum the living room.", zh: "吸客厅地毯。" },
      { en: "Wipe down the counters.", zh: "擦台面。" },
      { en: "Mop the kitchen floor.", zh: "拖厨房。" },
      { en: "Take out the trash.", zh: "把垃圾倒了。" },
      { en: "Scrub the bathtub.", zh: "刷浴缸。" },
      { en: "Dust the shelves.", zh: "擦书架灰。" },
      { en: "Change the sheets.", zh: "换床单。" },
      { en: "Toss the expired food.", zh: "扔过期食品。" },
      { en: "Restock paper towels.", zh: "补厨房纸。" },
      { en: "Spring cleaning today.", zh: "今天大扫除。" },
      { en: "Donate the old clothes.", zh: "旧衣服捐了。" },
      { en: "Marie Kondo this room.", zh: "断舍离这间屋。" },
      { en: "Feels so much better.", zh: "舒服多了。" },
      { en: "Worth the effort.", zh: "值了。" }
    ]},
  { id: "us-pets", name: "🐶 宠物 Pets",
    words: [],
    sentences: [
      { en: "He's such a good boy.", zh: "他真是个好孩子。" },
      { en: "She's a rescue.", zh: "她是收养的。" },
      { en: "Walk him twice a day.", zh: "每天遛两次。" },
      { en: "Feed the cat at six.", zh: "六点喂猫。" },
      { en: "Vet appointment tomorrow.", zh: "明天看兽医。" },
      { en: "Time for shots.", zh: "该打疫苗了。" },
      { en: "Off the couch!", zh: "下沙发！" },
      { en: "Treats for good behavior.", zh: "表现好给零食。" },
      { en: "Litter box needs cleaning.", zh: "猫砂盆该清了。" },
      { en: "Boarding him this weekend.", zh: "周末送宠物寄养。" },
      { en: "Got pet insurance.", zh: "买了宠物险。" },
      { en: "He's house-trained.", zh: "她会自己上厕所。" },
      { en: "Velcro dog, follows everywhere.", zh: "贴身狗，到处跟。" },
      { en: "Best companion ever.", zh: "最棒的伙伴。" }
    ]},
  { id: "us-walk-dog", name: "🐕 遛狗 Dog Walking",
    words: [],
    sentences: [
      { en: "Leash on, let's go.", zh: "套好绳子，走吧。" },
      { en: "Pick up after your dog.", zh: "捡好狗便。" },
      { en: "Off-leash hours start at six.", zh: "六点后可以放绳。" },
      { en: "Dog park is two blocks away.", zh: "狗公园在两条街外。" },
      { en: "Stop pulling!", zh: "别拽！" },
      { en: "Heel.", zh: "贴边走。" },
      { en: "Sit. Good boy.", zh: "坐下。乖。" },
      { en: "Doggy bags right here.", zh: "便便袋在这。" },
      { en: "He loves the squirrels.", zh: "它特爱追松鼠。" },
      { en: "She's friendly, can she say hi?", zh: "她友善，能打招呼吗？" },
      { en: "Long walk, lots of water.", zh: "走得久，多带水。" },
      { en: "Tired pup, happy pup.", zh: "累狗才是好狗。" },
      { en: "Same time tomorrow?", zh: "明天同一时间？" },
      { en: "Best part of my day.", zh: "我一天里最棒的时刻。" }
    ]},
  { id: "us-running", name: "🏃 跑步 Running",
    words: [],
    sentences: [
      { en: "Going for a morning run.", zh: "去晨跑。" },
      { en: "Five miles today.", zh: "今天五英里。" },
      { en: "Pace is improving.", zh: "配速在变快。" },
      { en: "Training for a half marathon.", zh: "在备战半马。" },
      { en: "Stretch before you run.", zh: "跑前拉伸。" },
      { en: "Don't skip cool-down.", zh: "别漏放松。" },
      { en: "Need new running shoes.", zh: "需要新跑鞋。" },
      { en: "Strava said I PR'd!", zh: "Strava 说我刷 PR 了！" },
      { en: "Treadmill or trail?", zh: "跑步机还是越野？" },
      { en: "Bring a water bottle.", zh: "带水。" },
      { en: "Cap and sunscreen.", zh: "帽子加防晒。" },
      { en: "Hills today, ugh.", zh: "今天上坡，唉。" },
      { en: "Runner's high is real.", zh: "跑者高潮是真的。" },
      { en: "See you at the finish line.", zh: "终点见。" }
    ]},
  { id: "us-cycling", name: "🚴 骑行 Cycling",
    words: [],
    sentences: [
      { en: "Going for a ride.", zh: "去骑车。" },
      { en: "Helmet on, always.", zh: "永远戴头盔。" },
      { en: "Check the tire pressure.", zh: "检查胎压。" },
      { en: "Bike lane on the right.", zh: "右边是自行车道。" },
      { en: "Watch for car doors.", zh: "小心车门。" },
      { en: "Need a tune-up.", zh: "需要保养。" },
      { en: "Mountain biking this weekend.", zh: "这周末山地骑行。" },
      { en: "Group ride at seven.", zh: "七点集体骑。" },
      { en: "Got a flat tire.", zh: "扎胎了。" },
      { en: "Brakes are squeaky.", zh: "刹车响。" },
      { en: "Hill climb was brutal.", zh: "爬坡太狠。" },
      { en: "Sunset ride is the best.", zh: "夕阳骑行最棒。" },
      { en: "Bikepacking trip next month.", zh: "下个月骑行露营。" },
      { en: "Two wheels, good vibes.", zh: "两个轮子，好心情。" }
    ]},
  { id: "us-hiking", name: "🥾 徒步 Hiking",
    words: [],
    sentences: [
      { en: "Trail is well marked.", zh: "步道标识清楚。" },
      { en: "Wear sturdy boots.", zh: "穿结实的靴子。" },
      { en: "Bring lots of water.", zh: "带足水。" },
      { en: "Snacks for the trail.", zh: "带点路餐。" },
      { en: "Bear spray, just in case.", zh: "防熊喷雾以防万一。" },
      { en: "Take only pictures.", zh: "只带走照片。" },
      { en: "Leave no trace.", zh: "不留痕迹。" },
      { en: "Summit view is unreal.", zh: "山顶视野震撼。" },
      { en: "Out-and-back, six miles.", zh: "往返六英里。" },
      { en: "Permit required.", zh: "需要许可证。" },
      { en: "Pace yourself.", zh: "控制好节奏。" },
      { en: "Watch for loose rocks.", zh: "注意松石。" },
      { en: "Layer up at the top.", zh: "山顶多加衣。" },
      { en: "Best hike ever.", zh: "最棒的徒步。" }
    ]},
  { id: "us-camping", name: "🏕 露营 Camping",
    words: [],
    sentences: [
      { en: "Reserved the campsite.", zh: "订好营地。" },
      { en: "Pitch the tent here.", zh: "在这扎帐篷。" },
      { en: "Gather some firewood.", zh: "捡点柴。" },
      { en: "Start the campfire.", zh: "点篝火。" },
      { en: "S'mores tonight!", zh: "今晚吃棉花糖三明治！" },
      { en: "Bear box for food.", zh: "食物放防熊箱。" },
      { en: "Sleeping bag, zero degrees.", zh: "睡袋零度档。" },
      { en: "Hammock between two trees.", zh: "树间挂吊床。" },
      { en: "Stargazing tonight.", zh: "今晚看星星。" },
      { en: "Bug spray, lots of it.", zh: "驱蚊喷雾多带。" },
      { en: "Quiet hours after ten.", zh: "十点后保持安静。" },
      { en: "Pack out everything.", zh: "全部带走。" },
      { en: "Roughing it for the weekend.", zh: "周末过粗犷生活。" },
      { en: "Reset and unplug.", zh: "重启离线。" }
    ]},
  { id: "us-skiing", name: "⛷ 滑雪 Skiing",
    words: [],
    sentences: [
      { en: "Hit the slopes early.", zh: "早点上山。" },
      { en: "Fresh powder today!", zh: "今天新雪！" },
      { en: "Bunny hill first.", zh: "先去新手坡。" },
      { en: "Black diamond, no thanks.", zh: "黑钻不要谢谢。" },
      { en: "Rent the gear at the lodge.", zh: "在山屋租装备。" },
      { en: "Ski pass, $150.", zh: "雪票 150。" },
      { en: "Lift line is long.", zh: "缆车队伍长。" },
      { en: "Bluebird day.", zh: "晴朗大好天。" },
      { en: "Goggles, gloves, helmet.", zh: "雪镜手套头盔。" },
      { en: "Lunch at the lodge.", zh: "山屋吃午饭。" },
      { en: "Aprés-ski drinks.", zh: "滑雪后小酌。" },
      { en: "Fell on the last run.", zh: "最后一道摔了。" },
      { en: "Knees are gonna ache.", zh: "膝盖要疼了。" },
      { en: "Worth every turn.", zh: "每个弯都值。" }
    ]},
  { id: "us-beach", name: "🏖 沙滩 Beach",
    words: [],
    sentences: [
      { en: "Pack the beach bag.", zh: "装好沙滩包。" },
      { en: "Sunscreen, SPF 50.", zh: "防晒霜 SPF 50。" },
      { en: "Towels, umbrella, cooler.", zh: "毛巾遮阳伞冰桶。" },
      { en: "Boogie board for the kids.", zh: "孩子用冲浪板。" },
      { en: "Watch the rip currents.", zh: "小心离岸流。" },
      { en: "Lifeguard's on duty.", zh: "救生员在岗。" },
      { en: "Sandcastle contest!", zh: "沙堡比赛！" },
      { en: "Walk along the shore.", zh: "沿岸走走。" },
      { en: "Sunset is gorgeous.", zh: "日落超美。" },
      { en: "Saltwater everywhere.", zh: "全是海水。" },
      { en: "Sand in everything.", zh: "到处是沙。" },
      { en: "Beach reads on Kindle.", zh: "Kindle 沙滩书。" },
      { en: "Toes in the sand.", zh: "脚踩在沙里。" },
      { en: "Best vacation ever.", zh: "最棒的假期。" }
    ]},
  { id: "us-surf", name: "🏄 冲浪 Surfing",
    words: [],
    sentences: [
      { en: "Surf's up today!", zh: "今天有浪！" },
      { en: "Paddle out past the break.", zh: "划过浪带。" },
      { en: "Wait for the right wave.", zh: "等好的浪。" },
      { en: "Pop up fast.", zh: "快速起身。" },
      { en: "Watch your nose.", zh: "看好板头。" },
      { en: "Long board for cruising.", zh: "长板巡游。" },
      { en: "Short board for tricks.", zh: "短板做动作。" },
      { en: "Wax up the board.", zh: "上板蜡。" },
      { en: "Wetsuit weather.", zh: "穿水母衣的天气。" },
      { en: "Wipeout!", zh: "翻了！" },
      { en: "Tide's coming in.", zh: "涨潮了。" },
      { en: "One more wave.", zh: "再等一个浪。" },
      { en: "Stoked on that one.", zh: "刚那个超爽。" },
      { en: "Surf check tomorrow.", zh: "明天再看浪况。" }
    ]},
  { id: "us-pool", name: "🏊 游泳 Pool",
    words: [],
    sentences: [
      { en: "Hit the pool today.", zh: "今天去游泳。" },
      { en: "Bring a towel and goggles.", zh: "带毛巾泳镜。" },
      { en: "Lap swim till noon.", zh: "中午前游道开放。" },
      { en: "Family swim after three.", zh: "三点后家庭场次。" },
      { en: "Shallow end on the left.", zh: "浅水区在左。" },
      { en: "Deep end is twelve feet.", zh: "深水区 3.6 米。" },
      { en: "Walk, don't run.", zh: "请走不要跑。" },
      { en: "Shower before swimming.", zh: "下水前冲身。" },
      { en: "No diving in shallow water.", zh: "浅水区禁止跳水。" },
      { en: "Cap required for laps.", zh: "游道必须戴帽。" },
      { en: "Lifeguard on duty.", zh: "救生员在岗。" },
      { en: "Hot tub after.", zh: "之后泡热水池。" },
      { en: "Refreshing on a hot day.", zh: "热天里太凉爽了。" },
      { en: "Same time next week.", zh: "下周同一时间。" }
    ]},
  { id: "us-park2", name: "🌳 公园 Park",
    words: [],
    sentences: [
      { en: "Meet at the park entrance.", zh: "公园门口见。" },
      { en: "Bring a picnic blanket.", zh: "带野餐毯。" },
      { en: "Kids on the playground.", zh: "孩子在游乐场。" },
      { en: "Frisbee on the lawn.", zh: "草坪上扔飞盘。" },
      { en: "Watch the ducks at the pond.", zh: "看池塘的鸭子。" },
      { en: "Restrooms past the fountain.", zh: "厕所在喷泉后。" },
      { en: "Park closes at sunset.", zh: "日落闭园。" },
      { en: "Leash your dog.", zh: "请牵狗。" },
      { en: "No glass containers.", zh: "禁止玻璃容器。" },
      { en: "Trash everywhere, ugh.", zh: "到处是垃圾，唉。" },
      { en: "Cherry blossoms in bloom.", zh: "樱花盛开。" },
      { en: "Free yoga in the park.", zh: "公园免费瑜伽。" },
      { en: "Concert in the bandshell.", zh: "音乐台有演出。" },
      { en: "Such a beautiful day.", zh: "真是美好的一天。" }
    ]},
  { id: "us-museum", name: "🏛 博物馆 Museum",
    words: [],
    sentences: [
      { en: "Tickets at the front desk.", zh: "前台买票。" },
      { en: "Audio guide is included.", zh: "包含语音导览。" },
      { en: "Special exhibit on the third floor.", zh: "三楼特展。" },
      { en: "No flash photography.", zh: "禁止闪光拍照。" },
      { en: "Map of the galleries.", zh: "展厅地图。" },
      { en: "Don't touch the art.", zh: "请勿触摸展品。" },
      { en: "Membership pays for itself.", zh: "会员卡很值。" },
      { en: "Pay what you wish.", zh: "自愿捐赠票。" },
      { en: "Kids under twelve are free.", zh: "12 岁以下免票。" },
      { en: "Gift shop on your way out.", zh: "出口处礼品店。" },
      { en: "Café upstairs is great.", zh: "楼上咖啡馆不错。" },
      { en: "Open late on Thursdays.", zh: "周四延长开放。" },
      { en: "So much history here.", zh: "这里历史厚重。" },
      { en: "Worth a second visit.", zh: "值得再来。" }
    ]},
  { id: "us-zoo", name: "🦁 动物园 Zoo",
    words: [],
    sentences: [
      { en: "Lions are out today!", zh: "今天狮子出来了！" },
      { en: "Feeding time at noon.", zh: "中午投喂时间。" },
      { en: "Penguins are my favorite.", zh: "企鹅最喜欢。" },
      { en: "Stroller rentals at the gate.", zh: "门口租婴儿车。" },
      { en: "Don't tap the glass.", zh: "请勿敲玻璃。" },
      { en: "Map says elephants this way.", zh: "地图说大象在这边。" },
      { en: "Aquarium combo ticket.", zh: "水族馆套票。" },
      { en: "Snack bar near the gorillas.", zh: "大猩猩旁有小吃。" },
      { en: "Carousel for the kids.", zh: "孩子玩旋转木马。" },
      { en: "Reptile house gives me chills.", zh: "爬虫馆有点吓人。" },
      { en: "Membership for the year.", zh: "买年卡。" },
      { en: "Educational and fun.", zh: "有趣又长知识。" },
      { en: "Big day for the little ones.", zh: "小朋友的大日子。" },
      { en: "Tired but happy.", zh: "累但开心。" }
    ]},
  { id: "us-aquarium", name: "🐠 水族馆 Aquarium",
    words: [],
    sentences: [
      { en: "Sharks in the big tank.", zh: "大缸里有鲨鱼。" },
      { en: "Touch tank for the kids.", zh: "孩子可摸触缸。" },
      { en: "Sea turtles are huge.", zh: "海龟好大。" },
      { en: "Jellyfish look like art.", zh: "水母像艺术品。" },
      { en: "Show starts in ten minutes.", zh: "表演十分钟后开始。" },
      { en: "Dolphins are mesmerizing.", zh: "海豚太迷人了。" },
      { en: "Penguins waddle, so cute.", zh: "企鹅摇摆好萌。" },
      { en: "Octopus is solving puzzles.", zh: "章鱼在玩益智玩具。" },
      { en: "Free with school field trip.", zh: "学校春游免费。" },
      { en: "Annual pass is a steal.", zh: "年卡超划算。" },
      { en: "Behind-the-scenes tour available.", zh: "可参加幕后参观。" },
      { en: "Beats screen time.", zh: "比屏幕时间强。" },
      { en: "Photo ops everywhere.", zh: "到处都能拍照。" },
      { en: "Calming and beautiful.", zh: "宁静又美丽。" }
    ]},
  { id: "us-library", name: "📚 图书馆 Library",
    words: [],
    sentences: [
      { en: "Library card is free.", zh: "图书证免费办。" },
      { en: "Checkout up to twenty books.", zh: "最多借 20 本。" },
      { en: "Three-week loan period.", zh: "三周借期。" },
      { en: "Place a hold online.", zh: "网上预约。" },
      { en: "Pick up at the front desk.", zh: "前台取书。" },
      { en: "Study rooms in back.", zh: "后面有自习室。" },
      { en: "Free Wi-Fi and printing.", zh: "免费 Wi-Fi 和打印。" },
      { en: "Story time at ten.", zh: "十点故事时间。" },
      { en: "Quiet zone upstairs.", zh: "楼上静音区。" },
      { en: "Audiobooks on Libby.", zh: "Libby 听有声书。" },
      { en: "Return slot outside.", zh: "门外有还书口。" },
      { en: "Late fees are no more.", zh: "现在不收逾期费了。" },
      { en: "Librarian is super helpful.", zh: "馆员特别热心。" },
      { en: "Best public space ever.", zh: "最棒的公共空间。" }
    ]},
  { id: "us-volunteer", name: "🤝 志愿 Volunteer",
    words: [],
    sentences: [
      { en: "Sign up for a shift.", zh: "报一个班次。" },
      { en: "Orientation on Saturday.", zh: "周六入岗培训。" },
      { en: "Background check required.", zh: "需要背景调查。" },
      { en: "Wear closed-toe shoes.", zh: "穿包脚鞋。" },
      { en: "Sort donations in back.", zh: "后场整理捐赠。" },
      { en: "Food bank distribution Wednesday.", zh: "周三食物银行发放。" },
      { en: "Soup kitchen needs hands.", zh: "免费餐厅需要人手。" },
      { en: "Read to the kids.", zh: "给孩子读书。" },
      { en: "Walk dogs at the shelter.", zh: "去收容所遛狗。" },
      { en: "Park cleanup this Saturday.", zh: "周六公园清理。" },
      { en: "Habitat builds on Sundays.", zh: "周日参与建房。" },
      { en: "Bring water and gloves.", zh: "带水和手套。" },
      { en: "It feels good to give back.", zh: "回馈社会感觉很好。" },
      { en: "Same time next month?", zh: "下个月同一时间？" }
    ]},
  { id: "us-church", name: "⛪ 教堂 Church",
    words: [],
    sentences: [
      { en: "Service at nine.", zh: "九点礼拜。" },
      { en: "Save us a pew.", zh: "帮我们留个座。" },
      { en: "Kids in Sunday school.", zh: "孩子上主日学。" },
      { en: "Coffee hour after.", zh: "礼拜后咖啡时间。" },
      { en: "Choir sounds amazing.", zh: "唱诗班好听。" },
      { en: "Pastor's sermon was great.", zh: "牧师讲道很棒。" },
      { en: "Potluck next Sunday.", zh: "下周日聚餐。" },
      { en: "Bible study Tuesday night.", zh: "周二晚查经。" },
      { en: "Youth group meets Fridays.", zh: "青年团周五聚。" },
      { en: "Tithe goes to outreach.", zh: "什一奉献用于外展。" },
      { en: "Volunteer for the food pantry.", zh: "做食物站志愿者。" },
      { en: "Pray for our community.", zh: "为社区祷告。" },
      { en: "Faith and fellowship.", zh: "信仰与团契。" },
      { en: "See you next week.", zh: "下周见。" }
    ]},
  { id: "us-wedding", name: "💍 婚礼 Wedding",
    words: [],
    sentences: [
      { en: "Save the date!", zh: "敬请预留时间！" },
      { en: "RSVP by next month.", zh: "下个月前回复出席。" },
      { en: "Open bar at the reception.", zh: "招待会有酒水开放。" },
      { en: "First dance was beautiful.", zh: "第一支舞太美了。" },
      { en: "Catch the bouquet!", zh: "抢花球！" },
      { en: "Send-off with sparklers.", zh: "用烟花棒送别。" },
      { en: "Speech almost made me cry.", zh: "致辞差点把我看哭。" },
      { en: "Best man nailed it.", zh: "伴郎超厉害。" },
      { en: "Plus one situation.", zh: "可以带一位同行。" },
      { en: "Black-tie optional.", zh: "黑领结自选。" },
      { en: "Reception at the country club.", zh: "招待会在乡村俱乐部。" },
      { en: "Wedding hashtag, of course.", zh: "婚礼话题标签必备。" },
      { en: "Open dance floor.", zh: "舞池开放。" },
      { en: "Cheers to the happy couple!", zh: "为新人干杯！" }
    ]},
  { id: "us-baby-shower", name: "👶 婴儿派对 Baby Shower",
    words: [],
    sentences: [
      { en: "Boy or girl?", zh: "男孩还是女孩？" },
      { en: "Gender reveal next week.", zh: "下周性别揭晓。" },
      { en: "Baby registry is on Amazon.", zh: "亚马逊有礼物清单。" },
      { en: "Diapers, please, always diapers.", zh: "求送纸尿裤。" },
      { en: "Decor in soft pastels.", zh: "粉嫩马卡龙装饰。" },
      { en: "Games and finger foods.", zh: "小游戏和小食。" },
      { en: "Belly photo time.", zh: "孕肚合影时间。" },
      { en: "Due in March.", zh: "三月预产。" },
      { en: "Name's a secret for now.", zh: "名字保密。" },
      { en: "Nursery is almost done.", zh: "婴儿房快布置好了。" },
      { en: "Onesies are everywhere.", zh: "到处是连体衣。" },
      { en: "Co-ed shower this time.", zh: "这次男女都来。" },
      { en: "So excited for them!", zh: "真为他们高兴！" },
      { en: "Welcome to parenthood.", zh: "欢迎为人父母。" }
    ]},
  { id: "us-thanksgiving", name: "🦃 感恩节 Thanksgiving",
    words: [],
    sentences: [
      { en: "Turkey's in the oven.", zh: "火鸡进烤箱了。" },
      { en: "Stuffing or dressing?", zh: "塞料还是配料？" },
      { en: "Mashed potatoes, gravy on top.", zh: "土豆泥浇肉汁。" },
      { en: "Green bean casserole, mandatory.", zh: "青豆砂锅必备。" },
      { en: "Pumpkin or pecan pie?", zh: "南瓜派还是山核桃派？" },
      { en: "Football's on, naturally.", zh: "当然在看橄榄球。" },
      { en: "Macy's parade this morning.", zh: "早上有梅西游行。" },
      { en: "Friendsgiving on Saturday.", zh: "周六朋友感恩节。" },
      { en: "Black Friday deals tomorrow.", zh: "明天黑五。" },
      { en: "Round the table, what are we grateful for?", zh: "一圈说说感恩什么？" },
      { en: "Pass the cranberry sauce.", zh: "递下蔓越莓酱。" },
      { en: "Save room for pie.", zh: "给派留肚子。" },
      { en: "Food coma is real.", zh: "吃撑昏睡。" },
      { en: "Happy Thanksgiving!", zh: "感恩节快乐！" }
    ]},
  { id: "us-christmas", name: "🎄 圣诞 Christmas",
    words: [],
    sentences: [
      { en: "Decking the halls.", zh: "在装饰房子。" },
      { en: "Tree is up!", zh: "圣诞树立好啦！" },
      { en: "Hang the stockings.", zh: "挂袜子。" },
      { en: "Cookies for Santa.", zh: "给圣诞老人留饼干。" },
      { en: "Letters to the North Pole.", zh: "写信寄北极。" },
      { en: "Wrap the gifts.", zh: "包礼物。" },
      { en: "Family photo by the tree.", zh: "树前家庭合影。" },
      { en: "Ugly sweater party.", zh: "丑毛衣派对。" },
      { en: "Caroling in the neighborhood.", zh: "小区报佳音。" },
      { en: "Open one on Christmas Eve.", zh: "平安夜拆一个。" },
      { en: "Christmas morning chaos.", zh: "圣诞早晨混乱。" },
      { en: "Watching Home Alone again.", zh: "又在看《小鬼当家》。" },
      { en: "Hot cocoa by the fire.", zh: "炉边喝热可可。" },
      { en: "Merry Christmas, everyone!", zh: "圣诞快乐！" }
    ]},
  { id: "us-newyear", name: "🎆 新年 New Year",
    words: [],
    sentences: [
      { en: "Times Square or couch?", zh: "时代广场还是沙发？" },
      { en: "Ball drop at midnight.", zh: "午夜水晶球下落。" },
      { en: "Five, four, three, two, one!", zh: "五四三二一！" },
      { en: "Happy New Year!", zh: "新年快乐！" },
      { en: "Kiss at midnight.", zh: "午夜亲一下。" },
      { en: "Champagne toast.", zh: "香槟干杯。" },
      { en: "What's your resolution?", zh: "你的新年计划是？" },
      { en: "Gym membership, again.", zh: "又办了健身卡。" },
      { en: "Save more, spend less.", zh: "多存少花。" },
      { en: "Travel more this year.", zh: "今年多旅行。" },
      { en: "Read 24 books.", zh: "读 24 本书。" },
      { en: "Hangover on day one.", zh: "第一天就宿醉。" },
      { en: "Black-eyed peas for luck.", zh: "吃黑眼豆讨彩头。" },
      { en: "Fresh start, fresh year.", zh: "新年新开始。" }
    ]},
  { id: "us-valentine", name: "💕 情人节 Valentine's",
    words: [],
    sentences: [
      { en: "Roses are pricey today.", zh: "今天玫瑰好贵。" },
      { en: "Made dinner reservations.", zh: "订了餐厅。" },
      { en: "Chocolates at the door.", zh: "门口收到巧克力。" },
      { en: "Galentine's with the girls.", zh: "和闺蜜过姐妹节。" },
      { en: "Anti-Valentine party.", zh: "反情人节派对。" },
      { en: "Single and thriving.", zh: "单身且快乐。" },
      { en: "Card and flowers, classic.", zh: "贺卡加花，经典。" },
      { en: "Stayed in and ordered pizza.", zh: "在家点披萨。" },
      { en: "Watched a rom-com.", zh: "看了爱情片。" },
      { en: "Treat yourself today.", zh: "今天对自己好点。" },
      { en: "Love is love.", zh: "爱就是爱。" },
      { en: "First Valentine together.", zh: "在一起的第一个情人节。" },
      { en: "Romantic getaway weekend.", zh: "周末浪漫小度假。" },
      { en: "Happy Valentine's Day!", zh: "情人节快乐！" }
    ]},
  { id: "us-halloween", name: "🎃 万圣节 Halloween",
    words: [],
    sentences: [
      { en: "Carved the pumpkin already.", zh: "南瓜已经雕了。" },
      { en: "Trick-or-treating tonight!", zh: "今晚要糖！" },
      { en: "Costume contest at work.", zh: "公司服装比赛。" },
      { en: "Dressing up as what?", zh: "扮成什么？" },
      { en: "Couples costume idea.", zh: "情侣装造型。" },
      { en: "Haunted house was wild.", zh: "鬼屋太刺激了。" },
      { en: "Candy bowl on the porch.", zh: "门廊上糖果碗。" },
      { en: "Reese's are king.", zh: "Reese 巧克力杯最棒。" },
      { en: "Don't eat too much.", zh: "别吃太多。" },
      { en: "Spooky movie marathon.", zh: "恐怖片马拉松。" },
      { en: "Pumpkin spice everything.", zh: "南瓜香料什么都加。" },
      { en: "Cute costumes for the dog.", zh: "给狗穿可爱衣服。" },
      { en: "Yard decorations went up.", zh: "院子装饰挂起来了。" },
      { en: "Happy Halloween!", zh: "万圣节快乐！" }
    ]},
  { id: "us-fourth-july", name: "🎇 独立日 4th of July",
    words: [],
    sentences: [
      { en: "Fireworks tonight!", zh: "今晚有烟花！" },
      { en: "BBQ at noon.", zh: "中午烧烤。" },
      { en: "Hot dogs and burgers.", zh: "热狗汉堡。" },
      { en: "Pool party then fireworks.", zh: "先泳池派对再烟花。" },
      { en: "American flag everywhere.", zh: "到处美国旗。" },
      { en: "Parade through town.", zh: "镇上有游行。" },
      { en: "Watermelon and corn.", zh: "西瓜和玉米。" },
      { en: "Sparklers for the kids.", zh: "孩子玩烟花棒。" },
      { en: "Long weekend, score.", zh: "长周末赚到。" },
      { en: "Lake day, anyone?", zh: "去湖边玩？" },
      { en: "Sunburn warning.", zh: "小心晒伤。" },
      { en: "Family from out of town.", zh: "外地家人来。" },
      { en: "Drink water, lots of it.", zh: "多喝水。" },
      { en: "Happy 4th!", zh: "独立日快乐！" }
    ]},
  { id: "us-superbowl", name: "🏈 超级碗 Super Bowl",
    words: [],
    sentences: [
      { en: "Who's playing this year?", zh: "今年谁打？" },
      { en: "Wings and pizza, must.", zh: "鸡翅披萨必备。" },
      { en: "Watch party at Mike's.", zh: "在 Mike 家看球。" },
      { en: "Halftime show is the best part.", zh: "中场表演最棒。" },
      { en: "Commercials are gold.", zh: "广告精彩。" },
      { en: "Squares pool, $20 in.", zh: "押格子，20 块入。" },
      { en: "Touchdown!", zh: "达阵！" },
      { en: "Refs are blind.", zh: "裁判瞎眼。" },
      { en: "Two-minute warning.", zh: "两分钟提示。" },
      { en: "Overtime, oh man.", zh: "加时赛，天啊。" },
      { en: "Lost the bet, ugh.", zh: "赌输了，唉。" },
      { en: "Monday's a wash.", zh: "周一肯定没精神。" },
      { en: "Super Bowl Monday off?", zh: "超级碗第二天放假？" },
      { en: "Game was epic.", zh: "比赛太精彩。" }
    ]},
  { id: "us-baseball", name: "⚾ 棒球 Baseball",
    words: [],
    sentences: [
      { en: "Take me out to the ballgame.", zh: "带我去看球赛。" },
      { en: "Bleacher seats are cheapest.", zh: "外场座最便宜。" },
      { en: "Foul ball, watch out!", zh: "界外球，小心！" },
      { en: "Peanuts and Cracker Jack.", zh: "花生和爆米糖。" },
      { en: "Seventh-inning stretch.", zh: "第七局伸展时间。" },
      { en: "Home run!", zh: "全垒打！" },
      { en: "Bases loaded.", zh: "满垒。" },
      { en: "Strike three, you're out.", zh: "三振出局。" },
      { en: "Score's two-zip.", zh: "比分二比零。" },
      { en: "Extra innings tonight.", zh: "今晚延长局。" },
      { en: "Walk-off win.", zh: "再见胜利。" },
      { en: "Tailgate before the game.", zh: "赛前后备厢派对。" },
      { en: "Take the kid for opening day.", zh: "带孩子看揭幕赛。" },
      { en: "America's pastime.", zh: "美国国球。" }
    ]},
  { id: "us-basketball", name: "🏀 篮球 Basketball",
    words: [],
    sentences: [
      { en: "Pickup game at the gym.", zh: "健身房打野球。" },
      { en: "Run it back.", zh: "再来一局。" },
      { en: "Three-pointer for the win!", zh: "三分绝杀！" },
      { en: "Fast break, easy bucket.", zh: "快攻轻松得分。" },
      { en: "Foul on the shot.", zh: "投篮犯规。" },
      { en: "Free throws, please.", zh: "两个罚球。" },
      { en: "Box out!", zh: "卡位！" },
      { en: "Switch on defense.", zh: "防守换防。" },
      { en: "Bench scoring's huge.", zh: "替补得分关键。" },
      { en: "Buzzer beater!", zh: "压哨绝杀！" },
      { en: "March Madness brackets.", zh: "三月疯狂赛程图。" },
      { en: "Watching the playoffs.", zh: "在看季后赛。" },
      { en: "GOAT debate, again.", zh: "GOAT 又吵起来了。" },
      { en: "Ball is life.", zh: "篮球即生活。" }
    ]},
  { id: "us-football", name: "🏈 橄榄球 Football",
    words: [],
    sentences: [
      { en: "Tailgate before the game.", zh: "赛前后备厢派对。" },
      { en: "Got the grill going.", zh: "烤架点起来了。" },
      { en: "Fantasy football lineup set.", zh: "梦幻橄榄球阵容已定。" },
      { en: "Sunday Ticket on.", zh: "周日通票开了。" },
      { en: "RedZone all afternoon.", zh: "整下午红区频道。" },
      { en: "First and ten.", zh: "首攻十码。" },
      { en: "Fourth and inches.", zh: "四档极近。" },
      { en: "Hail Mary!", zh: "万福玛利亚长传！" },
      { en: "Pick six!", zh: "抄截达阵！" },
      { en: "Field goal good.", zh: "射门成功。" },
      { en: "Two-minute drill.", zh: "两分钟进攻。" },
      { en: "Playoff bound.", zh: "进季后赛。" },
      { en: "Lions are looking better.", zh: "雄狮今年更强。" },
      { en: "Cheers to football season.", zh: "橄榄球赛季干杯。" }
    ]},
  { id: "us-soccer", name: "⚽ 足球 Soccer",
    words: [],
    sentences: [
      { en: "Watching the match this afternoon.", zh: "下午看比赛。" },
      { en: "Goal!", zh: "进球了！" },
      { en: "Offside on that one.", zh: "那球越位。" },
      { en: "Red card, ouch.", zh: "红牌，惨。" },
      { en: "Stoppage time drama.", zh: "补时大戏。" },
      { en: "World Cup year is the best.", zh: "世界杯年最爽。" },
      { en: "USMNT looking sharp.", zh: "美国队挺好的。" },
      { en: "MLS season starts soon.", zh: "美职联赛季快开始。" },
      { en: "Premier League on weekends.", zh: "周末看英超。" },
      { en: "Kids have practice tonight.", zh: "孩子今晚训练。" },
      { en: "Team won 3-1.", zh: "球队 3 比 1 赢了。" },
      { en: "Coach was pumped.", zh: "教练特兴奋。" },
      { en: "Bring a soccer ball.", zh: "带个足球。" },
      { en: "Beautiful game.", zh: "美丽运动。" }
    ]},
  { id: "us-gym2", name: "💪 健身房闲聊 Gym Chat",
    words: [],
    sentences: [
      { en: "Hitting legs today.", zh: "今天练腿。" },
      { en: "How many sets left?", zh: "还几组？" },
      { en: "Mind if I work in?", zh: "我能插一组吗？" },
      { en: "Personal best on bench.", zh: "卧推刷新纪录。" },
      { en: "Skipped cardio again.", zh: "又跳过有氧。" },
      { en: "New PR, baby!", zh: "新 PR！" },
      { en: "Spotter for one set?", zh: "帮我保护一组？" },
      { en: "Forgot my shaker bottle.", zh: "忘带摇摇杯了。" },
      { en: "Pre-workout hit hard.", zh: "训练前补剂上头。" },
      { en: "Rest day tomorrow.", zh: "明天休息。" },
      { en: "Sauna after the workout.", zh: "训练后泡桑拿。" },
      { en: "Foam roll your IT band.", zh: "髂胫束放松。" },
      { en: "Hydrate, hydrate, hydrate.", zh: "多喝水。" },
      { en: "Gains incoming.", zh: "肌肉马上长。" }
    ]},
  { id: "us-doctor", name: "🏥 看医生 Doctor's Office",
    words: [],
    sentences: [
      { en: "Annual checkup today.", zh: "今天体检。" },
      { en: "Got my blood drawn.", zh: "抽血了。" },
      { en: "Vitals look good.", zh: "生命体征正常。" },
      { en: "BP is borderline.", zh: "血压临界值。" },
      { en: "Refill the prescription.", zh: "续药。" },
      { en: "Referral to a specialist.", zh: "转诊专科。" },
      { en: "Insurance covers it.", zh: "保险覆盖。" },
      { en: "Co-pay was $30.", zh: "自付 30 块。" },
      { en: "Reschedule for next week.", zh: "改到下周。" },
      { en: "Lab results in 48 hours.", zh: "48 小时出结果。" },
      { en: "MyChart message tomorrow.", zh: "明天 MyChart 发消息。" },
      { en: "Need a flu shot.", zh: "要打流感针。" },
      { en: "Telehealth instead.", zh: "改远程问诊。" },
      { en: "Stay healthy out there.", zh: "保重身体。" }
    ]}
);

/* ============================================================
   美国常用口语扩充：第十批（交通 / 医疗 / 旅行）
   ============================================================ */
DATA.english_daily.push(
  { id: "us-subway", name: "🚇 地铁 Subway",
    words: [],
    sentences: [
      { en: "Swipe your MetroCard.", zh: "刷地铁卡。" },
      { en: "Mind the gap.", zh: "小心站台缝。" },
      { en: "Stand clear of the closing doors.", zh: "请远离关门处。" },
      { en: "Transfer at 14th Street.", zh: "14 街换乘。" },
      { en: "Take the express, faster.", zh: "坐快线更快。" },
      { en: "Local stops at every station.", zh: "慢车站站停。" },
      { en: "Service change this weekend.", zh: "本周末调线。" },
      { en: "Train's running on Sunday schedule.", zh: "按周日时刻运行。" },
      { en: "Next train in five minutes.", zh: "下趟车五分钟。" },
      { en: "Pack it like sardines.", zh: "挤得像沙丁鱼。" },
      { en: "Showtime, anyone?", zh: "有人要看车厢表演吗？" },
      { en: "Free transfer to the bus.", zh: "免费换公交。" },
      { en: "Lost a glove on the train.", zh: "在车上丢了手套。" },
      { en: "Beats sitting in traffic.", zh: "总比堵车强。" }
    ]},
  { id: "us-bus", name: "🚌 公交 Bus",
    words: [],
    sentences: [
      { en: "Tap your card here.", zh: "在这刷卡。" },
      { en: "Exit through the back.", zh: "后门下车。" },
      { en: "Pull the cord for your stop.", zh: "拉绳子提醒下站。" },
      { en: "Local bus or express?", zh: "慢车还是快车？" },
      { en: "Bus is running late.", zh: "公交晚点了。" },
      { en: "Real-time app helps a lot.", zh: "实时 App 很有用。" },
      { en: "Yield seats to seniors.", zh: "给老人让座。" },
      { en: "No food or drinks.", zh: "禁食禁饮。" },
      { en: "Bus stop two blocks down.", zh: "公交站两条街外。" },
      { en: "Driver, when's the next stop?", zh: "司机，下站是哪？" },
      { en: "Wheelchair ramp out.", zh: "轮椅板下放。" },
      { en: "Greyhound for the long haul.", zh: "长途坐灰狗。" },
      { en: "Wi-Fi on board sometimes.", zh: "车上有时有 Wi-Fi。" },
      { en: "Cheaper than Uber.", zh: "比 Uber 便宜。" }
    ]},
  { id: "us-amtrak", name: "🚆 火车 Amtrak",
    words: [],
    sentences: [
      { en: "Catch the train at Penn.", zh: "在宾州车站坐车。" },
      { en: "Acela is the fast one.", zh: "Acela 是快车。" },
      { en: "Quiet car, no calls please.", zh: "静音车厢请勿打电话。" },
      { en: "Café car is in the middle.", zh: "餐车在中间。" },
      { en: "Reserved seat in coach.", zh: "经济舱预约座。" },
      { en: "Conductor checks tickets.", zh: "乘务员查票。" },
      { en: "Power outlets at every seat.", zh: "每个座位有插座。" },
      { en: "Beautiful coastline views.", zh: "海岸线美景。" },
      { en: "Beats flying short distances.", zh: "短途比坐飞机强。" },
      { en: "Free Wi-Fi on board.", zh: "车上有免费 Wi-Fi。" },
      { en: "Stop announced over the PA.", zh: "广播报站。" },
      { en: "Train was delayed an hour.", zh: "火车晚点一小时。" },
      { en: "Use mobile ticketing.", zh: "用手机电子票。" },
      { en: "All aboard!", zh: "请上车！" }
    ]},
  { id: "us-rideshare", name: "🚗 网约车 Rideshare",
    words: [],
    sentences: [
      { en: "Ordered an Uber.", zh: "叫了 Uber。" },
      { en: "Driver's three minutes away.", zh: "司机三分钟到。" },
      { en: "Black or X today?", zh: "今天叫黑车还是 X？" },
      { en: "Pool ride saves money.", zh: "拼车省钱。" },
      { en: "Add a tip in the app.", zh: "在 App 里加小费。" },
      { en: "Five stars, please.", zh: "请给五星。" },
      { en: "Surge pricing, ouch.", zh: "高峰加价，惨。" },
      { en: "Confirm the license plate.", zh: "核对车牌。" },
      { en: "Riding in the back seat.", zh: "坐后座。" },
      { en: "Lyft might be cheaper.", zh: "Lyft 可能更便宜。" },
      { en: "Mute the small talk.", zh: "选不闲聊模式。" },
      { en: "Forgot my phone in the car!", zh: "手机落车上了！" },
      { en: "Report it through the app.", zh: "通过 App 上报。" },
      { en: "Rate the driver.", zh: "给司机评分。" }
    ]},
  { id: "us-rental-car", name: "🚙 租车 Rental Car",
    words: [],
    sentences: [
      { en: "Booked through Enterprise.", zh: "通过 Enterprise 订的。" },
      { en: "Pick up at the airport.", zh: "机场取车。" },
      { en: "Compact or mid-size?", zh: "紧凑还是中型？" },
      { en: "Decline the insurance?", zh: "拒保？" },
      { en: "Credit card covers it.", zh: "信用卡有覆盖。" },
      { en: "Full tank return.", zh: "满油归还。" },
      { en: "Toll pass is extra.", zh: "ETC 通行额外收费。" },
      { en: "Drop off downtown.", zh: "市中心还车。" },
      { en: "Drove a Camry this time.", zh: "这次开的凯美瑞。" },
      { en: "Got an upgrade for free.", zh: "免费升级。" },
      { en: "Check the gas gauge.", zh: "看油表。" },
      { en: "Inspect for scratches first.", zh: "先检查划痕。" },
      { en: "Smooth ride for the trip.", zh: "这趟很顺。" },
      { en: "Returning early, hopefully refunded.", zh: "提前还车希望退点钱。" }
    ]},
  { id: "us-gas", name: "⛽ 加油站 Gas Station",
    words: [],
    sentences: [
      { en: "Need to gas up.", zh: "得加油了。" },
      { en: "Regular, not premium.", zh: "92 号，不要 95。" },
      { en: "Pump six, please.", zh: "六号油枪。" },
      { en: "Pay at the pump.", zh: "在油枪刷卡。" },
      { en: "Cash or card?", zh: "现金还是刷卡？" },
      { en: "Top off the tank.", zh: "加满。" },
      { en: "Check tire pressure.", zh: "查胎压。" },
      { en: "Windshield washer fluid.", zh: "玻璃水。" },
      { en: "Snacks for the road.", zh: "买点路餐。" },
      { en: "Restroom around back.", zh: "厕所在后面。" },
      { en: "Gas is up again.", zh: "油价又涨了。" },
      { en: "Costco fuel is cheaper.", zh: "Costco 油更便宜。" },
      { en: "Squeegee the bugs off.", zh: "刮掉前挡的虫。" },
      { en: "Receipt, please.", zh: "请打小票。" }
    ]},
  { id: "us-car-wash", name: "🚿 洗车 Car Wash",
    words: [],
    sentences: [
      { en: "Take it through the wash.", zh: "开进洗车房。" },
      { en: "Basic or works?", zh: "基础还是全套？" },
      { en: "Membership is worth it.", zh: "买会员值。" },
      { en: "Unlimited washes monthly.", zh: "包月无限洗。" },
      { en: "Vacuums are free.", zh: "吸尘免费。" },
      { en: "Wipe down the dash.", zh: "擦中控台。" },
      { en: "Wheel cleaner included.", zh: "包含轮毂清洁。" },
      { en: "Wax on, wax off.", zh: "上蜡，擦蜡。" },
      { en: "Bird droppings, again.", zh: "鸟屎又来了。" },
      { en: "Hand wash is gentler.", zh: "手洗更温柔。" },
      { en: "Drying with microfiber.", zh: "用超细纤维布擦干。" },
      { en: "Tip the staff.", zh: "给员工小费。" },
      { en: "Looks brand new.", zh: "跟新车一样。" },
      { en: "Worth the eight bucks.", zh: "8 块花得值。" }
    ]},
  { id: "us-mechanic", name: "🔧 修车 Mechanic",
    words: [],
    sentences: [
      { en: "Check engine light's on.", zh: "故障灯亮了。" },
      { en: "Make an appointment.", zh: "预约一下。" },
      { en: "Drop it off in the morning.", zh: "早上送过去。" },
      { en: "Just a routine oil change.", zh: "只是例行换机油。" },
      { en: "Brakes are squealing.", zh: "刹车在响。" },
      { en: "Diagnostic fee is $100.", zh: "诊断费 100 块。" },
      { en: "Estimate's pretty steep.", zh: "报价不便宜。" },
      { en: "Get a second opinion.", zh: "再找一家看看。" },
      { en: "Rotate the tires while you're at it.", zh: "顺便换胎位。" },
      { en: "Alignment and balance.", zh: "做四轮定位和动平衡。" },
      { en: "Loaner car available?", zh: "有代步车吗？" },
      { en: "Ready by Friday.", zh: "周五好。" },
      { en: "Warranty covered most of it.", zh: "保修包大头。" },
      { en: "Runs smooth again.", zh: "又顺了。" }
    ]},
  { id: "us-dmv", name: "🪪 车管所 DMV",
    words: [],
    sentences: [
      { en: "Made a DMV appointment.", zh: "预约了 DMV。" },
      { en: "Bring two forms of ID.", zh: "带两份证件。" },
      { en: "Number 47, window 3.", zh: "47 号请到 3 号窗口。" },
      { en: "Renewing my license.", zh: "续驾照。" },
      { en: "Vision test, please.", zh: "做视力测试。" },
      { en: "Smile for the camera.", zh: "对镜头笑一下。" },
      { en: "Real ID required next year.", zh: "明年起要 Real ID。" },
      { en: "Registration renewal online.", zh: "网上续年检。" },
      { en: "Title transfer takes a week.", zh: "过户要一周。" },
      { en: "New plate or keep yours?", zh: "新牌还是留旧的？" },
      { en: "Pay the fee at the cashier.", zh: "收银台缴费。" },
      { en: "Take a seat and wait.", zh: "坐着等。" },
      { en: "Long line, brought a book.", zh: "队长，带本书。" },
      { en: "Done in under an hour, win.", zh: "一小时内办完，赢了。" }
    ]},
  { id: "us-license", name: "🪪 考驾照 Driver's License",
    words: [],
    sentences: [
      { en: "Studying for the permit test.", zh: "在学许可证笔试。" },
      { en: "Practice tests online.", zh: "网上做模拟题。" },
      { en: "Behind-the-wheel hours required.", zh: "要够路考小时数。" },
      { en: "Parallel parking, ugh.", zh: "侧方停车，唉。" },
      { en: "Three-point turn next.", zh: "下面三点掉头。" },
      { en: "Signal every lane change.", zh: "每次变道都打灯。" },
      { en: "Check blind spots.", zh: "检查盲区。" },
      { en: "Hands at ten and two.", zh: "10 点 2 点扶方向盘。" },
      { en: "Don't roll the stop sign.", zh: "停车标志要停稳。" },
      { en: "Road test next Friday.", zh: "下周五路考。" },
      { en: "Passed on the first try!", zh: "一次过！" },
      { en: "Driving alone for the first time.", zh: "第一次独自开车。" },
      { en: "Brand-new license, baby.", zh: "新驾照到手。" },
      { en: "Drive safe out there.", zh: "开车小心。" }
    ]},
  { id: "us-traffic", name: "🚦 堵车 Traffic",
    words: [],
    sentences: [
      { en: "Stuck in traffic again.", zh: "又堵了。" },
      { en: "Bumper to bumper.", zh: "保险杠贴保险杠。" },
      { en: "Rush hour is brutal.", zh: "高峰太猛。" },
      { en: "Accident up ahead.", zh: "前方事故。" },
      { en: "Reroute through side streets.", zh: "走小路绕行。" },
      { en: "Google Maps says 45 minutes.", zh: "地图说要 45 分钟。" },
      { en: "Carpool lane is empty.", zh: "拼车道空空的。" },
      { en: "Just merge, please!", zh: "麻烦快并道！" },
      { en: "Honking won't help.", zh: "按喇叭没用。" },
      { en: "Construction on the bridge.", zh: "桥上施工。" },
      { en: "Detour signs everywhere.", zh: "到处是改道牌。" },
      { en: "Beat the rush, leave early.", zh: "早走避高峰。" },
      { en: "Listen to a podcast.", zh: "听个播客。" },
      { en: "Finally moving again.", zh: "终于又走了。" }
    ]},
  { id: "us-parking", name: "🅿 停车 Parking",
    words: [],
    sentences: [
      { en: "Find a spot in the garage.", zh: "在停车楼找位。" },
      { en: "Street parking is brutal.", zh: "路边停车太难。" },
      { en: "Feed the meter.", zh: "投币计费表。" },
      { en: "PayByPhone app saves time.", zh: "PayByPhone App 省事。" },
      { en: "Valet at the restaurant.", zh: "餐厅有代客泊车。" },
      { en: "Got a ticket, ugh.", zh: "吃罚单了，唉。" },
      { en: "Read the signs carefully.", zh: "仔细看标牌。" },
      { en: "Street cleaning Tuesdays.", zh: "周二扫街禁停。" },
      { en: "Resident permit needed.", zh: "需要居民车证。" },
      { en: "Don't block the driveway.", zh: "别挡车道。" },
      { en: "Compact spots are tiny.", zh: "小车位太窄。" },
      { en: "Got towed, oh no.", zh: "被拖走了，完蛋。" },
      { en: "Garage rate is hourly.", zh: "停车楼按小时。" },
      { en: "Validated my ticket.", zh: "停车票盖章了。" }
    ]},
  { id: "us-toll", name: "🛣 收费道 Tolls",
    words: [],
    sentences: [
      { en: "E-ZPass in the windshield.", zh: "前挡贴 E-ZPass。" },
      { en: "Cashless tolling now.", zh: "现在全电子收费。" },
      { en: "Bill comes in the mail.", zh: "账单邮寄。" },
      { en: "Avoid tolls on the route.", zh: "导航避开收费。" },
      { en: "Express lane is faster.", zh: "快线更快。" },
      { en: "Congestion pricing downtown.", zh: "市中心拥堵费。" },
      { en: "Tunnel toll is steep.", zh: "隧道费贵。" },
      { en: "Crossed three states today.", zh: "今天跨了三州。" },
      { en: "Rental cars charge a fee too.", zh: "租车公司还收手续费。" },
      { en: "Top up the account.", zh: "充值账户。" },
      { en: "Beep means you're charged.", zh: "嘀一声就扣费了。" },
      { en: "Some bridges are toll-free.", zh: "有些桥不收费。" },
      { en: "Worth it for the time saved.", zh: "省时间值。" },
      { en: "Receipt in my email.", zh: "邮箱收到回执。" }
    ]},
  { id: "us-airport", name: "✈ 机场 Airport",
    words: [],
    sentences: [
      { en: "Check in online first.", zh: "先网上值机。" },
      { en: "Got my boarding pass.", zh: "登机牌到手。" },
      { en: "Bag drop is over there.", zh: "行李托运在那边。" },
      { en: "Carry-on only today.", zh: "今天只带随身。" },
      { en: "TSA PreCheck saves time.", zh: "PreCheck 省时间。" },
      { en: "Clear is even faster.", zh: "Clear 更快。" },
      { en: "Liquids in a quart bag.", zh: "液体放小袋。" },
      { en: "Laptop out, shoes off.", zh: "笔记本拿出，鞋脱掉。" },
      { en: "Gate change, hurry!", zh: "登机口改了，快走！" },
      { en: "Boarding group three.", zh: "第三组登机。" },
      { en: "Window seat, please.", zh: "请给我靠窗。" },
      { en: "Lounge access through Amex.", zh: "Amex 卡用休息室。" },
      { en: "Layover is two hours.", zh: "中转两小时。" },
      { en: "Safe travels!", zh: "一路平安！" }
    ]},
  { id: "us-flight", name: "🛫 飞行 Flight",
    words: [],
    sentences: [
      { en: "Stow your bag overhead.", zh: "包放头顶行李架。" },
      { en: "Buckle your seatbelt.", zh: "系好安全带。" },
      { en: "Tray table up for takeoff.", zh: "起飞收起小桌板。" },
      { en: "Airplane mode now.", zh: "请开飞行模式。" },
      { en: "Beverage service coming.", zh: "马上有饮品服务。" },
      { en: "Free pretzels and Biscoff.", zh: "免费椒盐脆和饼干。" },
      { en: "Turbulence ahead.", zh: "前方有颠簸。" },
      { en: "Captain turned the sign on.", zh: "机长亮了指示灯。" },
      { en: "Snooze through the flight.", zh: "全程小睡。" },
      { en: "Window shade up for landing.", zh: "降落请打开遮光板。" },
      { en: "On-time arrival, score.", zh: "准点到达，赞。" },
      { en: "Bumpy landing, but safe.", zh: "落地有点晃，平安就好。" },
      { en: "Thanks for flying with us.", zh: "感谢搭乘。" },
      { en: "Welcome to your destination.", zh: "欢迎到达目的地。" }
    ]},
  { id: "us-baggage", name: "🧳 行李 Baggage",
    words: [],
    sentences: [
      { en: "Baggage claim three.", zh: "三号转盘。" },
      { en: "Wait by the belt.", zh: "在转盘旁等。" },
      { en: "Bag has a red ribbon.", zh: "包上系了红丝带。" },
      { en: "Lost luggage, again.", zh: "行李又丢了。" },
      { en: "File a report at the counter.", zh: "柜台报失。" },
      { en: "AirTag tracked it!", zh: "AirTag 定到了！" },
      { en: "Delivered to the hotel tomorrow.", zh: "明天送到酒店。" },
      { en: "Carry-on broke a wheel.", zh: "行李箱坏了个轮。" },
      { en: "Weight limit is 50 pounds.", zh: "重量限 50 磅。" },
      { en: "Overweight fee, ouch.", zh: "超重费，惨。" },
      { en: "Use a luggage cart.", zh: "用行李车。" },
      { en: "Pack lighter next time.", zh: "下次少带点。" },
      { en: "Customs declaration ready.", zh: "海关单填好。" },
      { en: "All bags accounted for.", zh: "行李都齐了。" }
    ]},
  { id: "us-tsa", name: "🛡 安检 TSA",
    words: [],
    sentences: [
      { en: "ID and boarding pass out.", zh: "证件登机牌拿出。" },
      { en: "Belt and watch off.", zh: "皮带手表脱下。" },
      { en: "Step into the scanner.", zh: "进扫描仪。" },
      { en: "Arms above your head.", zh: "举起双手。" },
      { en: "Random secondary check.", zh: "随机二次检查。" },
      { en: "Bin for the laptop.", zh: "笔记本放筐里。" },
      { en: "No knives in your bag.", zh: "包里不能有刀。" },
      { en: "Liquids over 3.4 ounces?", zh: "液体超 100 毫升吗？" },
      { en: "Forgot the water bottle, oops.", zh: "忘了水瓶。" },
      { en: "Pat-down requested.", zh: "申请人工检查。" },
      { en: "PreCheck line, much faster.", zh: "PreCheck 通道，快多了。" },
      { en: "Show your boarding pass again.", zh: "再亮一下登机牌。" },
      { en: "Have a good flight.", zh: "祝您飞行愉快。" },
      { en: "Cleared in under 10 minutes.", zh: "10 分钟内通过。" }
    ]},
  { id: "us-customs", name: "🛂 海关 Customs",
    words: [],
    sentences: [
      { en: "Welcome back to the States.", zh: "欢迎回美。" },
      { en: "Global Entry, this way.", zh: "Global Entry 这边走。" },
      { en: "Passport, please.", zh: "请出示护照。" },
      { en: "Reason for your trip?", zh: "出行目的？" },
      { en: "Business or pleasure?", zh: "公务还是旅游？" },
      { en: "How long were you abroad?", zh: "在国外多久？" },
      { en: "Anything to declare?", zh: "有需要申报的吗？" },
      { en: "Just souvenirs.", zh: "只有纪念品。" },
      { en: "Customs form filled out.", zh: "海关单填好了。" },
      { en: "Random bag check.", zh: "随机查包。" },
      { en: "Stamp in the passport.", zh: "护照盖章。" },
      { en: "Took 20 minutes, not bad.", zh: "20 分钟搞定，不错。" },
      { en: "Welcome home.", zh: "欢迎回家。" },
      { en: "Glad to be back.", zh: "回来真好。" }
    ]},
  { id: "us-hotel2", name: "🏨 酒店入住 Hotel Check-in",
    words: [],
    sentences: [
      { en: "Reservation under Smith.", zh: "Smith 名下的预订。" },
      { en: "Two queen beds, non-smoking.", zh: "两张大床，无烟。" },
      { en: "Check-in at three.", zh: "三点入住。" },
      { en: "Early check-in available?", zh: "可以提早入住吗？" },
      { en: "Late checkout, please.", zh: "请延后退房。" },
      { en: "Room key cards, two.", zh: "房卡两张。" },
      { en: "Wi-Fi password on the card.", zh: "卡上有 Wi-Fi 密码。" },
      { en: "Breakfast included?", zh: "包早餐吗？" },
      { en: "Pool's open till ten.", zh: "泳池开到十点。" },
      { en: "Gym on the second floor.", zh: "二楼健身房。" },
      { en: "Valet or self-park?", zh: "代客还是自停？" },
      { en: "Room service menu, please.", zh: "请给客房服务菜单。" },
      { en: "Wake-up call at six.", zh: "六点叫醒。" },
      { en: "Have a great stay.", zh: "祝您入住愉快。" }
    ]},
  { id: "us-pharmacy", name: "💊 药店 Pharmacy",
    words: [],
    sentences: [
      { en: "Picking up a prescription.", zh: "来取药。" },
      { en: "Last name, please.", zh: "请告诉我姓氏。" },
      { en: "ID for controlled substances.", zh: "管制药品需要证件。" },
      { en: "Insurance info on file.", zh: "保险信息已存档。" },
      { en: "Co-pay is $15.", zh: "自付 15 块。" },
      { en: "Generic version available.", zh: "有仿制药。" },
      { en: "Take with food.", zh: "随餐服用。" },
      { en: "Twice daily, 12 hours apart.", zh: "每日两次，间隔 12 小时。" },
      { en: "Side effects, watch for nausea.", zh: "副作用注意恶心。" },
      { en: "Refills automatic.", zh: "自动续配。" },
      { en: "Flu shot here today?", zh: "今天可以打流感针吗？" },
      { en: "OTC aisle on the left.", zh: "非处方药在左边。" },
      { en: "Pharmacist will call you.", zh: "药师会叫你名字。" },
      { en: "Have a healthy day.", zh: "祝您身体健康。" }
    ]},
  { id: "us-dentist", name: "🦷 牙医 Dentist",
    words: [],
    sentences: [
      { en: "Time for a cleaning.", zh: "该洗牙了。" },
      { en: "Open wide, please.", zh: "请张大嘴。" },
      { en: "X-rays first.", zh: "先拍 X 光。" },
      { en: "Floss every day.", zh: "每天用牙线。" },
      { en: "Cavity on the molar.", zh: "磨牙有蛀。" },
      { en: "Need a filling.", zh: "要补牙。" },
      { en: "Numb in five minutes.", zh: "五分钟麻醉起效。" },
      { en: "Just a little pressure.", zh: "只是有点压力。" },
      { en: "Rinse and spit.", zh: "漱口吐掉。" },
      { en: "Whitening trays at home.", zh: "在家用美白盘。" },
      { en: "Schedule a six-month checkup.", zh: "约半年后复查。" },
      { en: "Insurance covers two cleanings.", zh: "保险包两次洁牙。" },
      { en: "Avoid sugar.", zh: "少吃糖。" },
      { en: "Smile looks great.", zh: "笑容很棒。" }
    ]},
  { id: "us-eye", name: "👓 眼镜店 Optometrist",
    words: [],
    sentences: [
      { en: "Annual eye exam.", zh: "年度验光。" },
      { en: "Read the chart, please.", zh: "请读视力表。" },
      { en: "Better one, or two?", zh: "1 号清晰还是 2 号？" },
      { en: "Slight prescription change.", zh: "度数微调。" },
      { en: "Update the contacts too.", zh: "隐形眼镜也换。" },
      { en: "Try on these frames.", zh: "试试这副镜架。" },
      { en: "Anti-glare coating?", zh: "加防眩光膜？" },
      { en: "Blue light filter, yes.", zh: "防蓝光，要。" },
      { en: "Ready in a week.", zh: "一周后取。" },
      { en: "Insurance covers half.", zh: "保险报一半。" },
      { en: "Backup glasses are smart.", zh: "备一副明智。" },
      { en: "Dilation feels weird.", zh: "散瞳挺怪。" },
      { en: "Wear sunglasses leaving.", zh: "出门戴墨镜。" },
      { en: "See you next year.", zh: "明年见。" }
    ]},
  { id: "us-er", name: "🚑 急诊 ER",
    words: [],
    sentences: [
      { en: "Heading to the ER.", zh: "去急诊。" },
      { en: "Sign in at the window.", zh: "在窗口登记。" },
      { en: "Triage will see you soon.", zh: "分诊会很快见你。" },
      { en: "Wait could be long.", zh: "等候可能久。" },
      { en: "Insurance card and ID.", zh: "保险卡和证件。" },
      { en: "Rate the pain one to ten.", zh: "疼痛 1 到 10 分。" },
      { en: "Vitals taken.", zh: "测了生命体征。" },
      { en: "IV fluids, just in case.", zh: "挂点滴以防万一。" },
      { en: "CT scan ordered.", zh: "开了 CT。" },
      { en: "Stitches needed.", zh: "需要缝针。" },
      { en: "Discharge instructions, read carefully.", zh: "出院注意事项要看清。" },
      { en: "Follow up with PCP.", zh: "找家庭医生复诊。" },
      { en: "Take the meds as prescribed.", zh: "按医嘱服药。" },
      { en: "Get well soon.", zh: "早日康复。" }
    ]},
  { id: "us-urgent", name: "🏥 急诊诊所 Urgent Care",
    words: [],
    sentences: [
      { en: "Walk-ins welcome.", zh: "无需预约。" },
      { en: "Fill out the forms.", zh: "填表。" },
      { en: "Co-pay due today.", zh: "今天付自付额。" },
      { en: "Strep test, quick swab.", zh: "链球菌快筛拭子。" },
      { en: "Positive, antibiotics it is.", zh: "阳性，开抗生素。" },
      { en: "Sprained ankle, x-ray.", zh: "扭脚，拍 X 光。" },
      { en: "Wrap and ice it.", zh: "包扎冰敷。" },
      { en: "No fracture, just a sprain.", zh: "没骨折，只是扭伤。" },
      { en: "Rest a couple days.", zh: "休息几天。" },
      { en: "Tetanus shot recommended.", zh: "建议打破伤风。" },
      { en: "Open till nine.", zh: "开到九点。" },
      { en: "Weekend hours too.", zh: "周末也开。" },
      { en: "Faster than the ER.", zh: "比急诊快。" },
      { en: "Feel better soon.", zh: "祝早日好转。" }
    ]},
  { id: "us-vaccine", name: "💉 疫苗 Vaccine",
    words: [],
    sentences: [
      { en: "Flu shot this fall.", zh: "今年秋打流感。" },
      { en: "Covid booster too.", zh: "新冠加强针也打。" },
      { en: "Tdap every ten years.", zh: "破伤风每十年打。" },
      { en: "Roll up your sleeve.", zh: "卷袖子。" },
      { en: "Quick pinch, that's it.", zh: "扎一下就好。" },
      { en: "Side effects mild.", zh: "副作用轻微。" },
      { en: "Arm sore tomorrow.", zh: "明天胳膊酸。" },
      { en: "Vaccine record updated.", zh: "疫苗记录已更新。" },
      { en: "Kids' shots schedule.", zh: "儿童接种计划。" },
      { en: "Pharmacy walk-in available.", zh: "药店可现场打。" },
      { en: "Free with insurance.", zh: "保险覆盖免费。" },
      { en: "Travel shots, six weeks ahead.", zh: "旅行针提前六周。" },
      { en: "Yellow fever required.", zh: "黄热病要求。" },
      { en: "Stay healthy.", zh: "保持健康。" }
    ]},
  { id: "us-therapy", name: "🛋 心理咨询 Therapy",
    words: [],
    sentences: [
      { en: "Started therapy this year.", zh: "今年开始做心理咨询。" },
      { en: "Weekly sessions help.", zh: "每周一次很有帮助。" },
      { en: "Talk about whatever's up.", zh: "想到什么聊什么。" },
      { en: "Therapist is great.", zh: "咨询师很好。" },
      { en: "Therapy isn't taboo.", zh: "做咨询没什么忌讳。" },
      { en: "Insurance covers in-network.", zh: "保险覆盖网内。" },
      { en: "Sliding scale available.", zh: "有浮动收费。" },
      { en: "Set boundaries with family.", zh: "和家人定界限。" },
      { en: "CBT really worked.", zh: "认知行为疗法很有效。" },
      { en: "EMDR for trauma.", zh: "EMDR 处理创伤。" },
      { en: "Mental health matters.", zh: "心理健康很重要。" },
      { en: "Therapy isn't weakness.", zh: "做咨询不是软弱。" },
      { en: "Find someone you click with.", zh: "找个聊得来的。" },
      { en: "Take care of yourself.", zh: "照顾好自己。" }
    ]},
  { id: "us-anxiety", name: "😰 焦虑 Anxiety",
    words: [],
    sentences: [
      { en: "My anxiety is spiking.", zh: "我焦虑发作了。" },
      { en: "Take some deep breaths.", zh: "深呼吸几次。" },
      { en: "Four-seven-eight breathing.", zh: "478 呼吸法。" },
      { en: "Name five things you see.", zh: "说出看到的五样东西。" },
      { en: "Grounding technique helps.", zh: "接地练习有用。" },
      { en: "Caffeine makes it worse.", zh: "咖啡让它更糟。" },
      { en: "Sleep is everything.", zh: "睡眠最重要。" },
      { en: "Move your body daily.", zh: "每天动一动。" },
      { en: "Limit doomscrolling.", zh: "少刷负面新闻。" },
      { en: "Talk to someone you trust.", zh: "找信任的人聊聊。" },
      { en: "Therapy makes a difference.", zh: "咨询有用。" },
      { en: "Meds aren't a failure.", zh: "吃药不丢人。" },
      { en: "Be patient with yourself.", zh: "对自己耐心点。" },
      { en: "You're not alone in this.", zh: "你不是一个人。" }
    ]},
  { id: "us-burnout", name: "🔥 倦怠 Burnout",
    words: [],
    sentences: [
      { en: "Totally burned out.", zh: "彻底倦怠了。" },
      { en: "Need a real break.", zh: "需要真正休息。" },
      { en: "PTO this Friday.", zh: "周五请年假。" },
      { en: "Setting boundaries at work.", zh: "工作上设界限。" },
      { en: "Saying no more often.", zh: "多说不。" },
      { en: "Mental health day.", zh: "心理健康日。" },
      { en: "Logged off early today.", zh: "今天提前下班。" },
      { en: "Sunday scaries are bad.", zh: "周日恐惧严重。" },
      { en: "Considering a sabbatical.", zh: "在考虑停薪留职。" },
      { en: "Quiet quitting mode.", zh: "进入静默离职模式。" },
      { en: "Recharge over the weekend.", zh: "周末充充电。" },
      { en: "Therapy and yoga help.", zh: "咨询和瑜伽有用。" },
      { en: "It's okay to rest.", zh: "休息没关系。" },
      { en: "You can't pour from empty.", zh: "空杯子倒不出水。" }
    ]},
  { id: "us-roadtrip", name: "🛣 公路旅行 Road Trip",
    words: [],
    sentences: [
      { en: "Map out the route.", zh: "画好路线。" },
      { en: "Snacks for the car.", zh: "车里备零食。" },
      { en: "Playlist on shuffle.", zh: "歌单随机。" },
      { en: "Audiobook for the long stretch.", zh: "长途听有声书。" },
      { en: "Pit stop in an hour.", zh: "一小时后休息一下。" },
      { en: "Roadside diner for lunch.", zh: "在路边小馆吃中饭。" },
      { en: "Scenic route, why not?", zh: "走风景线吧。" },
      { en: "Tank's getting low.", zh: "油快没了。" },
      { en: "Found a quirky motel.", zh: "找到家特别的汽车旅馆。" },
      { en: "Sunrise drive is magic.", zh: "日出开车太美。" },
      { en: "License plate game!", zh: "玩车牌游戏！" },
      { en: "Are we there yet?", zh: "到了没？" },
      { en: "Memories for the books.", zh: "终身难忘的回忆。" },
      { en: "Drive home tomorrow.", zh: "明天开回家。" }
    ]},
  { id: "us-park-trip", name: "🏞 国家公园 National Park",
    words: [],
    sentences: [
      { en: "America the Beautiful pass.", zh: "国家公园通票。" },
      { en: "Entrance fee is $35 per vehicle.", zh: "每车 35 元入园。" },
      { en: "Junior Ranger badge!", zh: "小护林员徽章！" },
      { en: "Visitor center first.", zh: "先去游客中心。" },
      { en: "Ranger-led talk at two.", zh: "两点护林员讲解。" },
      { en: "Pack a lunch.", zh: "带午饭。" },
      { en: "Stay on the trail.", zh: "走步道上。" },
      { en: "Wildlife from a distance.", zh: "野生动物保持距离。" },
      { en: "Don't feed the animals.", zh: "不要喂动物。" },
      { en: "Bear country, be alert.", zh: "熊出没，保持警觉。" },
      { en: "Camp at the lower loop.", zh: "在下环营地露营。" },
      { en: "Dark sky for stargazing.", zh: "黑天空适合观星。" },
      { en: "Yellowstone is unreal.", zh: "黄石壮观。" },
      { en: "Pack it in, pack it out.", zh: "进出都带走。" }
    ]},
  { id: "us-theme-park", name: "🎢 主题公园 Theme Park",
    words: [],
    sentences: [
      { en: "Disney for the weekend!", zh: "周末去迪士尼！" },
      { en: "Get the Genie+ pass.", zh: "买 Genie+ 通票。" },
      { en: "Hit the headliners first.", zh: "先玩王牌项目。" },
      { en: "Single rider line is shorter.", zh: "单人通道更快。" },
      { en: "Big rides have height limits.", zh: "大项目有身高限制。" },
      { en: "Parade at three.", zh: "三点游行。" },
      { en: "Fireworks at nine.", zh: "九点烟花。" },
      { en: "Wear comfy shoes.", zh: "穿舒服的鞋。" },
      { en: "Stay hydrated all day.", zh: "整天多喝水。" },
      { en: "Photo spot, smile!", zh: "拍照点，笑一个！" },
      { en: "Universal next time.", zh: "下次去环球。" },
      { en: "Six Flags coaster, intense.", zh: "六旗过山车太刺激。" },
      { en: "Cotton candy at the entrance.", zh: "入口有棉花糖。" },
      { en: "Best day ever.", zh: "最棒的一天。" }
    ]},
  { id: "us-fair2", name: "🎡 集市 Fair",
    words: [],
    sentences: [
      { en: "County fair this weekend.", zh: "周末有县集。" },
      { en: "Funnel cake first, obviously.", zh: "当然先吃漏斗蛋糕。" },
      { en: "Ride the Ferris wheel.", zh: "坐摩天轮。" },
      { en: "Watch out for the spinning ones.", zh: "小心旋转那些。" },
      { en: "Livestock barn over there.", zh: "牲畜馆在那边。" },
      { en: "Prize-winning pumpkin!", zh: "得奖的南瓜！" },
      { en: "Lemonade is fresh-squeezed.", zh: "柠檬水现榨。" },
      { en: "Corn dog with mustard.", zh: "玉米热狗加芥末。" },
      { en: "Rodeo at seven.", zh: "七点牛仔竞技。" },
      { en: "Tractor pull is loud.", zh: "拖拉机赛超响。" },
      { en: "Win a prize at the booth.", zh: "在摊位赢奖。" },
      { en: "Cotton candy face.", zh: "棉花糖糊了脸。" },
      { en: "Kids are wiped out.", zh: "孩子累瘫了。" },
      { en: "Pure Americana.", zh: "纯正美国味儿。" }
    ]},
  { id: "us-amusement", name: "🎠 游乐场 Amusement",
    words: [],
    sentences: [
      { en: "Buy the all-day band.", zh: "买全日手环。" },
      { en: "Carousel for the little ones.", zh: "小朋友坐旋转木马。" },
      { en: "Bumper cars are wild.", zh: "碰碰车太疯。" },
      { en: "Splash pad cools you down.", zh: "戏水区降暑。" },
      { en: "Mini golf next.", zh: "下面玩迷你高尔夫。" },
      { en: "Arcade tokens, please.", zh: "请买电玩代币。" },
      { en: "Skee-ball is my game.", zh: "我擅长 skee-ball。" },
      { en: "Win tickets for prizes.", zh: "赢票换奖。" },
      { en: "Plush toy or candy?", zh: "毛绒玩具还是糖？" },
      { en: "Lockers near the gate.", zh: "门口有储物柜。" },
      { en: "Stroller rental cheap.", zh: "婴儿车便宜租。" },
      { en: "Long lines this weekend.", zh: "本周末队长。" },
      { en: "Fun for the whole family.", zh: "全家欢乐。" },
      { en: "Until next time!", zh: "下次再来！" }
    ]},
  { id: "us-cruise", name: "🚢 邮轮 Cruise",
    words: [],
    sentences: [
      { en: "Cruise to the Bahamas.", zh: "巴哈马邮轮。" },
      { en: "All-inclusive package.", zh: "全包套餐。" },
      { en: "Ocean view balcony.", zh: "海景阳台房。" },
      { en: "Muster drill, mandatory.", zh: "应急演练强制。" },
      { en: "Buffet 24/7.", zh: "自助餐 24 小时。" },
      { en: "Specialty dining extra.", zh: "特色餐另付。" },
      { en: "Pool deck is packed.", zh: "泳池甲板满了。" },
      { en: "Excursion in Nassau.", zh: "拿骚岸上游览。" },
      { en: "Don't miss the ship!", zh: "别错过开船！" },
      { en: "Show on the Lido deck.", zh: "Lido 甲板有演出。" },
      { en: "Casino opens at sea.", zh: "出海后赌场开放。" },
      { en: "Tip your steward.", zh: "给客房管家小费。" },
      { en: "Sea days are restful.", zh: "海上日很放松。" },
      { en: "Already booked the next one.", zh: "下一趟已预订。" }
    ]},
  { id: "us-tip2", name: "💵 小费 Tipping",
    words: [],
    sentences: [
      { en: "Twenty percent standard.", zh: "20% 是标准。" },
      { en: "Round up for great service.", zh: "服务好就凑整。" },
      { en: "Cash tip beats card.", zh: "现金小费比刷卡好。" },
      { en: "Tip the driver too.", zh: "给司机也给小费。" },
      { en: "Coffee bar, dollar in the jar.", zh: "咖啡馆罐子里放一块。" },
      { en: "Hotel housekeeping daily.", zh: "酒店清洁每天给。" },
      { en: "Bartender, dollar a drink.", zh: "调酒师一杯一块。" },
      { en: "Hairstylist 20%, no skimping.", zh: "理发 20% 不能省。" },
      { en: "Delivery driver, $5 minimum.", zh: "外卖员至少 5 块。" },
      { en: "Tip jars are everywhere now.", zh: "现在到处都是小费罐。" },
      { en: "Tipflation is real.", zh: "小费通胀是真的。" },
      { en: "Service charge is not a tip.", zh: "服务费不算小费。" },
      { en: "Read the receipt carefully.", zh: "仔细看小票。" },
      { en: "Always tip in cash for hotels.", zh: "酒店打赏用现金。" }
    ]},
  { id: "us-taxes", name: "🧾 报税 Taxes",
    words: [],
    sentences: [
      { en: "Tax season again.", zh: "又到报税季。" },
      { en: "Got my W-2 yesterday.", zh: "昨天收到 W-2。" },
      { en: "1099 from the side gig.", zh: "副业有 1099。" },
      { en: "Standard or itemize?", zh: "标准还是逐项扣除？" },
      { en: "TurboTax for the easy ones.", zh: "简单的用 TurboTax。" },
      { en: "CPA for the complicated.", zh: "复杂的找会计。" },
      { en: "Owed money this year, ouch.", zh: "今年要补税。" },
      { en: "Refund's in the mail.", zh: "退款已寄出。" },
      { en: "Direct deposit faster.", zh: "直接到账更快。" },
      { en: "Extension till October.", zh: "申请延期到 10 月。" },
      { en: "Quarterly estimates for freelancers.", zh: "自由职业者按季预缴。" },
      { en: "Save receipts all year.", zh: "全年留小票。" },
      { en: "401k contributions help.", zh: "401k 投资能抵税。" },
      { en: "April 15 is the deadline.", zh: "4 月 15 日截止。" }
    ]},
  { id: "us-vote", name: "🗳 投票 Voting",
    words: [],
    sentences: [
      { en: "Register to vote online.", zh: "网上选民登记。" },
      { en: "Polling place opens at six.", zh: "投票点 6 点开门。" },
      { en: "Mail-in ballot arrived.", zh: "邮寄选票到了。" },
      { en: "Early voting starts Friday.", zh: "周五开始提前投票。" },
      { en: "Bring your ID.", zh: "带证件。" },
      { en: "Long line at the school.", zh: "学校门口排长队。" },
      { en: "Took my I Voted sticker.", zh: "拿了 I Voted 贴纸。" },
      { en: "Down-ballot races matter.", zh: "地方选举也重要。" },
      { en: "Ballot measures, read up.", zh: "公投议题要了解。" },
      { en: "Local elections in odd years.", zh: "地方选举在单数年。" },
      { en: "Midterms are coming.", zh: "中期选举要到了。" },
      { en: "Civic duty done.", zh: "公民责任尽到了。" },
      { en: "Every vote counts.", zh: "每一票都重要。" },
      { en: "See you at the polls.", zh: "投票站见。" }
    ]},
  { id: "us-news", name: "📰 看新闻 News",
    words: [],
    sentences: [
      { en: "Did you see the news?", zh: "看新闻了吗？" },
      { en: "Headlines are crazy.", zh: "头条疯狂。" },
      { en: "Doom scrolling again.", zh: "又在刷负面新闻。" },
      { en: "Limit news to mornings.", zh: "新闻只看早上。" },
      { en: "Get it from multiple sources.", zh: "看多家来源。" },
      { en: "NPR for the morning commute.", zh: "上班路上听 NPR。" },
      { en: "Local news on the app.", zh: "本地新闻看 App。" },
      { en: "Substack newsletters too.", zh: "也订 Substack 通讯。" },
      { en: "Fact-check before sharing.", zh: "转发前先核实。" },
      { en: "Filter bubble is real.", zh: "信息茧房真的存在。" },
      { en: "Algorithms shape what we see.", zh: "算法塑造我们看到的。" },
      { en: "Touch grass occasionally.", zh: "偶尔接接地气。" },
      { en: "News fast for the weekend.", zh: "周末断新闻。" },
      { en: "Stay informed but not obsessed.", zh: "保持了解但别痴迷。" }
    ]}
);

/* ============================================================
   美国常用口语扩充：第十一批（校园 / 职场 / 社交媒体）
   ============================================================ */
DATA.english_daily.push(
  { id: "us-recess", name: "🛝 课间 Recess",
    words: [],
    sentences: [
      { en: "Recess in five minutes!", zh: "还有五分钟下课！" },
      { en: "Race you to the swings.", zh: "比赛跑到秋千。" },
      { en: "Tag, you're it!", zh: "你被抓到啦！" },
      { en: "Four-square on the blacktop.", zh: "操场上玩四方格。" },
      { en: "Monkey bars are fun.", zh: "猴子杠超好玩。" },
      { en: "Don't push on the slide.", zh: "滑梯上别推人。" },
      { en: "Whistle means line up.", zh: "哨声要排队。" },
      { en: "Yard duty is watching.", zh: "值班老师在看。" },
      { en: "Skip the puddles.", zh: "绕开水坑。" },
      { en: "Jump rope contest.", zh: "跳绳比赛。" },
      { en: "Hopscotch chalked out.", zh: "跳房子画好了。" },
      { en: "Inside recess today, rain.", zh: "下雨在教室活动。" },
      { en: "Best part of the day.", zh: "一天最棒的时候。" },
      { en: "Bell rang, head back.", zh: "铃响了，回去吧。" }
    ]},
  { id: "us-cafeteria", name: "🥪 食堂 Cafeteria",
    words: [],
    sentences: [
      { en: "Hot lunch or cold?", zh: "热餐还是冷餐？" },
      { en: "Pizza Friday, always.", zh: "周五雷打不动披萨。" },
      { en: "Save me a seat.", zh: "帮我留个位。" },
      { en: "Got chocolate milk.", zh: "拿了巧克力奶。" },
      { en: "Trade you my chips.", zh: "我薯片换你的。" },
      { en: "Don't sit alone.", zh: "别一个人坐。" },
      { en: "Lunchroom is loud.", zh: "饭堂超吵。" },
      { en: "Clear your tray.", zh: "餐盘自己收。" },
      { en: "Recycle the milk carton.", zh: "牛奶盒回收。" },
      { en: "Allergy table over there.", zh: "过敏专座在那边。" },
      { en: "Free and reduced lunch.", zh: "免费或减免午餐。" },
      { en: "Salad bar is great.", zh: "沙拉吧不错。" },
      { en: "Mystery meat, hard pass.", zh: "神秘肉，不吃。" },
      { en: "Lunch monitor is strict.", zh: "饭堂老师很严。" }
    ]},
  { id: "us-field-trip", name: "🚌 校外 Field Trip",
    words: [],
    sentences: [
      { en: "Permission slip due Friday.", zh: "周五前交家长签字单。" },
      { en: "Pack a sack lunch.", zh: "带个盒饭。" },
      { en: "Wear the field trip shirt.", zh: "穿研学班服。" },
      { en: "Buddy system on the bus.", zh: "车上结伴。" },
      { en: "Stay with your group.", zh: "跟紧自己组。" },
      { en: "Chaperone is in charge.", zh: "陪同家长负责。" },
      { en: "Bring spending money.", zh: "带点零花钱。" },
      { en: "Gift shop at the end.", zh: "最后去礼品店。" },
      { en: "Take notes for class.", zh: "上课要用，做笔记。" },
      { en: "Bathroom break now.", zh: "现在上厕所。" },
      { en: "Headcount before we leave.", zh: "走前点人数。" },
      { en: "So fun, way better than school.", zh: "比上学有意思多了。" },
      { en: "Back to school by three.", zh: "三点前回校。" },
      { en: "Thanks the chaperones.", zh: "谢谢家长。" }
    ]},
  { id: "us-substitute", name: "👩‍🏫 代课 Substitute",
    words: [],
    sentences: [
      { en: "Sub today, no homework!", zh: "今天代课，不留作业！" },
      { en: "Quiet down, please.", zh: "请安静。" },
      { en: "Take out your reading.", zh: "拿出书来。" },
      { en: "Movie day, maybe.", zh: "也许是看电影日。" },
      { en: "Where's Mrs. Smith?", zh: "Smith 老师呢？" },
      { en: "She's out sick.", zh: "她请病假了。" },
      { en: "Behave for the sub.", zh: "对代课老师乖点。" },
      { en: "Test her name.", zh: "试问她的名字。" },
      { en: "Switch seats, no way.", zh: "想换座，没门。" },
      { en: "Lesson plan on the desk.", zh: "教案放讲台上。" },
      { en: "Worksheet to fill out.", zh: "做练习题。" },
      { en: "Free time at the end.", zh: "课末自由活动。" },
      { en: "Got a stamp for good work.", zh: "表现好盖了章。" },
      { en: "Easy day overall.", zh: "总体很轻松。" }
    ]},
  { id: "us-spelling-bee", name: "🐝 拼写大赛 Spelling Bee",
    words: [],
    sentences: [
      { en: "Spelling bee is Friday.", zh: "周五拼写大赛。" },
      { en: "Study the word list.", zh: "背单词表。" },
      { en: "May I have the definition?", zh: "可以听释义吗？" },
      { en: "Can you use it in a sentence?", zh: "能造个句吗？" },
      { en: "Language of origin?", zh: "词源是哪里？" },
      { en: "Repeat the word, please.", zh: "请重复一遍。" },
      { en: "C-O-N-S-C-I-E-N-C-E.", zh: "拼写 C-O-N-S-C-I-E-N-C-E。" },
      { en: "That is correct.", zh: "回答正确。" },
      { en: "I'm sorry, that's incorrect.", zh: "抱歉，错了。" },
      { en: "Next round, harder words.", zh: "下一轮难度加大。" },
      { en: "Down to the final two.", zh: "剩最后两人。" },
      { en: "Trophy on the line.", zh: "争夺奖杯。" },
      { en: "Regionals next month.", zh: "下月地区赛。" },
      { en: "Words mean everything.", zh: "词汇就是一切。" }
    ]},
  { id: "us-science-fair", name: "🧪 科学展 Science Fair",
    words: [],
    sentences: [
      { en: "Science fair next week.", zh: "下周科学展。" },
      { en: "Tri-fold poster board.", zh: "三折展板。" },
      { en: "Hypothesis at the top.", zh: "假设写在顶部。" },
      { en: "Methods and materials.", zh: "方法与材料。" },
      { en: "Run the experiment three times.", zh: "实验做三遍。" },
      { en: "Record the data.", zh: "记录数据。" },
      { en: "Graph the results.", zh: "画图表。" },
      { en: "Conclusion supports my hypothesis.", zh: "结论支持假设。" },
      { en: "Practice the presentation.", zh: "练习展示。" },
      { en: "Judges ask tough questions.", zh: "评委问题刁钻。" },
      { en: "Volcano is the classic.", zh: "火山是经典选题。" },
      { en: "Mom helped a little.", zh: "妈妈帮了点忙。" },
      { en: "Blue ribbon!", zh: "拿了蓝丝带！" },
      { en: "Going to state.", zh: "进州赛了。" }
    ]},
  { id: "us-prom", name: "👗 毕业舞会 Prom",
    words: [],
    sentences: [
      { en: "Prom is in May.", zh: "5 月毕业舞会。" },
      { en: "Got the dress already.", zh: "礼服买好了。" },
      { en: "Tux rental this weekend.", zh: "周末租礼服。" },
      { en: "Promposal was so cute.", zh: "求约舞太可爱。" },
      { en: "Limo with friends.", zh: "和朋友合租加长车。" },
      { en: "Dinner at a steakhouse.", zh: "牛排馆吃饭。" },
      { en: "Photos at the park.", zh: "公园拍照。" },
      { en: "Corsage matches her dress.", zh: "腕花配她礼服。" },
      { en: "Boutonniere for him.", zh: "他戴胸花。" },
      { en: "DJ played the classics.", zh: "DJ 放老歌。" },
      { en: "Prom king and queen.", zh: "舞会国王和王后。" },
      { en: "After-party at the lake.", zh: "湖边续摊。" },
      { en: "Once-in-a-lifetime night.", zh: "一生一次。" },
      { en: "Bedtime: never.", zh: "睡觉时间：不存在。" }
    ]},
  { id: "us-graduation", name: "🎓 毕业 Graduation",
    words: [],
    sentences: [
      { en: "Cap and gown today!", zh: "今天穿学袍戴学帽！" },
      { en: "Decorate the cap.", zh: "学帽装饰一下。" },
      { en: "Family flying in.", zh: "家人飞过来。" },
      { en: "Reserve the restaurant.", zh: "订餐厅。" },
      { en: "Pomp and circumstance plays.", zh: "毕业典礼曲响起。" },
      { en: "Walk the stage.", zh: "走过台。" },
      { en: "Move the tassel.", zh: "拨穗。" },
      { en: "Toss the caps!", zh: "扔学帽！" },
      { en: "Diploma in hand.", zh: "毕业证到手。" },
      { en: "Photos with friends.", zh: "和朋友合影。" },
      { en: "Open house tomorrow.", zh: "明天开放家中庆祝。" },
      { en: "Cards and checks galore.", zh: "贺卡红包一堆。" },
      { en: "Best day ever, almost.", zh: "差不多是最棒的一天。" },
      { en: "What's next?", zh: "下一步呢？" }
    ]},
  { id: "us-college", name: "🎓 大学 College",
    words: [],
    sentences: [
      { en: "Applied to ten schools.", zh: "申了十所大学。" },
      { en: "Common App is annoying.", zh: "通用申请很烦。" },
      { en: "Essay drafts for days.", zh: "文书改了好多遍。" },
      { en: "Got into my top choice!", zh: "录了第一志愿！" },
      { en: "Waitlisted at Stanford.", zh: "斯坦福候补。" },
      { en: "Financial aid package.", zh: "助学金方案。" },
      { en: "Need-blind admission.", zh: "盲评录取。" },
      { en: "Visiting campus this spring.", zh: "春天去参访校园。" },
      { en: "Roommate matching survey.", zh: "室友匹配问卷。" },
      { en: "Move-in day in August.", zh: "八月入学日。" },
      { en: "Major in computer science.", zh: "主修计算机。" },
      { en: "Minor in math.", zh: "辅修数学。" },
      { en: "Study abroad junior year.", zh: "大三留学。" },
      { en: "Go Cougars!", zh: "美洲狮加油！" }
    ]},
  { id: "us-dorm", name: "🛏 宿舍 Dorm Life",
    words: [],
    sentences: [
      { en: "Roommate's name is Jamie.", zh: "室友叫 Jamie。" },
      { en: "Set quiet hours.", zh: "约定安静时间。" },
      { en: "Shared mini-fridge.", zh: "共用小冰箱。" },
      { en: "Microwave for instant ramen.", zh: "微波炉煮泡面。" },
      { en: "Communal bathroom.", zh: "公共浴室。" },
      { en: "Shower shoes are a must.", zh: "拖鞋必备。" },
      { en: "Quiet floor next year.", zh: "明年住安静楼层。" },
      { en: "Laundry in the basement.", zh: "地下室洗衣。" },
      { en: "Dining hall meal swipes.", zh: "食堂刷卡套餐。" },
      { en: "All-nighter at the library.", zh: "图书馆通宵。" },
      { en: "Movie night in the lounge.", zh: "公共休息室电影夜。" },
      { en: "Fire drill at midnight.", zh: "半夜消防演习。" },
      { en: "RA on call.", zh: "驻舍助理值班。" },
      { en: "Best four years of my life.", zh: "人生最棒的四年。" }
    ]},
  { id: "us-finals", name: "📝 期末周 Finals Week",
    words: [],
    sentences: [
      { en: "Finals week, no sleep.", zh: "期末周，不睡了。" },
      { en: "Study groups everywhere.", zh: "到处是学习小组。" },
      { en: "Library packed by ten.", zh: "图书馆十点就满。" },
      { en: "Cramming for chem.", zh: "化学猛背。" },
      { en: "Office hours this afternoon.", zh: "下午办公时间答疑。" },
      { en: "Cheat sheet allowed.", zh: "允许带小抄。" },
      { en: "Multiple choice or essay?", zh: "选择题还是论述？" },
      { en: "Curve, please curve.", zh: "拜托给曲线。" },
      { en: "Final paper due tonight.", zh: "期末论文今晚交。" },
      { en: "Coffee IV drip.", zh: "咖啡当点滴。" },
      { en: "One more exam, then freedom.", zh: "再考一场就自由。" },
      { en: "Done! Time to celebrate.", zh: "考完了！该庆祝。" },
      { en: "Sleep for three days.", zh: "睡三天。" },
      { en: "Summer break, baby.", zh: "暑假到了。" }
    ]},
  { id: "us-internship", name: "💼 实习 Internship",
    words: [],
    sentences: [
      { en: "Summer internship lined up.", zh: "暑期实习定了。" },
      { en: "Tech company in Seattle.", zh: "西雅图科技公司。" },
      { en: "Housing stipend included.", zh: "包住房补贴。" },
      { en: "Mentor matched on day one.", zh: "第一天就分配导师。" },
      { en: "Project from day one.", zh: "第一天就有项目。" },
      { en: "Demo at the end.", zh: "最后做展示。" },
      { en: "Networking lunches.", zh: "社交午餐。" },
      { en: "Full-time offer at the end?", zh: "最后能转正吗？" },
      { en: "Resume builder for sure.", zh: "履历加分肯定有。" },
      { en: "Met other interns.", zh: "认识其他实习生。" },
      { en: "Weekend hikes together.", zh: "周末一起徒步。" },
      { en: "Open enrollment session.", zh: "福利说明会。" },
      { en: "Return offer accepted.", zh: "接了 return offer。" },
      { en: "See you next summer.", zh: "明年夏天见。" }
    ]},
  { id: "us-resume2", name: "📄 简历 Resume",
    words: [],
    sentences: [
      { en: "Update the resume tonight.", zh: "今晚更新简历。" },
      { en: "One page only.", zh: "只一页。" },
      { en: "Tailor for each role.", zh: "针对每个职位定制。" },
      { en: "Quantify your impact.", zh: "用数字说明影响。" },
      { en: "Action verbs at the start.", zh: "开头用动作动词。" },
      { en: "Skills section at top?", zh: "技能放最上？" },
      { en: "Skip the photo.", zh: "别放照片。" },
      { en: "Save as PDF.", zh: "存成 PDF。" },
      { en: "ATS-friendly format.", zh: "适配 ATS 格式。" },
      { en: "Cover letter, three paragraphs.", zh: "求职信三段。" },
      { en: "LinkedIn matches the resume.", zh: "LinkedIn 和简历一致。" },
      { en: "Have a friend proofread.", zh: "找朋友校对。" },
      { en: "Typos kill candidacy.", zh: "错字毁机会。" },
      { en: "Apply, apply, apply.", zh: "持续投递。" }
    ]},
  { id: "us-interview2", name: "🗣 面试 Job Interview",
    words: [],
    sentences: [
      { en: "Interview at ten tomorrow.", zh: "明天十点面试。" },
      { en: "Research the company.", zh: "研究公司。" },
      { en: "Memorize your STAR stories.", zh: "背 STAR 案例。" },
      { en: "Tell me about yourself.", zh: "介绍一下你自己。" },
      { en: "Why this role?", zh: "为什么选这个岗位？" },
      { en: "Where do you see yourself?", zh: "五年后你想做什么？" },
      { en: "Strengths and weaknesses.", zh: "优点和缺点。" },
      { en: "Behavioral round next.", zh: "下面是行为面。" },
      { en: "Technical screen, leetcode.", zh: "技术面，做 LeetCode。" },
      { en: "Pair programming session.", zh: "结对编程环节。" },
      { en: "Questions for the interviewer.", zh: "反问环节。" },
      { en: "Thank-you note same day.", zh: "当天发感谢信。" },
      { en: "Waiting on the verdict.", zh: "等结果。" },
      { en: "Offer call!", zh: "Offer 电话来了！" }
    ]},
  { id: "us-offer", name: "📧 录用 Job Offer",
    words: [],
    sentences: [
      { en: "Got the offer letter!", zh: "收到 offer 信！" },
      { en: "Base salary plus bonus.", zh: "底薪加奖金。" },
      { en: "Equity vests over four years.", zh: "期权四年归属。" },
      { en: "Sign-on bonus is sweet.", zh: "签约奖金不错。" },
      { en: "Negotiate before signing.", zh: "签字前谈判。" },
      { en: "Counter the offer.", zh: "反提条件。" },
      { en: "Benefits package matters.", zh: "福利包很重要。" },
      { en: "401k match, fully vested.", zh: "401k 配比，立即归属。" },
      { en: "PTO, twenty days.", zh: "20 天年假。" },
      { en: "Remote-friendly role.", zh: "支持远程。" },
      { en: "Start date in two weeks.", zh: "两周后入职。" },
      { en: "Background check pending.", zh: "背调进行中。" },
      { en: "Signed and sent back.", zh: "签好寄回。" },
      { en: "Congrats on the new job!", zh: "新工作恭喜！" }
    ]},
  { id: "us-onboard2", name: "🎒 入职 Onboarding",
    words: [],
    sentences: [
      { en: "First day jitters.", zh: "第一天紧张。" },
      { en: "HR forms galore.", zh: "HR 表格一堆。" },
      { en: "I-9 and W-4.", zh: "I-9 和 W-4。" },
      { en: "Direct deposit set up.", zh: "工资直存设置好。" },
      { en: "Benefits enrollment open.", zh: "福利登记开始。" },
      { en: "Got the laptop today.", zh: "今天领了电脑。" },
      { en: "Meet the team.", zh: "见团队。" },
      { en: "Lunch with the manager.", zh: "和老板吃饭。" },
      { en: "Set up Slack and email.", zh: "配置 Slack 和邮箱。" },
      { en: "Onboarding buddy is great.", zh: "入职伙伴很棒。" },
      { en: "30-60-90 plan.", zh: "30-60-90 计划。" },
      { en: "Shadow some meetings.", zh: "旁听几个会。" },
      { en: "First project assigned.", zh: "分到第一个项目。" },
      { en: "Welcome aboard!", zh: "欢迎加入！" }
    ]},
  { id: "us-1on1", name: "🪑 一对一 1:1 Meeting",
    words: [],
    sentences: [
      { en: "1:1 with my manager today.", zh: "今天和老板一对一。" },
      { en: "Bring an agenda.", zh: "带议程来。" },
      { en: "Talk about priorities.", zh: "聊优先级。" },
      { en: "What's blocking you?", zh: "什么在阻碍你？" },
      { en: "Need help unblocking this.", zh: "需要帮我解锁。" },
      { en: "Share quick wins.", zh: "分享小胜利。" },
      { en: "Feedback both ways.", zh: "互相反馈。" },
      { en: "Career goals chat.", zh: "聊职业目标。" },
      { en: "Promotion roadmap.", zh: "晋升路线图。" },
      { en: "Skip-level next month.", zh: "下月与上级老板谈。" },
      { en: "Action items in the doc.", zh: "行动项写在文档。" },
      { en: "Bi-weekly works better.", zh: "改双周更好。" },
      { en: "Cancelled, again.", zh: "又被取消。" },
      { en: "Best meeting of the week.", zh: "本周最棒的会。" }
    ]},
  { id: "us-perf-review", name: "📊 绩效 Performance Review",
    words: [],
    sentences: [
      { en: "Annual review next week.", zh: "下周年度评估。" },
      { en: "Self-assessment first.", zh: "先自评。" },
      { en: "Peer feedback solicited.", zh: "征求同事反馈。" },
      { en: "Meets expectations or exceeds?", zh: "达到还是超出预期？" },
      { en: "Calibration meeting.", zh: "校准会议。" },
      { en: "Stack ranking is brutal.", zh: "堆栈排名很狠。" },
      { en: "Areas for growth.", zh: "提升方向。" },
      { en: "Strengths and impact.", zh: "优势和影响。" },
      { en: "Goals for next half.", zh: "下半年目标。" },
      { en: "Promo decision pending.", zh: "晋升决定待定。" },
      { en: "Bonus payout in March.", zh: "三月发奖金。" },
      { en: "Refresh on equity.", zh: "新一轮股票发放。" },
      { en: "Growth mindset noted.", zh: "记下成长心态。" },
      { en: "Solid review overall.", zh: "总体不错。" }
    ]},
  { id: "us-promo", name: "📈 升职 Promotion",
    words: [],
    sentences: [
      { en: "Going for senior this cycle.", zh: "本周期争 senior。" },
      { en: "Build the promo packet.", zh: "准备晋升材料。" },
      { en: "Impact across the org.", zh: "跨组织产生影响。" },
      { en: "Sponsor needed in the room.", zh: "评审室里要有推手。" },
      { en: "Calibration was fair.", zh: "校准很公平。" },
      { en: "Promoted, finally!", zh: "终于升了！" },
      { en: "New title, new scope.", zh: "新头衔，新范围。" },
      { en: "Raise plus equity bump.", zh: "加薪加股票。" },
      { en: "Team congratulated me.", zh: "团队都恭喜我。" },
      { en: "Bigger expectations now.", zh: "期望更高了。" },
      { en: "Mentor new hires.", zh: "带新人。" },
      { en: "Lead bigger projects.", zh: "带更大项目。" },
      { en: "Worth the grind.", zh: "辛苦值。" },
      { en: "Next level, here I come.", zh: "下个台阶我来了。" }
    ]},
  { id: "us-raise", name: "💵 加薪 Asking for Raise",
    words: [],
    sentences: [
      { en: "Asking for a raise.", zh: "申请加薪。" },
      { en: "Research market rates.", zh: "查市场行情。" },
      { en: "Document your wins.", zh: "记录你的成就。" },
      { en: "Quantified impact, $2M saved.", zh: "量化影响，省了 200 万。" },
      { en: "Schedule a meeting.", zh: "约个会议。" },
      { en: "Make the ask clearly.", zh: "明确提出诉求。" },
      { en: "Specific number, not a range.", zh: "具体数字，不要区间。" },
      { en: "Counter offer in hand.", zh: "手上有外面 offer。" },
      { en: "Manager will champion you.", zh: "老板会帮你争取。" },
      { en: "HR has the final say.", zh: "HR 拍板。" },
      { en: "Got 8% bump.", zh: "加了 8%。" },
      { en: "Less than I hoped, ok.", zh: "比预期少，可以接受。" },
      { en: "Revisit in six months.", zh: "六个月后再谈。" },
      { en: "Worth the conversation.", zh: "值得开口。" }
    ]},
  { id: "us-layoff", name: "📉 裁员 Layoff",
    words: [],
    sentences: [
      { en: "Layoff news this morning.", zh: "早上有裁员消息。" },
      { en: "Restructuring announcement.", zh: "重组通告。" },
      { en: "Two weeks notice.", zh: "两周通知。" },
      { en: "Severance package details.", zh: "遣散包细节。" },
      { en: "COBRA for health insurance.", zh: "用 COBRA 续保。" },
      { en: "Unemployment benefits, file now.", zh: "马上申请失业金。" },
      { en: "LinkedIn open to work.", zh: "LinkedIn 打开求职状态。" },
      { en: "Network like crazy.", zh: "疯狂社交。" },
      { en: "Friends gave referrals.", zh: "朋友帮内推。" },
      { en: "Recruiters reaching out.", zh: "猎头联系。" },
      { en: "Update the resume tonight.", zh: "今晚更新简历。" },
      { en: "Take time to breathe.", zh: "给自己点缓冲时间。" },
      { en: "Not your fault.", zh: "不是你的错。" },
      { en: "Better days ahead.", zh: "明天会更好。" }
    ]},
  { id: "us-quit", name: "🚪 辞职 Quitting",
    words: [],
    sentences: [
      { en: "Putting in my notice.", zh: "递交辞呈。" },
      { en: "Two weeks is standard.", zh: "两周通知是标准。" },
      { en: "Resignation letter drafted.", zh: "辞职信草拟好。" },
      { en: "Tell manager in person.", zh: "当面告诉老板。" },
      { en: "Counter-offer, no thanks.", zh: "挽留 offer，谢谢不需要。" },
      { en: "Exit interview optional.", zh: "离职面谈可选。" },
      { en: "Transition the projects.", zh: "交接项目。" },
      { en: "Document everything.", zh: "把一切写下来。" },
      { en: "Knowledge transfer sessions.", zh: "知识转移会。" },
      { en: "Last day Friday.", zh: "周五是最后一天。" },
      { en: "Send a farewell email.", zh: "发告别邮件。" },
      { en: "Stay in touch on LinkedIn.", zh: "LinkedIn 上保持联系。" },
      { en: "Boomerang someday, maybe.", zh: "也许某天会回归。" },
      { en: "On to the next chapter.", zh: "翻开新篇章。" }
    ]},
  { id: "us-startup2", name: "🚀 创业 Startup",
    words: [],
    sentences: [
      { en: "Quitting to start my own.", zh: "辞职创业。" },
      { en: "Co-founder match made.", zh: "找到联合创始人。" },
      { en: "Bootstrapped for now.", zh: "目前自筹。" },
      { en: "Seed round, $1.5M.", zh: "种子轮 150 万。" },
      { en: "YC application drafted.", zh: "Y Combinator 申请写好。" },
      { en: "Product-market fit, finally.", zh: "终于找到产品市场契合。" },
      { en: "First ten customers.", zh: "前十个客户。" },
      { en: "Churn is killing us.", zh: "流失率让人头痛。" },
      { en: "Pivot to a new market.", zh: "转向新市场。" },
      { en: "Hiring our first engineer.", zh: "招首位工程师。" },
      { en: "Office in a shared space.", zh: "在共享办公空间。" },
      { en: "Series A in six months.", zh: "六个月内 A 轮。" },
      { en: "Sleep is overrated.", zh: "睡觉太奢侈。" },
      { en: "Worth every long night.", zh: "每个加班夜都值。" }
    ]},
  { id: "us-network2", name: "🤝 社交 Networking",
    words: [],
    sentences: [
      { en: "Networking event tonight.", zh: "今晚社交活动。" },
      { en: "Bring business cards.", zh: "带名片。" },
      { en: "30-second elevator pitch.", zh: "30 秒自我介绍。" },
      { en: "Practice your intro.", zh: "练习开场白。" },
      { en: "Ask, then listen.", zh: "先问再听。" },
      { en: "Follow up the next day.", zh: "第二天跟进。" },
      { en: "Connect on LinkedIn.", zh: "LinkedIn 加好友。" },
      { en: "Coffee chats this month.", zh: "本月喝咖啡聊天。" },
      { en: "Mentor introductions.", zh: "导师介绍。" },
      { en: "Industry conferences are gold.", zh: "行业大会很值。" },
      { en: "Warm intros beat cold emails.", zh: "热介绍胜过冷邮件。" },
      { en: "Give before you take.", zh: "先付出再索取。" },
      { en: "Build relationships, not contacts.", zh: "建关系，不只是联系人。" },
      { en: "Network is net worth.", zh: "人脉就是身价。" }
    ]},
  { id: "us-conference", name: "🎤 大会 Conference",
    words: [],
    sentences: [
      { en: "Conference in Vegas.", zh: "维加斯开大会。" },
      { en: "Registered for the full pass.", zh: "买了通票。" },
      { en: "Keynote at nine.", zh: "九点主旨演讲。" },
      { en: "Breakout sessions packed.", zh: "分论坛爆满。" },
      { en: "Expo hall is huge.", zh: "展区好大。" },
      { en: "Swag bag galore.", zh: "周边一大袋。" },
      { en: "Coffee everywhere.", zh: "到处是咖啡。" },
      { en: "Lunch at the buffet.", zh: "自助午餐。" },
      { en: "Met some great people.", zh: "认识了不少人。" },
      { en: "Sessions on demand later.", zh: "回放之后可看。" },
      { en: "Speaker Q and A.", zh: "讲者问答。" },
      { en: "Hallway track is the best.", zh: "走廊聊最重要。" },
      { en: "Next year, on the panel.", zh: "明年我要上台。" },
      { en: "Conference fatigue, real.", zh: "大会疲劳是真的。" }
    ]},
  { id: "us-podcast", name: "🎙 播客 Podcast",
    words: [],
    sentences: [
      { en: "Started a podcast.", zh: "开了个播客。" },
      { en: "Episode one is live!", zh: "第一集上线了！" },
      { en: "Recording setup, USB mic.", zh: "用 USB 麦录音。" },
      { en: "Edit in Descript.", zh: "用 Descript 剪辑。" },
      { en: "Publish on Spotify and Apple.", zh: "发布到 Spotify 和苹果播客。" },
      { en: "Subscribe and review.", zh: "请订阅留评。" },
      { en: "Weekly drop, Mondays.", zh: "每周一更新。" },
      { en: "Guests next month.", zh: "下个月有嘉宾。" },
      { en: "Listener questions episode.", zh: "听众问答专题。" },
      { en: "Sponsor segment, brief.", zh: "赞助插播简短。" },
      { en: "Patreon for bonus content.", zh: "Patreon 看额外内容。" },
      { en: "Best podcast app, Overcast.", zh: "最好的播客 App，Overcast。" },
      { en: "Listen at 1.5x speed.", zh: "1.5 倍速听。" },
      { en: "Hit subscribe!", zh: "点订阅！" }
    ]},
  { id: "us-newsletter2", name: "📬 通讯 Newsletter",
    words: [],
    sentences: [
      { en: "Subscribed to a few newsletters.", zh: "订了几个通讯。" },
      { en: "Substack is the platform.", zh: "用 Substack 发布。" },
      { en: "Weekly digest format.", zh: "周报形式。" },
      { en: "Open rates above 50%.", zh: "打开率超 50%。" },
      { en: "Free with paid tier.", zh: "免费加付费层。" },
      { en: "Monthly subscribers grow.", zh: "月订阅持续增长。" },
      { en: "Write in your own voice.", zh: "用自己的声音写。" },
      { en: "Niche down for traction.", zh: "做小众更易增长。" },
      { en: "Cross-promote with friends.", zh: "和朋友互推。" },
      { en: "Reader survey time.", zh: "读者问卷时间。" },
      { en: "Spam folder, why?", zh: "怎么进了垃圾箱？" },
      { en: "Whitelist the sender.", zh: "加白名单。" },
      { en: "Looking forward to Sunday.", zh: "等周日的通讯。" },
      { en: "Inbox favorite.", zh: "邮箱里的最爱。" }
    ]},
  { id: "us-tiktok", name: "📱 抖音 TikTok",
    words: [],
    sentences: [
      { en: "Saw this TikTok last night.", zh: "昨晚刷到的 TikTok。" },
      { en: "Send it to me.", zh: "发给我。" },
      { en: "FYP is reading me.", zh: "FYP 太懂我了。" },
      { en: "Trending sound is everywhere.", zh: "热门音效到处都是。" },
      { en: "Dance challenge again.", zh: "又一个跳舞挑战。" },
      { en: "Stitch the original.", zh: "拼接原视频。" },
      { en: "Duet with the creator.", zh: "和作者合拍。" },
      { en: "Algorithm is wild.", zh: "算法很离谱。" },
      { en: "Save to your collection.", zh: "保存到收藏。" },
      { en: "Comments are gold.", zh: "评论笑死。" },
      { en: "Hours flew by.", zh: "几小时就过去了。" },
      { en: "Delete after midnight.", zh: "半夜删了它。" },
      { en: "Take a break, please.", zh: "拜托休息一下。" },
      { en: "Touch grass.", zh: "出门走走。" }
    ]},
  { id: "us-instagram", name: "📷 Instagram",
    words: [],
    sentences: [
      { en: "Post a story later.", zh: "等会发个故事。" },
      { en: "Tag your friends.", zh: "@ 你朋友。" },
      { en: "Carousel of beach pics.", zh: "沙滩照片集。" },
      { en: "Reels are taking over.", zh: "Reels 占领一切。" },
      { en: "Caption is everything.", zh: "文案就是一切。" },
      { en: "Geo-tag the location.", zh: "标地点。" },
      { en: "Close friends list only.", zh: "只发挚友。" },
      { en: "Hide likes count.", zh: "隐藏点赞数。" },
      { en: "Highlight the trip.", zh: "出游集合做精选。" },
      { en: "DMs are full again.", zh: "私信又满了。" },
      { en: "Influencer collab maybe.", zh: "也许接达人合作。" },
      { en: "Aesthetic feed goals.", zh: "审美统一的目标。" },
      { en: "Old account, who dis?", zh: "老号，谁啊？" },
      { en: "Insta vs. reality.", zh: "Insta 滤镜与现实。" }
    ]},
  { id: "us-twitter", name: "🐦 推特 Twitter/X",
    words: [],
    sentences: [
      { en: "Saw a tweet about it.", zh: "推上看到了。" },
      { en: "Retweet for visibility.", zh: "转推求扩散。" },
      { en: "Quote-tweet with thoughts.", zh: "带评论引用。" },
      { en: "Thread on a hot take.", zh: "发长串解读。" },
      { en: "Ratio in the comments.", zh: "评论被反杀。" },
      { en: "Trending on the timeline.", zh: "时间线刷到热议。" },
      { en: "Verified check, meh.", zh: "蓝标，呵呵。" },
      { en: "Twitter is now X.", zh: "Twitter 改叫 X。" },
      { en: "Algorithm got worse.", zh: "算法越来越烂。" },
      { en: "Blocked and moved on.", zh: "拉黑继续生活。" },
      { en: "Mute keywords help.", zh: "屏蔽关键词有用。" },
      { en: "List of niche follows.", zh: "整理小众关注列表。" },
      { en: "Spaces audio chat.", zh: "Spaces 语音聊天。" },
      { en: "Touch grass, friend.", zh: "出门散散心。" }
    ]},
  { id: "us-streaming-tv", name: "📺 流媒体 Streaming",
    words: [],
    sentences: [
      { en: "Cancelled cable years ago.", zh: "好几年前停了有线。" },
      { en: "Netflix, Hulu, Disney+.", zh: "Netflix、Hulu、迪士尼+。" },
      { en: "HBO Max is now just Max.", zh: "HBO Max 改名 Max。" },
      { en: "Password sharing crackdown.", zh: "封堵密码共享。" },
      { en: "Ads tier is cheaper.", zh: "广告版便宜。" },
      { en: "Auto-play the next episode.", zh: "自动播下集。" },
      { en: "Binge-watched the whole season.", zh: "一口气追完一季。" },
      { en: "Cliffhanger finale!", zh: "悬念结局！" },
      { en: "Trailer dropped today.", zh: "今天发预告。" },
      { en: "Letterboxd review.", zh: "Letterboxd 上写影评。" },
      { en: "Documentary recommendation.", zh: "纪录片推荐。" },
      { en: "What are we watching tonight?", zh: "今晚看啥？" },
      { en: "Pick something already.", zh: "快选一个。" },
      { en: "Decision fatigue is real.", zh: "选择疲劳是真的。" }
    ]},
  { id: "us-gaming2", name: "🎮 游戏 Gaming",
    words: [],
    sentences: [
      { en: "Online tonight?", zh: "今晚联机？" },
      { en: "Squad up in Warzone.", zh: "Warzone 组队。" },
      { en: "Discord in the bio.", zh: "Discord 在简介里。" },
      { en: "Lag is brutal tonight.", zh: "今晚网卡爆了。" },
      { en: "Skill-based matchmaking.", zh: "技术匹配。" },
      { en: "Battle pass season two.", zh: "通行证第二赛季。" },
      { en: "Skin from the store.", zh: "商城买皮肤。" },
      { en: "Tilted, taking a break.", zh: "情绪上头，先歇会。" },
      { en: "Speed run the campaign.", zh: "速通战役模式。" },
      { en: "Co-op with my brother.", zh: "和我弟联机。" },
      { en: "Streamed for the first time.", zh: "第一次直播。" },
      { en: "Subs and followers slow.", zh: "订阅粉丝增长慢。" },
      { en: "GGs everyone.", zh: "辛苦各位。" },
      { en: "One more game.", zh: "最后一局。" }
    ]},
  { id: "us-meme", name: "😂 梗图 Memes",
    words: [],
    sentences: [
      { en: "This meme is sending me.", zh: "这梗笑死我了。" },
      { en: "Save it to share later.", zh: "存下来等会发。" },
      { en: "Group chat is meme central.", zh: "群里全是梗。" },
      { en: "Niche meme, you wouldn't get it.", zh: "小众梗你看不懂。" },
      { en: "Reaction GIF, perfect.", zh: "反应 GIF 太对了。" },
      { en: "Slack emoji has it.", zh: "Slack 有这个表情。" },
      { en: "Custom emoji for the team.", zh: "团队自定义表情。" },
      { en: "Iykyk.", zh: "懂的都懂。" },
      { en: "It's an inside joke.", zh: "这是内部梗。" },
      { en: "Mainstream now, less funny.", zh: "出圈了就不好笑了。" },
      { en: "Remix it for your niche.", zh: "改成你圈的版本。" },
      { en: "Wholesome memes only.", zh: "只看正能量梗。" },
      { en: "Tag your friends.", zh: "@ 朋友们。" },
      { en: "Daily dose of dopamine.", zh: "每日多巴胺。" }
    ]},
  { id: "us-texting2", name: "💬 短信 Texting",
    words: [],
    sentences: [
      { en: "Text me when you land.", zh: "落地短信我。" },
      { en: "On my way, ten min.", zh: "在路上，十分钟。" },
      { en: "Running late, sorry.", zh: "要晚了，抱歉。" },
      { en: "Cool, see you there.", zh: "好，到时见。" },
      { en: "Sounds good.", zh: "听起来不错。" },
      { en: "Lol that's wild.", zh: "哈哈太离谱。" },
      { en: "Read at 2 a.m., rude.", zh: "凌晨两点已读，没回。" },
      { en: "Left on read.", zh: "已读不回。" },
      { en: "Typing bubble forever.", zh: "正在输入泡泡半天。" },
      { en: "Group chat is muted.", zh: "群聊已静音。" },
      { en: "Replied with a thumbs up.", zh: "点赞了。" },
      { en: "Reaction emoji, classic.", zh: "表情回应，经典。" },
      { en: "Wrong chat, oops.", zh: "发错了，糟。" },
      { en: "Delete for everyone.", zh: "撤回。" }
    ]},
  { id: "us-zoom2", name: "💻 视频会议 Zoom",
    words: [],
    sentences: [
      { en: "Joining the Zoom now.", zh: "现在进 Zoom。" },
      { en: "Camera off, sorry.", zh: "不开摄像头，抱歉。" },
      { en: "You're on mute.", zh: "你麦克风没开。" },
      { en: "Echo, can someone mute?", zh: "有回声，谁能静音？" },
      { en: "Share your screen.", zh: "分享屏幕。" },
      { en: "Can you see my deck?", zh: "看到我的幻灯吗？" },
      { en: "Spotlight the speaker.", zh: "聚焦演讲者。" },
      { en: "Breakout rooms time.", zh: "分组讨论时间。" },
      { en: "Drop the link in chat.", zh: "聊天里发链接。" },
      { en: "Recording in progress.", zh: "正在录制。" },
      { en: "Bad internet, freezing.", zh: "网卡，画面卡了。" },
      { en: "Got 30 seconds left.", zh: "还剩 30 秒。" },
      { en: "Thanks all, sending notes.", zh: "感谢各位，会发笔记。" },
      { en: "Talk soon.", zh: "回头聊。" }
    ]},
  { id: "us-slack", name: "💼 Slack",
    words: [],
    sentences: [
      { en: "DM me on Slack.", zh: "Slack 私我。" },
      { en: "Reply in thread, please.", zh: "请在帖子里回复。" },
      { en: "Channel is for the team.", zh: "频道给团队用。" },
      { en: "Add a reaction emoji.", zh: "加个表情。" },
      { en: "Notifications are off.", zh: "通知关了。" },
      { en: "Snooze till tomorrow.", zh: "勿扰到明天。" },
      { en: "Tag with @here for some.", zh: "用 @here 部分提醒。" },
      { en: "@channel for everyone.", zh: "用 @channel 全员。" },
      { en: "Don't @ me late.", zh: "晚上别 @ 我。" },
      { en: "Saved for later.", zh: "稍后查看。" },
      { en: "Custom status, in meetings.", zh: "自定义状态：开会中。" },
      { en: "Huddle for a quick chat.", zh: "Huddle 快速沟通。" },
      { en: "Workflow for kudos.", zh: "用工作流送表扬。" },
      { en: "Inbox zero impossible.", zh: "收件箱归零不可能。" }
    ]},
  { id: "us-standup2", name: "🧍 站会 Standup",
    words: [],
    sentences: [
      { en: "Daily standup at nine.", zh: "九点每日站会。" },
      { en: "Yesterday, today, blockers.", zh: "昨天、今天、阻碍。" },
      { en: "Keep it under fifteen.", zh: "控制在 15 分钟。" },
      { en: "Take it offline.", zh: "线下私聊。" },
      { en: "Pairing with Sam today.", zh: "今天和 Sam 结对。" },
      { en: "Code review pending.", zh: "代码评审待办。" },
      { en: "Tickets in flight.", zh: "进行中的任务。" },
      { en: "Sprint ends Friday.", zh: "周五冲刺结束。" },
      { en: "Demo on Monday.", zh: "周一演示。" },
      { en: "Retro after demo.", zh: "演示后做复盘。" },
      { en: "Burndown chart looks good.", zh: "燃尽图不错。" },
      { en: "Async update in Slack.", zh: "Slack 异步同步。" },
      { en: "Skip standup tomorrow.", zh: "明天跳过站会。" },
      { en: "See you in the trenches.", zh: "战壕里见。" }
    ]}
);

/* ============================================================
   数学补全：覆盖人教版各学期常考章节
   ============================================================ */
DATA.math["1上"].push(
  { id: "m1u7", name: "钟表的初步认识", range: [1, 12], ops: ["+", "-"],
    apps: [
      { text: "现在是 3 时，再过 2 小时是几时？", expr: "3+2", answer: 5, unit: "时" },
      { text: "现在 9 时，1 小时前是几时？", expr: "9-1", answer: 8, unit: "时" },
      { text: "钟面上有 12 个数字，从 1 数到 12 共多少个？", expr: "12", answer: 12, unit: "个" },
      { text: "上午 10 时上课，下午 4 时放学。一共经过多少小时？", expr: "12-10+4", answer: 6, unit: "小时" },
      { text: "时针走 1 大格是几小时？", expr: "1", answer: 1, unit: "小时" },
      { text: "现在 7 时，3 小时后是几时？", expr: "7+3", answer: 10, unit: "时" }
    ]},
  { id: "m1u8", name: "10的认识与组成", range: [1, 10], ops: ["+", "-"],
    apps: [
      { text: "10 可以分成 3 和几？", expr: "10-3", answer: 7, unit: "" },
      { text: "10 可以分成 6 和几？", expr: "10-6", answer: 4, unit: "" },
      { text: "9 和 1 合起来是几？", expr: "9+1", answer: 10, unit: "" },
      { text: "5 和 5 合起来是几？", expr: "5+5", answer: 10, unit: "" },
      { text: "10 比 7 多几？", expr: "10-7", answer: 3, unit: "" },
      { text: "10 比 4 多几？", expr: "10-4", answer: 6, unit: "" }
    ]}
);

DATA.math["1下"].push(
  { id: "m1d8", name: "位置（上下前后左右）", range: [1, 20], ops: ["+", "-"],
    apps: [
      { text: "小明前面有 3 人，后面有 5 人，这一队共多少人？", expr: "3+1+5", answer: 9, unit: "人" },
      { text: "从左数第 4 个是小红，从右数第 3 个也是小红，这一排有几人？", expr: "4+3-1", answer: 6, unit: "人" },
      { text: "课桌上面放 6 本书，下面放 4 本书，一共多少本？", expr: "6+4", answer: 10, unit: "本" },
      { text: "队伍里小华排在第 7 个，前面有几人？", expr: "7-1", answer: 6, unit: "人" },
      { text: "书架第二层有 12 本书，又放上 5 本，现在多少本？", expr: "12+5", answer: 17, unit: "本" },
      { text: "桌子右边放 8 个杯子，左边放 6 个杯子，一共多少？", expr: "8+6", answer: 14, unit: "个" }
    ]},
  { id: "m1d9", name: "图形的拼组", range: [1, 30], ops: ["+", "-"],
    apps: [
      { text: "用 2 个三角形可以拼成 1 个正方形，4 个三角形能拼成几个正方形？", expr: "4÷2", answer: 2, unit: "个" },
      { text: "一个长方形纸对折一次能折出几条折痕？", expr: "1", answer: 1, unit: "条" },
      { text: "用 4 根同样长的小棒能拼成什么？答 1 个正方形，写答案 1。", expr: "1", answer: 1, unit: "个" },
      { text: "把 1 个正方形剪成 2 个相同的长方形，得到几个长方形？", expr: "2", answer: 2, unit: "个" },
      { text: "用 6 个小方块能拼成一个长方形，每行 3 个，需要几行？", expr: "6÷3", answer: 2, unit: "行" },
      { text: "5 个三角形和 3 个正方形一共多少个图形？", expr: "5+3", answer: 8, unit: "个" }
    ]}
);

DATA.math["2上"].push(
  { id: "m2u9", name: "认识除法（量）", range: [1, 9], ops: ["÷"], divFromTable: true,
    apps: [
      { text: "一辆车坐 4 人，16 人需要几辆？", expr: "16÷4", answer: 4, unit: "辆" },
      { text: "21 个苹果分给 3 个人，每人几个？", expr: "21÷3", answer: 7, unit: "个" },
      { text: "把 24 朵花平均分成 6 束，每束几朵？", expr: "24÷6", answer: 4, unit: "朵" },
      { text: "28 颗珠子，每 7 颗串一串，能串几串？", expr: "28÷7", answer: 4, unit: "串" },
      { text: "35 个气球分给 5 个班，每班几个？", expr: "35÷5", answer: 7, unit: "个" },
      { text: "45 块糖平均分给 9 人，每人几块？", expr: "45÷9", answer: 5, unit: "块" }
    ]},
  { id: "m2u10", name: "数学广角—搭配", range: [1, 30], ops: ["×"],
    apps: [
      { text: "上衣 2 件、裤子 3 条，有几种搭配？", expr: "2×3", answer: 6, unit: "种" },
      { text: "三种颜色任选 2 种排两位，有几种？", expr: "3×2", answer: 6, unit: "种" },
      { text: "用 1、2、3 三张数字卡排两位数，共几个？", expr: "3×2", answer: 6, unit: "个" },
      { text: "饮料 4 种点心 3 种各选一种，共几种？", expr: "4×3", answer: 12, unit: "种" },
      { text: "从 5 名同学中选 1 人当组长，几种选法？", expr: "5", answer: 5, unit: "种" },
      { text: "帽子 2 顶围巾 4 条，多少种搭配？", expr: "2×4", answer: 8, unit: "种" }
    ]}
);

DATA.math["2下"].push(
  { id: "m2d8", name: "图形的运动一", range: [1, 30], ops: ["+", "-"],
    apps: [
      { text: "把一张长方形纸对折再对折，能得到几等份？", expr: "2×2", answer: 4, unit: "等份" },
      { text: "正方形绕中心旋转 1 圈是几度？", expr: "360", answer: 360, unit: "度" },
      { text: "下列哪种运动是平移？写答案 1。", expr: "1", answer: 1, unit: "" },
      { text: "时针从 3 时走到 6 时，转了几个直角？", expr: "1", answer: 1, unit: "个" },
      { text: "对称的字母 A、B、C 中有几个？提示 A B C 都对称，答 3。", expr: "3", answer: 3, unit: "个" },
      { text: "把数字 1 翻转 180°，还能像原来吗？答 1 表示能。", expr: "1", answer: 1, unit: "" }
    ]},
  { id: "m2d9", name: "时间与方向", range: [1, 60], ops: ["+", "-"],
    apps: [
      { text: "上午 7:30 出发，9:15 到达，用了多少分钟？", expr: "60+45", answer: 105, unit: "分钟" },
      { text: "钟面上 3:00，时针和 12 之间是几个大格？", expr: "3", answer: 3, unit: "个" },
      { text: "现在 4 时 40 分，再过 20 分是几时？", expr: "5", answer: 5, unit: "时" },
      { text: "面向北方时，右手方向是？答案写 1 表示东。", expr: "1", answer: 1, unit: "" },
      { text: "从东走到西要转几个直角？", expr: "2", answer: 2, unit: "个" },
      { text: "1 小时等于多少分钟？", expr: "60", answer: 60, unit: "分钟" }
    ]}
);

DATA.math["3上"].push(
  { id: "m3u6", name: "测量：毫米分米千米", range: [1, 1000], ops: ["+", "-"],
    apps: [
      { text: "1 厘米 = 多少毫米？", expr: "10", answer: 10, unit: "毫米" },
      { text: "1 米 = 多少分米？", expr: "10", answer: 10, unit: "分米" },
      { text: "1 千米 = 多少米？", expr: "1000", answer: 1000, unit: "米" },
      { text: "一根绳子 35 分米，又接上 28 分米，现在多少分米？", expr: "35+28", answer: 63, unit: "分米" },
      { text: "课桌长 8 分米，合多少厘米？", expr: "8×10", answer: 80, unit: "厘米" },
      { text: "从家到学校 3 千米，合多少米？", expr: "3×1000", answer: 3000, unit: "米" }
    ]},
  { id: "m3u7", name: "万以内有余数的除法", range: [1, 100], ops: ["÷"], divisorRange: [2, 9],
    apps: [
      { text: "27 块糖每人分 4 块，能分几人，还剩几块？写答案：能分人数 6。", expr: "27÷4", answer: 6, unit: "人" },
      { text: "53 朵花每瓶插 8 朵，能插几瓶？", expr: "53÷8", answer: 6, unit: "瓶" },
      { text: "65 个面包每盒装 9 个，能装几盒？", expr: "65÷9", answer: 7, unit: "盒" },
      { text: "余数最大可以比除数小多少？", expr: "1", answer: 1, unit: "" },
      { text: "47÷6 的余数是多少？", expr: "47-42", answer: 5, unit: "" },
      { text: "85÷7 商是多少？", expr: "12", answer: 12, unit: "" }
    ]},
  { id: "m3u8", name: "周长", range: [1, 100], ops: ["×", "+"],
    apps: [
      { text: "长方形长 8 宽 5，周长多少？", expr: "(8+5)×2", answer: 26, unit: "" },
      { text: "正方形边长 6，周长多少？", expr: "6×4", answer: 24, unit: "" },
      { text: "三角形三边 5、6、7，周长多少？", expr: "5+6+7", answer: 18, unit: "" },
      { text: "长方形周长 30，宽 6，长是多少？", expr: "30÷2-6", answer: 9, unit: "" },
      { text: "正方形周长 36，边长多少？", expr: "36÷4", answer: 9, unit: "" },
      { text: "长方形长 12 宽 4，周长多少？", expr: "(12+4)×2", answer: 32, unit: "" }
    ]}
);

DATA.math["3下"].push(
  { id: "m3d6", name: "复式统计表", range: [1, 1000], ops: ["+", "-"],
    apps: [
      { text: "一班 26 人二班 28 人，两班共多少人？", expr: "26+28", answer: 54, unit: "人" },
      { text: "三班比四班多 5 人，四班 30 人，三班几人？", expr: "30+5", answer: 35, unit: "人" },
      { text: "周一卖 120 杯周二卖 96 杯，两天共多少杯？", expr: "120+96", answer: 216, unit: "杯" },
      { text: "上半年生产 240 件下半年 380 件，全年多少件？", expr: "240+380", answer: 620, unit: "件" },
      { text: "甲队 65 分乙队 72 分，乙比甲多几分？", expr: "72-65", answer: 7, unit: "分" },
      { text: "投票中 A 项 95 票 B 项 78 票，相差多少？", expr: "95-78", answer: 17, unit: "票" }
    ]},
  { id: "m3d7", name: "解决问题（连乘连除）", range: [10, 999], ops: ["×", "÷"], secondRange: [2, 9],
    apps: [
      { text: "每盒 8 块每箱 6 盒，4 箱共多少块？", expr: "8×6×4", answer: 192, unit: "块" },
      { text: "学校 6 个年级，每年级 4 个班，每班 45 人，共多少人？", expr: "6×4×45", answer: 1080, unit: "人" },
      { text: "1296 个苹果平均分给 6 箱再平均给 4 人，每人几个？", expr: "1296÷6÷4", answer: 54, unit: "个" },
      { text: "5 辆车每辆装 12 箱每箱 24 件，共多少件？", expr: "5×12×24", answer: 1440, unit: "件" },
      { text: "720 米跑道每圈 240 米，跑几圈？", expr: "720÷240", answer: 3, unit: "圈" },
      { text: "三盒糖每盒 36 颗，平均分给 4 人，每人多少？", expr: "36×3÷4", answer: 27, unit: "颗" }
    ]}
);

DATA.math["4上"].push(
  { id: "m4u8", name: "亿以内数的认识", range: [10, 99], ops: ["+", "-"],
    apps: [
      { text: "一万五千读作（）。答案写 15000。", expr: "15000", answer: 15000, unit: "" },
      { text: "98765 中 9 在什么位？答案 1 表示万位。", expr: "1", answer: 1, unit: "" },
      { text: "30 万 + 50 万 =？", expr: "300000+500000", answer: 800000, unit: "" },
      { text: "100 万比 80 万多多少？", expr: "1000000-800000", answer: 200000, unit: "" },
      { text: "把 234567 改写成万位四舍五入，约多少万？", expr: "23", answer: 23, unit: "万" },
      { text: "一千万里有多少个百万？", expr: "10000000÷1000000", answer: 10, unit: "个" }
    ]},
  { id: "m4u9", name: "平行四边形和梯形", range: [1, 100], ops: ["+", "×"],
    apps: [
      { text: "平行四边形对边平行，对边长度有什么关系？写 1 表示相等。", expr: "1", answer: 1, unit: "" },
      { text: "梯形的上下底分别为 6 和 10，高 4，面积多少？", expr: "(6+10)×4÷2", answer: 32, unit: "" },
      { text: "平行四边形底 12 高 5，面积多少？", expr: "12×5", answer: 60, unit: "" },
      { text: "梯形上底 5 下底 9 高 6，面积多少？", expr: "(5+9)×6÷2", answer: 42, unit: "" },
      { text: "下列图形中哪个一定是轴对称？正方形=1。", expr: "1", answer: 1, unit: "" },
      { text: "平行四边形可以分成 2 个完全一样的三角形吗？写 1 表示可以。", expr: "1", answer: 1, unit: "" }
    ]}
);

DATA.math["4下"].push(
  { id: "m4d8", name: "观察物体（二）", range: [1, 30], ops: ["+", "-"],
    apps: [
      { text: "用 4 个小方块搭成一个图形，从正面看到 3 个，从上面看到 2 个，下面看到 2 个。答案写 4。", expr: "4", answer: 4, unit: "个" },
      { text: "从前面看到 3 行 2 列，至少需要几个小方块？", expr: "6", answer: 6, unit: "个" },
      { text: "搭一个长方体最少需要几个小方块？", expr: "1", answer: 1, unit: "个" },
      { text: "看一个正方体的不同面，最多能看到几个面？", expr: "3", answer: 3, unit: "个" },
      { text: "从前面看到 3 个方块，从侧面看到 3 个方块，至少多少个方块？", expr: "3", answer: 3, unit: "个" },
      { text: "搭 8 个相同的小正方体，能拼成几个相同的小长方体？写答案 2。", expr: "2", answer: 2, unit: "个" }
    ]},
  { id: "m4d9", name: "鸡兔同笼", range: [1, 100], ops: ["+", "-", "×", "÷"], mixed: true,
    apps: [
      { text: "鸡兔同笼共 8 个头 26 只脚，兔几只？", expr: "(26-8×2)÷2", answer: 5, unit: "只" },
      { text: "鸡兔共 35 只 94 只脚，鸡多少只？", expr: "(35×4-94)÷2", answer: 23, unit: "只" },
      { text: "若全是鸡共 16 头，鸡多少只？", expr: "16", answer: 16, unit: "只" },
      { text: "笼中 12 头 32 脚，鸡几只？", expr: "(48-32)÷2", answer: 8, unit: "只" },
      { text: "20 头 56 脚，兔多少只？", expr: "(56-40)÷2", answer: 8, unit: "只" },
      { text: "鸡比兔多 4 只，共 60 脚，鸡几只？", expr: "(60-4×4)÷6+4", answer: 11, unit: "只" }
    ]}
);

DATA.math["5上"].push(
  { id: "m5u8", name: "用字母表示数", range: [1, 100], ops: ["+", "-", "×"], equation: true,
    apps: [
      { text: "用 a 表示苹果数 b 表示梨数，共多少个？写表达式答案 a+b 长度 3 字符无法计算，请填 0 占位。", expr: "0", answer: 0, unit: "" },
      { text: "解方程 a + 12 = 30，a =？", expr: "30-12", answer: 18, unit: "" },
      { text: "5x = 60，x =？", expr: "60÷5", answer: 12, unit: "" },
      { text: "x - 7 = 25，x =？", expr: "25+7", answer: 32, unit: "" },
      { text: "2x + 5 = 17，x =？", expr: "(17-5)÷2", answer: 6, unit: "" },
      { text: "x ÷ 4 = 8，x =？", expr: "8×4", answer: 32, unit: "" }
    ]},
  { id: "m5u9", name: "组合图形面积", range: [1, 50], ops: ["×", "+", "-"],
    apps: [
      { text: "L 形地：6×4 加 3×2，面积多少？", expr: "6×4+3×2", answer: 30, unit: "平方米" },
      { text: "梯形上底 4 下底 8 高 6，面积多少？", expr: "(4+8)×6÷2", answer: 36, unit: "" },
      { text: "三角形底 10 高 6，面积多少？", expr: "10×6÷2", answer: 30, unit: "" },
      { text: "长方形 8×5 去掉 3×2 后面积多少？", expr: "8×5-3×2", answer: 34, unit: "" },
      { text: "平行四边形底 9 高 4，面积多少？", expr: "9×4", answer: 36, unit: "" },
      { text: "正方形 7×7 加三角形 7×4÷2，共多少？", expr: "49+14", answer: 63, unit: "" }
    ]}
);

DATA.math["5下"].push(
  { id: "m5d7", name: "分数乘法", range: [1, 20], ops: ["×"], fraction: true,
    apps: [
      { text: "一袋米 12 千克，吃了 1/4，吃了多少千克？", expr: "12×1/4", answer: 3, unit: "千克" },
      { text: "一根绳长 15 米，剪去 2/5，剪去多少米？", expr: "15×2/5", answer: 6, unit: "米" },
      { text: "果园 20 棵桃树占 1/2，桃树几棵？", expr: "20×1/2", answer: 10, unit: "棵" },
      { text: "妈妈买 24 个鸡蛋，吃了 3/8，吃了多少？", expr: "24×3/8", answer: 9, unit: "个" },
      { text: "一袋糖 30 颗，分掉 4/5，分掉多少？", expr: "30×4/5", answer: 24, unit: "颗" },
      { text: "图书馆 60 本书科技书占 3/5，科技书多少本？", expr: "60×3/5", answer: 36, unit: "本" }
    ]},
  { id: "m5d8", name: "图形的运动三：旋转", range: [1, 360], ops: ["+", "-"],
    apps: [
      { text: "时针绕中心旋转 1 大格是多少度？", expr: "30", answer: 30, unit: "度" },
      { text: "正方形旋转 90° 后图形是否重合？写 1 表示重合。", expr: "1", answer: 1, unit: "" },
      { text: "顺时针 180°+ 顺时针 90° 共转多少度？", expr: "180+90", answer: 270, unit: "度" },
      { text: "正方形旋转 360° 回到原位，共转多少度？", expr: "360", answer: 360, unit: "度" },
      { text: "钟面从 12 转到 3 时针走了多少度？", expr: "90", answer: 90, unit: "度" },
      { text: "时针从 6 走到 9，转了多少度？", expr: "90", answer: 90, unit: "度" }
    ]}
);

DATA.math["6上"].push(
  { id: "m6u5", name: "分数除法", range: [1, 20], ops: ["÷"], fraction: true,
    apps: [
      { text: "把 3/4 米的绳子平均分成 3 段，每段多少米？", expr: "3/4÷3", answer: "1/4", unit: "米" },
      { text: "5/6 千克糖分给 5 个小朋友，每人几千克？", expr: "5/6÷5", answer: "1/6", unit: "千克" },
      { text: "一条路修了 3/5，剩下 6 千米，全长几千米？", expr: "6÷(1-3/5)", answer: 15, unit: "千米" },
      { text: "一袋大米 2/3 吃了 1/3，吃了几袋？", expr: "1/3÷(2/3)", answer: "1/2", unit: "袋" },
      { text: "一种饮料 3/4 升装 6 瓶，每瓶几升？", expr: "3/4÷6", answer: "1/8", unit: "升" },
      { text: "7/8 米平均分 7 段，每段几米？", expr: "7/8÷7", answer: "1/8", unit: "米" }
    ]},
  { id: "m6u6", name: "扇形统计图", range: [1, 100], ops: ["×", "÷"], percent: true,
    apps: [
      { text: "全班 40 人喜欢足球占 25%，几人？", expr: "40×0.25", answer: 10, unit: "人" },
      { text: "扇形 30% 对应多少度？", expr: "360×0.3", answer: 108, unit: "度" },
      { text: "240 元支出中食品占 40%，食品多少元？", expr: "240×0.4", answer: 96, unit: "元" },
      { text: "一项调查 200 人，喜欢绘画 18%，多少人？", expr: "200×0.18", answer: 36, unit: "人" },
      { text: "总数 500 件次品占 4%，次品几件？", expr: "500×0.04", answer: 20, unit: "件" },
      { text: "扇形 45° 对应百分之多少？", expr: "45÷360", answer: 0.125, unit: "" }
    ]},
  { id: "m6u7", name: "数学广角—数与形", range: [1, 100], ops: ["+", "×"],
    apps: [
      { text: "1+3+5+…+19 = ?", expr: "10×10", answer: 100, unit: "" },
      { text: "前 n 个奇数和是 n²，前 6 个奇数和是？", expr: "6×6", answer: 36, unit: "" },
      { text: "1+2+3+…+10 = ?", expr: "55", answer: 55, unit: "" },
      { text: "5×5 的正方形分成多少个小方块？", expr: "5×5", answer: 25, unit: "" },
      { text: "三角形数：第 4 个是？", expr: "1+2+3+4", answer: 10, unit: "" },
      { text: "前 n 个自然数和公式 n(n+1)/2，n=8 是？", expr: "8×9÷2", answer: 36, unit: "" }
    ]}
);

DATA.math["6下"].push(
  { id: "m6d4", name: "负数", range: [1, 100], ops: ["+", "-"],
    apps: [
      { text: "气温由 -3℃ 上升 7℃，是多少？", expr: "-3+7", answer: 4, unit: "℃" },
      { text: "比 0 低 5℃ 记作？答案 -5", expr: "-5", answer: -5, unit: "℃" },
      { text: "存入 200 元记作 +200，那么取出 80 元记作？", expr: "-80", answer: -80, unit: "" },
      { text: "海拔 -150 米比 -200 米高多少？", expr: "-150-(-200)", answer: 50, unit: "米" },
      { text: "气温从 -8℃ 升到 -2℃ 升了多少度？", expr: "-2-(-8)", answer: 6, unit: "℃" },
      { text: "数轴上 -3 到 5 距离多少？", expr: "5-(-3)", answer: 8, unit: "" }
    ]},
  { id: "m6d5", name: "解决问题综合：工程问题", range: [1, 60], ops: ["+", "-", "×", "÷"], mixed: true,
    apps: [
      { text: "甲队 12 天完成乙队 18 天完成，两队合作几天完成？", expr: "1÷(1/12+1/18)", answer: 7.2, unit: "天" },
      { text: "甲单独 8 天完成，已合作 3 天剩多少？", expr: "1-3×(1/8+1/12)", answer: "3/8", unit: "" },
      { text: "甲乙合做 6 天完成，单独甲 10 天完成，乙单独多少天？", expr: "1÷(1/6-1/10)", answer: 15, unit: "天" },
      { text: "一项工程甲做 5 天乙做 4 天可完成 13/20，求乙一天工作量。", expr: "(13/20-5×(1/10))÷4", answer: "5/80", unit: "" },
      { text: "甲乙合做 8 天可完成 4/5，再一起几天完成？", expr: "(1-4/5)÷(4/5÷8)", answer: 2, unit: "天" },
      { text: "一段路甲修 24 天乙 36 天，合修几天？", expr: "1÷(1/24+1/36)", answer: 14.4, unit: "天" }
    ]},
  { id: "m6d6", name: "总复习：四则混合", range: [10, 99], ops: ["+", "-", "×", "÷"], secondRange: [2, 12], mixed: true,
    apps: [
      { text: "(120+80)÷4×3 = ?", expr: "(120+80)÷4×3", answer: 150, unit: "" },
      { text: "560÷(40-12)×5 = ?", expr: "560÷(40-12)×5", answer: 100, unit: "" },
      { text: "3.6×0.5+2.4 = ?", expr: "3.6×0.5+2.4", answer: 4.2, unit: "" },
      { text: "(45+15)×0.2-3 = ?", expr: "(45+15)×0.2-3", answer: 9, unit: "" },
      { text: "1/2+1/3-1/6 = ?", expr: "1/2+1/3-1/6", answer: "2/3", unit: "" },
      { text: "8.4÷(2.1+1.5) = ?", expr: "8.4÷(2.1+1.5)", answer: 2.33, unit: "" }
    ]}
);

/* ============================================================
   数学补全：对照人教版目录补齐缺失单元
   ============================================================ */
DATA.math["3上"].push(
  { id: "m3u9", name: "数学广角—集合", range: [1, 50], ops: ["+", "-"],
    apps: [
      { text: "三（1）班 15 人参加跳绳，12 人参加跑步，5 人两项都参加。一共多少人？", expr: "15+12-5", answer: 22, unit: "人" },
      { text: "喜欢苹果 8 人，喜欢梨 6 人，两种都喜欢 3 人。喜欢水果的共多少人？", expr: "8+6-3", answer: 11, unit: "人" },
      { text: "20 人订报，订甲报 12 人，订乙报 10 人，两份都订的几人？", expr: "12+10-20", answer: 2, unit: "人" },
      { text: "30 人，参加合唱 18 人，参加美术 14 人，都参加的几人？", expr: "18+14-30", answer: 2, unit: "人" },
      { text: "参加 A 项 9 人，参加 B 项 7 人，都参加 4 人。共多少人参加？", expr: "9+7-4", answer: 12, unit: "人" },
      { text: "调查 25 人，喜欢数学 20 人，喜欢语文 18 人，两科都喜欢几人？", expr: "20+18-25", answer: 13, unit: "人" }
    ]},
  { id: "m3u10", name: "长方形和正方形（周长）", range: [1, 100], ops: ["+", "×", "÷"],
    apps: [
      { text: "长方形长 6 cm 宽 4 cm，周长多少？", expr: "(6+4)×2", answer: 20, unit: "cm" },
      { text: "正方形边长 5 cm，周长多少？", expr: "5×4", answer: 20, unit: "cm" },
      { text: "正方形周长 24 cm，边长多少？", expr: "24÷4", answer: 6, unit: "cm" },
      { text: "长方形周长 30 cm 宽 6 cm，长多少？", expr: "30÷2-6", answer: 9, unit: "cm" },
      { text: "用 16 cm 铁丝围成正方形，边长多少？", expr: "16÷4", answer: 4, unit: "cm" },
      { text: "长方形长 8 cm 宽 5 cm，周长是边长 6 cm 正方形周长的多少倍？", expr: "(8+5)×2÷(6×4)", answer: "13/12", unit: "" }
    ]}
);

DATA.math["3下"].push(
  { id: "m3d8", name: "位置与方向（一）", range: [1, 8], ops: ["+", "-"],
    apps: [
      { text: "早晨太阳从哪个方向升起？东=1，南=2，西=3，北=4，填编号。", expr: "1", answer: 1, unit: "" },
      { text: "面向北方时，左手指向哪个方向？东=1，西=2。", expr: "2", answer: 2, unit: "" },
      { text: "面向东方时，背后是哪个方向？东=1 南=2 西=3 北=4。", expr: "3", answer: 3, unit: "" },
      { text: "学校在小明家东边 200 米，那么家在学校的哪个方向？东=1，西=2。", expr: "2", answer: 2, unit: "" },
      { text: "面向南方时，右手指向哪个方向？东=1，西=2。", expr: "2", answer: 2, unit: "" },
      { text: "东、南、西、北、东南、东北、西南、西北共有几个方向？", expr: "8", answer: 8, unit: "个" }
    ]},
  { id: "m3d9", name: "数学广角—搭配（二）", range: [1, 30], ops: ["×", "÷"],
    apps: [
      { text: "3 件上衣 2 条裤子，能搭配几种？", expr: "3×2", answer: 6, unit: "种" },
      { text: "0、1、2、3 任选 3 个组成三位数（首位不能为 0），共多少个？", expr: "3×3×2", answer: 18, unit: "个" },
      { text: "5 张照片选 2 张排成一排，几种排法？", expr: "5×4", answer: 20, unit: "种" },
      { text: "早餐主食 3 种、菜 2 种，几种组合？", expr: "3×2", answer: 6, unit: "种" },
      { text: "4 种颜色 3 种款式衣服，多少种？", expr: "4×3", answer: 12, unit: "种" },
      { text: "A、B、C、D 四人两两握手，共握几次？", expr: "4×3÷2", answer: 6, unit: "次" }
    ]}
);

DATA.math["4上"].push(
  { id: "m4u10", name: "数学广角—优化", range: [1, 60], ops: ["+", "-", "×"],
    apps: [
      { text: "烙 3 张饼一次只能烙 2 张，每面 3 分钟，最少几分钟？", expr: "9", answer: 9, unit: "分钟" },
      { text: "沏茶：烧水 8 分，洗杯 1 分，拿茶叶 1 分，泡茶 1 分。合理安排最少几分钟？", expr: "9", answer: 9, unit: "分钟" },
      { text: "烙 4 张饼每面 2 分钟（每次烙 2 张），最少多少分钟？", expr: "8", answer: 8, unit: "分钟" },
      { text: "5 人排队接水分别需 1、2、3、4、5 分钟，从少到多排，等待时间总和是？", expr: "1×5+2×4+3×3+4×2+5×1", answer: 35, unit: "分钟" },
      { text: "田忌赛马至少能赢几场？", expr: "1", answer: 1, unit: "场" },
      { text: "烙 5 张饼每面 3 分钟（一次烙 2 张），最少多少分钟？", expr: "15", answer: 15, unit: "分钟" }
    ]}
);

DATA.math["4下"].push(
  { id: "m4d10", name: "图形的运动（二）", range: [1, 360], ops: ["+", "-"],
    apps: [
      { text: "下列图形中是轴对称图形？圆=1，平行四边形=2，选填编号。", expr: "1", answer: 1, unit: "" },
      { text: "等边三角形有几条对称轴？", expr: "3", answer: 3, unit: "条" },
      { text: "长方形有几条对称轴？", expr: "2", answer: 2, unit: "条" },
      { text: "正方形有几条对称轴？", expr: "4", answer: 4, unit: "条" },
      { text: "图形沿一条直线对折后两边完全重合，叫什么图形？轴对称=1，中心对称=2。", expr: "1", answer: 1, unit: "" },
      { text: "一个图形向右平移 5 格，再向下平移 3 格，水平和竖直一共平移了多少格？", expr: "5+3", answer: 8, unit: "格" }
    ]}
);

DATA.math["5下"].push(
  { id: "m5d9", name: "数学广角—找次品", range: [1, 100], ops: ["÷"],
    apps: [
      { text: "9 件物品中有 1 件次品较轻，用天平至少称几次保证找出？", expr: "2", answer: 2, unit: "次" },
      { text: "3 件物品其中 1 件次品，至少称几次？", expr: "1", answer: 1, unit: "次" },
      { text: "27 件中找 1 件次品至少称几次？", expr: "3", answer: 3, unit: "次" },
      { text: "8 件中找 1 件次品至少称几次？", expr: "2", answer: 2, unit: "次" },
      { text: "10 件中找 1 件次品至少称几次？", expr: "3", answer: 3, unit: "次" },
      { text: "81 件中找 1 件次品至少称几次？", expr: "4", answer: 4, unit: "次" }
    ]}
);

DATA.math["6上"].push(
  { id: "m6u8", name: "位置与方向（二）", range: [1, 360], ops: ["+", "-"],
    apps: [
      { text: "甲在乙的北偏东 30°，那么乙在甲的南偏西多少度？", expr: "30", answer: 30, unit: "度" },
      { text: "面向北方顺时针转 90° 后朝哪个方向？东=1 南=2 西=3 北=4。", expr: "1", answer: 1, unit: "" },
      { text: "正北方向旋转 180° 是哪方向？北=1 南=2。", expr: "2", answer: 2, unit: "" },
      { text: "A 点在 B 北偏东 45° 100 米处，距离填多少米？", expr: "100", answer: 100, unit: "米" },
      { text: "南偏西 60° 方向与正南方向的夹角多少度？", expr: "60", answer: 60, unit: "度" },
      { text: "面向东顺时针再转 90° 后朝南方，对吗？对=1 错=0。", expr: "1", answer: 1, unit: "" }
    ]}
);

DATA.math["6下"].push(
  { id: "m6d7", name: "数学广角—鸽巢问题", range: [1, 1000], ops: ["+", "÷"],
    apps: [
      { text: "4 个苹果放进 3 个盒子里，至少有一个盒子放了至少 2 个，对吗？1=对。", expr: "1", answer: 1, unit: "" },
      { text: "13 只鸽子飞进 12 个鸽巢，至少有 1 个鸽巢里至少有几只？", expr: "2", answer: 2, unit: "只" },
      { text: "盒中只有红蓝两色袜子若干，至少摸出几只能保证有 1 双同色？", expr: "3", answer: 3, unit: "只" },
      { text: "25 个学生中至少有几人是同一个月出生？", expr: "3", answer: 3, unit: "人" },
      { text: "100 个苹果放入 9 个抽屉，至少一个抽屉里至少多少个？", expr: "12", answer: 12, unit: "个" },
      { text: "17 张牌分 4 种花色，至少有几张是同花色？", expr: "5", answer: 5, unit: "张" }
    ]}
);

/* ============================================================
   语文补全：覆盖人教版各学期常考课文/古诗
   ============================================================ */
DATA.chinese["1上"].push(
  { id: "c1u18", name: "课文巩固：秋天", type: "zishi",
    items: [
      { q: "“秋天到了”天气会变得：", correct: "凉爽", options: ["很热", "凉爽", "下雪", "很闷"] },
      { q: "课文里大雁飞向哪里？", correct: "南方", options: ["北方", "南方", "东方", "西方"] },
      { q: "“一片片黄叶”说明叶子：", correct: "落下", options: ["发芽", "落下", "变绿", "结果"] },
      { q: "“天空那么蓝那么高”用了什么句式？", correct: "并列", options: ["并列", "比喻", "反问", "拟人"] },
      { q: "课文里描写的是哪个季节？", correct: "秋天", options: ["春天", "夏天", "秋天", "冬天"] },
      { q: "“凉爽的秋风”说明秋天：", correct: "舒服", options: ["闷热", "舒服", "寒冷", "湿润"] }
    ]},
  { id: "c1u19", name: "课文巩固：四季", type: "zishi",
    items: [
      { q: "“草芽尖尖，他对小鸟说”代表哪个季节？", correct: "春天", options: ["春天", "夏天", "秋天", "冬天"] },
      { q: "“荷叶圆圆”代表：", correct: "夏天", options: ["春天", "夏天", "秋天", "冬天"] },
      { q: "“谷穗弯弯”代表：", correct: "秋天", options: ["春天", "夏天", "秋天", "冬天"] },
      { q: "“雪人大肚子一挺”代表：", correct: "冬天", options: ["春天", "夏天", "秋天", "冬天"] },
      { q: "课文按什么顺序写？", correct: "四季", options: ["四季", "一天", "一周", "一年大事"] },
      { q: "“他对青蛙说‘我是夏天’”用了什么手法？", correct: "拟人", options: ["拟人", "比喻", "夸张", "对比"] }
    ]}
);

DATA.chinese["1下"].push(
  { id: "c1d17", name: "课文巩固：吃水不忘挖井人", type: "zishi",
    items: [
      { q: "“吃水不忘挖井人”出自纪念哪位领袖？", correct: "毛主席", options: ["毛主席", "周恩来", "朱德", "邓小平"] },
      { q: "课文表达的情感是：", correct: "感恩", options: ["感恩", "悲伤", "气愤", "愉快"] },
      { q: "“井”和“水”说明：", correct: "饮水来源", options: ["种田", "饮水来源", "做饭", "洗澡"] },
      { q: "村民立碑是为了：", correct: "纪念挖井人", options: ["纪念挖井人", "庆祝节日", "划分地界", "讲故事"] },
      { q: "课文告诉我们要：", correct: "记住别人的好", options: ["记住别人的好", "炫耀自己", "比较谁强", "争抢"] },
      { q: "事情发生在哪个地方？", correct: "沙洲坝", options: ["井冈山", "延安", "沙洲坝", "韶山"] }
    ]},
  { id: "c1d18", name: "课文巩固：彩虹", type: "zishi",
    items: [
      { q: "课文里“我”想用彩虹做什么浇花？", correct: "提水", options: ["提水", "下雨", "做桥", "做风筝"] },
      { q: "“彩虹”一般出现在：", correct: "雨后", options: ["晴天", "雨后", "夜晚", "雪后"] },
      { q: "课文体现了“我”：", correct: "关心家人", options: ["关心家人", "懒惰", "贪玩", "调皮"] },
      { q: "彩虹有几种颜色？", correct: "七种", options: ["三种", "五种", "六种", "七种"] },
      { q: "“桥”比喻彩虹：", correct: "弯弯的样子", options: ["弯弯的样子", "颜色", "声音", "硬度"] },
      { q: "课文用了哪种句式？", correct: "想象", options: ["想象", "记叙", "议论", "说明"] }
    ]}
);

DATA.chinese["2上"].push(
  { id: "c2u17", name: "课文巩固：小蝌蚪找妈妈", type: "zishi",
    items: [
      { q: "小蝌蚪最终的妈妈是：", correct: "青蛙", options: ["青蛙", "鲤鱼", "乌龟", "鸭子"] },
      { q: "小蝌蚪先长出：", correct: "后腿", options: ["前腿", "后腿", "尾巴", "翅膀"] },
      { q: "鲤鱼妈妈告诉小蝌蚪：", correct: "妈妈四条腿", options: ["妈妈四条腿", "妈妈有壳", "妈妈红肚皮", "妈妈白脖子"] },
      { q: "“迎上去”说明小蝌蚪：", correct: "主动靠近", options: ["主动靠近", "害怕逃走", "停下休息", "潜入水底"] },
      { q: "课文是按什么顺序写的？", correct: "时间顺序", options: ["时间顺序", "地点顺序", "颜色顺序", "声音顺序"] },
      { q: "故事告诉我们：", correct: "观察事物变化", options: ["观察事物变化", "动物会说话", "妈妈不重要", "蝌蚪没用"] }
    ]},
  { id: "c2u18", name: "课文巩固：植物妈妈有办法", type: "zishi",
    items: [
      { q: "蒲公英靠什么传播种子？", correct: "风", options: ["风", "水", "动物", "弹射"] },
      { q: "苍耳靠什么传播？", correct: "动物皮毛", options: ["风", "水", "动物皮毛", "自己弹"] },
      { q: "豌豆靠什么传播？", correct: "太阳晒开", options: ["风", "水", "动物", "太阳晒开"] },
      { q: "“四海为家”形容种子：", correct: "到处都能生长", options: ["到处都能生长", "只在家里", "只长一棵", "都长在树上"] },
      { q: "植物有办法说明它们：", correct: "智慧", options: ["智慧", "懒惰", "依赖", "孤单"] },
      { q: "课文体裁是：", correct: "科普诗", options: ["寓言", "科普诗", "成语故事", "记叙文"] }
    ]}
);

DATA.chinese["2下"].push(
  { id: "c2d17", name: "课文巩固：找春天", type: "zishi",
    items: [
      { q: "课文里“小草”从哪里探出头来？", correct: "土里", options: ["土里", "树上", "水里", "云里"] },
      { q: "“春天来了”作者最先听见：", correct: "鸟叫", options: ["鸟叫", "雷声", "脚步", "歌声"] },
      { q: "“害羞”形容春天：", correct: "小心地出现", options: ["小心地出现", "热情奔放", "勇敢面对", "冷淡"] },
      { q: "“探”字说明动作：", correct: "小心慢慢", options: ["小心慢慢", "大胆迅速", "粗鲁", "随意"] },
      { q: "“春天的眉毛吗？”属于什么修辞？", correct: "比喻", options: ["比喻", "拟人", "反问", "排比"] },
      { q: "课文表达对春天的：", correct: "热爱", options: ["厌恶", "热爱", "冷淡", "害怕"] }
    ]},
  { id: "c2d18", name: "课文巩固：揠苗助长", type: "zishi",
    items: [
      { q: "宋人为什么把禾苗拔高？", correct: "嫌长得慢", options: ["嫌长得慢", "想数一数", "怕被偷", "怕被风吹"] },
      { q: "结果禾苗：", correct: "都枯死了", options: ["更高了", "都枯死了", "结果实了", "开花了"] },
      { q: "“揠苗助长”比喻：", correct: "急于求成", options: ["急于求成", "默默无闻", "细心耐心", "勤勤恳恳"] },
      { q: "故事告诉我们：", correct: "遵循事物规律", options: ["遵循事物规律", "干活要快", "怕落后", "比拼速度"] },
      { q: "本故事出自哪部书？", correct: "《孟子》", options: ["《论语》", "《孟子》", "《庄子》", "《韩非子》"] },
      { q: "宋人的心情是：", correct: "焦急", options: ["焦急", "悠闲", "得意", "悲伤"] }
    ]}
);

DATA.chinese["3上"].push(
  { id: "c3u3", name: "古诗：《赠刘景文》", type: "gushi",
    poem: { title: "赠刘景文", author: "苏轼", lines: ["荷尽已无擎雨盖，", "菊残犹有傲霜枝。", "一年好景君须记，", "最是橙黄橘绿时。"] },
    items: [
      { q: "本诗作者是：", correct: "苏轼", options: ["李白", "杜甫", "苏轼", "白居易"] },
      { q: "“擎雨盖”比喻：", correct: "荷叶", options: ["荷叶", "雨伞", "荷花", "雨水"] },
      { q: "“傲霜枝”指：", correct: "菊花的枝", options: ["菊花的枝", "梅花", "松枝", "竹枝"] },
      { q: "“橙黄橘绿”写的是哪个季节？", correct: "秋天", options: ["春天", "夏天", "秋天", "冬天"] },
      { q: "诗中赞美的品质是：", correct: "坚强", options: ["柔弱", "坚强", "羞涩", "懒散"] }
    ]},
  { id: "c3u4", name: "课文巩固：大青树下的小学", type: "zishi",
    items: [
      { q: "“大青树下的小学”位于哪种地区？", correct: "民族山区", options: ["大城市", "草原", "民族山区", "海边"] },
      { q: "“凤尾竹”属于：", correct: "植物", options: ["动物", "植物", "山", "湖"] },
      { q: "课文表达对学校的：", correct: "热爱", options: ["热爱", "冷淡", "陌生", "嫌弃"] },
      { q: "上学路上孩子们的心情：", correct: "高兴", options: ["伤心", "焦急", "无聊", "高兴"] },
      { q: "课文展示了民族大家庭的：", correct: "团结", options: ["对立", "争吵", "团结", "陌生"] },
      { q: "“铜钟”一般用来：", correct: "报时", options: ["装饰", "报时", "盛水", "藏宝"] }
    ]}
);

DATA.chinese["3下"].push(
  { id: "c3d3", name: "古诗：《元日》", type: "gushi",
    poem: { title: "元日", author: "王安石", lines: ["爆竹声中一岁除，", "春风送暖入屠苏。", "千门万户曈曈日，", "总把新桃换旧符。"] },
    items: [
      { q: "本诗作者：", correct: "王安石", options: ["王安石", "苏轼", "辛弃疾", "陆游"] },
      { q: "“爆竹声中一岁除”描写的是：", correct: "春节", options: ["春节", "元宵", "端午", "中秋"] },
      { q: "“屠苏”是一种：", correct: "酒", options: ["菜", "酒", "茶", "药"] },
      { q: "“新桃换旧符”指换什么？", correct: "春联", options: ["春联", "窗花", "灯笼", "旗子"] },
      { q: "全诗表达的情感：", correct: "喜庆", options: ["伤感", "喜庆", "孤独", "悲愤"] }
    ]},
  { id: "c3d4", name: "课文巩固：荷花", type: "zishi",
    items: [
      { q: "“清香”说明荷花有：", correct: "香味", options: ["颜色", "香味", "声音", "形状"] },
      { q: "“挨挨挤挤”形容荷叶：", correct: "茂密", options: ["稀少", "枯萎", "茂密", "歪斜"] },
      { q: "“冒”字写出荷花：", correct: "蓬勃生长", options: ["枯萎", "蓬勃生长", "懒散", "凋谢"] },
      { q: "本文出自哪位作家？", correct: "叶圣陶", options: ["叶圣陶", "朱自清", "冰心", "鲁迅"] },
      { q: "“一池荷花”比喻：", correct: "活的画", options: ["活的画", "无声电影", "山水画", "卡通"] },
      { q: "课文情感是：", correct: "喜爱", options: ["厌恶", "喜爱", "敬畏", "冷淡"] }
    ]}
);

DATA.chinese["4上"].push(
  { id: "c4u19", name: "课文巩固：观潮", type: "zishi",
    items: [
      { q: "“天下奇观”指的是哪条潮？", correct: "钱塘江大潮", options: ["黄河浪", "长江浪", "钱塘江大潮", "珠江潮"] },
      { q: "潮来时的声音像：", correct: "闷雷", options: ["闷雷", "钟声", "哨声", "细雨"] },
      { q: "“白浪翻滚”形容潮水：", correct: "气势浩大", options: ["气势浩大", "细微", "平静", "缓慢"] },
      { q: "课文按什么顺序写？", correct: "时间", options: ["时间", "空间", "因果", "比较"] },
      { q: "“风号浪吼”表现：", correct: "声音大", options: ["颜色", "声音大", "速度慢", "气味"] },
      { q: "潮过后江面：", correct: "渐渐平静", options: ["更猛烈", "渐渐平静", "干涸", "结冰"] }
    ]},
  { id: "c4u20", name: "文言文：《囫囵吞枣》", type: "wenyan",
    text: "客有曰：梨益齿而损脾，枣益脾而损齿。一呆弟子思久之，曰：我食梨则嚼而不咽，食枣则吞而不嚼。傍人哂之：囫囵吞枣，不知其味矣。",
    items: [
      { q: "“益”意思：", answer: "好处", accept: ["好处", "有益", "有好处"] },
      { q: "“损”意思：", answer: "伤害", accept: ["伤害", "损伤", "有害"] },
      { q: "“囫囵吞枣”比喻：", answer: "不加分析", accept: ["不加分析", "不加思考", "笼统", "笼统接受"] },
      { q: "呆弟子的办法可笑在：", answer: "生搬硬套", accept: ["生搬硬套", "死板", "机械"] },
      { q: "这则故事告诉我们：", answer: "读书要思考", accept: ["读书要思考", "学习要思考", "学习要消化", "做事要思考"] }
    ]}
);

DATA.chinese["4下"].push(
  { id: "c4d18", name: "课文巩固：乡下人家", type: "zishi",
    items: [
      { q: "课文主要描写：", correct: "乡村风光", options: ["都市", "乡村风光", "工厂", "学校"] },
      { q: "屋前常种有什么花？", correct: "瓜藤", options: ["瓜藤", "玫瑰", "牡丹", "兰花"] },
      { q: "“鸡鸭成群”说明农家：", correct: "热闹", options: ["热闹", "贫穷", "孤单", "脏乱"] },
      { q: "作者的情感是：", correct: "喜爱赞美", options: ["厌恶", "冷淡", "喜爱赞美", "怀念"] },
      { q: "本文作者是：", correct: "陈醉云", options: ["陈醉云", "老舍", "朱自清", "鲁迅"] },
      { q: "课文按什么顺序写？", correct: "空间或时间", options: ["颜色", "声音", "空间或时间", "事件"] }
    ]},
  { id: "c4d19", name: "文言文：《守株待兔》", type: "wenyan",
    text: "宋人有耕者，田中有株，兔走触株，折颈而死。因释其耒而守株，冀复得兔。兔不可复得，而身为宋国笑。",
    items: [
      { q: "“走”的意思：", answer: "跑", accept: ["跑", "奔跑"] },
      { q: "“释”的意思：", answer: "放下", accept: ["放下", "丢下"] },
      { q: "“冀”的意思：", answer: "希望", accept: ["希望", "盼望"] },
      { q: "故事讽刺哪类人？", answer: "不劳而获", accept: ["不劳而获", "妄想不劳而获", "不思进取"] },
      { q: "本文出自哪部书？", answer: "韩非子", accept: ["韩非子", "《韩非子》"] }
    ]}
);

DATA.chinese["5上"].push(
  { id: "c5u18", name: "课文巩固：白鹭", type: "zishi",
    items: [
      { q: "“白鹭是一首精巧的诗”用了什么手法？", correct: "比喻", options: ["比喻", "拟人", "排比", "夸张"] },
      { q: "作者是：", correct: "郭沫若", options: ["朱自清", "郭沫若", "老舍", "鲁迅"] },
      { q: "“嫌身段太大”说明：", correct: "其他鹭不如白鹭精巧", options: ["白鹭很大", "其他鹭不如白鹭精巧", "白鹭很小", "白鹭丑陋"] },
      { q: "“色素的配合”指：", correct: "颜色搭配", options: ["颜色搭配", "味道搭配", "声音搭配", "动作搭配"] },
      { q: "全文流露出的情感：", correct: "喜爱赞美", options: ["厌恶", "喜爱赞美", "怀疑", "无奈"] },
      { q: "本文体裁是：", correct: "散文", options: ["小说", "散文", "诗", "戏剧"] }
    ]},
  { id: "c5u19", name: "文言文：《学弈》", type: "wenyan",
    text: "弈秋，通国之善弈者也。使弈秋诲二人弈，其一人专心致志，惟弈秋之为听；一人虽听之，一心以为有鸿鹄将至，思援弓缴而射之。虽与之俱学，弗若之矣。",
    items: [
      { q: "“通国之善弈者”意思：", answer: "全国善于下棋的人", accept: ["全国善于下棋的人", "全国会下棋的人", "全国最会下棋的人"] },
      { q: "“惟弈秋之为听”说明这个人：", answer: "专心听讲", accept: ["专心听讲", "专心致志", "专心"] },
      { q: "“鸿鹄”指：", answer: "天鹅", accept: ["天鹅", "大雁"] },
      { q: "故事告诉我们：", answer: "学习要专心", accept: ["学习要专心", "做事要专心", "专心致志才能学好"] },
      { q: "“弗若之矣”意思：", answer: "比不上他", accept: ["比不上他", "不如他"] }
    ]}
);

DATA.chinese["5下"].push(
  { id: "c5d17", name: "课文巩固：草船借箭", type: "zishi",
    items: [
      { q: "本文节选自：", correct: "《三国演义》", options: ["《水浒传》", "《三国演义》", "《西游记》", "《红楼梦》"] },
      { q: "借箭的主角是：", correct: "诸葛亮", options: ["诸葛亮", "周瑜", "曹操", "鲁肃"] },
      { q: "诸葛亮神机妙算体现在：", correct: "巧用天气和敌情", options: ["靠运气", "巧用天气和敌情", "硬抢", "求情"] },
      { q: "“雾”在故事中的作用：", correct: "掩护行动", options: ["阻挡视线", "掩护行动", "增加诗意", "无作用"] },
      { q: "周瑜对诸葛亮：", correct: "嫉妒", options: ["敬佩", "嫉妒", "无视", "陌生"] },
      { q: "故事体现的智慧是：", correct: "知天文识地理", options: ["知天文识地理", "蛮力", "运气", "等待"] }
    ]},
  { id: "c5d18", name: "文言文：《王戎不取道旁李》", type: "wenyan",
    text: "王戎七岁，尝与诸小儿游。看道边李树多子折枝，诸儿竞走取之，唯戎不动。人问之，答曰：树在道边而多子，此必苦李。取之，信然。",
    items: [
      { q: "“折枝”意思：", answer: "果实压弯枝条", accept: ["果实压弯枝条", "枝条压弯", "压弯枝条"] },
      { q: "“竞走”意思：", answer: "争相奔跑", accept: ["争相奔跑", "争相跑去", "争相"] },
      { q: "王戎为什么不动？", answer: "推断李子苦", accept: ["推断李子苦", "判断是苦李", "认为是苦李"] },
      { q: "“信然”意思：", answer: "果真如此", accept: ["果真如此", "果然如此", "确实如此"] },
      { q: "故事说明王戎：", answer: "善于观察思考", accept: ["善于观察思考", "聪明", "聪慧", "善于推理"] }
    ]}
);

DATA.chinese["6上"].push(
  { id: "c6u15", name: "课文巩固：草原", type: "zishi",
    items: [
      { q: "本文作者：", correct: "老舍", options: ["朱自清", "老舍", "茅盾", "巴金"] },
      { q: "“一碧千里”形容草原：", correct: "辽阔翠绿", options: ["寒冷", "辽阔翠绿", "干旱", "崎岖"] },
      { q: "蒙古族同胞的待客之道是：", correct: "热情", options: ["冷淡", "热情", "客气", "客套"] },
      { q: "“蒙汉情深”表达：", correct: "民族团结", options: ["民族团结", "敌对", "陌生", "无关"] },
      { q: "文章按什么顺序写？", correct: "见闻经历", options: ["颜色", "时间地点", "见闻经历", "事件结果"] },
      { q: "全文情感基调：", correct: "赞美热爱", options: ["哀伤", "赞美热爱", "焦虑", "愤怒"] }
    ]},
  { id: "c6u16", name: "文言文：《书戴嵩画牛》", type: "wenyan",
    text: "蜀中有杜处士，好书画，所宝以百数。有戴嵩《牛》一轴，尤所爱，锦囊玉轴，常以自随。一日曝书画，有一牧童见之，拊掌大笑，曰：此画斗牛也。牛斗，力在角，尾搐入两股间，今乃掉尾而斗，谬矣。处士笑而然之。",
    items: [
      { q: "本文作者：", answer: "苏轼" },
      { q: "“尤所爱”意思：", answer: "特别喜爱", accept: ["特别喜爱", "尤其喜爱", "最喜爱"] },
      { q: "牧童指出画中错误是：", answer: "牛斗时摇尾巴", accept: ["牛斗时摇尾巴", "斗牛掉尾", "牛斗时不应摇尾"] },
      { q: "“拊掌”意思：", answer: "拍手", accept: ["拍手", "鼓掌"] },
      { q: "故事告诉我们：", answer: "实践出真知", accept: ["实践出真知", "要尊重事实", "要请教内行", "细心观察"] }
    ]}
);

DATA.chinese["6下"].push(
  { id: "c6d19", name: "课文巩固：北京的春节", type: "zishi",
    items: [
      { q: "本文作者：", correct: "老舍", options: ["老舍", "鲁迅", "巴金", "冰心"] },
      { q: "“腊八粥”出现在腊月初几？", correct: "初八", options: ["初一", "初八", "十五", "二十"] },
      { q: "课文按什么顺序写？", correct: "时间", options: ["时间", "空间", "因果", "对比"] },
      { q: "“熬腊八粥”反映：", correct: "民俗", options: ["古诗", "民俗", "战争", "科技"] },
      { q: "课文情感是：", correct: "喜爱赞美", options: ["厌烦", "冷淡", "喜爱赞美", "讽刺"] },
      { q: "春节最热闹的日子是：", correct: "除夕和初一", options: ["腊八", "除夕和初一", "正月十五", "二月二"] }
    ]},
  { id: "c6d20", name: "文言文：《为学》（节选）", type: "wenyan",
    text: "天下事有难易乎？为之，则难者亦易矣；不为，则易者亦难矣。人之为学有难易乎？学之，则难者亦易矣；不学，则易者亦难矣。",
    items: [
      { q: "本文作者：", answer: "彭端淑" },
      { q: "“为之”意思：", answer: "做这件事", accept: ["做这件事", "去做", "去做它"] },
      { q: "本文阐明什么道理？", answer: "事在人为", accept: ["事在人为", "为则难易转化", "勤奋能克服困难"] },
      { q: "“则”的意思：", answer: "就", accept: ["就", "那么"] },
      { q: "“学之”指：", answer: "学习它", accept: ["学习它", "去学习", "学它"] }
    ]}
);

/* ============================================================
   京版英语扩充：把每学期补到 6 单元
   每单元 15 词 + 5 句，保持京版风格
   ============================================================ */

DATA.english["1上"].push(
  { id: "e1u5", name: "Unit 5: My Pets",
    words: [
      W("pet","宠物"), W("cat","小猫"), W("dog","小狗"), W("rabbit","兔子"),
      W("fish","鱼"), W("bird","鸟"), W("hamster","仓鼠"), W("turtle","乌龟"),
      W("name","名字"), W("cute","可爱的"), W("little","小的"), W("big","大的"),
      W("eat","吃"), W("drink","喝"), W("run","跑")
    ],
    sentences: [
      { en: "I have a little dog.", zh: "我有一只小狗。" },
      { en: "His name is Lucky.", zh: "它的名字叫Lucky。" },
      { en: "The cat is so cute.", zh: "这只猫真可爱。" },
      { en: "My fish can swim.", zh: "我的鱼会游泳。" },
      { en: "I love my pet.", zh: "我爱我的宠物。" }
    ]
  },
  { id: "e1u6", name: "Unit 6: Numbers 11-20",
    words: [
      W("eleven","十一"), W("twelve","十二"), W("thirteen","十三"),
      W("fourteen","十四"), W("fifteen","十五"), W("sixteen","十六"),
      W("seventeen","十七"), W("eighteen","十八"), W("nineteen","十九"),
      W("twenty","二十"), W("year","岁/年"), W("old","年长的"),
      W("age","年龄"), W("class","班"), W("Grade","年级")
    ],
    sentences: [
      { en: "I am seven years old.", zh: "我七岁。" },
      { en: "There are twenty students.", zh: "这里有二十个学生。" },
      { en: "How old are you?", zh: "你几岁了？" },
      { en: "I'm in Grade One.", zh: "我读一年级。" },
      { en: "Eleven plus nine is twenty.", zh: "十一加九等于二十。" }
    ]
  }
);

DATA.english["1下"].push(
  { id: "e1d5", name: "Unit 5: Action Verbs",
    words: [
      W("run","跑"), W("jump","跳"), W("walk","走"), W("swim","游泳"),
      W("sing","唱"), W("dance","跳舞"), W("read","读"), W("write","写"),
      W("draw","画"), W("play","玩"), W("eat","吃"), W("drink","喝"),
      W("sit","坐"), W("stand","站"), W("clap","拍手")
    ],
    sentences: [
      { en: "I can run fast.", zh: "我能跑得很快。" },
      { en: "Let's sing a song.", zh: "我们一起唱歌吧。" },
      { en: "Please sit down.", zh: "请坐下。" },
      { en: "Stand up and clap.", zh: "起立，拍拍手。" },
      { en: "She can dance.", zh: "她会跳舞。" }
    ]
  },
  { id: "e1d6", name: "Unit 6: Days of the Week",
    words: [
      W("Monday","星期一"), W("Tuesday","星期二"), W("Wednesday","星期三"),
      W("Thursday","星期四"), W("Friday","星期五"), W("Saturday","星期六"),
      W("Sunday","星期日"), W("week","星期/周"), W("day","天"),
      W("today","今天"), W("yesterday","昨天"), W("tomorrow","明天"),
      W("weekend","周末"), W("school","学校"), W("home","家")
    ],
    sentences: [
      { en: "Today is Monday.", zh: "今天是星期一。" },
      { en: "What day is it tomorrow?", zh: "明天星期几？" },
      { en: "I like Sundays.", zh: "我喜欢星期天。" },
      { en: "We go to school from Monday to Friday.", zh: "我们周一到周五去学校。" },
      { en: "Have a nice weekend!", zh: "周末愉快！" }
    ]
  }
);

DATA.english["2上"].push(
  { id: "e2u5", name: "Unit 5: My Room",
    words: [
      W("room","房间"), W("bed","床"), W("desk","书桌"), W("chair","椅子"),
      W("lamp","台灯"), W("clock","钟"), W("shelf","架子"), W("door","门"),
      W("window","窗户"), W("wall","墙"), W("floor","地板"), W("toy","玩具"),
      W("near","靠近"), W("under","在……下面"), W("behind","在……后面")
    ],
    sentences: [
      { en: "This is my room.", zh: "这是我的房间。" },
      { en: "My bed is near the window.", zh: "我的床靠近窗户。" },
      { en: "The toy is under the desk.", zh: "玩具在书桌下面。" },
      { en: "I have a small lamp.", zh: "我有一盏小台灯。" },
      { en: "Where is the clock? On the wall.", zh: "钟在哪？在墙上。" }
    ]
  },
  { id: "e2u6", name: "Unit 6: Feelings",
    words: [
      W("happy","快乐的"), W("sad","难过的"), W("angry","生气的"),
      W("tired","累的"), W("hungry","饿的"), W("thirsty","渴的"),
      W("scared","害怕的"), W("excited","兴奋的"), W("bored","无聊的"),
      W("surprised","惊讶的"), W("feel","感觉"), W("smile","微笑"),
      W("cry","哭"), W("laugh","笑"), W("OK","好的")
    ],
    sentences: [
      { en: "I'm happy today.", zh: "我今天很开心。" },
      { en: "Are you tired?", zh: "你累了吗？" },
      { en: "Don't be sad.", zh: "不要难过。" },
      { en: "I'm a little hungry.", zh: "我有点饿了。" },
      { en: "Are you OK? Yes, I'm fine.", zh: "你还好吗？是的，我很好。" }
    ]
  }
);

DATA.english["2下"].push(
  { id: "e2d5", name: "Unit 5: Drinks & Meals",
    words: [
      W("breakfast","早餐"), W("lunch","午餐"), W("dinner","晚餐"),
      W("tea","茶"), W("coffee","咖啡"), W("juice","果汁"),
      W("milk","牛奶"), W("water","水"), W("cup","杯子"),
      W("glass","玻璃杯"), W("plate","盘子"), W("bowl","碗"),
      W("spoon","勺子"), W("hungry","饿的"), W("yummy","好吃的")
    ],
    sentences: [
      { en: "I have milk for breakfast.", zh: "我早餐喝牛奶。" },
      { en: "Would you like some tea?", zh: "你想喝点茶吗？" },
      { en: "Lunch is ready.", zh: "午餐准备好了。" },
      { en: "The cake is yummy.", zh: "蛋糕真好吃。" },
      { en: "Pass me the bowl, please.", zh: "请把碗递给我。" }
    ]
  },
  { id: "e2d6", name: "Unit 6: In the Park",
    words: [
      W("park","公园"), W("tree","树"), W("flower","花"), W("grass","草"),
      W("bench","长椅"), W("kite","风筝"), W("ball","球"), W("swing","秋千"),
      W("slide","滑梯"), W("bike","自行车"), W("run","跑"), W("fly","放飞"),
      W("happy","开心"), W("nice","美好的"), W("Sunday","星期日")
    ],
    sentences: [
      { en: "Let's go to the park.", zh: "我们去公园吧。" },
      { en: "The flowers are beautiful.", zh: "花儿真美。" },
      { en: "I can ride a bike.", zh: "我会骑自行车。" },
      { en: "Look! He is flying a kite.", zh: "看！他在放风筝。" },
      { en: "I love sunny Sundays.", zh: "我喜欢阳光明媚的星期天。" }
    ]
  }
);

DATA.english["3上"].push(
  { id: "e3u4", name: "Unit 4: At School",
    words: [
      W("subject","科目"), W("Chinese","语文"), W("math","数学"),
      W("English","英语"), W("art","美术"), W("music","音乐"),
      W("PE","体育"), W("lesson","课"), W("class","班级/课"),
      W("library","图书馆"), W("gym","体育馆"), W("playground","操场"),
      W("teacher","老师"), W("learn","学习"), W("favorite","最喜欢的")
    ],
    sentences: [
      { en: "What's your favorite subject?", zh: "你最喜欢的科目是什么？" },
      { en: "I like English very much.", zh: "我非常喜欢英语。" },
      { en: "We have four lessons in the morning.", zh: "我们上午有四节课。" },
      { en: "The library is on the second floor.", zh: "图书馆在二楼。" },
      { en: "Let's play on the playground.", zh: "我们去操场玩吧。" }
    ]
  },
  { id: "e3u5", name: "Unit 5: My Family Members",
    words: [
      W("uncle","叔叔"), W("aunt","阿姨"), W("cousin","表/堂兄弟姐妹"),
      W("son","儿子"), W("daughter","女儿"), W("parent","父母"),
      W("grandparent","祖父母"), W("husband","丈夫"), W("wife","妻子"),
      W("family","家庭"), W("young","年轻的"), W("old","年长的"),
      W("kind","善良的"), W("busy","忙的"), W("love","爱")
    ],
    sentences: [
      { en: "My uncle is a doctor.", zh: "我叔叔是医生。" },
      { en: "I love my grandparents.", zh: "我爱我的祖父母。" },
      { en: "She has two cousins.", zh: "她有两个表兄弟。" },
      { en: "My parents are very busy.", zh: "我父母很忙。" },
      { en: "We are a big happy family.", zh: "我们是一个幸福的大家庭。" }
    ]
  },
  { id: "e3u6", name: "Unit 6: Big Numbers",
    words: [
      W("thirty","三十"), W("forty","四十"), W("fifty","五十"),
      W("sixty","六十"), W("seventy","七十"), W("eighty","八十"),
      W("ninety","九十"), W("hundred","百"), W("number","数字"),
      W("add","加"), W("count","数"), W("yuan","元"),
      W("phone","电话"), W("first","第一"), W("last","最后")
    ],
    sentences: [
      { en: "My phone number is 138 8888 8888.", zh: "我的电话号码是138 8888 8888。" },
      { en: "There are one hundred students.", zh: "有一百名学生。" },
      { en: "It costs fifty yuan.", zh: "它要五十元。" },
      { en: "Count from one to one hundred.", zh: "从1数到100。" },
      { en: "She is the first in line.", zh: "她排在第一个。" }
    ]
  }
);

DATA.english["3下"].push(
  { id: "e3d4", name: "Unit 4: Holidays",
    words: [
      W("holiday","假期"), W("festival","节日"), W("Spring Festival","春节"),
      W("Christmas","圣诞节"), W("New Year","新年"), W("birthday","生日"),
      W("present","礼物"), W("card","卡片"), W("celebrate","庆祝"),
      W("happy","快乐的"), W("party","聚会"), W("invite","邀请"),
      W("dumpling","饺子"), W("firework","烟花"), W("family","家人")
    ],
    sentences: [
      { en: "Happy Spring Festival!", zh: "春节快乐！" },
      { en: "We eat dumplings on New Year's Eve.", zh: "除夕夜我们吃饺子。" },
      { en: "I'll invite my friends to my party.", zh: "我会邀请我的朋友们来聚会。" },
      { en: "Christmas is in December.", zh: "圣诞节在12月。" },
      { en: "Here is a present for you.", zh: "这是给你的礼物。" }
    ]
  },
  { id: "e3d5", name: "Unit 5: At the Restaurant",
    words: [
      W("restaurant","餐厅"), W("menu","菜单"), W("order","点餐"),
      W("waiter","服务员"), W("waitress","女服务员"), W("fork","叉子"),
      W("knife","刀"), W("napkin","餐巾"), W("dish","菜"),
      W("noodles","面条"), W("soup","汤"), W("salad","沙拉"),
      W("delicious","美味的"), W("bill","账单"), W("thank","谢谢")
    ],
    sentences: [
      { en: "Can I see the menu, please?", zh: "请给我看一下菜单。" },
      { en: "I'd like a bowl of noodles.", zh: "我想要一碗面条。" },
      { en: "The soup is delicious.", zh: "这汤很好喝。" },
      { en: "Excuse me, the bill, please.", zh: "请买单。" },
      { en: "Thank you for your service.", zh: "谢谢你的服务。" }
    ]
  },
  { id: "e3d6", name: "Unit 6: Music & Songs",
    words: [
      W("song","歌曲"), W("music","音乐"), W("sing","唱"),
      W("piano","钢琴"), W("guitar","吉他"), W("drum","鼓"),
      W("violin","小提琴"), W("listen","听"), W("loud","大声的"),
      W("quiet","安静的"), W("rhythm","节奏"), W("voice","嗓音"),
      W("favorite","最喜欢的"), W("dance","跳舞"), W("happy","欢快的")
    ],
    sentences: [
      { en: "I love listening to music.", zh: "我喜欢听音乐。" },
      { en: "Can you play the piano?", zh: "你会弹钢琴吗？" },
      { en: "She has a beautiful voice.", zh: "她有一副好嗓子。" },
      { en: "Let's sing a happy song.", zh: "我们一起唱首欢快的歌。" },
      { en: "The music is too loud.", zh: "音乐声太大了。" }
    ]
  }
);

DATA.english["4上"].push(
  { id: "e4u4", name: "Unit 4: Asking the Way",
    words: [
      W("way","路"), W("left","左"), W("right","右"), W("straight","直走"),
      W("turn","转弯"), W("corner","拐角"), W("crossing","十字路口"),
      W("light","灯"), W("bus stop","公交车站"), W("near","近"),
      W("far","远"), W("between","在……之间"), W("opposite","对面"),
      W("map","地图"), W("excuse","打扰")
    ],
    sentences: [
      { en: "Excuse me, where is the bank?", zh: "打扰一下，银行在哪里？" },
      { en: "Go straight and turn right.", zh: "直走然后向右转。" },
      { en: "It's next to the bus stop.", zh: "就在公交车站旁边。" },
      { en: "How far is it from here?", zh: "离这儿有多远？" },
      { en: "Thank you for your help.", zh: "谢谢你的帮助。" }
    ]
  },
  { id: "e4u5", name: "Unit 5: Past Activities",
    words: [
      W("yesterday","昨天"), W("last","上一个"), W("ago","以前"),
      W("went","去（过去式）"), W("saw","看见（过去式）"),
      W("had","有（过去式）"), W("did","做（过去式）"),
      W("played","玩过"), W("watched","看过"), W("visited","拜访过"),
      W("morning","早上"), W("afternoon","下午"), W("evening","晚上"),
      W("weekend","周末"), W("fun","有趣的")
    ],
    sentences: [
      { en: "I went to the park yesterday.", zh: "我昨天去了公园。" },
      { en: "What did you do last weekend?", zh: "你上周末做什么了？" },
      { en: "We watched a movie.", zh: "我们看了一部电影。" },
      { en: "I visited my grandma last Sunday.", zh: "我上周日去看望了我奶奶。" },
      { en: "It was so much fun.", zh: "真的太好玩了。" }
    ]
  },
  { id: "e4u6", name: "Unit 6: At the Library",
    words: [
      W("library","图书馆"), W("book","书"), W("read","读"),
      W("borrow","借"), W("return","归还"), W("quiet","安静"),
      W("card","卡片"), W("page","页"), W("story","故事"),
      W("magazine","杂志"), W("newspaper","报纸"), W("dictionary","字典"),
      W("interesting","有趣的"), W("rule","规则"), W("keep","保持")
    ],
    sentences: [
      { en: "Please keep quiet in the library.", zh: "在图书馆请保持安静。" },
      { en: "I'd like to borrow this book.", zh: "我想借这本书。" },
      { en: "When should I return it?", zh: "什么时候应该还书？" },
      { en: "This story is very interesting.", zh: "这个故事很有趣。" },
      { en: "Reading is a good habit.", zh: "阅读是一个好习惯。" }
    ]
  }
);

DATA.english["4下"].push(
  { id: "e4d4", name: "Unit 4: Helping at Home",
    words: [
      W("help","帮助"), W("clean","打扫"), W("wash","洗"),
      W("cook","做饭"), W("sweep","扫"), W("water","浇"),
      W("plant","植物"), W("dish","盘子"), W("clothes","衣服"),
      W("floor","地板"), W("kitchen","厨房"), W("garden","花园"),
      W("homework","家务"), W("often","经常"), W("always","总是")
    ],
    sentences: [
      { en: "I often help my mother at home.", zh: "我经常在家帮妈妈。" },
      { en: "Can you wash the dishes?", zh: "你能洗碗吗？" },
      { en: "I'm cleaning my room now.", zh: "我现在正在打扫我的房间。" },
      { en: "Dad is cooking dinner.", zh: "爸爸正在做晚饭。" },
      { en: "Let's water the flowers together.", zh: "我们一起浇花吧。" }
    ]
  },
  { id: "e4d5", name: "Unit 5: Making a Plan",
    words: [
      W("plan","计划"), W("will","将要"), W("tomorrow","明天"),
      W("next","下一个"), W("trip","旅行"), W("visit","参观"),
      W("museum","博物馆"), W("zoo","动物园"), W("together","一起"),
      W("time","时间"), W("place","地点"), W("weather","天气"),
      W("idea","主意"), W("great","太棒了"), W("of course","当然")
    ],
    sentences: [
      { en: "What will you do tomorrow?", zh: "你明天要做什么？" },
      { en: "I'll visit the museum with my dad.", zh: "我要和爸爸一起去博物馆。" },
      { en: "Sounds great! Can I join you?", zh: "听起来不错！我可以加入吗？" },
      { en: "Of course! Let's meet at nine.", zh: "当然可以！我们九点见。" },
      { en: "Don't forget to check the weather.", zh: "别忘了看看天气。" }
    ]
  },
  { id: "e4d6", name: "Unit 6: My Birthday Party",
    words: [
      W("birthday","生日"), W("party","聚会"), W("cake","蛋糕"),
      W("candle","蜡烛"), W("gift","礼物"), W("wish","愿望"),
      W("balloon","气球"), W("invite","邀请"), W("guest","客人"),
      W("sing","唱"), W("blow","吹"), W("share","分享"),
      W("ready","准备好"), W("special","特别的"), W("forget","忘记")
    ],
    sentences: [
      { en: "Today is my birthday.", zh: "今天是我的生日。" },
      { en: "Welcome to my party!", zh: "欢迎来我的聚会！" },
      { en: "Let's blow out the candles.", zh: "我们一起吹蜡烛吧。" },
      { en: "Make a wish before you blow.", zh: "吹之前许个愿。" },
      { en: "Thank you for the lovely gift.", zh: "谢谢你的精美礼物。" }
    ]
  }
);

DATA.english["5上"].push(
  { id: "e5u4", name: "Unit 4: At the Hospital",
    words: [
      W("hospital","医院"), W("doctor","医生"), W("nurse","护士"),
      W("patient","病人"), W("medicine","药"), W("ill","生病的"),
      W("hurt","受伤"), W("headache","头痛"), W("fever","发烧"),
      W("cough","咳嗽"), W("rest","休息"), W("temperature","体温"),
      W("better","更好"), W("worry","担心"), W("careful","小心的")
    ],
    sentences: [
      { en: "I have a bad cough.", zh: "我咳嗽得很厉害。" },
      { en: "The doctor checked my temperature.", zh: "医生给我量了体温。" },
      { en: "Take this medicine three times a day.", zh: "这药一天吃三次。" },
      { en: "You should drink more water and rest.", zh: "你应该多喝水多休息。" },
      { en: "Don't worry, you'll get better soon.", zh: "别担心，你很快就会好起来的。" }
    ]
  },
  { id: "e5u5", name: "Unit 5: Free Time",
    words: [
      W("free","空闲的"), W("hobby","爱好"), W("collect","收集"),
      W("stamp","邮票"), W("photo","照片"), W("movie","电影"),
      W("hike","徒步"), W("camp","露营"), W("fish","钓鱼"),
      W("paint","画画"), W("knit","编织"), W("magazine","杂志"),
      W("relax","放松"), W("enjoy","享受"), W("usually","通常")
    ],
    sentences: [
      { en: "What do you do in your free time?", zh: "空闲时间你做什么？" },
      { en: "I enjoy collecting stamps.", zh: "我喜欢收集邮票。" },
      { en: "We usually go hiking on weekends.", zh: "我们周末通常去远足。" },
      { en: "She loves painting and reading.", zh: "她喜欢画画和阅读。" },
      { en: "Free time helps me relax.", zh: "空闲时间帮我放松。" }
    ]
  },
  { id: "e5u6", name: "Unit 6: Weekend Plans",
    words: [
      W("weekend","周末"), W("plan","计划"), W("Saturday","星期六"),
      W("Sunday","星期日"), W("morning","早上"), W("afternoon","下午"),
      W("evening","晚上"), W("shopping","购物"), W("picnic","野餐"),
      W("party","聚会"), W("invite","邀请"), W("join","加入"),
      W("busy","忙的"), W("free","空闲"), W("maybe","也许")
    ],
    sentences: [
      { en: "What are your plans for the weekend?", zh: "你周末有什么计划？" },
      { en: "We'll have a picnic in the park.", zh: "我们要在公园野餐。" },
      { en: "Would you like to join us?", zh: "你想加入我们吗？" },
      { en: "Sorry, I'm busy on Saturday.", zh: "抱歉，我周六很忙。" },
      { en: "Maybe next time. Have fun!", zh: "也许下次吧。玩得开心！" }
    ]
  }
);

DATA.english["5下"].push(
  { id: "e5d4", name: "Unit 4: Family Stories",
    words: [
      W("grandfather","祖父"), W("grandmother","祖母"), W("childhood","童年"),
      W("memory","记忆"), W("story","故事"), W("village","村庄"),
      W("old days","过去的日子"), W("young","年轻"), W("photo","照片"),
      W("album","相册"), W("remember","记得"), W("smile","微笑"),
      W("share","分享"), W("listen","听"), W("interesting","有趣的")
    ],
    sentences: [
      { en: "Grandpa often tells me stories.", zh: "爷爷经常给我讲故事。" },
      { en: "He grew up in a small village.", zh: "他在一个小村庄长大。" },
      { en: "Look at this old family photo.", zh: "看这张老家庭照片。" },
      { en: "Childhood memories are precious.", zh: "童年的回忆很珍贵。" },
      { en: "I love listening to her stories.", zh: "我喜欢听她讲故事。" }
    ]
  },
  { id: "e5d5", name: "Unit 5: Asking for Help",
    words: [
      W("help","帮助"), W("please","请"), W("could","能"),
      W("favor","帮忙"), W("problem","问题"), W("trouble","麻烦"),
      W("solve","解决"), W("answer","答案"), W("question","问题"),
      W("kind","友善"), W("polite","礼貌的"), W("thank","谢谢"),
      W("welcome","不客气"), W("sure","当然"), W("of course","当然")
    ],
    sentences: [
      { en: "Could you do me a favor?", zh: "你能帮我个忙吗？" },
      { en: "Sure, what's the problem?", zh: "当然，什么问题？" },
      { en: "I can't solve this math question.", zh: "我解不出这道数学题。" },
      { en: "Let me help you with it.", zh: "我来帮你。" },
      { en: "Thanks a lot. You're so kind.", zh: "非常感谢。你真好心。" }
    ]
  },
  { id: "e5d6", name: "Unit 6: Sports Day",
    words: [
      W("sports day","运动会"), W("race","比赛"), W("run","跑"),
      W("jump","跳"), W("relay","接力"), W("winner","胜利者"),
      W("champion","冠军"), W("team","队"), W("cheer","欢呼"),
      W("medal","奖牌"), W("proud","骄傲的"), W("strong","强壮的"),
      W("compete","竞争"), W("try","尝试"), W("best","最好")
    ],
    sentences: [
      { en: "Our sports day is next Friday.", zh: "我们的运动会在下周五。" },
      { en: "I'll join the relay race.", zh: "我要参加接力赛。" },
      { en: "Cheer for our team!", zh: "为我们的队伍加油！" },
      { en: "He won a gold medal.", zh: "他获得了一枚金牌。" },
      { en: "Just try your best.", zh: "尽你最大的努力就行。" }
    ]
  }
);

DATA.english["6上"].push(
  { id: "e6u4", name: "Unit 4: Famous People",
    words: [
      W("famous","著名的"), W("scientist","科学家"), W("writer","作家"),
      W("artist","艺术家"), W("inventor","发明家"), W("hero","英雄"),
      W("leader","领袖"), W("president","总统"), W("invent","发明"),
      W("discover","发现"), W("create","创作"), W("admire","钦佩"),
      W("achievement","成就"), W("history","历史"), W("respect","尊重")
    ],
    sentences: [
      { en: "Einstein was a famous scientist.", zh: "爱因斯坦是位著名的科学家。" },
      { en: "He discovered the theory of relativity.", zh: "他发现了相对论。" },
      { en: "I admire her great achievements.", zh: "我钦佩她的伟大成就。" },
      { en: "Who is your hero?", zh: "你的英雄是谁？" },
      { en: "We should respect great people.", zh: "我们应该尊重伟人。" }
    ]
  },
  { id: "e6u5", name: "Unit 5: Healthy Living",
    words: [
      W("healthy","健康的"), W("exercise","锻炼"), W("balanced","均衡的"),
      W("diet","饮食"), W("vitamin","维生素"), W("calorie","卡路里"),
      W("avoid","避免"), W("junk food","垃圾食品"), W("sleep","睡眠"),
      W("stress","压力"), W("smile","微笑"), W("fresh","新鲜的"),
      W("active","活跃的"), W("lifestyle","生活方式"), W("habit","习惯")
    ],
    sentences: [
      { en: "Exercise is good for our health.", zh: "锻炼对健康有好处。" },
      { en: "Eat a balanced diet every day.", zh: "每天均衡饮食。" },
      { en: "Avoid too much junk food.", zh: "避免吃太多垃圾食品。" },
      { en: "Enough sleep keeps you fresh.", zh: "充足的睡眠让你保持精神。" },
      { en: "A healthy lifestyle starts with good habits.", zh: "健康的生活方式始于好习惯。" }
    ]
  },
  { id: "e6u6", name: "Unit 6: Comparing Things",
    words: [
      W("bigger","更大的"), W("smaller","更小的"), W("taller","更高的"),
      W("shorter","更矮的"), W("longer","更长的"), W("faster","更快的"),
      W("slower","更慢的"), W("better","更好的"), W("worse","更差的"),
      W("biggest","最大的"), W("tallest","最高的"), W("best","最好的"),
      W("than","比"), W("most","最"), W("compare","比较")
    ],
    sentences: [
      { en: "An elephant is bigger than a dog.", zh: "大象比狗大。" },
      { en: "Tom is taller than Jack.", zh: "汤姆比杰克高。" },
      { en: "This is the best book of all.", zh: "这是所有书中最好的一本。" },
      { en: "Beijing is one of the biggest cities.", zh: "北京是最大的城市之一。" },
      { en: "Which season do you like best?", zh: "你最喜欢哪个季节？" }
    ]
  }
);

DATA.english["6下"].push(
  { id: "e6d4", name: "Unit 4: Saying Goodbye",
    words: [
      W("goodbye","再见"), W("graduate","毕业"), W("graduation","毕业典礼"),
      W("miss","想念"), W("remember","记得"), W("forever","永远"),
      W("teacher","老师"), W("classmate","同学"), W("school","学校"),
      W("thank","感谢"), W("memory","回忆"), W("photo","照片"),
      W("keep","保持"), W("touch","联系"), W("future","未来")
    ],
    sentences: [
      { en: "We'll graduate from primary school soon.", zh: "我们快从小学毕业了。" },
      { en: "I'll miss all my teachers.", zh: "我会想念所有的老师。" },
      { en: "Let's keep in touch.", zh: "让我们保持联系。" },
      { en: "Thank you for everything, teacher.", zh: "谢谢您所做的一切，老师。" },
      { en: "We'll remember our school days forever.", zh: "我们会永远记得校园时光。" }
    ]
  },
  { id: "e6d5", name: "Unit 5: Past & Future",
    words: [
      W("past","过去"), W("present","现在"), W("future","未来"),
      W("change","改变"), W("technology","科技"), W("life","生活"),
      W("compare","比较"), W("now","现在"), W("then","那时"),
      W("modern","现代的"), W("ancient","古代的"), W("imagine","想象"),
      W("hope","希望"), W("wonder","好奇"), W("amazing","令人惊叹的")
    ],
    sentences: [
      { en: "Life is very different now.", zh: "现在的生活非常不同。" },
      { en: "Imagine the world fifty years ago.", zh: "想象一下五十年前的世界。" },
      { en: "Technology has changed our lives a lot.", zh: "科技极大地改变了我们的生活。" },
      { en: "What will the future be like?", zh: "未来会是什么样子？" },
      { en: "I hope the future will be even better.", zh: "我希望未来会更好。" }
    ]
  },
  { id: "e6d6", name: "Unit 6: Talents & Performances",
    words: [
      W("talent","才能"), W("show","表演"), W("perform","演出"),
      W("stage","舞台"), W("audience","观众"), W("dance","跳舞"),
      W("sing","唱歌"), W("act","表演"), W("magic","魔术"),
      W("instrument","乐器"), W("practice","练习"), W("confident","自信的"),
      W("clap","拍手"), W("applause","掌声"), W("amazing","令人惊叹的")
    ],
    sentences: [
      { en: "We'll have a talent show next week.", zh: "我们下周有一场才艺秀。" },
      { en: "She'll perform a magic trick.", zh: "她要表演一个魔术。" },
      { en: "Practice makes perfect.", zh: "熟能生巧。" },
      { en: "Be confident on the stage.", zh: "在台上要自信。" },
      { en: "The audience gave them a big applause.", zh: "观众报以热烈的掌声。" }
    ]
  }
);

/* ============================================================
   数学补充：6 年级再加综合实践 / 总复习
   ============================================================ */
DATA.math["6上"].push(
  { id: "m6u_zh1", name: "圆与百分数综合应用", range: [10, 100], ops: ["×", "÷"], percent: true,
    apps: [
      { text: "一个圆形花坛半径 4 米，扩大后半径增加 25%。新半径多少米？", expr: "4×(1+0.25)", answer: 5, unit: "米" },
      { text: "圆形水池半径 5 米。圆周长多少米？（π取3.14）", expr: "2×3.14×5", answer: 31.4, unit: "米" },
      { text: "圆面积公式：S=πr²，半径 6 厘米，面积多少？", expr: "3.14×6×6", answer: 113.04, unit: "平方厘米" },
      { text: "商店打 7 折后售价 350 元。原价多少？", expr: "350÷0.7", answer: 500, unit: "元" },
      { text: "一种商品涨价 20%，原价 80 元。现价多少？", expr: "80×(1+0.2)", answer: 96, unit: "元" }
    ]},
  { id: "m6u_zh2", name: "本学期整理与复习", range: [10, 200], ops: ["+", "-", "×", "÷"], mixed: true, secondRange: [2, 12],
    apps: [
      { text: "一袋面 25 千克，先用去 2/5，又用去 6 千克。还剩多少？", expr: "25-25×2/5-6", answer: 9, unit: "千克" },
      { text: "果园里苹果树和梨树的比是 5:3，共 96 棵。苹果树多少棵？", expr: "96×5÷8", answer: 60, unit: "棵" },
      { text: "六年级有男生 120 人，比女生多 20%。女生多少人？", expr: "120÷(1+0.2)", answer: 100, unit: "人" },
      { text: "圆形钟面直径 30 cm。钟面面积？", expr: "3.14×15×15", answer: 706.5, unit: "平方厘米" },
      { text: "一根绳子用去 3/8，剩下的比用去的多 10 米。绳子原长？", expr: "10÷(1-3/8-3/8)", answer: 40, unit: "米" }
    ]}
);

DATA.math["6下"].push(
  { id: "m6d_zh1", name: "百分数（二）综合应用", range: [10, 200], ops: ["×", "÷"], percent: true,
    apps: [
      { text: "一件商品先涨价 20% 再降价 20%，原价 100 元。现价多少？", expr: "100×1.2×0.8", answer: 96, unit: "元" },
      { text: "本金 5000 元存 2 年，年利率 3.5%。到期利息多少？", expr: "5000×0.035×2", answer: 350, unit: "元" },
      { text: "六年级共 240 人，及格率为 95%。及格人数？", expr: "240×0.95", answer: 228, unit: "人" },
      { text: "服装店打 8 折出售，售价 240 元。原价多少？", expr: "240÷0.8", answer: 300, unit: "元" },
      { text: "一种盐水含盐率 20%，水 80 克。盐多少克？", expr: "80×0.2÷0.8", answer: 20, unit: "克" }
    ]},
  { id: "m6d_zh2", name: "总复习：图形与几何", range: [1, 50], ops: ["×", "÷"], pi: true,
    apps: [
      { text: "正方体棱长 6 cm。表面积多少？", expr: "6×6×6", answer: 216, unit: "平方厘米" },
      { text: "长方体长 8、宽 5、高 4 厘米。体积？", expr: "8×5×4", answer: 160, unit: "立方厘米" },
      { text: "圆柱底面积 50 平方厘米，高 12 厘米。体积？", expr: "50×12", answer: 600, unit: "立方厘米" },
      { text: "圆锥底面积 30、高 9。体积？", expr: "30×9÷3", answer: 90, unit: "立方厘米" },
      { text: "梯形上底 6、下底 10、高 4 厘米。面积？", expr: "(6+10)×4÷2", answer: 32, unit: "平方厘米" }
    ]}
);

/* ============================================================
   语文补充：3上 与 6上 再加古诗 / 课文巩固
   ============================================================ */
DATA.chinese["3上"].push(
  { id: "c3u_add1", name: "古诗：《菊花》", type: "gushi",
    poem: { title: "菊花", author: "元稹", lines: ["秋丛绕舍似陶家，", "遍绕篱边日渐斜。", "不是花中偏爱菊，", "此花开尽更无花。"] },
    items: [
      { q: "《菊花》作者：", correct: "元稹", options: ["元稹", "王维", "白居易", "杜牧"] },
      { q: "诗中“陶家”指：", correct: "陶渊明家", options: ["陶渊明家", "做陶器的人家", "姓陶的人家", "陶土做的房子"] },
      { q: "“此花开尽更无花”的“更”意思是：", correct: "再", options: ["再", "更加", "替换", "改变"] },
      { q: "诗人偏爱菊花是因为：", correct: "菊花开后再无花", options: ["菊花开后再无花", "颜色最美", "最便宜", "花期最早"] },
      { q: "诗描写的季节：", correct: "秋", options: ["春", "夏", "秋", "冬"] }
    ]
  },
  { id: "c3u_add2", name: "古诗：《浪淘沙》(刘禹锡)", type: "gushi",
    poem: { title: "浪淘沙", author: "刘禹锡", lines: ["九曲黄河万里沙，", "浪淘风簸自天涯。", "如今直上银河去，", "同到牵牛织女家。"] },
    items: [
      { q: "《浪淘沙》作者：", correct: "刘禹锡", options: ["刘禹锡", "李白", "李贺", "苏轼"] },
      { q: "“九曲”形容黄河：", correct: "弯曲多", options: ["弯曲多", "九条河", "深九尺", "走九天"] },
      { q: "“浪淘风簸”意思是：", correct: "波浪冲刷、风浪颠簸", options: ["波浪冲刷、风浪颠簸", "下雨打雷", "山崩地裂", "风平浪静"] },
      { q: "“牵牛织女”指：", correct: "传说中的牛郎织女", options: ["传说中的牛郎织女", "种田人和织布人", "天上的星座", "牛和女子"] },
      { q: "全诗体现诗人怎样的胸怀？", correct: "想象奇特、气势宏大", options: ["想象奇特、气势宏大", "孤独愁苦", "凄凉悲伤", "平凡朴素"] }
    ]
  },
  { id: "c3u_add3", name: "课文巩固：《不懂就要问》", type: "zishi",
    items: [
      { q: "课文主人公是：", correct: "孙中山", options: ["孙中山", "鲁迅", "毛泽东", "周恩来"] },
      { q: "孙中山小时候在哪里读书？", correct: "私塾", options: ["私塾", "公立学校", "大学", "家里"] },
      { q: "他遇到不懂的地方就：", correct: "向先生提问", options: ["向先生提问", "假装明白", "记下不问", "回家再说"] },
      { q: "“糊里糊涂”的意思是：", correct: "不明白", options: ["不明白", "很聪明", "很专心", "很乖巧"] },
      { q: "课文告诉我们：", correct: "学问学问，不懂就要问", options: ["学问学问，不懂就要问", "上课不能说话", "老师永远是对的", "读书不必动脑"] },
      { q: "“先生”在课文里指：", correct: "老师", options: ["老师", "丈夫", "男士", "长辈"] }
    ]
  },
  { id: "c3u_add5", name: "古诗：《小儿垂钓》", type: "gushi",
    poem: { title: "小儿垂钓", author: "胡令能", lines: ["蓬头稚子学垂纶，", "侧坐莓苔草映身。", "路人借问遥招手，", "怕得鱼惊不应人。"] },
    items: [
      { q: "《小儿垂钓》作者：", correct: "胡令能", options: ["胡令能", "贺知章", "袁枚", "杜牧"] },
      { q: "“蓬头稚子”指的是：", correct: "头发蓬乱的小孩", options: ["头发蓬乱的小孩", "穿蓬草衣的人", "蓬莱来的孩子", "头戴帽子的孩子"] },
      { q: "“垂纶”意思是：", correct: "钓鱼", options: ["钓鱼", "织布", "采草", "捕鸟"] },
      { q: "小孩为什么“遥招手”不出声？", correct: "怕惊跑鱼", options: ["怕惊跑鱼", "认识路人", "不会说话", "嗓子哑了"] },
      { q: "“莓苔”指：", correct: "青苔", options: ["青苔", "莓子", "茅草", "树叶"] },
      { q: "全诗表现的是：", correct: "小孩钓鱼的天真专注", options: ["小孩钓鱼的天真专注", "渔夫的辛苦", "路人的热情", "山林的幽静"] }
    ]
  },
  { id: "c3u_add4", name: "课文巩固：《灰雀》", type: "zishi",
    items: [
      { q: "《灰雀》中喜爱灰雀的人物是：", correct: "列宁", options: ["列宁", "高尔基", "鲁迅", "斯大林"] },
      { q: "灰雀失踪是因为：", correct: "被男孩捉走", options: ["被男孩捉走", "飞走了", "被猫吃了", "病死了"] },
      { q: "男孩最后是否把灰雀放回？", correct: "放回了", options: ["放回了", "藏起来了", "送给了列宁", "卖掉了"] },
      { q: "列宁对男孩的态度是：", correct: "尊重和信任", options: ["尊重和信任", "严厉批评", "命令对方", "假装不知"] },
      { q: "课文告诉我们：", correct: "要诚实和爱护小动物", options: ["要诚实和爱护小动物", "不要养鸟", "要听老师的话", "要懂礼貌"] },
      { q: "“婉转地歌唱”形容灰雀的：", correct: "叫声好听", options: ["叫声好听", "羽毛漂亮", "动作灵活", "颜色鲜艳"] }
    ]
  }
);

DATA.chinese["6上"].push(
  { id: "c6u_add1", name: "课文巩固：《丁香结》", type: "zishi",
    items: [
      { q: "《丁香结》作者：", correct: "宗璞", options: ["宗璞", "老舍", "鲁迅", "巴金"] },
      { q: "“丁香结”比喻的是：", correct: "人生中的愁绪/烦恼", options: ["人生中的愁绪/烦恼", "美好的相聚", "动听的音乐", "甜蜜的回忆"] },
      { q: "课文写丁香花的颜色主要是：", correct: "白色和紫色", options: ["白色和紫色", "红色和黄色", "粉色和橘色", "黑色和金色"] },
      { q: "文章表达的人生态度是：", correct: "坦然面对烦恼，热爱生活", options: ["坦然面对烦恼，热爱生活", "拒绝任何烦恼", "悲观伤感", "事事完美"] },
      { q: "“参差”一词的意思：", correct: "长短或高低不齐", options: ["长短或高低不齐", "整整齐齐", "形状相同", "颜色一致"] },
      { q: "文中提到的古诗句多围绕：", correct: "愁与丁香", options: ["愁与丁香", "山河壮丽", "战争胜利", "节日喜庆"] }
    ]
  },
  { id: "c6u_add2", name: "课文巩固：《狼牙山五壮士》", type: "zishi",
    items: [
      { q: "“狼牙山五壮士”一共有几位？", correct: "5位", options: ["5位", "3位", "7位", "10位"] },
      { q: "五壮士最后选择：", correct: "跳下悬崖", options: ["跳下悬崖", "被俘虏", "突围回部队", "投降"] },
      { q: "五壮士保护的是：", correct: "群众和连队主力", options: ["群众和连队主力", "粮食仓库", "军用车辆", "首长"] },
      { q: "课文表现了战士怎样的精神？", correct: "英勇顽强、视死如归", options: ["英勇顽强、视死如归", "贪生怕死", "胆小怕事", "好高骛远"] },
      { q: "“屹立”意思是：", correct: "稳定地立着", options: ["稳定地立着", "倒下", "摇摇晃晃", "走来走去"] },
      { q: "课文按什么顺序叙述？", correct: "事情发展顺序", options: ["事情发展顺序", "时间倒叙", "空间转换", "人物对话"] }
    ]
  }
);

/* ============================================================
   数学补充：1上加"位置"；1-5 年级每学期再加"本学期总复习"
   ============================================================ */
DATA.math["1上"].push(
  { id: "m1u_pos", name: "位置（上下前后）", range: [1, 10], ops: ["+", "-"],
    apps: [
      { text: "书架上一共有 3 层。最上面一层放 4 本书，最下面一层放 5 本书。两层共多少本？", expr: "4+5", answer: 9, unit: "本" },
      { text: "教室里有 6 张桌子，第二排的前面是第一排。第一排有 2 张桌子，那么第二排有几张？", expr: "6-2", answer: 4, unit: "张" },
      { text: "小明前面有 3 个人，后面有 5 个人。一共有几个人？", expr: "3+1+5", answer: 9, unit: "人" },
      { text: "蛋糕上下两层共 10 块，上层比下层多 2 块。下层有几块？", expr: "(10-2)÷2", answer: 4, unit: "块" },
      { text: "8 个气球，红色在上面 3 个，其余在下面。下面有几个？", expr: "8-3", answer: 5, unit: "个" }
    ]},
  { id: "m1u_zh", name: "本学期总复习", range: [1, 20], ops: ["+", "-"],
    apps: [
      { text: "小红有 8 颗糖，妈妈又给她 5 颗。一共多少颗？", expr: "8+5", answer: 13, unit: "颗" },
      { text: "停车场有 16 辆车，开走了 7 辆。还剩几辆？", expr: "16-7", answer: 9, unit: "辆" },
      { text: "树上有 6 只鸟，又飞来 4 只，飞走 3 只。现在有几只？", expr: "6+4-3", answer: 7, unit: "只" },
      { text: "一根绳子 20 厘米，剪去 8 厘米，再剪去 5 厘米。还剩多少？", expr: "20-8-5", answer: 7, unit: "厘米" },
      { text: "小芳读 10 本书，小明读的比她少 3 本。两人一共读多少本？", expr: "10+(10-3)", answer: 17, unit: "本" }
    ]}
);

DATA.math["1下"].push(
  { id: "m1d_zh", name: "本学期总复习", range: [10, 100], ops: ["+", "-"],
    apps: [
      { text: "妈妈带 50 元，买菜花了 28 元。还剩多少元？", expr: "50-28", answer: 22, unit: "元" },
      { text: "停车场原有 36 辆车，开走 12 辆，又开来 8 辆。现在有几辆？", expr: "36-12+8", answer: 32, unit: "辆" },
      { text: "全班 45 人，男生 23 人。女生几人？", expr: "45-23", answer: 22, unit: "人" },
      { text: "图书馆借走 18 本书，还回 25 本，原有 60 本。现在有几本？", expr: "60-18+25", answer: 67, unit: "本" },
      { text: "小明 7 岁，姐姐比他大 8 岁，妈妈比姐姐大 25 岁。妈妈几岁？", expr: "7+8+25", answer: 40, unit: "岁" }
    ]}
);

DATA.math["2上"].push(
  { id: "m2u_zh", name: "本学期总复习", range: [1, 100], ops: ["+", "-", "×"], secondRange: [2, 9],
    apps: [
      { text: "每盒装 8 块饼干，4 盒一共多少块？", expr: "8×4", answer: 32, unit: "块" },
      { text: "全班 6 个小组，每组 7 人，又来了 3 个新同学。共多少人？", expr: "6×7+3", answer: 45, unit: "人" },
      { text: "妈妈买 5 个苹果，每个 3 元，付 20 元应找回多少？", expr: "20-5×3", answer: 5, unit: "元" },
      { text: "1 米 = 100 厘米。一条绳子 78 厘米，再加 22 厘米，是几米？", expr: "(78+22)÷100", answer: 1, unit: "米" },
      { text: "钟面 12 点，分针走 1 小时再回到 12 点。一共走了几分钟？", expr: "60", answer: 60, unit: "分钟" }
    ]}
);

DATA.math["2下"].push(
  { id: "m2d_zh", name: "本学期总复习", range: [1, 100], ops: ["+", "-", "×", "÷"], mixed: true, secondRange: [2, 9],
    apps: [
      { text: "36 颗糖平均分给 4 个小朋友，每人多少颗？", expr: "36÷4", answer: 9, unit: "颗" },
      { text: "面包店做了 50 个面包，上午卖了 28 个，下午卖了 15 个。还剩几个？", expr: "50-28-15", answer: 7, unit: "个" },
      { text: "1 千克苹果 6 元，妈妈买 3 千克付 20 元应找几元？", expr: "20-6×3", answer: 2, unit: "元" },
      { text: "27 个鸡蛋每盒装 4 个，最多装满几盒还剩几个？", expr: "27÷4", answer: 6, unit: "盒（余3）" },
      { text: "1 班 32 人，2 班 35 人。两班共多少？", expr: "32+35", answer: 67, unit: "人" }
    ]}
);

DATA.math["3上"].push(
  { id: "m3u_zh", name: "本学期总复习", range: [10, 1000], ops: ["+", "-", "×", "÷"], mixed: true, secondRange: [2, 9],
    apps: [
      { text: "一本书 248 页，已经看了 156 页。还剩多少页？", expr: "248-156", answer: 92, unit: "页" },
      { text: "一盒巧克力 16 块，妈妈买 5 盒共多少块？", expr: "16×5", answer: 80, unit: "块" },
      { text: "84 个学生平均分成 6 组，每组多少人？", expr: "84÷6", answer: 14, unit: "人" },
      { text: "学校操场边长 80 米，正方形周长多少？", expr: "80×4", answer: 320, unit: "米" },
      { text: "三个数 125、248、76 的和是多少？", expr: "125+248+76", answer: 449, unit: "" }
    ]}
);

DATA.math["3下"].push(
  { id: "m3d_zh", name: "本学期总复习", range: [10, 1000], ops: ["+", "-", "×", "÷"], mixed: true, secondRange: [2, 12],
    apps: [
      { text: "长方形长 12 米，宽 8 米。面积多少？", expr: "12×8", answer: 96, unit: "平方米" },
      { text: "三月有 31 天，平均 4 周还剩几天？", expr: "31-28", answer: 3, unit: "天" },
      { text: "一辆汽车每小时行 65 千米，4 小时行多少？", expr: "65×4", answer: 260, unit: "千米" },
      { text: "0.6 + 0.4 等于多少？", expr: "0.6+0.4", answer: 1, unit: "" },
      { text: "144 个苹果平均分给 12 个篮子，每篮多少个？", expr: "144÷12", answer: 12, unit: "个" }
    ]}
);

DATA.math["4上"].push(
  { id: "m4u_zh", name: "本学期总复习", range: [10, 999], ops: ["+", "-", "×", "÷"], mixed: true, secondRange: [10, 99],
    apps: [
      { text: "一辆汽车每小时行 80 千米，从北京到天津 120 千米。需要几小时？", expr: "120÷80", answer: 1.5, unit: "小时" },
      { text: "三位数乘两位数：125 × 24 = ?", expr: "125×24", answer: 3000, unit: "" },
      { text: "学校 1200 元买课桌，每张 75 元，能买几张？", expr: "1200÷75", answer: 16, unit: "张" },
      { text: "长方形长 24 米，宽是长的一半。面积多少？", expr: "24×12", answer: 288, unit: "平方米" },
      { text: "亿以内数：写出 30050008 的中文读法（输入数字答案），原数是？", expr: "30050008", answer: 30050008, unit: "" }
    ]}
);

DATA.math["4下"].push(
  { id: "m4d_zh", name: "本学期总复习", range: [10, 200], ops: ["+", "-", "×", "÷"], mixed: true, secondRange: [2, 12],
    apps: [
      { text: "三角形内角和是多少度？", expr: "180", answer: 180, unit: "度" },
      { text: "运算定律：25 × (4 × 9) 简便计算 = ?", expr: "25×4×9", answer: 900, unit: "" },
      { text: "小数：0.45 + 1.75 = ?", expr: "0.45+1.75", answer: 2.2, unit: "" },
      { text: "鸡兔同笼：共 12 个头、34 只脚。鸡有几只？", expr: "(12×4-34)÷2", answer: 7, unit: "只" },
      { text: "平均数：5 次成绩 88、92、76、80、84 的平均分？", expr: "(88+92+76+80+84)÷5", answer: 84, unit: "分" }
    ]}
);

DATA.math["5上"].push(
  { id: "m5u_zh", name: "本学期总复习", range: [10, 200], ops: ["+", "-", "×", "÷"], mixed: true, decimal: false, secondRange: [2, 12],
    apps: [
      { text: "小数乘法：2.5 × 0.8 = ?", expr: "2.5×0.8", answer: 2, unit: "" },
      { text: "小数除法：3.6 ÷ 0.4 = ?", expr: "3.6÷0.4", answer: 9, unit: "" },
      { text: "方程：3x + 5 = 20，x = ?", expr: "(20-5)÷3", answer: 5, unit: "" },
      { text: "平行四边形底 12 cm 高 8 cm。面积？", expr: "12×8", answer: 96, unit: "平方厘米" },
      { text: "梯形上底 6、下底 10、高 4 cm。面积？", expr: "(6+10)×4÷2", answer: 32, unit: "平方厘米" }
    ]}
);

DATA.math["5下"].push(
  { id: "m5d_zh", name: "本学期总复习", range: [1, 100], ops: ["+", "-", "×", "÷"], mixed: true, secondRange: [2, 12],
    apps: [
      { text: "分数加法：3/4 + 1/8 = ?（结果写小数）", expr: "0.75+0.125", answer: 0.875, unit: "" },
      { text: "长方体长 8 cm 宽 5 cm 高 4 cm。体积？", expr: "8×5×4", answer: 160, unit: "立方厘米" },
      { text: "求 24 与 36 的最大公因数。", expr: "12", answer: 12, unit: "" },
      { text: "约分：18/24 = ?（写小数）", expr: "18÷24", answer: 0.75, unit: "" },
      { text: "正方体棱长 5 cm。表面积？", expr: "5×5×6", answer: 150, unit: "平方厘米" }
    ]}
);

/* ============================================================
   语文补充：3 下加 4 章（2古诗 + 2课文巩固）
   ============================================================ */
DATA.chinese["3下"].push(
  { id: "c3d_add1", name: "古诗：《村晚》", type: "gushi",
    poem: { title: "村晚", author: "雷震", lines: ["草满池塘水满陂，", "山衔落日浸寒漪。", "牧童归去横牛背，", "短笛无腔信口吹。"] },
    items: [
      { q: "《村晚》作者：", correct: "雷震", options: ["雷震", "白居易", "杜甫", "李白"] },
      { q: "“陂”在诗中指：", correct: "池塘的岸", options: ["池塘的岸", "山坡", "桥", "树林"] },
      { q: "“山衔落日”形容：", correct: "太阳要落山", options: ["太阳要落山", "太阳刚升起", "山很高", "山被云遮"] },
      { q: "“信口吹”意思是：", correct: "随口吹奏", options: ["随口吹奏", "口对口", "用尽力吹", "认真练习"] },
      { q: "诗中主人公是：", correct: "牧童", options: ["牧童", "农夫", "老翁", "渔夫"] },
      { q: "诗描写的时间段：", correct: "傍晚", options: ["清晨", "正午", "傍晚", "深夜"] }
    ]
  },
  { id: "c3d_add2", name: "古诗：《忆江南》（其二）", type: "gushi",
    poem: { title: "忆江南·其二", author: "白居易", lines: ["江南忆，", "最忆是杭州。", "山寺月中寻桂子，", "郡亭枕上看潮头。", "何日更重游？"] },
    items: [
      { q: "《忆江南》作者：", correct: "白居易", options: ["白居易", "苏轼", "杜牧", "刘禹锡"] },
      { q: "诗人最忆的城市：", correct: "杭州", options: ["杭州", "苏州", "扬州", "南京"] },
      { q: "“山寺月中寻桂子”里寻的是：", correct: "桂花", options: ["桂花", "月亮", "兔子", "诗书"] },
      { q: "“郡亭枕上看潮头”说明诗人：", correct: "在亭中看潮", options: ["在亭中看潮", "在江中划船", "在山上行走", "在田里耕作"] },
      { q: "“何日更重游”表达的是：", correct: "盼望再去", options: ["盼望再去", "再也不去", "今天就去", "明天动身"] },
      { q: "这是一首：", correct: "词", options: ["词", "五言诗", "七言诗", "散文"] }
    ]
  },
  { id: "c3d_add3", name: "课文巩固：《燕子》", type: "zishi",
    items: [
      { q: "《燕子》的作者：", correct: "郑振铎", options: ["郑振铎", "老舍", "巴金", "冰心"] },
      { q: "课文中燕子的尾巴像：", correct: "剪刀", options: ["剪刀", "扇子", "镰刀", "树叶"] },
      { q: "课文写燕子主要在哪个季节？", correct: "春天", options: ["春天", "夏天", "秋天", "冬天"] },
      { q: "“掠过”意思是：", correct: "轻快地从上面飞过", options: ["轻快地从上面飞过", "在地上爬过", "停下来", "回头看"] },
      { q: "燕子的羽毛课文写成：", correct: "乌黑光亮", options: ["乌黑光亮", "雪白蓬松", "金黄柔软", "灰色暗淡"] },
      { q: "课文表达的感情是：", correct: "对燕子和春天的喜爱", options: ["对燕子和春天的喜爱", "对冬天的怀念", "对故乡的思念", "对学习的兴趣"] }
    ]
  },
  { id: "c3d_add4", name: "课文巩固：《肥皂泡》", type: "zishi",
    items: [
      { q: "《肥皂泡》作者：", correct: "冰心", options: ["冰心", "郑振铎", "巴金", "鲁迅"] },
      { q: "课文中“我”最喜欢做的游戏是：", correct: "吹肥皂泡", options: ["吹肥皂泡", "捉迷藏", "跳绳", "打弹珠"] },
      { q: "肥皂泡“五色的浮光”说明：", correct: "颜色变化丰富", options: ["颜色变化丰富", "只有一种颜色", "颜色暗淡", "看不清颜色"] },
      { q: "“轻清脆丽”形容肥皂泡：", correct: "美丽轻盈", options: ["美丽轻盈", "厚重坚硬", "颜色昏暗", "声音响亮"] },
      { q: "肥皂泡飞向天空时“我”心情：", correct: "充满想象与喜悦", options: ["充满想象与喜悦", "害怕惊慌", "孤单难过", "无聊厌烦"] },
      { q: "课文主题是：", correct: "童年快乐与美好幻想", options: ["童年快乐与美好幻想", "保护环境", "节约用水", "勤奋学习"] }
    ]
  }
);

/* ============================================================
   语文专项：1-2 年级拼音/识字（看字选拼音 + 看拼音选字）
   - 每章 12 题，沿用 type=pinyin / zishi
   ============================================================ */

DATA.chinese["1上"].push(
  { id: "c1u_pyA", name: "拼音专项：看字选拼音（一上）", type: "pinyin",
    items: [
      { q: "“天”读作：", correct: "tiān", options: ["tiān", "tián", "tiē", "diān"] },
      { q: "“地”读作：", correct: "dì", options: ["dì", "tì", "dé", "pí"] },
      { q: "“人”读作：", correct: "rén", options: ["rén", "yén", "lén", "niǎn"] },
      { q: "“你”读作：", correct: "nǐ", options: ["nǐ", "lǐ", "dǐ", "mǐ"] },
      { q: "“我”读作：", correct: "wǒ", options: ["wǒ", "wǎ", "ě", "mǒ"] },
      { q: "“上”读作：", correct: "shàng", options: ["shàng", "sàng", "sháng", "xiàng"] },
      { q: "“下”读作：", correct: "xià", options: ["xià", "xiā", "shà", "yà"] },
      { q: "“大”读作：", correct: "dà", options: ["dà", "tà", "dǎ", "lá"] },
      { q: "“小”读作：", correct: "xiǎo", options: ["xiǎo", "shǎo", "qiǎo", "liǎo"] },
      { q: "“山”读作：", correct: "shān", options: ["shān", "sān", "chǎn", "xiān"] },
      { q: "“水”读作：", correct: "shuǐ", options: ["shuǐ", "suǐ", "xuǐ", "cuǐ"] },
      { q: "“火”读作：", correct: "huǒ", options: ["huǒ", "hǒ", "kuǒ", "fuǒ"] }
    ]},
  { id: "c1u_zsA", name: "识字专项：看拼音选字（一上）", type: "zishi",
    items: [
      { q: "拼音“rén”对应的字是：", correct: "人", options: ["人", "仁", "任", "认"] },
      { q: "拼音“dì”对应的字是（与“天地”的“地”同字）：", correct: "地", options: ["地", "弟", "第", "帝"] },
      { q: "拼音“tiān”对应的字是（与“天空”的“天”同字）：", correct: "天", options: ["天", "田", "添", "甜"] },
      { q: "拼音“shǒu”对应的字是（如“小手”）：", correct: "手", options: ["手", "守", "首", "兽"] },
      { q: "拼音“kǒu”对应的字是（如“开口”）：", correct: "口", options: ["口", "扣", "寇", "哭"] },
      { q: "拼音“rì”对应的字是（如“日出”）：", correct: "日", options: ["日", "入", "让", "热"] },
      { q: "拼音“yuè”对应的字是（如“月亮”）：", correct: "月", options: ["月", "越", "跃", "阅"] },
      { q: "拼音“huǒ”对应的字是（如“火苗”）：", correct: "火", options: ["火", "货", "活", "或"] },
      { q: "拼音“shuǐ”对应的字是（如“喝水”）：", correct: "水", options: ["水", "谁", "睡", "税"] },
      { q: "拼音“shàng”对应的字是（如“上山”）：", correct: "上", options: ["上", "尚", "商", "伤"] },
      { q: "拼音“xià”对应的字是（如“下来”）：", correct: "下", options: ["下", "夏", "吓", "厦"] },
      { q: "拼音“ér”对应的字是（如“儿子”）：", correct: "儿", options: ["儿", "而", "二", "耳"] }
    ]}
);

DATA.chinese["1下"].push(
  { id: "c1d_pyA", name: "拼音专项：看字选拼音（一下）", type: "pinyin",
    items: [
      { q: "“春”读作：", correct: "chūn", options: ["chūn", "chuān", "cūn", "chōng"] },
      { q: "“夏”读作：", correct: "xià", options: ["xià", "shà", "yà", "qià"] },
      { q: "“秋”读作：", correct: "qiū", options: ["qiū", "qiōu", "chiū", "jiū"] },
      { q: "“冬”读作：", correct: "dōng", options: ["dōng", "tōng", "lōng", "kōng"] },
      { q: "“雪”读作：", correct: "xuě", options: ["xuě", "shuě", "suě", "xié"] },
      { q: "“雨”读作：", correct: "yǔ", options: ["yǔ", "wǔ", "lǔ", "hǔ"] },
      { q: "“风”读作：", correct: "fēng", options: ["fēng", "fōng", "pēng", "hōng"] },
      { q: "“花”读作：", correct: "huā", options: ["huā", "fā", "kā", "xuā"] },
      { q: "“鸟”读作：", correct: "niǎo", options: ["niǎo", "liǎo", "diǎo", "miǎo"] },
      { q: "“鱼”读作：", correct: "yú", options: ["yú", "wú", "lú", "xú"] },
      { q: "“草”读作：", correct: "cǎo", options: ["cǎo", "chǎo", "sǎo", "zǎo"] },
      { q: "“树”读作：", correct: "shù", options: ["shù", "sù", "zhù", "xù"] }
    ]},
  { id: "c1d_zsA", name: "识字专项：看拼音选字（短语 · 一下）", type: "zishi",
    items: [
      { q: "短语“春风（chuī）面”括号里的字是：", correct: "吹", options: ["吹", "推", "催", "锤"] },
      { q: "短语“鸟语花（xiāng）”括号里的字是：", correct: "香", options: ["香", "乡", "相", "想"] },
      { q: "短语“春暖花（kāi）”括号里的字是：", correct: "开", options: ["开", "海", "该", "凯"] },
      { q: "短语“飞（jī）满天”括号里的字是：", correct: "机", options: ["机", "鸡", "击", "极"] },
      { q: "短语“池中的小（yú）”括号里的字是：", correct: "鱼", options: ["鱼", "余", "雨", "与"] },
      { q: "短语“一只小（māo）”括号里的字是：", correct: "猫", options: ["猫", "毛", "锚", "帽"] },
      { q: "短语“五星红（qí）”括号里的字是：", correct: "旗", options: ["旗", "棋", "奇", "骑"] },
      { q: "短语“大（hǎi）边”括号里的字是：", correct: "海", options: ["海", "还", "该", "害"] },
      { q: "短语“一支（bǐ）”括号里的字是：", correct: "笔", options: ["笔", "比", "必", "闭"] },
      { q: "短语“（tóu）发漂亮”括号里的字是：", correct: "头", options: ["头", "投", "偷", "透"] },
      { q: "短语“（mā）妈你好”括号里的字是：", correct: "妈", options: ["妈", "麻", "马", "骂"] },
      { q: "短语“弟弟很（guāi）”括号里的字是：", correct: "乖", options: ["乖", "怪", "拐", "怀"] }
    ]}
);

DATA.chinese["2上"].push(
  { id: "c2u_pyA", name: "拼音专项：看字选拼音（二上）", type: "pinyin",
    items: [
      { q: "“瀑”（瀑布）读作：", correct: "pù", options: ["pù", "bào", "bù", "pō"] },
      { q: "“登”（登山）读作：", correct: "dēng", options: ["dēng", "dèn", "téng", "chēng"] },
      { q: "“鹳”（鹳雀楼）读作：", correct: "guàn", options: ["guàn", "huān", "hè", "quān"] },
      { q: "“敕”（敕勒歌）读作：", correct: "chì", options: ["chì", "cè", "shè", "lì"] },
      { q: "“勒”（勒住）读作：", correct: "lè", options: ["lè", "lā", "là", "léi"] },
      { q: "“撑”（撑伞）读作：", correct: "chēng", options: ["chēng", "chèn", "chěn", "shēng"] },
      { q: "“曹”（曹冲）读作：", correct: "cáo", options: ["cáo", "zǎo", "cōu", "sào"] },
      { q: "“蝌”（蝌蚪）读作：", correct: "kē", options: ["kē", "ké", "kě", "kè"] },
      { q: "“蚪”（蝌蚪）读作：", correct: "dǒu", options: ["dǒu", "tóu", "dú", "tǒu"] },
      { q: "“蹦”（蹦跳）读作：", correct: "bèng", options: ["bèng", "pèng", "mèng", "fēng"] },
      { q: "“辉”（光辉）读作：", correct: "huī", options: ["huī", "kuī", "fēi", "shuī"] },
      { q: "“枫”（枫叶）读作：", correct: "fēng", options: ["fēng", "féng", "fěng", "fèng"] }
    ]},
  { id: "c2u_zsA", name: "识字专项：看拼音选字（短语 · 二上）", type: "zishi",
    items: [
      { q: "古诗“（shān）行”括号里的字是：", correct: "山", options: ["山", "删", "衫", "杉"] },
      { q: "短语“望（lú）山瀑布”括号里的字是：", correct: "庐", options: ["庐", "卢", "鲁", "路"] },
      { q: "短语“江（xuě）独钓”括号里的字是：", correct: "雪", options: ["雪", "学", "削", "血"] },
      { q: "短语“望（dòng）庭”括号里的字是：", correct: "洞", options: ["洞", "动", "懂", "冻"] },
      { q: "短语“春（fēng）拂面”括号里的字是：", correct: "风", options: ["风", "蜂", "封", "锋"] },
      { q: "短语“一年一（dù）”括号里的字是：", correct: "度", options: ["度", "杜", "渡", "妒"] },
      { q: "短语“凉州（cí）”括号里的字是：", correct: "词", options: ["词", "慈", "此", "辞"] },
      { q: "短语“晓出净（cí）寺”括号里的字是：", correct: "慈", options: ["慈", "词", "兹", "雌"] },
      { q: "短语“江南（féng）李龟年”括号里的字是：", correct: "逢", options: ["逢", "缝", "蜂", "风"] },
      { q: "短语“小蝌蚪找（mā）妈”括号里的字是：", correct: "妈", options: ["妈", "麻", "马", "骂"] },
      { q: "短语“曹（chōng）称象”括号里的字是：", correct: "冲", options: ["冲", "充", "宠", "崇"] },
      { q: "短语“植物（mā）妈”括号里的字是：", correct: "妈", options: ["妈", "马", "麻", "码"] }
    ]}
);

DATA.chinese["2下"].push(
  { id: "c2d_pyA", name: "拼音专项：看字选拼音（二下）", type: "pinyin",
    items: [
      { q: "“贝”（贝壳）读作：", correct: "bèi", options: ["bèi", "pèi", "bēi", "mèi"] },
      { q: "“传”（传统）读作：", correct: "chuán", options: ["chuán", "zhuàn", "chán", "quán"] },
      { q: "“统”（统一）读作：", correct: "tǒng", options: ["tǒng", "dǒng", "tóng", "cǒng"] },
      { q: "“雷”（打雷）读作：", correct: "léi", options: ["léi", "lèi", "nèi", "fēi"] },
      { q: "“湾”（海湾）读作：", correct: "wān", options: ["wān", "wáng", "wǎn", "huán"] },
      { q: "“姨”（阿姨）读作：", correct: "yí", options: ["yí", "yī", "yǐ", "yì"] },
      { q: "“舅”（舅舅）读作：", correct: "jiù", options: ["jiù", "jiǔ", "qiú", "xiù"] },
      { q: "“嫦”（嫦娥）读作：", correct: "cháng", options: ["cháng", "shàng", "sháng", "chàng"] },
      { q: "“娥”（嫦娥）读作：", correct: "é", options: ["é", "wǒ", "wō", "ně"] },
      { q: "“拨”（拨开）读作：", correct: "bō", options: ["bō", "fā", "pō", "pā"] },
      { q: "“鸳”（鸳鸯）读作：", correct: "yuān", options: ["yuān", "yuǎn", "yǎn", "yān"] },
      { q: "“鸯”（鸳鸯）读作：", correct: "yāng", options: ["yāng", "yáng", "yīng", "āng"] }
    ]},
  { id: "c2d_zsA", name: "识字专项：看拼音选字（句子 · 二下）", type: "zishi",
    items: [
      { q: "句子“（léi）声大作”括号里的字是：", correct: "雷", options: ["雷", "累", "泪", "蕾"] },
      { q: "句子“春风又（lǜ）江南岸”括号里的字是：", correct: "绿", options: ["绿", "律", "旅", "虑"] },
      { q: "句子“端午吃（zòng）子”括号里的字是：", correct: "粽", options: ["粽", "综", "总", "中"] },
      { q: "句子“八月十五（zhōng）秋节”括号里的字是：", correct: "中", options: ["中", "终", "钟", "忠"] },
      { q: "句子“阿（yí）家来”括号里的字是：", correct: "姨", options: ["姨", "一", "移", "衣"] },
      { q: "句子“（jiù）舅来访”括号里的字是：", correct: "舅", options: ["舅", "旧", "救", "就"] },
      { q: "句子“喜（què）登枝”括号里的字是：", correct: "鹊", options: ["鹊", "雀", "确", "缺"] },
      { q: "句子“（tù）儿乖巧”括号里的字是：", correct: "兔", options: ["兔", "突", "图", "涂"] },
      { q: "句子“春暖花（kāi）”括号里的字是：", correct: "开", options: ["开", "该", "海", "凯"] },
      { q: "句子“（yàn）子归来”括号里的字是：", correct: "燕", options: ["燕", "验", "厌", "砚"] },
      { q: "句子“万紫千（hóng）”括号里的字是：", correct: "红", options: ["红", "鸿", "洪", "弘"] },
      { q: "句子“雨（hòu）天晴”括号里的字是：", correct: "后", options: ["后", "厚", "候", "喉"] }
    ]}
);

/* ============================================================
   语文专项扩充：1-2 年级再加 12 章拼音/识字（每章 35 题）
   - 拼音综合训练：拼音规则 + 字音 + 多音字 + 声调
   - 同音/形近字辨析
   - 看拼音选字（短语 / 句子场景）
   ============================================================ */

DATA.chinese["1上"].push(
  { id: "c1u_pyD", name: "拼音综合训练（一上）", type: "pinyin",
    items: [
      { q: "下列哪个是单韵母？", correct: "a", options: ["a", "ai", "an", "ang"] },
      { q: "下列哪个是复韵母？", correct: "ai", options: ["ai", "a", "m", "zh"] },
      { q: "下列哪个是前鼻韵母？", correct: "an", options: ["an", "ang", "iao", "ie"] },
      { q: "下列哪个是后鼻韵母？", correct: "ang", options: ["ang", "an", "in", "un"] },
      { q: "下列哪个是整体认读音节？", correct: "zhi", options: ["zhi", "zh", "zo", "zu"] },
      { q: "下列哪个是声母？", correct: "m", options: ["m", "a", "an", "ai"] },
      { q: "“b”和“p”的主要区别是：", correct: "是否送气", options: ["是否送气", "声调", "笔画", "韵母"] },
      { q: "“n”和“l”的区别：", correct: "鼻音和边音", options: ["鼻音和边音", "送气", "声调", "翘舌"] },
      { q: "“z、c、s”是：", correct: "平舌音", options: ["平舌音", "翘舌音", "鼻音", "送气音"] },
      { q: "“zh、ch、sh”是：", correct: "翘舌音", options: ["翘舌音", "平舌音", "鼻音", "送气音"] },
      { q: "“j、q、x”和“ü”相拼时，ü 上两点：", correct: "要省略", options: ["要省略", "不能省", "写成 u", "写成 o"] },
      { q: "给“花”注音：", correct: "huā", options: ["huā", "hā", "fā", "xuā"] },
      { q: "给“草”注音：", correct: "cǎo", options: ["cǎo", "zǎo", "sǎo", "chǎo"] },
      { q: "给“鸟”注音：", correct: "niǎo", options: ["niǎo", "liǎo", "miǎo", "diǎo"] },
      { q: "给“鱼”注音：", correct: "yú", options: ["yú", "wú", "lú", "xú"] },
      { q: "给“云”注音：", correct: "yún", options: ["yún", "yīn", "yǔn", "wén"] },
      { q: "“马”是第几声？", correct: "三声", options: ["一声", "二声", "三声", "四声"] },
      { q: "“妈”是第几声？", correct: "一声", options: ["一声", "二声", "三声", "四声"] },
      { q: "“麻”是第几声？", correct: "二声", options: ["一声", "二声", "三声", "四声"] },
      { q: "“骂”是第几声？", correct: "四声", options: ["一声", "二声", "三声", "四声"] },
      { q: "“笔”是第几声？", correct: "三声", options: ["一声", "二声", "三声", "四声"] },
      { q: "“树”是第几声？", correct: "四声", options: ["一声", "二声", "三声", "四声"] },
      { q: "“山”是第几声？", correct: "一声", options: ["一声", "二声", "三声", "四声"] },
      { q: "“海”是第几声？", correct: "三声", options: ["一声", "二声", "三声", "四声"] },
      { q: "“好”在“好的”中读：", correct: "hǎo", options: ["hǎo", "hào", "hāo", "hé"] },
      { q: "“好”在“爱好”中读：", correct: "hào", options: ["hào", "hǎo", "hāo", "hé"] },
      { q: "“长”在“长城”中读：", correct: "cháng", options: ["cháng", "zhǎng", "zhàng", "chàng"] },
      { q: "“长”在“长大”中读：", correct: "zhǎng", options: ["zhǎng", "cháng", "zhàng", "chàng"] },
      { q: "“了”在“走了”中读：", correct: "le", options: ["le", "liǎo", "lè", "léi"] },
      { q: "“了”在“了解”中读：", correct: "liǎo", options: ["liǎo", "le", "lè", "léi"] },
      { q: "“乐”在“快乐”中读：", correct: "lè", options: ["lè", "yuè", "lào", "luò"] },
      { q: "“乐”在“音乐”中读：", correct: "yuè", options: ["yuè", "lè", "yào", "yuē"] },
      { q: "“和”在“我和你”中读：", correct: "hé", options: ["hé", "hè", "huó", "huò"] },
      { q: "下列哪个不是单韵母？", correct: "ai", options: ["ai", "a", "o", "e"] },
      { q: "下列哪个不是声母？", correct: "ai", options: ["ai", "b", "d", "m"] }
    ]},
  { id: "c1u_zsD", name: "同音/形近字辨析（一上）", type: "zishi",
    items: [
      { q: "句子“我今天（  ）家”应填：", correct: "在", options: ["在", "再", "才", "也"] },
      { q: "句子“明天（  ）来”应填：", correct: "再", options: ["再", "在", "才", "也"] },
      { q: "句子“妈妈说话”中“妈妈”用代词应是：", correct: "她", options: ["她", "他", "它", "也"] },
      { q: "句子“爸爸去上班”中“爸爸”用代词应是：", correct: "他", options: ["他", "她", "它", "那"] },
      { q: "句子“小狗摇尾巴，（  ）真可爱”应填：", correct: "它", options: ["它", "他", "她", "也"] },
      { q: "词语“做工”用：", correct: "做", options: ["做", "作", "坐", "座"] },
      { q: "词语“作业”用：", correct: "作", options: ["作", "做", "坐", "座"] },
      { q: "词语“请坐下”用：", correct: "坐", options: ["坐", "座", "做", "作"] },
      { q: "词语“一座山”用：", correct: "座", options: ["座", "坐", "做", "作"] },
      { q: "词语“已经”用：", correct: "已", options: ["已", "己", "巳", "异"] },
      { q: "词语“自己”用：", correct: "己", options: ["己", "已", "巳", "异"] },
      { q: "词语“末尾”用：", correct: "末", options: ["末", "未", "木", "本"] },
      { q: "词语“未来”用：", correct: "未", options: ["未", "末", "木", "本"] },
      { q: "数字“一千”用：", correct: "千", options: ["千", "干", "于", "午"] },
      { q: "“树干”用：", correct: "干", options: ["干", "千", "十", "午"] },
      { q: "“工作”用：", correct: "工", options: ["工", "弓", "公", "红"] },
      { q: "“弓箭”用：", correct: "弓", options: ["弓", "工", "公", "穷"] },
      { q: "“公园”用：", correct: "公", options: ["公", "工", "弓", "红"] },
      { q: "表示太阳的字是：", correct: "日", options: ["日", "曰", "目", "田"] },
      { q: "“曰”的意思是：", correct: "说", options: ["说", "太阳", "月亮", "田"] },
      { q: "表示眼睛的字是：", correct: "目", options: ["目", "日", "白", "田"] },
      { q: "表示田地的字是：", correct: "田", options: ["田", "日", "目", "曰"] },
      { q: "“千”和“干”：哪个是数字？", correct: "千", options: ["千", "干", "于", "午"] },
      { q: "“土”和“士”：表示泥土的是？", correct: "土", options: ["土", "士", "王", "玉"] },
      { q: "“士”表示：", correct: "人", options: ["人", "泥土", "月亮", "田"] },
      { q: "“鸟”和“乌”：表黑色的是？", correct: "乌", options: ["乌", "鸟", "凫", "鸣"] },
      { q: "“白”加一横可能变成：", correct: "百", options: ["百", "自", "伯", "白"] },
      { q: "“口”加一横可能变成：", correct: "日", options: ["日", "月", "田", "口"] },
      { q: "表示桌子的字（古义）：", correct: "几", options: ["几", "凡", "丸", "九"] },
      { q: "“丸”读：", correct: "wán", options: ["wán", "wǎn", "yuán", "yuǎn"] },
      { q: "“了”加一笔可能变成：", correct: "子", options: ["子", "孑", "孒", "孓"] },
      { q: "“刀”和“力”：用来切东西的是？", correct: "刀", options: ["刀", "力", "刁", "勿"] },
      { q: "“人”加一笔可能变成：", correct: "大", options: ["大", "入", "八", "个"] },
      { q: "“天”和“夫”：上面有撇的是？", correct: "夫", options: ["夫", "天", "无", "失"] },
      { q: "“朋”由两个什么字组成？", correct: "月", options: ["月", "日", "目", "田"] }
    ]},
  { id: "c1u_zsE", name: "看拼音选字 · 句子场景（一上）", type: "zishi",
    items: [
      { q: "句子“我（zài）家”括号里的字：", correct: "在", options: ["在", "再", "才", "也"] },
      { q: "句子“小（māo）抓老鼠”括号里的字：", correct: "猫", options: ["猫", "毛", "锚", "帽"] },
      { q: "句子“（mā）妈做饭”括号里的字：", correct: "妈", options: ["妈", "麻", "马", "骂"] },
      { q: "句子“天气真（hǎo）”括号里的字：", correct: "好", options: ["好", "号", "豪", "嚎"] },
      { q: "句子“红色的（huā）”括号里的字：", correct: "花", options: ["花", "华", "化", "划"] },
      { q: "句子“一只小（niǎo）”括号里的字：", correct: "鸟", options: ["鸟", "了", "乌", "与"] },
      { q: "句子“喝一杯（shuǐ）”括号里的字：", correct: "水", options: ["水", "谁", "睡", "税"] },
      { q: "句子“爬山真（lèi）”括号里的字：", correct: "累", options: ["累", "雷", "泪", "类"] },
      { q: "句子“放（fēng）筝”括号里的字：", correct: "风", options: ["风", "封", "锋", "丰"] },
      { q: "句子“看图说（huà）”括号里的字：", correct: "话", options: ["话", "华", "画", "化"] },
      { q: "句子“画一幅（huà）”括号里的字：", correct: "画", options: ["画", "话", "华", "化"] },
      { q: "句子“明天星期（rì）”括号里的字：", correct: "日", options: ["日", "入", "中", "六"] },
      { q: "句子“月亮（liàng）了”括号里的字：", correct: "亮", options: ["亮", "凉", "良", "谅"] },
      { q: "句子“我有一支（bǐ）”括号里的字：", correct: "笔", options: ["笔", "比", "必", "闭"] },
      { q: "句子“耳朵能听（jiàn）”括号里的字：", correct: "见", options: ["见", "件", "建", "健"] },
      { q: "句子“小（shǒu）真灵巧”括号里的字：", correct: "手", options: ["手", "守", "首", "兽"] },
      { q: "句子“妈妈牵着我的（shǒu）”括号里的字：", correct: "手", options: ["手", "守", "首", "兽"] },
      { q: "句子“小（gǒu）汪汪叫”括号里的字：", correct: "狗", options: ["狗", "苟", "勾", "沟"] },
      { q: "句子“老（hǔ）很凶”括号里的字：", correct: "虎", options: ["虎", "户", "护", "沪"] },
      { q: "句子“金色的（qiū）天”括号里的字：", correct: "秋", options: ["秋", "球", "求", "丘"] },
      { q: "句子“（tài）阳出来了”括号里的字：", correct: "太", options: ["太", "汰", "态", "抬"] },
      { q: "句子“妹妹（kū）了”括号里的字：", correct: "哭", options: ["哭", "苦", "枯", "库"] },
      { q: "句子“弟弟在（xiào）”括号里的字：", correct: "笑", options: ["笑", "校", "孝", "效"] },
      { q: "句子“（chī）饭”括号里的字：", correct: "吃", options: ["吃", "痴", "池", "赤"] },
      { q: "句子“喝（chá）”括号里的字：", correct: "茶", options: ["茶", "差", "查", "察"] },
      { q: "句子“（kàn）书”括号里的字：", correct: "看", options: ["看", "砍", "堪", "侃"] },
      { q: "句子“听（gē）”括号里的字：", correct: "歌", options: ["歌", "哥", "割", "格"] },
      { q: "句子“打球真好（wán）”括号里的字：", correct: "玩", options: ["玩", "完", "丸", "顽"] },
      { q: "句子“妹妹很（kě）爱”括号里的字：", correct: "可", options: ["可", "渴", "克", "课"] },
      { q: "句子“我去公园（wán）”括号里的字：", correct: "玩", options: ["玩", "完", "丸", "顽"] },
      { q: "句子“（kāi）始上课”括号里的字：", correct: "开", options: ["开", "海", "该", "凯"] },
      { q: "句子“放学回（jiā）”括号里的字：", correct: "家", options: ["家", "夹", "加", "佳"] },
      { q: "句子“妈妈很爱（wǒ）”括号里的字：", correct: "我", options: ["我", "卧", "握", "窝"] },
      { q: "句子“天上有（yún）”括号里的字：", correct: "云", options: ["云", "运", "晕", "匀"] },
      { q: "句子“画一只（yú）”括号里的字：", correct: "鱼", options: ["鱼", "余", "雨", "与"] }
    ]}
);

DATA.chinese["1下"].push(
  { id: "c1d_pyD", name: "拼音综合训练（一下）", type: "pinyin",
    items: [
      { q: "“桃”读：", correct: "táo", options: ["táo", "tāo", "dào", "dáo"] },
      { q: "“燕”读：", correct: "yàn", options: ["yàn", "yīn", "yǎn", "yán"] },
      { q: "“莺”读：", correct: "yīng", options: ["yīng", "yāng", "yìng", "yán"] },
      { q: "“蜂”读：", correct: "fēng", options: ["fēng", "fèng", "féng", "pēng"] },
      { q: "“蝶”读：", correct: "dié", options: ["dié", "diē", "déi", "tié"] },
      { q: "“贼”读：", correct: "zéi", options: ["zéi", "zé", "zhèi", "zhā"] },
      { q: "“宿”在“宿舍”中读：", correct: "sù", options: ["sù", "shù", "xiǔ", "xiù"] },
      { q: "“宿”在“一宿”中读：", correct: "xiǔ", options: ["xiǔ", "sù", "xiù", "shù"] },
      { q: "“几”在“几个”中读：", correct: "jǐ", options: ["jǐ", "jī", "qī", "qǐ"] },
      { q: "“几”在“几乎”中读：", correct: "jī", options: ["jī", "jǐ", "qī", "qǐ"] },
      { q: "“种”在“种树”中读：", correct: "zhòng", options: ["zhòng", "zhǒng", "chóng", "cōng"] },
      { q: "“种”在“种子”中读：", correct: "zhǒng", options: ["zhǒng", "zhòng", "chóng", "cōng"] },
      { q: "“圈”在“圆圈”中读：", correct: "quān", options: ["quān", "juàn", "jiūn", "quǎn"] },
      { q: "“圈”在“猪圈”中读：", correct: "juàn", options: ["juàn", "quān", "jiùn", "quǎn"] },
      { q: "“扇”在“扇子”中读：", correct: "shàn", options: ["shàn", "shān", "sàn", "shǎn"] },
      { q: "“扇”在“扇动”中读：", correct: "shān", options: ["shān", "shàn", "sàn", "shǎn"] },
      { q: "“倒”在“倒下”中读：", correct: "dǎo", options: ["dǎo", "dào", "tǎo", "dōu"] },
      { q: "“倒”在“倒水”中读：", correct: "dào", options: ["dào", "dǎo", "tǎo", "dōu"] },
      { q: "“藏”在“躲藏”中读：", correct: "cáng", options: ["cáng", "zàng", "càng", "zhàng"] },
      { q: "“藏”在“宝藏”中读：", correct: "zàng", options: ["zàng", "cáng", "càng", "zhàng"] },
      { q: "“为”在“因为”中读：", correct: "wèi", options: ["wèi", "wéi", "wěi", "wèn"] },
      { q: "“为”在“行为”中读：", correct: "wéi", options: ["wéi", "wèi", "wěi", "wèn"] },
      { q: "“教”在“教书”中读：", correct: "jiāo", options: ["jiāo", "jiào", "qiáo", "qiào"] },
      { q: "“教”在“教室”中读：", correct: "jiào", options: ["jiào", "jiāo", "qiáo", "qiào"] },
      { q: "“都”在“全都”中读：", correct: "dōu", options: ["dōu", "dū", "tōu", "duò"] },
      { q: "“都”在“首都”中读：", correct: "dū", options: ["dū", "dōu", "tōu", "duò"] },
      { q: "“处”在“处理”中读：", correct: "chǔ", options: ["chǔ", "chù", "zhǔ", "zhù"] },
      { q: "“处”在“住处”中读：", correct: "chù", options: ["chù", "chǔ", "zhǔ", "zhù"] },
      { q: "“应”在“应该”中读：", correct: "yīng", options: ["yīng", "yìng", "yīn", "yǐn"] },
      { q: "“应”在“答应”中读：", correct: "yìng", options: ["yìng", "yīng", "yīn", "yǐn"] },
      { q: "“假”在“放假”中读：", correct: "jià", options: ["jià", "jiǎ", "qià", "xià"] },
      { q: "“假”在“真假”中读：", correct: "jiǎ", options: ["jiǎ", "jià", "qià", "xià"] },
      { q: "“曲”在“歌曲”中读：", correct: "qǔ", options: ["qǔ", "qū", "qiū", "qiú"] },
      { q: "“曲”在“弯曲”中读：", correct: "qū", options: ["qū", "qǔ", "qiū", "qiú"] },
      { q: "“觉”在“睡觉”中读：", correct: "jiào", options: ["jiào", "jué", "jiāo", "jiǎo"] }
    ]},
  { id: "c1d_zsD", name: "同音/形近字辨析（一下）", type: "zishi",
    items: [
      { q: "“今天我在家”应填：", correct: "在", options: ["在", "再", "才", "也"] },
      { q: "“明天再来”应填：", correct: "再", options: ["再", "在", "才", "也"] },
      { q: "“做饭”应填：", correct: "做", options: ["做", "作", "坐", "座"] },
      { q: "“作业”应填：", correct: "作", options: ["作", "做", "坐", "座"] },
      { q: "“坐下”应填：", correct: "坐", options: ["坐", "座", "做", "作"] },
      { q: "“一座楼”应填：", correct: "座", options: ["座", "坐", "做", "作"] },
      { q: "“小狗它在跑”应填：", correct: "它", options: ["它", "他", "她", "那"] },
      { q: "“姐姐她在看书”应填：", correct: "她", options: ["她", "他", "它", "那"] },
      { q: "“已经”应填：", correct: "已", options: ["已", "己", "巳", "异"] },
      { q: "“自己”应填：", correct: "己", options: ["己", "已", "巳", "异"] },
      { q: "“末尾”应填：", correct: "末", options: ["末", "未", "木", "本"] },
      { q: "“未来”应填：", correct: "未", options: ["未", "末", "木", "本"] },
      { q: "“一千米”应填：", correct: "千", options: ["千", "干", "于", "午"] },
      { q: "“干活”应填：", correct: "干", options: ["干", "千", "十", "午"] },
      { q: "“黄金”应填：", correct: "金", options: ["金", "全", "合", "今"] },
      { q: "“全部”应填：", correct: "全", options: ["全", "金", "合", "今"] },
      { q: "“进入”应填：", correct: "进", options: ["进", "近", "迅", "迁"] },
      { q: "“附近”应填：", correct: "近", options: ["近", "进", "迅", "迁"] },
      { q: "“方向”应填：", correct: "向", options: ["向", "项", "响", "想"] },
      { q: "“想念”应填：", correct: "想", options: ["想", "响", "向", "相"] },
      { q: "“声响”应填：", correct: "响", options: ["响", "想", "向", "相"] },
      { q: "“好像”应填：", correct: "像", options: ["像", "象", "相", "向"] },
      { q: "“大象”应填：", correct: "象", options: ["象", "像", "相", "向"] },
      { q: "“明亮”应填：", correct: "亮", options: ["亮", "凉", "良", "谅"] },
      { q: "“凉爽”应填：", correct: "凉", options: ["凉", "亮", "良", "谅"] },
      { q: "“买东西”应填：", correct: "买", options: ["买", "卖", "麦", "迈"] },
      { q: "“卖菜”应填：", correct: "卖", options: ["卖", "买", "麦", "迈"] },
      { q: "“公园”应填：", correct: "园", options: ["园", "圆", "源", "缘"] },
      { q: "“圆形”应填：", correct: "圆", options: ["圆", "园", "源", "缘"] },
      { q: "“穿衣服”应填：", correct: "穿", options: ["穿", "川", "船", "钏"] },
      { q: "“四川”应填：", correct: "川", options: ["川", "穿", "船", "钏"] },
      { q: "“请客”应填：", correct: "请", options: ["请", "清", "晴", "情"] },
      { q: "“清水”应填：", correct: "清", options: ["清", "请", "晴", "情"] },
      { q: "“晴天”应填：", correct: "晴", options: ["晴", "情", "清", "请"] },
      { q: "“感情”应填：", correct: "情", options: ["情", "晴", "清", "请"] }
    ]},
  { id: "c1d_zsE", name: "看拼音选字 · 句子场景（一下）", type: "zishi",
    items: [
      { q: "“春风又（lǜ）江南岸”括号字：", correct: "绿", options: ["绿", "律", "旅", "虑"] },
      { q: "“（hú）水清清”括号字：", correct: "湖", options: ["湖", "壶", "糊", "胡"] },
      { q: "“桃（huā）盛开”括号字：", correct: "花", options: ["花", "华", "化", "画"] },
      { q: "“（liǔ）枝随风”括号字：", correct: "柳", options: ["柳", "榴", "留", "流"] },
      { q: "“燕子飞（lái）”括号字：", correct: "来", options: ["来", "赖", "莱", "睐"] },
      { q: "“（chí）塘清清”括号字：", correct: "池", options: ["池", "迟", "驰", "弛"] },
      { q: "“草地真（lǜ）”括号字：", correct: "绿", options: ["绿", "旅", "律", "录"] },
      { q: "“（xiǎo）池里有鱼”括号字：", correct: "小", options: ["小", "笑", "晓", "筱"] },
      { q: "“（dà）海无边”括号字：", correct: "大", options: ["大", "达", "答", "打"] },
      { q: "“（fēi）机起飞”括号字：", correct: "飞", options: ["飞", "非", "啡", "菲"] },
      { q: "“知（liǎo）了在叫”括号字：", correct: "了", options: ["了", "鸟", "鸢", "鹭"] },
      { q: "“（chí）上有荷花”括号字：", correct: "池", options: ["池", "迟", "驰", "弛"] },
      { q: "“（tài）阳很大”括号字：", correct: "太", options: ["太", "汰", "态", "抬"] },
      { q: "“下（yǔ）了”括号字：", correct: "雨", options: ["雨", "语", "羽", "与"] },
      { q: "“（xià）雨打伞”括号字：", correct: "下", options: ["下", "夏", "吓", "虾"] },
      { q: "“（chī）西瓜”括号字：", correct: "吃", options: ["吃", "痴", "池", "赤"] },
      { q: "“（pǎo）步真累”括号字：", correct: "跑", options: ["跑", "抛", "泡", "袍"] },
      { q: "“唱（gē）跳舞”括号字：", correct: "歌", options: ["歌", "格", "哥", "葛"] },
      { q: "“穿（yī）服”括号字：", correct: "衣", options: ["衣", "医", "依", "伊"] },
      { q: "“戴帽（zǐ）”括号字：", correct: "子", options: ["子", "紫", "字", "籽"] },
      { q: "“刷（yá）”括号字：", correct: "牙", options: ["牙", "呀", "丫", "芽"] },
      { q: "“（xǐ）手”括号字：", correct: "洗", options: ["洗", "喜", "玺", "系"] },
      { q: "“（wèn）问题”括号字：", correct: "问", options: ["问", "闻", "纹", "瘟"] },
      { q: "“（jiào）老师”括号字：", correct: "叫", options: ["叫", "教", "觉", "较"] },
      { q: "“（kàn）电视”括号字：", correct: "看", options: ["看", "砍", "堪", "侃"] },
      { q: "“（xiě）字”括号字：", correct: "写", options: ["写", "谢", "卸", "泻"] },
      { q: "“（ná）书”括号字：", correct: "拿", options: ["拿", "那", "纳", "呐"] },
      { q: "“（chàng）歌”括号字：", correct: "唱", options: ["唱", "常", "长", "厂"] },
      { q: "“（wǎn）饭”括号字：", correct: "晚", options: ["晚", "碗", "弯", "挽"] },
      { q: "“（zǎo）上”括号字：", correct: "早", options: ["早", "枣", "澡", "灶"] },
      { q: "“睡（jiào）”括号字：", correct: "觉", options: ["觉", "叫", "教", "较"] },
      { q: "“（shū）本”括号字：", correct: "书", options: ["书", "输", "疏", "熟"] },
      { q: "“（shuǐ）杯”括号字：", correct: "水", options: ["水", "谁", "睡", "税"] },
      { q: "“（fàn）店”括号字：", correct: "饭", options: ["饭", "范", "犯", "凡"] },
      { q: "“（mā）妈”括号字：", correct: "妈", options: ["妈", "麻", "马", "骂"] }
    ]}
);

DATA.chinese["2上"].push(
  { id: "c2u_pyD", name: "拼音综合训练（二上）", type: "pinyin",
    items: [
      { q: "“瀑”（瀑布）读：", correct: "pù", options: ["pù", "bào", "bù", "pō"] },
      { q: "“庐”（庐山）读：", correct: "lú", options: ["lú", "lǔ", "lù", "luó"] },
      { q: "“鹳”读：", correct: "guàn", options: ["guàn", "huān", "hè", "quān"] },
      { q: "“雀”读：", correct: "què", options: ["què", "qiào", "cuò", "jué"] },
      { q: "“敕”（敕勒歌）读：", correct: "chì", options: ["chì", "cè", "shè", "lì"] },
      { q: "“勒”（敕勒歌）读：", correct: "lè", options: ["lè", "lā", "là", "léi"] },
      { q: "“勒”（勒紧）读：", correct: "lēi", options: ["lēi", "lè", "lā", "là"] },
      { q: "“野”读：", correct: "yě", options: ["yě", "yè", "yāo", "rě"] },
      { q: "“茫”（苍茫）读：", correct: "máng", options: ["máng", "mǎng", "wáng", "wàng"] },
      { q: "“穹”（苍穹）读：", correct: "qióng", options: ["qióng", "qún", "qōng", "gōng"] },
      { q: "“孤”（孤舟）读：", correct: "gū", options: ["gū", "kū", "hū", "wū"] },
      { q: "“蓑”（蓑笠）读：", correct: "suō", options: ["suō", "shuō", "sōu", "sā"] },
      { q: "“笠”读：", correct: "lì", options: ["lì", "lǐ", "qī", "jì"] },
      { q: "“翁”（渔翁）读：", correct: "wēng", options: ["wēng", "wōng", "yōng", "gōng"] },
      { q: "“曹”读：", correct: "cáo", options: ["cáo", "zǎo", "cōu", "sào"] },
      { q: "“撑”读：", correct: "chēng", options: ["chēng", "chèn", "chěn", "shēng"] },
      { q: "“蝌”读：", correct: "kē", options: ["kē", "ké", "kě", "kè"] },
      { q: "“蚪”读：", correct: "dǒu", options: ["dǒu", "tóu", "dú", "tǒu"] },
      { q: "“蹦”读：", correct: "bèng", options: ["bèng", "pèng", "mèng", "fēng"] },
      { q: "“辉”读：", correct: "huī", options: ["huī", "kuī", "fēi", "shuī"] },
      { q: "“枫”读：", correct: "fēng", options: ["fēng", "féng", "fěng", "fèng"] },
      { q: "“霜”读：", correct: "shuāng", options: ["shuāng", "shǎng", "shàng", "xiāng"] },
      { q: "“径”读：", correct: "jìng", options: ["jìng", "jīng", "xíng", "jǐng"] },
      { q: "“斜”读：", correct: "xié", options: ["xié", "xiá", "yá", "yé"] },
      { q: "“锄”（锄禾）读：", correct: "chú", options: ["chú", "zhú", "zhǎo", "cú"] },
      { q: "“皆”读：", correct: "jiē", options: ["jiē", "jié", "qié", "xié"] },
      { q: "“辛”读：", correct: "xīn", options: ["xīn", "sīn", "shīn", "qīn"] },
      { q: "“绝”读：", correct: "jué", options: ["jué", "juè", "jiē", "quē"] },
      { q: "“牧”读：", correct: "mù", options: ["mù", "wù", "mò", "fù"] },
      { q: "“将”在“将军”中读：", correct: "jiāng", options: ["jiāng", "jiàng", "qiāng", "qiàng"] },
      { q: "“将”在“大将”中读：", correct: "jiàng", options: ["jiàng", "jiāng", "qiāng", "qiàng"] },
      { q: "“朝”在“朝阳”中读：", correct: "zhāo", options: ["zhāo", "cháo", "zhào", "zhōu"] },
      { q: "“朝”在“朝代”中读：", correct: "cháo", options: ["cháo", "zhāo", "zhào", "zhōu"] },
      { q: "“觉”在“感觉”中读：", correct: "jué", options: ["jué", "jiào", "jiāo", "jiǎo"] },
      { q: "“觉”在“睡觉”中读：", correct: "jiào", options: ["jiào", "jué", "jiāo", "jiǎo"] }
    ]},
  { id: "c2u_zsD", name: "同音/形近字辨析（二上）", type: "zishi",
    items: [
      { q: "“蜜蜂”应填：", correct: "蜂", options: ["蜂", "峰", "锋", "逢"] },
      { q: "“山峰”应填：", correct: "峰", options: ["峰", "蜂", "锋", "逢"] },
      { q: "“刀锋”应填：", correct: "锋", options: ["锋", "蜂", "峰", "逢"] },
      { q: "“相逢”应填：", correct: "逢", options: ["逢", "蜂", "峰", "锋"] },
      { q: "“已经”应填：", correct: "已", options: ["已", "己", "巳", "异"] },
      { q: "“自己”应填：", correct: "己", options: ["己", "已", "巳", "异"] },
      { q: "“期末”应填：", correct: "末", options: ["末", "未", "木", "本"] },
      { q: "“未来”应填：", correct: "未", options: ["未", "末", "木", "本"] },
      { q: "“工作”应填：", correct: "作", options: ["作", "做", "坐", "座"] },
      { q: "“做事”应填：", correct: "做", options: ["做", "作", "坐", "座"] },
      { q: "“请坐”应填：", correct: "坐", options: ["坐", "座", "做", "作"] },
      { q: "“一座山”应填：", correct: "座", options: ["座", "坐", "做", "作"] },
      { q: "“还在”应填：", correct: "在", options: ["在", "再", "才", "也"] },
      { q: "“再见”应填：", correct: "再", options: ["再", "在", "才", "也"] },
      { q: "“弟弟他”应填：", correct: "他", options: ["他", "她", "它", "也"] },
      { q: "“妈妈她”应填：", correct: "她", options: ["她", "他", "它", "也"] },
      { q: "“小猫它”应填：", correct: "它", options: ["它", "他", "她", "也"] },
      { q: "“果园”应填：", correct: "园", options: ["园", "圆", "源", "缘"] },
      { q: "“圆圈”应填：", correct: "圆", options: ["圆", "园", "源", "缘"] },
      { q: "“水源”应填：", correct: "源", options: ["源", "园", "缘", "圆"] },
      { q: "“请客”应填：", correct: "请", options: ["请", "清", "晴", "情"] },
      { q: "“清晨”应填：", correct: "清", options: ["清", "请", "晴", "情"] },
      { q: "“晴朗”应填：", correct: "晴", options: ["晴", "情", "清", "请"] },
      { q: "“感情”应填：", correct: "情", options: ["情", "晴", "清", "请"] },
      { q: "“眼睛”应填：", correct: "睛", options: ["睛", "晴", "精", "情"] },
      { q: "“精彩”应填：", correct: "精", options: ["精", "睛", "晴", "情"] },
      { q: "“辛苦”应填：", correct: "辛", options: ["辛", "幸", "兴", "星"] },
      { q: "“幸福”应填：", correct: "幸", options: ["幸", "辛", "兴", "星"] },
      { q: "“兴趣”应填：", correct: "兴", options: ["兴", "星", "辛", "幸"] },
      { q: "“星星”应填：", correct: "星", options: ["星", "兴", "辛", "幸"] },
      { q: "“湖水”应填：", correct: "湖", options: ["湖", "壶", "糊", "胡"] },
      { q: "“茶壶”应填：", correct: "壶", options: ["壶", "湖", "糊", "胡"] },
      { q: "“糊涂”应填：", correct: "糊", options: ["糊", "湖", "壶", "胡"] },
      { q: "“胡同”应填：", correct: "胡", options: ["胡", "湖", "壶", "糊"] },
      { q: "“形近字 知/只”：“一只小鸟”填：", correct: "只", options: ["只", "知", "支", "枝"] }
    ]},
  { id: "c2u_zsE", name: "看拼音选字 · 句子场景（二上）", type: "zishi",
    items: [
      { q: "“（jué）句”括号字：", correct: "绝", options: ["绝", "觉", "角", "决"] },
      { q: "“牧（tóng）”括号字：", correct: "童", options: ["童", "同", "铜", "桐"] },
      { q: "“竹（lín）”括号字：", correct: "林", options: ["林", "临", "邻", "淋"] },
      { q: "“（gū）舟”括号字：", correct: "孤", options: ["孤", "姑", "沽", "估"] },
      { q: "“（fēng）筝”括号字：", correct: "风", options: ["风", "封", "锋", "丰"] },
      { q: "“（dài）帽子”括号字：", correct: "戴", options: ["戴", "带", "代", "呆"] },
      { q: "“（hú）水”括号字：", correct: "湖", options: ["湖", "壶", "糊", "胡"] },
      { q: "“枫叶如（dān）”括号字：", correct: "丹", options: ["丹", "单", "蛋", "胆"] },
      { q: "“（cháng）城”括号字：", correct: "长", options: ["长", "常", "场", "厂"] },
      { q: "“（lú）山”括号字：", correct: "庐", options: ["庐", "卢", "鲁", "路"] },
      { q: "“山（dǐng）”括号字：", correct: "顶", options: ["顶", "丁", "钉", "订"] },
      { q: "“（jīn）天”括号字：", correct: "今", options: ["今", "金", "筋", "紧"] },
      { q: "“（hǎi）边”括号字：", correct: "海", options: ["海", "还", "孩", "害"] },
      { q: "“（chuān）越”括号字：", correct: "穿", options: ["穿", "川", "船", "钏"] },
      { q: "“（mù）牛”括号字：", correct: "牧", options: ["牧", "木", "目", "亩"] },
      { q: "“（pī）发”括号字：", correct: "披", options: ["披", "批", "疲", "啤"] },
      { q: "“（suō）笠”括号字：", correct: "蓑", options: ["蓑", "缩", "索", "锁"] },
      { q: "“（diào）鱼”括号字：", correct: "钓", options: ["钓", "掉", "调", "吊"] },
      { q: "“渔（wēng）”括号字：", correct: "翁", options: ["翁", "瓮", "嗡", "雍"] },
      { q: "“（dú）钓”括号字：", correct: "独", options: ["独", "读", "毒", "督"] },
      { q: "“（hán）山”括号字：", correct: "寒", options: ["寒", "含", "喊", "汉"] },
      { q: "“（cǎo）原”括号字：", correct: "草", options: ["草", "操", "糟", "嘈"] },
      { q: "“（féng）人便说”括号字：", correct: "逢", options: ["逢", "缝", "蜂", "锋"] },
      { q: "“（jì）节”括号字：", correct: "季", options: ["季", "记", "计", "寄"] },
      { q: "“古（shī）”括号字：", correct: "诗", options: ["诗", "师", "狮", "施"] },
      { q: "“（yín）诵”括号字：", correct: "吟", options: ["吟", "银", "饮", "寅"] },
      { q: "“（liǔ）絮”括号字：", correct: "柳", options: ["柳", "榴", "留", "流"] },
      { q: "“鹅（máo）”括号字：", correct: "毛", options: ["毛", "猫", "锚", "帽"] },
      { q: "“（yǒng）柳”括号字：", correct: "咏", options: ["咏", "勇", "拥", "泳"] },
      { q: "“（lù）柴”括号字：", correct: "鹿", options: ["鹿", "录", "路", "陆"] },
      { q: "“蛙（shēng）”括号字：", correct: "声", options: ["声", "生", "升", "胜"] },
      { q: "“（hé）花”括号字：", correct: "荷", options: ["荷", "合", "河", "和"] },
      { q: "“（zhú）林”括号字：", correct: "竹", options: ["竹", "烛", "逐", "筑"] },
      { q: "“（chí）塘”括号字：", correct: "池", options: ["池", "迟", "驰", "弛"] },
      { q: "“春（mián）”括号字：", correct: "眠", options: ["眠", "棉", "免", "勉"] }
    ]}
);

DATA.chinese["2下"].push(
  { id: "c2d_pyD", name: "拼音综合训练（二下）", type: "pinyin",
    items: [
      { q: "“贝”读：", correct: "bèi", options: ["bèi", "pèi", "bēi", "mèi"] },
      { q: "“粽”（粽子）读：", correct: "zòng", options: ["zòng", "zhòng", "zǒng", "jīng"] },
      { q: "“蛋”读：", correct: "dàn", options: ["dàn", "dān", "tàn", "dèn"] },
      { q: "“蕊”读：", correct: "ruǐ", options: ["ruǐ", "luǐ", "wěi", "zuǐ"] },
      { q: "“鹊”读：", correct: "què", options: ["què", "qiào", "cuò", "jué"] },
      { q: "“蓬”读：", correct: "péng", options: ["péng", "féng", "bāng", "píng"] },
      { q: "“翁”读：", correct: "wēng", options: ["wēng", "wōng", "yōng", "gōng"] },
      { q: "“嫩”读：", correct: "nèn", options: ["nèn", "nún", "ruán", "ruì"] },
      { q: "“羡”读：", correct: "xiàn", options: ["xiàn", "xián", "xiàng", "yán"] },
      { q: "“慕”读：", correct: "mù", options: ["mù", "mú", "wù", "mǔ"] },
      { q: "“嫦”读：", correct: "cháng", options: ["cháng", "shàng", "sháng", "chàng"] },
      { q: "“娥”读：", correct: "é", options: ["é", "wǒ", "wō", "ně"] },
      { q: "“弦”读：", correct: "xián", options: ["xián", "xuán", "yán", "xiàn"] },
      { q: "“蹈”读：", correct: "dǎo", options: ["dǎo", "dào", "tǎo", "tāo"] },
      { q: "“袍”读：", correct: "páo", options: ["páo", "bāo", "pāo", "pào"] },
      { q: "“悲”读：", correct: "bēi", options: ["bēi", "pēi", "bèi", "mēi"] },
      { q: "“枯”读：", correct: "kū", options: ["kū", "qū", "gū", "hū"] },
      { q: "“燥”读：", correct: "zào", options: ["zào", "cào", "sāo", "zhào"] },
      { q: "“搬”读：", correct: "bān", options: ["bān", "pān", "fān", "màn"] },
      { q: "“穴”读：", correct: "xué", options: ["xué", "xuě", "shuě", "shuō"] },
      { q: "“脉”（山脉）读：", correct: "mài", options: ["mài", "mò", "bài", "pài"] },
      { q: "“缘”读：", correct: "yuán", options: ["yuán", "yuǎn", "yán", "xuán"] },
      { q: "“鸟（cháo）”（巢穴）读：", correct: "cháo", options: ["cháo", "zhāo", "zhào", "qiāo"] },
      { q: "“城”读：", correct: "chéng", options: ["chéng", "zhèng", "shéng", "qíng"] },
      { q: "“塞”（塞下曲）读：", correct: "sài", options: ["sài", "sāi", "zài", "zhāi"] },
      { q: "“为”（认为）读：", correct: "wéi", options: ["wéi", "wèi", "wěi", "wèn"] },
      { q: "“为”（为了）读：", correct: "wèi", options: ["wèi", "wéi", "wěi", "wèn"] },
      { q: "“数”（数学）读：", correct: "shù", options: ["shù", "shǔ", "sǒu", "sòu"] },
      { q: "“数”（数一数）读：", correct: "shǔ", options: ["shǔ", "shù", "sǒu", "sòu"] },
      { q: "“曾”（曾经）读：", correct: "céng", options: ["céng", "zēng", "zèng", "cén"] },
      { q: "“曾”（姓曾）读：", correct: "zēng", options: ["zēng", "céng", "zèng", "cén"] },
      { q: "“兴”（兴奋）读：", correct: "xīng", options: ["xīng", "xìng", "xíng", "qīng"] },
      { q: "“兴”（高兴）读：", correct: "xìng", options: ["xìng", "xīng", "xíng", "qīng"] },
      { q: "“传”（传统）读：", correct: "chuán", options: ["chuán", "zhuàn", "chán", "quán"] },
      { q: "“传”（传记）读：", correct: "zhuàn", options: ["zhuàn", "chuán", "chán", "quán"] }
    ]},
  { id: "c2d_zsD", name: "同音/形近字辨析（二下）", type: "zishi",
    items: [
      { q: "“复习”应填：", correct: "复", options: ["复", "付", "赴", "赋"] },
      { q: "“付钱”应填：", correct: "付", options: ["付", "复", "赴", "赋"] },
      { q: "“宝贝”应填：", correct: "贝", options: ["贝", "见", "具", "页"] },
      { q: "“看见”应填：", correct: "见", options: ["见", "贝", "具", "页"] },
      { q: "“传说”应填：", correct: "传", options: ["传", "转", "砖", "船"] },
      { q: "“转身”应填：", correct: "转", options: ["转", "传", "砖", "船"] },
      { q: "“统一”应填：", correct: "统", options: ["统", "桶", "痛", "通"] },
      { q: "“水桶”应填：", correct: "桶", options: ["桶", "统", "痛", "通"] },
      { q: "“海湾”应填：", correct: "湾", options: ["湾", "弯", "丸", "玩"] },
      { q: "“弯腰”应填：", correct: "弯", options: ["弯", "湾", "丸", "玩"] },
      { q: "“喜鹊”应填：", correct: "鹊", options: ["鹊", "雀", "确", "缺"] },
      { q: "“麻雀”应填：", correct: "雀", options: ["雀", "鹊", "确", "缺"] },
      { q: "“拨号”应填：", correct: "拨", options: ["拨", "拔", "泼", "钵"] },
      { q: "“拔河”应填：", correct: "拔", options: ["拔", "拨", "泼", "钵"] },
      { q: "“鸳鸯”应填：", correct: "鸳", options: ["鸳", "园", "原", "源"] },
      { q: "“果园”应填：", correct: "园", options: ["园", "鸳", "原", "源"] },
      { q: "“舅舅”应填：", correct: "舅", options: ["舅", "旧", "就", "救"] },
      { q: "“陈旧”应填：", correct: "旧", options: ["旧", "舅", "就", "救"] },
      { q: "“阿姨”应填：", correct: "姨", options: ["姨", "移", "疑", "夷"] },
      { q: "“移动”应填：", correct: "移", options: ["移", "姨", "疑", "夷"] },
      { q: "“打雷”应填：", correct: "雷", options: ["雷", "累", "泪", "类"] },
      { q: "“劳累”应填：", correct: "累", options: ["累", "雷", "泪", "类"] },
      { q: "“粽子”应填：", correct: "粽", options: ["粽", "综", "总", "中"] },
      { q: "“综合”应填：", correct: "综", options: ["综", "粽", "总", "中"] },
      { q: "“嫦娥”应填：", correct: "嫦", options: ["嫦", "常", "长", "厂"] },
      { q: "“经常”应填：", correct: "常", options: ["常", "嫦", "长", "厂"] },
      { q: "“怀念”应填：", correct: "怀", options: ["怀", "坏", "槐", "淮"] },
      { q: "“坏人”应填：", correct: "坏", options: ["坏", "怀", "槐", "淮"] },
      { q: "“羡慕”应填：", correct: "羡", options: ["羡", "线", "限", "献"] },
      { q: "“毛线”应填：", correct: "线", options: ["线", "羡", "限", "献"] },
      { q: "“白鹅”应填：", correct: "鹅", options: ["鹅", "俄", "饿", "我"] },
      { q: "“饥饿”应填：", correct: "饿", options: ["饿", "鹅", "俄", "我"] },
      { q: "“黄色”应填：", correct: "黄", options: ["黄", "皇", "煌", "惶"] },
      { q: "“皇帝”应填：", correct: "皇", options: ["皇", "黄", "煌", "惶"] },
      { q: "“辉煌”应填：", correct: "煌", options: ["煌", "黄", "皇", "惶"] }
    ]},
  { id: "c2d_zsE", name: "看拼音选字 · 句子场景（二下）", type: "zishi",
    items: [
      { q: "“（chūn）天来了”括号字：", correct: "春", options: ["春", "纯", "醇", "椿"] },
      { q: "“（róng）化的雪”括号字：", correct: "融", options: ["融", "容", "熔", "荣"] },
      { q: "“（xiǎo）燕子归来”括号字：", correct: "小", options: ["小", "晓", "筱", "孝"] },
      { q: "“（fēi）翔的鸟”括号字：", correct: "飞", options: ["飞", "非", "啡", "菲"] },
      { q: "“拂面的春（fēng）”括号字：", correct: "风", options: ["风", "封", "锋", "丰"] },
      { q: "“（liǔ）絮飘飘”括号字：", correct: "柳", options: ["柳", "榴", "留", "流"] },
      { q: "“（cǎo）色青青”括号字：", correct: "草", options: ["草", "操", "糟", "嘈"] },
      { q: "“牛羊（mǎn）山”括号字：", correct: "满", options: ["满", "慢", "漫", "曼"] },
      { q: "“（jīn）光闪闪”括号字：", correct: "金", options: ["金", "今", "筋", "紧"] },
      { q: "“瓜（guǒ）香甜”括号字：", correct: "果", options: ["果", "裹", "锅", "国"] },
      { q: "“（cǎi）色斑斓”括号字：", correct: "彩", options: ["彩", "采", "睬", "踩"] },
      { q: "“（lè）极了”括号字：", correct: "乐", options: ["乐", "勒", "肋", "泐"] },
      { q: "“弟（dì）很乖”括号字：", correct: "弟", options: ["弟", "低", "堤", "抵"] },
      { q: "“（jiě）姐温柔”括号字：", correct: "姐", options: ["姐", "解", "界", "杰"] },
      { q: "“妹（mèi）天真”括号字：", correct: "妹", options: ["妹", "媒", "枚", "煤"] },
      { q: "“（zǔ）父慈祥”括号字：", correct: "祖", options: ["祖", "组", "阻", "俎"] },
      { q: "“外（pó）”括号字：", correct: "婆", options: ["婆", "破", "泼", "坡"] },
      { q: "“（jiā）人团聚”括号字：", correct: "家", options: ["家", "夹", "加", "佳"] },
      { q: "“灯（lóng）”括号字：", correct: "笼", options: ["笼", "龙", "聋", "隆"] },
      { q: "“夜（kōng）”括号字：", correct: "空", options: ["空", "控", "孔", "恐"] },
      { q: "“（xīng）星点点”括号字：", correct: "星", options: ["星", "兴", "腥", "性"] },
      { q: "“（zhú）林深处”括号字：", correct: "竹", options: ["竹", "烛", "逐", "筑"] },
      { q: "“（liǔ）树成行”括号字：", correct: "柳", options: ["柳", "榴", "留", "流"] },
      { q: "“（tī）足球”括号字：", correct: "踢", options: ["踢", "梯", "题", "堤"] },
      { q: "“（tiào）绳”括号字：", correct: "跳", options: ["跳", "挑", "条", "调"] },
      { q: "“（pǎo）操”括号字：", correct: "跑", options: ["跑", "抛", "泡", "袍"] },
      { q: "“（zǎo）锻炼”括号字：", correct: "早", options: ["早", "枣", "澡", "灶"] },
      { q: "“（gē）声响亮”括号字：", correct: "歌", options: ["歌", "格", "哥", "葛"] },
      { q: "“（wǔ）蹈”括号字：", correct: "舞", options: ["舞", "伍", "午", "武"] },
      { q: "“（huà）笔”括号字：", correct: "画", options: ["画", "话", "华", "化"] },
      { q: "“（zhī）识”括号字：", correct: "知", options: ["知", "支", "枝", "只"] },
      { q: "“学（xí）”括号字：", correct: "习", options: ["习", "喜", "席", "锡"] },
      { q: "“成（jì）”括号字：", correct: "绩", options: ["绩", "季", "记", "计"] },
      { q: "“进（bù）”括号字：", correct: "步", options: ["步", "不", "部", "布"] },
      { q: "“万紫千（hóng）”括号字：", correct: "红", options: ["红", "鸿", "洪", "弘"] }
    ]}
);

/* ============================================================
   工具：根据状态返回章节
   - english + cat 提供时取对应分类
   - 否则按 grade+vol 取年级册次
   ============================================================ */
function getChapters(subject, grade, vol, cat) {
  if (subject === "english") {
    if (cat === "ket") return DATA.english_ket || [];
    if (cat === "pet") return DATA.english_pet || [];
    if (cat === "daily") return DATA.english_daily || [];
    // jingban 或未指定
    const key = grade + vol;
    return (DATA.english && DATA.english[key]) || [];
  }
  const key = grade + vol;
  return (DATA[subject] && DATA[subject][key]) || [];
}
