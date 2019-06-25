window.addEventListener('load', init);

/* Global */

let time = 5;
let score = 0;
let isPlaying;

/* Dom Elements */

const wordInput = document.querySelector('#word-Input');
const currentWord = document.querySelector('#current-Word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#gameStatus');
const seconds = document.querySelector('#seconds');

const words = [
    'lorem',
    'ipsum',
    'cumque',
    'expedita',
    'consectetur',
    'adipiscing',
    'eiusmod',
    'written',
    'dolore',
    'magna',
    'aliqua',
    'veniam',
    'nostrud',
    'exercitation', 
    'rejectsitiso',
    'laboris',
    'rackham',
    'commodo',
    'consequat',
    'excepteur',
    'accusantium',
    'explicabo',
    'occasionally',
    'systema',
    'fugiat',
    'magnam',
    'architecto',
    'reprehenderit',
];

/* Initialize Game */
function init() {

    /* Load word from array */
    showWord(words);
    /* Start Matching on Word Input */
    wordInput.addEventListener('input', startMatch);
    /* Call Countdonw every seconds*/
    setInterval(countdown, 1000);
    /* CHeck Game Status */
    setInterval(checkstatus, 50);
}

/* Select and Display a Random Word */
function showWord(words) {

    /* Generate Random Index */
    const randIndex = Math.floor(Math.random() * words.length);

    /* Output the Random Word */
    currentWord.innerHTML = words[randIndex];
}
/* Start Match */
function startMatch() {
    if (matchWords()) {
         console.log('Match!!!');
         isPlaying = true;
         time = 6;
         showWord(words);
         wordInput.value = '';
         score++
    }

    if (score === -1){
        scoreDisplay.innerHTML = 0;
    }
    else {
        scoreDisplay.innerHTML = score;
    }
    
}

/* Match currentWord to wordInput */
function matchWords() {
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML === 'CORRECT';
        return true;
    }
    else {
        message === '';
        return false;
    }
}

/* Countdown Timer */
function countdown() {
    /* Time Decrement */
    if (time > 0){
        time--;
    }
    else if (time === 0){
        /* Game Over */
        isPlaying = false;
    }
    /* Show Time */
    timeDisplay.innerHTML = time;
} 

/* Check Game Status */
function checkstatus() {
    if (!isPlaying && time === 0){
        message.innerHTML = 'GAME OVER';
        score = -1;
    }
}