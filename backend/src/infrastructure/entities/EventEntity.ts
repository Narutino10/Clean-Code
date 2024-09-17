import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class EventEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  aggregateId!: string;

  @Column()
  type!: string;

  @Column('simple-json')
  data!: any;

  @Column()
  timestamp!: Date;
}
