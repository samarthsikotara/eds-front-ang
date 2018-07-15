'use strict';
/**
 * @ngdoc function
 * Controller of the centralApp
 */
angular
  .module('centralApp')
  .controller('ProjectCtrl', ['$scope','$state','$stateParams','toastr', 'ENV', 'EnumService', function ($scope,$state, $stateParams,toastr,ENV, EnumService) {
    
    var promise = EnumService.get_api(ENV.api_url+'/dashboard/projects');
    promise.then(
      function(res) {
        return $scope.projects = res.data.projects;
      },
      function(err) {
        console.log(err);
        $scope.failed = true;
        $scope.error = "An error has occured while adding! -- " + err.data.message;                
      }
    )

  }]);