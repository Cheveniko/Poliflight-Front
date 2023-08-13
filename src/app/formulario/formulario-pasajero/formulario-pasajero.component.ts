import { Component } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-formulario-pasajero',
  templateUrl: './formulario-pasajero.component.html',
  styleUrls: ['./formulario-pasajero.component.scss']
})
export class FormularioPasajeroComponent {

  form = new FormGroup({
    nombre: new FormControl(),
    apellido: new FormControl(),
    nacionalidad: new FormControl(),
    fechaNacimiento: new FormControl(),
    pasaporte: new FormControl(),
  });

  subitmForm(){
    console.log(this.form.value);
  }
}
