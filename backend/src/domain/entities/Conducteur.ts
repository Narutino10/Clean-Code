import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Essai } from './Essai';
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

  @OneToMany(() => Essai, (essai) => essai.conducteur)
  essais!: Essai[];

  @OneToMany(() => Incident, (incident) => incident.conducteur)
  incidents!: Incident[];
}
