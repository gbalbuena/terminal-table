var Table = require("./");
require("colors");

var t = new Table({
  borderStyle: 3,
  horizontalLine: true,
  width: [20, "50%", "50%", 1],
  rightPadding: 0,
  leftPadding: 1
});

t.cell(0, 0, "Header".red);
t.cell(0, 1, "ヘッダ");
t.cell(1, 0, "hogehoge");
t.cell(1, 1, "いろはにほへと".green);
t.push(["alpha", "bravo"]);
t.cell(0, 2, "new");
t.cell(0, 3, "new");

t.attr(1, 1, {align: "center"});
t.attr(0, 0, {align: "right"});

t.attrRange({row: [0, 1]}, {align: "center"});
t.attrRange({row: [2]}, {leftPadding: 10});

console.log(""+t);
