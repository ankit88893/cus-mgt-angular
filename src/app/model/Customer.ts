export class Customer{
    customername:string;
    id:number;
    balance:number;
    
    constructor(id: number ,customername : string , balance:number){
      this.customername=customername;
      this.balance=balance;
      this.id=id;
    }
  
    getCustomerName():string{
      return this.customername;
    }
  
    getBalance():number{
      return this.balance;
    }
  
  }
  