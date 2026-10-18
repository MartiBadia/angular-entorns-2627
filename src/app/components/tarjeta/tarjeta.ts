import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producte } from '../../interfaces/producte';

@Component({
  selector: 'app-tarjeta',
  imports: [],
  templateUrl: './tarjeta.html',
  styleUrl: './tarjeta.css',
})
export class Tarjeta {
  // Rebem el producte que ha de mostrar la targeta.
  @Input() producte: Producte = {
    id: 1,
    nom: 'Teclat mecànic',
    preu: 89.99,
    estoc: 12,
    categoria: 'Perifèrics',
    disponible: true,
    puntuacio: 4.5,
    imatgeUrl:
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=640&q=80',
  };

  // Avísem el component pare quan es selecciona el producte.
  @Output() producteSeleccionat = new EventEmitter<Producte>();

  // Per mostrar el preu final amb l'IVA.
  get preuAmbIva(): number {
    return this.producte.preu * 1.21;
  }

  // Per indicar si el producte es pot comprar.
  get estatDisponibilitat(): string {
    return this.producte.disponible ? 'Disponible' : 'No disponible';
  }

  // Per mostrar la categoria amb un text clar.
  get etiquetaCategoria(): string {
    return `Categoria: ${this.producte.categoria}`;
  }

  // Per resumir el producte amb el nom i la puntuació.
  get resumProducte(): string {
    return `${this.producte.nom} - ${this.producte.puntuacio}/10`;
  }

  seleccionarProducte(): void {
    this.producteSeleccionat.emit(this.producte);
  }
}