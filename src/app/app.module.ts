import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { AppComponent } from './app.component';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';

import { MyCurrencyFormatterDirective } from './core/my-currency-formatter.directive';
import { MyCurrencyPipe } from './core/my-currency.pipe';

registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [
    AppComponent,
    MyCurrencyFormatterDirective,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    // NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ru' },
    CurrencyPipe,
    MyCurrencyPipe,
    MyCurrencyFormatterDirective,
  ],
  bootstrap: [ AppComponent, HomeComponent ]
})

export class AppModule { }
