const express = require("express")
const dotenv = require("dotenv")

dotenv.config()

app = express()

app.use(express.json())

app.get("/", (req, res) => {
  res.send("You are in root directory")
})

app.listen(process.env.PORT)
