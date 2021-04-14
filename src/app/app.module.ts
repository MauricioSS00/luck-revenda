import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localeBr from '@angular/common/locales/br';
import { registerLocaleData } from '@angular/common';

import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';

registerLocaleData(localeBr, 'pt-br');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    ToolbarModule,
    ButtonModule,
    MenubarModule,
    InputTextModule,
    CurrencyMaskModule,

    HomeModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-br' },
    {
      provide: CURRENCY_MASK_CONFIG,
      useValue: {
        align: 'right',
        allowNegative: false,
        allowZero: true,
        decimal: ',',
        precision: 2,
        prefix: '',
        suffix: '',
        thousands: '.',
        nullable: false
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
