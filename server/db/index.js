const mongoose = require('mongoose');
const db = mongoose.connect("mongodb://localhost:27017/vue-admin", { useNewUrlParser: true }, (err) => {
  if (err){
    console.error(err)
  }else {
    console.log("Connection success!")
  }
})



const Schema = mongoose.Schema; 

// 用户
let userSchema = new Schema({
  user_name: String,
  user_pwd: String,
  token: {
    type: String,
    default: ""
  }
})

exports.User = mongoose.model('User', userSchema); 
