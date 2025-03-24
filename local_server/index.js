const app = require('express')()
const PORT = 8080

// database function imports
const { test } = require('./db');
const { usernameTaken } = require('./db')
const { createUser } = require('./db')

async function runUsernameTaken(username) {
    await usernameTaken(username);
}


// req will be JSON obj
app.post('/register', (req, res) => {
    // send back an error code to the client if the username is already in the database
    if (runUsernameTaken(req.username)) {
        res.status(409).send('Username already in use')
    }
    // else, the username is valid
    else {
        // create a new record in our user database
        createUser(req.username)
        // send back confirmation to the client
        res.status(200).send('Account successfully created!')
    }
    
})

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)