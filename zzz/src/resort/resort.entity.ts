import { MainResortEntity } from 'src/mainResort/mainResort.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'resorts' })
export class ResortEntity {
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
  @ManyToOne(() => MainResortEntity, (mainResort) => mainResort.resorts, {
    eager: true,
  })
  mainResort: MainResortEntity;
}
