import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


export const provider = new GoogleAuthProvider()

const firebaseConfig = {
    apiKey: "AIzaSyBf4OE9QAW43u0_zdGst7yBcllUrV3WbsA",
  authDomain: "auth-jvstore.firebaseapp.com",
  projectId: "auth-jvstore",
  storageBucket: "auth-jvstore.firebasestorage.app",
  messagingSenderId: "830940760430",
  appId: "1:830940760430:web:202647a1afe9cac126597f",
  measurementId: "G-4GY9EDJQFM"
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

export const loginUser = () => { 
    signInWithPopup(auth, provider).then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result)
    const token = credential.accessToken
    const user = result.user
    setUserInfo(user)
}).catch((err) => {
        const errorCode = err.code
        const errorMessage = err.message
        const email = err.customData.email
        const credential = err.customData.credentialFromError(err)
    })
}

export const user = auth.currentUser
console.log(user)

//para cada pagina que precisa de informações de login
const userLogado = () => { 
    onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});
}

export const logout = () => {
    signOut(auth).then(() => {
        console.log('deslogado')
    })
    signInWithPopup(auth, provider)
}