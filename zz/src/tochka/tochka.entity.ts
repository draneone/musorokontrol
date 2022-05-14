import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';

import { TypetochkaEntity } from 'src/typetochka/typetochkaEntity.entity';
import { Screentochka } from 'src/screentochka/screntochka.entity';

@Entity({
    name: 'tochka'
})
export class Tochka {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    adress: string;

    @OneToOne(() => TypetochkaEntity)
    @JoinColumn()
    typetochka: TypetochkaEntity;

    @OneToMany(() => Screentochka, (screentochka) => screentochka.id)
    screenstocka: Screentochka[];
}