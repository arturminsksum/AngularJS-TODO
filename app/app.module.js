import angular from 'angular';

export const app = angular.module('app', []);

app.factory('todoFactory', () => {
  var taskList = [
    {
      text: 'Learn JS',
      created: '2018-01-19T21:05:36.030Z',
      completed: false,
    },
    {
      text: 'Learn NodeJS',
      created: '2018-02-19T21:05:36.030Z',
      completed: false,
    },
    {
      text: 'Learn AngularJS',
      created: '2018-03-19T21:05:36.030Z',
      completed: false,
    },
  ];
  return {
    getTasks() {
      return taskList;
    },
    addTask(text) {
      taskList.push({
        text,
        created: new Date().toJSON(),
        completed: false,
      });
    },
    removeTask(text) {
      taskList.splice(taskList.indexOf(text), 1);
    },
    toggleTaskStatus(text) {
      const taskOrder = taskList.indexOf(text);
      taskList[taskOrder].completed = !taskList[taskOrder].completed;
    },
  };
});

app.controller('toDoController', [
  '$scope',
  'todoFactory',
  ($scope, todoFactory) => {
    $scope.tasks = todoFactory.getTasks();
    $scope.newTaskName = '';

    $scope.addTask = () => {
      todoFactory.addTask($scope.newTaskName);
      $scope.newTaskName = '';
    };

    $scope.removeTask = text => {
      todoFactory.removeTask(text);
    };

    $scope.toggleTaskStatus = text => {
      todoFactory.toggleTaskStatus(text);
    };
  },
]);
