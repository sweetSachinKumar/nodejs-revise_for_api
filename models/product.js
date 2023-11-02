const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
        
        "title": {
            type:String,
            required:true
        },
        "description": {
            type:String,
            required:true
        },
        "price": {
            type:Number,
            required:true
        },
        "brand": {
            type:String
        },
        "category": {
            type:String,
            required:true
        },
        "thumbnail": {
            type:String,
            required:true
        }

})

module.exports = mongoose.model("allproduct", productSchema)