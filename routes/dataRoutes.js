const { createData, getData, updateData, deleteData } = require('../controller/dataController');
const { auth } = require('../middleware/auth');

const router = require('express').Router()

router.post('/data',auth ,createData);
router.get('/data/:id', getData);
router.patch('/data/:id', updateData)
router.delete('/data/:id', deleteData)

module.exports = router