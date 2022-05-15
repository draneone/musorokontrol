import { CreateTypetochkaDto } from './dto/createTypetochka.dto';
import { TypetochkaEntity } from './typetochka.entity';
export declare class TypetochkaService {
    constructor();
    create(createTypetochkaDto: CreateTypetochkaDto): Promise<TypetochkaEntity>;
}
