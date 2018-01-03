import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilityConfigService } from './services/utility-config.service';
import { DragAndDropService } from './services/drag-and-drop.service';

import { ClickOutsideDirective } from './directives/click-outside.directive';

import { PixelConverterPipe } from './pipes/pixel-converter.pipe';
import { GlobalRefService } from './services/global-ref.service';

const DIRECTIVES = [
  ClickOutsideDirective
];

const PIPES = [
  PixelConverterPipe
];

const PROVIDERS = [
  DragAndDropService,
  GlobalRefService
];


/***
 * Module representing utility components.
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...DIRECTIVES,
    ...PIPES
  ],
  providers: [
    ...PROVIDERS
  ],
  exports: [
    ...DIRECTIVES,
    ...PIPES
  ]
})
export class UtilityModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UtilityModule,
      providers: [UtilityConfigService]
    };
  }
}