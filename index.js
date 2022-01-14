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

let begin = document.getElementById('begin')
begin.innerHTML = "";

let handPlayer1 = document.getElementById('hand_player1');
let handPlayer2 = document.getElementById('hand_player2');

let roll_dice = document.getElementById('btn_roll_dice');
let hold = document.getElementById('hold');

let beginRoleDiceP1 = 0;
let beginRoleDiceP2 = 0;

// let test = document.getElementById('test');
// test.innerHTML = "";

handPlayer1.innerHTML = '<img class="hand" src="/images/hand.svg" alt="">';

let partiesGagnéesP1 = 0;
let partiesGagnéesP2 = 0;

let partie1 = true;

let winnerBegin = false;

let player1Turn = true;
// let player2Turn = false;

let suite = false;
console.log(suite + 'premier suite');

let partie2 = false;
let partie3 = false;

let premierCoup = 0;

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


// en cliquant sur ROLL DICE on ajoute le résultat du lancer au score courant du joueur concerné
let rollDice = () => {
  roll_dice.addEventListener('click', function(event){
    console.log(partie1);
    // console.log(globalPlayer1.innerHTML);

    beginner();

    // if ( partie1 && roundPlayer1.innerHTML == 0){
    //   let lancer1 = nb();
    //   console.log(lancer1)
    //   roundPlayer1.innerHTML = lancer1;
    //   console.log(roundPlayer1.innerHTML);
    //   console.log(lancer1);
    //   handPlayer1.innerHTML = '';
    //   handPlayer2.innerHTML = '<img class="hand" src="/images/hand.svg" alt="">';
    //   begin.innerHTML = "Pour savoir qui commence <br> Player 2, lancez le dé !!! " ;
    // } else {
    //   let lancer2 = nb();
    //   console.log(lancer2);      
    //   roundPlayer2.innerHTML = lancer2;
    //   handPlayer1.innerHTML = '';
    //   handPlayer2.innerHTML = '';
    //   console.log(roundPlayer1.innerHTML + ' ' + roundPlayer2.innerHTML);
    //   // partie1 = false;
    //   if (roundPlayer1.innerHTML > roundPlayer2.innerHTML){
    //     handPlayer1.innerHTML = '<img class="hand" src="/images/hand.svg" alt="">';
    //     player1Turn = true;   
    //     // partie1 = false;
    //     begin.innerHTML = "Player 1 commence !" ;
    //   } else {
    //     handPlayer2.innerHTML = '<img class="hand" src="/images/hand.svg" alt="">';
    //     player1Turn = false; 
    //     // partie1 = false;  
    //     begin.innerHTML = "Player 2 commence !" ;
    //   };
    // };

    // let suite = true;
    // || suite === false )

    // console.log(suite + ' suite 2');
    // console.log(partie1 + ' partie1 avant roll dice');
    // console.log(partie2 + ' partie2 avant roll dice');
    // console.log(partie3 + ' partie3 avant roll dice');

    if (win.innerHTML != "" || partie1 || partie2) {
      // partie1;
      suite = true;
      if (partie2){partie2=false};
      if (partie1 === partie2){partie3 = true;
      };      
      // console.log('------------------');
      // console.log(partie1 + ' partie1 après roll dice');
      // console.log(partie2 + ' partie2 après roll dice');
      // console.log(partie3 + ' partie3 après roll dice');
      // console.log(suite + ' suite 3');
      console.log("if 2");
      // console.log(partie1);
      event.preventDefault();
      // (partie1 === false && (globalPlayer1 === 0 || globalPlayer2 === 0))
    } else if (partie3 ){
      console.log(premierCoup + ' avant');
      if (premierCoup === 0){
        globalPlayer1.innerHTML = 0;
        globalPlayer2.innerHTML = 0;
      };
      premierCoup ++; 
      console.log(premierCoup + ' après');
      begin.innerHTML = "";
      console.log("win.innerHTML");
      console.log("if 3");
      let count = nb();
      // test.innerHTML = count;
      if (player1Turn){
        // globalPlayer1.innerHTML = 0;
        // globalPlayer2.innerHTML = 0;
      console.log(win.innerHTML);
      // begin.innerHTML = "";
      handPlayer1.innerHTML = '<img class="hand" src="/images/hand.svg" alt="">';
      beginRoleDiceP1 = count;
        if (count !=1){
          roundPlayer1.innerHTML = parseInt(roundPlayer1.innerHTML) + count;
        } else {
          player1Turn = false;
          roundPlayer1.innerHTML = 0;
          handPlayer2.innerHTML = '<img class="hand" src="images/hand.svg" alt="">';
          handPlayer1.innerHTML = '';
          // event.stopPropagation();
        };
      }else {
        // globalPlayer1.innerHTML = 0;
        // globalPlayer2.innerHTML = 0;
        console.log(win.innerHTML);
        win.innerHTML = "";
        handPlayer2.innerHTML = '<img class="hand" src="/images/hand.svg" alt="">';      
        if (count !=1){
          roundPlayer2.innerHTML = parseInt(roundPlayer2.innerHTML) + count;        
        } else {
          player1Turn = true;
          roundPlayer2.innerHTML = 0;
          handPlayer1.innerHTML = '<img class="hand" src="images/hand.svg" alt="">';
          handPlayer2.innerHTML = '';
          // event.stopPropagation();
        };
      };     
    };
  });
};

// Chaque joueur lance le dé. Celui qui a le score le plus grand commence
let beginner = () => {
  if (winnerBegin){    
    console.log(winnerBegin + "winnerbegin");
    event.preventDefault();
  } else if ( partie1 && globalPlayer1.innerHTML == 0){
    console.log(winnerBegin + "winnerbegin2");
    let lancer1 = nb();
    // console.log(lancer1)
    globalPlayer1.innerHTML = lancer1;
    // globalPlayer2.innerHTML = 0;
    console.log(globalPlayer1.innerHTML);
    console.log(lancer1);
    handPlayer1.innerHTML = '';
    handPlayer2.innerHTML = '<img class="hand" src="/images/hand.svg" alt="">';
    begin.innerHTML = "Pour savoir qui commence <br> Player 2, lancez le dé !!! " ;
    
  } else {
    let lancer2 = nb();
    // console.log(lancer2);      
    globalPlayer2.innerHTML = lancer2;
    handPlayer1.innerHTML = '';
    handPlayer2.innerHTML = '';
    console.log(globalPlayer1.innerHTML + ' ' + globalPlayer2.innerHTML);
    if (globalPlayer1.innerHTML > globalPlayer2.innerHTML){
      handPlayer1.innerHTML = '<img class="hand" src="/images/hand.svg" alt="">';
      player1Turn = true; 
      begin.innerHTML = "Player 1 commence !" ;
      tirage.innerHTML =""
      partie1 = false;
      partie2 = true;
      winnerBegin = true;
    } else if (globalPlayer1.innerHTML < globalPlayer2.innerHTML){
      handPlayer2.innerHTML = '<img class="hand" src="/images/hand.svg" alt="">';
      player1Turn = false; 
      begin.innerHTML = "Player 2 commence !" ;
      tirage.innerHTML ="";
      partie1 = false;
      partie2 = true;
      winnerBegin = true;
    } else {
      handPlayer1.innerHTML = '<img class="hand" src="/images/hand.svg" alt="">';
      handPlayer2.innerHTML = "";
      // partie1 = false;  
      // roundPlayer1.innerHTML = globalPlayer1.innerhtml;
      globalPlayer1.innerHTML = 0;
      // roundPlayer2.innerHTML = globalPlayer2.innerhtml;
      globalPlayer2.innerHTML = 0;
      tirage.innerHTML ="";
      begin.innerHTML = "égalité <br>Pour savoir qui commence <br>Player 1, lancez le dé !!! ";
      partie1;
    };
  };
  // partie1 = false;
  console.log(partie1 + ' partie1');
  console.log(winnerBegin + ' winnerbegin');
};

// let rollDice = () => {
//   roll_dice.addEventListener('click', function(event){
//     console.log(win.innerHTML);
//     let count = nb();
//     if (player1Turn){
//       handPlayer1.innerHTML = '<img class="hand" src="/images/hand.svg" alt="">';
//       if (count !=1){
//         roundPlayer1.innerHTML = parseInt(roundPlayer1.innerHTML) + count;
//       } else {
//         player1Turn = false;
//         roundPlayer1.innerHTML = 0;
//         handPlayer2.innerHTML = '<img class="hand" src="/images/hand.svg" alt="">';
//         handPlayer1.innerHTML = '';
//         event.stopPropagation();
//       };
//     } else {
//       handPlayer2.innerHTML = '<img class="hand" src="/images/hand.svg" alt="">';      
//       if (count !=1){
//         roundPlayer2.innerHTML = parseInt(roundPlayer2.innerHTML) + count;        
//       } else {
//         player1Turn = true;
//         roundPlayer2.innerHTML = 0;
//         handPlayer1.innerHTML = '<img class="hand" src="/images/hand.svg" alt="">';
//         handPlayer2.innerHTML = '';
//         event.stopPropagation();
//       };
//     };     
//     });
//     console.log(win.innerHTML);
//   };


// console.log('test');

// en cliquant sur HOLD on ajoute les points au score global du joueur concerné
let addPoints = () => {
  hold.addEventListener('click', (event) => {   
    if (partie1 || partie2 || win.innerHTML != ""){
      console.log(partie1 + ' partie 1' + partie2 + ' partie 2');
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
        win.innerHTML = "Player 1 a gagné cette partie !!! <br> Player 1 mène " + partiesGagnéesP1 + " partie(s) à " + partiesGagnéesP2 + "<br> Honneur au perdant !!! ";
        handPlayer1.innerHTML = ''; 
        handPlayer2.innerHTML = '<img class="hand" src="/images/hand.svg" alt="">'; 
        player1Turn = false; 
      } else if (partiesGagnéesP1 < partiesGagnéesP2) {
        win.innerHTML = "Player 1 a gagné cette partie !!! <br> Player 2 mène " + partiesGagnéesP2 + " partie(s) à " + partiesGagnéesP1 + "<br> Honneur au perdant !!! ";
        handPlayer1.innerHTML = ''; 
        handPlayer2.innerHTML = '<img class="hand" src="/images/hand.svg" alt="">'; 
        player1Turn = false;
      } else {
        win.innerHTML = "Player 1 a gagné cette partie !!! <br> Vous êtes à " + partiesGagnéesP1 + " partout " + "<br> Honneur au perdant !!! ";
        handPlayer1.innerHTML = ''; 
        handPlayer2.innerHTML = '<img class="hand" src="/images/hand.svg" alt="">'; 
        player1Turn = false;
      };
    } else if (parseInt(globalPlayer2.innerHTML) >= 10){  
      event.preventDefault();       
      partiesGagnéesP2 ++;
      if (partiesGagnéesP1 > partiesGagnéesP2) {
        win.innerHTML = "Player 2 a gagné cette partie !!! <br> Player 1 mène " + partiesGagnéesP1 + " partie(s) à " + partiesGagnéesP2 + "<br> Honneur au perdant !!! ";
        handPlayer2.innerHTML = ''; 
        handPlayer1.innerHTML = '<img class="hand" src="/images/hand.svg" alt="">'; 
        player1Turn = true; 
      } else if (partiesGagnéesP1 < partiesGagnéesP2) {
        win.innerHTML = "Player 2 a gagné cette partie !!! <br> Player 2 mène " + partiesGagnéesP2 + " partie(s) à " + partiesGagnéesP1 + "<br> Honneur au perdant !!! ";
        handPlayer2.innerHTML = ''; 
        handPlayer1.innerHTML = '<img class="hand" src="/images/hand.svg" alt="">'; 
        player1Turn = true;  
      } else {
        win.innerHTML = "Player 2 a gagné cette partie !!! <br> Vous êtes à " + partiesGagnéesP2 + " partout " + "<br> Honneur au perdant !!! ";
        handPlayer2.innerHTML = ''; 
        handPlayer1.innerHTML = '<img class="hand" src="/images/hand.svg" alt="">'; 
        player1Turn = true; 
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
  });
};

rollDice();
addPoints();
playAgain();

