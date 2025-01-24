const cart = []



export function addToCart(data) {
 
    cart.push(data)

}



export function getCart() {
    
    return cart

}


export function updateCart(orderId, operator) {
    
    const current = cart.find(order => order._id === orderId)
    
    operator === 'increase' ? current.quantity++ : current.quantity--;

    current.totalPrice = current.quantity * current.price;

}