import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeesComponent } from './employees/employees.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  }
  ,
  {
    path: 'employees',
    component: EmployeesComponent,
    pathMatch: 'full'
  }
  ,
  {
    path: 'employeesDetails',
    component: EmployeeDetailsComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
