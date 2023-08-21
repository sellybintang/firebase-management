const jwt = require('jsonwebtoken');
const admin = require ('firebase-admin')

exports.auth = async(req, res, next) =>{
    // req is an object

    // Client will headers called authorization which contains JWT
    try {
        console.log(req.headers.authorization);
        const bearerToken = req.headers.authorization;
        if (!bearerToken) {
          return res.status(401).json({
            status: 'fail',
            message: 'Required authorization',
          });
        }
    
        const token = bearerToken.split(' ')[1];
    
        // Verifikasi Firebase ID token
        const decodedToken = await admin.auth().verifyIdToken(token);
        
        const uid =await  decodedToken.uid;
        if (!decodedToken) {
          return res.status(401).json({
            status: 'fail',
            message: 'Invalid authorization token',
          });
        }
    
        // Lanjutkan ke middleware berikutnya atau rute jika verifikasi sukses
        next();

    }catch (err){
        res.status(500).json({
            status: 'fail',
            message: err.message
        })
    }
}

// process.env.JWT_SECRET


// console.log(req.headers.authorization)
// const bearerToken = req.headers.authorization // Basic Authentication -> Bearer Authentication
// const bearer = bearerToken.split(' ');
// const token = bearer[1];
// // check if request header authorization sent or not
// if(!token) {
//     return res.status(401).json({
//         status: 'fail',
//         message: "required authorization"
//     })
// }
// const decodeValue =  admin.auth().verifyIdToken(token);
// if(!decodeValue) {
//     return res.status(401).json({
//         status: 'fail',
//         message: "required authorization"
//     })

// }
// next()
// const payload = jwt.verify(token, "secret" );

// getAuth()
// .verifyIdToken(token)
// .then((decodedToken) => {
// const uid = decodedToken.uid;
// // ...
// })
// .catch((error) => {
// // Handle error
// });
