import { Router } from "express";
import homeController from "./controllers/homeController.js";
import authController from "./controllers/authController.js";
import marketController from "./controllers/marketControllers.js";


const routes = Router()

routes.use(homeController)
routes.use(authController)
routes.use(marketController)


routes.get('/goodbye', (req, res) => {
    res.render('goodbye', { layout: false })
})

routes.get('*', (req, res) => {
    res.render('404', { title: 'Page not found' })
})


export default routes

