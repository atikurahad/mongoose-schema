const express = require("express");
const mongoose = require("mongoose");

const todoHandler = require("./todoHandler")

//express app initialization
const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost/todos",{
    useNewUrlParser:true,
    useUnifiedTopology:true,

})
.then(()=>{console.log("connected");})
.catch((err)=>{console.log(err);})


//application route 

app.use("/todo",todoHandler)

app.listen(3000, () => {
  console.log("App is listening");
});
