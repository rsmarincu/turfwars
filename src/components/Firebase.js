import firebase from 'firebase/app'
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDqEimUUp47L6JH7sJBamq5Zt_-JyNvDVc",
    authDomain: "turfwars-690f6.firebaseapp.com",
    projectId: "turfwars-690f6",
    storageBucket: "turfwars-690f6.appspot.com",
    messagingSenderId: "935546258539",
    appId: "1:935546258539:web:1f95de8c7c58f32bd69d2e",
    measurementId: "G-83CYT6DY9F"
};

const fire = firebase.initializeApp(config)
const auth = firebase.auth()

const getUserStatus = () => {
    return new Promise((resolve, reject) => {
        fire.auth().onAuthStateChanged(function(user) {
            if (user) {
                resolve(user.uid);
            } else {
                reject(Error("Cannot resolve user!"))
            }
        })
    })
}

export { getUserStatus, fire, auth };