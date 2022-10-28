const mainContainer = document.querySelector(".main-container");
const thankYou = document.querySelector(".container-thank-you");
const sbmtBtn = document.getElementById("submit-btn");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".lista-btn");
const rateAgain = document.getElementById("rate-again")


sbmtBtn.addEventListener("click", () => {
    thankYou.classList.remove("hide");
    mainContainer.classList.add("hide");    
});

rateAgain.addEventListener("click", () => {
    thankYou.classList.add("hide");
    mainContainer.classList.remove("hide");    
});


rates.forEach((rate) => {
    rate.addEventListener("click", () =>{
        rating.innerHTML = rate.innerHTML
    })
})