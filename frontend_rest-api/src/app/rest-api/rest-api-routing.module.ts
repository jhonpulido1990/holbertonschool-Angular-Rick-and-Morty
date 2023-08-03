import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestApiComponent } from './rest-api.component';

const routes: Routes = [
  {
    path: '',
    component: RestApiComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
        import('./pages/home/home.module').then((m) => m.HomeModule)
      },
      {
        path: 'character',
        loadChildren: () =>
        import('./pages/character/character.module').then((m) => m.CharacterModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestApiRoutingModule { }
