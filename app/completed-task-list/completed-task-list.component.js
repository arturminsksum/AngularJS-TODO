angular.module('completedTaskList').component('completedTaskList', {
  templateUrl: 'app/completed-task-list/completed-task-list.template.html',
  controller: [
    '$scope',
    'taskFactory',
    ($scope, taskFactory) => {
      $scope.tasks = taskFactory.getCompletedTasks();

      $scope.changeToActive = task => {
        taskFactory.moveToActive(task);
      };

      // sorting
      $scope.sortParam = 'created | daysPassed';
      $scope.sortBy = function(sortParam) {
        $scope.sortParam = sortParam;
      };
    },
  ],
});
