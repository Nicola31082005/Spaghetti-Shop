const cart = []



export function addToCart(data) {
    cart.push(data)
}


export function getCart() {
    return cart
}

export function getCartTotal(cart) {
    const cartTotal = cart.reduce((accumulator, currentValue) => accumulator += currentValue.totalPrice, 0);
    return cartTotal;
}


export function updateCart(orderId, operator) {
    
    const current = cart.find(order => order._id === orderId)
    
    switch (operator) {
        case 'increase':
            if (current.quantity >= 10) return
            current.quantity++;
            break;
        case 'decrease':
            if (current.quantity <= 1) return
            current.quantity--;
            break;
        case 'remove':
            const removeIndex = cart.indexOf(current);            
            cart.splice(removeIndex, 1)
            return;
    }

    current.totalPrice = current.quantity * current.price  

}

