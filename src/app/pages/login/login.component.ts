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

  constructor(private router : Router, private authService:AuthService) {}


  gotoHome(){
    this.authService.login(this.login.username, this.login.password).subscribe( (response:any) => {
      this.router.navigate(['post/list']);
    });

    
  }


}
