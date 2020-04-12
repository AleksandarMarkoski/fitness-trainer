import { Injectable } from '@angular/core';
import { ForumPostRequest, ForumPostUpdateRequest } from '../request/app.request';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ForumPostsResponse, ForumPostResponse } from '../responses/app.responses';

@Injectable({
  providedIn: 'root'
})
export class ForumApiService {

  public httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'});
  public url: string = 'http://localhost:8080/api/forum-posts';

  constructor(private http: HttpClient) { }

  public getAllForumPosts(): Observable<ForumPostsResponse>{
     return this.http.get<ForumPostsResponse>(this.url)
  }

  public getForumPostDetails(id: String): Observable<ForumPostResponse>{
    return this.http.get<ForumPostResponse>(`${this.url}/${id}`);
  }

  public createForumPost(post: ForumPostRequest): Observable<{ }> {
    return this.http.post<{ }>(`${this.url}/add-new`,JSON.stringify(post), {headers: this.httpHeaders} );
  }
  
  public updateForumPost(exercise: ForumPostUpdateRequest): Observable<{ }> {
    return this.http.post<{ }>(`${this.url}/update`, exercise);
  }

  public deteleForumPost(id: String): Observable<{ }> {
    return this.http.delete<{ }>(`${this.url}/delete/${id}`);
  }
}
