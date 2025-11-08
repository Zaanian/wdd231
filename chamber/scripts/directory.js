
// Set the current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

//get the last modified date
const lastmodifieddate = document.lastModified
document.getElementById("lastmodified").textContent = ("Last modified " + lastmodifieddate)

// hamburger button for menu in mobile size


// json data retrival 
async function getdata() {
    const response = await fetch("data/members.json");
    const data = response.json();
    console.log(data)
}

const companyData = getdata()



