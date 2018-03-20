angular.module('activeTaskList').component('activeTaskList', {
  templateUrl: 'app/active-task-list/active-task-list.template.html',
  controller: [
    '$scope',
    'taskFactory',
    ($scope, taskFactory) => {
      $scope.tasks = taskFactory.getActiveTasks();

      $scope.removeTask = task => {
        taskFactory.removeTask(task);
      };

      $scope.completeTask = task => {
        taskFactory.moveToCompleted(task);
      };

      // days
      $scope.daysPassed = created => {
        const createdDate = new Date(created);
        const now = new Date();
        const msPassed = new Date() - createdDate;
        const daysPassed = Math.floor(msPassed / (24 * 60 * 60 * 1000));
        return daysPassed;
      };
    },
  ],
});
