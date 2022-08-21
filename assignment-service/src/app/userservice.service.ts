import { Injectable } from '@angular/core';
import { CounterserviceService } from './counterservice.service';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private counterService:CounterserviceService) { }

  activeUsers=['vanshika','ishan'];
  inactiveusers=['abc','pqr'];

  setToActive(id:number){
    this.activeUsers.push(this.inactiveusers[id]);
    this.inactiveusers.splice(id,1);
    this.counterService.activeUserCount();
  }

  setToInactive(id:number){
    this.inactiveusers.push(this.activeUsers[id]);
    this.activeUsers.splice(id,1);
    this.counterService.inactiveUserCount();
  }
}
