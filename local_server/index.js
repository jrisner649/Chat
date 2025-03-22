const app = require('express')()
const PORT = 8080

app.get('/register', (req, res) => {
    res.status(200).send({
        session_id: '1'
    })
})

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)