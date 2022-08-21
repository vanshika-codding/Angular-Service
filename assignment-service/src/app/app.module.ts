import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActiveUserComponent } from './active-user/active-user.component';
import { InactiveUserComponent } from './inactive-user/inactive-user.component';
import { UserserviceService } from './userservice.service';
import { CounterserviceService } from './counterservice.service';

@NgModule({
  declarations: [
    AppComponent,
    ActiveUserComponent,
    InactiveUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserserviceService,CounterserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
