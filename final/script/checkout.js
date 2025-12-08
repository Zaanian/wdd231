
//
import { miniatures } from "../data/minis-data.mjs";

const listData = miniatures.miniatures


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

let counting = 0

function addToCart() {
    const list = data
    const cart = localStorage.getItem("mini")
    counting++

    console.log(cart)


}

console.log(counting)

function removeFromCart() {

}

checkCartUp()
//
const secondList = []
const thirdlist = new Map
const listName = (minis) => {
    minis.forEach(mini => {
        secondList.push(`${mini.name}`)



    })
}

listName(listData)
console.log(secondList)



//






console.log(localStorage)