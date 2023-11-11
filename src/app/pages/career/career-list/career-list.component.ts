import { Component } from '@angular/core';
import { CareerService } from 'src/app/services/career.service';
import { Router } from '@angular/router';

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
    this.careerService.delete(id).subscribe(data => {
       data;
    });    
  }
}
