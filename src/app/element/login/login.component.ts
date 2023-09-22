import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string
  password: string

  onSubmit(){
    if(this.email == "tejas" && this.password == "1234"){
      localStorage.setItem("login","true")
    }else{
      localStorage.setItem("login","false")
    }
  }

}
