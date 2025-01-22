import { Router } from "express";

const homeController = Router();

homeController.get('/', (req, res) => {

    res.render('homeViews/home', { title: 'Planet Pizza' })

})

homeController.get('/about', (req, res) => {
    
    res.render('homeViews/about', { title: 'About Page' })

})

homeController.get('/about-contacts', (req, res) => {
    res.render('homeViews/contacts', { title: 'Contacts' })
})


export default homeController