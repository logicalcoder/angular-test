import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserApiService } from './user-api.service';

describe('UserApiService', () => {
  let service: UserApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [
        { provide: HttpClient, useValue: {} }
      ]
    })

    service = TestBed.get(UserApiService);
    httpMock = TestBed.get(HttpTestingController);
  
  });

  // it('should be created', () => {
  //   const service: UserApiService = TestBed.get(UserApiService);
  //   expect(service).toBeTruthy();
  // });
});
