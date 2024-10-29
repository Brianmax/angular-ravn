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
  computeDueDate(dueDate: string) {
    const dueDateSt = new Date(this.userTask.dueDate);
    const currentDate = new Date();
    const timeDiff = Math.abs(dueDateSt.getTime() - currentDate.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    if (diffDays === 0) {
      return 'TODAY';
    } else if (diffDays === 1) {
      return 'TOMORROW';
    } else {
      return dueDate;
    }
  }
}
