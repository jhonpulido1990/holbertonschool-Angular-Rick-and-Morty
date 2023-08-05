import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { CharacterComponent } from './character.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { CharactersModule } from '../characters/characters.module';

@NgModule({
  declarations: [CharacterComponent],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    SharedModule,
    CharactersModule
  ]
})
export class CharacterModule { }
