angular.module('app').config([
  '$locationProvider',
  '$routeProvider',
  function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
      .when('/', {
        template: '<task-list></task-list>',
      })
      .when('/:id', {
        template: '<task></task>',
      })
      .when('/admin/add', {
        template: '<add-task></add-task>',
      })
      .when('/admin/edit/:id', {
        template: '<edit-task></edit-task>',
      })
      .otherwise('/');
  },
]);
