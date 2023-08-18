const router = require('express').Router()
const authRouter = require ('./authRoutes')


router.use('/api', authRouter)


module.exports = router