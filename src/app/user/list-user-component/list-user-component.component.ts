import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserService } from 'src/app/Core/Services/user.service';
import { User } from 'src/app/model/User';



@Component({
  selector: 'app-list-user-component',
  templateUrl: './list-user-component.component.html',
  styleUrls: ['./list-user-component.component.css']
})





export class ListUserComponentComponent {
  searchItem!:string;
  list : User[] = []

  constructor(private Router:Router, private userS:UserService){}

  ngOnInit(){
    this.userS.getAllUsers().subscribe(data=> this.list= (data));
    console.log(this.list);
  }
  /*deleteUser(user: User): void {
    if (confirm('T es sur tu veux supprimer ce user?')) {
      const index = this.list.indexOf(user);

      if (index !== -1) {
        this.list.splice(index, 1);
      }
    }
  }*/

  deleteUser(index: string ) {
    this.userS.deleteUser(index).subscribe(() => alert('user deleted'));
  }
  
var1="submit";



 add(){
  this.Router.navigate(["adduser"]);
 }
}
