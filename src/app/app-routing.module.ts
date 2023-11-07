import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UserGuard } from './user-guard.guard';
import { PostListComponent } from './pages/post/post-list/post-list.component';
import { PostDetailsComponent } from './pages/post/post-details/post-details.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { UserDetailsComponent } from './pages/user/user-details/user-details.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'post/list', component: PostListComponent, canActivate: [UserGuard] },
  { path: 'post/details', component: PostDetailsComponent, canActivate: [UserGuard] },
  { path: 'user/list', component: UserListComponent, canActivate: [UserGuard] },
  { path: 'user/details', component: UserDetailsComponent, canActivate: [UserGuard] }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
