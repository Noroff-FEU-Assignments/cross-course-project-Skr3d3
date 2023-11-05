// Clickable cards

const productContainer = document.querySelector(".products");
const openDetails = (dataUrl) => {
    if (dataUrl) {
        window.location.href = dataUrl;
    }
}

productContainer.addEventListener("click", function(event){
    const clickedElement = event.target;
    
    if(["A", "I", "BUTTON", "INPUT"].includes(clickedElement.tagName)){
        event.preventDefault();
        return
    }

    const gameCard = clickedElement.closest(".gamecard")
    if(gameCard) {
        const detailsUrl = gameCard.getAttribute("data-url");
        openDetails(detailsUrl);
    }
})

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const searchQuery = params.get("search");


function checkQuery(product) {
    return product.name.toLowerCase().includes(searchQuery.toLowerCase());
    }


// Fetch WordPress REST API

const consumerKey = "ck_c96819796ee9527e5a501d1236f918d95e22e11a";
const consuerSecret = "cs_b257a6cf47b989e0c67d95fc9d34a7efcace60fc";

const baseUrl = `https://gamehub.skr3d3.com/wp-json/wc/v3/store/products?consumer_key=${consumerKey}&consumer_secret=${consuerSecret}`;

let productsData = [];

const sortButtons = document.querySelector(".sortcontainer")

sortButtons.style.display = "none";


async function getProducts(url){

    try{
    const response = await fetch(url);
    productsData = await response.json();
    if(searchQuery){
        productsData = productsData.filter(checkQuery);
    }
    displayProducts(productsData);
    }
    catch(error) {
        console.error("Error fetching products", error)
    }
    finally{
        loading.innerHTML = ""
        sortButtons.style.display = "flex";
    }
}
function displayProducts(products){
    productContainer.innerHTML = "";

products.forEach(function(product){
    let thumbnailUrl = product.images.length > 0 ? product.images[0].src : "";
    let altUrl = product.images.length > 0 ? product.images[0].alt : "";

    productContainer.innerHTML += `
<div class="gamecard" data-url="details.html?id=${product.id}" tabindex="0">
<span>
    <h2>${product.name}</h2>
    <p class="pricetag">${product.price_html}</p>
</span>
<a class="cta-round favourite" href="" alt="Favorites"><i id="hearticon" class="fa-regular fa-heart"></i></a>
<div>
<img style="width:437px" src="${thumbnailUrl}" alt="${altUrl}">
<span class="overlaytext">Click for more info</span>
</div>
<span class="browsebuttons">
    <a href="cart.html" class="cta addcartbutton">Add to cart</a>
</span>
</div>
    `
        
// Search/filter


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
})};

getProducts(baseUrl)

// Sort buttons

nameBtn = document.getElementById("name");
priceBtn  = document.getElementById("price");
discountBtn  = document.getElementById("discount");

nameBtn.addEventListener("click", function() {
    const sortedProducts = [...productsData].sort((a,b) => a.name.localeCompare(b.name));
    displayProducts(sortedProducts);
    nameBtn.classList.add("active");
    discountBtn.classList.remove("active");
    priceBtn.classList.remove("active");
});
priceBtn.addEventListener("click", function(){
    const sortedProducts = [...productsData].sort((a,b) => a.price_html.localeCompare(b.price_html));
    displayProducts(sortedProducts);
    priceBtn.classList.add("active");
    nameBtn.classList.remove("active");
    discountBtn.classList.remove("active");
});
discount.addEventListener("click", function() {
    const sortedProducts = [...productsData].sort((a,b) => {
        const discountA = parseFloat(a.prices.regular_price) - parseFloat(a.prices.sale_price);
        const discountB = parseFloat(b.prices.regular_price) - parseFloat(b.prices.sale_price);
        return discountB - discountA;
    });
    displayProducts(sortedProducts);
    discountBtn.classList.add("active");
    nameBtn.classList.remove("active");
    priceBtn.classList.remove("active");
});
