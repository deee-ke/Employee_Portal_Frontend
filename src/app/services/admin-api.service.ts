import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { employeeModel } from 'src/employee.model';

@Injectable({
  providedIn: 'root'
})
export class AdminAPIService {

  constructor(private http:HttpClient) {}

  serverURL = "https://employee-portal-backend-1nww.onrender.com"

  // create an object for the behaviour subject
  public sharedData = new 
  BehaviorSubject(false)

  updatedData(data:any){
    // to access the new value
    this.sharedData.next(data)
  }

  authorization(){
    return this.http.get(`${this.serverURL}/employee/1`)
  }

  addEmployeeApi(employee:employeeModel){
    return this.http.post(`${this.serverURL}/employee`,employee)
  }

  getAllEmployeeApi(){
    return this.http.get(`${this.serverURL}/employee`)
  }
  
  deleteAnEmployeeApi(id:string){
    return this.http.delete(`${this.serverURL}/employee/${id}`)
  }

  viewAnEmployeeApi(id:any){
    return this.http.get(`${this.serverURL}/employee/${id}`)
  }

  // to update
  updateAnEmployeeApi(id:any,employee:any){
    return this.http.put(`${this.serverURL}/employee/${id}`,employee)
  }

  updateAdminApi(admin:any){
    return this.http.put(`${this.serverURL}/employee/1`,admin)
  }


}
