import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-vali',
  templateUrl: './forms-vali.component.html',
  styleUrls: ['./forms-vali.component.css']
})
export class FormsValiComponent {

  form
  constructor() {
    this.form = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.minLength(10)]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'message': new FormControl('', [Validators.required, Validators.maxLength(500)])
    });
  }
  
  onSubmit() {
    if (this.form.valid) {
        // Se envia los datos del formulario 
        alert('Todo está correcto!');
    } else {
        alert('Por favor, verifica los campos');
    }
}
confirm() {
  // Validación de datos ingresados y se muestra un mensaje de confirmación
  if (this.form) {
    alert('¡Tu información se ha enviado correctamente!');
    console.log(this.form)
  } else {
    alert('Hay errores en el formulario');
  }
}
onClear() {
  this.form.reset();
}

}

