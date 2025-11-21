


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


const weburl = "chamber/data/members.json"
const url = "https://api.openweathermap.org/data/3.0/onecall?lat=47.19&lon=-122.29&units=imperial&appid=70f32d8e36945d218801df44e122e1c2"

const url2 = "https://api.openweathermap.org/data/3.0/onecall?lat=47.19&lon=-122.29&units=imperial&appid=b5cf513fee5b29c16ccd6349eff084ae"
// API data
async function getDataApi(url) {
    const response = await fetch(url);
    const data = await response.json();
    let show = data
    console.log(show)
    let dataRise = data.daily[0].sunrise
    let dataFall = data.daily[0].sunset
    let current_temp = data.current.temp

    let tomTemp = data.daily[0].temp.day
    let afterTemp = data.daily[1].temp.day

    let sunSet = unixConvert(dataFall);
    let sunRise = unixConvert(dataRise);


    disForcast(current_temp, tomTemp, afterTemp)
    DisWeather(data)
}
// Unix time converter
function unixConvert(data) {
    const milliseconds = data * 1000;
    const dateObject = new Date(milliseconds);
    return dateObject
}


// json data retrival 
async function getDataGrid(url) {
    const response = await fetch(url);
    const data = await response.json();
    let newArray = data.companies.filter(company => company.membershiplevel == 2 || company.membershiplevel == 3);
    let selected = pickThreeRandom(newArray)
    console.log(selected)
    selected.forEach(company => {
        disCom(company)
    })
}
//Display weather data
function DisWeather(data) {

    const weal = document.getElementById("weather")
    let min_temp = document.createElement("p")
    let max_temp = document.createElement("p")
    let icon = document.createElement("img")
    let descrypt = document.createElement("p")

    let iconList = `https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`
    console.log(data.current.weather[0].icon)

    max_temp.textContent = `Max Temp: ${data.current.temp}° F`
    min_temp.textContent = `Min Temp: ${data.current.temp}° F`
    descrypt.textContent = `${data.current.weather[0].description}`

    icon.setAttribute("src", iconList)
    icon.setAttribute('loading', 'lazy')
    icon.setAttribute('width', 'auto');
    icon.setAttribute('height', 'auto');

    weal.appendChild(descrypt)
    weal.appendChild(icon)
    weal.appendChild(max_temp)
    weal.appendChild(min_temp)


}

//Display forecast data
function disForcast(first, second, third) {
    document.getElementById("today").textContent = `${first}° F`
    document.getElementById("tomor").textContent = `${second}° F`
    document.getElementById("after").textContent = `${third}° F`

}

// random function
function pickThreeRandom(arr) {

    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
}
//display company spotlight 
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

getDataApi(url)
getDataGrid(weburl)
