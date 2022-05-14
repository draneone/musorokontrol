import { Screentochka } from 'src/screentochka/screntochka.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
    name: 'tags'
})
export class Tag {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
  
    @Column()
    tagname: string;

    @ManyToOne(() => Screentochka, screentochka => screentochka.id)
    screentochka: Screentochka;
}