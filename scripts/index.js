

const consumerKey = "ck_c96819796ee9527e5a501d1236f918d95e22e11a";
const consuerSecret = "cs_b257a6cf47b989e0c67d95fc9d34a7efcace60fc";

const baseUrl = `https://gamehub.skr3d3.com/wp-json/wc/v3/products?consumer_key=${consumerKey}&consumer_secret=${consuerSecret}`;

let productsData = [];

const sortButtons = document.querySelector(".sortcontainer");

const featuredText = document.querySelector(".featuredgamestext");

const featuredContainer = document.getElementById("featuredgames");

//featuredText.style.display = "none";

async function getProducts(url){

    try{
    const response = await fetch(url + "&featured=true");
    productsData = await response.json();
    displayFeatured(productsData);
    }
    catch(error) {
        console.error("Error fetching products", error)
    }
    finally{
        featuredText.style.position = "relative";
        featuredText.style.top = "auto";
    }
}
function displayFeatured(products){
    const limitedProducts = products.slice(0,3);
    featuredContainer.innerHTML = "";

limitedProducts.forEach(function(product){
    let thumbnailUrl = product.images.length > 0 ? product.images[0].src : "";
    let altUrl = product.images.length > 0 ? product.images[0].alt : "";

    featuredContainer.innerHTML += `
    <div class="gamecard" data-url="details.html?id=${product.id}" tabindex="0">
    <span>
        <h2>${product.name}</h2>
    </span>
    <div>
    <img src="${thumbnailUrl}" alt="${altUrl}">
    <span class="overlaytext">Click for more info</span>
    </div>
    </div>
    `
})};

getProducts(baseUrl)

const openDetails = (dataUrl) => {
    if(dataUrl){
        window.location.href = dataUrl;
    }
}

featuredContainer.addEventListener("click", function(event){
    const gameCard = event.target.closest(".gamecard")
    if(gameCard) {
        const featuredUrl = gameCard.getAttribute("data-url");
        openDetails(featuredUrl);
    }
})