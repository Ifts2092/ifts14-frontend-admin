import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { editorConfig } from 'src/app/config.editor';

import { CategoryService } from 'src/app/services/category.service';
import { PostService } from 'src/app/services/post.service';
import { SectionService } from 'src/app/services/section.service';
import { environment } from 'src/environments/environment';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent {

  item:any = {
    title:'',
    sectionId:'',
    categoryId:'',
    content: ''
  }
  categories:any = [];

  section:any = [];

  fileName = '';

  file: any;

  previewImg:any;

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
      if(this.item.imageUrl){
        this.previewImg = environment.apiUrl + '/api'+ this.item.imageUrl;
      }
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

  const formData = new FormData();
  Object.keys(this.item).forEach(key => formData.append(key, this.item[key]));

  if (this.file) {
    formData.append("uploadFile", this.file);
  }

  this.postService.save(formData).subscribe(data => {
    this.router.navigate(['post/list']);
  });  
 
}





    onFileSelected(event:any) {

      this.file = event.target.files[0];      
      this.fileName = this.file.name;

    }


    getConfigEditor(){
      return editorConfig;
    }

}
