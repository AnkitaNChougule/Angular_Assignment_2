import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http:HttpClient,
              private router:Router) { }

  authstatus:boolean=false
  
  userDetails(email:string,pass:string)
  {
      this.http.get<any>('http://localhost:3000/Users')
      .subscribe(data => {
        console.log(data)
        const details = data.find((user: any) => {
           return (user.email === email && user.password === pass);
         });
         if(details)
         {
          this.authstatus=true;
          this.router.navigate(['WelcomeScreen']);
         }
         else{
          this.authstatus=false
         }
      });   
    }
}
