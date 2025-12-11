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
function settCart() {
    const shoppingCart = localStorage.setItem("mini", "name")
}

function checkCartUp() {
    const shoppingCart = localStorage.getItem("mini")
    if (shoppingCart) {
        console.log("shop cart set.")

    } else {
        console.log("Shop cart not set. Please reload page.")
        settCart()
    }
}
//
function cartContents() {
    const carting = document.getElementById("detail-cart")


    const myArr = JSON.parse(localStorage.getItem("cart"))
    console.log(myArr)

    myArr.forEach((mini, index) => {
        console.log(`Name: ${mini} position: ${index}`)
        let name = document.createElement("p")

        name.textContent = `Name: ${mini}`
        carting.appendChild(name)
    })


}
//modal
const openDialogBtn = document.getElementById('showCart');
const closeDialogBtn = document.getElementById('close-btn');
const myDialog = document.getElementById('cart-details');
// Open the modal
openDialogBtn.addEventListener('click', () => {
    myDialog.showModal();
    cartContents()

});
// Close the modal
closeDialogBtn.addEventListener('click', () => {
    myDialog.close();
});