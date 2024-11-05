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
  removeTask(task: TaskModel) {
    this.tasks = this.tasks.filter(t => t !== task);
  }
  getTaskById(id: string) {
    return this.tasks.find(task => task.id === id);
  }
  updateTask(task: TaskModel, id: string) {
    const index = this.tasks.findIndex(t => t.id === id);
    this.tasks[index] = task;
  }
}
