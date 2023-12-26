let handleClick = (event) => {
  let playerMark = event.target;

  if (playerMark === playerMarkX) {
    playerPick.style.display = "block";
    playerPick.innerHTML = "You chose: X";
    playerMark.style.backgroundColor = "#1f3641";

    let playerMarkX = new Image();
    playerMarkX.src = "./images/icon-x.svg";
    playerMarkX.classList.add("playerMarkX");

    useStoredTarget(playerMarkX);
  } else {
    playerPick.style.display = "block";
    playerPick.innerHTML = "You chose: O";

    let playerMarkO = new Image();
    playerMarkO.src = "./images/icon-o.svg";
    playerMarkO.classList.add("playerMarkO");

    useStoredTarget(playerMarkO);
  }
};

let handleHoverImageSource = (event) => {
  let hoverImageSource = event.target;
  console.log(hoverImageSource);
  if (hoverImageSource === hoverImageSourceX) {
    // console.log("hover x");

    let hoverImageSourceX = new Image();
    hoverImageSourceX.src = "./images/icon-x-outline.svg";
    hoverImageSourceX.classList.add("hoverImage");

    markGridItems.forEach((button) => {
      button.addEventListener("mouseover", () => {
        if (
          !button.querySelector(".playerMarkX") &&
          !button.querySelector(".playerMarkO")
        ) {
          if (!button.contains(hoverImageSourceX)) {
            button.appendChild(hoverImageSourceX);
          } else {
            hoverImageSourceX.classList.add("hoverImageSource");
          }
        }
      });
      button.addEventListener("mouseout", () => {
        if (
          !button.querySelector(".playerMarkX") &&
          !button.querySelector(".playerMarkO")
        ) {
          hoverImageSourceX.classList.remove("hoverImageSource");
        }
      });
      button.addEventListener("click", () => {
        if (
          !button.querySelector(".playerMarkX") &&
          !button.querySelector(".playerMarkO")
        ) {
          hoverImageSourceX.classList.remove("hoverImageSource");
          button.removeChild(hoverImageSourceX);
        }
      });
    });
  } else {
    if (hoverImageSource === hoverImageSourceO) {
      // console.log("hover o");

      let hoverImageSourceO = new Image();
      hoverImageSourceO.src = "./images/icon-o-outline.svg";
      hoverImageSourceO.classList.add("hoverImage");

      markGridItems.forEach((button) => {
        button.addEventListener("mouseover", () => {
          if (
            !button.querySelector(".playerMarkX") &&
            !button.querySelector(".playerMarkO")
          ) {
            if (!button.contains(hoverImageSourceO)) {
              button.appendChild(hoverImageSourceO);
            } else {
              hoverImageSourceO.classList.add("hoverImageSource");
            }
          }
        });
        button.addEventListener("mouseout", () => {
          if (
            !button.querySelector(".playerMarkX") &&
            !button.querySelector(".playerMarkO")
          ) {
            hoverImageSourceO.classList.remove("hoverImageSource");
          }
        });
        button.addEventListener("click", () => {
          if (
            !button.querySelector(".playerMarkX") &&
            !button.querySelector(".playerMarkO")
          ) {
            hoverImageSourceO.classList.remove("hoverImageSource");
            button.removeChild(hoverImageSourceO);
          }
        });
      });
    }
  }
};

let hoverImageSourceX = document.querySelector(".icon-x");
hoverImageSourceX.addEventListener("click", handleHoverImageSource);

let hoverImageSourceO = document.querySelector(".icon-o");
hoverImageSourceO.addEventListener("click", handleHoverImageSource);

let useStoredTarget = (playerMark) => {
  markGridItems.forEach((button) => {
    button.addEventListener("click", () => {
      if (
        !button.querySelector(".playerMarkX") &&
        !button.querySelector(".playerMarkO")
      ) {
        button.appendChild(playerMark.cloneNode(true));
      } else {
        alert("This box is already marked! Try another.");
      }
    });
  });
};

let handleNewGame = () => {
  let gameBoard = document.getElementById("game-board");
  gameBoard.classList.add("active");

  let gameStartMenu = document.getElementById("game-start-menu");
  gameStartMenu.classList.remove("active");
};

let handleRestartButtonClick = (playerMark) => {
  markGridItems.forEach((button) => {
    location.reload();
  });
};

let markGridItems = document.querySelectorAll(".grid-item");

let playerPick = document.getElementById("playerPick");
playerPick.style.display = "none";

let restartButton = document.querySelector("#restart-button");
restartButton.addEventListener("click", handleRestartButtonClick);

let newGame = document.querySelector("#new-game-solo");
newGame.addEventListener("click", handleNewGame);

let playerMarkX = document.querySelector(".icon-x");
playerMarkX.addEventListener("click", handleClick);

let playerMarkO = document.querySelector(".icon-o");
playerMarkO.addEventListener("click", handleClick);
