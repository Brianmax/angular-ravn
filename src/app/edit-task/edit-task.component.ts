import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {TaskModel} from "../task/task.model";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {TaskService} from "../tasks/task.service";

@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    ReactiveFormsModule
  ],
  templateUrl: './edit-task.component.html',
  styleUrl: '../task-creator/task-creator.component.css'
})
export class EditTaskComponent implements OnInit, OnChanges{
  @Input({required: true}) task!: TaskModel;
  @Output() closeEmitter = new EventEmitter<boolean>();
  taskForm: FormGroup;
  tags: string[] = [];
  constructor(private fb: FormBuilder, private taskService: TaskService) {
    this.taskForm = this.fb.group(
      {
        title: [''],
        points: [0],
        dueDate: [''],
        status: [''],
        tags: ['']
      }
    )
    this.tags = taskService.tagsList;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['task'] && changes['task'].currentValue) {
      this.taskForm.patchValue(this.task);
    }
  }

  ngOnInit(): void {
    if (this.task) {
      this.taskForm.patchValue(this.task);
    }
  }
  onSubmit() {
    this.closeEmitter.emit(false);
    // this.taskForm.get('tags').setValue(this.task.tags);
    this.taskService.updateTask(this.taskForm.value, this.task.id);
  }
  onCancel() {
    this.closeEmitter.emit(false);
  }
  onRemoveTag(tag: string) {
    this.task.tags = this.task.tags.filter(t => t !== tag);
    // @ts-ignore
    this.taskForm.get('tags').setValue(this.task.tags);
  }
  onAddTag(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedTag = selectElement.value;
    this.task.tags.push(selectedTag);
  }
}
