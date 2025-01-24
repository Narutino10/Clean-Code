import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Moto } from './Moto';
import { WarrantyPart } from './WarrantyPart';

@Entity()
export class Warranty {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Moto, (moto) => moto.warranties)
  moto!: Moto;

  @Column()
  description!: string;

  @Column('date')
  dateDebut!: Date;

  @Column('date')
  dateFin!: Date;

  @OneToMany(() => WarrantyPart, (warrantyPart) => warrantyPart.warranty)
  warrantyParts!: WarrantyPart[];
}
