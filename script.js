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

button.addEventListener("")
