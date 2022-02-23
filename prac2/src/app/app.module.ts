import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { AboutComponent } from './about/about.component';
import { ApphightDirective } from './apphight.directive';
import { GooglePayButtonModule } from '@google-pay/button-angular';
@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    AboutComponent,
    ApphightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GooglePayButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
