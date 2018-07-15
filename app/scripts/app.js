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
    'ui.sortable'
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

      .state('dashboard.projects',{
      templateUrl: 'views/dashboard/projects/index.html',
      url: '/projects',
      controller:'ProjectCtrl',
      resolve: {
        loadMyFiles:function($ocLazyLoad) {
          return $ocLazyLoad.load({
            name:'centralApp',
            files:[
              'scripts/components/enum_service.js',
              'scripts/controllers/projects/projectController.js'
            ]
          })
        }
      }
    })

      .state('dashboard.projects_new',{
      templateUrl: 'views/dashboard/projects/new.html',
      url: '/projects/new',
      controller:'ProjectNewCtrl',
      resolve: {
        loadMyFiles:function($ocLazyLoad) {
          return $ocLazyLoad.load({
            name:'centralApp',
            files:[
              'scripts/components/enum_service.js',
              'scripts/controllers/projects/projectNewController.js'
            ]
          })
        }
      }
    })

      .state('dashboard.projects_update',{
      templateUrl: 'views/dashboard/projects/new.html',
      url: '/projects/:id/update',
      controller:'ProjectUpdateCtrl',
      resolve: {
        loadMyFiles:function($ocLazyLoad) {
          return $ocLazyLoad.load({
            name:'centralApp',
            files:[
              'scripts/components/enum_service.js',
              'scripts/controllers/projects/projectUpdateController.js'
            ]
          })
        }
      }
    })

      .state('dashboard.projects_show',{
      templateUrl: 'views/dashboard/projects/show.html',
      url: '/projects/:id',
      controller:'ProjectShowCtrl',
      resolve: {
        loadMyFiles:function($ocLazyLoad) {
          return $ocLazyLoad.load({
            name:'centralApp',
            files:[
              'scripts/components/enum_service.js',
              'scripts/controllers/projects/projectShowController.js'
            ]
          })
        }
      }
    })

      .state('dashboard.tasks',{
      templateUrl: 'views/dashboard/tasks/index.html',
      url: '/tasks?id&delete',
      controller:'TaskCtrl',
      resolve: {
        loadMyFiles:function($ocLazyLoad) {
          return $ocLazyLoad.load({
            name:'centralApp',
            files:[
              'scripts/components/enum_service.js',
              'scripts/controllers/tasks/taskController.js'
            ]
          })
        }
      }
    })

      .state('dashboard.tasks_new',{
      templateUrl: 'views/dashboard/tasks/new.html',
      url: '/tasks/new?project_id',
      controller:'TaskNewCtrl',
      resolve: {
        loadMyFiles:function($ocLazyLoad) {
          return $ocLazyLoad.load({
            name:'centralApp',
            files:[
              'scripts/components/enum_service.js',
              'scripts/controllers/tasks/taskNewController.js'
            ]
          })
        }
      }
    })

      .state('dashboard.tasks_update',{
      templateUrl: 'views/dashboard/tasks/new.html',
      url: '/tasks/:id/update',
      controller:'TaskUpdateCtrl',
      resolve: {
        loadMyFiles:function($ocLazyLoad) {
          return $ocLazyLoad.load({
            name:'centralApp',
            files:[
              'scripts/components/enum_service.js',
              'scripts/controllers/tasks/taskUpdateController.js'
            ]
          })
        }
      }
    })

      .state('dashboard.tasks_show',{
      templateUrl: 'views/dashboard/tasks/show.html',
      url: '/tasks/:id',
      controller:'TaskShowCtrl',
      resolve: {
        loadMyFiles:function($ocLazyLoad) {
          return $ocLazyLoad.load({
            name:'centralApp',
            files:[
              'scripts/components/enum_service.js',
              'scripts/controllers/tasks/taskShowController.js'
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

    
