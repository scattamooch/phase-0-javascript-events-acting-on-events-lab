// Save game character as a variable
const dodger = document.getElementById("dodger");

// Change the color of the character
dodger.style.backgroundColor = "#FF69B4";

//Keystroke logger
document.addEventListener("keydown", function (event) {
    console.log(event);
  });

//Dodger can move 
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });  

//Dodger can move right
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    const containerWidth = dodger.parentElement.clientWidth;
    const dodgerWidth = dodger.clientWidth;
    const maxRight = containerWidth - dodgerWidth;

    if (left < maxRight) {
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener("keydown", function (e) {
    if (e.key ==="ArrowRight") {
        moveDodgerRight();
    }
});
