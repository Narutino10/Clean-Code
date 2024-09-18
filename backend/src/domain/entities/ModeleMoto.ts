import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Moto } from './Moto';

@Entity()
export class ModeleMoto {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  nom!: string;

  @Column()
  entretienIntervalKm!: number;

  @Column()
  entretienIntervalTemps!: number;

  @OneToMany(() => Moto, (moto) => moto.modele)
  motos!: Moto[];
}
