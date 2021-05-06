import { HttpClient, HttpClientModule } from "@angular/common/http";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { LogsService } from "./logs.service"
import { TrendsService } from "./trends.service";


describe('TrendsService', () => {
    let service: TrendsService;
    let httpClient: HttpClient;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports:[HttpClientTestingModule]
      });
      service = TestBed.inject(TrendsService);
      httpClient = TestBed.inject(HttpClient);
    });
  
    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('Should Call Get Yearwise Trends API', () => {
      spyOn(httpClient, 'get').and.returnValue( of ([]));
      service.getTrendsCount("skills");
      expect(service.getTrendsCount("skills")).toBeTruthy();
      expect(httpClient.get).toHaveBeenCalled();
    });
  });