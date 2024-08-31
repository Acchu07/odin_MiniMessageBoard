const { format } = require('date-fns');

class Jokes{
    static counter = 0
    constructor(textJoke, submittedUser){
        this.textJoke = textJoke
        this.submittedUser = submittedUser
        this.datePostedPrecise = new Date()
        this.datePosted = format(this.datePostedPrecise, "MMMM yyyy - d eeee")
        this.uniqueID = Jokes.counter++
    }
}

const arrayJokes = []

const firstJoke = new Jokes(`Parallel lines have so much in common. It’s a shame they’ll never meet.`,'Lena Foster');
const secondJoke = new Jokes(`Why did the scarecrow win an award? Because he was outstanding in his field!`, `Melaine Coaster`)

arrayJokes.push(firstJoke,secondJoke)

function createNewJokes(jokeFormObject){
    arrayJokes.push(new Jokes(jokeFormObject.submittedJoke,jokeFormObject.userName))
}

module.exports = {arrayJokes,createNewJokes};