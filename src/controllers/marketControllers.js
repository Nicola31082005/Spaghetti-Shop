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

    const ingredientsWithStatus = currentPizza.ingredients.map((ingredient) => {
        return {
            name: ingredient,
            isRequired: currentPizza.requiredIngredients.includes(ingredient)
        };
    })

    res.render('marketViews/details', { title: "Details", pizza: currentPizza, ingredients: ingredientsWithStatus })
    
})

marketController.get('/cart', async (req, res) => {

    const cart = getCart();

    let cartTotal = cart.reduce((accumulator, item) => accumulator += item.totalPrice, 0)

    res.render('marketViews/cart', { title: 'Checkout', cart: cart, cartTotal })

})

marketController.post('/cart/add/:id', async (req, res) => {

    const pizzaId = req.params.id;

    let { name, price } = await getOnePizza(pizzaId)
    
    if (req.body.quantity > 10) {
        req.body.quantity = 10
    }

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

marketController.post('/cart/remove/:id', (req, res) => {

    const orderId = req.params.id;

    updateCart(orderId, 'remove')

    res.redirect('/cart')

})


export default marketController