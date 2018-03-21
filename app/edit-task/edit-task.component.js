angular.module('editTask').component('editTask', {
  templateUrl: 'app/edit-task/edit-task.template.html',
  controller: [
    '$scope',
    'taskFactory',
    ($scope, taskFactory) => {
      $scope.state = taskFactory.getEditState();

      $scope.editTask = () => {
        if ($scope.editTaskForm.$valid) {
          taskFactory.editTask();
        }
      };
    },
  ],
});
