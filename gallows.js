var answer = "Bia³e œciany niczym marmur na ska³ach";
answer = answer.toUpperCase();

var emptyAnser = answer.replace(/\S/g, "-");

function display_answer() {
    document.getElementById("board").innerHTML = emptyAnser;
}

window.onload = start;

function start() {
    document.getElementById("alphabet").innerHTML = "test";


    display_answer();
}