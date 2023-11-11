import { Component } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';


@Component({
  selector: 'app-subject-details',
  templateUrl: './subject-details.component.html',
  styleUrls: ['./subject-details.component.scss']
})
export class SubjectDetailsComponent {
  item:any = {
  }

  constructor(
    private router : Router, 
    private route: ActivatedRoute,
    private subjectService:SubjectService,
  ){
    const id = this.route.snapshot.queryParams['id'];
    const careerId = this.route.snapshot.queryParams['careerId'];
    if(id){
      this.item.id = id;
    }
    if(careerId){
      this.item.careerId = careerId;
    }
  }

ngOnInit() {

  if(this.item.id){
    let a = this.subjectService.getById(this.item.id).subscribe(data => {
      Object.assign(this.item,data)
    });
  }   
  
}

save(){
  this.subjectService.save(this.item).subscribe(data => {
    this.router.navigate(['career/list']);
  });  
}
}
