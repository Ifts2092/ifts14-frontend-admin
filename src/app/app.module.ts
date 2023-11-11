import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { JwtInterceptorProviders } from './jwt.interceptor';
import { PostListComponent } from './pages/post/post-list/post-list.component';
import { PostDetailsComponent } from './pages/post/post-details/post-details.component';
import { RouterModule } from '@angular/router';
import { NabbarComponent } from './componentes/nabbar/nabbar.component';
import { PostService } from './services/post.service';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { UserDetailsComponent } from './pages/user/user-details/user-details.component';
import { CareerDetailsComponent } from './pages/career/career-details/career-details.component';
import { CareerListComponent } from './pages/career/career-list/career-list.component';
import { SubjectDetailsComponent } from './pages/subject/subject-details/subject-details.component';
import { SubjectListComponent } from './pages/subject/subject-list/subject-list.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NabbarComponent,
    LoginComponent,
    PostListComponent,
    PostDetailsComponent,
    UserListComponent,
    UserDetailsComponent,
    CareerDetailsComponent,
    CareerListComponent,
    SubjectDetailsComponent,
    SubjectListComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthService,
    PostService,
    JwtInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
