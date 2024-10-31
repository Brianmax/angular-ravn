import {Component, Input, Output} from '@angular/core';
import {TaskModel} from "./task.model";
import {NgForOf, NgIf} from "@angular/common";
import {MenuComponent} from "../menu/menu.component";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    NgForOf,
    MenuComponent,
    NgIf
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) userTask!: TaskModel;
  isEditing = false;

  computeDueDate(dueDate: string) {
    const dueDateSt = new Date(dueDate);
    const currentDate = new Date();
    const timeDiff = Math.abs(dueDateSt.getTime() - currentDate.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    if (diffDays === 0) {
      return 'TODAY';
    } else if (diffDays === 1) {
      return 'TOMORROW';
    } else {
      return `IN ${diffDays} DAYS`;
    }
  }

  editTask() {
    this.isEditing = true;
  }
}
