import jwt from 'jsonwebtoken';

const COOKIE_SECRET = 'your_secret_key_here'; // Same as above

function checkAuthentication(req, res, next) {
  const token = req.cookies.authToken;

  if (token) {
    try {
      // Verify the token
      const decoded = jwt.verify(token, COOKIE_SECRET);
      req.isAuthenticated = true;
      req.user = decoded; // Attach user info to the request
      res.locals.isAuthenticated = true;
    } catch (err) {
      console.error('Invalid token:', err.message);
      req.isAuthenticated = false;
      res.locals.isAuthenticated = false;
    }
  } else {
    req.isAuthenticated = false;
    res.locals.isAuthenticated = false;
  }

  next();
}

export default checkAuthentication;
