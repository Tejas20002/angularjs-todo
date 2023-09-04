import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './element/add/add.component';
import { ListComponent } from './element/list/list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoComponent } from './element/todo/todo.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './element/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListComponent,
    TodoComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }