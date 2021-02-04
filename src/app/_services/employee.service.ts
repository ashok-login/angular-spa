import { Injectable } from '@angular/core';
import { Employee } from '../_models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: Employee[];

  getAllEmployees(): Employee[] {
    this.employees = [
      { 'id': 1001, 'name': 'Chalapathi', 'age': 21 },
      { 'id': 1002, 'name': 'Ramesh', 'age': 76 },
      { 'id': 1003, 'name': 'Ganesh', 'age': 82 }
    ];
    return this.employees;
  }

  constructor() { }
}
