import angular from 'angular';
import ngRoute from 'angular-route';
import ngResource from 'angular-resource';

require('./task-list/task-list.module');
require('./task/task.module');
require('./add-task/add-task.module');
require('./edit-task/edit-task.module');
require('./task-form/task-form.module');

import taskFactory from './factories/tasks-factory';
import daysPassed from './filters/days-passed';

angular
  .module('app', [
    'taskList',
    'task',
    'addTask',
    'editTask',
    'taskForm',
    ngRoute,
    ngResource,
  ])
  .factory('taskFactory', ['$resource', taskFactory])
  .filter('daysPassed', daysPassed)
  .config([
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
