import { Tag } from 'src/tag/tag.entity';
import { Tochka } from 'src/tochka/tochka.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity({
    name: 'screenstochek'
})

export class Screentochka{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: Date;

    @Column()
    img: string;

    @ManyToOne(() => Tochka, tochka => tochka.id)
    tochka: Tochka;

    @OneToMany(() => Tag, (tag) => tag.id)
    tags: Tag[];
}