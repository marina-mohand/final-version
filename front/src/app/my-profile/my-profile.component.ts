import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { TeacherLesson } from '../models/teacher-lesson';
import { User } from '../models/User';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  user!:User;
  mail="";
  password="";
  nom="";
  prenom="";
  choice="";

  constructor( private router:Router, public loginService:ApiService) { }

  ngOnInit(): void {
  }

  onSubmit(user:User) {
    this.loginService.updateUser(user, sessionStorage.getItem('_id') as string);
    this.router.navigate(['/homeTeacher'])
  }

  getId(){
    return sessionStorage.getItem('_id')
  }

}
