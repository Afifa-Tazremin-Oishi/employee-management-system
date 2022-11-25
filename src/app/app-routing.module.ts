import { DepartmentListComponent } from './modules/department-list/department-list.component';
import { EmployeInfoComponent } from './modules/employe-info/employe-info.component';
import { DesignationEntryComponent } from './modules/designation-entry/designation-entry.component';
import { DepartmentEntryComponent } from './modules/department-entry/department-entry.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'dept-entry',
    component: DepartmentEntryComponent
  },
  {
    path: '1/dept-entry',
    component: DepartmentEntryComponent
  },
  {
    path: '2',
    component: DesignationEntryComponent
  },
  {
    path: '3',
    component: EmployeInfoComponent
  },
  {
    path: '1',
    component: DepartmentListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
