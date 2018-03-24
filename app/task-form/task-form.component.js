angular.module("taskForm").component("taskForm", {
  templateUrl: "app/task-form/task-form.template.html",
  bindings: {
    taskAction: "&"
  },
  controller: [
    "$scope",
    "taskFactory",
    "$location",
    function($scope, taskFactory, $location) {
      $scope.newTaskName = "";
      $scope.onSubmit = () => {
        if ($scope.addTaskForm.$valid) {
          this.taskAction({ newTaskName: $scope.newTaskName });
        }
      };
    }
  ]
});
