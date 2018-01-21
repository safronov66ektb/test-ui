import { NgModule, Component, ElementRef, Pipe } from '@angular/core';
import { SalaryType } from '../model/salary-type.model';
import { Model } from '../model/repository.model';
import { SliderComponent } from '../core/slider.component';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  moduleId: module.id,
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})

export class HomeComponent {

isChecked = true;
selectedSalaryType = new SalaryType(1, 'Оклад за месяц');
salaryType = 1;

showMinWageBlock = false;
showCloseIcon = false;

unCheckedValue = 'Указать с НДФЛ';
checkedValue  = 'Без НДФЛ';

salary: number;

  constructor(
    private repository: Model,
   ) {
    this.salary = 0;
  }

   get salaryTypes(): SalaryType[]{
    return this.repository.getSalaryTypes();
   }

   changeSalaryType(st: SalaryType) {
    this.selectedSalaryType = st;
   }

}
