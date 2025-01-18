import { Router } from "express";
import { login, logout, register, validateRegistration } from "../services/authService.js";



const authController = Router();

authController.get('/login', (req, res) => {
    res.render('login', { title: 'Login Page', layout: 'auth' })
})

authController.get('/register', (req, res) => {
    res.render('register', { title: 'Register Page', layout: 'auth' })
})

authController.post('/register', async (req, res) => {
    const data = req.body
    
    const validation = validateRegistration({
        password: data.password,
        confirmPassword: data['confirm-password']
    })

    if (!validation.success) {   
        return res.status(400).render('register', { title: 'Register Page', layout: 'auth', error: validation.message })
    }

    try {
        const userCredential = await register({email: data.email, password: data.password })

        if (userCredential) {
            console.log(userCredential);
            res.redirect('/') 
        }

    } catch(err){
        console.error(err.message)
        res.status(400).render('register', { title: 'Register Page', layout: 'auth', error: err.message })
    }

})

authController.post('/login', async (req, res) => {
    const data = req.body
    
    try {
        const userCredential = await login({email: data.email, password: data.password })

        if (userCredential) {
            console.log(userCredential);
            res.redirect('/') 
        }

    } catch(err){
        console.error(err.message)
        res.status(400).render('login', { title: 'Login Page', layout: 'auth', error: err.message })
    }

})

authController.get('/logout', async (req, res) => {

    try {
        await logout()
        req.isAuthenticated = false;
        req.locals.isAuthenticated = false;
    
        res.redirect('/')
    } catch(err) {
        console.error('Logout Error', err)
        res.status(500).send('An error occurred during logout.')
    }
})


export default authController