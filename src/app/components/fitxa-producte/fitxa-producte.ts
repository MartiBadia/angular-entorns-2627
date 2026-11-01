import { Component, Input } from '@angular/core';
import { Producte } from '../../interfaces/producte';

@Component({
  selector: 'app-fitxa-producte',
  imports: [],
  templateUrl: './fitxa-producte.html',
  styleUrl: './fitxa-producte.css',
})
export class FitxaProducteComponent {
  @Input() producte!: Producte;

  afegitAlCarret = false;

  get teEstoc(): boolean {
    return this.producte.estoc > 0;
  }

  afegir(): void {
    this.afegitAlCarret = true;
  }
}
