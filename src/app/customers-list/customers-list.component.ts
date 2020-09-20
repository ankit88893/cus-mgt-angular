import { Component, OnInit } from '@angular/core';
// import { from } from 'rxjs';
import { Customer } from '../model/customer'
import{CustomerService} from '../service/customerService'


@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent  {

  customerService:CustomerService;
  customers:Customer[];

  constructor( customerService:CustomerService) {
    this.customerService=customerService;
    this.customers=customerService.allCustomers();
   }

  
   removeCustomer(id:number){
    this.customerService.removeCustomer(id);
     }
  

}
