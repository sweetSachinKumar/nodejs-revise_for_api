const mongoose = require("mongoose")

const dbConneter = async (url)=>{
    console.log("connected to mongodb")
    await mongoose.connect(url)
}

module.exports = dbConneter