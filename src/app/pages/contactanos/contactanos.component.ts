import { Component } from '@angular/core';

@Component({
  selector: 'app-contactanos',
  standalone: false,
  
  templateUrl: './contactanos.component.html',
  styleUrl: './contactanos.component.css'
})
export class ContactanosComponent {
  mostrarMensaje: boolean = true;  // El mensaje inicial se muestra por defecto
  mostrarFormularioFlag: boolean = false;  // El formulario está oculto inicialmente

  // Método para mostrar el formulario cuando el botón es presionado
  mostrarFormulario() {
    this.mostrarMensaje = false; // Oculta el mensaje
    this.mostrarFormularioFlag = true; // Muestra el formulario
  }

}
