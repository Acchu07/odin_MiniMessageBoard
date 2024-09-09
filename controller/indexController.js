const {getAllJokesFromDB} = require('../data/messages')
const { format } = require('date-fns');

async function functionIndexPage(req,res){
    const arrayOfJokes = await getAllJokesFromDB();
    arrayOfJokes.forEach((Joke)=>{
        Joke[3] = format(Joke[3], "MMMM yyyy - d eeee")
    })
    res.render('index',{arrayOfJokes})
}

module.exports = {functionIndexPage}