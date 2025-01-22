import { Router } from "express";
import getAllPizzas from "../services/pizzaService.js";


const marketController = Router();


marketController.get('/pizzas', (req, res) => {
    const pizzas = getAllPizzas()
    res.render('marketViews/pizzas', { title: 'Pizzas', pizzas: pizzas })
})

marketController.get('/pizzas/:id', (req, res) => {
    const currentId = Number(req.params.id);
    const currentPizza = getAllPizzas().find(pizzaObj => pizzaObj.id === currentId)

    res.render('marketViews/details', { title: "Details", pizza: currentPizza })
    
})



export default marketController