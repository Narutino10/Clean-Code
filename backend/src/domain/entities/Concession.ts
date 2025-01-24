import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { User } from './User';
import { Moto } from './Moto';

@Entity()
export class Concession {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => User, (user) => user.concessions)
  user!: User;

  @OneToMany(() => Moto, (moto) => moto.concession)
  motos!: Moto[];
}
