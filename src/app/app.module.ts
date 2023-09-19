import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { CardProjectComponent } from './components/card-project/card-project.component';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';

import { FormsModule } from '@angular/forms';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardProjectComponent,
    TechStackComponent,

    SocialMediaComponent,
    
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, BrowserAnimationsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
