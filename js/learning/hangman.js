const word = "javascript";
let wordProgress = Array(word.length).fill("_");
let incorrectGuesses = 0;

while (incorrectGuesses < 6 && wordProgress.includes("_")) {
  const guess = prompt(`Guess a letter. Word progress: ${wordProgress.join(" ")}`);
  let isCorrectGuess = false;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === guess) {
      wordProgress[i] = guess;
      isCorrectGuess = true;
    }
  }
  if (!isCorrectGuess) {
    incorrectGuesses++;
  }
}

if (wordProgress.includes("_")) {
  console.log("You lost. The word was", word);
} else {
  console.log("You won! The word was", word);
}
