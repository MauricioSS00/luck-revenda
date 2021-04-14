import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { CurrencyMaskModule } from 'ng2-currency-mask';

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,

    CarouselModule,
    ButtonModule,
    DropdownModule,
    PanelModule,
    DividerModule,
    InputTextModule,
    CurrencyMaskModule,

  ]
})
export class HomeModule { }
