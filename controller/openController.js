const {arrayJokes} = require('../data/messages')

function openMentionedMessage(req,res){
    res.render('open',{Joke:arrayJokes[req.body.locationID]})
}


module.exports = openMentionedMessage