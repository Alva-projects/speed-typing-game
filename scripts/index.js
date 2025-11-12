// Variables for the DOM elements
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");

let randomWord; 

// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];

//Update the word element with random item from array
function addWordtoDOM() {
  randomWord = words[Math.floor(Math.random() * words.length)]
  word.innerText = randomWord;
}
//Right answer => new word + increase score
text.addEventListener ("input", function (){
    if (text.value == randomWord) {
    text.value = "";
    addWordtoDOM()
    increaseScore();
  }
} );
//Score
let score = 0;
function increaseScore() {
  score = score + 1;
  scoreEl.innerText = score;
}

//Even listener to the text-element. It should
  //1. Call updateScore   
  //2. give the user a new word by calling addWordToDOM  
  //3. increment time by 5 seconds   
  //4. reset the input to empty string  

//Start
function getNextWord(){
  console.log(word)
}

console.log(addWordtoDOM)

//PART TWO
//Initializing time
const startingTime = 9;
let time = startingTime;
const countdownEl = document.getElementById('time');

setInterval(function() {
  let seconds = time % 60;
  countdownEl.innerHTML = `${seconds}`;
  time --;

  if (time <= 0) {
    endgameEl.innerHTML = "Game over";
  }
}, 1000);

  //Run scripts

  setInterval(updateTime, 1000);
  addWordtoDOM();
  clearInterval();

