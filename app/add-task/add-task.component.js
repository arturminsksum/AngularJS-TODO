angular.module("addTask").component("addTask", {
  templateUrl: "app/add-task/add-task.template.html",
  controller: [
    "taskFactory",
    "$location",
    function(taskFactory, $location) {
      this.addTask = function(taskText) {
        taskFactory.addTask(taskText);
        $location.path("/");
      };
    }
  ]
});
