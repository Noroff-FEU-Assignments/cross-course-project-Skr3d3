// Back button
function setupBackButton() {
    const backButton = document.getElementById("goback");
    if (backButton) {backButton.addEventListener("click", function() {
      if (document.referrer) {window.history.back();}
      else {window.location.href = "/index.html";}
    });};}
    setupBackButton();

//Interactive cards

const gameCards = document.querySelectorAll(".gamecard")

const openDetails = (dataUrl) => {
    if(dataUrl) {
        window.location.href = dataUrl;
    }
};

document.querySelectorAll(".gamecard").forEach(gameCard => {
gameCard.addEventListener("click", function(event){
    const clickedElement = event.target;
    if(clickedElement.tagName !== "A" && clickedElement.tagName !== "I" && clickedElement.tagName !== "BUTTON" && clickedElement.tagName !== "INPUT") {
        const detailsUrl = gameCard.dataset.url;
        openDetails(detailsUrl);
    }
});
});

