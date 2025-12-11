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
//
import { miniatures } from "../data/minis-data.mjs";

//submitted data extract
const params = new URLSearchParams(window.location.search)

function submitDataShow(data) {
    const firstname = data.get("fname")
    const lastname = data.get("lname")

    const email = data.get("email")
    const phone = data.get("mobile-phone")
    const business = data.get("business")

    const timestap = data.get("time")

    const display = document.getElementById("results")
    console.log(timestap)

    let name = document.createElement("p")

    let disEmail = document.createElement("p")
    let disPhone = document.createElement("p")
    let nameBusi = document.createElement("p")

    let timer = document.createElement("p")

    name.textContent = `Name: ${firstname} ${lastname}`

    disEmail.textContent = `Email: ${email}`
    disPhone.textContent = `Mobile Phone Number: ${phone}`
    nameBusi.textContent = `Business Name: ${business}`
    timer.textContent = `time: ${timestap}`

    display.appendChild(name)

    display.appendChild(disEmail)
    display.appendChild(disPhone)
    display.appendChild(nameBusi)

    display.appendChild(timer)

}
//
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
        console.log(myArr)
        console.log(data)
        let amount = document.createElement("p")
        amount.textContent = `Number of Items: ${myArr.length}`
        carting.appendChild(amount)



        const arrayhold = []
        myArr.forEach((mini) => {
            console.log(`Name: ${mini}`)
            let title = document.createElement("p")


            const users = data.filter(array => array.name === mini)
            console.log(users)

            const third = users[0]
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

submitDataShow(params)