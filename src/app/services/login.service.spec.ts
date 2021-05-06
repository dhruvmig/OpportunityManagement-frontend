import { HttpClient, HttpClientModule } from "@angular/common/http";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { LoginService } from "./login.service";
import { LogsService } from "./logs.service"


describe('Login', () => {
    let service: LoginService;
    let httpClient: HttpClient;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports:[HttpClientTestingModule]
      });
      service = TestBed.inject(LoginService);
      httpClient = TestBed.inject(HttpClient);
    });
  
    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('Should Call Login API', () => {
      spyOn(httpClient, 'post').and.returnValue( of ([]));
      service.login("User");
      expect(service.login("User")).toBeTruthy();
      expect(httpClient.post).toHaveBeenCalled();
    });
  });