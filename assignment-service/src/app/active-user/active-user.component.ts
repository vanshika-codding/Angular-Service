import { Component,  OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.css']
})
export class ActiveUserComponent implements OnInit {

   constructor(private userService:UserserviceService) { }
    activeUser :string[]|any;
    // @Output() inactive = new EventEmitter<number>();

   ngOnInit(): void {
    this.activeUser = this.userService.activeUsers;
   }

  setToInactive(id:number){
    // this.inactive.emit(id);
    this.userService.setToInactive(id);
  }
}
