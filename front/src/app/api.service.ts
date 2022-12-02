import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import {  Router } from '@angular/router';
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
}
