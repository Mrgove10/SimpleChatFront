import { Component, DoCheck, Input, IterableDiffers, OnInit } from '@angular/core';
import { IChatrooms } from '../interfaces/IChatrooms';
import { IUser } from '../interfaces/IUser';

@Component({
  selector: 'app-resume-infos',
  templateUrl: './resume-infos.component.html',
  styleUrls: ['./resume-infos.component.css']
})
export class ResumeInfosComponent implements OnInit, DoCheck {

  private uniqueServersList: string[] = new Array();
  private iterableDiffer: any;

  @Input() name: string;
  @Input() item: IChatrooms | IUser;

  constructor(private iterableDiffers: IterableDiffers) {
    this.iterableDiffer = iterableDiffers.find([]).create(null);
  }

  ngDoCheck() {
    const changes = this.iterableDiffer.diff(this.item);
    if (changes) {
      this.getUniqueServersList(changes.collection);
    }
  }

  ngOnInit() {
  }

  getUniqueServersList(items: any[]) {
    this.uniqueServersList = [...new Set(items.map(item => item.server))];
  }

}
