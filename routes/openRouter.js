const express = require('express')
const router = express.Router()
const openMentionedMessage = require('../controller/openController')

router.post('/',openMentionedMessage)

module.exports = router