import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';
import { lastValueFrom } from 'rxjs';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  public list:any  = [];

  constructor(private userService:UserService){
  
  }

  ngOnInit() {
    this.getList();
  }

  async getList(){
    this.userService.getList().subscribe(data => {
       this.list = data;
    });    
  }

  async remove(id:any){
    if (confirm("Desea eliminar el usuario?")) {
      let data = await lastValueFrom(this.userService.delete(id))
      if(data?.error){
        alert(data.error);
      } else {
        await this.ngOnInit();
      }
    }
  }
  

}
