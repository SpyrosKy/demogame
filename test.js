var restartBtn = document.getElementById("restart");
var point = document.querySelector(".point");
var objectsToFind = document.querySelector("#objectsToFind");
//console.log(objectsToFind);
//console.log(point);
var images = document.querySelectorAll(".images");
var clickedImage = null;
//console.log("Variable eventListener ", images);

function imagesPosition(id, positionX, positionY) {
  id.style.position = "absolute";
  id.style.left = positionX + "px";
  id.style.top = positionY + "px";
}

//Take the id's of the images
var image = [];
for (let i = 0; i < images.length; i++) {
  const element = images[i].id;
  //console.log(element);
  image.push(element);
}
console.log("array of images :::", image);
//Show the names (id's) of the objects to the HTML
objectsToFind.innerHTML = image;

//Remove image for the background
function removeObject(clickedImage) {
  clickedImage.classList.replace("images", "hideImage");
  /*var imageId = clickedImage.getAttribute("id");
  return imageId;*/
}

//Initialise the variable of the points
var points = 0;
//Update the images array et increment the points
function compareImages(imageId) {
  for (let i = 0; i < image.length; i++) {
    if (image[i] === imageId) {
      image.splice(i, 1);
      points++;
      const formatedString = image.toString().replace(/,/gi, " - ");
      objectsToFind.innerHTML = formatedString;
      point.innerHTML = points;
    }
  }

  return image;
}

//Popup message if win or lost
function showMessage(image) {
  var showMessage = document.querySelector(".popup");
  console.log("show message function ", image);
  if (image.length === 0) {
    showMessage.classList.toggle(".popup-visible");
  }
}

//Timer
var time = 30;
setInterval(countdown, 1000);
function countdown() {
  if (time > 0) {
    time--;
  } else if (time === 0) {
  }
  document.getElementById("timer").innerHTML = `Timer: ${time}`;
}

function restart() {
  document.location.reload(true);
}

function handleClickImage(evt) {
  // 1 recup id image clicked
  clickedImage = evt.target;
  removeObject(clickedImage);
  showMessage(compareImages(clickedImage.id));
  // compare id image clicked avec les id des contenus dans ton array d'is
}

images.forEach((image) => {
  image.addEventListener("click", handleClickImage);
});


var instructions = document.querySelector(".btn-how");
console.log(instructions);
function instructionHowToPlay(event) {
  instructions.style.background= "red"
}
instructions.onclick = instructionHowToPlay;

// function a() {
//   return 42;
// }

// function b(numb) {
//   return numb > 10 ? "yes" : "no";
// }

// b(a());

// const n = a();
// const res = b(n);
