const { sendMessaging } = require('../controller/fcmController')

const router = require('express').Router()

router.post('/send-notification', sendMessaging)

module.exports=router