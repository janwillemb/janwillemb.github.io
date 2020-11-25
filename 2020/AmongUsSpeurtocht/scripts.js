
const instructionText = document.getElementById("instructiontext");
let textsToWrite = [];
let currentP;
let currentText = "";
const ps = [];

const tags = instructionText.getElementsByTagName("P");
for (const p of tags) {
    let txt = p.innerHTML;
    txt = txt.replace(/\s+/, " ");
    textsToWrite.push(txt);
    p.innerHTML = " ";
    ps.push(p);
}

setTimeout(addNextChar, 50);

function addNextChar() {

    if (!currentText) {
        currentText = textsToWrite.shift();
        if (!currentText) {
            return;
        }

        currentP = ps.shift();
    }

    const curChar = currentText.substr(0, 1);
    currentText = currentText.substr(1);
    currentP.innerHTML += curChar;

    let nextTimeOutAt = 50;

    if (!currentText) {
        nextTimeOutAt = 1500; // delay on new <P>
    } else {
        const peekNext = currentText.substr(0, 1);
        if ((curChar === "." || curChar === "!") && peekNext === " ") {
            nextTimeOutAt = 1000; // delay on space
        }
    }

    setTimeout(addNextChar, nextTimeOutAt);
}