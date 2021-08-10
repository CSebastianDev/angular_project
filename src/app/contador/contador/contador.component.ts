import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ titulo }}</h1>
    <h1>--------------------</h1>
    <h3>
      La base es: <strong>{{ base }}</strong>
    </h3>
    <button style="background-color: green" (click)="acumular(base)">
      +{{ base }}
    </button>
    <span>{{ numero }}</span>
    <button style="background-color: grey" (click)="acumular(-base)">
      -{{ base }}
    </button>
  `,
})
export class ContadorComponent {
  titulo: string = 'ContadorApp';
  numero: number = 10;
  base: number = 5;

  acumular(valor: number) {
    this.numero += valor;
  }
}
