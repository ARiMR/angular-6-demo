import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ng6MainComponent } from './components/ng6-main/ng6-main.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: Ng6MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class NewInNg6RoutingModule {
}
