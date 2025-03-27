const express = require('express')
const app = express()
app.use(express.json())
const PORT = 8080


// database function imports
const db = require('./db')

// const { test } = require('./db');
// const { usernameTaken } = require('./db')
// const { createUser } = require('./db')

async function runUsernameTaken(username) {
    return await db.usernameTaken(username);
}

async function runCreateUser(username) {
    await db.createUser(username)
}


// req will be JSON obj
app.post('/register', (req, res) => {
    console.log(req.body)

    // send back an error code to the client if the username is already in the database
    runUsernameTaken(req.body.username)
    .then(notTaken => {
        if (notTaken) {
            console.log('Username is NOT taken')
        }
        else {
            console.log('Username is taken')
        }
    })

    // if (!runUsernameTaken(req.body.username).then()) {
    //     res.status(409).send('Username already in use')
    // }
    // else, the username is valid
    // else {
    //     console.log('Username is not taken, inserting into database...')
    //     // create a new record in our user database
    //     runCreateUser(req.body.username)
    //     // send back confirmation to the client
    //     res.status(200).send('Account successfully created!')
    // }
    
})

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)