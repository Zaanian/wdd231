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

import { miniatures } from "../data/minis-data.mjs";



//
const cards = document.getElementById("cards");
const displayInventoryGrid = (minis) => {
    minis.forEach(mini => {
        let card = document.createElement("section");
        let name = document.createElement("h2")
        let game = document.createElement("p")
        let faction = document.createElement("em")
        let photo = document.createElement("img")
        let cartButton = document.createElement("button")


        card.classList.add("comp-cards")
        cartButton.classList.add("myButtons")


        name.textContent = `${mini.name}`
        game.textContent = `${mini.game}`
        faction.textContent = `${mini.faction}`

        cartButton.textContent = `Add to Cart`

        cartButton.setAttribute("type", 'button')
        cartButton.setAttribute("data-button-id", `${mini.name}`)


        photo.setAttribute("src", mini.image)
        photo.setAttribute('alt', `image of ${mini.name}`)
        photo.setAttribute('loading', 'lazy')


        card.appendChild(name)
        card.appendChild(game)
        card.appendChild(faction)
        card.appendChild(photo)
        card.appendChild(cartButton)

        cards.appendChild(card)


    });
}

displayInventoryGrid(miniatures.miniatures)


const shopping = []
const allbutton = document.querySelectorAll(".myButtons")
allbutton.forEach(button => {
    button.addEventListener('click', (event) => {
        //
        const buttonId = event.target.getAttribute('data-button-id');
        console.log(`Button ${buttonId} was clicked!`);
        shopping.push(buttonId)
        const myJason = JSON.stringify(shopping)
        console.log(shopping)

        localStorage.setItem("cart", `${myJason}`)
        console.log(localStorage)


    });
});

// cart functions
function settCart() {
    localStorage.setItem("cart", "name")
}

function checkCartUp() {
    const shoppingCart = localStorage.getItem("cart")
    if (shoppingCart) {
        console.log("shop cart set.")
    } else {
        settCart()
    }
}
//
function clearCart() {
    if (localStorage.getItem("cart")) {
        localStorage.clear()
        console.log(`clear cart function 1`)

    } else {
        localStorage.setItem("cart", "name")
        console.log(`clear cart function 2`)

    }
}
const clearButton = document.getElementById("clearCart")
console.log(clearButton)
clearButton.addEventListener("click", () => {
    clearCart()
    console.log(localStorage.getItem("cart"))
})
//
function cartContents() {
    const data = miniatures.miniatures

    const carting = document.getElementById("detail-cart")

    if (localStorage.getItem("cart") === "name") {
        console.log(`error `)
        localStorage.clear()

    } else if (!localStorage.getItem("cart")) {
        console.log(`second error`)

    } else {
        const myArr = JSON.parse(localStorage.getItem("cart"))
        console.log(myArr)
        console.log(data)
        let amount = document.createElement("p")
        amount.textContent = `Number of Items: ${myArr.length}`
        carting.appendChild(amount)



        const arrayhold = []
        myArr.forEach((mini) => {
            console.log(`Name: ${mini}`)
            let title = document.createElement("p")


            const users = data.filter(array => array.name === mini)
            console.log(users)

            const third = users[0]
            console.log(third)
            console.log(third.value)

            title.textContent = `Name: ${mini}, Value: ${third.value}`
            carting.appendChild(title)

            arrayhold.push(third.value)

        })
        console.log(arrayhold)
        let sumtotal = document.createElement("p")
        const sum = arrayhold.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

        sumtotal.textContent = `Total: ${sum}`
        carting.appendChild(sumtotal)
        console.log(sum);
    }

}

//modal
const openDialogBtn = document.getElementById('showCart');
const closeDialogBtn = document.getElementById('close-btn');
const myDialog = document.getElementById('cart-details');
// Open the modal
openDialogBtn.addEventListener('click', () => {
    myDialog.showModal();
    cartContents()

    console.log("cart")

});
const clearHidden = document.getElementById("detail-cart")
// Close the modal
closeDialogBtn.addEventListener('click', () => {
    myDialog.close();
    clearHidden.innerHTML = ``

});
//
checkCartUp()


