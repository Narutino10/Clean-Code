import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Moto } from './Moto';

@Entity()
export class Entretien {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Moto, (moto) => moto.entretiens, { onDelete: 'CASCADE' })
  moto!: Moto;

  @Column()
  description!: string;

  @Column('decimal', { precision: 10, scale: 2 }) // Exemple : pour les valeurs monétaires
  coutTotal!: number;

  @Column('simple-array') // Stocke une liste sous forme de chaîne séparée par des virgules
  piecesChangees!: string[];

  @Column({ type: 'date' })
  date!: Date;

  @Column({ nullable: true }) // Ajout pour que cette colonne soit optionnelle
  recommandations?: string;
}
