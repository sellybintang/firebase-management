const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = async (req, res, next) => {
  // req is an object

  // Client will headers called authorization which contains JWT
  try {
    console.log(req.headers.authorization);
    const bearerToken = req.headers.authorization;
    if (!bearerToken) {
      return res.status(401).json({
        status: "fail",
        message: "Required authorization",
      });
    }

    const token = bearerToken.split(" ")[1];

    const payload = await jwt.verify(token, process.env.JWT_SECRET);

    next();

    // Lanjutkan ke middleware berikutnya atau rute jika verifikasi sukses
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};
