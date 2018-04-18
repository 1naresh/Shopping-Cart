
function checkOutCtrl($scope,userService,$state){
    $scope.edit=true
    $scope.item=userService.addedItems()[$state.params.index]
    $scope.edit=function(){
        console.log('ed')
        $state.go('edit',{index:$state.params.index})
    }
}
checkOutCtrl.$inject=['$scope','userService','$state'];
export default checkOutCtrl;