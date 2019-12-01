import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/_services/user.service';
import { User } from '../../shared/_models/user.model';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading = false;
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loading = true;
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.loading = false;
      this.users = users;
    });
  }

  tabClick(e) {
    // Show p5 drawing when navigating to architecture page where it's located
    if (e.tab.textLabel === 'Architecture') {
      document.getElementById('defaultCanvas0').style.visibility = 'visible';
    }
  }
}
