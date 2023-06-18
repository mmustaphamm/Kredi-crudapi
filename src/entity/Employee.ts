import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column({nullable:false})
  lastName: string;

  @Column()
  email: string;

  @Column()
  webStack: string;
}
