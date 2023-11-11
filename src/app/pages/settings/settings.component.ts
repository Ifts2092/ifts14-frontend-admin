import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SettingService } from 'src/app/services/setting.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {


  settings:any = [];
  constructor(
    private router : Router, 
    private route: ActivatedRoute,
    private settingService:SettingService,
    
  ){
 
  }

  ngOnInit() {

      let a = this.settingService.getList().subscribe(data => {
        this.settings = data;
      });
  
  }

  save(){
  
    this.settingService.save(this.settings).subscribe(data => {
      this.router.navigate(['post/list']);
    });  
   
  }


}
