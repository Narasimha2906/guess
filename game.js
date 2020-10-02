const $submitButton = document.getElementById("submit");
const $message = document.getElementById("message");
const $lives = document.getElementById("lives");

var guessnumber = Math.round(Math.random() * 100);
var lives = 10;

$submitButton.onclick = () => {
    let userInput = document.getElementById("numberinput").value;
    lives--;
    if (userInput == guessnumber) {
        location.href = "./win.html";
    } else if (lives == 0) {
        location.href = "./lose.html";
    } else if (userInput > guessnumber) {
        message = `Oops! your guess is too high. You have ${lives} lives remaining.`;
    } else if (userInput < guessnumber) {
        message = `Oops! your guess is too low. You have ${lives} lives remaining.`;
    }

    $message.style.display = "inherit";
    $message.innerHTML = message;
    $lives.innerHTML = lives;


}