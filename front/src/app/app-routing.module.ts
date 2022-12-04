import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditlessonComponent } from './editlesson/editlesson.component';
import { HomeStudentComponent } from './home-student/home-student.component';
import { HomeTeacherComponent } from './home-teacher/home-teacher.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { LogoutComponent } from './logout/logout.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ViewLessonComponent } from './view-lesson/view-lesson.component';

const routes: Routes = [
  { path:'', component:HomeComponent},
  { path:'signin', component:SigninComponent},
  { path:'login', component:LoginComponent},
  { path:'homeTeacher', component:HomeTeacherComponent},
  { path:'homeStudent', component:HomeStudentComponent},
  { path:'edit-lesson/:id', component:EditlessonComponent},
  { path:'logout', component:LogoutComponent},
  {path:'profil/:id', component:MyProfileComponent},
  {path:'viewLesson/:id', component:ViewLessonComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
