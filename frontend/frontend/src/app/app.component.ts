import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <h2 class="text-3xl">{{ title }}</h2>
    <p>Two plus two = {{ 2 + 2 }}</p>
  `,
  styles: [],
})
export class AppComponent {
  title = "Linked Out Starter";
}
