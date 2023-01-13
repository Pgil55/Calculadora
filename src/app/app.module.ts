import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { BotonesComponent } from './botones/botones.component';
import { AltYpesoComponent } from './alt-ypeso/alt-ypeso.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    BotonesComponent,
    AltYpesoComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
