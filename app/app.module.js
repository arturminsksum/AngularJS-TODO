import angular from 'angular';

require('./active-task-list/active-task-list.module');
require('./completed-task-list/completed-task-list.module');
require('./add-task/add-task.module');

import taskFactory from './factories/tasks-factory';

export const app = angular.module('app', [
  'activeTaskList',
  'completedTaskList',
  'addTask',
]);

app.factory('taskFactory', taskFactory);
