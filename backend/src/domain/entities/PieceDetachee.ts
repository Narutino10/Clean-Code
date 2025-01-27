import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { CommandePiece } from './CommandePiece';
import { RepairPart } from './RepairPart';
import { WarrantyPart } from './WarrantyPart';

@Entity()
export class PieceDetachee {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  nom!: string;

  @Column()
  prix!: number;

  @Column()
  stock!: number;

  @Column()
  seuilCritique!: number;

  @OneToMany(() => RepairPart, (repairPart) => repairPart.piece)
  repairParts!: RepairPart[];

  @OneToMany(() => WarrantyPart, (warrantyPart) => warrantyPart.piece)
  warrantyParts!: WarrantyPart[];

  @OneToMany(() => CommandePiece, (commande) => commande.piece)
  commandes!: CommandePiece[];

  
}
