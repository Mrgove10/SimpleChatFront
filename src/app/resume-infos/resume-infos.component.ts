import { Component, Input, OnInit } from '@angular/core';
import { IServerInfosList } from '../interfaces/IServerInfosList'

@Component({
  selector: 'app-resume-infos',
  templateUrl: './resume-infos.component.html',
  styleUrls: ['./resume-infos.component.css']
})
export class ResumeInfosComponent implements OnInit {

  @Input() item: IServerInfosList;

  constructor() {
  }

  ngOnInit() {
  }

}
