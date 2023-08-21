const router = require('express').Router()
const authRouter = require ('./authRoutes')
const dataRouter = require ('./dataRoutes')
const storageRouter = require('./storageRouter')
const sendMessaging = require('./fcmRouter')



router.use('/api', authRouter)
router.use('/api', dataRouter)
router.use('/api', storageRouter)
router.use('/api', sendMessaging)

module.exports = router