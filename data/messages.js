class Jokes{
    constructor(textJoke, submittedUser){
        this.textJoke = textJoke
        this.submittedUser = submittedUser
        this.datePosted = new Date().toString()
    }
}

const arrayJokes = []

const firstJoke = new Jokes(`Parallel lines have so much in common. It’s a shame they’ll never meet.`,'Lena Foster');
const secondJoke = new Jokes(`Why did the scarecrow win an award? Because he was outstanding in his field!`, `Melaine Coaster`)

arrayJokes.push(firstJoke,secondJoke)


module.exports = arrayJokes;