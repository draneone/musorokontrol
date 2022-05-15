import { TagEntity } from 'src/tag/tag.entity';
import { TochkaEntity } from 'src/tochka/tochka.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';

@Entity({
    name: 'screentochki'
})

export class ScreentochkaEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: Date;

    @Column()
    img: string;

    @ManyToOne(() => TochkaEntity, tochka => tochka.id)
    tochka: TochkaEntity;

    // !
    @ManyToMany(() => TagEntity)
    @JoinTable()
    tags: TagEntity[];
}