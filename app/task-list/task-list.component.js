angular.module('taskList').component('taskList', {
  templateUrl: 'app/task-list/task-list.template.html',
  controller: [
    '$scope',
    'taskFactory',
    ($scope, taskFactory) => {
      $scope.tasks = taskFactory.getTasks();
    },
  ],
});
