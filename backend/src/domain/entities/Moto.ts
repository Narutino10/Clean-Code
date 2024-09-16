export class Moto {
  constructor(
    public id: string,
    public modele: string,
    public kilometrage: number,
    public dateDernierEntretien: Date,
    public dateProchainEntretien?: Date // Ajoute cette ligne
  ) {}
}
