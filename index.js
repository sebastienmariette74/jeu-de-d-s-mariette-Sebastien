let roundPlayer1 = document.getElementById('current_score_player1')
roundPlayer1.innerHTML = 0;
let roundPlayer2 = document.getElementById('current_score_player2')
roundPlayer2.innerHTML = 0;

let player1 = document.getElementById('player1');
let player2 = document.getElementById('player2');
player2.style.opacity = '0.3';

let newGame = document.getElementById('new_game');
newGame.style.opacity = '0.3';

let tirage = document.getElementById('dice'), 
fadeInInterval,
fadeOutInterval;

let globalPlayer1 = document.getElementById('global_score_player1');
globalPlayer1.innerHTML = 0;
let globalPlayer2 = document.getElementById('global_score_player2');
globalPlayer2.innerHTML = 0;

let win = document.getElementById('winner')
win.innerHTML = "";

let begin = document.getElementById('begin')
begin.innerHTML = "";

let handPlayer1 = document.getElementById('hand_player1');
let handPlayer2 = document.getElementById('hand_player2');

let roll_dice = document.getElementById('btn_roll_dice');
let hold = document.getElementById('hold');
hold.style.opacity = '0.3';

let beginRoleDiceP1 = 0;
let beginRoleDiceP2 = 0;

// let test = document.getElementById('test');
// test.innerHTML = "";

handPlayer1.innerHTML = '<img class="hand" src="images/hand.svg" alt="">';

let partiesGagnéesP1 = 0;
let partiesGagnéesP2 = 0;

let partie1 = true;
let partie2 = false;
let partie3 = false;

let winnerBegin = false;

let player1Turn = true;

let premierCoup = 0;
    
let fadeOut = () => {
    
// clearInterval(fadeInInterval);
clearInterval(fadeOutInterval);

tirage.fadeOut = function(timing) {
var newValue = 1;
tirage.style.opacity = 1;

fadeOutInterval = setInterval(function(){ 

if (newValue > 0) {
  newValue -= 0.01;
} else if (newValue < 0) {
  tirage.style.opacity = 0;
  clearInterval(fadeOutInterval);
};

tirage.style.opacity = newValue;

}, timing);

}

tirage.fadeOut(4);
console.log(tirage.style.opacity);
};


// var opacity = 1;
// var intervalID = 0;
// // window.onload = fadeout;
// // let newGame = document.getElementById("new_game");
// console.log(newGame.style.opacity);


// function fadeout(){
//   setInterval(hide, 100);
// };

// function hide(){
//   // let tirage = document.getElementById("dice");
//   // newGame.style.opacity = '1';
//   // opacity = opacity - 0.1;
//   // if (opacity > 0){  
//   //   tirage.style.opacity = opacity;
//   // } else if (opacity === 0){
//   //   setInterval(intervalID); 
//   // };

//   if(opacity > 0){
//     opacity = opacity - 0.1;
//     tirage.style.opacity = opacity;
//   } else if (opacity < 0){
//     tirage.style.opacity = 0;
//     clearInterval(intervalID); 
//   };
//   console.log(tirage.style.opacity);

// }; 

// console.log(newGame.style.opacity);
// fadeout();

// function fadeOutEffect() {
//   let newGameDisplay = document.getElementById("new_game");
//   let fadeEffect = setInterval(function () {
//       if (!newGameDisplay.style.opacity) {
//         newGameDisplay.style.opacity = 1;
//       }
//       if (newGameDisplay.style.opacity > 0) {
//         newGameDisplay.style.opacity -= 0.1;
//       } else {
//           clearInterval(fadeEffect);
//       }
//   }, 200);
// };

if (partiesGagnéesP1 === partiesGagnéesP2){
  begin.innerHTML = "Pour savoir qui commence <br> Player 1, lancez le dé !!! " 
}

// fonction permettant de trouver un nombre aléatoire entre 1 et 6
let getRandom = function() {
  return Math.floor(Math.random() * 6) + 1 ;
};

// trouve un nombre aléatoire et intègre l'image de la face du dé correspondant au nombre trouvé dans le HTML
function nb (){
  let number = getRandom();
  switch (number){
    case 1:
      tirage.innerHTML = '<img class="dice" src="images/dice-1.svg" alt="">';
      break;
    case 2:
      tirage.innerHTML = '<img class="dice" src="images/dice-2.svg" alt="">';
      break;
    case 3:
      tirage.innerHTML = '<img class="dice" src="images/dice-3.svg" alt="">';
      break;
    case 4:
      tirage.innerHTML = '<img class="dice" src="images/dice-4.svg" alt="">';
      break;
    case 5:
      tirage.innerHTML = '<img class="dice" src="images/dice-5.svg" alt="">';
      break;
    default :
      tirage.innerHTML = '<img class="dice" src="images/dice-6.svg" alt="">';
  };
  return number;
};

// en cliquant sur ROLL DICE on ajoute le résultat du lancer au score courant du joueur concerné sauf s'il tire le dé 1.
let rollDice = () => {
  roll_dice.addEventListener('click', function(event){

    beginner();    

    if (win.innerHTML != "" || partie1 || partie2) {
      if (partie2){partie2=false};
      if (partie1 === partie2){partie3 = true;};            
      event.preventDefault();
    } else if (partie3 ){
      tirage.style.opacity = '1';
      opacity = 1;
      if (premierCoup === 0){
        globalPlayer1.innerHTML = 0;
        globalPlayer2.innerHTML = 0;
      };
      premierCoup ++; 
      begin.innerHTML = "";
      let count = nb();
      if (player1Turn){
      // tirage.style.opacity = '1';
      player1.style.opacity = '1';
      player2.style.opacity = '0.3';
      handPlayer1.innerHTML = '<img class="hand" src="images/hand.svg" alt="">';
      beginRoleDiceP1 = count;
        if (count !=1){

          roundPlayer1.innerHTML = parseInt(roundPlayer1.innerHTML) + count;
        } else {
          opacity = 1;
          player1.style.opacity = '0.3';
          player2.style.opacity = '1';
          player1Turn = false;
          roundPlayer1.innerHTML = 0;
          handPlayer2.innerHTML = '<img class="hand" src="images/hand.svg" alt="">';
          handPlayer1.innerHTML = '';
          fadeOut();
          // fadeOutEffect();
          // dice.style.opacity = '1';
        };
      }else {
        // tirage.style.opacity = '1';
        player1.style.opacity = '0.3';
        player2.style.opacity = '1';
        win.innerHTML = "";
        handPlayer2.innerHTML = '<img class="hand" src="images/hand.svg" alt="">';      
        if (count !=1){
          roundPlayer2.innerHTML = parseInt(roundPlayer2.innerHTML) + count;        
        } else {
          opacity = 1;
          player1.style.opacity = '1';
          player2.style.opacity = '0.3';
          player1Turn = true;
          roundPlayer2.innerHTML = 0;
          handPlayer1.innerHTML = '<img class="hand" src="images/hand.svg" alt="">';
          handPlayer2.innerHTML = '';
          fadeOut();
          // fadeOutEffect();
          // tirage.style.opacity ='1';
          // controle.log(tirage.style.opacity);
        };
      };     
    };
  });
};
dice.style.opacity = '1';
// Chaque joueur lance le dé. Celui qui a le score le plus grand commence
let beginner = () => {
  if (winnerBegin){    
    event.preventDefault();
  } else if ( partie1 && globalPlayer1.innerHTML == 0){
    let lancer1 = nb();
    player1.style.opacity = '0.3';
    player2.style.opacity = '1';
    globalPlayer1.innerHTML = lancer1;
    handPlayer1.innerHTML = '';
    handPlayer2.innerHTML = '<img class="hand" src="images/hand.svg" alt="">';
    begin.innerHTML = "Player 2, lancez le dé !!! " ;
    hold.style.opacity = '0.3';
  } else {
    let lancer2 = nb();    
    globalPlayer2.innerHTML = lancer2;
    handPlayer1.innerHTML = '';
    handPlayer2.innerHTML = '';
    if (globalPlayer1.innerHTML > globalPlayer2.innerHTML){
      player1.style.opacity = '1';
      player2.style.opacity = '0.3';
      handPlayer1.innerHTML = '<img class="hand" src="images/hand.svg" alt="">';
      player1Turn = true; 
      begin.innerHTML = "Player 1 commence !" ;
      tirage.innerHTML =""
      partie1 = false;
      partie2 = true;
      winnerBegin = true;
      hold.style.opacity = '1';
    } else if (globalPlayer1.innerHTML < globalPlayer2.innerHTML){
      player1.style.opacity = '0.3';
      player2.style.opacity = '1';
      handPlayer2.innerHTML = '<img class="hand" src="images/hand.svg" alt="">';
      player1Turn = false; 
      begin.innerHTML = "Player 2 commence !" ;
      tirage.innerHTML ="";
      partie1 = false;
      partie2 = true;
      winnerBegin = true;
      hold.style.opacity = '1';
    } else {
      player1.style.opacity = '1';
      player2.style.opacity = '0.3';
      handPlayer1.innerHTML = '<img class="hand" src="images/hand.svg" alt="">';
      handPlayer2.innerHTML = "";
      globalPlayer1.innerHTML = 0;
      globalPlayer2.innerHTML = 0;
      tirage.innerHTML ="";
      begin.innerHTML = "égalité <br>Pour savoir qui commence <br>Player 1, lancez le dé !!! ";
      partie1;
    };
  };
};

// en cliquant sur HOLD on ajoute les points au score global du joueur concerné
let addPoints = () => {
  hold.addEventListener('click', (event) => {   
    if (partie1 || partie2 || win.innerHTML != "" || begin.innerHTML != ""){
      event.preventDefault();
    } else if (player1Turn) {
      globalPlayer1.innerHTML = parseInt(globalPlayer1.innerHTML) + parseInt(roundPlayer1.innerHTML);
      roundPlayer1.innerHTML = 0; 
      handPlayer2.innerHTML = '<img class="hand" src="images/hand.svg" alt="">';     
      handPlayer1.innerHTML = '';  
      tirage.innerHTML = '' ; 
      player1Turn = false;
    } else {
      globalPlayer2.innerHTML = parseInt(globalPlayer2.innerHTML) + parseInt(roundPlayer2.innerHTML);
      roundPlayer2.innerHTML = 0;  
      handPlayer1.innerHTML = '<img class="hand" src="images/hand.svg" alt="">';     
      handPlayer2.innerHTML = ''; 
      tirage.innerHTML = '' ; 
      player1Turn = true; 
    };

    if (win.innerHTML != "" || begin.innerHTML != ""){
      event.preventDefault;
    } else if (parseInt(globalPlayer1.innerHTML) >= 10){   
      event.preventDefault();   
      partiesGagnéesP1 ++;
      if (partiesGagnéesP1 > partiesGagnéesP2) {
        win.innerHTML = "Player 1 a gagné !!! <br> Player 1 mène " + partiesGagnéesP1 + " partie(s) à " + partiesGagnéesP2 + "<br> Honneur au perdant !!! ";
        // handPlayer1.innerHTML = ''; 
        // handPlayer2.innerHTML = ''; 
        handPlayer1.style.display = 'none';
        handPlayer2.style.display = 'none';
        // handPlayer2.innerHTML = '<img class="hand" src="images/hand.svg" alt="">'; 
        player1Turn = false;
        roll_dice.style.opacity = '0.3';
        hold.style.opacity = '0.3';
        newGame.style.opacity = '1';    
        player1.style.opacity = '0.3';    
        player2.style.opacity = '0.3';    
      } else if (partiesGagnéesP1 < partiesGagnéesP2) {
        win.innerHTML = "Player 1 a gagné !!! <br> Player 2 mène " + partiesGagnéesP2 + " partie(s) à " + partiesGagnéesP1 + "<br> Honneur au perdant !!! ";
        // handPlayer1.innerHTML = ''; 
        // handPlayer2.innerHTML = ''; 
        handPlayer1.style.display = 'none';
        handPlayer2.style.display = 'none';
        // handPlayer2.innerHTML = '<img class="hand" src="images/hand.svg" alt="">'; 
        player1Turn = false;
        roll_dice.style.opacity = '0.3';
        hold.style.opacity = '0.3';
        newGame.style.opacity = '1';
        player1.style.opacity = '0.3';    
        player2.style.opacity = '0.3';
      } else {
        win.innerHTML = "Player 1 a gagné !!! <br> Vous êtes à " + partiesGagnéesP1 + " partout " + "<br> Honneur au perdant !!! ";
        // handPlayer1.innerHTML = ''; 
        // handPlayer2.innerHTML = ''; 
        handPlayer1.style.display = 'none';
        handPlayer2.style.display = 'none';
        // handPlayer2.innerHTML = '<img class="hand" src="images/hand.svg" alt="">'; 
        player1Turn = false;
        roll_dice.style.opacity = '0.3';
        hold.style.opacity = '0.3';
        newGame.style.opacity = '1';
        player1.style.opacity = '0.3';    
        player2.style.opacity = '0.3';
      };
    } else if (parseInt(globalPlayer2.innerHTML) >= 10){  
      event.preventDefault();       
      partiesGagnéesP2 ++;
      if (partiesGagnéesP1 > partiesGagnéesP2) {
        win.innerHTML = "Player 2 a gagné !!! <br> Player 1 mène " + partiesGagnéesP1 + " partie(s) à " + partiesGagnéesP2 + "<br> Honneur au perdant !!! ";
        // handPlayer1.innerHTML = ''; 
        // handPlayer2.innerHTML = ''; 
        handPlayer1.style.display = 'none';
        handPlayer2.style.display = 'none';
        // handPlayer2.innerHTML = '<img class="hand" src="images/hand.svg" alt="">'; 
        player1Turn = true; 
        roll_dice.style.opacity = '0.3';
        hold.style.opacity = '0.3';
        newGame.style.opacity = '1';
        player1.style.opacity = '0.3';    
        player2.style.opacity = '0.3';
      } else if (partiesGagnéesP1 < partiesGagnéesP2) {
        win.innerHTML = "Player 2 a gagné !!! <br> Player 2 mène " + partiesGagnéesP2 + " partie(s) à " + partiesGagnéesP1 + "<br> Honneur au perdant !!! ";
        // handPlayer1.innerHTML = ''; 
        // handPlayer2.innerHTML = ''; 
        handPlayer1.style.display = 'none';
        handPlayer2.style.display = 'none';
        // handPlayer2.innerHTML = '<img class="hand" src="images/hand.svg" alt="">'; 
        player1Turn = true;  
        roll_dice.style.opacity = '0.3';
        hold.style.opacity = '0.3';
        newGame.style.opacity = '1';
        player1.style.opacity = '0.3';    
        player2.style.opacity = '0.3';
      } else {
        win.innerHTML = "Player 2 a gagné !!! <br> Vous êtes à " + partiesGagnéesP2 + " partout " + "<br> Honneur au perdant !!! ";
        // handPlayer1.innerHTML = ''; 
        // handPlayer2.innerHTML = ''; 
        handPlayer1.style.display = 'none';
        handPlayer2.style.display = 'none';
        // handPlayer2.innerHTML = '<img class="hand" src="images/hand.svg" alt="">'; 
        player1Turn = true; 
        roll_dice.style.opacity = '0.3';
        hold.style.opacity = '0.3';
        newGame.style.opacity = '1';
        player1.style.opacity = '0.3';    
        player2.style.opacity = '0.3';
      };
    };
  }); 
}; 

// en cliquant sur NEW GAME on réinitialise une partie 
let playAgain = () => {
  newGame.addEventListener('click', ()=>{
    roundPlayer1.innerHTML = 0;
    roundPlayer2.innerHTML = 0;
    globalPlayer1.innerHTML = 0;
    globalPlayer2.innerHTML = 0;
    win.innerHTML = "";  
    roll_dice.style.opacity = '1';
    hold.style.opacity = '1';
    newGame.style.opacity = '0.3';
    handPlayer1.style.display = 'block';
    handPlayer2.style.display = 'block';
    if (player1Turn){
      player1.style.opacity = '1';
    } else {
      player2.style.opacity = '1';
    };

  });
};



rollDice();
addPoints();
playAgain();

