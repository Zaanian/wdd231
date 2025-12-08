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
        let button = document.createElement("button")
        let cartButton = document.createElement("button")


        card.classList.add("comp-cards")
        cartButton.classList.add("myButtons")


        name.textContent = `${mini.name}`
        game.textContent = `${mini.game}`
        faction.textContent = `${mini.faction}`
        button.textContent = `Details`
        cartButton.textContent = `Add to Cart`

        button.setAttribute("type", 'button')
        cartButton.setAttribute("type", 'button')
        cartButton.setAttribute("data-button-id", `${mini.name}`)


        photo.setAttribute("src", mini.image)
        photo.setAttribute('alt', `image of ${mini.name}`)
        photo.setAttribute('loading', 'lazy')


        card.appendChild(name)
        card.appendChild(game)
        card.appendChild(faction)
        card.appendChild(photo)
        card.appendChild(button)
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


function addToCart() {
    count++
    console.log(`Counting: ${count}`)


}

const shopping = []

const allbutton = document.querySelectorAll(".myButtons")
allbutton.forEach(button => {
    button.addEventListener('click', (event) => {
        //
        const buttonId = event.target.getAttribute('data-button-id');
        console.log(`Button ${buttonId} was clicked!`);
        shopping.push(buttonId)
        console.log(shopping)

    });
});



console.log(allbutton)


//
function removeFromCart() {

}
//
checkCartUp()


