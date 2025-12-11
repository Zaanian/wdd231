
// Set the current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

//get the last modified date
const lastmodifieddate = document.lastModified
document.getElementById("lastmodified").textContent = ("Last modified " + lastmodifieddate)

// hamburger button for menu in mobile size
const hamButton = document.querySelector('#menu');
const mainnav = document.querySelector('#navigation');

hamButton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hamButton.classList.toggle('show');
});

import { miniatures } from "../data/minis-data.mjs";


//checkout functions
const cards = document.getElementById("displayCartScreen");
function displayCartScreen() {
    if (localStorage.getItem("cart")) {
        const cartData = JSON.parse(localStorage.getItem("cart"))
        console.log(cartData)
        const data2 = miniatures.miniatures
        const arrayhold2 = []
        cartData.forEach((mini) => {

            const itemValue = data2.filter(array => array.name === mini)
            const third = itemValue[0]

            arrayhold2.push(third.value)

            let itemName = document.createElement("p")

            itemName.textContent = `Name: ${mini}  Cost: ${third.value}`

            cards.appendChild(itemName)
        })
        let sumtotal = document.createElement("p")
        const sum = arrayhold2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

        sumtotal.textContent = `Total: ${sum}`
        cards.appendChild(sumtotal)

    } else {
        settCart()
    }
}
displayCartScreen()

console.log(localStorage.getItem("cart"))



// cart functions
function settCart() {
    localStorage.setItem("cart", "name")
}

function checkCartUp() {
    const shoppingCart = localStorage.getItem("cart")
    if (shoppingCart) {
        console.log("shop cart set.")
    } else {
        settCart()
    }
}
//
function clearCart() {
    if (localStorage.getItem("cart")) {
        localStorage.clear()
        console.log(`clear cart function 1`)

    } else {
        localStorage.setItem("cart", "name")
        console.log(`clear cart function 2`)

    }
}
const clearButton = document.getElementById("clearCart")
console.log(clearButton)
clearButton.addEventListener("click", () => {
    clearCart()
    console.log(localStorage.getItem("cart"))
})
//
function cartContents() {
    const data = miniatures.miniatures

    const carting = document.getElementById("detail-cart")

    if (localStorage.getItem("cart") === "name") {
        console.log(`error `)
        localStorage.clear()

    } else if (!localStorage.getItem("cart")) {
        console.log(`second error`)

    } else {
        const myArr = JSON.parse(localStorage.getItem("cart"))
        let amount = document.createElement("p")
        amount.textContent = `Number of Items: ${myArr.length}`
        carting.appendChild(amount)



        const arrayhold = []
        myArr.forEach((mini) => {
            console.log(`Name: ${mini}`)
            let title = document.createElement("p")
            const itemValue = data.filter(array => array.name === mini)
            console.log(itemValue)

            const third = itemValue[0]
            console.log(third)
            console.log(third.value)

            title.textContent = `Name: ${mini}, Value: ${third.value}`
            carting.appendChild(title)

            arrayhold.push(third.value)

        })
        console.log(arrayhold)
        let sumtotal = document.createElement("p")
        const sum = arrayhold.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

        sumtotal.textContent = `Total: ${sum}`
        carting.appendChild(sumtotal)
        console.log(sum);
    }

}

//modal
const openDialogBtn = document.getElementById('showCart');
const closeDialogBtn = document.getElementById('close-btn');
const myDialog = document.getElementById('cart-details');
// Open the modal
openDialogBtn.addEventListener('click', () => {
    myDialog.showModal();
    cartContents()

    console.log("cart")

});
const clearHidden = document.getElementById("detail-cart")
// Close the modal
closeDialogBtn.addEventListener('click', () => {
    myDialog.close();
    clearHidden.innerHTML = ``

});
//
checkCartUp()
