import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IServerInfosList } from './interfaces/IServerInfosList'
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
  usersList: Array<IUser[]> = new Array()

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {

    this.getUsers()
    console.log(this.usersList)

    // RIP, using Jquery in angular
    $('#menu-toggle').click((e) => {
      e.preventDefault();
      $('#wrapper').toggleClass('toggled');
    });
  }

  getUsers(): void {
    this.apiService.getUsers().forEach((value) => {
      value.subscribe(users => this.usersList.push(users))
    })
  }
}
