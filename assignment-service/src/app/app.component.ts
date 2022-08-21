import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'assignment-service';

  ngOnInit(): void {
  //   this.activeUsers = this.userService.activeUsers;
  //   this.inactiveusers = this.userService.inactiveusers; 
  }
  constructor(){}
  
  // activeUsers=['vanshika','ishan'];
  // inactiveusers=['abc','pqr'];
  // activeUsers? :string[];
  // inactiveusers?:string[];

  // setToInactive(id:number){
  //   this.inactiveusers.push(this.activeUsers[id]);
  //   this.activeUsers.splice(id,1);
  // }

  // setToActive(id:number){
  //   this.activeUsers.push(this.inactiveusers[id]);
  //   this.inactiveusers.splice(id,1);
  // }
}
