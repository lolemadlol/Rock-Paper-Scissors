let rock = document.querySelector(".rock-image");
let paper = document.querySelector(".paper-image");
let scissors = document.querySelector(".scissors-image");
let result = document.querySelector(".result-image");
let gameResult = document.querySelector(".game-result");
let imageComputer = document.querySelector(".result-image-comp");
let userWins = document.querySelector(".userWins");
let computerWins = document.querySelector(".computerWins");
let button = document.querySelector(".button");


let user_wins = 0;
let computer_wins = 0;
userWins.innerHTML = "User Wins: " + user_wins;
computerWins.innerHTML = "Computer Wins: " + computer_wins;
const options = ["image/rock.png","image/paper.png","image/scissors.png"];


rock.addEventListener("click",() => {
    random_number = Math.floor(Math.random()*3);
    computer_pick = options[random_number];
    imageComputer.src = computer_pick;
    result.src = options[0];
    if (result.src  && computer_pick == options[2]) {
        gameResult.innerHTML = ">";
        user_wins = user_wins + 1;
    }else if (result.src && computer_pick == options[0]) {
        gameResult.innerHTML = "=";
    }else {
        gameResult.innerHTML = "<";
        computer_wins = computer_wins + 1;
    }
    userWins.innerHTML = "User Wins: " + user_wins;
    computerWins.innerHTML = "Computer Wins: " + computer_wins;
});
paper.addEventListener("click",() => {
    random_number = Math.floor(Math.random()*3);
    computer_pick = options[random_number];
    imageComputer.src = computer_pick;
    result.src = options[1];
    if (result.src  && computer_pick == options[0]) {
        gameResult.innerHTML = ">";
        user_wins = user_wins + 1;
    }else if (result.src && computer_pick == options[1]) {
        gameResult.innerHTML = "=";
    }else {
        gameResult.innerHTML = "<";
        computer_wins = computer_wins + 1;
    }
    userWins.innerHTML = "User Wins: " + user_wins;
    computerWins.innerHTML = "Computer Wins: " + computer_wins;
});
scissors.addEventListener("click",() => {
    random_number = Math.floor(Math.random()*3);
    computer_pick = options[random_number];
    imageComputer.src = computer_pick;
    result.src = options[2];
    if (result.src  && computer_pick == options[1]) {
        gameResult.innerHTML = ">";
        user_wins = user_wins + 1;
    }else if (result.src && computer_pick == options[2]) {
        gameResult.innerHTML = "=";
    }else {
        gameResult.innerHTML = "<";
        computer_wins = computer_wins + 1;
    }
    userWins.innerHTML = "User Wins: " + user_wins;
    computerWins.innerHTML = "Computer Wins: " + computer_wins;
});

button.addEventListener("click" , () => {
    location.reload();
});