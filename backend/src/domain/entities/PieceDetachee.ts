import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { CommandePiece } from './CommandePiece';

@Entity()
export class PieceDetachee {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  nom!: string;

  @Column('decimal')
  prix!: number;

  @OneToMany(() => CommandePiece, (commande) => commande.piece)
  commandes!: CommandePiece[];
}
