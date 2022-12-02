import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component'
import { HomeTeacherComponent } from './home-teacher/home-teacher.component';
import { HomeStudentComponent } from './home-student/home-student.component';
import{RouterModule} from '@angular/router';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {ApiService} from './api.service';
import { LessonsService } from './lessons.service';
import { EditlessonComponent } from './editlesson/editlesson.component';
import { HeaderstudentComponent } from './headerstudent/headerstudent.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ViewLessonComponent } from './view-lesson/view-lesson.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SigninComponent,
    HomeTeacherComponent,
    HomeStudentComponent,
    EditlessonComponent,
    HeaderstudentComponent,
    HomeComponent,
    LogoutComponent,
    MyProfileComponent,
    ViewLessonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatRadioModule, 
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    HttpClientModule,
    RouterModule,
    MatCheckboxModule
  ],
  providers: [ApiService,
    LessonsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
