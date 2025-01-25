import { auth } from "../../config/firebase.js"; // Assuming your firebase configuration is correct

function checkAuthentication(req, res, next) {
  const user = auth.currentUser;  // This will give you the current logged-in user synchronously

  if (user) {
    req.isAuthenticated = true; // Set authenticated status on the request object
    req.userId = user.uid
  } else {
    req.isAuthenticated = false;
  }

  res.locals.isAuthenticated = req.isAuthenticated; // Make it available to all templates

  next(); // Proceed to the next middleware or route handler
}

export default checkAuthentication;
