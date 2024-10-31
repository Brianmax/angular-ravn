import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  @Output() closeEmitter = new EventEmitter<boolean>();

  closeMenu() {
    this.closeEmitter.emit(false);
  }
}
