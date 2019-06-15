import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoedaService, ConversorService } from './services';

import { ConversorComponent } from './components';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ConversorComponent
  ],
  exports: [
    ConversorComponent
  ],
  providers: [
    MoedaService,
    ConversorService
  ]
})
export class ConversorModule { }
