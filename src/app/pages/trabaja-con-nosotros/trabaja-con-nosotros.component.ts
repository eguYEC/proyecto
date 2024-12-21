import { Component } from '@angular/core';

@Component({
  selector: 'app-trabaja-con-nosotros',
  standalone: false,
  
  templateUrl: './trabaja-con-nosotros.component.html',
  styleUrl: './trabaja-con-nosotros.component.css'
})
export class TrabajaConNosotrosComponent {
  mostrarMensaje: boolean = true; // Muestra el mensaje de agradecimiento al inicio
  mostrarFormularioFlag: boolean = false; // El formulario está oculto inicialmente

  mostrarFormulario() {
    this.mostrarMensaje = false; // Oculta el mensaje de agradecimiento
    this.mostrarFormularioFlag = true; // Muestra el formulario
  }

}
