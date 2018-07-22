'use strict';
/**
 * @ngdoc overview
 * @name centralApp
 * @description
 * # centralApp
 *
 * Main module of the application.
 */
angular
  .module('centralApp', [
    'toastr',
    'ngCookies',
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
    'config',
    'angularMoment',
    'ui.bootstrap.datetimepicker',
    'tooltips',
    'ngStorage',
    'ui.sortable',
    'ngMaterial', 'ngMessages'
  ])
  .config(['$provide','$stateProvider','$urlRouterProvider','$ocLazyLoadProvider', '$locationProvider','$httpProvider', function ($provide, $stateProvider,$urlRouterProvider,$ocLazyLoadProvider, $locationProvider,$httpProvider) {
    $locationProvider.hashPrefix('');
    $ocLazyLoadProvider.config({
      debug:false,
      events:true,
    });

    //$urlRouterProvider.otherwise('/dashboard/home');

    $stateProvider
      .state('dashboard', {
        url:'/dashboard',
        templateUrl: 'views/dashboard/main.html',
        resolve: {
          loadMyDirectives:function($ocLazyLoad){
            return $ocLazyLoad.load(
            {
              name:'centralApp',
              files:[
                'scripts/directives/header/header.js',
                'scripts/directives/header/header-notification/header-notification.js',
                'scripts/directives/sidebar/sidebar.js',
                'scripts/directives/sidebar/sidebar-search/sidebar-search.js'

              ]
            })
          }
        }
    })

      .state('dashboard.students',{
      templateUrl: 'views/dashboard/students/index.html',
      url: '/students',
      controller:'StudentCtrl',
      resolve: {
        loadMyFiles:function($ocLazyLoad) {
          return $ocLazyLoad.load({
            name:'centralApp',
            files:[
              'scripts/components/enum_service.js',
              'scripts/controllers/students/studentController.js'
            ]
          })
        }
      }
    })

      .state('dashboard.tests',{
      templateUrl: 'views/dashboard/tests/index.html',
      url: '/tests',
      controller:'TestCtrl',
      resolve: {
        loadMyFiles:function($ocLazyLoad) {
          return $ocLazyLoad.load({
            name:'centralApp',
            files:[
              'scripts/components/enum_service.js',
              'scripts/controllers/tests/testController.js'
            ]
          })
        }
      }
    })

      .state('login',{
      templateUrl: 'views/login.html',
      url: '/login?logout',
      controller:'LoginCtrl',
      resolve: {
        loadMyFiles:function($ocLazyLoad) {
          return $ocLazyLoad.load({
            name:'centralApp',
            files:[
              'scripts/components/enum_service.js',
              'scripts/controllers/loginController.js'
            ]
          })
        }
      }
    })

  }]);

    
