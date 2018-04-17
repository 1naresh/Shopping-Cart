function cartCtrl($scope,userService,$state){
    $scope.err=false
    $scope.addItem=function(item,price){
        if(item == undefined || price == undefined){
            $scope.err=true
        }else{
            userService.addItem(item,price);
            $state.go('checkOut')
        }
    }
}
cartCtrl.$inject=['$scope','userService','$state'];
export default cartCtrl;