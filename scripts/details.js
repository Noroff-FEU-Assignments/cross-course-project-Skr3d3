// Details Page

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id")

const detailsContainer = document.querySelector(".details")
const detailsImageContainer = document.querySelector(".product-image")

let navigationName = document.getElementById("navigationname");
let title = document.querySelector("title");

const consumerKey = "ck_c96819796ee9527e5a501d1236f918d95e22e11a";
const consuerSecret = "cs_b257a6cf47b989e0c67d95fc9d34a7efcace60fc";
const detailsUrl = `https://gamehub.skr3d3.com/wp-json/wc/v3/products/${id}?consumer_key=${consumerKey}&consumer_secret=${consuerSecret}`;
async function getDetails(url) {
    try{
        const response = await fetch(url);
        const detailsData = await response.json();
    
    let thumbnailUrl = detailsData.images.length > 0 ? detailsData.images[0].src : "";

    detailsContainer.innerHTML = `
    <h1>${detailsData.name}</h1>
    <h2 class="pricetag">${detailsData.price_html}</h2>
    ${detailsData.short_description}
    <span class="browsebuttons">
        <a class="cta" id="goback">Back</a>
        <a href="../cart.html" class="cta">Add to cart</a>
    </span>
    `
    detailsImageContainer.innerHTML = `
    <img src="${thumbnailUrl}" alt="${detailsData.images[0].alt}">
    <div class="product-thumbnails">
    <img src="${thumbnailUrl}" alt="${detailsData.images[0].alt}">
    <img src="${thumbnailUrl}" alt="${detailsData.images[0].alt}">
    <img src="${thumbnailUrl}" alt="${detailsData.images[0].alt}">
    <img src="${thumbnailUrl}" alt="${detailsData.images[0].alt}">
    </div>
    `
    navigationName.innerHTML = `&nbsp;${detailsData.name}`
    title.innerHTML = `GameHub - ${detailsData.name}`

    setupBackButton();
    }
    catch (error) {
        console.error("Error fetching data", error)
    }
    finally{
        loading.innerHTML = ""
    };

};
getDetails(detailsUrl);


