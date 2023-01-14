import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'alt-ypeso',
  templateUrl: './alt-ypeso.component.html',
  styleUrls: ['./alt-ypeso.component.css']
})
export class AltYpesoComponent {
  @Input() altu: number;
  @Input() pess: number;

  @Output() eventoAltura = new EventEmitter<number>();
  @Output() eventoPeso = new EventEmitter<number>();


  public mas() {
    this.altu++
    console.log(this.altu)
    this.eventoAltura.emit(this.altu)

  }
  public menos() {
    this.altu--
    console.log(this.altu)
    this.eventoAltura.emit(this.altu)

  }

  public mas2() {
    this.pess++
    console.log(this.pess)
    this.eventoPeso.emit(this.pess)

  }
  public menos2() {
    this.pess--
    console.log(this.pess)
    this.eventoPeso.emit(this.pess)

  }
}
