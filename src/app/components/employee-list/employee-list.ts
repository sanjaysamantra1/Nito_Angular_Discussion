import { Component, inject } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'smartAssist-employee-list',
  imports: [],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css'
})
export class EmployeeList {
  employeeService = inject(EmployeeService);
  empArr: any = [];

  ngOnInit() {
    this.employeeService.getAllEmployees().subscribe(response => {
      this.empArr = response;
      console.log(response);
    })
  }
}
