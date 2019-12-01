import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './auth/_services/authentication.service';
import { User } from '@models//user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zoeyproject';
  constructor() {
  }

}
