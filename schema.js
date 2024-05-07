
const mongoose = require('mongoose')


const todoSchema = mongoose.Schema({
titile:{
    type:String,
    required:true,
},
description:String,
status:{
    type:String,
    enum:['active','inactive'],

},
date:{
    type:date,
    default:Date.now,
}


})


module.exports = todoSchema;