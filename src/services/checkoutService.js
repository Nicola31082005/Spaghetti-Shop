import Orders from "../models/Orders.js";
import { getCart, getCartTotal } from "./cartService.js";

export async function checkout(userInfo) {
    
    const cart = getCart();
    const cartTotal = getCartTotal(cart);

    const checkout = {
        userInfo,
        cart: cart,
        cartTotal: cartTotal,
    }

    const result = await Orders.create(checkout)

}

