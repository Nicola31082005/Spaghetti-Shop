import { Router } from 'express';
import cookieParser from 'cookie-parser';
import { login, logout, register, validateRegistration } from '../services/authService.js';

const COOKIE_SECRET = 'your_secret_key_here'; // Ensure this matches the one in authService.js
const authController = Router();

authController.use(cookieParser());

// GET login page
authController.get('/login', (req, res) => {
  res.render('verificationViews/login', { title: 'Login Page', layout: 'auth' });
});

// GET register page
authController.get('/register', (req, res) => {
  res.render('verificationViews/register', { title: 'Register Page', layout: 'auth' });
});

// POST register (create user)
authController.post('/register', async (req, res) => {
  const data = req.body;

  const validation = validateRegistration({
    password: data.password,
    confirmPassword: data['confirm-password'],
  });

  if (!validation.success) {
    return res.status(400).render('verificationViews/register', { title: 'Register Page', layout: 'auth', error: validation.message });
  }

  try {
    const userCredential = await register({ email: data.email, password: data.password });

    if (userCredential) {
      res.redirect('/login');
    }
  } catch (err) {
    console.error(err.message);
    res.status(400).render('verificationViews/register', { title: 'Register Page', layout: 'auth', error: err.message });
  }
});

// POST login (authenticate user)
authController.post('/login', async (req, res) => {
  const data = req.body;

  try {
    const { token } = await login({ email: data.email, password: data.password });

    // Set a secure, HTTP-only cookie with the token
    res.cookie('authToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
      maxAge: 3600000, // 1 hour
    });

    res.redirect('/');
  } catch (err) {
    console.error(err.message);
    res.status(400).render('verificationViews/login', { title: 'Login Page', layout: 'auth', error: err.message });
  }
});

// GET logout (clear cookies and session)
authController.get('/logout', async (req, res) => {
  try {
    await logout();

    // Clear the auth cookie
    res.clearCookie('authToken');
    res.redirect('/');
  } catch (err) {
    console.error('Logout Error', err);
    res.status(500).send('An error occurred during logout.');
  }
});

export default authController;
