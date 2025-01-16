import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase.js'

export function validateRegistration({ password, confirmPassword }) {
    if (password !== confirmPassword) {
        return { success: false, message: "Passwords don't match" }
    }

    if (password.length < 6) {
        return { success: false, message: "Password must be at least 6 character long" }
    }

    return { success: true }
}

export function validatePassword({ email, password }) {
    
    
}

export async function register({ email, password }) {
   try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    return userCredential
   } catch(error) {
    console.error(error.message)
   } 
}


export async function login({ email, password }) {
   try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    return userCredential
    } catch(error) {
        throw new Error(error.message)
    }
}