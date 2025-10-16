# Absurd Meme Generator

A playful web app that generates absurd, random memes at the click of a button. Each meme features a top phrase made from random words, over a randomly sourced background image.

## Features
- Randomly generated phrases
- Random background images from [Picsum Photos](https://picsum.photos/)
- Fully client-side — no backend needed
- Instant updates by clicking **Generate Meme**

## How It Works
1. Fetches words from the [Random Word API](https://random-word-api.herokuapp.com/word)
2. Assembles them into phrases like:  
   `My [wordA] when my [wordB] [wordC] [wordD]`
3. Sets a random image as the background
4. Updates phrases and background on each button click

## Usage
1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/random-meme-generator.git
