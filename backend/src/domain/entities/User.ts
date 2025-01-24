import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Client } from './Client';
import { Concession } from './Concession';
import { Company } from './Company';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column({ default: false })
  isAdmin!: boolean;

  @OneToMany(() => Client, (client) => client.user)
  clients!: Client[];

  @OneToMany(() => Concession, (concession) => concession.user)
  concessions!: Concession[];

  @OneToMany(() => Company, (company) => company.user)
  companies!: Company[];
}
