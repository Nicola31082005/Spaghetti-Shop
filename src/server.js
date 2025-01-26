import express from 'express';
import handlebars from 'express-handlebars';
import routes from './routes.js';
import checkAuthentication from './middlewares/authenticationState.js';
import 'dotenv/config'
import connectDB from '../config/db.js';


const app = express();

// Set up Handlebars
app.engine('hbs', handlebars.engine({ extname: 'hbs', runtimeOptions: { allowProtoPropertiesByDefault: true } }));
app.set('view engine', 'hbs');
app.set('views', 'src/views');

// Middleware for authentication check (before routes)
app.use(checkAuthentication);  // Ensure this is before the routes so the auth state is available in templates

// Body parser middleware
app.use(express.urlencoded({ extended: false }));

// Serve static files (e.g., CSS, images, JS)
app.use(express.static('public'));

// Your route handlers
app.use(routes);  // Routes should come after middleware


// Connect with MongoDB
connectDB()

// Start server
app.listen(5000, () => console.log(`Server listens on port: ${process.env.PORT}`));
