import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ApiService]
})
export class LoginComponent implements OnInit {
  mail='';
  password='';
  wrongCredentials=false;
  public user : User;
 
  constructor(private loginService: ApiService, private router: Router) {
    this.user = new User();
  }

  ngOnInit(): void {
    }
  
  a!: any;

  validateLogin() {
    console.log('1')
    if(this.user.mail && this.user.password ) {
      console.log('2')
      this.loginService.validateLogin(this.user).subscribe(
        
        result => {
          console.log('3');
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
        })
    } else {
      alert('enter user name and password');
    }
  }

}
