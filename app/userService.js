
function userService($http,$q){
    this.loginUser=function(uname,upwd){
        console.log(uname,upwd)
    }
    this.addItem=function(item,price){
        console.log(item,price)
    }
}
userService.$inject=['$http','$q'];
export default userService;