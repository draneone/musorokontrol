import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TypetochkaEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
}