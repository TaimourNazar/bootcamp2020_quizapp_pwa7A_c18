importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js')

firebase.initializeApp({
    apiKey: "AIzaSyAD70J1ROmGk8ENxWm78CF9BvOQ11sdh7Y",
    authDomain: "quiz-app-msg.firebaseapp.com",
    databaseURL: "https://quiz-app-msg.firebaseio.com",
    projectId: "quiz-app-msg",
    storageBucket: "quiz-app-msg.appspot.com",
    messagingSenderId: "666469538505",
    appId: "1:666469538505:web:17c14bc0c5c41053354b18"
})

firebase.messaging();