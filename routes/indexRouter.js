const express = require('express')
const router = express.Router()
const {functionIndexPage,createNewMessage} = require('../controller/indexController')


router.get('/',functionIndexPage)

router.get('/new',createNewMessage)

module.exports = router

