import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvoiceListComponentComponent } from '../invoice-list-component/invoice-list-component.component';
import { Invoice } from '../model/Invoice';

@Component({
  selector: 'app-invoice-component',
  templateUrl: './invoice-component.component.html',
  styleUrls: ['./invoice-component.component.css']
})
export class InvoiceComponentComponent {
  idFacture!:number;
  active!:boolean;
  invoiceItem!:Invoice;

  list : Invoice[] = [
    {idFacture:1,montantFacture:120, montantRemise:10, dateFacture:"12/12/2021",active:true},
    {idFacture:2,montantFacture:1020, montantRemise:90, dateFacture:"22/11/2020",active:true},
    {idFacture:3,montantFacture:260, montantRemise:30, dateFacture:"18/10/2020",active:false},
    {idFacture:4,montantFacture:450, montantRemise:40, dateFacture:"14/12/2020",active:true},
  ]

  constructor(private actRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.getParam();
  }

  getParam() {
    console.log("Getting url param");
    this.actRoute.paramMap.subscribe(data => {
      console.log(data);
      this.idFacture=Number(data.get('param'))
      this.active= data.get('status')==="true"?true:false;
      console.log(this.active)
      console.log(data.get('status'))
      if(this.active){
        this.getDataFromInvoiceList(this.idFacture);
      }
    });
  }

  getDataFromInvoiceList(idFacture:number) {
   var a = this.list.filter((x: Invoice) => x.idFacture === idFacture);
   if(a.length>0){
    this.invoiceItem = a[0];
   }else{
    console.log("no data");
   }
   console.log(a);
   console.log(this.invoiceItem);
  }

}
