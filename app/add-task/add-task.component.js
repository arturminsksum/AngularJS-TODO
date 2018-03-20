angular.module('addTask').component('addTask', {
  templateUrl: 'app/add-task/add-task.template.html',
  controller: [
    '$scope',
    'taskFactory',
    ($scope, taskFactory) => {
      $scope.newTaskName = '';

      $scope.addTask = () => {
        if ($scope.addTaskForm.$valid) {
          taskFactory.addTask($scope.newTaskName);
          $scope.newTaskName = '';
        }
      };
    },
  ],
});
