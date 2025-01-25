import { Schema, model, Types } from "mongoose";

const pizzaOrdersSchema = new Schema({

    userInfo: Object,
    cart: Array,
    cartTotal: Number

})


const Orders = model('Order', pizzaOrdersSchema)


export default Orders