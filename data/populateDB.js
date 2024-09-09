#! /usr/bin/env node

require('dotenv').config()
const { Client } = require("pg");


const SQL = `
CREATE TABLE IF NOT EXISTS jokes(
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
JokeAuthor CHARACTER(255),
TheJoke TEXT,
Date DATE
);

INSERT INTO jokes (JokeAuthor, TheJoke, Date)
VALUES
('Lena Foster','Parallel lines have so much in common. It’s a shame they’ll never meet.','2024-08-09'),
('Melaine Coaster','Why did the scarecrow win an award? Because he was outstanding in his field!','2024-08-09');
`

async function runScriptPopulateDatabase(){
    const singleUser = new Client({
        connectionString: process.env.DATABASE_URL || process.env.connectionString
    })
    
    try {
        await singleUser.connect();
        console.log('Connected')
        await singleUser.query(SQL)
        console.log('Populated DB')
        await singleUser.end();
        console.log('Disconnected')
        
    } catch (error) {
        console.log('Error From the PopulateDB.js', error)
    }
}

runScriptPopulateDatabase()