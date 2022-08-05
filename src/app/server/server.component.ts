import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverName: string = "My Funny Server";
  serverID: number = 12;
  serverStatus: string = "Offline";
  
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? "Online" : "Offline"
   }

  ngOnInit(): void {
  }

  getColor() {
    return this.serverStatus === "Online" ? "Green" : "Red";
  }
}
