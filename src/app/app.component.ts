import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zoeyproject';

  tabClick(e) {
    // Show p5 drawing when navigating to architecture page where it's located
    if (e.tab.textLabel === 'Architecture') {
      document.getElementById('defaultCanvas0').style.visibility = 'visible';
    }
  }
}
