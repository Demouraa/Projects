import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `
  // <app-server class="t"></app-server>
  // <app-server></app-server>
  // <p class="t">Teste</p>
  // `,
  templateUrl: './servers.component.html',
  styles: [`
    .t {
      color: blue;
    }
    p {
      font-size: 50px
    }
  `]
})
export class ServersComponent implements OnInit {
  AllowNewServer = false;

  constructor() { }

  ngOnInit(): void {
  }

}
