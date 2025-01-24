import { Router } from "express";
import  { getOnePizza, getAllPizzas } from "../services/pizzaService.js";
import { addToCart, getCart, updateCart } from "../services/cartService.js";
import { v4 as uuidv4 } from 'uuid';

const marketController = Router();

marketController.get('/pizzas', async (req, res) => {
    
    const pizzas = await getAllPizzas()

    res.render('marketViews/pizzas', { title: 'Pizzas', pizzas })
})

marketController.get('/pizzas/:id', async (req, res) => {
    const currentId = req.params.id;

    const currentPizza = await getOnePizza(currentId)

    res.render('marketViews/details', { title: "Details", pizza: currentPizza })
    
})

marketController.get('/cart', async (req, res) => {

    const cart = getCart();

    res.render('marketViews/cart', { title: 'Checkout', cart: cart })

})

marketController.post('/cart/add/:id', async (req, res) => {

    const pizzaId = req.params.id;

    let { name, price } = await getOnePizza(pizzaId)
    
    const totalPrice = req.body.quantity * price;
    
    const pizzaOrder = {
        _id: uuidv4(),
        totalPrice,
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


export default marketController