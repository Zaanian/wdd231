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

//modal
const modalNP = document.getElementById('np-info');
const modalBR = document.getElementById('bronze-info');
const modalSI = document.getElementById('silver-info');
const modalGO = document.getElementById('gold-info');
//non-profit learn more
const openNPBtn = document.getElementById('np-open');
const closeNPBtn = document.getElementById('np-close');
openNPBtn.addEventListener('click', () => {
    modalNP.showModal();
});
closeNPBtn.addEventListener('click', () => {
    modalNP.close();
});
//bronze learn more
const openBRBtn = document.getElementById('br-open');
const closeBRBtn = document.getElementById('br-close');
openBRBtn.addEventListener('click', () => {
    modalBR.showModal();
});
closeBRBtn.addEventListener('click', () => {
    modalBR.close();
});
//silver learn more
const openSIBtn = document.getElementById('si-open');
const closeSIBtn = document.getElementById('si-close');
openSIBtn.addEventListener('click', () => {
    modalSI.showModal();
});
closeSIBtn.addEventListener('click', () => {
    modalSI.close();
});
//gold learn more
const openGOBtn = document.getElementById('go-open');
const closeGOBtn = document.getElementById('go-close');
openGOBtn.addEventListener('click', () => {
    modalGO.showModal();
});
closeGOBtn.addEventListener('click', () => {
    modalGO.close();
});
//





//URLparam  GET



