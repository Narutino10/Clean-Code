import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ModeleMoto {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  nom!: string;

  @Column()
  intervalleEntretienKm!: number;

  @Column()
  intervalleEntretienTemps!: number; // En mois
}
