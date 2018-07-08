import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemosMainComponent } from './components/demos-main/demos-main.component';
import { SharedModule } from '../shared/shared.module';
import { DemosRoutingModule } from './demos-routing.module';
import { TodosComponent } from './components/todos/todos.component';
import { AttributeDirectivesComponent } from './components/attribute-directives/attribute-directives.component';
import { BorderedDirective } from './directives/bordered.directive';
import { CustomBorderDirective } from './directives/custom-border.directive';
import { CounterComponent } from './components/counter/counter.component';
import { CounterIncrementDirective } from './directives/counter-increment.directive';
import { StructuralDirectivesComponent } from './components/structural-directives/structural-directives.component';
import { IfNotDirective } from './directives/if-not.directive';
import { TimesDirective } from './directives/times.directive';
import { UpdateOnComponent } from './components/update-on/update-on.component';
import { PerformanceAComponent } from './components/performance-a/performance-a.component';
import { PerformanceBComponent } from './components/performance-b/performance-b.component';
import { ColorNamePipe } from './pipes/color-name.pipe';
import { ControlValueAccessorDemoComponent } from './components/control-value-accessor-demo/control-value-accessor-demo.component';
import { SimpleInputWrapperComponent } from './components/simple-input-wrapper/simple-input-wrapper.component';
import { ComplexEditorComponent } from './components/complex-editor/complex-editor.component';
import { CounterDecrementDirective } from './directives/counter-decrement.directive';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DemosRoutingModule,
  ],
  declarations: [
    DemosMainComponent,
    TodosComponent,
    AttributeDirectivesComponent,
    BorderedDirective,
    CustomBorderDirective,
    CounterComponent,
    CounterIncrementDirective,
    CounterDecrementDirective,
    StructuralDirectivesComponent,
    IfNotDirective,
    TimesDirective,
    UpdateOnComponent,
    PerformanceAComponent,
    PerformanceBComponent,
    ColorNamePipe,
    ControlValueAccessorDemoComponent,
    SimpleInputWrapperComponent,
    ComplexEditorComponent
  ]
})
export class DemosModule {
}
