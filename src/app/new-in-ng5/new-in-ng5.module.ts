import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { Ng5MainComponent } from './components/ng5-main/ng5-main.component';
import { NewInNg5RoutingModule } from './new-in-ng5-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NewInNg5RoutingModule
  ],
  declarations: [Ng5MainComponent],
})
export class NewInNg5Module {
}
