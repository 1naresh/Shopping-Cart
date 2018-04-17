var express=require('express')
var mongoose=require('mongoose')
// var request =require("request");
var user=require('../models/user')
var router =express.Router()

router.post('/save',function(req,res){
    user.create(req.body,function(err,post){
        if(err){
            console.log(err)
        }
        res.send(post)
    })
})
router.get('/getById/:id', function (req, res, next) {
    user.findById(req.params.id, function (err, data) {
        res.send(data);
    });
});


router.put('/update',function(req,res){
    user.findByIdAndUpdate(req.body.id,req.body,function(err,data){
        if(err){
            console.log(err)
        }
        res.send("success")
    })
})
module.exports=router; 