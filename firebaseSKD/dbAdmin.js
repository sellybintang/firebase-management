



// const firebaseAuth = require('firebase/auth')


// const {getFirestore} = require ('firebase/firestore')

// const {getStorage}= require('firebase/storage');
const admin = require ('firebase-admin')
const firebaseConf = require("../firebaseConfig.json")
// var serviceAccount = require("path/to/serviceAccountKey.json")

admin.initializeApp({
    credential:admin.credential.cert(firebaseConf),
    storageBucket:"gs://causal-calculus-371108.appspot.com"
});

const getAuth = admin.auth()
const db = admin.firestore();
const storage = admin.storage()
const bucket = storage.bucket()

const fcm = admin.messaging()
module.exports = {db, getAuth , fcm}
module.exports={bucket}
// const app = admin.initializeApp(firebaseConf);

// const db = getFirestore(app);
// const storage = getStorage(app)








// const firebaseConfig ={
//     apiKEY : 'API_KEY',
//     authDomain:'AUTH_DOMAIN',
//     projectId: 'PROJECT_ID',
//     storageBucket:'STORAGE_BUCKET',
//     messagingSenderId: 'MESSAGING_SENDER_ID',
//     appId: 'APP_ID',
//     measurementId : 'firebaseConfig.json'

// }