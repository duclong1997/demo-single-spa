import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetUrlPipe } from './pipes/asset-url.pipe';

@NgModule({
  declarations: [AssetUrlPipe],
  imports: [CommonModule],
  exports: [AssetUrlPipe],
})
export class SharesModule {}
