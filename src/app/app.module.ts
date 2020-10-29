// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
// Components
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { HireMeComponent } from './hire-me/hire-me.component';
import { ConnectionService } from './connection.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactMeComponent,
    ProjectsComponent,
    HireMeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    ConnectionService,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
