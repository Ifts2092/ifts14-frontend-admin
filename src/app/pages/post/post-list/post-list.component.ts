import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {

  public list:any  = [];

  constructor(private postService:PostService){
  
  }

  ngOnInit() {
    this.getList();
  }

  async getList(){
    this.postService.getList().subscribe(data => {
       this.list = data;
    });    
  }

  async remove(id:any){
    this.postService.delete(id).subscribe(data => {
       data;
    });    
  }
  

}
