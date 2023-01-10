# Ivan Robles - Cartoon-Themed Board Games - React App

Do you like playing board games? Do you like cartoons? If you said yes, then this is the project for you. This website houses various board games that you can play locally, all from your favorite device! Pick a game, pick a cartoon theme, pick you character from that theme and start playing!

[Open Board Games Website](https://ivanroblesboardgames.netlify.app/)

## How it Was Made

The website was made using CSS and React.js (and HTML, technically). It starts as a main menu where the user can decide which board game they want to play. When a game is selected, the screen renders a title, a play area (containing a board and player information), a navigation bar, and a customization box. The customizations are next, where the user selects a theme, which updates CSS variables to display the page differently, and each player select their character tokens. Finally the game begins and a winner message displays, allowing the reset or switching of games. Because many components are carried over between games, using React was the best choice to render them. This means that aspects such as choosing the theme you want to play on stays the same (or almost the same) regardless of which game you chose to play. Essentially, buttons that cause the re-rendering of elements are simply changing state variables. 

## Games Included

Currently, the website allows users to play locally 3 different 2-player games: Tic-Tac-Toe, Connect-Four, and Reversi (Othello).

**In Tic-Tac-Toe**, players take turns placing their tokens on a 3x3 grid. The player to first get three in-a-row is the winner.

**Connect-Four** is similar to Tic-Tac-Toe, except for two key differences: players must get 4 in a row, and players can only place their tokens on the bottom-most available spot in the column picked, as if the entire board has gravity pulling the pieces from the bottom.

**In Reservsi**, also called Othello (although they have slight variations in their rules), the object of the game is to have the most tokens on the board once the board is full. Players take turns placing their token, each time having to "flank" or "capture" the opponents tokens in a straight line. For more detailed instructions on Reversi, please [click here](https://www.coolmathgames.com/blog/how-to-play-reversi-basics-and-best-strategies)

## Themes Included

Currently, each game has 3 different themes you can choose that changes the look of the entire site and determines which characters/game pieces you can choose from. The themes are:

[**Spongebob Squarepants**](https://www.nick.com/shows/spongebob-squarepants)

[**Marvel Comics**](https://www.marvel.com/comics?&options%5Boffset%5D=0&totalcount=12)

[**Pokemon**](https://www.pokemon.com/us/pokedex)

## Contact

Feel free to contact me for any reason! And if you want to learn more about me as a software engineer, check out my interactive [personal website](https://www.theivanrobles.com/) 

Email: ivanroblesmvp@gmail.com

