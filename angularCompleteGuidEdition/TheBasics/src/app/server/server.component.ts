import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
        color: white;
        }`]
})
export class ServerComponent {
    id: number = 10;
    status: string = this.id < 8 ? 'offline' : 'online';

    constructor() {
        this.status = Math.random() > 0.5 ? 'online': 'offline';
    }

    getStatus() {
        return this.status
    }

    getColor() {
        return this.status === 'online' ? 'green' : 'red';
    }
}