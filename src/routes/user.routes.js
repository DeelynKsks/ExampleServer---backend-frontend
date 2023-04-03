const router = require('express').Router()

const {showUser} = require('../controllers/user.controllers')

router.post('/datos', showUser)

module.exports = router