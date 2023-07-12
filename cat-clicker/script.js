//assign variables
let clickCount = 0;
let assistantsPurchased = 0;
let catClicker = 1;
let assistantCost = 10;

//call queries
let assistantButton = document.querySelector("#assistantButton");
let assistantButtonCost = document.querySelector("#assistantButtonCost");
let assistantsPurchasedCount = document.querySelector(
  "#assistantsPurchasedCount"
);
let clickCountCountDisplay = document.getElementById("clickCount");

let cat = document.querySelector("#cat");
let catBase = document.querySelector("#catBase");

//assign initial button values
assistantButtonCost.innerHTML = assistantCost;

//make cat clickable + animated
cat.addEventListener("click", function () {
  //squishCat resets the animation when clicked
  cat.classList.remove("squishCat");
  void cat.offsetWidth;
  cat.classList.add("squishCat");
});

//creates a button to buy an assistant
assistantButton.addEventListener("click", function () {
  buyassistant(assistantCost);
});

//supporting function for assistant button
function buyassistant(cost) {
  updateclickCount(-cost);

  assistantsPurchased++;
  assistantsPurchasedCount.innerHTML = assistantsPurchased;

  assistantCost = Math.round(assistantCost * 1.1);
  assistantButtonCost.innerHTML = assistantCost;
}

//enables or disables assistant button depending on points avaliable
function checkButtons() {
  if (clickCount >= assistantCost) {
    assistantButton.classList.remove("disabled");
  }
  if (clickCount < assistantCost) {
    assistantButton.classList.add("disabled");
  }
}

//updates and displays point quanity
function updateclickCount(amount) {
  clickCount += amount;
  clickCount = parseFloat(clickCount.toFixed(2));
  clickCountCountDisplay.innerHTML = clickCount;
  checkButtons();
}

//resets all functions and values
function resetAll() {
  clickCount = 0;
  assistantCost = 10;
  assistantsPurchased = 0;

  updateclickCount(0);
  assistantButtonCost.innerHTML = assistantCost;
  assistantsPurchasedCount.innerHTML = assistantsPurchased;
}

//timer to enable autoclickers
setInterval(function () {
  updateclickCount(assistantsPurchased);
}, 1000);


//navigation elements
const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");


navToggle.addEventListener("click", () => {
  let visibility = primaryNav.getAttribute("data-visible");

  if (visibility == "false"){
    primaryNav.setAttribute("data-visible", true);
  } else {
    primaryNav.setAttribute("data-visible", false);
  }
}
);