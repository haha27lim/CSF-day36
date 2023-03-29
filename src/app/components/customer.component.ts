import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit, OnDestroy{
 //http://localhost:4200/customer/2?fids=1|2|3|4|5
  customerId =  "";
  param$! :  Subscription;
  queryParams$! :  Subscription;
  
  fids! : string[];

  constructor(private activatedRoute: ActivatedRoute){

  }

  ngOnInit(): void {
      console.log("load ... customer");
      this.param$ = this.activatedRoute.params.subscribe(
        (params) => {
          this.customerId = params['custId'];
          console.log(this.customerId);
        }
      );

      this.queryParams$ = this.activatedRoute.queryParams.subscribe(
        (queryParams) => {
          this.fids = queryParams['fids'].split('|')
        }
      );
  }

  ngOnDestroy(): void{
    console.log("destroy sub");
    this.param$.unsubscribe();
    this.queryParams$.unsubscribe();
  }

}
