import { Component, OnInit } from '@angular/core';
import { CounterService } from '@shared';

@Component({
  selector: 'app-counter',
  templateUrl: './page-1.component.html',
  styles: [
  ]
})
export class Page1Component implements OnInit {
  public count = 0;

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    const count = this.counterService.getCount();
    this.count = count;
  }

  increment(): void {
    this.counterService.increase();
    this.count = this.counterService.getCount();
  }
}
