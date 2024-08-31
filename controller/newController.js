function createNewMessage(req,res){
    res.render('jokeForm')
}

function postNewMessage(req,res){
    console.log('Post Message Entered')
}


module.exports = {createNewMessage, postNewMessage}