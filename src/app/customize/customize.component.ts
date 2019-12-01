import { Component, OnInit } from '@angular/core';
import { User } from '../shared/_models/user.model';
import { AuthenticationService } from 'src/app/auth/_services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.scss']
})
export class CustomizeComponent implements OnInit {

  currentUser: User;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() { }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
