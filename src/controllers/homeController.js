import { Router } from "express";

const homeController = Router();

homeController.get('/', (req, res) => {

    res.render('home', { title: 'Planet Pizza' })

})

homeController.get('/about', (req, res) => {

    res.render('about', { title: 'About Page' })

})


export default homeController