angular.module('addTask').component('addTask', {
  templateUrl: 'app/add-task/add-task.template.html',
  controller: [
    '$scope',
    'taskFactory',
    ($scope, taskFactory) => {
      $scope.newTaskName = '';

      $scope.addTask = () => {
        taskFactory.addTask($scope.newTaskName);
        $scope.newTaskName = '';
      };
    },
  ],
});
