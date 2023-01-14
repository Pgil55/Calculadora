import { Component, Input } from '@angular/core';

@Component({
  selector: 'botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent {
  @Input() color: string = '';
  @Input() texto: string = '';
}
