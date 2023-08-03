import { NgModule } from '@angular/core';

import { InputTextModule } from 'primeng/inputtext';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  exports: [
    InputTextModule,
    CarouselModule
  ]
})
export class PrimeNgModule { }
