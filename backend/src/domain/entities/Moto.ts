import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { ModeleMoto } from './ModeleMoto'; 
import { Entretien } from './Entretien';
import { Essai } from './Essai';
import { Incident } from './Incident';
import { Panne } from './Panne';

@Entity()
export class Moto {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => ModeleMoto, (modele) => modele.motos)
  modele!: ModeleMoto; 

  @Column('int')
  kilometrage!: number;

  @Column({ type: 'date' })
  dateDernierEntretien!: Date;

  @OneToMany(() => Entretien, (entretien) => entretien.moto)
  entretiens!: Entretien[];

  @OneToMany(() => Essai, (essai) => essai.moto)
  essais!: Essai[];

  @OneToMany(() => Incident, (incident) => incident.moto)
  incidents!: Incident[];

  @OneToMany(() => Panne, (panne) => panne.moto)
  pannes!: Panne[];

  intervalleEntretienKm?: number; // Ajout
  intervalleEntretienTemps?: number; // Ajout
}
