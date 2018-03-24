angular.module('editTask').component('editTask', {
  templateUrl: 'app/edit-task/edit-task.template.html',
  controller: [
    '$scope',
    'taskFactory',
    '$location',
    '$routeParams',
    ($scope, taskFactory, $location, $routeParams) => {
      const task = taskFactory.getActiveTasks().find(task => {
        return task.id === +$routeParams.id;
      });

      $scope.newTaskText = task.text;

      $scope.editTask = () => {
        if ($scope.editTaskForm.$valid) {
          taskFactory.editTask({
            ...task,
            text: $scope.newTaskText,
          });
          $location.path('/');
        }
      };
    },
  ],
});
