import { Router } from "express";

const homeController = Router();

homeController.get('/', (req, res) => {

    res.render('home', { title: 'Planet Pizza' })

})

homeController.get('/about', (req, res) => {
    
    res.render('about', { title: 'About Page' })

})

homeController.get('/about-contacts', (req, res) => {
    res.render('contacts', { title: 'Contacts' })
})


export default homeController