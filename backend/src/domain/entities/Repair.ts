import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Moto } from './Moto';
import { RepairPart } from './RepairPart';

@Entity()
export class Repair {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Moto, (moto) => moto.repairs)
  moto!: Moto;

  @Column()
  description!: string;

  @Column()
  date!: Date;

  @OneToMany(() => RepairPart, (repairPart) => repairPart.repair)
  repairParts!: RepairPart[];
}
