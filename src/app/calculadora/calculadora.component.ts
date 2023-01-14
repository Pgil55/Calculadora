import { Component, Input, Output,EventEmitter } from '@angular/core';
import { AltYpesoComponent } from '../alt-ypeso/alt-ypeso.component';
@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  imc:number;
  @Input() altura:number=150;
  @Input() peso:number=50;
  @Input() nombre:string='';
  @Input() sexo:string='no binario';
  historial: string[] = [];

  
  public addClick(){

    this.sexo='hombre';
    console.log(this.sexo)
    
  }
  public addClick2(){
  
    this.sexo='mujer';
    console.log(this.sexo)
  }

  public asignarAltura($altura: number): void {
    this.altura = $altura;
  }

  public asignarPeso($peso: number): void {
    this.peso = $peso;
  }

  public borrar(){
    this.nombre = '';
    this.sexo='no binario'
    this.altura=150
    this.peso=50
  }

  public calculo(){
    this.imc = this.peso / ((this.altura/100) * (this.altura/100) );
    let respuestaFinal:string='Hola '+ this.nombre + ' eres un@ '+ this.sexo + ' y   ';
    console.log(this.imc);

    let respuesta:string=''
    if (this.imc <18.5) {
      respuesta='estas muy delgado';
      respuestaFinal = respuestaFinal + respuesta;
      this.historial.push(respuestaFinal);
    } else if(this.imc <=24.9){
      respuesta='estas en tu peso ideal';
      respuestaFinal = respuestaFinal + respuesta;
      this.historial.push(respuestaFinal);
    }else if(this.imc >24.9 && this.imc <= 29.9){
      respuesta='estas un poco por encima de tu peso';
      respuestaFinal = respuestaFinal + respuesta;
      this.historial.push(respuestaFinal);
    }else if(this.imc >30.0 ){
      respuesta='estas como una vaca, y calladita shuuuuuuuuuuuu(por Xhokas)';
      respuestaFinal = respuestaFinal + respuesta;
      this.historial.push(respuestaFinal);
    }
    return this.borrar()
    console.log(this.historial);

  }
}





