import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCdbm-xkp15DN6KoWxtI6Bu2g7gqdcXmMc",
    authDomain: "pomodoro-timer-385b6.firebaseapp.com",
    projectId: "pomodoro-timer-385b6",
    storageBucket: "pomodoro-timer-385b6.appspot.com",
    messagingSenderId: "349019897924",
    appId: "1:349019897924:web:a7d3d6206216882bd6bc11",
    measurementId: "G-2VP7EVTD4G"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
