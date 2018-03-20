export default () => {
  let taskListActive = [
    {
      text: 'Learn NodeJS',
      created: '2018-03-15T21:05:36.030Z',
      completed: false,
    },
    {
      text: 'Learn AngularJS',
      created: '2018-03-18T21:05:36.030Z',
      completed: false,
    },
    {
      text: 'Learn ReactJS',
      created: '2018-03-13T21:05:36.030Z',
      completed: false,
    },
  ];

  let taskListDone = [
    {
      text: 'Learn JS',
      created: '2018-02-19T21:05:36.030Z',
      completed: false,
    },
  ];

  return {
    // active tasks
    getActiveTasks() {
      return taskListActive;
    },
    addTask(text) {
      taskListActive.push({
        text,
        created: new Date().toJSON(),
      });
    },
    removeTask(task) {
      taskListActive.splice(taskListActive.indexOf(task), 1);
    },
    moveToCompleted(task) {
      taskListDone.push(task);
      taskListActive.splice(taskListActive.indexOf(task), 1);
    },
    // completed tasks
    getCompletedTasks() {
      return taskListDone;
    },
    moveToActive(task) {
      taskListActive.push(task);
      taskListDone.splice(taskListDone.indexOf(task), 1);
    },
  };
};
