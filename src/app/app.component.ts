import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Lista de Empleados';

  empleados:Empleado[]=[
    new Empleado("Juan","Diaz","Presidente",7500),
    new Empleado("Fernandez","Ana","Directora",5500),
    new Empleado("Laura","Dez","Jefa de Sección",4500),
    new Empleado("Ana","Lopez","Administrativo",3500)
  ];

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

}
