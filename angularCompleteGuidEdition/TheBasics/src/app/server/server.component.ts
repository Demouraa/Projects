import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    id: number = 10;
    status: string = this.id < 8 ? 'offline' : 'online';

    getStatus() {
        return this.status
    }
}