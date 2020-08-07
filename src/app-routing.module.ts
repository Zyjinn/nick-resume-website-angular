import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Declare all routes (links)
const routes: Routes = [
  { path: '', redirectTo: '/homePage', pathMatch: 'full' },
  // { path: 'home-page', component: Home - pageComponent },
];

@NgModule({
  // configures where the routes are
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
