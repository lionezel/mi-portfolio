import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { CardProjectComponent } from './components/card-project/card-project.component';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';
import { AboutComponent } from './components/about/about.component';
import { FormsModule } from '@angular/forms';
import { SocialMediaComponent } from './components/social-media/social-media.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardProjectComponent,
    TechStackComponent,
    AboutComponent,
    SocialMediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
