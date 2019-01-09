import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddHeroComponent } from './add-hero/add-hero.component';
import { EditHeroComponent } from './edit-hero/edit-hero.component';

const routes: Routes = [
  { path: '', component: AddHeroComponent },
  { path: ':id', component: EditHeroComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppFormsRoutingModule { }
