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
      {
        path: 'character-details/:id',
        loadChildren: () =>
        import('./pages/characters/character-details/character-details.module').then((m) => m.CharacterDetailsModule)
      },
      {
        path: 'character-list',
        loadChildren: () =>
        import('./pages/characters/character-list/character-list.module').then((m) => m.CharacterListModule)
      },
      {
        path: 'location',
        loadChildren: () =>
        import('./pages/location/location.module').then((m) => m.LocationModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestApiRoutingModule { }
