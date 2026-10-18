import { Venta } from './interfaces/noutema';

// PART C: cistella de vendes relacionada amb el model.
export class CistellaVendes {
  nom: string;
  private ventes: Venta[];

  constructor(nom: string, ventes: Venta[] = []) {
    this.nom = nom;
    this.ventes = [...ventes];
  }

  afegirVenda(venta: Venta): void {
    this.ventes.push(venta);
  }

  eliminarVenda(id: number): boolean {
    const index = this.ventes.findIndex((venta) => venta.id === id);

    if (index === -1) {
      return false;
    }

    this.ventes.splice(index, 1);
    return true;
  }

  buscarVenda(id: number): Venta | undefined {
    return this.ventes.find((venta) => venta.id === id);
  }

  get total(): number {
    return this.ventes.reduce(
      (total, venta) => total + this.preuAmbIva(venta.preu),
      0,
    );
  }

  // Funció auxiliar privada.
  private preuAmbIva(preu: number): number {
    return preu * 1.21;
  }
}
