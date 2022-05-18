import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthserviceService } from 'src/app/Service/authservice.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(
              private router:Router,
              private authservice:AuthserviceService) { }

//=============Code For Form Validation 
  loginForm:any=FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required , 
                                      Validators.pattern(/^[a-z]+(?!.*(?:\_{2,}|\.{2,}))(?:[\.+\_]{0,1}[a-z])*@[a-zA-Z]+\.[a-zA-Z]+$/)]),
      'pass' : new FormControl(null, [Validators.required,
                                      Validators.pattern(/^(?=.{8,16})(?=.*[0-9])(?=.*[!*@#$%^&+=]).*$/),
                                      Validators.maxLength(12)]),
    })
    
    
  }//end of ngOnInit
  
  get email(){
  return this.loginForm.get('email')
  }
  get pass(){
    return this.loginForm.get('pass')
  }
//=====================================

msg:any
loginfun(email:string,pass:string){

  var output=this.authservice.authstatus;
   if(output==false)
   {
     this.msg="Invalid Details"
     this.loginForm.reset();

   }
   this.authservice.userDetails(email,pass)
   
   
}


}//end of class LoginPageComponent 
