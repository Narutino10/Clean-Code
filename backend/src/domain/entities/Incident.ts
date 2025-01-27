import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Moto } from './Moto';

@Entity()
export class Incident {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Moto, (moto) => moto.incidents)
  moto!: Moto;

  @Column()
  description!: string;

  @Column()
  date!: Date;
}
