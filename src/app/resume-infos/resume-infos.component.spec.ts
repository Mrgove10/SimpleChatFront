import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeInfosComponent } from './resume-infos.component';

describe('ResumeInfosComponent', () => {
  let component: ResumeInfosComponent;
  let fixture: ComponentFixture<ResumeInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
