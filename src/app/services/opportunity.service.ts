import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpportunityService {

  constructor() { }

  // public getEmployees(): Observable<Employee[]> {
  //   return this.http.get<Employee[]>(`${this.apiServerUrl}/employee/all`);
  // }

  // public addEmployee(employee: Employee): Observable<Employee> {
  //   return this.http.post<Employee>(`${this.apiServerUrl}/employee/add`, employee);
  // }

}
