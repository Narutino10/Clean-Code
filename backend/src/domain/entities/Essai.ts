import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Moto } from './Moto';
import { Conducteur } from './Conducteur';

@Entity()
export class Essai {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Moto, (moto) => moto.essais)
  moto!: Moto;

  @ManyToOne(() => Conducteur, (conducteur) => conducteur.essais)
  conducteur!: Conducteur;

  @Column({ type: 'date' })
  dateEssai!: Date;

  @Column()
  duree!: number;
}
