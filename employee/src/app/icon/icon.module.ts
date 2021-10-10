import { IconDefinition } from '@ant-design/icons-angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  StepBackwardOutline,
  CaretLeftOutline,
  SettingOutline,
  VideoCameraOutline,
  StepForwardOutline,
  HighlightOutline,
  EnterOutline,
} from '@ant-design/icons-angular/icons';
import { NzIconModule } from 'ng-zorro-antd/icon';

// select icon dynamic need
const icons: IconDefinition[] = [
  StepBackwardOutline,
  CaretLeftOutline,
  SettingOutline,
  VideoCameraOutline,
  StepForwardOutline,
  HighlightOutline,
  EnterOutline,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, NzIconModule.forChild(icons)],
  exports: [NzIconModule],
})
export class IconModule {}
