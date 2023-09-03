import { NgModule } from '@angular/core';

import { InputTextModule } from 'primeng/inputtext';
import { CarouselModule } from 'primeng/carousel';
import { AccordionModule } from 'primeng/accordion';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { ButtonModule } from 'primeng/button';
import { ScrollPanelModule } from 'primeng/scrollpanel';


@NgModule({
  exports: [
    InputTextModule,
    CarouselModule,
    AccordionModule,
    VirtualScrollerModule,
    ButtonModule,
    ScrollPanelModule
  ]
})
export class PrimeNgModule { }
