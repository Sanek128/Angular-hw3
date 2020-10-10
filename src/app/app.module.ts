import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserComponent } from './entity/user/components/user/user.component';
import { RouterModule } from '@angular/router';
import { AllUsersComponent } from './entity/user/components/all-user/all-user.component';
import { UserResolveService } from './entity/user/service/user-resolve.service';
import { PostComponent } from './entity/post/components/post/post/post.component';
import { AllPostComponent } from './entity/post/components/all-post/all-post/all-post.component';
import { PostResolveService } from './entity/post/service/post-resolve.service';
import { CommentComponent } from './entity/comment/components/comment/comment/comment.component';
import { AllCommentComponent } from './entity/comment/components/all-comment/all-comment/all-comment.component';
import { CommentResolveService } from './entity/comment/service/comment-resolve.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AllUsersComponent,
    PostComponent,
    AllPostComponent,
    CommentComponent,
    AllCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'users', component: AllUsersComponent, resolve: {xxx: UserResolveService}},
      {path: 'posts', component: AllPostComponent, resolve: {ppp: PostResolveService}},
      {path: 'comments', component: AllCommentComponent, resolve: {ccc: CommentResolveService}}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
