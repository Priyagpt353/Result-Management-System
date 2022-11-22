import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoginService } from '../login.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  role:string="";
  errorMessage:string = "";
  user:User = new User();
  constructor(private loginService: LoginService, private route: ActivatedRoute, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => this.role = param.get('role') || "");
  }

  LoginForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  get fields(){
    return this.LoginForm.controls;
  }

  onSubmit(){    
    let {email, password} = this.LoginForm.value;
    if(this.LoginForm.invalid){
      this.errorMessage = "Please enter the required values";
      return false;
    }
    let response = this.loginService.login(this.role, email || "", password || "");
    response.subscribe(data =>{
      
      if(Array.isArray(data) && data.length != 0){        
        Object.assign(this.user, data);
        localStorage.setItem("userEmail", email || "");
        this.authService.loggedIn.next(true);
        if(this.role == "teacher"){
          this.router.navigate(["/teacher"]);
        }else if(this.role == "student"){
          this.router.navigate(["/student"]);
        }
      }else{
        this.errorMessage = "Invalid email or password!\n Please try again."
      }  
    })
    return true;
  }

}
