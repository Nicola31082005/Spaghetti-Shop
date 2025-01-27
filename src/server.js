import express from 'express';
import handlebars from 'express-handlebars';
import routes from './routes.js';
import checkAuthentication from './middlewares/authenticationState.js';
import 'dotenv/config';
import connectDB from '../config/db.js';
import path from 'path';
import cookieParser from 'cookie-parser';



// Fix: Set views path properly relative to project root
const app = express();


// Set up Handlebars
app.engine('hbs', handlebars.engine({ extname: 'hbs', runtimeOptions: { allowProtoPropertiesByDefault: true } }));
app.set('view engine', 'hbs');

// Correct the views path to point to src/views
app.set('views', path.join(process.cwd(), 'src', 'views'));  // Use process.cwd() for project root

app.use(cookieParser()); // Add cookie-parser middleware

// Middleware for authentication check (before routes)
app.use(checkAuthentication);  // Ensure this is before the routes so the auth state is available in templates

// Body parser middleware
app.use(express.urlencoded({ extended: false }));

// Serve static files (e.g., CSS, images, JS) from the 'public' directory
app.use(express.static(path.join(process.cwd(), 'public')));


// Your route handlers
app.use(routes);  // Routes should come after middleware

// Connect with MongoDB
connectDB();

const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => console.log(`Server listens on port: ${PORT}`));
