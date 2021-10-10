import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { IconModule } from '../icon/icon.module';
import { AssetUrlPipe } from './pipes/asset-url.pipe';
@NgModule({
  declarations: [AssetUrlPipe],
  imports: [CommonModule, IconModule],
  exports: [
    AssetUrlPipe,
    NzButtonModule,
    NzTypographyModule,
    NzIconModule,
    NzGridModule,
    IconModule,
  ],
})
export class SharesModule {}
