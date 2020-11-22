import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ResumeInfosComponent } from './resume-infos/resume-infos.component';
import { ListComponent } from './list/list.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ResumeInfosComponent,
        ListComponent
      ],
      imports: [ HttpClientTestingModule ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'SimpleChatFront'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('SimpleChatFront');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('#title').textContent).toContain('SimpleChat Dashboard ');
  // });
});
