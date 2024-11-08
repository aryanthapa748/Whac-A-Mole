const scoreDisplay = document.querySelector('#scoreDisplay');
const timeDisplay = document.querySelector('#timeDisplay');
const mole = document.querySelector('.mole');
const squares = document.querySelectorAll('.square');

let score = 0; // keep track of the score
let hitPosition; // keeping track of the id of the clicked mole
let currentTime = 60; // initially setting the time to 60 seconds
let timerForMole; // keeping track of the mole to appear randomly

// function to add and remove class mole to each squares
function randomSquare(){
    squares.forEach(square => {
        square.classList.remove('mole'); // putting remove first because logically its will be starting without mole class so remove, add and then remove the loop goes on
        })
        
        let randomSquare = squares[Math.floor(Math.random() * 9)]; // since we querySelectedAll squares we are generating random numbers from 0 to 9 so if squares[2] then the third <div> will be selected and then adding the mole class there
        randomSquare.classList.add('mole'); // putting mole class to the randomly selected <div> element with class square

        hitPosition = randomSquare.id // this can be confusing because .id is usually we see in accessing objects properties in javascript but for HTML elements .id is a great way to access the id ATTRIBUTE so lets say that randomSquare is a random <div> element with id='5' so if we do randomSquare.id then we are being accessed 5 and thats what we need to keep track
        
}

// function to setTimeInterval for randomSquare function so than it will be randomly placed every 1000ms
function moveMole(){
    timerForMole = setInterval(randomSquare, 500);
}

moveMole();

// logic for event listener when we click the mole.
squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition){
        score++;
        scoreDisplay.textContent = score;
        hitPosition = null // we setting this null because if we spam clicked the mole then the score will keep incrementing but if we set this null it will only increment the score by 1.
        }
    })
})

// now since we completed the logic for incrementing score now its time for countdown
function countDown(){
    currentTime--;
    timeDisplay.textContent = currentTime;

    if(currentTime == 0){
        clearInterval(countDownTimer); // to stop the timer from going past 0 
        clearInterval(timerForMole);
        alert('Game Over! You Scored ' + score);
        alert('Reload the page to start over again.')  
    }
}

let countDownTimer = setInterval(countDown, 1000); // for counting down the seconds which is obtained by setInterval so every 1second it will run function CountDown() which will actually decrease the time by 1.