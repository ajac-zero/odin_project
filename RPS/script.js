const MATCHUPS = [
    {
        name: 'rock',
        beatenby: 'paper',
        beats: 'scissors',
    },{
        name: 'paper',
        beatenby: 'scissors',
        beats: 'rock',
    },{
        name: 'scissors',
        beatenby: 'rock',
        beats: 'paper'
    }
];

let yourScore = 0;
let championScore = 0;

function increaseyourScore() {
    yourScore += 1;
}

function increasechampionScore() {
    championScore += 1;
}

const fighters = Array.from(document.querySelectorAll('[data-option]'))

let currentChoice = '';
let rounds = 0;

fighters.forEach(fighter => {
    fighter.addEventListener('click', () => {
        currentChoice = fighter.dataset.option;
        if (yourScore < 5 && championScore < 5) {
            playRound();
            if (yourScore === 5) {
                console.log('You win!')
                message.textContent = 'You win!'
                resetGame()
            } else if (championScore == 5) {
                console.log('You lose, try again!')
                message.textContent = 'You lose, try again!'
                resetGame()           
            }
         }
    })
});

function championOptions() {
    return MATCHUPS[Math.floor(Math.random() * MATCHUPS.length)]
}

function playRound() {
    championChoice = championOptions();
    if (currentChoice === championChoice.beatenby) {
        increaseyourScore();
        updateLeaderboard();
        message.textContent = 'W!';
    } else if (currentChoice === championChoice.beats) {
        increasechampionScore();
        updateLeaderboard();
        message.textContent = 'L!';
    } else {
        message.textContent ='Tie!';
    }
}

const player = document.querySelector("[data-score='player'")
const champion = document.querySelector("[data-score='champion'")

function updateLeaderboard() {
    player.textContent = yourScore
    champion.textContent = championScore
}

const message = document.querySelector('[data-message]')

function resetGame() {
    yourScore = 0;
    championScore = 0;
    message.textContent = "Let's go!"   
}