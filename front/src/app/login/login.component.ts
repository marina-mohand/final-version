import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ApiService } from '../api.service';
import { User } from '../models/User';
import { Router } from '@angular/router';
import { HomeStudentComponent } from '../home-student/home-student.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ApiService]
})
export class LoginComponent implements OnInit {
  mail='';
  password='';
  choice="";
  wrongCredentials=false;
  public user : User;
 
  constructor(private loginService: ApiService, private router: Router) {
    this.user = new User();
  }

  ngOnInit(): void {
    }
  
  a!: any;

  validateLogin() {
    if(this.user.mail && this.user.password ) {
      this.loginService.validateLogin(this.user).subscribe(result => {
      console.log('result is ', result);
      for (const [key, value] of Object.entries(result)) {
        for (const [keyZ, valueZ] of Object.entries(value)) {
          
          this.a = valueZ;
        }
      }
      
        if(result != null) {
          
          for (const [key, value] of Object.entries(this.a)) {
            
            
            sessionStorage.setItem(key, value as string);
            
          }
          if(sessionStorage.getItem('choice')=='oui'){this.router.navigate(['/homeTeacher']);
          }
          else {
            this.router.navigate(['/homeStudent']);
          }
          
          
        } else {
          alert('Wrong username password');
        }
    }, error => {
      console.log('error is ', error);
    });
    } else {
      alert('enter user name and password');
    }
  }

}
