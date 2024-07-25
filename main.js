const express = require("express")
const dotenv = require("dotenv")

dotenv.config()

app = express()

app.use(express.json())

app.get("/", (req, res) => {
  res.send("You are in root directory")
})

app.get("/aboutus" ,(req,res)=>{
  res.json({
    msg : "helloo",
  })
})

app.listen(process.env.PORT, (req, res)=>{
   console.log(`listening port ${process.env.PORT}`);
})
