import PizzasCollection from "../models/Pizza.js";

export async function getAllPizzas() {
  try {
    const pizzas = await PizzasCollection.find({})

    return pizzas
  } catch(err) {
    console.error(err.message)
  }
} 

export async function getOnePizza(pizzaId) {
  try {
    const currentPizza = await PizzasCollection.findById(pizzaId)

    return currentPizza
  } catch(err) {
    console.error(err.message)
  }
}