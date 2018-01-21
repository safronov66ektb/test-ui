import { Injectable } from '@angular/core';
import { SalaryType } from './salary-type.model';

@Injectable()

export class StaticDataSource {
    private data: SalaryType[];

    constructor() {
        this.data = new Array<SalaryType>(

            new SalaryType(1, 'Оклад за месяц'),
            new SalaryType(2, 'МРОТ' ),
            new SalaryType(3, 'Оплата за день'),
            new SalaryType(4, 'Оплата за час' ),
        );
    }

    getData(): SalaryType[] {
        return this.data;
    }
}
