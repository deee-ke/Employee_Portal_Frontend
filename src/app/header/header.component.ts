import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminAPIService } from '../services/admin-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  logged:boolean = false

  constructor(private router:Router, private api:AdminAPIService){
    api.sharedData.subscribe((data:any)=>{
      this.logged = data
    })
  }

  logout(){
    localStorage.removeItem("name")
    localStorage.removeItem("password")
    this.logged = false
    
    this.router.navigateByUrl("")
  }

}
