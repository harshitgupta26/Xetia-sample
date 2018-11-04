import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule, MatDatepickerModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule, MatNativeDateModule, MatSelectModule, MatSnackBarModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {ServerService} from './serveices/server.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { NewcourseComponent } from './newcourse/newcourse.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule} from '@angular/router';
import {myroute} from './routes';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HeaderComponent,
    NewcourseComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(myroute),
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatSnackBarModule,
    MatIconModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
