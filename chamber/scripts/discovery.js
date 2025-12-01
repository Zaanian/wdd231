
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
import { places } from '../data/interest.mjs'
console.log(places.interest)


//
const cards = document.getElementById("cards");
const displayInterestGrid = (interests) => {
    interests.forEach(interest => {
        let card = document.createElement("section");
        let name = document.createElement("h2")
        let address = document.createElement("em")
        let description = document.createElement("p")
        let img = document.createElement("img")

        card.classList.add("comp-cards")
        name.textContent = `${interest.name}`
        address.textContent = `${interest.address}`
        description.textContent = `${interest.description}`

        img.setAttribute("src", interest.image)
        img.setAttribute('alt', `image of ${interest.name}`)
        img.setAttribute('loading', 'lazy')

        card.appendChild(name)
        card.appendChild(address)
        card.appendChild(description)
        card.appendChild(img)

        cards.appendChild(card)


    });
}

displayInterestGrid(places.interest)