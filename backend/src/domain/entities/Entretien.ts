import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Moto } from './Moto';

@Entity()
export class Entretien {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Moto, (moto) => moto.entretiens)
  moto!: Moto;

  @Column({ type: 'date' })
  date!: Date;

  @Column()
  description!: string;

  @Column('simple-array')
  piecesChangees!: string[];

  @Column('decimal')
  coutTotal!: number;

  @Column()
  recommandations!: string;
}
