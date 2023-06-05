import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class HelloService {
  constructor() {}

  public getHello() {
    return "Hello from shared!";
  }
}
