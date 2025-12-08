
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
checkCartUp()

