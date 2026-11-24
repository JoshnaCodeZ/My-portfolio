
console.log("Welcome to Joshna's Portfolio!");
// PORTFOLIO GUIDE

const guideButton = document.getElementById("guideButton");
const guideMessage = document.getElementById("guideMessage");
const guideClose = document.getElementById("guideClose");

guideButton.addEventListener("click", () => {
    guideMessage.classList.toggle("show");
});

guideClose.addEventListener("click", () => {
    guideMessage.classList.remove("show");
});