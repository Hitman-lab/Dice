var scores, roundScore, activePlayer, gamePlaying;

// initialization
init();

// For player 1 

document.querySelector('.btn-roll-player1').addEventListener('click', function() {
	
	// 1. Random Number generation
	var dice = Math.floor(Math.random() * 6) + 1;
	
	// Display random images according to the player rolled
	var diceDom = document.querySelector('.diceImage1');
	diceDom.src = 'images/dice' + dice + '.png';


});

// For player 2

document.querySelector('.btn-roll-player2').addEventListener('click', function() {

	// 1. Randorm Number generation
	var dice = Math.floor(Math.random() * 6) + 1;

	// Display random images according to the player rolled
	var diceDom = document.querySelector('.diceImage2');
	diceDom.src = 'images/dice'+ dice + '.png'; 


});


function init(){
	
	// initialize all the default value to 0 
	scores = 0;
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;

	// display nothing when app starts 
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';

}