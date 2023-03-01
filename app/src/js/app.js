// Open Rules Box
let openRuleButton = document.querySelector(".rules-btn button");
let rulesBox = document.querySelector(".rules-section");
let overlayer = document.querySelector(".overlayer");
openRuleButton.addEventListener("click", () => {
  rulesBox.classList.add("show");
  overlayer.classList.add("show");
});

// Closing Rules Box
const closeButton = document.querySelector(".close");
closeButton.addEventListener("click", () => {
  rulesBox.classList.remove("show");
  overlayer.classList.remove("show");
});

// Choosing Rock/Paper/Scissors Elements
let allItems = document.querySelectorAll(".choose-item");
let choosingItemSection = document.querySelector(".rock-paper-scissors");

// Battlefield Elements
let battleFieldSection = document.querySelector(".battlefield-section");
let houseBox = document.querySelector(".house ");
let playerBox = document.querySelector(".player ");
let winOrLoseText = document.querySelector(".win-lose-text");

// Score Elements
let scoreNumber = document.querySelector(".score-number");
let scoreNumberCounter = parseInt(scoreNumber.getAttribute("data-score"));

// Main Fun
allItems.forEach((item) => {
  item.addEventListener("click", () => {
    let itemChoosed = item.classList[2];
    choosingItemSection.style.display = "none";
    // Switching to Battlefield
    battleFieldSection.style.display = "flex";
    // Random House Choosing
    let itemsArray = ["rock", "paper", "scissors"];
    let randomItem = itemsArray[Math.floor(Math.random() * itemsArray.length)];
    // Player/House Box
    let houseItemStructer = `<div class="item ${randomItem}">
            <img src="../../images/icon-${randomItem}.svg" alt="" />
            <div class="wave one"></div>
            <div class="wave two"></div>
            <div class="wave three"></div>
          </div>`;
    let playerItemStucter = `<div class="item ${itemChoosed}">
            <img src="../../images/icon-${itemChoosed}.svg" alt="" />
            <div class="wave one"></div>
            <div class="wave two"></div>
            <div class="wave three"></div>
          </div>`;
    houseBox.innerHTML += houseItemStructer;
    playerBox.innerHTML += playerItemStucter;

    // Player Item Class
    let choosedPlayerItem = document.querySelector(".player .item");
    choosedPlayerItem.classList[2] = itemChoosed;
    let choosedHouseItem = document.querySelector(".house .item");
    // Win And Lose States
    if (choosedPlayerItem.classList[1] == choosedHouseItem.classList[1]) {
      winOrLoseText.textContent = "TIE";
    }
    if (
      choosedPlayerItem.classList[1] == "rock" &&
      choosedHouseItem.classList[1] == "paper"
    ) {
      houseBox.classList.add("win");
      winOrLoseText.textContent = "YOU LOSE";
    }
    if (
      choosedPlayerItem.classList[1] == "paper" &&
      choosedHouseItem.classList[1] == "scissors"
    ) {
      houseBox.classList.add("win");
      winOrLoseText.textContent = "YOU LOSE";
    }
    if (
      choosedPlayerItem.classList[1] == "scissors" &&
      choosedHouseItem.classList[1] == "rock"
    ) {
      houseBox.classList.add("win");
      winOrLoseText.textContent = "YOU LOSE";
    }
    if (
      choosedPlayerItem.classList[1] == "scissors" &&
      choosedHouseItem.classList[1] == "paper"
    ) {
      playerBox.classList.add("win");
      winOrLoseText.textContent = "YOU WIN";
      scoreNumber.textContent = scoreNumberCounter++;
    }
    if (
      choosedPlayerItem.classList[1] == "rock" &&
      choosedHouseItem.classList[1] == "scissors"
    ) {
      playerBox.classList.add("win");
      winOrLoseText.textContent = "YOU WIN";
      scoreNumber.textContent = scoreNumberCounter++;
    }
    if (
      choosedPlayerItem.classList[1] == "paper" &&
      choosedHouseItem.classList[1] == "rock"
    ) {
      playerBox.classList.add("win");
      winOrLoseText.textContent = "YOU WIN";
      scoreNumber.textContent = scoreNumberCounter++;
    }
  });
});

// Play Agian
const playAgainButton = document.querySelector(".again-btn");

playAgainButton.addEventListener("click", () => {
  choosingItemSection.style.display = "flex";
  battleFieldSection.style.display = "none";
  houseBox.innerHTML = `<h3>THE HOUSE PICKED</h3>`;
  playerBox.innerHTML = `<h3>YOU PICKED</h3>`;
  playerBox.classList.remove("win");
  houseBox.classList.remove("win");
});
