import { HttpClient, HttpClientModule } from "@angular/common/http";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { LogsService } from "./logs.service"


describe('LogsService', () => {
    let service: LogsService;
    let httpClient: HttpClient;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports:[HttpClientTestingModule]
      });
      service = TestBed.inject(LogsService);
      httpClient = TestBed.inject(HttpClient);
    });
  
    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('Should Call Get Audits API', () => {
      spyOn(httpClient, 'get').and.returnValue( of ([]));
      service.getLogs();
      expect(service.getLogs()).toBeTruthy();
      expect(httpClient.get).toHaveBeenCalled();
    });
  });