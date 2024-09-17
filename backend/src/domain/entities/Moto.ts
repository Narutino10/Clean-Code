import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { OneToMany } from 'typeorm';
import { Entretien } from './Entretien';
import { Panne } from './Panne';
import { Essai } from './Essai';


@Entity()
export class Moto {
  @PrimaryGeneratedColumn('uuid')
  id!: string; // Ajout de '!' pour indiquer que la propriété sera initialisée

  @Column()
  modele!: string;

  @Column()
  kilometrage!: number;

  @Column({ type: 'date' })
  dateDernierEntretien!: Date;

  @Column()
  intervalleEntretienKm!: number;

  @Column()
  intervalleEntretienTemps!: number;

  // Relations avec d'autres entités
  @OneToMany(() => Entretien, (entretien) => entretien.moto)
  entretiens!: Entretien[];

  @OneToMany(() => Panne, (panne) => panne.moto)
  pannes!: Panne[];

  @OneToMany(() => Essai, (essai) => essai.moto)
  essais!: Essai[];
}