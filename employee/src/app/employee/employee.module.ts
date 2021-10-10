import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutModule } from '../layout/layout.module';
import { SharesModule } from './../shares/shares.module';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeRoutingModule } from './employee-routing.module';

@NgModule({
  declarations: [EmployeeListComponent, EmployeeDetailComponent],
  imports: [CommonModule, EmployeeRoutingModule, SharesModule, LayoutModule],
})
export class EmployeeModule {}
