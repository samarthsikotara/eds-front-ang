'use strict';
/**
 * @ngdoc function
 * Controller of the centralApp
 */
angular
  .module('centralApp')
  .controller('ProjectUpdateCtrl', ['$scope','$state','$stateParams','toastr', 'ENV', 'EnumService', function ($scope,$state, $stateParams,toastr,ENV, EnumService) {
    
    var promise = EnumService.get_api(ENV.api_url+'/dashboard/projects/'+ $stateParams.id);
    promise.then(
      function(res) {
        $scope.project = res.data.project;
      },
      function(err) {
        console.log(err);
        $scope.failed = true;
        $scope.error = "An error has occured while adding! -- " + err.data.message;                
      }
    )

    $scope.save = function(project) {
      var promise = EnumService.put_api(ENV.api_url+'/dashboard/projects/'+$stateParams.id, {'project' : project});
      promise.then(
        function(res) {
          $state.go('dashboard.projects', {}, {reload: true});
          $scope.success = true
          toastr.success("Project Updated")
        },
        function(err) {
          console.log(err);
          $scope.failed = true;
          $scope.error = "An error has occured while adding! -- " + err.data.message;
          toastr.error("An error has occured while adding! -- " + err.data.message, 'Error');                
        }
      )
    }
  }]);