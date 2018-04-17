var mongoose =require("mongoose");
var schema=new mongoose.Schema({
    uname:String,
    upwd:String,
    items:[
        {
            item:String,
            price:Number,quantity:Number,total:Number}
    ]
})
module.exports=mongoose.model('user',schema)