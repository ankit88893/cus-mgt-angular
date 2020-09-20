import { Component, OnInit } from '@angular/core';
// import {CustomerDetailsComponent} from '../customer-details/customer-details.component';
import { Customer } from '../model/customer';
import {CustomerService} from '../service/customerService';

@Component({
  selector: 'add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {

  customerService: CustomerService;

  constructor(customerService:CustomerService) {
    this.customerService=customerService;
   }

   customer:Customer;


 // customer:Customer=undefined;

  addCustomer(form:any){
    let data=form.value;
   let balance=data.balance;
    let customername=data.customername;
    this.customer=new Customer(0,customername,balance);
    this.customerService.addCustomer(this.customer);
     console.log("added customer");
   }
 
}
