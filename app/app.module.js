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
  .filter('daysPassed', daysPassed);

require('./app.config');
