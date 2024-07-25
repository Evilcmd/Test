const express = require("express")
const dotenv = require("dotenv")

dotenv.config()

app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("You are in root directory")
})

app.get("/aboutus", (req, res) => {
    res.json({
        msg: "helloo",
    })
})

app.get("/vinayak", (req, res) => {
    res.send("helooo vinayakkk");
})

app.get("/develop", (req, res) => {
    res.json({
        msg: "im developing my git skills",
    })
})


app.get("/design", (req, res) => {
    res.send("Design api")
})



app.get("/tejas", (req, res) => {
    res.send("tejas api")
})


app.listen(process.env.PORT, (req, res) => {
    console.log(`listening port ${process.env.PORT}`);
})
