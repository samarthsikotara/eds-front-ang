(function () {
  'use strict';

  angular
    .module('centralApp')
    .config(function ($httpProvider) {

      $httpProvider.interceptors.push('httpAuthInterceptor');
      //$httpProvider.defaults.withCredentials = true;

    })
})();
