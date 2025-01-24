import { Router } from "express";
import  { getOnePizza, getAllPizzas } from "../services/pizzaService.js";
import { addToCart, getCart } from "../services/cartService.js";

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

    let { name } = await getOnePizza(pizzaId)
    

    console.log(name);
    

    const pizzaOrder = {
        pizzaName: name,
        ...req.body
    }


   addToCart(pizzaOrder)

   res.redirect('/cart')

})


export default marketController