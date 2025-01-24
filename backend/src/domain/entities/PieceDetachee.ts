import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { RepairPart } from './RepairPart';
import { WarrantyPart } from './WarrantyPart';
import { CommandePiece } from './CommandePiece';


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

  @OneToMany(() => CommandePiece, (commandePiece) => commandePiece.piece)
  commandes!: CommandePiece[];
  
}
