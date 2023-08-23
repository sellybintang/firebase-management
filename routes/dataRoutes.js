const {
  createData,
  getData,
  updateData,
  deleteData,
} = require("../controller/dataController");
const { auth } = require("../middleware/auth");

const router = require("express").Router();

router.post("/data", auth, createData);
router.get("/data/:id", auth, getData);
router.patch("/data/:id", auth, updateData);
router.delete("/data/:id", auth, deleteData);

module.exports = router;
