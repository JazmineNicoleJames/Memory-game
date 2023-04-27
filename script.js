const gameContainer = document.getElementById("game");
let firstCard;
let secondCard;
let flipCount = 0;
noClicking = false;

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

function shuffle(array) {
  let counter = array.length;

  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    const newDiv = document.createElement("div");
    newDiv.classList.add(color);
    newDiv.addEventListener("click", handleCardClick)  
    gameContainer.append(newDiv);
}
}
// TODO: Implement this function!
function handleCardClick(event){
  let click = event.target;
  click.style.backgroundColor = click.classList[0];
  click.classList.add('flipped');
  firstCard = firstCard || click;
  secondCard = click === firstCard ? null : click;

  if(firstCard && secondCard){
    noClicking = true;
    if(firstCard.classList[0] === secondCard.classList[0]){
      flipCount+=2;
      firstCard.removeEventListener("click", handleCardClick);
      secondCard.removeEventListener("click", handleCardClick);
      firstCard = null;
      secondCard = null;
      console.log('match');
    } else {
      setTimeout(function() {
        firstCard.style.backgroundColor = "";
        secondCard.style.backgroundColor = "";
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        firstCard = null;
        secondCard = null;
        noClicking = false;
      },1000);
    }
  }
  console.log("you just clicked", event.target);
//console.log(flipCount);

if(flipCount === COLORS.length)
  alert("Finished!");
}
createDivsForColors(shuffledColors);