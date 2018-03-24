angular.module("addTask").component("addTask", {
  templateUrl: "app/add-task/add-task.template.html",
  controller: [
    "$scope",
    "taskFactory",
    "$location",
    function($scope, taskFactory, $location) {
      this.addTask = function(newTaskName) {
        taskFactory.addTask(newTaskName);
        $location.path("/");
      };
    }
  ]
});
