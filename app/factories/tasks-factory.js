export default $resource => {
  let taskListActive = $resource('./app/json/task-list-active.json').query(
    { method: 'GET' },
    response => {
      return response;
    },
  );

  return {
    getActiveTasks() {
      return taskListActive;
    },
    addTask(text) {
      taskListActive.push({
        id: Date.now(),
        text,
        created: new Date().toJSON(),
      });
    },
    removeTask(task) {
      taskListActive.splice(taskListActive.indexOf(task), 1);
    },
    // edit task
    editTask(task) {
      const taskIndex = taskListActive.findIndex(item => item.id === task.id);
      taskListActive.splice(taskIndex, 1, task);
    },
  };
};
