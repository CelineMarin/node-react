const app = require('./server')


app.get('/helloworld', async (req,res) => {
    console.log("hey stop calling me")
    res.send("Je suis la championne mdrrrrrrrrrrrrrrrrrrrrrrrr de Thesa Chess.")
})

app.get("/user/:username", (req,res) => {
    console.log('cmon ' + req.params.username + ', this route is useless!!!' )
    const username = req.params.username
    res.json("bonjour " + username)
})