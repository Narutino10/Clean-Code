export class CreateMotoCommand {
  constructor(
      public readonly modele: string,
      public readonly kilometrage: number,
      public readonly dateDernierEntretien: Date,
      public readonly concessionId: string  
      ) {}
}
