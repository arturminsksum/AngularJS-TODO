angular.module('taskForm').component('taskForm', {
  templateUrl: 'app/task-form/task-form.template.html',
  bindings: {
    taskAction: '&',
    task: '=',
  },
  controller: [
    '$scope',
    function($scope) {
      this.onSubmit = () => {
        if ($scope.taskForm.$valid) {
          this.taskAction({ task: this.task });
        }
      };
    },
  ],
});
