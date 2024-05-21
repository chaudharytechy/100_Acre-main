
const mongoose = require('mongoose');
const dotenv = require('dotenv').config()

const connectDb=()=>{

  //  return mongoose.connect(proc?ess.env.DB_URL)

  // return mongoose.connect("mongodb+srv://web100acress:A?mit100@cluster0.lcaufzm.mongodb.net/")


    // return mongoose.connect("mongodb+srv://Amit:Amit123@cluster0.7jljtxl.mongodb.net/")
  return mongoose.connect("mongodb+srv://amit8601396382:Amit12345@cluster0.q3gm7jt.mongodb.net/Housepick?retryWrites=true&w=majority")
  .then(() =>{
    console.log('Connected!')
  })
  .catch((error)=>{
    console.log(error)
  });
}

module.exports=connectDb