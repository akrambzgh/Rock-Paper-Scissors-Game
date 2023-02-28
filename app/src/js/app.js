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

// Choosing Rock/Paper/Scissors
let allItems = document.querySelectorAll(".choose-item");
let choosingItemSection = document.querySelector(".rock-paper-scissors");
let battleFieldSection = document.querySelector(".battlefield-section");
let houseBox = document.querySelector(".house ");
allItems.forEach((item) => {
  item.addEventListener("click", () => {
    let itemChoosed = item.classList[2];
    choosingItemSection.style.display = "none";
    //   Switching to Battlefield
    battleFieldSection.style.display = "flex";
    //   Random House Choosing
    let itemsArray = ["rock", "paper", "scissors"];
    let randomItem = itemsArray[Math.floor(Math.random() * itemsArray.length)];

    let itemStructer = `<div class="item ${randomItem}">
            <img src="../../images/icon-${randomItem}.svg" alt="" />
            <div class="wave one"></div>
            <div class="wave two"></div>
            <div class="wave three"></div>
          </div>`;
    houseBox.innerHTML += itemStructer;
    let choosedPlayerItem = document.querySelector(".player .item");
    let choosedHouseItem = document.querySelector(".house .item");
    console.log(choosedPlayerItem, choosedHouseItem);
    if (choosedPlayerItem.classList[1] == choosedHouseItem.classList[1]) {
      console.log("tie");
    }
  });
});
