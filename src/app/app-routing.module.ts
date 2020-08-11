// Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
// Components
import { HomePageComponent } from './home-page/home-page.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: 'homePage', component: HomePageComponent },
  // { path: '', redirectTo: '/homePage', pathMatch: 'full' },
  { path: 'contactMe', component: ContactMeComponent },
  { path: 'Projects', component: ProjectsComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
