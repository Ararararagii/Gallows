var answer = "abc";//Białe ściany niczym marmur na skałach
answer = answer.toUpperCase();

var mistakeCount = 0;

var correct = new Audio("audio/win.mp3");
var incorrect = new Audio("audio/lose.mp3");

var emptyAnswer = answer.replace(/\S/g, "-");

function display_answer() {
    document.getElementById("board").innerHTML = emptyAnswer;
}

window.onload = start;

var letters = ["A", "Ą", "B", "C", "Ć", "D", "E", "Ę", "F", "G", "H", "I", "J", "K", "L", "Ł","M", "N", "Ń", "O", "Ó", "P", "Q", "R", "S", "Ś", "T", "U", "V", "W", "X", "Y", "Z", "Ź", "Ż"];


function start() {
    var div_content = "";

    for (const letter of letters) {
        div_content += '<div class="letter" onclick="check_letter(\'' + letter + '\')" id="' + letter + '">' + letter + '</div>';
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

    var hit = false;

    for (i = 0; i < answer.length; i++) {
        if (answer.charAt(i) == letter) {
            emptyAnswer = emptyAnswer.setCharAt(i, letter);
            hit = true;
        }
    }

    if (hit) {
        correct.play();
        document.getElementById(letter).style.background = "#003300";
        document.getElementById(letter).style.color = "#00C000";
        document.getElementById(letter).style.border = "3px solid #00C000";
        document.getElementById(letter).style.cursor = "default";

        display_answer();
    } else {
        incorrect.play();
        document.getElementById(letter).style.background = "#330000";
        document.getElementById(letter).style.color = "#C00000";
        document.getElementById(letter).style.border = "3px solid #C00000";
        document.getElementById(letter).style.cursor = "default";
        document.getElementById(letter).setAttribute("onclick", "");

        mistakeCount++;
        var image = "img/s" + mistakeCount + ".jpg";
        document.getElementById("gallows").innerHTML = '<img src="' + image + '"/>';
    }

    if (answer == emptyAnswer) {
        document.getElementById("alphabet").innerHTML = "Brawo! Wygrałeś! <br/> Odpowiedź to: <strong>" + answer + '</strong> <br/><br/><span class="reset" onclick="location.reload()">Jeszcze raz?</span>';
    }

    if(mistakeCount >= 9) {
        document.getElementById("alphabet").innerHTML = "Przegrałeś! <br/> Odpowiedź to: <strong>" + answer + '</strong> <br/><br/><span class="reset" onclick="location.reload()">Jeszcze raz?</span>';
    }
}