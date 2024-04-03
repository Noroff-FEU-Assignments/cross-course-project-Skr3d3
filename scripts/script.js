// Back button
function setupBackButton() {
    const backButton = document.getElementById("goback");
    if (backButton) {
        backButton.addEventListener("click", function() {
            if (document.referrer) {
                window.history.back();
            } else {
                window.location.href = "/index.html";
            }
        });
        backButton.addEventListener("keydown", function(event) {
            if (event.keyCode === 13) {
                backButton.click();
            }
        });
    }
}

setupBackButton();

// Search

const searchBar = document.getElementById("search");
const searchButton = document.querySelector(".searchbutton")

searchButton.addEventListener("click", function(event){
    event.preventDefault();
    window.location.href = `/browse.html?search=${searchBar.value}`
});
searchBar.addEventListener("enter", function(event){
    event.preventDefault();
    window.location.href = `/browse.html?search=${searchBar.value}`
})

// Global Variables

let loading = document.querySelector(".loadingcontainer")

