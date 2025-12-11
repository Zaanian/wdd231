
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

console.log(localStorage)


//
function cartContents() {
    const data = miniatures.miniatures

    const carting = document.getElementById("detail-cart")
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
//modal
const openDialogBtn = document.getElementById('showCart');
const closeDialogBtn = document.getElementById('close-btn');
const myDialog = document.getElementById('cart-details');
// Open the modal
openDialogBtn.addEventListener('click', () => {
    myDialog.showModal();
    cartContents()

});
// Close the modal
closeDialogBtn.addEventListener('click', () => {
    myDialog.close();
});
