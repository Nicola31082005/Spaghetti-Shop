const cart = []



export function addToCart(data) {
 
    cart.push(data)

}



export function getCart() {
    
    return cart

}


export function updateCart(orderId) {
    
    const current = cart.find(order => order._id === orderId)

    current.quantity++;
    current.totalPrice = current.quantity * current.price  

}