import { Component, Input, IterableDiffers, OnInit } from '@angular/core';
import { IUser } from '../interfaces/IUser';

@Component({
  selector: 'app-resume-infos',
  templateUrl: './resume-infos.component.html',
  styleUrls: ['./resume-infos.component.css']
})
export class ResumeInfosComponent implements OnInit {

  private uniqueServersList: string[] = new Array();
  private iterableDiffer: any;

  @Input() name: string;
  @Input() item: any;

  constructor(private iterableDiffers: IterableDiffers) {
    this.iterableDiffer = iterableDiffers.find([]).create(null);
  }

  ngDoCheck() {
    let changes = this.iterableDiffer.diff(this.item);
    if (changes) {
      this.getUniqueServersList(changes.collection)
    }
  }

  ngOnInit() {
    //console.log(this.item.filter((v, i, a) => a.indexOf(v.server) === i))
  }

  getUniqueServersList(items: any[]) {
    this.uniqueServersList = [...new Set(items.map(item => item.server))]
  }

}
