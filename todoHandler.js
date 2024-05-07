const express = require("express");
const mongoose = require('mongoose')
const router = express.Router();
const todoSchema = require('./schema')
const Todo = new mongoose.model("Todo",todoSchema);

//get all todos

router.get("/", async (req, res) => {});
//get single todo by id
router.get("/:id", async (req, res) => {});

// post todo
router.post("/", async (req, res) => {

    const newTodo = new Todo(req.body)
    await newTodo.save((err)=>{
        if(err){
            res.status(500).json({
                err:"there was an error from server"
            })
        }else {
            res.status(200).json({
                message: "todo was inserted succesfully"
            })
        }
    })

});
//post multiple  todo
router.post("/all", async (req, res) => {});
// put todo

router.put("/:id", async (req, res) => {});
// delete todo
router.delete("/:id", async (req, res) => {});


module.exports = router;