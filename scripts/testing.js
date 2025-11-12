// Set the current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

//get the last modified date
const lastmodifieddate = document.lastModified
document.getElementById("lastmodified").textContent = ("Last modified " + lastmodifieddate)

// hamburger button for menu in mobile size
const hamButton = document.querySelector('#menu');
const mainnav = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hamButton.classList.toggle('show');
});

const weburl = "data/members.json"

// json data retrival 
//grid 
async function getDataGrid(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.companies);
    displayCompaniesGrid(data.companies);
}

//list
async function getDataList(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.companies);
    displayCompaniesList(data.companies);
}

function clearData() {

    let item = document.getElementsByClassName("comp-card")
    item.remove()
}

// company cards
//grid
const cards = document.getElementById("cards")
const displayCompaniesGrid = (companies) => {
    companies.forEach(company => {
        let card = document.createElement("section");
        let name = document.createElement("h3")
        let address = document.createElement("p")
        let phones = document.createElement("p")
        let member = document.createElement("p")
        let portrait = document.createElement("img")

        card.classList.add("comp-card");
        portrait.setAttribute('src', company.image)
        portrait.setAttribute('alt', `image of ${company.name}`)
        portrait.setAttribute('loading', 'lazy')
        portrait.setAttribute('width', 'auto');
        portrait.setAttribute('height', 'auto');

        name.textContent = `${company.name}`
        address.textContent = `Address: ${company.address}`
        phones.innerHTML = `Phone: ${company.phone}`
        member.textContent = `Membership Level: ${company.membershiplevel}`

        card.appendChild(portrait)
        card.appendChild(name)
        card.appendChild(address)
        card.appendChild(phones)
        card.appendChild(member)


        cards.appendChild(card)

    });
}
//List
const displayCompaniesList = (companies) => {
    companies.forEach(company => {
        let card = document.createElement("section");
        let name = document.createElement("h3")
        let address = document.createElement("p")
        let phones = document.createElement("p")
        let member = document.createElement("p")
        let line = document.createElement("p")


        card.classList.add("list-card");

        line.innerHTML = `${company.name}  ${company.address}  ${company.phone}`

        name.textContent = `${company.name}`
        address.textContent = `Address: ${company.address}`
        phones.innerHTML = `Phone: ${company.phone}`
        member.textContent = `Membership Level: ${company.membershiplevel}`

        card.appendChild(line)


        cards.appendChild(card)

    });
}

//
const gridButton = document.getElementById("grid-button");

gridButton.addEventListener("click", () => { getDataGrid(weburl) });

const listButton = document.getElementById("list-button");

listButton.addEventListener("click", () => { getDataList(weburl) });