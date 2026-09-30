/* AQUEST FITXER CONTÉ LA LÒGICA: PROPIETATS, MÉTODES, GETTERS, ETC...*/
import { Component } from '@angular/core';
import { Producte } from '../../interfaces/producte';

@Component({
  selector: 'app-tarjeta', /* PER USARLO AL HTML D'ALTRES COMPONENTS, COM UNA ETIQUETA HTML PERSONALIZADA  EJ: <app-tarjeta></app-tarjeta> */ 
  imports: [],
  templateUrl: './tarjeta.html',
  styleUrl: './tarjeta.css',
})
export class Tarjeta {
nom: string = 'Ordinador gamer pro';
preu: number = 1000;
estoc: number = 10;

producte: Producte = {
    id: 1,
    nom: 'Ordinador gamer pro',
    preu: 1000,
    estoc: 10,
    categoria: 'Electrònica'
};

/* Getter --> es un tipus especial de propietat calculada. En lloc de guardar un valor, el CALCULA cada cop que s'accedeix.
get nomDelGetter(): TipusRetorn{
  return calcul;
}
  AL TEMPLATE S'USA COM UNA PROPIETAT , SENSE PARENTESIS {{NOMDELGETTER}}
*/
get preuAmbIva(): number {
    return this.preu * 1.21;
}

/* get estatDisponibilitat(): string {
    if (this.producte.estoc === 0) return 'No disponible';
    if(this.producte.estoc <3) return 'Poca disponibilitat';
    if(this.producte.estoc >=3) return 'Disponible';
    
}
    */
}
/* INTERPOLACIÓ DE DADES {{}}
PERMET CONNECTAR LES DADES DEL TS AL HTML
PERMET INCRUSTAR EXPRESSIONS TS DINS DEL HTML, ANGULAR AVALUAVA L'EXPRESSIÓ I MOSTRA EL RESULTAT COM A TEXT

{{nomPropietat}} --> Mostra el valor d'una propietat de la classe
{{2 + 3}} --> Mostra 5
{{text.toUpperCase()}} --> Mostra el text en majúscules
{{edat >= 18 ? 'Major d\'edat' : 'Menor d\'edat'}} --> Operador ternari

amb{{nom}} --> el valor pot canviar i el html s'actualitza automàticament, harcoded es x sempre estatic.
 */