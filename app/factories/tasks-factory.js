const api = 'http://localhost:3000/api/';

export default $resource => {
  let taskList = $resource(api).query();

  return {
    getTasks() {
      return taskList;
    },

    getTask(id) {
      return $resource(api + id).query();
    },

    addTask(task) {
      $resource(api + 'add').save(JSON.stringify(task), task => {
        taskList.push(task);
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
      return $resource(api + task._id, null, {
        update: { method: 'PUT' },
      })
        .update(JSON.stringify(task))
        .$promise.then(
          () => console.log('update'),
          error => console.log(error),
        );
    },
  };
};
