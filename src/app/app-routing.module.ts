// Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
// Components
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: 'homePage', component: HomePageComponent },
  { path: '', redirectTo: '/homePage', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
