angular.module('addTask').component('addTask', {
  templateUrl: 'app/add-task/add-task.template.html',
  controller: [
    'taskFactory',
    '$location',
    function(taskFactory, $location) {
      this.addTask = function(taskText) {
        taskFactory.addTask({
          id: 'abc-news',
          source: 'ABC News',
          author: 'ABC News',
          title: taskText,
          description:
            "Dr. Jennifer Ashton kicks off a month-long 'Water Challenge' to look at how drinking more water can affect your health.",
          url: 'http://abcnews.go.com/GMA/video/water-challenge-52783678',
        });
        $location.path('/');
      };
    },
  ],
});
