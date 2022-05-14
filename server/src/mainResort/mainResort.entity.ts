import { ResortEntity } from 'src/resort/resort.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'mainresorts' })
export class MainResortEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  slug: string;

  @Column()
  name: string;

  @Column()
  title: string;

  @Column({ default: '' })
  description: string;

  @Column({ default: '' })
  h1: string;

  @Column({ type: 'text', default: '' })
  body: string;

  // Связь
  @OneToMany(() => ResortEntity, (resort) => resort.mainResort)
  resorts: ResortEntity;
}
