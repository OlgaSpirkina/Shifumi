function playShifumi(){
let firstPlayer = document.getElementById('firstPlayer').value;
let secondPlayer = document.getElementById('secondPlayer').value;
if(isNaN(firstPlayer && secondPlayer)){
  if ((firstPlayer == "pierre" && secondPlayer == "ciseau") || (firstPlayer == "papier" && secondPlayer == "pierre") || (firstPlayer === "ciseau" && secondPlayer === "papier"))
  {
    alert("Le premier joueur a gagné");
  }else if((secondPlayer == "pierre" && firstPlayer == "ciseau") || (secondPlayer == "papier" && firstPlayer == "pierre") || (secondPlayer === "ciseau" && firstPlayer === "papier"))
  {
    alert("Le deuxième joueur a gagné");
  }else{
    alert("vous avez choisi le même element. Jouez encore !");
  }
}else {
  alert ("Faites votre choix parmis troix elements proposés !");
}
}

// declarer les variables permettant de lier les images et imputs
let firstPlayerImg = document.getElementById('firstPlayer');
let secondPlayerImg = document.getElementById('secondPlayer');

// les evenements onclick sur chaque images permettent d'envoyer la valeur dans un imput correspondant
function firstChooseScissors(){
  firstPlayerImg.value = "ciseau";
  // firstPlayerImg.style.color = "white";
}
function firstChooseRock(){
  firstPlayerImg.value = "pierre";
  firstPlayerImg.style.color = "white";
}
function firstChoosePaper(){
  firstPlayerImg.value = "papier";
  firstPlayerImg.style.color = "white";
}
function secondChooseScissors(){
  secondPlayerImg.value = "ciseau";
  secondPlayerImg.style.color = "white";
}
function secondChooseRock(){
  secondPlayerImg.value = "pierre";
  // secondPlayerImg.style.color = "white";
}
function secondChoosePaper(){
  secondPlayerImg.value = "papier";
  secondPlayerImg.style.color = "white";
}

// lire les instructions et les fermer après
let content = document.getElementById('content');
function readInstructions(){
  content.style.display = "block";
}
window.onclick = function(event) {
  if (event.target == content) {
    content.style.display = "none";
  }
}
