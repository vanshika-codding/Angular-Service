import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-inactive-user',
  templateUrl: './inactive-user.component.html',
  styleUrls: ['./inactive-user.component.css']
})
export class InactiveUserComponent implements OnInit {

  constructor(private userService:UserserviceService) { }

  inactiveUsers:string[] |any;
  // @Output() active = new EventEmitter<number>();

  ngOnInit(): void {
    this.inactiveUsers = this.userService.inactiveusers;
  }

  setToActive(id:number){
    // this.active.emit(id);
    this.userService.setToActive(id);
  }
}
