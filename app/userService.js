
function userService($http,$q){
    var items=[
        {item:'a',price:1,quantity:1},
        {item:'b',price:2,quantity:1},
        {item:'c',price:3,quantity:1},
    ]
    this.loginUser=function(uname,upwd){
        console.log(uname,upwd)
    }
    this.addItem=function(item,price,quantity){
        items.push({item:item,price:price,quantity:quantity})
    }
    this.update=function(index,quantity){
        items[index].quantity=quantity
    }
    this.addedItems=function(){
        return items
    }
}
userService.$inject=['$http','$q'];
export default userService;