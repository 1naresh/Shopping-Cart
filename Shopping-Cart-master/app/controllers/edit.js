
function editCtrl($scope,userService,$state){
    $scope.item=userService.addedItems()[$state.params.index]
    $scope.save=function(quantity){
        userService.update($state.params.index,quantity)
        $state.go('checkOut',{index:$state.params.index})
    }
}
editCtrl.$inject=['$scope','userService','$state'];
export default editCtrl;