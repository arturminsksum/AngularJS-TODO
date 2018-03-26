angular.module('activeTaskList').component('activeTaskList', {
  templateUrl: 'app/active-task-list/active-task-list.template.html',
  controller: [
    '$scope',
    'taskFactory',
    ($scope, taskFactory) => {
      $scope.tasks = taskFactory.getActiveTasks();

      $scope.removeTask = id => {
        taskFactory.removeTask(id).then(() => {
          $scope.tasks = taskFactory.getActiveTasks();
        });
      };
    },
  ],
});
