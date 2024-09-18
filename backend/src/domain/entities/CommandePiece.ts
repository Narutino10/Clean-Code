import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { PieceDetachee } from './PieceDetachee';

@Entity()
export class CommandePiece {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => PieceDetachee, (piece) => piece.commandes)
  piece!: PieceDetachee;

  @Column({ type: 'date' })
  dateCommande!: Date;

  @Column()
  quantite!: number;

  @Column('decimal')
  coutTotal!: number;

  @Column({ type: 'date' })
  dateLivraisonEstimee!: Date;
}
