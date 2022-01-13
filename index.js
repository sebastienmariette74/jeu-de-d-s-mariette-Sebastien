let roundPlayer1 = document.getElementById('current_score_player1')
roundPlayer1.innerHTML = 0;
let roundPlayer2 = document.getElementById('current_score_player2')
roundPlayer2.innerHTML = 0;

let newGame = document.getElementById('new_game');

let tirage = document.getElementById('dice');

let globalPlayer1 = document.getElementById('global_score_player1');
globalPlayer1.innerHTML = 0;
let globalPlayer2 = document.getElementById('global_score_player2');
globalPlayer2.innerHTML = 0;

let win = document.getElementById('winner')
win.innerHTML = "";

let handPlayer1 = document.getElementById('hand_player1');
let handPlayer2 = document.getElementById('hand_player2');

let roll_dice = document.getElementById('btn_roll_dice');
let hold = document.getElementById('hold');

handPlayer1.innerHTML = '<img class="hand" src="/images/hand.svg" alt="">';

let getRandom = function() {
  return Math.floor(Math.random() * 6) + 1 ;
};

function nb (){
  let number = getRandom();
  switch (number){
    case 1:
      tirage.innerHTML = '<img class="dice" src="/images/dice-1.svg" alt="">';
      break;
    case 2:
      tirage.innerHTML = '<img class="dice" src="/images/dice-2.svg" alt="">';
      break;
    case 3:
      tirage.innerHTML = '<img class="dice" src="/images/dice-3.svg" alt="">';
      break;
    case 4:
      tirage.innerHTML = '<img class="dice" src="/images/dice-4.svg" alt="">';
      break;
    case 5:
      tirage.innerHTML = '<img class="dice" src="/images/dice-5.svg" alt="">';
      break;
    default :
      tirage.innerHTML = '<img class="dice" src="/images/dice-6.svg" alt="">';
  };
  return number;
};

let player1Turn = true;
let player2Turn = false;

// en cliquant sur ROLL DICE on ajoute le résultat du lancer au score courant du joueur concerné
let rollDice = () => {
  roll_dice.addEventListener('click', function(event){
    if (win.innerHTML!=""){
      event.preventDefault();
    } else {
      let count = nb();
      if (player1Turn){
        handPlayer1.innerHTML = '<img class="hand" src="/images/hand.svg" alt="">';
        if (count !=1){
          roundPlayer1.innerHTML = parseInt(roundPlayer1.innerHTML) + count;
        } else {
          player1Turn = false;
          roundPlayer1.innerHTML = 0;
          handPlayer2.innerHTML = '<img class="hand" src="/images/hand.svg" alt="">';
          handPlayer1.innerHTML = '';
          event.stopPropagation();
        };
      }else {
        handPlayer2.innerHTML = '<img class="hand" src="/images/hand.svg" alt="">';      
        if (count !=1){
          roundPlayer2.innerHTML = parseInt(roundPlayer2.innerHTML) + count;        
        } else {
          player1Turn = true;
          roundPlayer2.innerHTML = 0;
          handPlayer1.innerHTML = '<img class="hand" src="/images/hand.svg" alt="">';
          handPlayer2.innerHTML = '';
          event.stopPropagation();
        };
      };     
    };
  });
};

// en cliquant sur HOLD on ajoute les points au score global du joueur concerné
let addPoints = () => {
  hold.addEventListener('click', (event)=>{   
    if (win.innerHTML!=""){
      event.preventDefault();
    } else if (player1Turn) {
      globalPlayer1.innerHTML = parseInt(globalPlayer1.innerHTML) + parseInt(roundPlayer1.innerHTML);
      roundPlayer1.innerHTML = 0; 
      handPlayer2.innerHTML = '<img class="hand" src="/images/hand.svg" alt="">';     
      handPlayer1.innerHTML = '';  
      tirage.innerHTML = '' ; 
      player1Turn = false;
    } else {
      globalPlayer2.innerHTML = parseInt(globalPlayer2.innerHTML) + parseInt(roundPlayer2.innerHTML);
      roundPlayer2.innerHTML = 0;  
      handPlayer1.innerHTML = '<img class="hand" src="/images/hand.svg" alt="">';     
      handPlayer2.innerHTML = ''; 
      tirage.innerHTML = '' ; 
      player1Turn = true; 
    };
    if (parseInt(globalPlayer1.innerHTML) >= 10){
      win.innerHTML = "Bravo Player 1 a gagné cette partie !!!";
      handPlayer1.innerHTML = ''; 
    } else if (parseInt(globalPlayer2.innerHTML) >= 10){
      win.innerHTML = "Bravo Player 2 a gagné cette partie !!!";
      handPlayer2.innerHTML = '';
    };
  }); 
}; 

// en cliquant sur NEW GAME on réinitialise une partie 
let playAgain = () => {
  newGame.addEventListener('click', ()=>{
    location.reload();
  })
};

rollDice();
addPoints();
playAgain();

