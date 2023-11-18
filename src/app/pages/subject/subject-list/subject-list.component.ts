import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';
import { lastValueFrom } from 'rxjs';

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
    if (confirm("Desea eliminar la materia?")) {
      let data = await lastValueFrom(this.subjectService.delete(id))
      if(data?.error){
          alert("No se puede borrar la materia");
       } else {
          await this.ngOnInit();
      }    
    }
  }

}
