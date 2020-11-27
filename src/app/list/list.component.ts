import { Component, Input, OnInit } from '@angular/core';
import { IChatrooms } from '../interfaces/IChatrooms';
import { IUser } from '../interfaces/IUser';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() items: IChatrooms | IUser;
  @Input() title: string;

  constructor() {}

  ngOnInit() {}
}
