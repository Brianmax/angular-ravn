import {Component, Input} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {DUMMY_TASKS} from "./dummy-task";
import {TaskComponent} from "../task/task.component";
import {SearchBarComponent} from "../search-bar/search-bar.component";
import {TaskService} from "./task.service";
import {TaskCreatorComponent} from "../task-creator/task-creator.component";
import {EditTaskComponent} from "../edit-task/edit-task.component";
import {TaskModel} from "../task/task.model";
import {convertBrowserOptions} from "@angular-devkit/build-angular/src/builders/browser-esbuild";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    NgForOf,
    TaskComponent,
    NgIf,
    SearchBarComponent,
    TaskCreatorComponent,
    EditTaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  isAddingTask = false;
  isEditingTask = false;
  taskId!: string;

  constructor(private taskService: TaskService) {}

  filteredTasks(status: String) {
    return this.taskService.tasksList.filter(task => task.status === status);
  }

  taskHandler(value: boolean) {
    console.log("value", value)
    this.isAddingTask = value;
  }
  isTaskEditing(value: boolean) {
    this.isEditingTask = value;
  }
  onEditTask(taskId: string) {
    this.isEditingTask = true;
    this.taskId = taskId;
  }
  getTaskById(){
    return this.taskService.getTaskById(this.taskId)!;
  }
}
