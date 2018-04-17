

function loginCtrl($scope,$state,userService){
    $scope.err=false
    $scope.login=function(uname,upwd){
        if(uname == undefined || upwd == undefined){
            $scope.err=true
        }else{
            $scope.err=false
            userService.loginUser(uname,upwd)
            $state.go('cart')
        }
        
    }
}
loginCtrl.$inject=['$scope','$state','userService']
export default loginCtrl;