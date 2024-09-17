import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Conducteur } from './Conducteur';

@Entity()
export class Incident {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Conducteur, (conducteur) => conducteur.incidents)
  conducteur!: Conducteur;

  @Column({ type: 'date' })
  date!: Date;

  @Column()
  type!: string; // Accident, infraction, etc.

  @Column()
  description!: string;
}
