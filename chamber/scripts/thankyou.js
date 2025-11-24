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

//submitted data extract
const params = new URLSearchParams(window.location.search)

function submitDataShow(data) {
    const firstname = data.get("fname")
    const lastname = data.get("fname")

    const email = data.get("email")
    const phone = data.get("mobile-phone")
    const business = data.get("business")

    const timestap = data.get("time")

    const display = document.getElementById("results")
    console.log(timestap)

    let name = document.createElement("p")

    let disEmail = document.createElement("p")
    let disPhone = document.createElement("p")
    let nameBusi = document.createElement("p")

    let timer = document.createElement("p")

    name.textContent = `Name: ${firstname} ${lastname}`

    disEmail.textContent = `Email: ${email}`
    disPhone.textContent = `Mobile Phone Number: ${phone}`
    nameBusi.textContent = `Business Name: ${business}`
    timer.textContent = `time: ${timestap}`

    display.appendChild(name)

    display.appendChild(disEmail)
    display.appendChild(disPhone)
    display.appendChild(nameBusi)

    display.appendChild(timer)

}


submitDataShow(params)

