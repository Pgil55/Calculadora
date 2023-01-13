import { Component, Input, Output,EventEmitter } from '@angular/core';
import { AltYpesoComponent } from '../alt-ypeso/alt-ypeso.component';
@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  @Input() altura:number=0;
  @Input() peso:number=0;
  @Input() nombre:string='';
  @Input() hombre:string='hombre';
  @Input() mujer:string='Mujer';

  
  public addClick(){
    alert ('Felicidades has elejido ' + this.hombre)
    this.hombre
    console.log(this.hombre)
    
  }
  public addClick2(){
    alert ('Felicidades has elejido' + this.mujer)
    this.mujer
    console.log(this.mujer)
  }

  public asignarAltura($altura: number): void {
    this.altura = $altura;
  }

  public asignarPeso($peso: number): void {
    this.peso = $peso;
  }

  public borrar(){
    this.nombre = '';
    this.altura=0
    this.peso=0
  }
}



