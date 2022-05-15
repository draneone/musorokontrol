import { TagEntity } from 'src/tag/tag.entity';
import { TochkaEntity } from 'src/tochka/tochka.entity';
export declare class ScreentochkaEntity {
    id: number;
    date: Date;
    img: string;
    tochka: TochkaEntity;
    tags: TagEntity[];
}
