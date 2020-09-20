import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';

 
 @Injectable()
 export class CustomerService{

  customers:Customer[]=[];

  generatedId:number=1;

  generateId():number{
      this.generatedId++;
      return this.generatedId;
  }


  addCustomer(customer:Customer){
    let id=this.generateId();
    customer.id=id;
    this.customers.push(customer);
}

allCustomers():Customer[]{
    return this.customers;
}

findCustomerById(id:number):Customer{    
  for(let customer of this.customers){
     if(customer.id===id){
         return customer;
     }
  } 
  return null;
}

removeCustomer(id:number){
    for(let i=0 ;i<this.customers.length;i++ ){
       let customer=this.customers[i];
        if(customer.id===id){
            this.customers.splice(i,1);
        }
     }
       
}
}