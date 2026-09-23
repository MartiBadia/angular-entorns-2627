export class Venta {
    id: number;
    nom: string;
    preu: number;
    disponible: boolean;
    descripcio?: string;


    constructor(id: number, nom: string, preu: number, disponible: boolean){
        this.id = id;
        this.nom = nom;
        this.preu = preu;
        this.disponible = disponible;
    }

    //mètode normal
    getActius(): boolean {
        return this.disponible = true;
    }

    findById(id: number): number {
        return this.id;
    }

    formatarElement(nom: string): string{
        return this.descripcio = `El producte ${this.nom} té un preu de ${this.preu}€`;
    }

    getDescripcio(nom: string): string {
        return `${this.descripcio}`;
    }


}