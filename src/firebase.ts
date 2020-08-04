import firebase from 'firebase';

const config={
    apiKey: "AIzaSyAD70J1ROmGk8ENxWm78CF9BvOQ11sdh7Y",
    authDomain: "quiz-app-msg.firebaseapp.com",
    databaseURL: "https://quiz-app-msg.firebaseio.com",
    projectId: "quiz-app-msg",
    storageBucket: "quiz-app-msg.appspot.com",
    messagingSenderId: "666469538505",
    appId: "1:666469538505:web:17c14bc0c5c41053354b18"
}

firebase.initializeApp(config);

export default firebase;