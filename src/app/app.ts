import { Component } from '@angular/core';
import { Producte } from './interfaces/producte';
import { Capcalera } from './components/capcalera/capcalera';
import { Tarjeta } from './components/tarjeta/tarjeta';
import { Info } from './components/info/info';

@Component({
  selector: 'app-root',
  imports: [Capcalera, Tarjeta, Info],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  productes: Producte[] = [
    {
      id: 1,
      nom: 'Teclat mecànic',
      preu: 89.99,
      estoc: 12,
      categoria: 'Perifèrics',
      disponible: true,
      puntuacio: 4.5,
      imatgeUrl:
        'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=640&q=80',
    },
    {
      id: 2,
      nom: 'Ratolí sense fil',
      preu: 25,
      estoc: 3,
      categoria: 'Perifèrics',
      disponible: true,
      puntuacio: 4,
      imatgeUrl:
        'https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=640&q=80',
    },
    {
      id: 3,
      nom: 'Monitor 27 polzades',
      preu: 199,
      estoc: 0,
      categoria: 'Pantalles',
      disponible: false,
      puntuacio: 4.8,
      imatgeUrl:
        'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=640&q=80',
    },
    {
      id: 4,
      nom: 'Auriculars sense fils',
      preu: 59.95,
      estoc: 7,
      categoria: 'Àudio',
      disponible: true,
      puntuacio: 3.5,
      imatgeUrl:
        'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=640&q=80',
    },
    {
      id: 5,
      nom: 'Portàtil bàsic',
      preu: 549,
      estoc: 2,
      categoria: 'Ordinadors',
      disponible: true,
      puntuacio: 4.2,
      imatgeUrl:
        'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=640&q=80',
    },
    {
      id: 6,
      nom: 'Micròfon per a streaming',
      preu: 79.9,
      estoc: 0,
      categoria: 'Àudio',
      disponible: false,
      puntuacio: 3.8,
      imatgeUrl:
        'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=640&q=80',
    },
  ];

  producteSeleccionat: Producte | null = null;

  seleccionarProducte(producte: Producte): void {
    this.producteSeleccionat = producte;
  }
}