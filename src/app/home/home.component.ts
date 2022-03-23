import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showChat: boolean = false;

  constructor() { }

  ngOnInit(): void {      
    document.getElementById('splash')!.remove();
  }

  chatEventHander($event: any) {
    this.showChat = true;
  }

}
