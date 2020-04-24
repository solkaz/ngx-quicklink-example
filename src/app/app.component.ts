import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div style="height: 100vh">
      <router-outlet></router-outlet>
    </div>
    <div *ngFor="let link of links" class="link-container">
      <a [routerLink]="link">Go to {{ link }} page</a>
    </div>
  `,
  styles: [
    `
      .link-container {
        height: 500px;
      }
    `,
  ],
})
export class AppComponent {
  readonly links = ["foo", "bar", "baz"];
}
