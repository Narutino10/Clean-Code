import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { PieceDetachee } from './PieceDetachee';
import { Warranty } from './Warranty';

@Entity()
export class WarrantyPart {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => PieceDetachee, (part) => part.warrantyParts)
  part!: PieceDetachee;

  @ManyToOne(() => Warranty, (warranty) => warranty.warrantyParts)
  warranty!: Warranty;
}
