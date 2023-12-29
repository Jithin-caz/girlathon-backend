import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'User' })
export class User {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: 'varchar', length: 255 }) name: string;

  @Column({ type: 'varchar', length: 255, unique: true }) email: string;

  @Column({ type: 'varchar', length: 255 }) password: string;

 
}
