const bestPrice = document.getElementById("best-price");
const extraMemoryCost = document.getElementById("extra-memory");
const extraStorageCost = document.getElementById("extra-storage");
const deliveryCharge = document.getElementById("delivery-charge");
const totalPrice = document.getElementById("total-price");
const promoCodeInput = document.getElementById("promo-code-input");
const grandTotal = document.getElementById('grand-total');
//handel  button 
function configurationButton(id) {
    switch (id) {
        //memory update 
        case "memory-8gb":
            extraMemoryCost.innerText = 0;
            break;
        case "memory-16gb":
            extraMemoryCost.innerText = 180;
            break;
        //storage update
        case "storage-256gb":
            extraStorageCost.innerText = 0;
            break;
        case "storage-512gb":
            extraStorageCost.innerText = 100;
            break;
        case "storage-1tb":
            extraStorageCost.innerText = 180;
            break;
        //delivery update
        case "delivery-free":
            deliveryCharge.innerText = 0;
            break;
        case "delivery-20$":
            deliveryCharge.innerText = 20;
            break;

        default:
            console.log('wrong id');
            break;
    }
    updateTotalPrice();
}
function promoCode() {
    const code = promoCodeInput.value;
    if (code == "stevekaku") {
        const grandTotalNum = parseInt(grandTotal.innerText);
        let discount = grandTotalNum * 0.2;
        let finalPrice = grandTotalNum - discount;
        //update grand total
        updateGrandTotal(finalPrice);
        // input value to nothing 
        promoCodeInput.value = '';
    }
    else {
        alert("Wrong promo code insert")
    }
}
// update total price function 
function updateTotalPrice() {
    // converting String to num 
    const bestPriceNum = parseInt(bestPrice.innerText);
    const extraMemoryNum = parseInt(extraMemoryCost.innerText);
    const extraStorageNum = parseInt(extraStorageCost.innerText);
    const deliveryChargeNum = parseInt(deliveryCharge.innerText);
    // calculate total and update 
    const newTotalPrice = bestPriceNum + extraMemoryNum + extraStorageNum + deliveryChargeNum;
    totalPrice.innerText = newTotalPrice;
    //update grand total
    updateGrandTotal(newTotalPrice);
}
// grand total function 
function updateGrandTotal(value) {
    grandTotal.innerText = value;
}