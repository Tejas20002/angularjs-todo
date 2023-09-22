import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './element/add/add.component';
import { ListComponent } from './element/list/list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoComponent } from './element/todo/todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './element/about/about.component';
import { EditComponent } from './element/edit/edit.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DocsModule } from './docs/docs.module';
import { StoreModule } from '@ngrx/store';
import { LoginComponent } from './element/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListComponent,
    TodoComponent,
    AboutComponent,
    EditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    DocsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
