const express = require('express')
const router = express.Router()
const {createNewMessage,postNewMessage} = require('../controller/newController')

router.get('/',createNewMessage)

router.post('/',postNewMessage)

module.exports = router