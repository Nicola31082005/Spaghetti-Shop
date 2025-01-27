import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../config/firebase.js';
import jwt from 'jsonwebtoken'; // Use for signed cookies

const COOKIE_SECRET = 'your_secret_key_here'; // Replace with a secure secret key

export function validateRegistration({ password, confirmPassword }) {
  if (password !== confirmPassword) {
    return { success: false, message: "Passwords don't match" };
  }
  if (password.length < 6) {
    return { success: false, message: "Password must be at least 6 characters long" };
  }
  return { success: true };
}

export async function register({ email, password }) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    // Generate JWT token immediately after registration
    const idToken = await userCredential.user.getIdToken();
    const payload = { uid: userCredential.user.uid, email: userCredential.user.email };

    // Sign a token to store in cookies
    const token = jwt.sign(payload, COOKIE_SECRET, { expiresIn: '1h' });

    return { token, userCredential, idToken };
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function login({ email, password }) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    // Generate JWT token
    const idToken = await userCredential.user.getIdToken();
    const payload = { uid: userCredential.user.uid, email: userCredential.user.email };

    // Sign a token to store in cookies
    const token = jwt.sign(payload, COOKIE_SECRET, { expiresIn: '1h' });

    return { token, idToken, userCredential };
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function logout() {
  try {
    await signOut(auth);
  } catch (err) {
    throw new Error(err.message);
  }
}
