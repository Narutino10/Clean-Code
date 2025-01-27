import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Moto } from './Moto';

@Entity()
export class Warranty {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Moto, (moto) => moto.warranties)
  moto!: Moto;

  @Column()
  description!: string;

  @Column({ type: 'date' })
  dateDebut!: Date;

  @Column({ type: 'date' })
  dateFin!: Date;
}
