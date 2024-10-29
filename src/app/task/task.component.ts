import {Component, Input} from '@angular/core';
import {TaskModel} from "./task.model";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) userTask!: TaskModel;
}
