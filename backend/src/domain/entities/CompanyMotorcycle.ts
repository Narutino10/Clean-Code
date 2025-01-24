import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Company } from './Company';
import { Moto } from './Moto';

@Entity()
export class CompanyMotorcycle {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Company, (company) => company.companyMotorcycles)
  company!: Company;

  @ManyToOne(() => Moto, (moto) => moto.companyMotorcycles)
  motorcycle!: Moto;
}
