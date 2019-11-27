import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild} from '@angular/core';
import * as p5 from 'p5';
import { ElementFinder } from 'protractor';

@Component({
  selector: 'app-architecture',
  templateUrl: './architecture.component.html',
  styleUrls: ['./architecture.component.scss']
})
export class ArchitectureComponent implements OnInit, AfterViewInit, OnDestroy {

  private p5;
  @ViewChild('analog', {static: false}) analog: ElementFinder;

  constructor() {
    window.onresize = this.onWindowResize;
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const analog = this.analog.nativeElement;
    console.log(analog);
    this.createCanvas(analog);
  }

  ngOnDestroy(): void {
    this.destroyCanvas();
  }

  onWindowResize = (e) => {
    this.p5.resizeCanvas(this.p5.windowWidth, this.p5.windowHeight);
  }

  createCanvas() {
    this.p5 = new p5(this.drawing);
  }

  destroyCanvas() {
    this.p5.noCanvas();
  }

  private drawing = (p: any) => {
    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight).parent(this.analog.nativeElement);
      p.angleMode(p.DEGREES);
      p.rectMode(p.CENTER);
      p.background(0);
    };
    p.center = { x: 0, y: 0 };
    p.draw = () => {

      p.background(0);
      p.center.x = p.width / 2;
      p.center.y = p.height / 2;

      let hr = p.hour();
      let mn = p.minute();
      let sc = p.second();
      let ms = p.millis();

      p.push();

      p.translate(p.center.x, p.center.y);
      p.rotate(-90);

      p.strokeWeight(8);
      p.noFill();

      // dail
      p.stroke(175);
      p.arc(0, 0, 210, 210, 0, 360);



      // second
      let sc_end = p.map(sc % 60, 0, 60, 0, 360);

      p.push();
      p.rotate(sc_end);
      p.stroke(255, 0, 0);
      p.line(0, 0, 90, 0);
      p.pop();


      // minute
      let mn_end = p.map(mn % 60, 0, 60, 0, 360);
      p.push();
      p.rotate(mn_end);
      p.stroke(0, 230, 0);
      p.line(0, 0, 70, 0);
      p.pop();


      // hour
      let hr_end = p.map(hr % 12, 0, 12, 0, 360);
      p.push();
      p.rotate(hr_end);
      p.stroke(0, 0, 230);
      p.line(0, 0, 50, 0);
      p.pop();


      // center
      p.fill(255);
      p.noStroke();
      p.ellipse(0, 0, 8, 8);

      p.pop();


      let clock = hr + ':' + mn + ':' + sc;
      p.fill(255);
      p.noStroke();
      p.textSize(14);
      p.text(clock, 100, 50);
    };
  };

}
