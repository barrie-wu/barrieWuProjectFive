import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBY9tTwjFtiUeXJmPLBEZa2wuGIXPjLqPM",
    authDomain: "fashioninspo-31d0e.firebaseapp.com",
    databaseURL: "https://fashioninspo-31d0e.firebaseio.com",
    projectId: "fashioninspo-31d0e",
    storageBucket: "fashioninspo-31d0e.appspot.com",
    messagingSenderId: "12313632502",
    appId: "1:12313632502:web:5578f844f5b502016216d7"
};

firebase.initializeApp(firebaseConfig);

export default firebase;