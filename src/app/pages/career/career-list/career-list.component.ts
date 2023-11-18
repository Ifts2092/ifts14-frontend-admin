import { Component } from '@angular/core';
import { CareerService } from 'src/app/services/career.service';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-career-list',
  templateUrl: './career-list.component.html',
  styleUrls: ['./career-list.component.scss']
})
export class CareerListComponent {

  constructor(private careerService:CareerService,
    private router:Router){
  }
  public list:any  = [];

  id: any;
  ngOnInit() {
    this.getList();
  }

  goToMaterias(id:any){
    this.router.navigate(['/subject/list',id])
  }
  async getList(){
    this.careerService.getList().subscribe(data => {
       this.list = data;
    });    
  }

  async remove(id:any){
    if (confirm("Desea eliminar la carrera?")) {
      let data = await lastValueFrom(this.careerService.delete(id))
      if(data?.error){
          alert("No se puede eliminar una carrera con materia adentro")
       } else {
          await this.ngOnInit();
      }    
    }
  }
}
