const {collection, doc } = require('firebase/firestore')

const {createUserWithEmailAndPassword}= require ('firebase/auth')
const {db, getAuth} = require ('../firebaseSKD/db')


exports.register = async(req, res)=>{
    try{
        const {email, password, nama, address, no_telp} = req.body

        // const auth = getAuth();
       
        const userCredential = await createUserWithEmailAndPassword(getAuth, email, password);

        const user = userCredential.user;
        console.log(user.uid)

        const usersCollection = db.collection().doc(user.uid)
        await usersCollection.set({
            nama,
            address,
            no_telp,
        });

        res.status(200).json({
            status:'Succes',
            message:'Succesfully to register', usersCollection
        })

    }catch(err){
        res.status(500).json({
            status:'Error',
            message: err.message
        })
    }
}