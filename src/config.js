import Firebase from 'firebase';
let config = {
    apiKey: "AIzaSyDZNbqAeLMLLQIqyg_qJZdLn2ZBIb_UFMA",
    authDomain: "fnp2020-9f5c4.firebaseapp.com",
    databaseURL: "https://fnp2020-9f5c4.firebaseio.com",
    projectId: "fnp2020-9f5c4",
    storageBucket: "fnp2020-9f5c4.appspot.com",
    messagingSenderId: "173083687191",
    appId: "1:173083687191:web:83eb458cf39c1b415f1f52",
    measurementId: "G-3KYD7VKC4P"
};
let app = Firebase.initializeApp(config);
export const db = app.database();