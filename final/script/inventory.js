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
        let faction = document.createElement("p")


        card.classList.add("comp-cards")
        name.textContent = `${mini.name}`
        game.textContent = `${mini.game}`
        faction.textContent = `${mini.faction}`


        card.appendChild(name)
        card.appendChild(game)
        card.appendChild(faction)

        cards.appendChild(card)


    });
}

displayInventoryGrid(miniatures.miniatures)