// Import register
const { db, getAuth } = require("../firebaseSKD/dbAdmin");
const { signInWithEmailAndPassword, signOut } = require("firebase/auth");
const { doc, setDoc, getDoc } = require("firebase/firestore");
const admin = require("firebase-admin");
// import login
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { email, password, nama, address, no_telp } = req.body;

    const userCredential = await getAuth.createUser({ email, password });

    const user = userCredential.uid;
    console.log(user.uid);
    const usersCollection = await db.collection("Users").doc(user);

    await usersCollection.set({
      nama,
      address,
      no_telp,
    });

    console.log(usersCollection);
    res.status(200).json({
      status: "Succes",
      message: "Succesfully to register",
      data: {
        email,
        password,
        nama,
        address,
        no_telp,
        userCredential,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "Error",
      message: err.message,
    });
  }
};

// exports.register = async(req, res)=>{
//     try{
//         const {email, password, nama, address, no_telp} = req.body

//         const userCredential = await createUserWithEmailAndPassword(getAuth, email, password);

//         const user = userCredential.user;
//         console.log(user.uid)
//         const usersCollection =doc(db,'Users', user.uid)

//         await setDoc(usersCollection,{
//             nama,
//             address,
//             no_telp,
//         });
//         console.log(usersCollection)
//         res.status(200).json({
//             status:'Succes',
//             message:'Succesfully to register',
//             data:{
//                 email,
//                 password,
//                 nama,
//                 address,
//                 no_telp,
//                 userCredential

//             }
//         })

//     }catch(err){
//         res.status(500).json({
//             status:'Error',
//             message: err.message
//         })
//     }
// }

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    const userCredential = await admin.auth().getUserByEmail(email);
    // const userCredential = await signInWithEmailAndPassword(email, password)

    // console.log(password)
    if (!userCredential) {
      return res.status(401).json({
        status: "Unauthorized",
        message: "User not found",
      });
    }

    if (password !== userCredential.password) {
      return res.status(401).json({
        status: "Failed",
        message: "Invalid Password",
      });
    }
    const tokenPayload = {
      uid: userCredential.uid,
      email: userCredential.email,
    };

    const token = jwt.sign(tokenPayload, "secret");

    // const token = await admin.auth().createCustomToken(userCredential.uid)

    // const user =  userCredential.user
    res.status(200).json({
      status: "Succes",
      message: "Succesfully to login",
      data: {
        data: userCredential.uid,
        token: token,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

// exports.login = async(req, res, next)=>{
//     try{
//         const {email, password}= req.body

//         const userCredential = await signInWithEmailAndPassword(email, password)

//         if(userCredential &&  userCredential.user){
//             next()
//         }

//         // JWT
//         const tokenPayload= {
//             uid: user.uid,
//             email:user.email
//         }

//         const token = jwt.sign(tokenPayload, 'rahasia')
//         const user =  userCredential.user
//         res.status(200).json({
//             status: 'Succes',
//             message:'Succesfully to login', data:{
//                 data:user.uid,
//                 token
//             }
//         })

//     }catch(err){
//         res.status(500).json({
//             status:'Failed',
//             message:err.message
//         })
//     }
// }

exports.logout = async (req, res) => {
  try {
    const idToken = req.params.idToken;
    const logout = await admin.auth().revokeRefreshTokens(idToken);

    res.status(200).json({
      status: "Succes",
      message: "Succesfully to logout",
      logout,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};
