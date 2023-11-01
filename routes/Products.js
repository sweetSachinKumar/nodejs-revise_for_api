const express = require("express")
const router = express.Router()
const Product = require('../models/product')


router.get("/category", async (req,res)=> {
  let allCategory = await Product.find().select("category")
  let categoryArr = []
  for(let ctg of allCategory){
    categoryArr.push(ctg.category)
  }
  
  let myCategory = new Set(categoryArr) 
  let arrCtg = Array.from(myCategory).sort()
  res.json(arrCtg)

})



router.get('/', async (req, res)=> {
  const {title, description, price,sort, category, brand, select, pageNo, limit} = req.query 
  const urlQuery = {}

  if(title){
    urlQuery.title = { $regex: title , $options: 'i' } 
  }

  if(description){
    urlQuery.description = { $regex: description , $options: 'i' } 
  }

  if(price){
    urlQuery.price = price
  }
  if(category){
    urlQuery.category = { $regex: category , $options: 'i' } 

  }
  if(brand){
    urlQuery.brand = { $regex: brand , $options: 'i' } 

  }

  let myData =  Product.find(urlQuery)

  if(sort){
    let sortedValue = sort.replace(",", " ")
    myData = myData.sort(sortedValue)
  }
  if(select){
    let sortedValue = select.replace(",", " ")
    myData = myData.select(sortedValue)
  }

  let page = Number(pageNo) || 1
  let limitOfProduct = Number(limit)  || 3

  let skipProduct = (page - 1)*limitOfProduct






  myData = myData.skip(skipProduct).limit(limitOfProduct)
  


  const allData = await myData
    res.json({allData, totalResults:allData.length, pageNo:page})



})




router.get('/toCheck', async (req, res)=> {
    
  let allDatas = await Product.find({}).skip(1).limit(3)
  res.json({allDatas, size:allDatas.length, pageNo:1})
   
})

module.exports = router;