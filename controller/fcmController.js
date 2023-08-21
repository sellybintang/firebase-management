const { fcm, db } = require("../firebaseSKD/dbAdmin");
const admin = require("firebase-admin");

// Send Notification

exports.sendMessaging = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userRef = db.collection("Users");
    const getUser = await userRef.where(email).where(password).get();

    if (getUser.empty) {
      return res.status(401).json({
        status: "Failed",
        message: "User not exist",
      });
    }

    const userData = getUser.docs[0].data();

    const message = {
      notification: {
        title: "Hi, selamat siang",
        body: "Ada pesanan untukmu",
      },
      token: userData,
    };

    const sendNewMessaging = await admin.messaging().send(message);

    res.status(200).json({
      status: "Succes",
      message: "Succesfully for send the message",
      sendNewMessaging,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

// exports.sendMessaging = async(req, res)=>{
//     try{
//         const {registrationToken, data}=req.body

//         const message = {
//             data,
//             token: registrationToken
//         }

//         const sendNewMessaging = await admin.messaging().send(message);

//         res.status (200).json({
//             status:'Succes',
//             message:'Succesfully for send the message',sendNewMessaging
//         })
//     }catch(err){
//         res.status(500).json({
//             status:'Failed',
//             message: err.message
//         })

//     }
// }

// Custom Notification
