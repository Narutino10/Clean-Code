import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Moto } from './Moto';
import { IsNotEmpty, IsPositive } from 'class-validator';

@Entity()
export class ModeleMoto {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  @IsNotEmpty()
  nom!: string;

  @Column({ type: 'int' })
  @IsPositive()
  entretienIntervalKm!: number;

  @Column({ type: 'int' })
  @IsPositive()
  entretienIntervalTemps!: number;

  @OneToMany(() => Moto, (moto) => moto.modele)
  motos!: Moto[];
}
