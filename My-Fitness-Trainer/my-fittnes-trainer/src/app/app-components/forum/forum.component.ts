import { Component, OnInit, Inject } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'ngx-webstorage-service'
import { ForumPostsResponse } from 'src/app/responses/app.responses';
import { ForumApiService } from 'src/app/services/forum-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  public isAdmin = this.storage.get('admin');
  public forumPosts: ForumPostsResponse;

  constructor(
    @Inject(LOCAL_STORAGE) private storage: WebStorageService,
    private forumApiService: ForumApiService,
    private router: Router) { }

  ngOnInit(): void {
    this.forumApiService.getAllForumPosts().subscribe({
      next: forums => {
        this.forumPosts = forums;
        console.log(this.forumPosts);
        
      },
      error: error =>{
        console.log(error.error);
      }
    })
  }


  goToAddPage(): void {
    this.router.navigate(['/forum','add-new'])
  }

}
