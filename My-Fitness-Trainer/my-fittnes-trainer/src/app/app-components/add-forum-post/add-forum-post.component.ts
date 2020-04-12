import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ForumApiService } from 'src/app/services/forum-api.service';
import { ForumPostRequest, UserRequest } from 'src/app/request/app.request';
import {LOCAL_STORAGE, WebStorageService} from 'ngx-webstorage-service'

@Component({
  selector: 'app-add-forum-post',
  templateUrl: './add-forum-post.component.html',
  styleUrls: ['./add-forum-post.component.css']
})
export class AddForumPostComponent implements OnInit {
  public userEmail: string;
  constructor(
    private router: Router,
    private forumApiService: ForumApiService,
    @Inject(LOCAL_STORAGE) private storage: WebStorageService
  ) { }

  ngOnInit(): void {
    if(this.storage.get('admin')){
      this.userEmail = this.storage.get('email');
    }else{
      this.router.navigate(['/login'])
    }
  }
  
  public AddPost(addForm: FormGroup){
    let forumRequest = new ForumPostRequest;
    forumRequest.user = new UserRequest;

    forumRequest.title = addForm.value.title;
    forumRequest.message = addForm.value.message;
    forumRequest.votes = 0;
    forumRequest.user.email = this.storage.get('email');
    this.forumApiService.createForumPost(forumRequest)
    .subscribe(result=>{
      console.log(result);
      this.router.navigate(['/forum'])
    })
    
  }

  goBack(): void {
    this.router.navigate(['/forum']);
  }


}
