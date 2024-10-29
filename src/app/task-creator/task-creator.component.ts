import {Component, EventEmitter, Output} from '@angular/core';
import {TaskModel} from "../task/task.model";
import {TaskService} from "../tasks/task.service";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-task-creator',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './task-creator.component.html',
  styleUrl: './task-creator.component.css'
})
export class TaskCreatorComponent {
  @Output() closeEmitter = new EventEmitter<boolean>();
  @Output() taskEmitter = new EventEmitter<TaskModel> ();
  enteredTitle = '';
  enteredPoints = 0;
  dueDate = '';
  enteredStatus = '';
  tags: string[] = [];
  constructor(private taskService: TaskService) {}

  onSubmit() {
    this.closeEmitter.emit(false);
    this.taskService.saveTasks(
      {
        title: this.enteredTitle,
        points: this.enteredPoints,
        dueDate: this.dueDate,
        tags: this.tags,
        status: this.enteredStatus
      }
    )
  }
  onCancel() {
    this.closeEmitter.emit(false);
  }

  onAddTag(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedTag = selectElement.value;
    this.tags.push(selectedTag);
    selectElement.value = '';
  }
  get tagsList() {
    return this.taskService.tagsList;
  }
  onRemoveTag(tag: string) {
    this.tags = this.tags.filter(t => t !== tag);
  }
}
