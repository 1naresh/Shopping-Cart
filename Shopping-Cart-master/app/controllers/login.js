

function loginCtrl($scope,$state,userService,$localStorage){
    $scope.err=false
    $scope.login=function(uname,upwd){
        if(uname == undefined || upwd == undefined){
            $scope.err=true
        }else{
            $scope.err=false
            userService.loginUser(uname,upwd)
            .then((response)=>{
                console.log(response.data)
                $localStorage.token=response.data
            })
            $state.go('cart')
        }
        
    }
}
loginCtrl.$inject=['$scope','$state','userService','$localStorage']
export default loginCtrl;