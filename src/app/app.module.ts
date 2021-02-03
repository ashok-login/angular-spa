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
    IfElseExampleComponent
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
