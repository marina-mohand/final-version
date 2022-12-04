import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user = new User();

  constructor( private router:Router) { }

  ngOnInit(): void {
    this.user.id = sessionStorage.getItem('_id') as string;
  }

  profilredirect(){
    this.router.navigate(['profil']);
  }
}
