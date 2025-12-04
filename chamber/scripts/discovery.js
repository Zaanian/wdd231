
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

//retrieve external data
import { places } from '../data/interest.mjs'

//display places of interests cards
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

// save current date
function saveCurrentDate() {
    const now = new Date();
    localStorage.setItem('lastVisitTimestamp', now.getTime());
}
//check time since last visit
function checkTimeSinceLastVisit() {
    const lastDateElement = document.getElementById('lastDate')
    const lastVisitTimestamp = localStorage.getItem('lastVisitTimestamp');

    if (lastVisitTimestamp) {
        // convert string into number and get current date
        const lastVisitTime = parseInt(lastVisitTimestamp, 10);
        const currentTime = new Date().getTime();
        // difference between two dates
        const difference = currentTime - lastVisitTime;

        const daysPassed = Math.floor(difference / (1000 * 60 * 60 * 24));
        //display result
        if (daysPassed == 1) {
            lastDateElement.textContent = `You last visited ${daysPassed} day ago.`
        } else if (daysPassed > 1) {
            lastDateElement.textContent = `You last visited ${daysPassed} days ago.`
        } else {
            lastDateElement.textContent = `Back so soon! Awesome`
        }

    } else {
        lastDateElement.textContent = 'Welcome! Let us know if you have any questions.'

        saveCurrentDate()
    }
}
checkTimeSinceLastVisit()
displayInterestGrid(places.interest)


