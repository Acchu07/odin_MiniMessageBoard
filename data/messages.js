const { format } = require('date-fns');
const poolUser = require("./pool");
const pool = require('./pool');

async function createNewJokes(jokeFormObject){
    const queryObject = {
        text: `INSERT INTO jokes (JokeAuthor, TheJoke, Date) VALUES($1, $2, $3)`,
        values: [jokeFormObject.userName,jokeFormObject.submittedJoke, new Date()]
    }
    await poolUser.query(queryObject)
}

async function getAllJokesFromDB(){
    const queryObject = {
        text:'SELECT * FROM jokes',
        rowMode: 'array'
    }
    try {
        const {rows} = await poolUser.query(queryObject);
        return rows;
    } catch (error) {
        console.log(error)
    }
}

async function getJokeByIDFromDB(jokeID){
    const queryObject = {
        text:'SELECT * FROM jokes WHERE ID = $1',
        values: [jokeID],
        rowMode: 'array'
    }
    try {
        const {rows} = await pool.query(queryObject);
        return rows;    
    } catch (error) {
        console.log(error)
    }
}

module.exports = {getAllJokesFromDB,createNewJokes,getJokeByIDFromDB};