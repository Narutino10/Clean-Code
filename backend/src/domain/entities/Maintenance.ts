import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Moto } from './Moto';

@Entity()
export class Maintenance {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Moto, (moto) => moto.maintenances)
  moto!: Moto;

  @Column()
  type!: string;

  @Column()
  description!: string;

  @Column('date')
  date!: Date;
}
