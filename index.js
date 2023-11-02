require('dotenv').config()

const express = require('express')
const app = express()
const PORT = 5005
const dbConneter = require('./db')


app.use("/", require("./routes/Products"))


app.get('/ss', (req,res)=> {
    res.send("hey this is sachin")
})



const startApi = async()=> {
    try{
        app.listen(PORT, ()=> console.log(`api is running on http://localhost:${PORT}`))
        await dbConneter(process.env.MONGODB_URL)
    }
    catch (error){
        console.log(error)
    }
}
startApi()