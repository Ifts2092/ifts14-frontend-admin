import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent {

  constructor(private subjectService:SubjectService, 
    private router:Router,
    private route:ActivatedRoute){
  }
  id:any;
  public list:any  = [];
  public subjects = []

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('careerId');
    this.getList();
  }
  
  async getList(){
    this.subjectService.getByCareerId(this.id).subscribe(data => {
       this.list = data;
    });    
  }

  async remove(id:any){
    this.subjectService.delete(id).subscribe(data => {
       data;
    });    
  }

}
