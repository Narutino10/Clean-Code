import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Moto } from './Moto';

@Entity()
export class Essai {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Moto, (moto) => moto.essais)
  moto!: Moto;

  @Column()
  dateEssai!: Date;

  @Column()
  resultat!: string;
}
