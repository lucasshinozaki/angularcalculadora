import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  title = 'calculadora';
  txt:string = ""
  input: string | undefined;

  somar(n1:number, n2:number){
    this.txt ="Resultado = " + (n1 + n2);
  }

  sub(n1:number, n2:number){
    this.txt ="Resultado = " + (n1 - n2);
  }

  mult(n1:number, n2:number): void{
    this.txt ="Resultado = " + (n1 * n2);
  }

  div(n1:number, n2:number){
    this.txt ="Resultado = " + (n1 / n2);
  }
 
}
