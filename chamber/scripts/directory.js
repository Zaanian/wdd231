
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

// json data retrival 
async function getdata() {
    const response = await fetch("data/members.json");
    const data = await response.json();
    console.log(data.companies);
    return data.companies;
}

const CData = getdata();

// company cards

const displayCompanies = (companies) => {
    companies.array.forEach(companies => {
        let card = document.createElement("section");
        let name = document.createElement("p")
        let portrait = document.createElement("img")

        name.textContent = `${companies[0]}`

        card.appendChild(name)

        cards.appendChild(card)
    });
}

