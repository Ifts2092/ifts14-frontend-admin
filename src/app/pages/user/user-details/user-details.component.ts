import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleService } from 'src/app/services/role.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {

  item:any = {
  }

  roles:any = [];
  
  constructor(
    private router : Router, 
    private route: ActivatedRoute,
    private userService: UserService,
    private roleService: RoleService
    
  ){
    const id = this.route.snapshot.queryParams['id'];
    if(id){
      this.item.id = id;
    }
  }

  ngOnInit() {

    if(this.item.id){
      let a = this.userService.getById(this.item.id).subscribe(data => {
        this.item = data;
      });
    }  

    this.roleService.getList().subscribe(data => {
      this.roles = data;
    });

  }

  save(){
    this.userService.save(this.item).subscribe(data => {
      this.router.navigate(['user/list']);
    });  
  }

}
