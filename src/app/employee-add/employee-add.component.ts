import { Component } from '@angular/core';
import { employeeModel } from 'src/employee.model';
import { AdminAPIService } from '../services/admin-api.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {

  constructor(private api:AdminAPIService){

  }

  // variable to store the value from the input box which have the same structure of employee model
  employee:employeeModel={}

  cancelEmployee(){
    this.employee={}
  }

  addEmployee(){
    console.log(this.employee);
    if(!this.employee.name || !this.employee.id || !this.employee.email || !this.employee.status){
      alert('Please fill the form completely!')
    }
    else{
      this.api.addEmployeeApi(this.employee).subscribe({
      next:(res:employeeModel)=>{
        console.log(res);
        alert(`${this.employee.name} added successfully.`)
      },
      error:(err:any)=>{
        alert('Something went wrong!')
      } 
    })
    }
  }
}
