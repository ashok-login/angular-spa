import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapPracticeComponent } from './bootstrap-practice/bootstrap-practice.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { EnableButtonComponent } from './enable-button/enable-button.component';
import { ClickExampleComponent } from './click-example/click-example.component';
import { InputEventDemoComponent } from './input-event-demo/input-event-demo.component';
import { StylesDmeoComponent } from './styles-dmeo/styles-dmeo.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { TemplateReferenceVariableComponent } from './template-reference-variable/template-reference-variable.component';
import { IfExampleComponent } from './if-example/if-example.component';
import { IfElseExampleComponent } from './if-else-example/if-else-example.component';
import { SwitchExampleComponent } from './switch-example/switch-example.component';
import { NgForExampleComponent } from './ng-for-example/ng-for-example.component';
import { AngularPipesComponent } from './angular-pipes/angular-pipes.component';
import { EmployeesReportComponent } from './employees-report/employees-report.component';
import { EmployeesReportType2Component } from './employees-report-type2/employees-report-type2.component';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapPracticeComponent,
    TwoWayDataBindingComponent,
    EnableButtonComponent,
    ClickExampleComponent,
    InputEventDemoComponent,
    StylesDmeoComponent,
    ClassBindingComponent,
    TemplateReferenceVariableComponent,
    IfExampleComponent,
    IfElseExampleComponent,
    SwitchExampleComponent,
    NgForExampleComponent,
    AngularPipesComponent,
    EmployeesReportComponent,
    EmployeesReportType2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
