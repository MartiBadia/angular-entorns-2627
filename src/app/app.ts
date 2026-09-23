import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Producte } from './interfaces/producte';
import { Producte as ProducteClass } from './producte';
import { Venta } from './interfaces/noutema';
import { CistellaVendes } from './noutema';
import { saludar, esMajorEdat, sumarArray } from './funcions';
import { Alumne } from './alumne';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-entorns-2627');
    //OBJECTIU DE LA SESSIÓ 2: Veure la diferència entre JS i TS --> TS = JS + tipus.
    //ELS TIPUS no canvien com funciona el codi --> AJUDEN A DETECTAR ERRORS abans d'executar.
    // " undefined is not a function? " --> AIXÒ ÉS EL QUE VOLEM EVITAR!!!!!

    /*function saluda (nom) {
      return nom.toUpperCase();
    }

    saluda (40);
    --> Parameter 'nom' implicitly has an 'any' type
    */

   
    /*function saluda(nom:string) {
      return nom.toUpperCase();
    }

    saluda(40);

    --> Argument of type 'number' is not assignable to parameter of type 'string'.
    */

    //TIPUS BASICS
    nom: string = 'Angular';
    nom2: string = 'Laravel';
    versio : number = 20;
    actiu: boolean = true;

    //ARRAYS TIPATS
    colors : string[] = ['vermell', 'verd', 'blau'];
    frameworks: string[] = [this.nom, this.nom2];
    punts : number[] = [10, 15, 20];

    //TypeScrips infereix (adivina) el tipus automàticament
    ciutat = 'Lleida'; //string
    codiP = 25605; //number

    //objecte de tipus Producte

    producte: Producte = {
      id: 1, 
      nom : 'PC', 
      preu : 999,
      disponible : true
    };

    producte2: Producte = {
      id: 2,
      nom : 'Ivan',
      preu : 5,
      disponible : false,
    };

    productes: Producte[] = [this.producte, this.producte2];

    p1 = new ProducteClass('Teclat', 89.99);
    p2 = new ProducteClass('Ratolí', 49.99);

    
    
    //1. AFEGIU UN METODE A LA CLASSE PRODUCTE descripcio() que retorni un string amb nom i preu.
    //2. METODE descompte que retorni el preu amb un 10% de rebaixa.
    //3. Creeu un nou producte i mostreu el descompte per consola.
    //4. Cerqueu la manera de mostrar el desconmpte amb un pop.


    // PART B
    ventes: Venta[] = [
      {
        id: 1,
        nom: 'Ratolí sense fil',
        preu: 25,
        disponible: true,
        descripcio: 'Connectivitat sense fils',
      },
      {
        id: 2,
        nom: 'Teclat mecànic',
        preu: 89.99,
        disponible: true,
      },
      {
        id: 3,
        nom: 'Pantalla 27',
        preu: 199,
        disponible: false,
        descripcio: 'No disponible temporalment',
      },
      {
        id: 4,
        nom: 'Auriculars',
        preu: 59.95,
        disponible: true,
      },
      {
        id: 5,
        nom: 'Altaveu',
        preu: 45.5,
        disponible: false,
      },
    ];

    cistella = new CistellaVendes('La meva botiga', this.ventes);

    getActius(): Venta[] {
      return this.ventes.filter((venta) => venta.disponible === true);
    }

    findById(id: number): Venta | undefined {
      return this.ventes.find((venta) => venta.id === id);
    }

    formatarElement(element: Venta): string {
      const descripcio = element.descripcio ? ` - ${element.descripcio}` : '';
      const disponibilitat = element.disponible ? 'disponible' : 'no disponible';

      return `Venda ${element.id}: ${element.nom}${descripcio} (${element.preu}€, ${disponibilitat})`;
    }

    constructor() {
      console.log(this.p1.toString());
      console.log(this.p1.preuAmbIva());
      console.log(this.p2.descompte());

      console.log('Vendes disponibles:', this.getActius());
      console.log('Venda amb id 1:', this.findById(1));
      console.log('Venda amb id 99:', this.findById(99));
      console.log('Venda formatada:', this.formatarElement(this.ventes[0]));
      console.log('Total de la cistella:', this.cistella.total);

      console.log(saludar('Marta'));
      console.log(esMajorEdat(17));
      console.log(esMajorEdat(18));
      console.log(sumarArray(this.punts));

      const alumne1 = new Alumne('Marta', 20, 'DAW2', [7, 8, 9]);
      const alumne2 = new Alumne('Pau', 17, 'DAW2', [3, 5, 6]);

      console.log(alumne1.presentar());
      console.log(alumne1.haAprobat);
      console.log(alumne2.presentar());
      console.log(alumne2.haAprobat);
    }

}