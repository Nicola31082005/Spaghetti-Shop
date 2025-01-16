import express from 'express';
import handlebars from 'express-handlebars';
import routes from './routes.js';


const app = express();


// Set up Handlebars
app.engine('hbs', handlebars.engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');
app.set('views', 'src/views')

app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

app.use(routes)

app.listen(5000, () => console.log('Server listens on port: 5000'));
