const {createNewJokes} = require('../data/messages')

function createNewMessage(req,res){
    res.render('jokeForm')
}

function postNewMessage(req,res){
    createNewJokes(req.body)
    res.redirect('/')
}


module.exports = {createNewMessage, postNewMessage}