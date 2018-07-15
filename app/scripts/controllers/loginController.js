'use strict';
/**
 * @ngdoc function
 * @name centralApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the centralApp
 */
angular.module('centralApp')
  .controller('LoginCtrl', ['$scope','ENV', 'EnumService','$state','$cookies','toastr','$stateParams','$location', '$window', function ($scope, ENV, EnumService, $state, $cookies,toastr,$stateParams,$location,$window) {
     
     if($stateParams.logout && $cookies.get('token')){
      var auth = {'token' : $cookies.get('token')}
      var logout_promise = EnumService.post_api(ENV.api_url+'/dashboard/logout', auth);
      logout_promise.then(
        function(res) {
          ['token','name', 'uuid', 'email'].forEach(function(key){
            $cookies.remove(key)
          })
          $scope.success = true
          toastr.success("Logged out successfully")
        },
        function(err) {
          $scope.failed = true;
          $scope.error = "An error has occured while logged In! -- " + err.data.message;                
          toastr.error("An error has occured while logged In! -- " + err.data.message)
        }
      )
     }

     $scope.save = function(auth) {
      var promise = EnumService.post_api(ENV.api_url+'/dashboard/login', auth);
      promise.then(
        function(res) {
          $cookies.put('token',res.data.token);
          $cookies.put('name',res.data.user.name);
          $cookies.put('email',res.data.user.email);
          $cookies.put('uuid',res.data.user.uuid);
          $state.go('dashboard.projects', {}, {reload: true})
          $scope.success = true
          toastr.success("Welcome "+res.data.user.name)
        },
        function(err) {
          console.log(err);
          $scope.failed = true;
          $scope.error = "An error has occured while logged In! -- " + err.data.message;                
          toastr.error("An error has occured while logged In! -- " + err.data.message)
        }
      )
    }
  }]
);