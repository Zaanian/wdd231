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

const weburl = "data/members.json"

// json data retrival 
async function getDataGrid(url) {
    const response = await fetch(url);
    const data = await response.json();

    let ranOne = randomNumber();
    let ranTwo = randomNumber();
    let ranThree = randomNumber();
    let num = data.companies;
    console.log(num);
    console.log(ranOne);
    console.log(ranTwo);
    console.log(ranThree);

    let runOne = data.companies[ranOne];
    let runTwo = data.companies[ranTwo];
    let runThree = data.companies[ranThree];

    console.log(runOne);
    console.log(runTwo);
    console.log(runThree);

    disCom(runOne);
    disCom(runTwo);
    disCom(runThree);
}
//
getDataGrid(weburl)
// random function
function randomNumber() {
    let min = 0
    let max = 6
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber
}

//
function disCom(company) {
    const cards = document.getElementById("cards")
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

}

// company spotlights card
const cards = document.getElementById("cards")
const displayCompaniesGrid = (companies) => {
    companies.forEach(company => {
        let card = document.createElement("section");
        let name = document.createElement("h2")
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


