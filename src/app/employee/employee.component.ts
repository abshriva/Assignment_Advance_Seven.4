import { Employee } from '../models/employee';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[];

  constructor() 
  { 

    this.employees =[
      { 
        firstName:'Abhishek', 
        lastName:'Shrivastava',
        age:25,
        id:1
      },

      { 
        firstName:'Naveen', 
        lastName:'Pete',
        age:38,
        id:2
      },
      { 
        firstName:'Rahul', 
        lastName:'Oberoi',
        age:28,
        id:3
      }
    ];

  }

  
  

  ngOnInit() {
  }

}
