import express from 'express'
import handlebars from 'express-handlebars'

const app = express();

app.engine('hbs', handlebars.engine({extname: 'hbs'}))

app.set('view engine', 'hbs')

app.get('/', (req, res) => {

    res.send('<h1>Hello</h1>')

})











app.listen(5000, () => console.log('Server listens on port: 5000'))