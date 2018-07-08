import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng6MainComponent } from './components/ng6-main/ng6-main.component';
import { NewInNg6RoutingModule } from './new-in-ng6-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NewInNg6RoutingModule
  ],
  declarations: [Ng6MainComponent],
})
export class NewInNg6Module {
}
