import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { RepairPart } from './RepairPart';
import { WarrantyPart } from './WarrantyPart';

@Entity()
export class PieceDetachee {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  nom!: string;

  @Column('decimal')
  prix!: number;

  @Column('int')
  stock!: number;

  @Column('int')
  seuilCritique!: number;

  @OneToMany(() => RepairPart, (repairPart) => repairPart.part)
  repairParts!: RepairPart[];

  @OneToMany(() => WarrantyPart, (warrantyPart) => warrantyPart.part)
  warrantyParts!: WarrantyPart[];
}
