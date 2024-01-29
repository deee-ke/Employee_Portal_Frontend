import { APP_ID, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { employeeModel } from 'src/employee.model';
import { AdminAPIService } from '../services/admin-api.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit{
  
 employee:employeeModel = {}

 constructor(private route:ActivatedRoute , private api:AdminAPIService , private router:Router){}

 ngOnInit(): void {
   this.route.params.subscribe((res:any)=>{
    // console.log(res.id);
    const {id}=res
    this.viewEmployee(id)
    
   })
 }

 viewEmployee(id:string){
  this.api.viewAnEmployeeApi(id).subscribe({
    next:(res:any)=>{
      console.log(res);
      this.employee=res
      
    },
    error:(err:any)=>{
      console.log(err);
      
    }
  })
 }

 editEmployee(id:any){
  this.api.updateAnEmployeeApi(id,this.employee).subscribe({
    next:(res:any)=>{
      console.log(res);
      alert('Employee details updated successfully.')
      this.router.navigateByUrl('/employees')
      
    },
    error:(err:any)=>{
      console.log(err);
      
    }
  })
 }

 cancelButton(id:any){
  this.viewEmployee(id)
 }
 
 
}
