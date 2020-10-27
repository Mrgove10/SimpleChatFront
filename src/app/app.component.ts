import { Component, OnInit } from '@angular/core';
import { IServerInfosList } from './interfaces/IServerInfosList';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'SimpleChatFront';
  serverInfosList: Array<IServerInfosList> = new Array();

  constructor() {
    this.serverInfosList.push({
      name: 'Active users',
      numberOfItem: 1,
      serverList: ['http://localhost:2222', 'http://localhost:2223']
    });

    this.serverInfosList.push({
      name: 'Chatrooms',
      numberOfItem: 2,
      serverList: ['http://localhost:2222', 'http://localhost:2223']
    });
  }

  ngOnInit() {
    // RIP, using Jquery in angular
    $('#menu-toggle').click((e) => {
      e.preventDefault();
      $('#wrapper').toggleClass('toggled');
    });
  }
}
