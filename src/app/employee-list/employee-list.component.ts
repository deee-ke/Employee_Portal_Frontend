import { Component, OnInit } from '@angular/core';
import { AdminAPIService } from '../services/admin-api.service';
import { employeeModel } from 'src/employee.model';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
  /* OnInit is an interface to implement ngOnInit */

  allEmployee:employeeModel[]=[]

  searchKey:string=""

  // for pagination
  p: number = 1;

  constructor(private api:AdminAPIService){}

  ngOnInit(): void {
    this.allEmployeeDetails()
  }
   allEmployeeDetails(){
    this.api.getAllEmployeeApi().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.allEmployee = res
      },
      error:(err:any)=>{
        console.log(err);
      }
    })
   }

   removeEmployee(id:any){
    this.api.deleteAnEmployeeApi(id).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.allEmployeeDetails()
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
   }

   sortById(){
    this.allEmployee.sort((a:any,b:any)=>(a.id - b.id))
   }

   sortByName(){
    this.allEmployee.sort((a:any,b:any)=>a.name.localeCompare(b.name))
   }

   generatePdf(){
    // create an object for jspdf
    const pdf = new jsPDF()

    let head = [['Id','Employee name','Email','Status']]

    let body:any = []

    this.allEmployee.filter((item:any)=>item.id!='1').forEach((item:any)=>{
      body.push([item.id,item.name,item.email,item.status])
    })

    // fontsize
    pdf.setFontSize(16)
    // title
    pdf.text('Employee Details',15,10)
    // pdf.table
    autoTable(pdf,{head,body})
    // to open in new tab
    pdf.output('dataurlnewwindow')
    // save and download
    pdf.save('Employee.pdf')
    
   }


}
