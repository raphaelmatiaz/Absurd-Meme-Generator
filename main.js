// Import Statements
import { initDownloadButton } from "./downloadMeme.js";


// Variables
const randomWordAPI = 'https://random-word-api.herokuapp.com/word';
const memeDiv = document.getElementById("meme-div");
const generateMemeButton = document.getElementById("generate-meme-button");
const wordCount = 1;

// Initializing Download Button
initDownloadButton(memeDiv);


//Event Listners
generateMemeButton.addEventListener("click", () => {
    generateMeme();
});

// API Call Functions
async function getRandomWord() {
  try {
    const res = await fetch(`${randomWordAPI}?number=${wordCount}`);
    const words = await res.json();
    // console.log(words[0]); // still logs the word
    return words[0];        // <-- return the word
  } catch (err) {
    console.error(err);
    return "error";         // fallback
  }
}


// // Functions

let currentSeed = null;

// Function: setRandomBackground
function setRandomBackground() {
  // Generate a new seed only if we don't already have one
  currentSeed = Math.floor(Math.random() * 100000);
  const imgSrc = `https://picsum.photos/seed/${currentSeed}/400/300`;

  // Set the background image
  memeDiv.style.backgroundImage = `url('${imgSrc}')`;
}


// generate phrase
async function generatePhrase() {

    let wordA = await getRandomWord();
    let wordB = await getRandomWord();
    let wordC = await getRandomWord();

    let randomNumber = Math.floor(Math.random() * 3); // generates a number between 0 and 2
    let topPhrase = "";

    switch (randomNumber) {
        case 0:
            topPhrase = `My ${wordA} when my ${wordB} ${wordC}`
            break;
    
        case 1:
            topPhrase = `My ${wordB} when my ${wordC} ${wordA}`
            break

        case 2:
            topPhrase = `My ${wordC} when my ${wordA} ${wordB}`
            break

        default:
            break;
    }

    let bottomWordA = await getRandomWord();
    let bottomWordB = await getRandomWord();
    let bottomWordC = await getRandomWord();
    let bottomWordD = await getRandomWord();

    let bottomRandomNumber = Math.floor(Math.random() * 3); // generates a number between 0 and 2
    let bottomPhrase = "";

    switch (bottomRandomNumber) {
        case 0:
            topPhrase = `My ${bottomWordA} when my ${bottomWordB} ${bottomWordC} ${bottomWordD}`
            break;
    
        case 1:
            topPhrase = `My ${bottomWordB} when my ${bottomWordC} ${bottomWordA} ${bottomWordD}`
            break

        case 2:
            topPhrase = `My ${bottomWordC} when my ${bottomWordA} ${bottomWordB} ${bottomWordD}`
            break

        default:
            break;
    }

    const topPhraseP = document.getElementById("top-phrase");
    const bottomPhraseP = document.getElementById("bottom-phrase");

    topPhraseP.innerText = `${topPhrase}`;
    bottomPhraseP.innerText = `${bottomPhrase}`;
}

// generateMeme
function generateMeme() {
    generatePhrase();
    setRandomBackground();
}

// Program Start
generateMeme();
