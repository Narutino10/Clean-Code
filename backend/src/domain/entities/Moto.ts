import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Concession } from './Concession';
import { Incident } from './Incident';
import { Warranty } from './Warranty';
import { Maintenance } from './Maintenance';
import { CompanyMotorcycle } from './CompanyMotorcycle';

@Entity()
export class Moto {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  vin!: string; // Numéro de série

  @ManyToOne(() => Concession, (concession) => concession.motos)
  concession!: Concession;

  @OneToMany(() => Incident, (incident) => incident.moto)
  incidents!: Incident[];

  @OneToMany(() => Warranty, (warranty) => warranty.moto)
  warranties!: Warranty[];

  @OneToMany(() => Maintenance, (maintenance) => maintenance.moto)
  maintenances!: Maintenance[];

  @OneToMany(() => CompanyMotorcycle, (companyMotorcycle) => companyMotorcycle.motorcycle)
  companyMotorcycles!: CompanyMotorcycle[];
}
