import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentEntryComponent } from './modules/department-entry/department-entry.component';
import { DesignationEntryComponent } from './modules/designation-entry/designation-entry.component';
import { EmployeInfoComponent } from './modules/employe-info/employe-info.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { NavComponent } from './modules/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentEntryComponent,
    DesignationEntryComponent,
    EmployeInfoComponent,
    DashboardComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
