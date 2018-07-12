'use strict';
/**
 * @ngdoc function
 * Controller of the centralApp
 */
angular
  .module('centralApp')
  .controller('TaskCtrl', ['$scope','$state','$stateParams','toastr', '$localStorage', function ($scope,$state, $stateParams,toastr,$localStorage) {
    
    if(!$localStorage.tasks){
      $localStorage.tasks = []   
    }
    $scope.tasks = $localStorage.tasks 
    
    if($stateParams.id && $stateParams.delete){
      $localStorage.tasks.forEach(function(task){
        if(task.id == $stateParams.id){
          var taskObjectIndex = $localStorage.tasks.indexOf(task)
          $localStorage.tasks.splice(taskObjectIndex, 1)
          toastr.success('Task Deleted')
          $state.go('dashboard.tasks', {}, { reload: true });
        }
      })
    }

  }]);