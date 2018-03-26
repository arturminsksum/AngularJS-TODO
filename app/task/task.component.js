angular.module('task').component('task', {
  templateUrl: 'app/task/task.template.html',
  controller: [
    'taskFactory',
    '$routeParams',
    function(taskFactory, $routeParams) {
      this.task = taskFactory.getTask($routeParams.id);
    },
  ],
});
