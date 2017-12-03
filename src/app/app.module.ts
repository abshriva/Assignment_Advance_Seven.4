import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { BasicHighlightDirectiveDirective } from './directives/basic-highlight-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    BasicHighlightDirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
