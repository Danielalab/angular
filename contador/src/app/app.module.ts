import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PapaComponent } from './components/papa/papa.component';
import { HijoComponent } from './components/hijo/hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    PapaComponent,
    HijoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
