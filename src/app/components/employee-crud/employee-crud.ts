import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Employee } from '../../models/employee';
import { deleteEmployee, fetchEmployees } from '../../state_mgmt/actions/employee.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'smartAssist-employee-crud',
  imports: [
    CommonModule
  ],
  templateUrl: './employee-crud.html',
  styleUrl: './employee-crud.css'
})
export class EmployeeCrud {
  employees$: Observable<Employee[]> | undefined;

  constructor(private store: Store<{ employees: Employee[] }>) {
    this.employees$ = this.store.select(state => state.employees);
  }
  ngOnInit() {
    this.store.dispatch(fetchEmployees());
  }
  deleteEmp(id: any) {
    const flag = confirm('Are you sure, You want to delete this record?')
    if (flag) {
      this.store.dispatch(deleteEmployee({ id }));
    }
  }
}
