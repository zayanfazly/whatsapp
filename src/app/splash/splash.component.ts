import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {

  constructor(private router: Router) { }

  progressValue: number = 0;
  curSec: number = 0;

  ngOnInit(): void {
    this.progressUpdate();
  }

  progressUpdate(){
    let timer$ = interval(250);
    const sub = timer$.subscribe((sec) => {
      this.progressValue = 0 + sec * 100 / 10;
      this.curSec = sec;
      if (this.curSec === 10) {
        sub.unsubscribe();
        this.router.navigate(['/home'])
      }
    });
  }

}
