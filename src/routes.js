import { Router } from "express";
import homeController from "./controllers/homeController.js";


const routes = Router()

routes.use(homeController)


routes.get('*', (req, res) => {
    res.render('404', { title: 'Page not found' })
})


export default routes

