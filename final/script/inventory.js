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


        card.classList.add("comp-cards")
        name.textContent = `${mini.name}`
        game.textContent = `${mini.game}`
        faction.textContent = `${mini.faction}`
        button.textContent = `Details`

        photo.setAttribute("src", mini.image)
        photo.setAttribute('alt', `image of ${mini.name}`)
        photo.setAttribute('loading', 'lazy')


        card.appendChild(name)
        card.appendChild(game)
        card.appendChild(faction)
        card.appendChild(photo)
        card.appendChild(button)

        cards.appendChild(card)


    });
}

displayInventoryGrid(miniatures.miniatures)