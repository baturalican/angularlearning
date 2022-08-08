import { Component, OnInit } from '@angular/core';
import { timestamp } from 'rxjs';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  isDisabled: boolean = true;
  serverCreationStatus = "";
  serverName: string = "";
  serverCreated: boolean = false;
  servers: string[] = [];
  logs: string[] = [];
  clickCount: number = 0;

  isTextVisible: boolean = false;
  secretText: string = "My secret text hehe :)";

  constructor() {
    setTimeout(() => {
      this.isDisabled = false;
    }, 2000);
   }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created! and Name is: " + this.serverName;
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  showParagraph() {
    this.isTextVisible = !this.isTextVisible;
    let dateTime = new Date();
    this.logs.push(dateTime.toLocaleDateString() + " " + dateTime.toLocaleTimeString());
    ++this.clickCount;
  }

  getNewColor() {
    if (this.clickCount === 5) {
      return "Blue";
    }
    return "White";
  }
}
