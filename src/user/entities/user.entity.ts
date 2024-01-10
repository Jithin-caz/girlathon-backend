import { Column, Entity, ObjectId, ObjectIdColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'User' })
export class User {
  @PrimaryGeneratedColumn() id: ObjectId;

  @Column({ type: 'varchar', length: 255 }) name: string;

  @Column({ type: 'varchar', length: 255, unique: true }) email: string;

  @Column({ type: 'varchar', length: 255 }) password: string;

  @Column({type: 'varchar', length: 255, nullable: true,transformer:{to:value => value.trim(),from:value => value}}) team: string;
}
