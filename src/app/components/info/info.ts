import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  imports: [],
  templateUrl: './info.html',
  styleUrl: './info.css',
})
export class Info {
  titol = 'Informació del catàleg';
  versioAngular = 21;
  actiu = true;

  // Per mostrar el títol en majúscules.
  get titolMajuscules(): string {
    return this.titol.toUpperCase();
  }

  // Per mostrar l'estat del component en text.
  get estat(): string {
    return this.actiu ? 'Actiu' : 'Inactiu';
  }
}