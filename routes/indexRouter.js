const express = require('express')
const router = express.Router()
const {functionIndexPage} = require('../controller/indexController')

router.get('/',functionIndexPage)

module.exports = router