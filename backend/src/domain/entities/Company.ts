import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { User } from './User';
import { CompanyMotorcycle } from './CompanyMotorcycle';

@Entity()
export class Company {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @OneToMany(() => CompanyMotorcycle, (companyMotorcycle) => companyMotorcycle.company)
  companyMotorcycles!: CompanyMotorcycle[];

  @ManyToOne(() => User, (user) => user.companies)
  user!: User;
}
