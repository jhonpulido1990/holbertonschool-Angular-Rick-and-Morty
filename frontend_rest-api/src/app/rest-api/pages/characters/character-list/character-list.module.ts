import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';

import { CharacterListRoutingModule } from './character-list-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CharacterListRoutingModule,
    PrimeNgModule
  ]
})
export class CharacterListModule { }
