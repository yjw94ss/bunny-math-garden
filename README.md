# 小兔的数学花园

适合 5–7 岁亲子共玩的静态数学课：小兔数胡萝卜、找规律、形状侦探、平均分点心。所有题目均为固定内容，无登录和模型调用；课堂进度不上传也不保存。

## 本地预览

在此目录运行 `python3 -m http.server 8080`，浏览器打开 `http://localhost:8080/`。模块脚本需要通过 HTTP 访问。运行 `node --test tests/learning.test.mjs` 检查题库基础逻辑。

## 素材说明

`carrot-game.html` 为 OpenMAIC 试课中生成的“小兔数胡萝卜”互动页面，原始生成内容来自 [OpenMAIC](https://github.com/DigitalSovereign/openmaic)，该项目采用 AGPL-3.0。游戏的浏览器脚本独立运行在沙箱 iframe 中。已移除原游戏中不使用的 KaTeX 外部资源，游戏不需要外部资源。其他课程、站点设计与练习题为本次新增。
