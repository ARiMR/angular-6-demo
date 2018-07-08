import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'newInNg5',
    pathMatch: 'prefix',
    loadChildren: './new-in-ng5/new-in-ng5.module#NewInNg5Module'
  },
  {
    path: 'newInNg6',
    pathMatch: 'prefix',
    loadChildren: './new-in-ng6/new-in-ng6.module#NewInNg6Module'
  },
  {
    path: 'demos',
    pathMatch: 'prefix',
    loadChildren: './demos/demos.module#DemosModule'
  },
  {
    path: '**',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
