import { Router } from "express";
import  { getOnePizza, getAllPizzas } from "../services/pizzaService.js";

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


export default marketController