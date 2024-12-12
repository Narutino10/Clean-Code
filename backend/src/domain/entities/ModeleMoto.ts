import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Moto } from './Moto';

@Entity()
export class ModeleMoto {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  nom!: string;

  @Column({ type: 'int' }) // Vérifiez que le type correspond à vos besoins
  entretienIntervalKm!: number;

  @Column({ type: 'int' })
  entretienIntervalTemps!: number;

  @OneToMany(() => Moto, (moto) => moto.modele)
  motos!: Moto[];
}
