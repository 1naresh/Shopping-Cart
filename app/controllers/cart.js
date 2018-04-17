function cartCtrl($scope,userService,$state){
    $scope.items=userService.addedItems()
    $scope.err=false
    $scope.addItem=function(item,price,quantity){
        if(item == undefined || price == undefined || quantity == undefined){
            $scope.err=true
        }else{
            userService.addItem(item,price,quantity);
            $scope.item='';
            $scope.price='';
            $scope.quantity='';
            $scope.items=userService.addedItems()            
        }
    }  
    $scope.checkOut=function(index){
        $state.go('checkOut',{index:index})
    }  
}
cartCtrl.$inject=['$scope','userService','$state'];
export default cartCtrl;