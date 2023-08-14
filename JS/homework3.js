console.log("----------------3.1----------------");


const draw1 = function (n) {
  let text = "";
  
  // Upper part
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      text += "-";
    }
    for (let j = n - i + 1; j <= n + i - 1; j++) {
      text += "*";
    }
    for (let j = n + i; j <= 2 * n - 1; j++) {
      text += "-";
    }
    text += "\n";
  }
  
  // Lower part
  for (let i = n - 1; i >= 1; i--) {
    for (let j = 1; j <= n - i; j++) {
      text += "-";
    }
    for (let j = n - i + 1; j <= n + i - 1; j++) {
      text += "*";
    }
    for (let j = n + i; j <= 2 * n - 1; j++) {
      text += "-";
    }
    text += "\n";
  }
  
  console.log(text);
};

draw1(2);
draw1(3);
draw1(4);

console.log("----------------3.2----------------");

console.log("----------------3.3----------------");

function draw3(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = [];
    for (let j = 0; j < n; j++) {
      if (j <= i) {
        arr[i][j] = "*";
      } else {
        arr[i][j] = "-";
      }
    }
  }

  
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += arr[i][j];
    }
    console.log(row);
  }
}

draw3(2); 
draw3(3);
draw3(4);

console.log("----------------3.4----------------");
function draw4(n) {
  for (let i = -n + 1; i < n; i++) {
      let row = '';
      for (let j = -n + 1; j < n; j++) {
          if (Math.abs(i) + Math.abs(j) < n) {
              row += '*';
          } else {
              row += '-';
          }
      }
      console.log(row);
  }
}
draw4(2);
draw4(3);
draw4(4);