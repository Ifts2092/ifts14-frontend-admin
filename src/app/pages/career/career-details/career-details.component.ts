import { Component } from '@angular/core';
import  {ActivatedRoute, Router } from '@angular/router';
import { CareerService } from 'src/app/services/career.service';

@Component({
  selector: 'app-career-details',
  templateUrl: './career-details.component.html',
  styleUrls: ['./career-details.component.scss']
})
export class CareerDetailsComponent {

  item:any = {
  }

  constructor(
    private router : Router, 
    private route: ActivatedRoute,
    private careerService:CareerService,
  ){
    const id = this.route.snapshot.queryParams['id'];
    if(id){
      this.item.id = id;
    }
  }

ngOnInit() {

  if(this.item.id){
    let a = this.careerService.getById(this.item.id).subscribe(data => {
      this.item = data;
    });
  }   
  
}

save(){
  this.careerService.save(this.item).subscribe(data => {
    this.router.navigate(['career/list']);
  });  
}

}
