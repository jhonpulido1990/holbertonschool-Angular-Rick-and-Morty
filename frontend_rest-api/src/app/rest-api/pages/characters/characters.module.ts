import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';



@NgModule({
  declarations: [CharacterDetailsComponent, CharacterListComponent,],
  imports: [
    CommonModule,RouterModule, SharedModule, PrimeNgModule
  ],
  exports: [CharacterDetailsComponent, CharacterListComponent]
})
export class CharactersModule { }
