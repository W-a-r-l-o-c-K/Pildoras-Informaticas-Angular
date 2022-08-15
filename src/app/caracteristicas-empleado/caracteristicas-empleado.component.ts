import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado',
  templateUrl: './caracteristicas-empleado.component.html',
  styleUrls: ['./caracteristicas-empleado.component.css']
})
export class CaracteristicasEmpleadoComponent implements OnInit {

  @Output() caracteristicasEmpleado = new EventEmitter<string>();

  agregaCaracteristica(value:string){
    // this.miServicio.muestraMensaje(value)
    this.caracteristicasEmpleado.emit(value);
  }

  // constructor(private miServicio:ServicioEmpleadosService) { }

  ngOnInit(): void {
  }

}
