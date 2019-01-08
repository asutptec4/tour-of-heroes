import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppFormsRoutingModule } from './app-forms-routing.module';
import { AddHeroComponent } from './add-hero/add-hero.component';

@NgModule({
  declarations: [AddHeroComponent],
  imports: [
    CommonModule,
    AppFormsRoutingModule
  ]
})
export class AppFormsModule { }
