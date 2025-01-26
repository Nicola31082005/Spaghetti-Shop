import { Router } from "express";
import  { getOnePizza, getAllPizzas } from "../services/pizzaService.js";
import { addToCart, getCart, getCartTotal, updateCart } from "../services/cartService.js";
import { v4 as uuidv4 } from 'uuid';
import { checkout } from "../services/checkoutService.js";

const marketController = Router();

marketController.get('/pizzas', async (req, res) => {
    
    const pizzas = await getAllPizzas()

    res.render('marketViews/pizzas', { title: 'Pizzas', pizzas })
})

marketController.get('/pizzas/:id', async (req, res) => {
    const currentPizza = await getOnePizza(req.params.id)

    const ingredientsWithStatus = currentPizza.ingredients.map((ingredient) => {
        return {
            name: ingredient,
            isRequired: currentPizza.requiredIngredients.includes(ingredient)
        };
    })
    res.render('marketViews/details', { title: "Details", pizza: currentPizza, ingredients: ingredientsWithStatus })    
})

marketController.get('/cart', async (req, res) => {
    if (!req.isAuthenticated) {
        res.redirect('/login')
        res.end()
    }
    
    const cart = getCart();
    let cartTotal = getCartTotal(cart)

    res.render('marketViews/cart', { title: 'Shopping Cart', cart, cartTotal: cartTotal.toFixed(2) })
})

marketController.post('/cart/add/:id', async (req, res) => {
    const pizzaId = req.params.id;

    let { name, price } = await getOnePizza(pizzaId)
    
    if (req.body.quantity > 10) {
        req.body.quantity = 10
    }

    const pizzaOrder = {
        _id: uuidv4(),
        totalPrice: req.body.quantity * price,
        price,    
        pizzaName: name,
        ...req.body
    }

   addToCart(pizzaOrder)

   res.redirect('/cart')
})

marketController.post('/cart/update/:id', (req, res) => {

    const orderId = req.params.id;

    const operator = req.body.action;

    updateCart(orderId, operator)

    res.redirect('/cart')

})

marketController.post('/cart/remove/:id', (req, res) => {

    const orderId = req.params.id;

    updateCart(orderId, 'remove')

    res.redirect('/cart')

})

marketController.get('/checkout', (req, res) => {

    if (!req.isAuthenticated) {
        res.redirect('/login')
        res.end()
    }

    const cart = getCart()
    const cartTotal = getCartTotal(cart)
    
    res.render('marketViews/checkout', { title: 'Checkout', cart, cartTotal })
})

marketController.post('/orders/create', async (req, res) => {
   try {
    const { name, address, phone } = req.body;
    
    const userInfo = { userId: req.userId, name, address, phone }
    
    const result = await checkout(userInfo);

    res.redirect('/goodbye')
   } catch(err) {
    console.error(err.message);
   }
})

export default marketController