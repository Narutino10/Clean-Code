import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Repair } from './Repair';
import { PieceDetachee } from './PieceDetachee';

@Entity()
export class RepairPart {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Repair, (repair) => repair.repairParts)
  repair!: Repair;

  @ManyToOne(() => PieceDetachee, (piece) => piece.repairParts)
  piece!: PieceDetachee;
}
