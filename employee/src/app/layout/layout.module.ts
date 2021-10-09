import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error/error.component';
import { SharesModule } from '../shares/shares.module';

@NgModule({
  declarations: [ErrorComponent],
  imports: [CommonModule, SharesModule],
  exports: [ErrorComponent],
})
export class LayoutModule {}
