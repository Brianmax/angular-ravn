import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TaskComponent} from "./task/task.component";
import {SearchBarComponent} from "./search-bar/search-bar.component";
import {TasksComponent} from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskComponent, SearchBarComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ravn-frontend';
}
