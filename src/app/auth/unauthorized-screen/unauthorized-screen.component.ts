import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unauthorized-screen',
  templateUrl: './unauthorized-screen.component.html',
  styleUrls: ['./unauthorized-screen.component.scss']
})
export class UnauthorizedScreenComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  backtohome(){
    this.router.navigate(['Login'])
  }

}
