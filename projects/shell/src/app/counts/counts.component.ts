import { Component, OnInit } from '@angular/core';
import { CounterService, HelloService } from '@shared';

@Component({
  selector: 'app-counter',
  templateUrl: './counts.component.html',
  styles: [
  ]
})
export class CountsComponent implements OnInit {
  public count: number = 0;

  constructor(private counterService: CounterService) { }

  public ngOnInit(): void {
    this.count = this.counterService.getCount();
  }

  public increase() {
    this.counterService.increase();
    this.count = this.counterService.getCount();
  }

  public decrease() {
    this.counterService.decrease();
    this.count = this.counterService.getCount();
  }
}
