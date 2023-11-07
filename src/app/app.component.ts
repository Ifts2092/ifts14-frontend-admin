import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Administador';

  constructor(public router : Router) {
    console.log(environment.production); 
  }

  ngOnInit() {
      this.router.url;
      console.log(this.router.url);
  }


}
