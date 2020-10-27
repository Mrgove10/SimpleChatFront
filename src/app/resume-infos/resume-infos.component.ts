import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-infos',
  templateUrl: './resume-infos.component.html',
  styleUrls: ['./resume-infos.component.css']
})
export class ResumeInfosComponent implements OnInit {

  @Input() title: string; 
  @Input() number: number; 

  constructor() { }

  ngOnInit() {
  }

}
