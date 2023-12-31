debugger;

console.log("----------------1.1----------------");
const draw1 = function (n) {
  let text = "";
  for (let i = n; i >= 1; i--) {
    text += "*";
  }
  console.log(text);
};

draw1(2);
draw1(3);
draw1(4);

console.log("----------------1.2----------------");
const draw2 = function (n) {
  let text = "";
  for (let i = n; i >= 1; i--) {
    for (let j = 0; j < n; j++) {
      text += "*";
    }
    text += "\n";
  }
  console.log(text);
};

draw2(2);
draw2(3);
draw2(4);

console.log("----------------1.3----------------");
const draw3 = function (n) {
  let text = "";
  for (let i = n; i >= 1; i--) {
    for (let j = 0; j < n; j++) {
      text += j + 1;
    }
    text += "\n";
  }
  console.log(text);
};

draw3(2);
draw3(3);
draw3(4);

console.log("----------------1.4----------------");
const draw4 = function (n) {
  let text = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      text += i + 1;
    }
    text += "\n";
  }
  console.log(text);
};

draw4(2);
draw4(3);
draw4(4);

console.log("----------------1.5----------------");
const draw5 = function (n) {
  let text = "";
  for (let i = n; i >= 1; i--) {
    for (let j = 0; j < n; j++) {
      text += i.toString();
    }
    text += "\n";
  }
  console.log(text);
};

draw5(2);
draw5(3);
draw5(4);

console.log("----------------1.6----------------");
const draw6 = function (n) {
  let num = 1;
  let text = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      text += num.toString();
      num++;
    }
    text += "\n";
  }
  console.log(text);
};
draw6(2);
draw6(3);
draw6(4);

console.log("----------------1.7----------------");
const draw7 = function (n) {
  let num = n * n;
  let text = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      text += num;

      num--;
    }
    text += "\n";
  }
  console.log(text);
};
draw7(2);
draw7(3);
draw7(4);

console.log("----------------1.8----------------");
const draw8 = function (n) {
  let num = 0;
  let text = "";
  for (let i = 0; i < n; i++) {
    text += num;
    text += "\n";
    num += 2;
  }
  console.log(text);
};

draw8(2);
draw8(3);
draw8(4);

console.log("----------------1.9----------------");
const draw9 = function (n) {
  let num = 2;
  let text = "";
  for (let i = 0; i < n; i++) {
    text += num;
    text += "\n";
    num += 2;
  }
  console.log(text);
};

draw9(2);
draw9(3);
draw9(4);

console.log("----------------1.10----------------");
const draw10 = function (n) {
  let num = 1;
  let text = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      text += num * (i + 1);
      num++;
    }
    num = 1;
    text += "\n";
  }
  console.log(text);
};

draw10(2);
draw10(3);
draw10(4);

console.log("----------------1.11----------------");
const draw11 = function (n) {
  let star = "*";
  let dash = "-";
  let text = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j == i) {
        text += dash;
      } else {
        text += star;
      }
    }
    text += "\n";
  }
  console.log(text);
};
draw11(2);
draw11(3);
draw11(4);

console.log("----------------1.12----------------");
const draw12 = function (n) {
  let position = n;
  let star = "*";
  let dash = "-";
  let text = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j == position - 1) {
        text += dash;
      } else {
        text += star;
      }
    }
    text += "\n";
    position--;
  }
  console.log(text);
};
draw12(2);
draw12(3);
draw12(4);
