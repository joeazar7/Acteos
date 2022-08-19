import { ApiService } from 'src/services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = "";
  password = "" ;

usernameValid = true; 
passwordValid = true;
  changeUsername(event:any){
    this.username = event.target.value
  }
  changePassword(event:any){
    this.password = event.target.value
  }
  constructor(private apiService: ApiService , private router: Router) {}

  ngOnInit(): void {}

  login() {
    if (this.username != null  && this.username != "" && this.username.length < 8 ){
      this.usernameValid=true
    }else{
      this.usernameValid=false
    }
    if (this.password != null  && this.password != "" && this.password.length < 8 ){
      this.passwordValid=true
    }else{
      this.passwordValid=false
    }
    if(this.usernameValid == true && this.passwordValid == true ){
      this.apiService.get("https://617aea45cb1efe00170100ad.mockapi.io/api/employees").subscribe((data:[object]) => {
        this.router.navigate(['employees']
        ,{queryParams:data}
        );
      })


    
    
    }
  }
}
