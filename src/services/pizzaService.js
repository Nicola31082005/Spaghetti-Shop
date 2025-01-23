import PizzasCollection from "../models/Pizza.js";



export default async function getAllPizzas() {
  
  try {
 
    const pizzas = await PizzasCollection.find({})
    
    return pizzas

  } catch(err) {
    console.error(err.message)
  }

} 