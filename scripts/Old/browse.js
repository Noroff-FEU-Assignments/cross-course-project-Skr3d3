
//Add to cart Button
const addToCartButton = document.querySelectorAll(".addcartbutton");

function addToCart(button) {
    button.textContent = "Added to cart";
    button.classList.add("Added");
    button.style.letterSpacing = "1.3px";    
    setTimeout(function() {
        button.style.letterSpacing = "inherit"; 
    }, 1000);
    setTimeout(function() {
        button.textContent = "Add to cart";
    }, 1000);
};

addToCartButton.forEach(function(button){
    button.addEventListener("click", function(event) {
    event.preventDefault();
    addToCart(this);
});
});

// Favourite Buttons
const favButtons = document.querySelectorAll(".favourite");

function toggleFav(event){
        const heartIcon = event.currentTarget.querySelector("i")

    if(heartIcon.classList.contains("fa-regular")){
        heartIcon.classList.remove("fa-regular");
        heartIcon.classList.add("fa-solid");
    } else {
        heartIcon.classList.remove("fa-solid");
        heartIcon.classList.add("fa-regular");
    }

    toggleFavMain()
}

favButtons.forEach(function(button){
    button.addEventListener("click", function(event){
        event.preventDefault();
        toggleFav(event);
    })
});

const favButtonMain = document.getElementById("favourites");

function toggleFavMain() {
    const heartIconMain = document.querySelector("#favourites i");

    let toggledFavs = false;

    for(let i = 0; i < favButtons.length; i++) {
        const button = favButtons[i];
        const heartIcon = button.querySelector("i");

        if(heartIcon.classList.contains("fa-solid")){
            toggledFavs = true;
            break;
        }
    }

    if(toggledFavs) {
    heartIconMain.classList.remove("fa-regular");
    heartIconMain.classList.add("fa-solid");
} else {
    heartIconMain.classList.remove("fa-solid");
    heartIconMain.classList.add("fa-regular")
}
};