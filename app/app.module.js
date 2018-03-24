import angular from "angular";
import ngRoute from "angular-route";
import ngResource from "angular-resource";

require("./active-task-list/active-task-list.module");
require("./completed-task-list/completed-task-list.module");
require("./add-task/add-task.module");
require("./edit-task/edit-task.module");
require("./task-form/task-form.module");

import taskFactory from "./factories/tasks-factory";
import daysPassed from "./filters/days-passed";

angular
  .module("app", [
    "activeTaskList",
    "completedTaskList",
    "addTask",
    "editTask",
    "taskForm",
    ngRoute,
    ngResource
  ])
  .factory("taskFactory", ["$resource", taskFactory])
  .filter("daysPassed", daysPassed)
  .config([
    "$locationProvider",
    "$routeProvider",
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix("!");

      $routeProvider
        .when("/", {
          template: `<div>
            <active-task-list></active-task-list>
            <completed-task-list></completed-task-list>
          </div>`
        })
        .when("/add", {
          template: "<add-task></add-task>"
        })
        .when("/edit/:id", {
          template: "<edit-task></edit-task>"
        })
        .otherwise("/");
    }
  ]);
