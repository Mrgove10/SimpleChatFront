import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public List: Array<any> = [];

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 5; i++) {
      this.List.push({
        coucou: i
      });
    }
  }
}
