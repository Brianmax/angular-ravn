import {Component, EventEmitter, Output} from '@angular/core';
import {TaskModel} from "../task/task.model";
import {TaskService} from "../tasks/task.service";
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-task-creator',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    ReactiveFormsModule
  ],
  templateUrl: './task-creator.component.html',
  styleUrl: './task-creator.component.css'
})
export class TaskCreatorComponent {
  @Output() closeEmitter = new EventEmitter<boolean>();

  taskForm: FormGroup;
  tags: string[] = [];
  constructor(private taskService: TaskService, private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      points: [0, Validators.required],
      dueDate: ['', Validators.required],
      status: ['', Validators.required],
      tags: this.tags
    });
  }

  onSubmit() {
    this.closeEmitter.emit(false);
    console.log(this.taskForm.value);
    this.taskService.saveTasks(this.taskForm.value)
  }
  onCancel() {
    this.closeEmitter.emit(false);
  }

  onAddTag(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedTag = selectElement.value;
    // @ts-ignore
    this.taskForm.get('tags').setValue([...this.tags, selectedTag]);
  }
  get tagsList() {
    return this.taskService.tagsList;
  }
  onRemoveTag(tag: string) {
    this.tags = this.tags.filter(t => t !== tag);
  }
}
