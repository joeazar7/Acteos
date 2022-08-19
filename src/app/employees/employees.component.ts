import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  data=[{"firstName":"","lastName":"","position":""}]
  constructor(private activatedRoute: ActivatedRoute , private router : Router) { 
    this.activatedRoute.queryParams.subscribe((params:any) => {
      if (params != undefined) {
//  this.data = params;
    console.log(params)
      }
    });
  }
details(i:number){
  this.router.navigate(['employeesDetails']
  // ,{querryParams:this.data[i]}
  );
}
  ngOnInit(): void {
  }

}
