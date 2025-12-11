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



//
const cards = document.getElementById("cards");
const displayInventoryGrid = (minis) => {
    minis.forEach(mini => {
        let card = document.createElement("section");
        let name = document.createElement("h2")
        let game = document.createElement("p")
        let faction = document.createElement("em")
        let photo = document.createElement("img")

        let cartButton = document.createElement("button")


        card.classList.add("comp-cards")
        cartButton.classList.add("myButtons")


        name.textContent = `${mini.name}`
        game.textContent = `${mini.game}`
        faction.textContent = `${mini.faction}`

        cartButton.textContent = `Add to Cart`


        cartButton.setAttribute("type", 'button')
        cartButton.setAttribute("data-button-id", `${mini.name}`)


        photo.setAttribute("src", mini.image)
        photo.setAttribute('alt', `image of ${mini.name}`)
        photo.setAttribute('loading', 'lazy')


        card.appendChild(name)
        card.appendChild(game)
        card.appendChild(faction)
        card.appendChild(photo)
        card.appendChild(cartButton)

        cards.appendChild(card)


    });
}

displayInventoryGrid(miniatures.miniatures)

// cart functions
//
function settCart() {
    const shoppingCart = localStorage.setItem("mini", "name")
}

function checkCartUp() {
    const shoppingCart = localStorage.getItem("mini")
    if (shoppingCart) {
        console.log("shop cart set.")

    } else {
        console.log("Shop cart not set. Please reload page.")
        settCart()
    }
}
//

//
const shopping = []
localStorage.setItem("cart", "name")

const allbutton = document.querySelectorAll(".myButtons")
allbutton.forEach(button => {
    button.addEventListener('click', (event) => {
        //
        const buttonId = event.target.getAttribute('data-button-id');
        console.log(`Button ${buttonId} was clicked!`);
        shopping.push(buttonId)
        const myJason = JSON.stringify(shopping)
        console.log(shopping)

        localStorage.setItem("cart", `${myJason}`)
        console.log(localStorage)


    });
});
//

function cartContents() {
    const data = miniatures.miniatures

    const carting = document.getElementById("detail-cart")
    const myArr = JSON.parse(localStorage.getItem("cart"))
    console.log(myArr)
    console.log(data)






    myArr.forEach((mini, index) => {
        console.log(`Name: ${mini} position: ${index}`)
        let name = document.createElement("p")


        const users = data.filter(array => array.name === mini)
        console.log(users)
        const third = data.at(0)
        console.log(third)

        name.textContent = `Name: ${mini}, Value: ${third.value}`
        carting.appendChild(name)

    })
}
const arrayDisplay = (minis) => {
    minis.forEach(mini => {
        console.log(`Name: ${mini.name}, Value: ${mini.value}`)

    })
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


console.log(localStorage)
//

//
checkCartUp()


