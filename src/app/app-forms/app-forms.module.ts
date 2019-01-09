import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppFormsRoutingModule } from './app-forms-routing.module';
import { AddHeroComponent } from './add-hero/add-hero.component';
import { EditHeroComponent } from './edit-hero/edit-hero.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddHeroComponent, EditHeroComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppFormsRoutingModule
  ]
})
export class AppFormsModule { }
