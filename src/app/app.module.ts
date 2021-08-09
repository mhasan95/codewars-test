import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodingchallengesComponent } from './codingchallenges/codingchallenges.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';


@NgModule({
  declarations: [
    AppComponent,
    CodingchallengesComponent,
    ReactiveformsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
