const express = require('express')
const app = express()
const PORT = 5005
const dbConneter = require('./db')


app.use("/api/products", require("./routes/Products"))


app.get('/', (req,res)=> {
    res.send("hey this is sachin")
})



const startApi = async()=> {
    try{
        app.listen(PORT, ()=> console.log(`api is running on http://localhost:${PORT}`))
        await dbConneter()
    }
    catch (error){
        console.log(error)
    }
}
startApi()