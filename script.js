//When I click the play button
// it will move to a random location on the page
let button = document.getElementById("play-button");

button.addEventListener("click", moveToRandom);

function moveToRandom() {
  // get a random number, reassign value for "top"
  let newTopValue = Math.floor(Math.random() * 100);
  // get a random number, reassign value for "left"
  let newLeftValue = Math.floor(Math.random() * 100);

  console.log(newTopValue);
  console.log(newLeftValue);

  button.style.top = newTopValue + "%";
  button.style.left = newLeftValue + "%";
}

button.addEventListener("mouseover", changeBGColor);

function changeBGColor() {
  button.style.backgroundColor = "blue";
}

button.addEventListener("mouseout", returnToOldColor);

function returnToOldColor() {
  button.style.backgroundColor = "green";
}

let challenge1 = document.getElementById("challenge-one");

challenge1.addEventListener("dblclick", disappear);

function disappear() {
  challenge1.remove();
}

let bg1 = document.body;

bg1.addEventListener("contextmenu", bgChange);

function bgChange() {
  bg1.style.backgroundImage = "url('images/pokemonBG2.png')";
}

let copyAlert = document.getElementById("page-title");
copyAlert.addEventListener("copy", sendAlert);

function sendAlert() {
  alert("You are entering the land of the unknown. Reconsider your choices!");
}
