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

const maxRetries = 3;
let attempt = 0;

export async function getAllPizzasWithRetry() {
  while (attempt < maxRetries) {
    try {
      const pizzas = await PizzasCollection.find({});
      return pizzas;
    } catch (err) {
      attempt++;
      if (attempt >= maxRetries) {
        throw new Error('Max retries reached');
      }
      console.log('Retrying connection...');
      await new Promise(resolve => setTimeout(resolve, 1000)); // Delay before retrying
    }
  }
}
