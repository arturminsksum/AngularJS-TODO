import angular from 'angular';

export const app = angular.module('app', []);

app.factory('todoFactory', () => {
  let taskListActive = [
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

  let taskListDone = [
    {
      text: 'Learn JS',
      created: '2018-01-19T21:05:36.030Z',
      completed: false,
    },
  ];

  return {
    // active tasks
    getActiveTasks() {
      return taskListActive;
    },
    addTask(text) {
      taskListActive.push({
        text,
        created: new Date().toJSON(),
      });
    },
    removeTask(task) {
      taskListActive.splice(taskListActive.indexOf(task), 1);
    },
    moveToCompleted(task) {
      taskListDone.push(task);
      taskListActive.splice(taskListActive.indexOf(task), 1);
    },
    // completed tasks
    getCompletedTasks() {
      return taskListDone;
    },
    moveToActive(task) {
      taskListActive.push(task);
      taskListDone.splice(taskListDone.indexOf(task), 1);
    },
  };
});

app.controller('completedTasksController', [
  '$scope',
  'todoFactory',
  ($scope, todoFactory) => {
    $scope.tasks = todoFactory.getCompletedTasks();

    $scope.changeToActive = task => {
      todoFactory.moveToActive(task);
    };
  },
]);

app.controller('activeTasksController', [
  '$scope',
  'todoFactory',
  ($scope, todoFactory) => {
    $scope.tasks = todoFactory.getActiveTasks();
    $scope.newTaskName = '';

    $scope.addTask = () => {
      todoFactory.addTask($scope.newTaskName);
      $scope.newTaskName = '';
    };

    $scope.removeTask = task => {
      todoFactory.removeTask(task);
    };

    $scope.completeTask = task => {
      todoFactory.moveToCompleted(task);
    };
  },
]);
