import taskListActiveJSON from '../json/task-list-active.json';
import taskListCompletedJSON from '../json/task-list-completed.json';
import { findIndex } from 'rxjs/operator/findIndex';

export default () => {
  let taskListActive = taskListActiveJSON;

  let taskListComleted = taskListCompletedJSON;

  let editState = {
    edit: false,
    task: {},
  };

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
    getEditState() {
      return editState;
    },
    setEditState({ text, created }) {
      editState.edit = true;
      editState.task = { text, created };
    },
    editTask() {
      editState.edit = false;
      const taskIndex = taskListActive.findIndex(
        task => task.created === editState.task.created,
      );
      taskListActive.splice(taskIndex, 1, editState.task);
    },
  };
};
