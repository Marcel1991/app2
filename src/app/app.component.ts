import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app2';
  nombreEstudiante: string = 'Luis';
  edadEstudiante: number = 12;
  horaActual: Date;
  mostrarHora(evento: any){
    console.log(evento);
    this.horaActual = new Date();
    const {target} = evento;
    this.edadEstudiante = 50;
    target.innerHTML = `Cambio la hora, ${this.horaActual.getSeconds()}`
  }
}
