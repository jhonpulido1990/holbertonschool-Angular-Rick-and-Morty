import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { MatCardModule } from '@angular/material/card';
import { ContentCardComponent } from './content-card/content-card.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
  declarations: [CardComponent, ContentCardComponent],
  imports: [CommonModule, MatCardModule, PrimeNgModule],
  exports: [CardComponent, ContentCardComponent],
})
export class SharedModule {}
