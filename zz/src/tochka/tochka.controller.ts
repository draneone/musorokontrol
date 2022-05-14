import { Controller, Get } from '@nestjs/common';

@Controller('tochka')
export class TochkaController {
    @Get()
    findAll() {
        return [ {
            type: 'Урна',
            adress: 'Краснодарская Терская',
            status: ['Пусто'],
            dateTime: new Date().toString(),
            geometry: [44.89427, 37.31689],
            img: ''
          },
        ]
    }
}
