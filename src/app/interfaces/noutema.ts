// PART A: interfície del model de vendes.
export interface Venta {
  id: number;
  nom: string;
  preu: number;
  disponible: boolean;
  descripcio?: string;
}
