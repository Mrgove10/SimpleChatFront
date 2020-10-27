import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ResumeInfosComponent } from './resume-infos/resume-infos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ResumeInfosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
