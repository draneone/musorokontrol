import { CreateTagDto } from './dto/createTag.dto';
import { TagEntity } from './tag.entity';
import { TagService } from './tag.service';
import { CreateResponseInterface } from './types/createResponse.interface';
export declare class TagController {
    private readonly tagService;
    constructor(tagService: TagService);
    findAll(): Promise<{
        tags: TagEntity[];
    }>;
    create(createTagDto: CreateTagDto): Promise<CreateResponseInterface>;
}
