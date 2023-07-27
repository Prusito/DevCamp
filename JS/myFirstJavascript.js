// Example
// ลอง copy paste code นี้ไปใส่ใน myFirstJavascript.html ดู
function printRow(numPerLine) {
  text = '';
  for (let j = 0; j < numPerLine; j++) {
    text += '-';
  }
  return text;
 }
 function draw(row, col) {
  text = '';
  for (let i = 0; i < row; i++) {
    text += printRow(col);
    text += '\n';
  }
  console.log(text);
 }
 debugger;
 draw(5, 3);