let inputText = document.getElementById("inputText");
let message = document.getElementById("message");

// ห้ามแก้โค้ดเหนือบรรทัดนี้

inputText.onkeypress = onInputType;

function onInputType(event) {
    let lastChar = inputText.value.slice(-1);
    message.innerHTML = lastChar;
}



