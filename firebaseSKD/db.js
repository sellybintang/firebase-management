// const firebase1 = require ('firebase')
const firebase = require ('firebase/app')
const firebaseAuth = require('firebase/auth')
require('firebase/auth')
const firestore = require ('firebase/firestore')
const firebaseConf = require('../firebaseConfig.json')


// const firebaseConfig ={
//     apiKEY : 'API_KEY',
//     authDomain:'AUTH_DOMAIN',
//     projectId: 'PROJECT_ID',
//     storageBucket:'STORAGE_BUCKET',
//     messagingSenderId: 'MESSAGING_SENDER_ID',
//     appId: 'APP_ID',
//     measurementId : 'firebaseConfig.json'

// }

const app = firebase.initializeApp(firebaseConf);
const getAuth = firebaseAuth.getAuth(app)
const db = firestore;
// const auth = firebase.auth();
module.exports = {db, getAuth}
