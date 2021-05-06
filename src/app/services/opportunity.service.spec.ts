import { HttpClient, HttpClientModule } from "@angular/common/http";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { Opportunity } from "../models/opportunity.model";
import { OpportunityService } from "./opportunity.service";


describe('OpportunityService', () => {
    let service: OpportunityService;
    let httpClient: HttpClient;
    let opportunity: Opportunity = <Opportunity>{};
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports:[HttpClientTestingModule]
      });
      service = TestBed.inject(OpportunityService);
      httpClient = TestBed.inject(HttpClient);
    });
  
    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('Should Call Get Active Opportunities API', () => {
      spyOn(httpClient, 'get').and.returnValue( of ([]));
      service.getOpportunity()
      expect(service.getOpportunity()).toBeTruthy();
      expect(httpClient.get).toHaveBeenCalled();
    });

    it('Should Call Get All Opportunities API', () => {
        spyOn(httpClient, 'get').and.returnValue( of ([]));
        service.getAllOpportunity()
        expect(service.getAllOpportunity()).toBeTruthy();
        expect(httpClient.get).toHaveBeenCalled();
      });

      it('Should Call Delete Opportunities API', () => {
        spyOn(httpClient, 'delete').and.returnValue( of ([]));
        service.deleteOpportunity(1,"10023")
        expect(service.deleteOpportunity(1,"10023")).toBeTruthy();
        expect(httpClient.delete).toHaveBeenCalled();
      });


      it('Should Call Deactivate Opportunities API', () => {
        spyOn(httpClient, 'post').and.returnValue( of ([]));
        service.deactivateOpportunity(1,"10023")
        expect(service.deactivateOpportunity(1,"10023")).toBeTruthy();
        expect(httpClient.post).toHaveBeenCalled();
      });

      it('Should Call Add Opportunities API', () => {
        spyOn(httpClient, 'post').and.returnValue( of ([]));
        service.addOpportunity(opportunity)
        expect(service.addOpportunity(opportunity)).toBeTruthy();
        expect(httpClient.post).toHaveBeenCalled();
      });

      it('Should Call Update Opportunities API', () => {
        spyOn(httpClient, 'put').and.returnValue( of ([]));
        service.updateOpportunity("10023",1,opportunity)
        expect(service.updateOpportunity("10023",1,opportunity)).toBeTruthy();
        expect(httpClient.put).toHaveBeenCalled();
      });


      
  });