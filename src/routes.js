import { Router } from "express";
import homeController from "./controllers/homeController.js";
import authController from "./controllers/authController.js";


const routes = Router()

routes.use(homeController)
routes.use(authController)


routes.get('*', (req, res) => {
    res.render('404', { title: 'Page not found' })
})


export default routes

