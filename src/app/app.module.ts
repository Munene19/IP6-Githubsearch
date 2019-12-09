import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpClient,HttpHeaders }from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile.service'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }from '@angular/forms';
import {DatecountPipe} from './datecount.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    DatecountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
