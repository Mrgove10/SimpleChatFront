import { TestBed, getTestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('ApiService', () => {
  let injector: TestBed;
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    injector = getTestBed();
    service = injector.get(ApiService);
    httpMock = injector.get(HttpTestingController);
  });


  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });

  it('should return an Observable<IUser[]>', () => {
    const serverUrl1 = 'http://127.0.0.1:2345';
    const serverUrl3 = 'http://127.0.0.1:4567';

    const dummyUsers = [
      {
        account: {
          id: 0,
          username: 'Test'
        },
        currentStatus: 'ACTIVE',
        server: 'http://127.0.0.1:1234'
      },
      {
        account: {
          id: 1,
          username: 'Test2'
        },
        currentStatus: 'ACTIVE',
        server: 'http://127.0.0.1:1234'
      }
    ];

    service.getUsers().forEach((value, index) => {
      value.subscribe((users) => {
        expect(users.length).toBe(2);
        expect(users).toEqual(dummyUsers);
      });
    });

    const req = httpMock.expectOne(`${serverUrl1}/users`);
    expect(req.request.method).toBe("GET");
    req.flush(dummyUsers);

    const req2 = httpMock.expectOne(`${serverUrl3}/users`);
    expect(req2.request.method).toBe("GET");
    req2.flush(dummyUsers);
  });

  it('should return an Observable<String[]>', () => {
    const serverUrl1 = 'http://127.0.0.1:2345';
    const serverUrl3 = 'http://127.0.0.1:4567';

    const dummyChatrooms1 = [
      'Chatroom1',
      'Chatroom2'
    ];

    const dummyChatrooms2 = [
      'Chatroom3'
    ]

    service.getChatrooms().forEach((value, index) => {
      value.subscribe((chatrooms) => {
        if(index == 0) {
          expect(chatrooms.length).toBe(2);
          expect(chatrooms).toEqual(dummyChatrooms1);
        }
        else if (index == 1) {
          expect(chatrooms.length).toBe(1);
          expect(chatrooms).toEqual(dummyChatrooms2);
        }
      });
    });

    const req = httpMock.expectOne(`${serverUrl1}/chatrooms`);
    expect(req.request.method).toBe("GET");
    req.flush(dummyChatrooms1);

    const req2 = httpMock.expectOne(`${serverUrl3}/chatrooms`);
    expect(req2.request.method).toBe("GET");
    req2.flush(dummyChatrooms2);
  });
});

