showcheck = () => {

    let data = JSON.parse(localStorage.getItem('sub-orders'));
    let things = document.getElementById('heroOrder');
    let total = document.getElementById('finalTotal');

    let moneyTotal =0;

    for(let i = 0; i < orderList.length; i++){
        let name = data[i].subName;
        let Size = data[i].subSize;
        let bread = data[i].subBread;
        let toast = data[i].subToast;
        let toppings = data[i].subToppings;
        let sauce = data[i].subSauce;
        let price = data[i].subPrice;
    

        moneyTotal += price;

        things.innerHTML +=`
            <div class="heroOrder">
                <p><strong>Hero Name:</strong>${name}</p>
                <p><strong>Hero Size:</strong>${Size}</p>
                <p><strong>Hero Armour:</strong>${bread}</p>
                <p><strong>Are you Toast:</strong>${toast}</p>
                <p><strong>Hero Sauce:</strong>${toppings}</p>
                <p><strong>Hero Topps:</strong>${sauce}</p>
                <p><strong>Hero Total:</strong>R${price}.00</p>
            </div>
        `
        totalArea.innerHTML = "R" + moneyTotal + ".00";
    }

}

resetGoBack = () => {
    localStorage.removeItem('sub-orders');
    window.location.href = '../Index.html'
}