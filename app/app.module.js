import angular from 'angular';

require('./active-task-list/active-task-list.module');
require('./completed-task-list/completed-task-list.module');
require('./add-task/add-task.module');
require('./edit-task/edit-task.module');

import taskFactory from './factories/tasks-factory';

import daysPassed from './filters/days-passed';

export const app = angular.module('app', [
  'activeTaskList',
  'completedTaskList',
  'addTask',
  'editTask',
]);

app.factory('taskFactory', taskFactory);

app.filter('daysPassed', daysPassed);
