import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Moto } from './Moto';

@Entity()
export class Panne {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Moto, (moto) => moto.pannes)
  moto!: Moto;

  @Column()
  description!: string;

  @Column({ type: 'date' })
  date!: Date;
}
