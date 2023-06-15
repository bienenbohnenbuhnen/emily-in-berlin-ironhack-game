# Emily in Berlin

## Introduction

This is a web browser-based game which combines HTML to structure the page and its elements, CSS to style it, and JavaScript manipulate the elements. I have used Object Oriented Programming to create a blueprint for each of the elements in the game (the character, obstacles, and power-ups), laying out how they interact with one another, and the environment in which they exist (the game view port). I also used and manipulated Document Object Model elements to create a dynamic and interactive game, which can be changed by using the mouse and keyboard's directional arrows.

The game is inspired by the experiences I and others have been exposed to since moving to Berlin from abroad; the obstacles and power-ups are tongue-in-cheek references to these experiences. The game also draws on the Netflix show 'Emily in Paris' for generating the character, who arrives in Paris somewhat oblivious to the culture, life in country, and social norms.

## Getting Started

Due to the basic nature of the project, it does not involve much specialised software to modify it once you have forked the GitHub repository. Here is what was used while developing the game:
- Visual Studio Code
- Live Server to run a development local server in your chosen browser

## Usage

In the following section, I will outline how to use the game, with the assitance of screenshots.

### The Start Screen
<img width="1302" alt="readme-image-1" src="https://github.com/bienenbohnenbuhnen/emily-in-berlin-ironhack-game/assets/125567008/f315a89e-34be-408f-8d90-fea2b8ceb604">

There are three main elements to the start screen.

1. The sound button toggles the sound on. Due to recent rule changes on Google Chrome, autoplay for audio and video has been disabled, requiring the user to interact with the window before the audio ro video can play.

2. The main element of the start screen is the information box. It sets the premise of the game, the obstacles and power-ups the user will encounter, and how to control the main character using the 'up' and 'down' arrows on the keyboard. Every time the character collides with an obstacle, they lose one of their four lives, and each power-up is worth 50 points.

3. The start button. This starts the game, removing the start screen from view and replacing it with the game view port.

### The Gameplay Screen
<img width="1183" alt="readme-image-2" src="https://github.com/bienenbohnenbuhnen/emily-in-berlin-ironhack-game/assets/125567008/e8360678-70ea-48fe-a493-cd0d6d98497e">

There are 5 main elements to the gameplay screen.

1. The 'Vital Signs' element, which displays the number of lives remaining, the user's current score, and the user's high score.

2. One of the four different power ups.

3. The user's cahracter.

4. One of the four obstacles.

5. The moving view port of the game.

### The Game Over Screen
<img width="1186" alt="readme-image-3" src="https://github.com/bienenbohnenbuhnen/emily-in-berlin-ironhack-game/assets/125567008/fb382724-b54e-4bb5-a3f0-f756678fc03a">

There are three main elements to the game over screen.

1. An end game image of the main character.

2. A game over message.

3. A restart game button.


## Future Tweaks

There are a few possible improvements to be added to the game. However, there is not currently an exact timeline for this. They include:

- Increasing difficulty levels
- Toggle button to turn the music off
- Randomly generated main character looks

## Contributors

Andrew Cockroft
