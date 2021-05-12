const app = require('./server')


app.get('/helloworld', async (req,res) => {
    res.send("Je suis la championne mdrrrrrrrrrrrrrrrrrrrrrrrr de Thesa Chess.")
})

app.get("/user/:username", (req,res) => {
    const username = req.params.username
    res.json("bonjour " + username)
})