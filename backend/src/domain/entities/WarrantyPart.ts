import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { PieceDetachee } from './PieceDetachee';

@Entity()
export class WarrantyPart {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => PieceDetachee, (piece) => piece.warrantyParts)
  piece!: PieceDetachee;
}
