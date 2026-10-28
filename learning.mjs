export const lessons = [
 {id:'carrots',number:'01',title:'小兔的胡萝卜',tag:'数一数 · 加与减',color:'orange',description:'给小兔装胡萝卜，看看多一根、少一根会怎样。',tip:'加法是合起来，减法是拿走。先用手指或实物数一数。',questions:[
  {prompt:'小兔有 3 根胡萝卜，又来了 2 根，一共几根？',options:['4','5','6'],answer:'5',explain:'从 3 接着数：4、5。3 + 2 = 5。'},
  {prompt:'篮子里有 4 根，再放进 2 根，现在有几根？',options:['5','6','7'],answer:'6',explain:'4 + 2 = 6，合起来是 6 根。'},
  {prompt:'小兔有 7 根，吃掉 3 根，还剩几根？',options:['3','4','5'],answer:'4',explain:'7 减去 3，还剩 4 根。'}]},
 {id:'patterns',number:'02',title:'花园里的秘密规律',tag:'观察 · 接着排',color:'green',description:'仔细看花朵怎么排队，找出下一个是谁。',tip:'先找重复出现的一组，再按顺序接下去。',questions:[
  {prompt:'红花、蓝花、红花、蓝花、红花，接下来是什么？',visual:['red','blue','red','blue','red'], options:['红花','蓝花','黄花'],answer:'蓝花',explain:'红花、蓝花是一组，轮到蓝花啦。'},
  {prompt:'圆形、方形、圆形、方形，接下来是什么？',visual:['circle','square','circle','square'],options:['圆形','方形','三角形'],answer:'圆形',explain:'圆形、方形轮流出现，接下来是圆形。'},
  {prompt:'红花、黄花、蓝花、红花、黄花，接下来是什么？',visual:['red','yellow','blue','red','yellow'],options:['红花','黄花','蓝花'],answer:'蓝花',explain:'每 3 朵重复一组：红、黄、蓝。'}]},
 {id:'shapes',number:'03',title:'形状侦探',tag:'认识图形 · 找一找',color:'blue',description:'用眼睛和小手，找到圆形、三角形和正方形。',tip:'看一看边和角：圆形没有角，三角形有 3 个角。',questions:[
  {prompt:'哪一个图形有 3 条边、3 个角？',visual:['triangle'],options:['圆形','三角形','正方形'],answer:'三角形',explain:'三角形有 3 条边和 3 个角。'},
  {prompt:'哪一个图形圆滚滚，没有角？',visual:['circle'],options:['圆形','三角形','正方形'],answer:'圆形',explain:'圆形没有角，可以滚动。'},
  {prompt:'哪一个图形有 4 条一样长的边？',visual:['square'],options:['圆形','三角形','正方形'],answer:'正方形',explain:'正方形有 4 条一样长的边。'}]},
 {id:'sharing',number:'04',title:'一起公平分点心',tag:'动手分 · 数一数',color:'purple',description:'把点心分给朋友，每个人一样多才公平。',tip:'试着轮流一人分一个，再数数每个人分到几个。',questions:[
  {prompt:'6 块点心平均分给 2 位朋友，每人几块？',visual:['cake','cake','cake','cake','cake','cake'],options:['2','3','4'],answer:'3',explain:'一人一块轮流分，6 块平均分给 2 人，每人 3 块。'},
  {prompt:'8 块点心平均分给 2 位朋友，每人几块？',visual:['cake','cake','cake','cake','cake','cake','cake','cake'],options:['3','4','5'],answer:'4',explain:'4 + 4 = 8，所以每人 4 块。'},
  {prompt:'9 块点心平均分给 3 位朋友，每人几块？',visual:['cake','cake','cake','cake','cake','cake','cake','cake','cake'],options:['2','3','4'],answer:'3',explain:'3 + 3 + 3 = 9，所以每人 3 块。'}]}
];
export function evaluate(question, answer) { return question.answer === answer; }
export function splitAmount(total, groups) { if (!Number.isInteger(total) || total < 0 || !Number.isInteger(groups) || groups < 1 || total % groups) return null; return Array(groups).fill(total / groups); }
export function sequenceNext(pattern, index) { return pattern[index % pattern.length]; }
