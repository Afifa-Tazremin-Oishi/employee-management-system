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
import { DepartmentListComponent } from './modules/department-list/department-list.component';
import { EditDesignationComponent } from './modules/edit-designation/edit-designation.component';
import { EditDepartmentComponent } from './modules/edit-department/edit-department.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { DesignationServiceComponent } from './modules/designation-entry/designation.service/designation.service.component';
// import { DesignationEntryFormComponent } from './modules/designation-entry-form/designation-entry-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentEntryComponent,
    DesignationEntryComponent,
    EmployeInfoComponent,
    DashboardComponent,
    NavComponent,
    DepartmentListComponent,
    EditDesignationComponent,
    EditDepartmentComponent,
    // DesignationServiceComponent,
    // DesignationEntryFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
