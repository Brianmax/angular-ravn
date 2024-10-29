import { Injectable } from '@angular/core';
import {DUMMY_TASKS} from "./dummy-task";
import {TaskModel} from "../task/task.model";
import {DUMMY_TAGS} from "./tags";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks = DUMMY_TASKS;
  private tags = DUMMY_TAGS;
  constructor() { }

  saveTasks(task: TaskModel ) {
    this.tasks.push(task);
  }

  get tasksList() {
    return this.tasks;
  }
  get tagsList() {
    return this.tags;
  }
}
