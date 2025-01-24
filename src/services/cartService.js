const cart = []



export function addToCart(data) {
 
    cart.push(data)

}



export function getCart() {
    
    return cart

}


export function updateCart(orderId, operator) {
    
    const current = cart.find(order => order._id === orderId)
    
    switch (operator) {
        case 'increase':
            current.quantity++;
            break;
        case 'decrease':
            current.quantity--;
            break;
        case 'remove':
            const removeIndex = cart.indexOf(current);            
            cart.splice(removeIndex, 1)
            return;
    }

    current.totalPrice = current.quantity * current.price  


}