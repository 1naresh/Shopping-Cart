
function userService($http,$q){
    var items=[
        {item:'a',price:1,quantity:1},
        {item:'b',price:2,quantity:1},
        {item:'c',price:3,quantity:1},
    ]
    this.loginUser=function(uname,upwd){
        var defered=$q.defer();
        $http({
            method:'post',
            url:"/users/save",
            data:{uname:uname,upwd}
        })
        .then((data)=> defered.resolve(data),(err)=>defered.reject(err) )
        return defered.promise;
        console.log(uname,upwd)
    }
    this.addItem=function(item,price,quantity,id){
        // var total=quantity * price
        // var item={id:id,name:item,price:price,quantity:quantity,total:total}
        // var defered=$q.defer()
        // $http({
        //     method:'put',
        //     url:'/users/update',
        //     data:item
        // })
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