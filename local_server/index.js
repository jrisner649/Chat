const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
const PORT = 8080


// database function imports
const db = require('./db')


async function runUsernameTaken(username) {
    return await db.usernameTaken(username);
}

async function runCreateUser(username) {
    await db.createUser(username)
}


// req will be JSON obj
app.post('/register', (req, res) => {
    console.log(req.body)

    runUsernameTaken(req.body.username)
    .then(taken => {
        if (taken) {
            console.log('Username is taken')
            // send back an error code to the client if the username is already in the database
            res.status(409).send({message: 'Username is taken'}) 
        }
        else {
            console.log('Username is NOT taken')
            runCreateUser(req.body.username) // since the username is not taken we can create the account
            .then(res.status(200).json({message: 'Account creation successful!'}))
        }
    })

    
})

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)