angular.module('task').component('task', {
  templateUrl: 'app/task/task.template.html',
  controller: [
    'taskFactory',
    '$routeParams',
    '$location',
    function(taskFactory, $routeParams, $location) {
      this.task = taskFactory.getTask($routeParams.id);

      this.removeTask = id => {
        taskFactory.removeTask(id).then(() => {
          $location.path('/');
        });
      };
    },
  ],
});
