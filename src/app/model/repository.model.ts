import { Injectable, Inject } from '@angular/core';
import { SalaryType } from './salary-type.model';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class Model {

    private SalaryTypes: SalaryType[];

    constructor(private dataSource: StaticDataSource) {

        this.SalaryTypes = new Array<SalaryType>();
        this.dataSource.getData().forEach(p => this.SalaryTypes.push(p));
    }

    getSalaryTypes(): SalaryType[] {
        return this.SalaryTypes;
    }
}
