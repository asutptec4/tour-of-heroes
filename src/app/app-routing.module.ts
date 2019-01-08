import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditHeroComponent } from './edit-hero/edit-hero.component';
import { AddHeroComponent } from './add-hero/add-hero.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'add', component: AddHeroComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: EditHeroComponent },
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
