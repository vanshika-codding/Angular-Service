import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterserviceService {

  constructor() { }

  countActiveUsers = 0;
  countInactiveUsers = 0;

  inactiveUserCount(){
    this.countInactiveUsers++;
    console.log("inactive users count"+this.countInactiveUsers);
  }

  activeUserCount(){
    this.countActiveUsers++;
    console.log("active users count"+this.countActiveUsers);
  }
}
