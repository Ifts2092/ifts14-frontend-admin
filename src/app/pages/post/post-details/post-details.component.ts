import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CategoryService } from 'src/app/services/category.service';
import { PostService } from 'src/app/services/post.service';
import { SectionService } from 'src/app/services/section.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent {

  item:any = {
  }
  categories:any = [];

  section:any = [];

  constructor(
    private router : Router, 
    private route: ActivatedRoute,
    private postService:PostService,
    private cateroryService: CategoryService,
    private sectionService: SectionService
  ){
    const id = this.route.snapshot.queryParams['id'];
    if(id){
      this.item.id = id;
    }
}

ngOnInit() {

  if(this.item.id){
    let a = this.postService.getById(this.item.id).subscribe(data => {
      this.item = data;
    });
  }   

  this.cateroryService.getListByUser().subscribe(data => {
    this.categories = data;
  });

  this.sectionService.getList().subscribe(data => {
    this.section = data;
  });
  
}

save(){
  this.postService.save(this.item).subscribe(data => {
    this.router.navigate(['post/list']);
  });  
}



}
