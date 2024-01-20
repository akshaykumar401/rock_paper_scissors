let userScore = 0;
let aiScore = 0;

const winSound = new Audio();
winSound.src = "./win.mp3";
const loseSound = new Audio();
loseSound.src = "./lose.mp3";
const drowSound = new Audio();
drowSound.src = "./drow.mp3";

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const aiScorePara = document.querySelector("#ai-score");

const genAiChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drowGame = () => {
    drowSound.play();
    msg.innerText = "Game Was Drow";
    msg.style.backgroundColor = "gray";
    msg.style.color = "black";
};

const showWinner = (userWin, userChoice, aiChoice) => {
    if(userWin) {
        winSound.play();
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win ${userChoice} beats ${aiChoice}`;
        msg.style.backgroundColor = "Green";
    } else {
        loseSound.play();
        aiScore++;
        aiScorePara.innerText = aiScore;
        msg.innerText = `You Lose ${aiChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    const aiChoice = genAiChoice();

    if(userChoice === aiChoice) {
        drowGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            //Scissor, paper
            userWin = aiChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            //rock, Scissor
            userWin = aiChoice === "scissor" ? false : true;
        } else {
            //rock, paper
            userWin = aiChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, aiChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});