import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() text: string = 'Add';
  @Input() color: string = 'green';

  @Output() btnClick = new EventEmitter();

  onClick(): void {
    this.btnClick.emit();
  }
}
