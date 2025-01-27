import { Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Concession } from './Concession';
import { User } from './User';

@Entity()
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @OneToMany(() => Concession, (concession) => concession.client)
  concessions!: Concession[];

  @ManyToOne(() => User, (user) => user.clients)
  user!: User;
}
