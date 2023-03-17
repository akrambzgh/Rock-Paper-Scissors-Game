let mode = document.querySelector(".mode");
console.log(mode);

// Choosing Rock/Paper/Scissors Elements
let allOriginalItems = document.querySelectorAll(
  ".rock-paper-scissors .choose-item"
);

let allBonusItems = document.querySelectorAll(
  ".rock-paper-scissors-lizard-spock .choose-item"
);
let originalChoosingItemSection = document.querySelector(
  ".rock-paper-scissors"
);
let bonusChoosingItemSection = document.querySelector(
  ".rock-paper-scissors-lizard-spock"
);

// Battlefield Elements
let battleFieldSection = document.querySelector(".battlefield-section");
let houseBox = document.querySelector(".house");
let playerBox = document.querySelector(".player");
let winOrLoseText = document.querySelector(".win-lose-text");

// Score Elements
let scoreNumber = document.querySelector(".score-number");
let scoreNumberCounter = parseInt(scoreNumber.getAttribute("data-score"));
let gameItemsList = document.querySelector(".item-list");

// Original Game
allOriginalItems.forEach((item) => {
  item.addEventListener("click", () => {
    let itemChoosed = item.classList[2];
    originalChoosingItemSection.style.display = "none";
    // Switching to Battlefield
    battleFieldSection.style.display = "flex";
    // Random House Choosing
    let itemsArray = ["rock", "paper", "scissors"];
    let randomItem = itemsArray[Math.floor(Math.random() * itemsArray.length)];

    // Player/House
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
    playerBox.innerHTML += playerItemStucter;
    houseBox.innerHTML += houseItemStructer;

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

// Bonus Game
allBonusItems.forEach((item) => {
  item.addEventListener("click", () => {
    let itemChoosed = item.classList[2];
    bonusChoosingItemSection.style.display = "none";
    // Switching to Battlefield
    battleFieldSection.style.display = "flex";
    // Random House Choosing
    let bonusItemsArray = ["rock", "paper", "scissors", "lizard", "spock"];
    let randomBonusItem =
      bonusItemsArray[Math.floor(Math.random() * bonusItemsArray.length)];
    randomBonusItem;
    // Player/House
    let houseItemStructer = `<div class="item choose-item ${randomBonusItem}">
            <img src="../../images/icon-${randomBonusItem}.svg" alt="" />
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
    playerBox.innerHTML += playerItemStucter;
    houseBox.innerHTML += houseItemStructer;

    // Player Item Class
    let choosedPlayerItem = document.querySelector(".player .item");
    choosedPlayerItem.classList[2] = itemChoosed;
    let choosedHouseItem = document.querySelector(".house .item");
    choosedHouseItem.classList[2];

    // Win And Lose States
    if (choosedPlayerItem.classList[1] == choosedHouseItem.classList[2]) {
      winOrLoseText.textContent = "TIE";
    }
    if (
      choosedPlayerItem.classList[1] == "rock" &&
      choosedHouseItem.classList[2] == "paper"
    ) {
      houseBox.classList.add("win");
      winOrLoseText.textContent = "YOU LOSE";
    }
    if (
      choosedPlayerItem.classList[1] == "paper" &&
      choosedHouseItem.classList[2] == "scissors"
    ) {
      houseBox.classList.add("win");
      winOrLoseText.textContent = "YOU LOSE";
    }
    if (
      choosedPlayerItem.classList[1] == "scissors" &&
      choosedHouseItem.classList[2] == "rock"
    ) {
      houseBox.classList.add("win");
      winOrLoseText.textContent = "YOU LOSE";
    }
    if (
      choosedPlayerItem.classList[1] == "lizard" &&
      choosedHouseItem.classList[2] == "scissors"
    ) {
      houseBox.classList.add("win");
      winOrLoseText.textContent = "YOU LOSE";
    }
    if (
      choosedPlayerItem.classList[1] == "spock" &&
      choosedHouseItem.classList[2] == "paper"
    ) {
      houseBox.classList.add("win");
      winOrLoseText.textContent = "YOU LOSE";
    }
    if (
      choosedPlayerItem.classList[1] == "lizard" &&
      choosedHouseItem.classList[2] == "rock"
    ) {
      houseBox.classList.add("win");
      winOrLoseText.textContent = "YOU LOSE";
    }
    if (
      choosedPlayerItem.classList[1] == "paper" &&
      choosedHouseItem.classList[2] == "lizard"
    ) {
      houseBox.classList.add("win");
      winOrLoseText.textContent = "YOU LOSE";
    }
    if (
      choosedPlayerItem.classList[1] == "spock" &&
      choosedHouseItem.classList[2] == "lizard"
    ) {
      houseBox.classList.add("win");
      winOrLoseText.textContent = "YOU LOSE";
    }
    if (
      choosedPlayerItem.classList[1] == "rock" &&
      choosedHouseItem.classList[2] == "spock"
    ) {
      houseBox.classList.add("win");
      winOrLoseText.textContent = "YOU LOSE";
    }
    if (
      choosedPlayerItem.classList[1] == "scissors" &&
      choosedHouseItem.classList[2] == "spock"
    ) {
      houseBox.classList.add("win");
      winOrLoseText.textContent = "YOU LOSE";
    }
    if (
      choosedPlayerItem.classList[1] == "scissors" &&
      choosedHouseItem.classList[2] == "paper"
    ) {
      playerBox.classList.add("win");
      winOrLoseText.textContent = "YOU WIN";
      scoreNumber.textContent = scoreNumberCounter++;
    }
    if (
      choosedPlayerItem.classList[1] == "rock" &&
      choosedHouseItem.classList[2] == "scissors"
    ) {
      playerBox.classList.add("win");
      winOrLoseText.textContent = "YOU WIN";
      scoreNumber.textContent = scoreNumberCounter++;
    }
    if (
      choosedPlayerItem.classList[1] == "paper" &&
      choosedHouseItem.classList[2] == "rock"
    ) {
      playerBox.classList.add("win");
      winOrLoseText.textContent = "YOU WIN";
      scoreNumber.textContent = scoreNumberCounter++;
    }
    if (
      choosedPlayerItem.classList[1] == "paper" &&
      choosedHouseItem.classList[2] == "spock"
    ) {
      playerBox.classList.add("win");
      winOrLoseText.textContent = "YOU WIN";
      scoreNumber.textContent = scoreNumberCounter++;
    }
    if (
      choosedPlayerItem.classList[1] == "scissors" &&
      choosedHouseItem.classList[2] == "lizard"
    ) {
      playerBox.classList.add("win");
      winOrLoseText.textContent = "YOU WIN";
      scoreNumber.textContent = scoreNumberCounter++;
    }
    if (
      choosedPlayerItem.classList[1] == "lizard" &&
      choosedHouseItem.classList[2] == "paper"
    ) {
      playerBox.classList.add("win");
      winOrLoseText.textContent = "YOU WIN";
      scoreNumber.textContent = scoreNumberCounter++;
    }
    if (
      choosedPlayerItem.classList[1] == "rock" &&
      choosedHouseItem.classList[2] == "lizard"
    ) {
      playerBox.classList.add("win");
      winOrLoseText.textContent = "YOU WIN";
      scoreNumber.textContent = scoreNumberCounter++;
    }
    if (
      choosedPlayerItem.classList[1] == "lizard" &&
      choosedHouseItem.classList[2] == "spock"
    ) {
      playerBox.classList.add("win");
      winOrLoseText.textContent = "YOU WIN";
      scoreNumber.textContent = scoreNumberCounter++;
    }
    if (
      choosedPlayerItem.classList[1] == "spock" &&
      choosedHouseItem.classList[2] == "rock"
    ) {
      playerBox.classList.add("win");
      winOrLoseText.textContent = "YOU WIN";
      scoreNumber.textContent = scoreNumberCounter++;
    }
    if (
      choosedPlayerItem.classList[1] == "spock" &&
      choosedHouseItem.classList[2] == "scissors"
    ) {
      playerBox.classList.add("win");
      winOrLoseText.textContent = "YOU WIN";
      scoreNumber.textContent = scoreNumberCounter++;
    }
  });
});

// Play Again
const playAgainButton = document.querySelector(".again-btn");
playAgainButton.addEventListener("click", () => {
  if (mode.classList[1] == "original") {
    originalChoosingItemSection.style.display = "flex";
  } else if (mode.classList[1] == "bonus") {
    bonusChoosingItemSection.style.display = "flex";
  }
  battleFieldSection.style.display = "none";
  houseBox.innerHTML = `<h3>THE HOUSE PICKED</h3>`;
  playerBox.innerHTML = `<h3>YOU PICKED</h3>`;
  playerBox.classList.remove("win");
  houseBox.classList.remove("win");
});
console.log(playerBox);
// Change The Game Type
let switcher = document.querySelector(".switcher");
switcher.addEventListener("click", () => {
  switcher.classList.toggle("bonus");
  switcher.classList.toggle("original");
  switcher.classList.toggle("checked");
  mode.classList.toggle("original");
  mode.classList.toggle("bonus");
  if (mode.classList[1] == "bonus") {
    originalChoosingItemSection.classList.add("show");
    bonusChoosingItemSection.classList.remove("show");
    // gameItemsList.innerHTML = `<h2>ROCK</h2><h2>PAPER</h2>
    // <h2>SCISSORS</h2><h2>LIZARD</h2><h2>SPOCK</h2>`;
  } else if (mode.classList[1] == "original") {
    bonusChoosingItemSection.classList.add("show");
    originalChoosingItemSection.classList.remove("show");
    // gameItemsList.innerHTML = `<h2>ROCK</h2><h2>PAPER</h2>
    // <h2>SCISSORS</h2>`;
  }
});

// Open Rules Box
let openRuleButton = document.querySelector(".rules-btn button");
let originalRulesBox = document.querySelector(".original-rule");
console.log(originalRulesBox);
let bonusRulesBox = document.querySelector(".bonus-rule");
let overlayer = document.querySelector(".overlayer");

openRuleButton.addEventListener("click", () => {
  if (mode.classList[1] == "original") {
    originalRulesBox.classList.add("show");
  } else if (mode.classList[1] == "bonus") {
    bonusRulesBox.classList.add("show");
  }
  overlayer.classList.add("show");
});

// Closing Rules Box
const closeButtons = document.querySelectorAll(".close");
closeButtons.forEach((closeButton) => {
  closeButton.addEventListener("click", () => {
    originalRulesBox.classList.remove("show");
    bonusRulesBox.classList.remove("show");
    overlayer.classList.remove("show");
  });
});
