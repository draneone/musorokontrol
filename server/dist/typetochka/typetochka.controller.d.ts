import { CreateTypetochkaDto } from './dto/createTypetochka.dto';
import { CreateResponseTypetochkaInterface } from './types/createResponseTypetochka.interface';
import { TypetochkaService } from './typetochka.service';
export declare class TypetochkaController {
    private readonly typetochkaService;
    constructor(typetochkaService: TypetochkaService);
    create(createTypetochkaDto: CreateTypetochkaDto): Promise<CreateResponseTypetochkaInterface>;
}
