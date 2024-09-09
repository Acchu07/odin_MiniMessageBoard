const {createNewJokes} = require('../data/messages')

function createNewMessage(req,res){
    res.render('jokeForm')
}

async function postNewMessage(req,res){
    await createNewJokes(req.body)
    res.redirect('/')
}


module.exports = {createNewMessage, postNewMessage}