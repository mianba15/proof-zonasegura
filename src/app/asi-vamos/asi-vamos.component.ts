import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asi-vamos',
  templateUrl: './asi-vamos.component.html',
  styleUrls: ['./asi-vamos.component.css'],
})
export class AsiVamosComponent implements OnInit {
  progress = 0;
  constructor() {
    setInterval(() => {
      if (this.progress < 50) {
        this.progress = this.progress + 1;
      } else {
        this.progress = 0;
      }
    }, 100);
  }
  ngOnInit(): void {}
}