import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../src/styles/_normalize.scss';
import firebase from 'firebase/compat';


const firebaseConfig = {
    apiKey: "AIzaSyBQJ3TI1oDGirnm3U8cro_02QLtPy75FrU",
    authDomain: "dodo-fbabe.firebaseapp.com",
    databaseURL: "https://dodo-fbabe-default-rtdb.firebaseio.com",
    projectId: "dodo-fbabe",
    storageBucket: "dodo-fbabe.appspot.com",
    messagingSenderId: "935080220377",
    appId: "1:935080220377:web:0b38a4fc8b98b4142290c8"
}

firebase.initializeApp(firebaseConfig)
ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);


