'use strict';
/**
 * @ngdoc function
 * Controller of the centralApp
 */
angular
  .module('centralApp')
  .controller('TaskNewCtrl', ['$scope','$state','$stateParams','toastr', '$localStorage', function ($scope,$state, $stateParams,toastr,$localStorage) {
    
    $scope.save = function(task) {
      var taskId = Math.floor(Math.random() * 20000)
      task.id = taskId
      task.createdAt = new Date()
      $localStorage.tasks.push(task)
      $state.go('dashboard.tasks', {}, { reload: true });
      toastr.success('New Task Created')
    }
  }]);