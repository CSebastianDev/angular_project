import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
})
export class HeroeComponent {
  nombre: string = 'Iron Man';
  edad: number = 40;
  ObtenerNombre(): string {
    return `
    ${this.nombre} - ${this.edad}
    `;
  }
  get nombreCapitalizado() {
    return this.nombre.toUpperCase();
  }
  cambiarNombre(): void {
    this.nombre = 'Spiderman';
  }

  cambiarEdad(): void {
    this.edad = 55;
  }
}
