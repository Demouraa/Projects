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
      font-size: 20px
    }
  `]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Teste';
  serverCreated: boolean = false;
  servers = ['TestServer', 'TestServer 2']

  constructor() { }

  ngOnInit(): void {
    this.metodo();
  }

  metodo() {
    setTimeout(() => { 
      this.allowNewServer = !this.allowNewServer;
    } , 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! The Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }


}
