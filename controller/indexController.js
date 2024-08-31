const arrayOfJokes = require('../data/messages')

function functionIndexPage(req,res){
    res.render('index',{arrayOfJokes})
}

module.exports = {functionIndexPage}