import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminAPIService } from '../services/admin-api.service';
// import Swal from 'sweetalert2'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string=""
  password:string=""

  constructor(private api:AdminAPIService,private router:Router){}

  login(){
    if(!this.email || !this.password){
      alert('Please fill the form completely!')
    }
    else{
      // Swal.fire({
      //   title: 'success!',
      //   text: 'Logged in successfully.',
      //   icon: 'success',
      //   confirmButtonText: 'Ok'
      // })
      this.api.authorization().subscribe({
        next:(res:any)=>{
          const {email, password} = res
          if(email == this.email && password == this.password){
            alert('Logged in successfully.')

            // save admin details
            this.api.updatedData({d:true})
            
            localStorage.setItem("name",res.name)
            localStorage.setItem("password",res.password)
            //navigate
            this.router.navigateByUrl('dashboard')
          }
          else{
            alert('Invalid email id or password!')
          }
        },
        error:(res:any)=>{
          console.log(res);
          
        }
      })

    }
  }

}
