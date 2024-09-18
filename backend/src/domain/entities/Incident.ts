import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Conducteur } from './Conducteur';
import { Moto } from './Moto';

@Entity()
export class Incident {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Conducteur, (conducteur) => conducteur.incidents)
  conducteur!: Conducteur;

  @ManyToOne(() => Moto, (moto) => moto.incidents)
  moto!: Moto;

  @Column({ type: 'date' })
  date!: Date;

  @Column()
  description!: string;
}
