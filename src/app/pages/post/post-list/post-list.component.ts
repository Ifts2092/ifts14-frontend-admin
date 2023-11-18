import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {

  public list:any  = [];

  constructor(private postService:PostService){
  
  }

  async ngOnInit() {
       this.list = await lastValueFrom(this.postService.getList());
  }

  // async getList(){
  //   this.postService.getList().subscribe(data => {
  //      this.list = data;
  //   });    
  // }

  async remove(id:any){

    if (confirm("Desea eliminar el post?")) {
      let data = await lastValueFrom(this.postService.delete(id));
        if(data?.error){
      } else {
        await this.ngOnInit();
      }
    }
    
  }
  

}
