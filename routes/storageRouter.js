const {
  uploadFile,
  deleteFile,
  downloadFile,
} = require("../controller/storageController");

const router = require("express").Router();
const upload = require("../middleware/uploader");

router.post("/upload", upload.single("file"), uploadFile);
router.get("/download/:filename", downloadFile);
router.delete("/delete/:filename", deleteFile);

module.exports = router;
