import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent implements OnInit {

  locations: string[] = [];

  constructor() { }

  ngOnInit() {
    this.locations = [ 'greece', 'rome', 'belize', 'swazi', 'europe', 'somewhere'];
  }

  showTripBlog(trip: string) {
    // we want to use css transition to enlarge this circle and
    // change the border-radius to turn it from a cirle into a a square border
    // and we will fill this with the blog posts... the inner blog posts
    // will have to grow at the same speed as the circle so they don't show over
    // ... we could also use overflow: hidden for this....
    console.log(trip);
  }

}
