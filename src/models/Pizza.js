import { Schema, model } from "mongoose"


const pizzaSchema = new Schema({
    name:  { type: String, required: true }, 
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    ingredients: { type: Array, required: true },
    requiredIngredients: { type: Array },
})


const PizzasCollection = model('Pizza', pizzaSchema, 'pizzasCollection');

export default PizzasCollection