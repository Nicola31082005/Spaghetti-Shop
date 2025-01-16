import express from 'express';
import handlebars from 'express-handlebars';


const app = express();


// Set up Handlebars
app.engine('hbs', handlebars.engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');
app.set('views', 'src/views')

app.use(express.static('public'))

// Route for the homepage
app.get('/', (req, res) => {
  res.render('home', { title: 'Spaghetti Shop' });
});

app.listen(5000, () => console.log('Server listens on port: 5000'));
