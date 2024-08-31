const {arrayJokes} = require('../data/messages')

function functionIndexPage(req,res){
    res.render('index',{arrayOfJokes:arrayJokes})
}

module.exports = {functionIndexPage}