import { Moto } from "../../domain/entities/Moto";

export class InMemoryMotoRepository {
  private motos: Moto[] = [];

  ajouterMoto(moto: Moto): void {
    this.motos.push(moto);
  }

  obtenirMotoParId(id: string): Moto | undefined {
    return this.motos.find((moto) => moto.id === id);
  }

  // Autres méthodes CRUD...
}
