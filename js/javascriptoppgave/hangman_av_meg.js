//henter elimenter fra HTML element SON AT VI KAN endre ting i de som css og js
const wordE1 = document.getElementById('word'); // setter for word som skal displaye ode 
const wrongLettersE1 = document.getElementById('wrong-letters'); //seter variable for wrong letters
const playAgainBtn = document.getElementById('play-button'); //seter variable for play button som skal shules og startere på nutt
const popup = document.getElementById('popup-container'); //pop som skal ebdre css

const finalMessage = document.getElementById('final-message'); // forteler om du vant

const figureParts= document.querySelectorAll(".figure-part"); // setter array for figure deler for vite hvor langt det er igjen

const words = ['application', 'programming', 'interface', 'wizard', 'cow']; // array som innehilder ord som can bli selected

let selectedWord = words[Math.floor(Math.random() * words.length)]; //seter or som random

const correctLetters = []; //holder styre på riktig
const wrongLetters = []; //holder på fel bokstav

//Show hidden word
function displayWord(){// bestmer hvs orde skall se ut
    /* puter inn info til word*/wordE1.innerHTML = ` 
    ${selectedWord //velger det spesefike orde
    .split('') //endrer alt til ingenting word
    .map( // her sier vi at den riktigee bokjtaven skal inn i word vis det inholder leter fra selected word der letter er
        letter =>`
        <span class="letter">
        ${correctLetters.includes(letter) ? letter : ''}
        </span>
        `
    )
    .join('')}
    `;

    const innerWord = wordE1.innerText.replace(/\n/g, ''); //fjerner det som ikke dkall være der

    if(innerWord === selectedWord){ //vinner melding
        finalMessage.innerText = 'Congratulations! You won! 😃'; // selve melding
        popup.style.display= 'flex'; // viser melding
    }
}

// Update the wrong letters
function updateWrongLetterE1(){
    //Display wrong letters
    wrongLettersE1.innerHTML = `
    ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
    ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `;

    //Display parts
    figureParts.forEach((part,index) => { //for ver del avfiggur
        const errors = wrongLetters.length; //setter errors to amont of wrong letters

        if(index < errors) { //visser blocken vi er på når dener mindre en error men kun de somchar vert part
            part.style.display = 'block'
        }
        else{
            part.style.display = 'none'; // og hjemer hviss ikke
        }
    });

    //Check if lost
    if(wrongLetters.length === figureParts.length){
        finalMessage.innerText = 'Unfortunately you lost. 😕' ;
        popup.style.display = 'flex';
    }
}


//Keydown letter press
window.addEventListener('keydown', e =>{
    if(e.keyCode >= 65 && e.keyCode <=90){
        const letter = e.key;

        if(selectedWord.includes(letter)){
            if(!correctLetters.includes(letter)){
                correctLetters.push(letter);

                displayWord();
            } else{
                console.log("hi idiot");
            }
        } else{
            if(!wrongLetters.includes(letter)){
                wrongLetters.push(letter);

                updateWrongLetterE1();
            } else{
              console.log("hi idiot");
            }
        }
    }
});

//Restart game and play again
playAgainBtn.addEventListener('click', () => {
    //Empty arrays
    correctLetters.splice(0);
    wrongLetters.splice(0);

    selectedWord = words[Math.floor(Math.random() * words.length)];

    displayWord();

    updateWrongLetterE1();

    popup.style.display = 'none';
});

displayWord();