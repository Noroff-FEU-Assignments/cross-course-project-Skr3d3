const minusBtns = document.querySelectorAll(".minusbtn")
const plusBtns = document.querySelectorAll(".plusbtn")
let qtyContainers = document.querySelectorAll(".quantity-box")



function defaultQtyValue() {
    qtyContainers.forEach(container => {
        container.value = 1;
    } )
}

function increaseQty(qtyBox) {
    let currentValue = parseInt(qtyBox.value) || 1;
    if(currentValue < 10 ) {
        currentValue++;
        qtyBox.value = currentValue; 
    }
};

function decreaseQty(qtyBox) {
    let currentValue = parseInt(qtyBox.value) || 1;
    if(currentValue > 1 ) {
        currentValue--;
        qtyBox.value = currentValue; 
    }
};

plusBtns.forEach((btn, index) => {
    btn.addEventListener("click", function(event){
    event.preventDefault();
    increaseQty(qtyContainers[index]);
});
});

minusBtns.forEach((btn, index) => {
    btn.addEventListener("click", function(event){
    event.preventDefault();
    decreaseQty(qtyContainers[index]);
});
});

defaultQtyValue()