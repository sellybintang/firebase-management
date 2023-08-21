const { storage } = require("firebase-admin");
const { bucket } = require("../firebaseSKD/dbAdmin");

// uploadFile

exports.uploadFile = async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(401).json({
        status: "Failed",
        message: "Data is not exist",
      });
    }

    const fileName = Date.now() + "_" + file.originalname;
    const fileUpload = await bucket.file(fileName).save(file.buffer);

    res.status(200).json({
      status: "Succes",
      message: "Succesfully uploaded poto in firebase storage",
      fileUpload,
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err.message,
    });
  }
};

exports.downloadFile = async (req, res) => {
  try {
    const filename = req.params.filename;

    if (!filename) {
      return res.status({
        status: "Failed",
        message: "your filename must be spesific",
      });
    }

    const file = await bucket.file(filename);

    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);
    // get url from firebaseStorage
    const [url] = await file.getSignedUrl({
      action: "read",
      expires,
    });

    // const namaFile = "library/" + filename;
    // const file = bucket.file(namaFile);

    // const downloadNewFile = file.download({
    //   destination: destination,
    // });

    res.status(200).json({
      status: "Succes",
      message: "Succesfully to download file",
      url,
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err.message,
    });
  }
};

// exports.downloadFile = async (req, res) => {
//   try {
//     const filename = req.params.filename;

//     const namaFile = "library/" + filename;
//     const file = bucket.file(namaFile);

//     const downloadNewFile = file.download({
//       destination: destination,
//     });

//     res.status(200).json({
//       status: "Succes",
//       message: "Succesfully to download file",
//       downloadNewFile,
//     });
//   } catch (err) {
//     res.status(500).json({
//       status: "failed",
//       message: err.message,
//     });
//   }
// };

// DeleteFile

exports.deleteFile = async (req, res) => {
  try {
    const filename = req.params.filename;

    const deleteFile = await bucket.file(filename).delete();

    res.status(200).json({
      status: "Succes",
      message: "Succesfully to delete file",
      deleteFile,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};
