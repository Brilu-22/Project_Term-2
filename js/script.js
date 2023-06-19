let orderList = [];

createYourHero = () => {
    let heroTotal = 0;

    let subName = document.getElementById("SubName").value;
    let size = document.getElementById("size").value;

    if (size === "Normal") {
        heroTotal = heroTotal + 5;
    } else if (size === "Footlong") {
        heroTotal = heroTotal + 15;
    } else if (size === "Shhlong") {
        heroTotal = heroTotal + 20;
    }

    let breadOption = document.getElementsByName("baseRadio");
    let breadValue;
    for (let i = 0; i < breadOption.length; i++) {
        if (breadOption[i].checked) {
            breadValue = breadOption[i].value;
            heroTotal = heroTotal + +breadOption[i].dataset.cost;
        }
    }

    let sauceOptions = document.getElementsByName("sauceRadio");
    let sauceArray = [];
    for (let i = 0; i < sauceOptions.length; i++) {
        if (sauceOptions[i].checked) {
            sauceArray.push(sauceOptions[i].value);
            heroTotal = heroTotal + +sauceOptions[i].dataset.cost;
        }
    }

    let toastOptions = document.getElementsByName("toastRadio");
    let toastArray = [];
    for (let i = 0; i < toastOptions.length; i++) {
        if (toastOptions[i].checked) {
            toastArray.push(toastOptions[i].value);
            heroTotal = heroTotal + +toastOptions[i].dataset.cost;
        }
    }

    let toppingOptions = document.getElementsByName("toppingOptions");
    let subArray = [];
    for (let i = 0; i < toppingOptions.length; i++) {
        if (toppingOptions[i].checked) {
            subArray.push(toppingOptions[i].value);
            heroTotal = heroTotal + +toppingOptions[i].dataset.cost;
        }
    }

    orderList.push({
        subName: subName,
        subSize: size,
        subBread: breadValue,
        subToast: toastArray,
        subToppings: subArray,
        subSauce: sauceArray,
        subPrice: heroTotal,
    });

    displayOrders();
    resetForm();
};

displayOrders = () => {
    let orderListDiv = document.getElementById("orderList");
    let totalPrice = 0;

    orderListDiv.innerHTML = "";

    for (let i = 0; i < orderList.length; i++) {
        let name = orderList[i].subName;
        let size = orderList[i].subSize;
        let bread = orderList[i].subBread;
        let toast = orderList[i].subToast;
        let toppings = orderList[i].subToppings;
        let sauce = orderList[i].subSauce;
        let price = orderList[i].subPrice;

        totalPrice += price;

        orderListDiv.innerHTML += `
            <div class="receipt">
                <div class="receipt-look">
                    <h4 class="receipt-heading">${name}</h4>
                    <p class="receipt-text">Size: ${size}</p>
                    <p class="receipt-text">Hero Armour: ${bread}</p>
                    <p class="receipt-text">Are you Toast?: ${toast}</p>
                    <p class="receipt-text">Hero Sauce: ${sauce.join(', ')}</p>
                    <p class="receipt-text">Hero Topps: ${toppings.join(', ')}</p>
                    <p class="receipt-text">The Hero Total: R${price}.00</p>
                </div>
            </div>`;
    }

    document.getElementById("orderPrice").textContent = "R" + totalPrice.toFixed(2);
};

resetForm = () => {
    document.getElementById("subForm").reset();
};

heroCheck = () => {
    let data = JSON.stringify(orderList);
    localStorage.setItem("order", data);
    window.location.href = "pages/checkout.html";
};
