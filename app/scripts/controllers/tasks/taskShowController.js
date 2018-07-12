'use strict';
/**
 * @ngdoc function
 * Controller of the centralApp
 */
angular
  .module('centralApp')
  .controller('TaskShowCtrl', ['$scope','$state','$stateParams','moment','toastr', '$localStorage', function ($scope,$state, $stateParams,moment,toastr,$localStorage) {
    
    $localStorage.tasks.forEach(function(task){
      if(task.id == $stateParams.id){
        return $scope.task = task
      }
    })
  }]);