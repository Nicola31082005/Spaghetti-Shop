// Import the pizza orders collection
// Create a checkout function
// - Get the cart with the orders
// - Create a new order in the orders collection
// - Export the function

import { auth } from "../../config/firebase.js";
import Orders from "../models/Orders.js";
import { getCart, getCartTotal } from "./cartService.js";

export async function checkout(userInfo) {
    
    const cart = getCart();
    const cartTotal = getCartTotal(cart);

    const currentUser = auth.currentUser

    if (currentUser) {
        
        const userId = auth.currentUser.uid
    }


    const checkout = {

        userInfo,
        cart: cart,
        cartTotal: cartTotal,

    }

    const result = await Orders.create(checkout)

}

