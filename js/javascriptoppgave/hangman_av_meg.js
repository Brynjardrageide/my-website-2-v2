const OrdMange = ["javascript", "bilfamilie", "ole", "balar", "boobs"];
let Ord = OrdMange[Math.floor(Math.random()*OrdMange.length)]
let OrdProgress = Array(Ord.length).fill("_");
let incorrectGuesses = 0;

let knapp = document.getElementById("submit")
let Guess = document.getElementById("guess")

knapp.addEventListener("click",check)

function check(){
  let guess = Guess.value
  let isCorrectGuess = false
  for (let i = 0; i < Ord.length; i++) {
    if (Ord[i] === guess) {
      OrdProgress[i] = guess;
      isCorrectGuess = true;
    }
  }
  if (!isCorrectGuess) {
    incorrectGuesses++;
  }
  if (OrdProgress.includes("_") && incorrectGuesses === 5) {
    console.log("You lost. The Ord was", Ord);
  } else if (OrdProgress === Ord){
    console.log("You won! The Ord was", Ord);
  }
}
