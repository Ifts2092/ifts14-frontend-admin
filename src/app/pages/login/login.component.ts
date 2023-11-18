import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  login = {
    username: '',
    password: ''
  }

  constructor(private router : Router, private authService:AuthService) {
    if(this.isLogged()){
      this.router.navigate(['post/list']);
    }
  }

  isLogged(){
    return this.authService.isLoggedIn();
  }


  gotoHome(){
    this.authService.login(this.login.username, this.login.password).subscribe( (response:any) => {
      if(response.messege){
        alert("Usuario o Contraseña incorrecto");
      } else {
        this.router.navigate(['post/list']);
      }  
    });

    
  }


}
