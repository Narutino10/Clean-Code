import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Moto } from './Moto';
import { Repair } from './Repair';
import { Conducteur } from './Conducteur';


@Entity()
export class Incident {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Moto, (moto) => moto.incidents)
  moto!: Moto;

  @ManyToOne(() => Conducteur, (conducteur) => conducteur.incidents)
  conducteur!: Conducteur;

  @OneToMany(() => Repair, (repair) => repair.incident)
  repairs!: Repair[];
}
