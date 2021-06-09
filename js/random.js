let textOfMyChoice = document.getElementById('text_of_my_choice');
let myChoice = textOfMyChoice.value;
let textOfRandomChoice = document.getElementById('text_of_random_choice');
let pcChoice = textOfRandomChoice.value;
function firstChooseScissors(){
let iChooseScissors = document.getElementById('image');
iChooseScissors.innerHTML = '<i class="far fa-5x fa-hand-scissors"></i>';
myChoice = "ciseaux";
}
function firstChooseRock(){
let iChooseRock = document.getElementById('image');
iChooseRock.innerHTML = '<i  class="far fa-5x fa-hand-rock" ></i>';
myChoice = "pierre";
}
function firstChoosePaper(){
let iChoosePaper = document.getElementById('image');
iChoosePaper.innerHTML = '<i class="far fa-5x fa-hand-paper"></i>';
myChoice = "papier";
}

function getRndInteger() {
  randomNumber = Math.floor(Math.random() * 3);
  console.log(randomNumber);
  let randomChoice = document.getElementById('randomChoice');
  document.getElementById('demo').innerHTML = randomNumber;
  if(randomNumber == 0){
    randomChoice.innerHTML = '<i class="far fa-5x fa-hand-rock"></i>';
    console.log(randomNumber);
    pcChoice = "pierre";
  }else if(randomNumber == 1){
    randomChoice.innerHTML = '<i class="far fa-5x fa-hand-paper"></i>';
    pcChoice = "papier";
    console.log(randomNumber);
  }else{
    randomChoice.innerHTML =  '<i class="far fa-5x fa-hand-scissors"></i>';
    pcChoice = "ciseaux";
    console.log(randomNumber);
  }
}


function playShifumi(){
  if((myChoice == "pierre" && pcChoice == "ciseaux") || (myChoice == "papier" && pcChoice == "pierre") || (myChoice == "ciseaux" && pcChoice == "papier")) {
    alert('vous avez gagné !!!');
  } else if((pcChoice == "pierre" && myChoice == "ciseaux") || (pcChoice == "papier" && myChoice == "pierre") || (pcChoice == "ciseaux" && myChoice == "papier")){
    alert('vous avez perdu');
  }else{
    alert("vous avez choisi le même element. Jouez encore !");
  }
}
