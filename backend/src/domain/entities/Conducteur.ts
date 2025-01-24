import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Incident } from './Incident';

@Entity()
export class Conducteur {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  nom!: string;

  @Column()
  permis!: string;

  @Column()
  experience!: number;

  @OneToMany(() => Incident, (incident) => incident.conducteur)
  incidents!: Incident[];
}
