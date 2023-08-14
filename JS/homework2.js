debugger;

console.log("----------------2.1----------------");
const draw1 = function (n) {
  let text = "";
  let numstar = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (j <= numstar) {
        text += "*";
      } else {
        text += "-";
      }
    }
    text += "\n";
    numstar++;
  }
  console.log(text);
};
draw1(2);
draw1(3);
draw1(4);

console.log("----------------2.2----------------");
const draw2 = function (n) {
  let text = "";
  let numstar = n;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (j <= numstar) {
        text += "*";
      } else {
        text += "-";
      }
    }
    text += "\n";
    numstar--;
  }
  console.log(text);
};
draw2(2);
draw2(3);
draw2(4);


