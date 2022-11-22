import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FindResultComponent } from './student/find-result/find-result.component';
import { ShowResultComponent } from './student/show-result/show-result.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddResultComponent } from './teacher/add-result/add-result.component';
import {HttpClientModule} from "@angular/common/http";
import { EditResultComponent } from './teacher/edit-result/edit-result.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TeacherComponent,
    StudentComponent,
    HomeComponent,
    FindResultComponent,
    ShowResultComponent,
    AddResultComponent,
    EditResultComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
