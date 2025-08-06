import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <button
      class="text-black w-full px-5 py-2 rounded-xl shadow-md hover:opacity-90"
      (click)="btnClicked.emit()"
    >
      <span class="text-md">{{ label() }}</span>
    </button>
  `,
  styles: ``
})
export class Button {
  label = input('');
  btnClicked = output();
}
