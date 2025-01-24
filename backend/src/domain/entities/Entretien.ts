import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Moto } from './Moto';

@Entity()
export class Entretien {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Moto, (moto) => moto.entretiens)
  moto!: Moto;

  @Column()
  date!: Date;

  @Column()
  description!: string;

  @Column("simple-array")
  piecesChangees!: string[];

  @Column()
  coutTotal!: number;

  @Column()
  recommandations!: string;
}
