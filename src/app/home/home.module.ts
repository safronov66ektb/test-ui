import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { HomeComponent } from '../home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../core/slider.component';

@NgModule({
  imports: [
    ModelModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CommonModule,
  ],
  declarations: [
    HomeComponent,
    SliderComponent
  ],
  exports: [ HomeComponent ]
})

export class HomeModule {

 }
