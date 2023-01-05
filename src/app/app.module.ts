import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { RegisterComponent } from "./register/register.component";
import { DetailComponent } from "./detail/detail.component";
import { MaleComponent } from "./detail/male/male.component";
import { FemaleComponent } from "./detail/female/female.component";
import { AppRoutingModule } from "./app-routing.module";
import { UsersService } from './users.service';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    RegisterComponent,
    DetailComponent,
    MaleComponent,
    FemaleComponent
  ],
  bootstrap: [AppComponent],
  providers: [UsersService]
})
export class AppModule {}
