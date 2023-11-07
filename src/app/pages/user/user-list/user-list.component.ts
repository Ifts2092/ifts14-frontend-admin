import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';


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
    this.userService.delete(id).subscribe(data => {
       data;
    });    
  }
  

}
