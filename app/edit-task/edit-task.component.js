angular.module('editTask').component('editTask', {
  templateUrl: 'app/edit-task/edit-task.template.html',
  controller: [
    'taskFactory',
    '$location',
    '$routeParams',
    function(taskFactory, $location, $routeParams) {
      this.task = taskFactory.getTasks().find(task => {
        return task._id === $routeParams.id;
      });

      this.editTask = function(taskText) {
        taskFactory.editTask({
          ...this.task,
          text: taskText,
        });
        $location.path('/');
      };
    },
  ],
});
