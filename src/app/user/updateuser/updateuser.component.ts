import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  id!:Number;
  
  constructor(private actRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.getParam();
  }

  getParam(){
   //this.id= Number( this.actR.snapshot.paramMap.get('param'));
   this.actRoute.paramMap.subscribe(data => this.id=Number(data.get('param')));
  }
}
