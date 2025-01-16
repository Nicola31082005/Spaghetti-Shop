import { Router } from "express";


const authController = Router();

authController.get('/login', (req, res) => {

    res.render('login', { title: 'Login Page', layout: 'auth' })

})

authController.get('/register', (req, res) => {

    res.render('register', { title: 'Register Page', layout: 'auth' })

})


export default authController