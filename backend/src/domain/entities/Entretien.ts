import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Moto } from './Moto';

@Entity()
export class Entretien {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Moto, (moto) => moto.entretiens)
  moto!: Moto;

  @Column()
  description!: string;

  @Column('decimal')
  coutTotal!: number;

  @Column('simple-array')
  piecesChangees!: string[];

  @Column({ type: 'date' })
  date!: Date;

  recommandations?: string; // Ajout

}
