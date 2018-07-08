import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemosMainComponent } from './components/demos-main/demos-main.component';
import { TodosComponent } from './components/todos/todos.component';
import { AttributeDirectivesComponent } from './components/attribute-directives/attribute-directives.component';
import { StructuralDirectivesComponent } from './components/structural-directives/structural-directives.component';
import { UpdateOnComponent } from './components/update-on/update-on.component';
import { PerformanceAComponent } from './components/performance-a/performance-a.component';
import { PerformanceBComponent } from './components/performance-b/performance-b.component';
import { ControlValueAccessorDemoComponent } from './components/control-value-accessor-demo/control-value-accessor-demo.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: DemosMainComponent
  },
  {
    path: 'todos',
    component: TodosComponent
  },
  {
    path: 'attribute-directives',
    component: AttributeDirectivesComponent
  },
  {
    path: 'structural-directives',
    component: StructuralDirectivesComponent
  },
  {
    path: 'update-on',
    component: UpdateOnComponent
  },
  {
    path: 'performance/1',
    component: PerformanceAComponent
  },
  {
    path: 'performance/2',
    component: PerformanceBComponent
  },
  {
    path: 'control-value-accessor-demo',
    component: ControlValueAccessorDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DemosRoutingModule {
}
