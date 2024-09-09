const {getJokeByIDFromDB} = require('../data/messages')

async function openMentionedMessage(req,res){
    const selectedJoke = await getJokeByIDFromDB(req.body.locationID)
    res.render('open',{Joke:selectedJoke})
}


module.exports = openMentionedMessage