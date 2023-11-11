import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UserGuard } from './user-guard.guard';
import { PostListComponent } from './pages/post/post-list/post-list.component';
import { PostDetailsComponent } from './pages/post/post-details/post-details.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { UserDetailsComponent } from './pages/user/user-details/user-details.component';
import { CareerDetailsComponent } from './pages/career/career-details/career-details.component';
import { CareerListComponent } from './pages/career/career-list/career-list.component';
import { SubjectListComponent } from './pages/subject/subject-list/subject-list.component';
import { SubjectDetailsComponent } from './pages/subject/subject-details/subject-details.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { RequirementComponent } from './pages/requirement/requirement.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'requirement', component: RequirementComponent, canActivate: [UserGuard] },
  { path: 'post/list', component: PostListComponent, canActivate: [UserGuard] },
  { path: 'post/details', component: PostDetailsComponent, canActivate: [UserGuard] },
  { path: 'user/list', component: UserListComponent, canActivate: [UserGuard] },
  { path: 'user/details', component: UserDetailsComponent, canActivate: [UserGuard] },
  { path: 'career/list', component: CareerListComponent, canActivate: [UserGuard]  },
  { path: 'career/details', component: CareerDetailsComponent, canActivate: [UserGuard]  },
  { path: 'subject/list/:careerId', component: SubjectListComponent, canActivate: [UserGuard]  },
  { path: 'subject/details', component: SubjectDetailsComponent, canActivate: [UserGuard]  },
  { path: 'settings', component: SettingsComponent, canActivate: [UserGuard] }
  { path: '**', component: PageNotFoundComponent, canActivate: [UserGuard]  }


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
