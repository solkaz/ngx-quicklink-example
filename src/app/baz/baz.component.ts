import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baz',
  template: `
    <p>
      baz works!
    </p>
  `,
  styles: [
  ]
})
export class BazComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
