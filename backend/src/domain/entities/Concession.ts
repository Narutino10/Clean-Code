import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Client } from './Client';
import { Moto } from './Moto';
import { User } from './User';

@Entity()
export class Concession {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Client, (client) => client.concessions)
  client!: Client;

  @OneToMany(() => Moto, (moto) => moto.concession)
  motos!: Moto[];

  @ManyToOne(() => User, (user) => user.concessions)
  user!: User;
}
