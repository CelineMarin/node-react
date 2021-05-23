const app = require('./server')


app.get('/helloworld', async (req,res) => {
    console.log("hey stop calling me")
    res.send("This is a text from server")
})

app.get("/user/:username", (req,res) => {
    console.log('cmon ' + req.params.username + ', this route is useless!!!' )
    const username = req.params.username
    res.json("bonjour " + username)
})

app.get("/homepage", (req, res) => {
    res.send("Welcome to my world !")
})

app.get("/goldenbook", (req, res) => {

})