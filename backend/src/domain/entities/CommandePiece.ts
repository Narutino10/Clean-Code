import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { PieceDetachee } from './PieceDetachee';


@Entity()
export class CommandePiece {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => PieceDetachee, (piece) => piece.commandes)
  piece!: PieceDetachee;

  @Column()
  dateCommande!: Date;

  @Column()
  quantite!: number;

  @Column()
  coutTotal!: number;

  @Column()
  dateLivraisonEstimee!: Date;
}
