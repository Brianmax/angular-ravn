import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-task-creator',
  standalone: true,
  imports: [],
  templateUrl: './task-creator.component.html',
  styleUrl: './task-creator.component.css'
})
export class TaskCreatorComponent {
  @Output() closeEmitter = new EventEmitter<boolean>();
  enteredTitle = '';
  enteredPoints = '';
  dueDate = '';
  status = '';

  onSubmit() {

  }
}
