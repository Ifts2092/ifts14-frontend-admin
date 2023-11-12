import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { editorConfig } from 'src/app/config.editor';
import { SettingService } from 'src/app/services/setting.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-requirement',
  templateUrl: './requirement.component.html',
  styleUrls: ['./requirement.component.scss']
})
export class RequirementComponent {
  
  requirement:any = { key:'', value:''};
  
  constructor(
    private router : Router, 
    private route: ActivatedRoute,
    private settingService:SettingService,
    
  ){
 
  }

  ngOnInit() {

      let a = this.settingService.getOne('Requisitos').subscribe(data => {
        this.requirement = data; //.find( (s:any) => {return s.key == 'Requisito'});
      });
  
  }

  save(){
  
    this.settingService.saveOne(this.requirement).subscribe(data => {
      this.router.navigate(['post/list']);
    });  
   
  }

  getConfigEditor(){
    return editorConfig;
  }

}
