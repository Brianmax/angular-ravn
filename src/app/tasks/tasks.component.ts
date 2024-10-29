import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {DUMMY_TASKS} from "./dummy-task";
import {TaskComponent} from "../task/task.component";
import {SearchBarComponent} from "../search-bar/search-bar.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    NgForOf,
    TaskComponent,
    NgIf,
    SearchBarComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  protected readonly DUMMY_TASKS = DUMMY_TASKS;
  isAddingTask = false;

  filteredTasks(status: String) {
    return this.DUMMY_TASKS.filter(task=>task.status === status);
  }

  onAddTask() {
    this.isAddingTask = true;
  }
}
