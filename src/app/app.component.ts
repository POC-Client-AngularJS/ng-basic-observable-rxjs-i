import { Component } from "@angular/core";
import { timer } from "rxjs";

const source = timer(1000, 2000);
const subscribe = source.subscribe(val => console.log(val));
setTimeout(() => {
  subscribe.unsubscribe();
}, 10000);

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
}
