'use strict';
/**
 * @ngdoc function
 * Controller of the centralApp
 */
angular
  .module('centralApp')
  .controller('TaskUpdateCtrl', ['$scope','$state', '$stateParams','toastr', '$localStorage', function ($scope,$state, $stateParams,toastr,$localStorage) {
    
    $localStorage.tasks.forEach(function(task){
      if(task.id == $stateParams.id){
        return $scope.task = task
      }
    })

    $scope.save = function(task) {
      var taskObjectIndex = $localStorage.tasks.indexOf($scope.task)
      if($localStorage.tasks.indexOf($scope.task) > 0){
        $localStorage.tasks[taskObjectIndex].name = task.name
        $localStorage.tasks[taskObjectIndex].description = task.description
      }
      $state.go('dashboard.tasks', {}, { reload: true });
      toastr.success('Task Updated')
    }
    
  }]);