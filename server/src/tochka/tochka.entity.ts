import { ScreentochkaEntity } from 'src/screentochka/screntochka.entity';
// import { TypetochkaEntity } from 'src/typetochka/typetochka.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';

@Entity({
    name: 'tochki'
})
export class TochkaEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    adress: string;

    // @OneToOne(() => TypetochkaEntity)
    // @JoinColumn()
    // typetochka: TypetochkaEntity;

    @OneToMany(() => ScreentochkaEntity, (screentochka) => screentochka.id)
    screenstocka: ScreentochkaEntity[];
}