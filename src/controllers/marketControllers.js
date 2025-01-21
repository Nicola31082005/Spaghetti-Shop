import { Router } from "express";
import getAllPizzas from "../services/pizzaService.js";


const marketController = Router();


marketController.get('/pizzas', (req, res) => {
    const pizzas = getAllPizzas()
    res.render('pizzas', { title: 'Pizzas', pizzas: pizzas })
})



export default marketController