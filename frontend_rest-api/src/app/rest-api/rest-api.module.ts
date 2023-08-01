import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestApiRoutingModule } from './rest-api-routing.module';
import { RestApiComponent } from './rest-api.component';
import { LayoutModule } from './layout/layout.module';


@NgModule({
  declarations: [
    RestApiComponent
  ],
  imports: [
    CommonModule,
    RestApiRoutingModule,
    LayoutModule
  ]
})
export class RestApiModule { }
