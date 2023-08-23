const {
  uploadFile,
  deleteFile,
  downloadFile,
} = require("../controller/storageController");
const { auth } = require("../middleware/auth");

const router = require("express").Router();
const upload = require("../middleware/uploader");

router.post("/upload", upload.single("file"), auth, uploadFile);
router.get("/download/:filename", auth, downloadFile);
router.delete("/delete/:filename", auth, deleteFile);

module.exports = router;
