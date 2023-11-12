import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nabbar',
  templateUrl: './nabbar.component.html',
  styleUrls: ['./nabbar.component.scss']
})
export class NabbarComponent {
  
  username: any;

  constructor(public router : Router, private authService:AuthService) {
    
  }

  isAdmin(){
    return this.authService.isAdmin();
  }

  isLogged(){
    return this.authService.isLoggedIn();
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
