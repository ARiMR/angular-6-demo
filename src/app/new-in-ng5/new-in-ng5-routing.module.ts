import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ng5MainComponent } from './components/ng5-main/ng5-main.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: Ng5MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class NewInNg5RoutingModule {
}
