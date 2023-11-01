const mongoose = require("mongoose")

const url = "mongodb://127.0.0.1:27017/myAPI"
const dbConneter = async ()=>{
    console.log("connected to mongodb")
    await mongoose.connect(url)
}

module.exports = dbConneter