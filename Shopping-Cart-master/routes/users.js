var express=require('express')
var mongoose=require('mongoose')
// var request =require("request");
var jwt = require('jsonwebtoken');
var user=require('../models/user')
var router =express.Router()

router.post('/save',function(req,res){
    user.create(req.body,function(err,post){
        if(err){
            console.log(err)
        }
        var token = jwt.sign({ id:post._id }, 'shhhhh');
        res.send(token)
    })
})



router.put('/update',function(req,res){
    user.findByIdAndUpdate(req.body.id,req.body,function(err,data){
        if(err){
            console.log(err)
        }
        res.send("success")
    })
})
module.exports=router; 