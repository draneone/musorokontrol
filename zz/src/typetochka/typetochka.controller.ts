import { Body, Controller, Post } from '@nestjs/common';
import { CreateTypetochkaDto } from './dto/createTypetochka.dto';
import { TypetochkaResponseInterface } from './types/typetochkaResponse.interface';

@Controller('typetochka')
export class TypetochkaController {
    
    @Post()
    async create(
        @Body('typetochka') createTypetochkaDto: CreateTypetochkaDto
    ): Promise<TypetochkaResponseInterface>
    {
        return {
            typetochka: {
                id: 1,
                name: ''
            } 
        }
    }
}
