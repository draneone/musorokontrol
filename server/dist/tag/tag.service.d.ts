import { Repository } from 'typeorm';
import { CreateTagDto } from './dto/createTag.dto';
import { TagEntity } from './tag.entity';
export declare class TagService {
    private readonly tagRepository;
    constructor(tagRepository: Repository<TagEntity>);
    findAll(): Promise<TagEntity[]>;
    create(createTagDto: CreateTagDto): Promise<TagEntity>;
}
