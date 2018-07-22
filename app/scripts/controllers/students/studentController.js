'use strict';
/**
 * @ngdoc function
 * Controller of the centralApp
 */
angular
  .module('centralApp')
  .controller('StudentCtrl', ['$scope','$state','$stateParams','toastr', 'ENV', 'EnumService', function ($scope,$state, $stateParams,toastr,ENV, EnumService) {
    
    $scope.showAll = function(keyword){
      var promise = EnumService.get_api(ENV.api_url+'/api/students', false, {}, {keyword: keyword});
      promise.then(
        function(res) {
          return $scope.students = res.data.students;
        },
        function(err) {
          console.log(err);
          $scope.failed = true;
          $scope.error = "An error has occured while adding! -- " + err.data.message;                
        }
      )
    }

    $scope.showAll("")

    $scope.search = function(keyword){
      $scope.showAll(keyword)
    }

  }]);