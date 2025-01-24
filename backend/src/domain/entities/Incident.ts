import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Moto } from './Moto';
import { Repair } from './Repair';

@Entity()
export class Incident {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Moto, (moto) => moto.incidents)
  moto!: Moto;

  @OneToMany(() => Repair, (repair) => repair.incident)
  repairs!: Repair[];
}
