let roundPlayer1 = document.getElementById('current_score_player1'), 
roundPlayer2 = document.getElementById('current_score_player2');
roundPlayer1.innerHTML = 0;
roundPlayer2.innerHTML = 0;

let player1 = document.getElementById('player1'), 
player2 = document.getElementById('player2');
player2.style.opacity = '0.3';

let newGame = document.getElementById('new_game');
newGame.style.opacity = '0.3';

let tirage = document.getElementById('dice');

let globalPlayer1 = document.getElementById('global_score_player1'),
globalPlayer2 = document.getElementById('global_score_player2');
globalPlayer1.innerHTML = 0;
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

handPlayer1.innerHTML = '<img class="hand" src="images/hand.svg" alt="">';

let partiesGagnéesP1 = 0;
let partiesGagnéesP2 = 0;

let partie1 = true;
let partie2 = false;
let partie3 = false;
let winnerBegin = false;
let player1Turn = true;
let premierCoup = 0;

// réinitialise les scores globaux à 0 (au bout d'1 seconde) après avoir déterminé quel joueur commence.
let timeOutGlobal;
function InitGlobalPlayer (){
  timeOutGlobal = window.setTimeout(changeGlobal, 1000);
};
function changeGlobal (){
  globalPlayer1.innerHTML = 0;
  globalPlayer2.innerHTML = 0;
};

// fait passer l'opacité de l'affichage du lancer de 1 à 0 après 500 milliseconde lorsque le lancer est égal à 1
let timeOutOpacity;
function opacityDice (){
  timeOutOpacity = window.setTimeout(opacityTirage, 500);
};
function opacityTirage (){
  if (tirage.style.opacity === '1'){
    tirage.style.opacity = '0';
  }
  else {
    tirage.style.opacity = '1';
  };
};

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

// Chaque joueur lance le dé. Celui qui a le score le plus grand commence
let beginner = () => {
  if (winnerBegin){    
    event.preventDefault();
  } else if ( partie1 && globalPlayer1.innerHTML == 0){
    globalPlayer1.style.opacity = '1';
    globalPlayer2.style.opacity = '1';
    let lancer1 = nb();
    player1.style.opacity = '0.3';
    player2.style.opacity = '1';
    globalPlayer1.innerHTML = lancer1;
    handPlayer1.innerHTML = '';
    handPlayer2.innerHTML = '<img class="hand" src="images/hand.svg" alt="">';
    begin.innerHTML = "Player 2, lancez le dé !!! " ;
    hold.style.opacity = '0.3';
  } else {
    globalPlayer1.style.opacity = '1';
    globalPlayer2.style.opacity = '1';
    let lancer2 = nb();    
    globalPlayer2.innerHTML = lancer2;
    handPlayer1.innerHTML = '';
    handPlayer2.innerHTML = '';
    if (globalPlayer1.innerHTML > globalPlayer2.innerHTML){
      player1.style.opacity = '1';
      player2.style.opacity = '0.3';
      handPlayer1.innerHTML = '<img class="hand" src="images/hand.svg" alt="">';
      begin.innerHTML = "Player 1 commence !" ;
      tirage.innerHTML =""
      player1Turn = true; 
      partie1 = false;
      partie2 = true;
      winnerBegin = true;
      hold.style.opacity = '0.3';   
      InitGlobalPlayer();
    } else if (globalPlayer1.innerHTML < globalPlayer2.innerHTML){
      player1.style.opacity = '0.3';
      player2.style.opacity = '1';
      handPlayer2.innerHTML = '<img class="hand" src="images/hand.svg" alt="">';
      begin.innerHTML = "Player 2 commence !" ;
      tirage.innerHTML ="";
      player1Turn = false; 
      partie1 = false;
      partie2 = true;
      winnerBegin = true;
      hold.style.opacity = '0.3';      
      InitGlobalPlayer();
    } else {
      player1.style.opacity = '1';
      player2.style.opacity = '0.3';
      handPlayer1.innerHTML = '<img class="hand" src="images/hand.svg" alt="">';
      handPlayer2.innerHTML = "";
      begin.innerHTML = "égalité <br>Pour savoir qui commence <br>Player 1, lancez le dé !!! ";
      tirage.innerHTML ="";
      globalPlayer1.style.opacity = '1';
      globalPlayer2.style.opacity = '1';
      partie1;
      hold.style.opacity = '0.3';      
      InitGlobalPlayer();
    };
  };
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
      if (premierCoup === 0){
        globalPlayer1.innerHTML = 0;
        globalPlayer2.innerHTML = 0;
      };
      premierCoup ++; 
      begin.innerHTML = "";
      let count = nb();
      if (player1Turn){
      player1.style.opacity = '1';
      player2.style.opacity = '0.3';
      handPlayer1.innerHTML = '<img class="hand" src="images/hand.svg" alt="">';
      beginRoleDiceP1 = count;
        if (count !=1){
          roundPlayer1.innerHTML = parseInt(roundPlayer1.innerHTML) + count;
          if (roundPlayer1.innerHTML > 0 || roundPlayer2.innerHTML > 0){
            hold.style.opacity = '1';
          } else {
            hold.style.opacity = '0.3';
          };
        } else {
          player1.style.opacity = '0.3';
          player2.style.opacity = '1';
          player1Turn = false;
          roundPlayer1.innerHTML = 0;
          handPlayer2.innerHTML = '<img class="hand" src="images/hand.svg" alt="">';
          handPlayer1.innerHTML = '';
          hold.style.opacity = '0.3';
          opacityDice();
        };
      }else {
        player1.style.opacity = '0.3';
        player2.style.opacity = '1';
        win.innerHTML = "";
        handPlayer2.innerHTML = '<img class="hand" src="images/hand.svg" alt="">';      
        if (count !=1){
          roundPlayer2.innerHTML = parseInt(roundPlayer2.innerHTML) + count;        
          if (roundPlayer1.innerHTML > 0 || roundPlayer2.innerHTML > 0){
            hold.style.opacity = '1';
          } else {
            hold.style.opacity = '0.3';
          }
        } else {
          player1.style.opacity = '1';
          player2.style.opacity = '0.3';
          player1Turn = true;
          roundPlayer2.innerHTML = 0;
          handPlayer1.innerHTML = '<img class="hand" src="images/hand.svg" alt="">';
          handPlayer2.innerHTML = '';
          hold.style.opacity = '0.3';
          opacityDice();
        };
      };     
    };
  });
};

// en cliquant sur HOLD on ajoute les points au score global du joueur concerné
let addPoints = () => {
  hold.addEventListener('click', (event) => {   
    if (partie1 || partie2 || win.innerHTML != "" || begin.innerHTML != "" || (roundPlayer1.innerHTML === roundPlayer2.innerHTML)){
      event.preventDefault();
    } else if (player1Turn) {
      globalPlayer1.innerHTML = parseInt(globalPlayer1.innerHTML) + parseInt(roundPlayer1.innerHTML);
      roundPlayer1.innerHTML = 0; 
      handPlayer2.innerHTML = '<img class="hand" src="images/hand.svg" alt="">';     
      handPlayer1.innerHTML = '';  
      tirage.innerHTML = '' ; 
      player1Turn = false;
      hold.style.opacity = '0.3';
    } else {
      globalPlayer2.innerHTML = parseInt(globalPlayer2.innerHTML) + parseInt(roundPlayer2.innerHTML);
      roundPlayer2.innerHTML = 0;  
      handPlayer1.innerHTML = '<img class="hand" src="images/hand.svg" alt="">';     
      handPlayer2.innerHTML = ''; 
      tirage.innerHTML = '' ; 
      player1Turn = true; 
      hold.style.opacity = '0.3';
    };

    if (win.innerHTML != "" || begin.innerHTML != ""){
      event.preventDefault;
    } else if (parseInt(globalPlayer1.innerHTML) >= 10){   
      event.preventDefault();   
      partiesGagnéesP1 ++;
      if (partiesGagnéesP1 > partiesGagnéesP2) {
        win.innerHTML = "Player 1 a gagné !!! <br> Player 1 mène " + partiesGagnéesP1 + " partie(s) à " + partiesGagnéesP2 + "<br> Honneur au perdant !!! ";
        handPlayer1.style.display = 'none';
        handPlayer2.style.display = 'none';
        player1Turn = false;
        roll_dice.style.opacity = '0.3';
        hold.style.opacity = '0.3';
        newGame.style.opacity = '1';    
        player1.style.opacity = '0.3';    
        player2.style.opacity = '0.3';    
      } else if (partiesGagnéesP1 < partiesGagnéesP2) {
        win.innerHTML = "Player 1 a gagné !!! <br> Player 2 mène " + partiesGagnéesP2 + " partie(s) à " + partiesGagnéesP1 + "<br> Honneur au perdant !!! ";
        handPlayer1.style.display = 'none';
        handPlayer2.style.display = 'none';
        player1Turn = false;
        roll_dice.style.opacity = '0.3';
        hold.style.opacity = '0.3';
        newGame.style.opacity = '1';
        player1.style.opacity = '0.3';    
        player2.style.opacity = '0.3';
      } else {
        win.innerHTML = "Player 1 a gagné !!! <br> Vous êtes à " + partiesGagnéesP1 + " partout " + "<br> Honneur au perdant !!! ";
        handPlayer1.style.display = 'none';
        handPlayer2.style.display = 'none';
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
        handPlayer1.style.display = 'none';
        handPlayer2.style.display = 'none';
        player1Turn = true; 
        roll_dice.style.opacity = '0.3';
        hold.style.opacity = '0.3';
        newGame.style.opacity = '1';
        player1.style.opacity = '0.3';    
        player2.style.opacity = '0.3';
      } else if (partiesGagnéesP1 < partiesGagnéesP2) {
        win.innerHTML = "Player 2 a gagné !!! <br> Player 2 mène " + partiesGagnéesP2 + " partie(s) à " + partiesGagnéesP1 + "<br> Honneur au perdant !!! ";
        handPlayer1.style.display = 'none';
        handPlayer2.style.display = 'none';
        player1Turn = true;  
        roll_dice.style.opacity = '0.3';
        hold.style.opacity = '0.3';
        newGame.style.opacity = '1';
        player1.style.opacity = '0.3';    
        player2.style.opacity = '0.3';
      } else {
        win.innerHTML = "Player 2 a gagné !!! <br> Vous êtes à " + partiesGagnéesP2 + " partout " + "<br> Honneur au perdant !!! ";
        handPlayer1.style.display = 'none';
        handPlayer2.style.display = 'none';
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
    hold.style.opacity = '0.3';
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

