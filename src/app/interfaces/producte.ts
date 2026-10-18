//Una interficie defineix l'estructura d'un objecte.
//Tots els productes han de tenir aquestes propietats.

export interface Producte {
  // Identificador únic del producte.
  id: number;

  // Nom del producte.
  nom: string;

  // Preu del producte en euros.
  preu: number;

  // Nombre d'unitats que hi ha a l'estoc.
  estoc: number;

  // Categoria a la qual pertany el producte.
  categoria: string;

  // Indica si el producte es pot comprar.
  disponible: boolean;

  // Puntuació del producte de 0 a 10.
  puntuacio: number;

  // Adreça de la imatge del producte.
  imatgeUrl: string;
}