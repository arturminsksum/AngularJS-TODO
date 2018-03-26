const api = 'http://localhost:3000/api/';

export default $resource => {
  let taskList = $resource(api).query({ method: 'GET' }, response => response);

  return {
    getActiveTasks() {
      return taskList;
    },
    addTask(text) {
      taskList.push({
        id: Date.now(),
        text,
        created: new Date().toJSON(),
      });
    },
    removeTask(id) {
      return $resource(api + id)
        .delete()
        .$promise.then(
          () => (taskList = taskList.filter(task => task._id !== id)),
          error => console.log(error),
        );
    },
    // edit task
    editTask(task) {
      const taskIndex = taskList.findIndex(item => item.id === task.id);
      taskList.splice(taskIndex, 1, task);
    },
  };
};
