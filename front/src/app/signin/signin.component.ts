import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  nom='';
  prenom='';
  mail='';
  password='';
  choice=false;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
    }
  
    

  registerUser(user: any) {
      this.apiService.registerUser(user);
  }  
}
