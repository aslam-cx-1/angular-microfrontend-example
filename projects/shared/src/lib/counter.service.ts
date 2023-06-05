import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private count: number = 0;

  constructor() { }

  public getCount(): number {
    return this.count;
  }

  public increase() {
    this.count++;
  }

  public decrease() {
    if (this.count === 0) {
      this.count = 0;
      return;
    }
    this.count--;
  }
}

