import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Conducteur } from './Conducteur';
import { Moto } from './Moto';

@Entity()
export class Essai {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Conducteur, (conducteur) => conducteur.essais)
  conducteur!: Conducteur;

  @ManyToOne(() => Moto, (moto) => moto.essais)
  moto!: Moto;
}
