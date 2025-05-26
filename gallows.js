var answer = "Białe ściany niczym marmur na skałach";
answer = answer.toUpperCase();

var emptyAnswer = answer.replace(/\S/g, "-");

function display_answer() {
    document.getElementById("board").innerHTML = emptyAnswer;
}

window.onload = start;

var letters = ["A", "Ą", "B", "C", "Ć", "D", "E", "Ę", "F", "G", "H", "I", "J", "K", "L", "Ł","M", "N", "Ń", "O", "Ó", "P", "Q", "R", "S", "Ś", "T", "U", "V", "W", "X", "Y", "Z", "Ź", "Ż"];


function start() {
    var div_content = "";

    for (const letter of letters) {
        div_content += '<div class="letter" onclick="check_letter(\'' + letter + '\')">' + letter + '</div>';
        (letters.indexOf(letter) + 1) % 7 == 0 ? div_content += '<div style="clear:both"></div>' : '';
    }

    document.getElementById("alphabet").innerHTML = div_content;


    display_answer();
}
String.prototype.setCharAt = function (index, char) {
    if (index > this.length - 1) return this.toString();
    else return this.substr(0, index) + char + this.substr(index + 1);
}
function check_letter(letter) {

    for (const checkingLetter of answer) {
        if (letter.toUpperCase() == checkingLetter.toUpperCase()) {
            emptyAnswer = emptyAnswer.setCharAt(answer.indexOf(checkingLetter), letter);
        }
    }

    display_answer();
}