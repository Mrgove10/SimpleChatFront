import { Component, Input, OnInit } from '@angular/core';
import { ChatroomList } from '../classes/ChatoomList';
import { UserList } from '../classes/UserList';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public List: Array<any> = [];
  @Input() public type = '';

  constructor() { }

  ngOnInit() {
    switch (this.type) {
      case 'Users':
        for (let i = 0; i < 5; i++) {
          this.List.push(
            new UserList(`localhost:${i}`, `${i}`, `adrien${i}`, 'ACTIVE')
          );
        }
        break;
      case 'Chatrooms':
        for (let i = 0; i < 3; i++) {
          this.List.push(
            new ChatroomList(`localhost:${i}`, `chat${i}`)
          );
        }
        break;
      default:
        break;
    }
  }
}
