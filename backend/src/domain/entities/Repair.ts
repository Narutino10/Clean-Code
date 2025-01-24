import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Incident } from './Incident';
import { RepairPart } from './RepairPart';

@Entity()
export class Repair {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Incident, (incident) => incident.repairs)
  incident!: Incident;

  @OneToMany(() => RepairPart, (repairPart) => repairPart.repair)
  repairParts!: RepairPart[];
}
