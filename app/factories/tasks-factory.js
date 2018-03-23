import taskListActiveJSON from '../json/task-list-active.json';
import taskListCompletedJSON from '../json/task-list-completed.json';
import { findIndex } from 'rxjs/operator/findIndex';

export default () => {
  let taskListActive = taskListActiveJSON;

  let taskListComleted = taskListCompletedJSON;

  return {
    // active tasks
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
    moveToCompleted(task) {
      taskListComleted.push(task);
      taskListActive.splice(taskListActive.indexOf(task), 1);
    },
    // completed tasks
    getCompletedTasks() {
      return taskListComleted;
    },
    moveToActive(task) {
      taskListActive.push(task);
      taskListComleted.splice(taskListComleted.indexOf(task), 1);
    },
    // edit task
    editTask(task) {
      const taskIndex = taskListActive.findIndex(item => item.id === task.id);
      taskListActive.splice(taskIndex, 1, task);
    },
  };
};
