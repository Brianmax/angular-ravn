import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {DUMMY_TASKS} from "./dummy-task";
import {TaskComponent} from "../task/task.component";
import {SearchBarComponent} from "../search-bar/search-bar.component";
import {TaskService} from "./task.service";
import {TaskCreatorComponent} from "../task-creator/task-creator.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    NgForOf,
    TaskComponent,
    NgIf,
    SearchBarComponent,
    TaskCreatorComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  isAddingTask = false;

  constructor(private taskService: TaskService) {}

  filteredTasks(status: String) {
    return this.taskService.tasksList.filter(task => task.status === status);
  }

  taskHandler(value: boolean) {
    this.isAddingTask = value;
  }
  get tagsList() {
    return this.taskService.tagsList
  }
}
