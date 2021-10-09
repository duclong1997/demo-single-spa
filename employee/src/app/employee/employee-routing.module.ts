import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from '../layout/error/error.component';

const routes: Routes = [
  {
    path: '404',
    component: ErrorComponent,
  },
  {
    path: ':id',
    component: EmployeeDetailComponent,
  },
  {
    path: '',
    component: EmployeeListComponent,
  },
  // path not found
  {
    path: '**',
    redirectTo: '/employee/404',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
