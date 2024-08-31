const express = require('express')
const arr = require('../data/messages')
const router = express.Router()

function functionIndexPage(req,res){
    console.log(arr[0])
}

function createNewMessage(req,re){
    console.log(arr[1])
}


module.exports = {functionIndexPage, createNewMessage}