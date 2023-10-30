import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Core/Services/user.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  constructor(private Router:Router, private userS:UserService){}

  user:User={
      "id": "6",
      "firstName": "shayma",
      "lastName": " ettaieb",
      "birthDate": "2001-01-20",
      "accountCategory": "Customer",
      "email": "shayma.ettaieb@esprit.tn",
      "password": "test",
      "picture": "https://bootdey.com/img/Content/avatar/avatar6.png",
      "profession": "Software Engineer"
  }


  /*add(){
    this.userS.addUser(this.user).subscribe(
    ()=>{alert('added seccesfully!!');
    this.Router.navigate(['listusers']);}
    );
  }*/

  add(F:NgForm){
    const id=new Date().getTime().toString();
    const newUser:User={
      id: id,
      firstName: F.value.inputname,
      lastName: F.value.inputlastname,
      birthDate: F.value.inputdate,
      accountCategory: F.value.inputcat,
      email: F.value.inputmail,
      password: F.value.inputpass,
      picture: "https://bootdey.com/img/Content/avatar/avatar5.png",
      profession: F.value.pf
    }
    this.userS.addUser(newUser).subscribe(()=>{
      alert("user added");
      this.Router.navigate(["users"]);
    });
  }

}
