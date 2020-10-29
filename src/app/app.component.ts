import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IChatrooms } from './interfaces/IChatrooms';
import { IServerInfosList } from './interfaces/IServerInfosList';
import { IUser } from './interfaces/IUser';
import { ApiService } from './services/api.service';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'SimpleChatFront';
  usersList: IUser[] = new Array();
  chatroomsList: IChatrooms[] = new Array();
  private serversList: string[] = [
    'http://127.0.0.1:2345',
    'http://127.0.0.1:3456',
    'htpp://127.0.0.1:4567'
  ];

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {

    this.getUsers();
    this.getChatrooms();
    console.log(this.usersList);

    // RIP, using Jquery in angular
    $('#menu-toggle').click((e) => {
      e.preventDefault();
      $('#wrapper').toggleClass('toggled');
    });
  }

  getUsers(): void {
    this.apiService.getUsers().forEach((value, index) => {
      value.subscribe(users => {
        console.log(users);
        users.forEach(user => {
          user.server = this.serversList[index];
          this.usersList.push(user);
        });
      });
    });
  }

  getChatrooms(): void {
    this.apiService.getChatrooms().forEach((value, index) => {
      value.subscribe(chatrooms => {
        console.log(chatrooms);
        chatrooms.forEach(CR => {
          const chatroom: IChatrooms = {
            name: CR,
            server: this.serversList[index]
          };
          this.chatroomsList.push(chatroom);
        });
      });
    });
  }
}
