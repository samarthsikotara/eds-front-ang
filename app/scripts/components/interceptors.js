(function () {
  'use strict';

  angular
    .module('centralApp')
    .factory('httpAuthInterceptor', ['$q','$location','$window','$injector', 'toastr', '$cookies', '$state', function ($q, $location, $window, $injector ,toastr, $cookies, $state) {
      return {
        request: function(config){
          config.headers['Authorization'] = $cookies.get('token');
          return config;
        },
        response: function(response) {
          return response
        },
        responseError: function (rejection) {
          if (rejection.status === 500) {
            toastr.error('There was an error (500) trying to process your request.');
          }

          if (rejection.status === 404) {
            toastr.error('Something went wrong! try after sometime!');
          }

          if (rejection.status === 403) {
            toastr.error('You are not authorized to perform this action.');
            $injector.get('$state').go('dashboard.403');
          }

          if (rejection.status === 401) {
            $window.location.href = 
              '#/login?referrer=' +
              $window.encodeURIComponent($location.absUrl());
          }
          return $q.reject(rejection);
        },
      };
    }]);
}());
