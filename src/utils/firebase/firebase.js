import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC4qzU2d32P8NRMrkceVXAZoiMbutuIr8M",
    authDomain: "url-shortener-817ab.firebaseapp.com",
    projectId: "url-shortener-817ab",
    storageBucket: "url-shortener-817ab.appspot.com",
    messagingSenderId: "52854550438",
    appId: "1:52854550438:web:82e313bcb43b7f184c6967",
    measurementId: "G-G0J55FYL52"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();