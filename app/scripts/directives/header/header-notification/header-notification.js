'use strict';

angular.module('centralApp')
	.directive('headerNotification',function($cookies){
		return {
      templateUrl:'scripts/directives/header/header-notification/header-notification.html',
      restrict: 'E',
      replace: true,
      link: function($scope, element){
        $scope.employee_name = ($cookies.get('name') || "User")
      }
    }
	});


