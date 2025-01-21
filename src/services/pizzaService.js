const demoPizzas = [
    {
      id: 1,
      name: "Margherita",
      description: "Classic pizza with fresh tomatoes, mozzarella, and basil.",
      imageUrl: "https://cdn.pixabay.com/photo/2024/04/21/18/44/ai-generated-8711272_640.jpg",
      price: 8.99,
      category: "Vegetarian",
    },
    {
      id: 2,
      name: "Pepperoni",
      description: "A crowd favorite topped with plenty of pepperoni and mozzarella.",
      imageUrl: "https://cdn.pixabay.com/photo/2021/01/01/21/12/pizza-5880022_640.jpg",
      price: 10.99,
      category: "Meat",
    },
    {
      id: 3,
      name: "BBQ Chicken",
      description: "Delicious pizza topped with BBQ sauce, grilled chicken, and red onions.",
      imageUrl: "https://www.allrecipes.com/thmb/ee0daLeNNIUcrKbm5nxwFXheMDM=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/AR-24878-bbq-chicken-pizza-beauty-4x3-39cd80585ad04941914dca4bd82eae3d.jpg",
      price: 11.99,
      category: "Meat",
    },
    {
      id: 4,
      name: "Veggie Delight",
      description: "Loaded with fresh bell peppers, onions, olives, and mushrooms.",
      imageUrl: "https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191_640.jpg",
      price: 9.99,
      category: "Vegetarian",
    },
];
  


export default function getAllPizzas() {

    return demoPizzas

} 