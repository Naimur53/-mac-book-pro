const bestPrice = document.getElementById("best-price");
const extraMemory = document.getElementById("extra-memory");
const extraStorage = document.getElementById("extra-storage");
const deliveryCharge = document.getElementById("delivery-charge");
const totalPrice = document.getElementById("total-price");
const promoCodeInput = document.getElementById("promo-code-input");
const grandTotal = document.getElementById('grand-total');
//handel  button 
function updateButton(id) {
    switch (id) {
        //memory update 
        case "memory-8gb":
            extraMemory.innerText = 0;
            break;
        case "memory-16gb":
            extraMemory.innerText = 180;
            break;

        //storage update
        case "storage-256gb":
            extraStorage.innerText = 0;
            break;
        case "storage-512gb":
            extraStorage.innerText = 100;
            break;
        case "storage-1tb":
            extraStorage.innerText = 180;
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
        grandTotal.innerText = grandTotalNum - discount;
        // input value to nothing 
        promoCodeInput.value = '';
    }
    else {
        alert("Wrong promo code insert")
    }
}
function updateTotalPrice() {
    // converting String to num 
    const bestPriceNum = parseInt(bestPrice.innerText);
    const extraMemoryNum = parseInt(extraMemory.innerText);
    const extraStorageNum = parseInt(extraStorage.innerText);
    const deliveryChargeNum = parseInt(deliveryCharge.innerText);
    // calculate total and update 
    const newTotalPrice = bestPriceNum + extraMemoryNum + extraStorageNum + deliveryChargeNum;
    totalPrice.innerText = newTotalPrice;
    //update grand total
    grandTotal.innerText = newTotalPrice;
}