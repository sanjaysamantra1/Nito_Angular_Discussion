import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  httpClient = inject(HttpClient);
  url = 'http://localhost:3000/employeess'

  getAllEmployees(): Observable<Employee[]> {
    // return this.httpClient.get(this.url)

    return this.httpClient.get<Employee[]>(this.url).pipe(
      map((responseArr: Employee[]) => {
        return responseArr.map((emp: Employee) => {
          return new Employee(emp.id, emp.firstName, emp.lastName, emp.sal,emp.gender);
        });
      })
    );
  }
}
