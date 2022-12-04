import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import {  Router } from '@angular/router';
import { User } from './models/User';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  constructor(public htpp:HttpClient,private router:Router ) { }

  registerUser(user:any){
    this.htpp.post('http://localhost:3000/signin', user).subscribe(res =>{
      console.log(res);
    })

    this.router.navigate(['/login'])
  }

  validateLogin(user: any){
    return this.htpp.post('http://localhost:3000/login',{
        mail : user.mail,
        password : user.password
    })
  }
  updateUser(user:User, id:String){
    this.htpp.put('http://localhost:3000/profil/'+id, user).subscribe(res =>{
      console.log(res);
    });
    if(sessionStorage.getItem('choice')=="non") this.router.navigate(['/homeStudent'])
    else this.router.navigate(['/homeTeacher'])
    
  }
}
